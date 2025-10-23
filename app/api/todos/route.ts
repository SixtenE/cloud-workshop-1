import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { Todo } from "@/lib/types";
import { createClient } from "redis";

export async function GET() {
  const redis = await createClient({ url: process.env.REDIS_URL }).connect();

  const keys = await redis.keys("*");

  const todos = await Promise.all(
    keys.map(async (key) => {
      const raw = await redis.get(key);
      if (!raw) return null;
      return JSON.parse(raw) as Todo;
    })
  );

  return NextResponse.json({ todos });
}

/*
export async function GET() {
  const todos = storage.getAll();

  return NextResponse.json({
    todos,
    warning: "These todos will disappear soon! (Serverless demo)",
  });
}
  */

export async function POST(request: NextRequest) {
  const redis = await createClient({ url: process.env.REDIS_URL }).connect();
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    //storage.add(newTodo);
    await redis.set(newTodo.id, JSON.stringify(newTodo));

    return NextResponse.json({ todo: newTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
