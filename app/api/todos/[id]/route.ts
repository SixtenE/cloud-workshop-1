import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: 'ID is required' },
      { status: 400 }
    );
  }

  storage.remove(id);

  return NextResponse.json({ success: true });
}
