import { NextRequest, NextResponse } from "next/server";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = "pub_b2f43e78-84b8-44a5-aca7-54f99d4831a0";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY ?? "";

async function storeInSupabase(email: string, source: string) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return;
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        email,
        subscribed_at: new Date().toISOString(),
        source,
      }),
    });
  } catch (err) {
    console.error("Supabase newsletter store error:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const referer = request.headers.get("referer") ?? "devlo.ch";
    const source = referer.includes("/insights") ? "insights" : "website";

    // Store in Supabase if configured
    if (SUPABASE_URL && SUPABASE_KEY) {
      await storeInSupabase(cleanEmail, source);
    }

    // If Beehiiv is configured, also subscribe there
    if (BEEHIIV_API_KEY) {
      const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${BEEHIIV_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: cleanEmail,
            reactivate_existing: true,
            send_welcome_email: true,
            utm_source: "devlo.ch",
            utm_medium: "website",
            referring_site: referer,
          }),
        }
      );

      if (!res.ok) {
        const errorBody = await res.text();
        console.error("Beehiiv API error:", res.status, errorBody);
        // Still return success since we stored in Supabase
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Utilisez POST avec {email: '...'}" },
    { status: 405 },
  );
}
