import { NextResponse } from "next/server";

const allowedInquiryTypes = new Set(["reservation", "song-request", "birthday", "private-party", "other"]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 100)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 100);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 30);
    const inquiryType = clean(body.inquiryType, 30);
    const date = clean(body.date, 20);
    const time = clean(body.time, 20);
    const guests = clean(body.guests, 3);
    const message = clean(body.message, 2000);
    const visitDetailsRequired = inquiryType !== "song-request" && inquiryType !== "other";

    if (!name || !email || !message || !allowedInquiryTypes.has(inquiryType) || (visitDetailsRequired && (!date || !time || !guests))) {
      return NextResponse.json({ error: "必須項目を入力してください。" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "メールアドレスを確認してください。" }, { status: 400 });
    }
    if (guests && (!/^\d+$/.test(guests) || Number(guests) < 1 || Number(guests) > 100)) {
      return NextResponse.json({ error: "人数を確認してください。" }, { status: 400 });
    }

    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    const sharedToken = process.env.CONTACT_SHARED_TOKEN;
    if (!appsScriptUrl || !sharedToken) {
      return NextResponse.json({ error: "送信設定が未完了です。店舗へお電話ください。" }, { status: 503 });
    }

    const inquiryLabel = { reservation: "Reservation / ご予約", "song-request": "Song Request / 曲のリクエスト", birthday: "Birthday / バースデー・お祝い", "private-party": "Private Party / 貸切・イベント", other: "Other / その他" }[inquiryType as "reservation" | "song-request" | "birthday" | "private-party" | "other"];
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sharedToken,
        name,
        email,
        phone,
        inquiryType: inquiryLabel,
        date,
        time,
        guests,
        message,
      }),
    });
    if (!response.ok) return NextResponse.json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }
}
