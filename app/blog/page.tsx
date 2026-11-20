import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  "title": "Health Blog: Diabetes, Nutrition & Wellness | Dr. Suraaj",
  "description": "Doctor-written articles on diabetes, vitamins, gut health and wellness from Dr. Suraaj Clinic, Wakad, for patients across Pune and Pimpri-Chinchwad.",
  "alternates": {
    "canonical": "/blog/"
  },
  "openGraph": {
    "type": "website",
    "title": "Health Library – Dr. Suraaj Clinic",
    "description": "Doctor-written articles on diabetes, nutrition, gut health and wellness.",
    "url": "/blog/",
    "images": [{ "url": "/images/og-image.jpg", "width": 1200, "height": 630, "alt": "Dr. Suraaj Clinic & Advanced Wellness Center, Wakad, Pune" }]
  }
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.drsuraajclinic.com/blog/#blog",
      "url": "https://www.drsuraajclinic.com/blog/",
      "name": "Health Library – Dr. Suraaj Clinic",
      "description": "Doctor-written articles on diabetes, metabolic health, nutrition, gut health and wellness from Dr. Suraaj Clinic, Wakad, Pune.",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.drsuraajclinic.com/#clinic"
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Type 2 Diabetes: Symptoms, Causes, Diagnosis, Treatment & Long-Term Management",
          "url": "https://www.drsuraajclinic.com/type-2-diabetes-symptoms-treatment/",
          "datePublished": "2026-11-02",
          "author": {
            "@type": "Person",
            "name": "Dr. Suraaj Gadiwadd"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "Unlocking the Power of Zinc: The Unsung Hero of Your Health",
          "url": "https://www.drsuraajclinic.com/unlocking-the-power-of-zinc-the-unsung-hero-of-your-health/",
          "datePublished": "2024-10-14",
          "author": {
            "@type": "Organization",
            "name": "Dr. Suraaj Clinic"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "Vitamin C: The Essential Nutrient for Immunity, Heart Health and Beyond",
          "url": "https://www.drsuraajclinic.com/vitamin-c-the-nutrient/",
          "datePublished": "2024-10-14",
          "author": {
            "@type": "Organization",
            "name": "Dr. Suraaj Clinic"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "The Unsung Hero: Magnesium's Role in Our Body",
          "url": "https://www.drsuraajclinic.com/the-unsung-hero-magnesiums-wicked-role-in-our-body/",
          "datePublished": "2024-10-14",
          "author": {
            "@type": "Organization",
            "name": "Dr. Suraaj Clinic"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "The Epic Journey of Lactobacillus Reuteri: Your Gut's Superhero",
          "url": "https://www.drsuraajclinic.com/the-epic-journey-of-lactobacillus-reuteri-your-guts-superhero/",
          "datePublished": "2024-10-14",
          "author": {
            "@type": "Organization",
            "name": "Dr. Suraaj Clinic"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.drsuraajclinic.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Health Library",
          "item": "https://www.drsuraajclinic.com/blog/"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={schema} />
      <main>
        <section className="b-hero"><div className="wrap reveal">
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> › Health Library</nav>
            <span className="eyebrow" style={{marginTop: 14}}>Health Library</span>
            <h1>Learn from Dr. Suraaj</h1>
            <p className="lead">Clear, evidence-based articles on diabetes, nutrition, gut health and wellness, written for patients in Pune and Pimpri-Chinchwad.</p>
            <div className="chips"><button className="chip on" data-f="all">All articles</button><button className="chip" data-f="diabetes">Diabetes &amp; Metabolic</button><button className="chip" data-f="nutrition">Vitamins &amp; Nutrition</button><button className="chip" data-f="gut">Gut Health</button><button className="chip" data-f="wellness">Wellness</button></div>
          </div></section>
        <section className="b-main"><div className="wrap">
            <Link className="feat reveal" href="/type-2-diabetes-symptoms-treatment/" data-cat="diabetes">
              <div className="fb"><small>Diabetes &amp; Metabolic Health</small><span className="badge-new">New</span>
                <h2>Type 2 Diabetes: Symptoms, Causes, Diagnosis, Treatment &amp; Long-Term Management</h2><p>Early signs, HbA1c ranges, medicines, the Indian diabetes plate and whether diabetes can go into remission.</p>
                <div className="author"><Image alt="" src="/images/dr-suraaj-square.jpg" width={44} height={44} /><span>By <b style={{color: 'var(--green-900)'}}>Dr. Suraaj Gadiwadd</b> · 2 Nov 2026 · 15 min read</span></div>
                <span className="btn btn-primary" style={{marginTop: 22}}>Read the article →</span></div>
              <div className="fa" aria-hidden="true"><div style={{fontFamily: 'var(--serif)', fontSize: 26, marginBottom: 6}}>Know your numbers</div>
                <div className="stat-row"><span>HbA1c – normal</span><b>below 5.7%</b></div><div className="stat-row"><span>HbA1c – prediabetes</span><b>5.7 – 6.4%</b></div>
                <div className="stat-row"><span>HbA1c – diabetes</span><b>6.5% or above</b></div><div className="stat-row"><span>Fasting glucose – diabetes</span><b>126 mg/dL or above</b></div></div>
            </Link>
            <div className="posts stagger"><a className="post" href="https://www.drsuraajclinic.com/unlocking-the-power-of-zinc-the-unsung-hero-of-your-health/" data-cat="nutrition"><div className="post-art art-nutrition"><svg viewBox="0 0 24 24" aria-hidden="true"><text x={12} y={16} textAnchor="middle" fontSize={9} fontWeight={700} stroke="none" fill="currentColor">Zn</text><circle cx={12} cy={12} r={9} /></svg></div>
                <div className="post-body"><small>Vitamins &amp; Minerals</small><h3>Unlocking the Power of Zinc: The Unsung Hero of Your Health</h3><p>Why zinc matters for immunity, wound healing, skin and healthy ageing, and where to get it in your diet.</p><span className="meta">14 Oct 2024</span></div></a><a className="post" href="https://www.drsuraajclinic.com/vitamin-c-the-nutrient/" data-cat="nutrition"><div className="post-art art-nutrition"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx={12} cy={12} r={8} /><path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" /></svg></div>
                <div className="post-body"><small>Vitamins &amp; Minerals</small><h3>Vitamin C: The Essential Nutrient for Immunity, Heart Health and Beyond</h3><p>Vitamin C's role in immunity, iron absorption, collagen and heart health, plus the best food sources.</p><span className="meta">14 Oct 2024</span></div></a><a className="post" href="https://www.drsuraajclinic.com/the-unsung-hero-magnesiums-wicked-role-in-our-body/" data-cat="nutrition"><div className="post-art art-nutrition"><svg viewBox="0 0 24 24" aria-hidden="true"><text x={12} y={16} textAnchor="middle" fontSize={9} fontWeight={700} stroke="none" fill="currentColor">Mg</text><circle cx={12} cy={12} r={9} /></svg></div>
                <div className="post-body"><small>Vitamins &amp; Minerals</small><h3>The Unsung Hero: Magnesium's Role in Our Body</h3><p>How magnesium supports muscles, heart rhythm, sleep and blood sugar, and how its supplement forms differ.</p><span className="meta">14 Oct 2024</span></div></a><a className="post" href="https://www.drsuraajclinic.com/the-epic-journey-of-lactobacillus-reuteri-your-guts-superhero/" data-cat="gut"><div className="post-art art-gut"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4c-3 0-4 3-2 5s6 1 6 4-5 2-5 5 4 3 6 1" /><path d="M16 4c2 1 3 3 2 5" /></svg></div>
                <div className="post-body"><small>Gut Health</small><h3>The Epic Journey of Lactobacillus Reuteri: Your Gut's Superhero</h3><p>What this probiotic does for digestion, immunity and skin, and how to get it.</p><span className="meta">14 Oct 2024</span></div></a></div>
            <p className="empty-msg hide" style={{marginTop: 24, color: 'var(--muted)'}}>No published articles in this topic yet. See what's coming below.</p>
            <div className="soon-wrap reveal"><h2>Coming next</h2><p className="lead">New articles from Dr. Suraaj every one to two weeks.</p><div className="soon-grid"><div className="soon" data-cat="diabetes"><span>Coming soon</span>Fatty liver (MASLD): causes, grades &amp; reversal</div><div className="soon" data-cat="diabetes"><span>Coming soon</span>Insulin resistance: signs and tests</div><div className="soon" data-cat="nutrition"><span>Coming soon</span>Indian diabetes diet: a 7-day plan</div><div className="soon" data-cat="wellness"><span>Coming soon</span>IV therapy: who it helps and who should avoid it</div><div className="soon" data-cat="nutrition"><span>Coming soon</span>Vitamin B12 &amp; D deficiency in Pune's IT workforce</div><div className="soon" data-cat="wellness"><span>Coming soon</span>PCOS and weight: a doctor-led approach</div><div className="soon" data-cat="diabetes"><span>Coming soon</span>Thyroid problems and weight gain</div><div className="soon" data-cat="wellness"><span>Coming soon</span>Hair fall: nutrition and deficiency causes</div></div></div>
            <div className="sub reveal"><div><h3>Have a question about your health?</h3><p>Consult Dr. Suraaj in Wakad, or online from anywhere in Pune.</p></div>
              <a className="btn btn-gold" href="https://wa.me/919371710257?text=Hi%2C%20I%20read%20your%20health%20article%20and%20would%20like%20a%20consultation" target="_blank" rel="noopener">Ask on WhatsApp</a></div>
          </div></section>
      </main>
    </PageShell>
  );
}
