import { NextResponse } from "next/server";
import { createClient } from "redis";

export async function GET() {
  const redis = await createClient({ url: process.env.REDIS_URL }).connect();
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "API is running (but storage is temporary!)",
    redisStatus: redis.isOpen ? "connected" : "disconnected",
  });
}
