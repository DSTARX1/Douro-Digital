import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { pageViews } from "@/lib/schema";

function parseUserAgent(ua: string) {
  let device = "desktop";
  if (/mobile|android|iphone|ipod/i.test(ua)) device = "mobile";
  else if (/tablet|ipad/i.test(ua)) device = "tablet";

  let browser = "other";
  if (/firefox/i.test(ua)) browser = "Firefox";
  else if (/edg/i.test(ua)) browser = "Edge";
  else if (/chrome|crios/i.test(ua)) browser = "Chrome";
  else if (/safari/i.test(ua)) browser = "Safari";

  return { device, browser };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, referrer, utmSource, utmMedium, utmCampaign } = body;

    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "path required" }, { status: 400 });
    }

    const ua = request.headers.get("user-agent") || "";
    const { device, browser } = parseUserAgent(ua);
    const country = request.headers.get("x-vercel-ip-country") || null;

    await db.insert(pageViews).values({
      path,
      referrer: referrer || null,
      utmSource: utmSource || null,
      utmMedium: utmMedium || null,
      utmCampaign: utmCampaign || null,
      country,
      device,
      browser,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "tracking failed" }, { status: 500 });
  }
}
