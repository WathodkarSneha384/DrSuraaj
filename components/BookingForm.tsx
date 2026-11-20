"use client";

import { FormEvent, useEffect, useState } from "react";
import { CLINIC } from "@/lib/site";

const HOME_SERVICES = [
  "General physician consultation",
  "Diabetes / metabolic health",
  "Dietician & nutrition plan",
  "Weight management",
  "IV nutritional therapy",
  "IV skin & hair wellness",
  "Online consultation",
];

const WELLNESS_SERVICES = [
  "Wellness assessment",
  "IV Hydration & Recovery",
  "Energy & Vitamin IV",
  "Immunity Support IV",
  "Skin & Hair Wellness IV",
  "Dietician & Nutrition Plans",
  "Medical Weight Management",
  "Preventive Health & Longevity",
  "Online nutrition consultation",
];

function openWhatsApp(lines: string[]) {
  window.open(`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
}

export default function BookingForm({ variant }: { variant: "home" | "wellness" | string }) {
  const wellness = variant === "wellness";
  const services = wellness ? WELLNESS_SERVICES : HOME_SERVICES;
  const [service, setService] = useState(services[0]);

  // Wellness page: "Book this →" buttons (data-service) pre-select the matching service.
  useEffect(() => {
    if (!wellness) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-service]");
      if (!el) return;
      const words = (el.dataset.service || "").toLowerCase().split(" ");
      const first = words[0], last = words[words.length - 1];
      const match =
        WELLNESS_SERVICES.find((s) => s.toLowerCase().includes(first) && s.toLowerCase().includes(last)) ||
        WELLNESS_SERVICES.find((s) => s.toLowerCase().includes(first));
      if (match) setService(match);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [wellness]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) || "").trim();
    if (wellness) {
      openWhatsApp([
        "Hello Dr. Suraaj Clinic, wellness enquiry.",
        `Name: ${v("name")}`,
        `Phone: ${v("phone")}`,
        `Interested in: ${service}`,
        `Area: ${v("area") || "-"}`,
        "Source: wellness page",
      ]);
    } else {
      openWhatsApp([
        "Hello Dr. Suraaj Clinic, I'd like to book an appointment.",
        `Name: ${v("name")}`,
        `Phone: ${v("phone")}`,
        `Service: ${service}`,
        `Location: ${v("loc")}`,
        `Date: ${v("date") || "Any"}`,
      ]);
    }
  };

  return (
    <form className="book reveal" onSubmit={onSubmit}>
      <h3>{wellness ? "Wellness enquiry" : "Request an appointment"}</h3>
      {!wellness && (
        <p style={{ color: "#cfded5", fontSize: 14, marginTop: -6 }}>We&apos;ll confirm your slot on WhatsApp.</p>
      )}
      <div className="row2">
        <label>
          Name
          <input name="name" required placeholder="Your full name" autoComplete="name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required placeholder="10-digit mobile" autoComplete="tel" />
        </label>
      </div>
      <label>
        {wellness ? "I'm interested in" : "Service"}
        <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      {wellness ? (
        <label>
          Area you live in
          <input name="area" placeholder="e.g. Hinjewadi, Chinchwad, Baner" />
        </label>
      ) : (
        <div className="row2">
          <label>
            Location
            <select name="loc" defaultValue="Wakad clinic">
              <option>Wakad clinic</option>
              <option>Online consultation</option>
            </select>
          </label>
          <label>
            Preferred date
            <input name="date" type="date" />
          </label>
        </div>
      )}
      <button className="btn btn-gold" type="submit" style={{ justifyContent: "center", marginTop: 6 }}>
        {wellness ? "Send on WhatsApp" : "Send request on WhatsApp"}
      </button>
    </form>
  );
}
