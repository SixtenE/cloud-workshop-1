import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';
import { Todo } from '@/lib/types';

export async function GET() {
  const todos = storage.getAll();

  return NextResponse.json({
    todos,
    warning: 'These todos will disappear soon! (Serverless demo)'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    storage.add(newTodo);

    return NextResponse.json({ todo: newTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
