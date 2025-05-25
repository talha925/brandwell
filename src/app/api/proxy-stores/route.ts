// ✅ FILE: src/app/api/proxy-stores/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://coupon-app-backend.vercel.app/api/stores", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // live data every time
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch data from backend" }, { status: 500 });
  }
}