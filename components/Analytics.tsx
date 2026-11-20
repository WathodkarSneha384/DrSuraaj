"use client";

/**
 * Google Analytics 4 — switched on only when NEXT_PUBLIC_GA_ID is set (e.g. G-XXXXXXX).
 * Tracks the actions that matter for a clinic as GA4 events:
 *   click_call, click_whatsapp, click_directions, booking_form_submit
 * Mark these as "key events" in GA4 to measure calls/bookings from each page and ad.
 */
import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", event, { page_path: location.pathname, ...params });
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const label = (a.textContent || "").trim().slice(0, 60);
      if (href.startsWith("tel:")) track("click_call", { link_text: label });
      else if (href.includes("wa.me/")) track("click_whatsapp", { link_text: label });
      else if (href.includes("google.com/maps")) track("click_directions", { link_text: label });
    };
    const onSubmit = (e: Event) => {
      if ((e.target as HTMLElement).matches("form.book")) track("booking_form_submit");
    };
    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
