import { CLINIC } from "@/lib/site";

export default function TopBar({ left = "📍 Sonigara Landmark Complex, Wakad, Pune" }: { left?: string }) {
  return (
    <div className="topbar">
      <div className="wrap">
        <span className="hide-sm">{left}</span>
        <span>
          📞 <a href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phoneDisplay}</a>
        </span>
        {/* Filled in with today's hours by <SiteEffects /> */}
        <span className="hide-sm" id="todayHours">🕘 Open 7 days · Morning &amp; evening</span>
      </div>
    </div>
  );
}
