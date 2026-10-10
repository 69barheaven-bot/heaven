"use client";

import { FormEvent, useState } from "react";
import { sections } from "@/data/content";
import { mapActionUrl, siteConfig } from "@/data/siteConfig";
import Section from "./Section";

const inquiryTypes = [
  ["reservation", "Reservation / ご予約"],
  ["song-request", "Song Request / 曲のリクエスト"],
  ["birthday", "Birthday / バースデー・お祝い"],
  ["private-party", "Private Party / 貸切・イベント"],
  ["other", "Other / その他"],
] as const;

export default function Contact() {
  const content = sections.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("reservation");
  const visitDetailsRequired = inquiryType !== "song-request" && inquiryType !== "other";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "送信に失敗しました。");
      setStatus("success");
      setMessage("送信しました。Heavenからの返信をお待ちください。 / Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。");
    }
  }

  return (
    <Section
      id="reservation-contact"
      eyebrow={content.eyebrow}
      title={content.title}
      titleJa={content.titleJa}
      className="bg-heaven-panel pb-28"
    >
      <div className="mb-8 max-w-3xl space-y-2 text-heaven-muted">
        <p>ご予約・お問い合わせは下記フォームから承ります。<br />お急ぎの場合は営業時間中（20:00–5:00）にお電話ください。</p>
        <p>Reservations and inquiries can be sent using the form below.<br />For urgent inquiries, please call us during opening hours (20:00–5:00).</p>
      </div>
      <form className="mb-10 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="form-field">お名前 / Name<input name="name" required maxLength={100} autoComplete="name" /></label>
        <label className="form-field">メールアドレス / Email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
        <label className="form-field">電話番号 / Phone（任意）<input name="phone" type="tel" maxLength={30} autoComplete="tel" /></label>
        <label className="form-field">お問い合わせ種別 / Inquiry Type<select name="inquiryType" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)} required>{inquiryTypes.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        <label className="form-field">来店日 / Date<input name="date" type="date" required={visitDetailsRequired} /></label>
        <label className="form-field">来店時間 / Time<input name="time" type="time" required={visitDetailsRequired} /></label>
        <label className="form-field">人数 / Guests<input name="guests" type="number" min="1" max="100" inputMode="numeric" required={visitDetailsRequired} /></label>
        <label className="form-field md:col-span-2">メッセージ / Message<textarea name="message" required maxLength={2000} rows={6} /></label>
        <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="md:col-span-2 space-y-3">
          <p className="text-sm leading-6 text-heaven-muted">ご予約は、店舗からの返信をもって確定となります。<br />Reservations are confirmed only after you receive a reply from Heaven.</p>
          <button className="button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "SENDING…" : "SEND TO HEAVEN / 送信する"}</button>
          {message ? <p className={status === "error" ? "text-sm text-red-300" : "text-sm text-heaven-amber"} role="status">{message}</p> : null}
        </div>
      </form>
      <div className="grid gap-3 sm:grid-cols-3">
        <a className="contact-card" href={siteConfig.phoneHref}>
          <span>Phone</span>
          <strong>{siteConfig.phone}</strong>
        </a>
        <a className="contact-card" href={mapActionUrl}>
          <span>Google Map</span>
          <strong>Get Directions</strong>
        </a>
        <a className="contact-card" href={siteConfig.instagramUrl}>
          <span>Instagram</span>
          <strong>{siteConfig.instagramHandle}</strong>
        </a>
      </div>
    </Section>
  );
}
