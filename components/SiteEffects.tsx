"use client";

/**
 * Page animations and small behaviours ported from the original HTML design:
 * scroll reveals, marker highlights, counters, progress bar, active nav link,
 * "today" opening hours + open/closed badge, certificate lightbox, blog filters,
 * article table-of-contents highlight, and tap-highlight on touch screens.
 * Pages stay fully server-rendered (good for SEO); this only enhances them.
 */
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HOURS, HOURS_DISPLAY, toMinutes } from "@/lib/site";

const fmt = (x: number) => {
  let h = Math.floor(x / 60);
  const m = x % 60;
  const ap = h < 12 ? "am" : "pm";
  h = h % 12 || 12;
  return `${h}${m ? ":" + String(m).padStart(2, "0") : ""} ${ap}`;
};

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Reveal on scroll (sections, staggered groups, highlights, underlines)
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal,.stagger,.hl,h2.uline").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // 2. Animated counters
    const co = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        if (reduced) return;
        const el = e.target as HTMLElement, end = Number(el.dataset.count), suf = el.dataset.suffix || "";
        const t0 = performance.now(), d = 1400;
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / d);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => co.observe(el));
    cleanups.push(() => co.disconnect());

    // 3. Scroll progress bar
    const bar = document.getElementById("progress");
    const onScroll = () => {
      const h = document.documentElement;
      if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));

    // 4. Highlight the nav link (or article TOC link) for the section on screen
    const watch = (selector: string, margin: string) => {
      const links = [...document.querySelectorAll<HTMLAnchorElement>(selector)];
      const so = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        }),
        { rootMargin: margin }
      );
      links.forEach((a) => { const s = document.getElementById((a.getAttribute("href") || "").slice(1)); if (s) so.observe(s); });
      cleanups.push(() => so.disconnect());
    };
    watch('#menu a[href^="#"]', "-45% 0px -50% 0px");
    watch('.toc a[href^="#"]', "-20% 0px -70% 0px");

    // 5. Touch screens: highlight the card in the middle of the screen
    if (matchMedia("(hover: none)").matches) {
      const ao = new IntersectionObserver(
        (es) => es.forEach((e) => e.target.classList.toggle("active", e.isIntersecting)),
        { rootMargin: "-40% 0px -40% 0px" }
      );
      document.querySelectorAll(".svc,.step,.drip,.benefit,.cert,.pkg").forEach((el) => ao.observe(el));
      cleanups.push(() => ao.disconnect());
    }

    // 6. Today's hours + Open / Closed badge (clinic time, IST)
    const ist = new Date(Date.now() + (new Date().getTimezoneOffset() + 330) * 60000);
    const day = (ist.getDay() + 6) % 7, mins = ist.getHours() * 60 + ist.getMinutes();
    const today = HOURS[day].slots.map(([o, c]) => [toMinutes(o), toMinutes(c)]);
    document.querySelector(`table.hours tr[data-day="${day}"], table.hours tr[data-days~="${day}"]`)?.classList.add("today");
    const isOpen = today.some(([o, c]) => mins >= o && mins < c);
    const badge = document.getElementById("openBadge");
    if (badge) { badge.textContent = isOpen ? "Open now" : "Closed now"; badge.classList.add(isOpen ? "open" : "closed"); }
    const th = document.getElementById("todayHours");
    // Show today's hours exactly as written in HOURS_DISPLAY (e.g. "9:30 am – 12:30 / 1 pm")
    const g = HOURS_DISPLAY.find((x) => x.days.includes(day));
    const todayText = g ? `${g.morning}  ·  ${g.evening}` : today.map(([o, c]) => fmt(o) + " – " + fmt(c)).join("  ·  ");
    if (th) th.textContent = "🕘 Today: " + todayText.replace(/\s+·\s+/, ", ");
    document.querySelectorAll<HTMLElement>("[data-today-hours]").forEach((el) => (el.textContent = todayText));

    // 7. Certificate lightbox
    const lb = document.getElementById("lightbox");
    if (lb) {
      const img = lb.querySelector("img") as HTMLImageElement;
      const openCert = (e: Event) => {
        const c = (e.target as HTMLElement).closest<HTMLElement>(".cert");
        if (!c) return;
        img.src = c.dataset.full || "";
        img.alt = c.querySelector("img")?.alt || "";
        lb.classList.add("open");
      };
      const closeLb = (e: Event) => { if (e.target !== img) lb.classList.remove("open"); };
      const esc = (e: KeyboardEvent) => { if (e.key === "Escape") lb.classList.remove("open"); };
      document.addEventListener("click", openCert);
      lb.addEventListener("click", closeLb);
      addEventListener("keydown", esc);
      cleanups.push(() => { document.removeEventListener("click", openCert); lb.removeEventListener("click", closeLb); removeEventListener("keydown", esc); });
    }

    // 8. Blog topic filters
    const chips = [...document.querySelectorAll<HTMLButtonElement>(".chip[data-f]")];
    const onChip = (c: HTMLButtonElement) => () => {
      chips.forEach((x) => x.classList.toggle("on", x === c));
      const f = c.dataset.f;
      let shown = 0;
      document.querySelectorAll<HTMLElement>(".feat,.post").forEach((p) => {
        const ok = f === "all" || p.dataset.cat === f;
        p.classList.toggle("hide", !ok);
        if (ok) shown++;
      });
      document.querySelectorAll<HTMLElement>(".soon").forEach((p) => p.classList.toggle("hide", !(f === "all" || p.dataset.cat === f)));
      document.querySelector(".empty-msg")?.classList.toggle("hide", shown > 0);
    };
    chips.forEach((c) => { const h = onChip(c); c.addEventListener("click", h); cleanups.push(() => c.removeEventListener("click", h)); });

    // 9. Arriving from an ad link like /wellness/#iv-skin-hair: highlight that card
    if (location.hash) {
      const t = document.getElementById(location.hash.slice(1));
      if (t?.classList.contains("svc")) t.classList.add("active");
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return <div className="progress" id="progress" aria-hidden="true" />;
}
