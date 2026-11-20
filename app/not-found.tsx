import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Page not found | Dr. Suraaj Clinic", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <PageShell>
      <section className="center" style={{ padding: "120px 0" }}>
        <div className="wrap">
          <h1 style={{ fontSize: 48 }}>Page not found</h1>
          <p className="lead" style={{ margin: "12px auto 28px" }}>The page you were looking for has moved or doesn&apos;t exist.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary">Back to home</Link>
            <Link href="/wellness/" className="btn btn-ghost">Wellness services</Link>
            <Link href="/blog/" className="btn btn-ghost">Health blog</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
