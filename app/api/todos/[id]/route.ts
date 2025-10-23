import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { createClient } from "redis";

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
