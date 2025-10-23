import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { createClient } from "redis";
import { Todo } from "@/lib/types";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const redis = await createClient({ url: process.env.REDIS_URL }).connect();
  //storage.remove(id);
  await redis.del(id);

  return NextResponse.json({ success: true });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const redis = await createClient({ url: process.env.REDIS_URL }).connect();
  const todoString = await redis.get(id);
  const existingTodo: Todo | null = todoString ? JSON.parse(todoString) : null;

  if (!existingTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const newTodo: Todo = { ...existingTodo, completed: !existingTodo.completed };

  await redis.set(id, JSON.stringify(newTodo));

  return NextResponse.json(newTodo);
}
