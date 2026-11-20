import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { CallLink, WhatsAppLink } from "@/components/ContactLinks";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  "title": "IV Therapy, Dietician & Weight Loss in Pune | Dr. Suraaj",
  "description": "Doctor-supervised IV therapy, dietician plans and medical weight loss in Wakad, serving Pune & Pimpri-Chinchwad: Hinjewadi, Baner, Ravet, Chinchwad and more.",
  "alternates": {
    "canonical": "/wellness/"
  },
  "openGraph": {
    "type": "website",
    "title": "Dr. Suraaj Wellness – IV Therapy, Nutrition & Weight Loss in Pune",
    "description": "Medically supervised wellness, prescribed by a registered physician. Wakad, serving Pune & Pimpri-Chinchwad.",
    "url": "/wellness/",
    "images": [{ "url": "/images/og-image.jpg", "width": 1200, "height": 630, "alt": "Dr. Suraaj Clinic & Advanced Wellness Center, Wakad, Pune" }]
  }
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.drsuraajclinic.com/wellness/#page",
      "url": "https://www.drsuraajclinic.com/wellness/",
      "name": "IV Therapy, Dietician & Weight Loss Clinic in Pune & Pimpri-Chinchwad",
      "description": "Physician-supervised IV therapy, dietician consultations, medical weight management and preventive health at Dr. Suraaj Clinic, Wakad, serving Pune and Pimpri-Chinchwad.",
      "inLanguage": "en-IN",
      "lastReviewed": "2026-11-16",
      "reviewedBy": {
        "@id": "https://www.drsuraajclinic.com/#doctor"
      },
      "about": {
        "@id": "https://www.drsuraajclinic.com/#clinic"
      },
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://www.drsuraajclinic.com/"
      }
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
          "name": "Wellness",
          "item": "https://www.drsuraajclinic.com/wellness/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Wellness services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#iv-hydration",
            "name": "IV Hydration & Recovery",
            "description": "Fluids and electrolytes to recover from fever, gastro infections, travel or heat exhaustion.",
            "url": "https://www.drsuraajclinic.com/wellness/#iv-hydration",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#iv-energy",
            "name": "Energy & Vitamin IV",
            "description": "B-complex, minerals and vitamins for fatigue linked to deficiency, prescribed after tests.",
            "url": "https://www.drsuraajclinic.com/wellness/#iv-energy",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#iv-immunity",
            "name": "Immunity Support IV",
            "description": "Vitamin C and zinc support during recovery from illness.",
            "url": "https://www.drsuraajclinic.com/wellness/#iv-immunity",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#iv-skin-hair",
            "name": "Skin & Hair Wellness IV",
            "description": "Antioxidant and nutrient support for skin, hair and nails, paired with diet and treatment of any deficiency.",
            "url": "https://www.drsuraajclinic.com/wellness/#iv-skin-hair",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#dietician",
            "name": "Dietician & Nutrition Plans",
            "description": "Personalised Indian diet plans for diabetes, thyroid, PCOS, gut health, cholesterol, pregnancy and families.",
            "url": "https://www.drsuraajclinic.com/wellness/#dietician",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#weight-loss",
            "name": "Medical Weight Management",
            "description": "Doctor-led weight loss: causes checked, body composition tracked, a plan you can sustain.",
            "url": "https://www.drsuraajclinic.com/wellness/#weight-loss",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "MedicalTherapy",
            "@id": "https://www.drsuraajclinic.com/wellness/#preventive",
            "name": "Preventive Health & Longevity",
            "description": "Health check-ups, metabolic risk screening and a long-term plan to stay well.",
            "url": "https://www.drsuraajclinic.com/wellness/#preventive",
            "provider": {
              "@id": "https://www.drsuraajclinic.com/#clinic"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Pimpri-Chinchwad"
              }
            ]
          }
        }
      ]
    },
    {
      "@type": [
        "MedicalClinic",
        "LocalBusiness"
      ],
      "@id": "https://www.drsuraajclinic.com/#clinic",
      "name": "Dr. Suraaj Clinic & Advanced Wellness Center",
      "url": "https://www.drsuraajclinic.com/",
      "telephone": "+91-9371710257",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Rd, Dynasty Society, Vishnu Dev Nagar",
        "addressLocality": "Wakad, Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Pune"
        },
        {
          "@type": "City",
          "name": "Pimpri-Chinchwad"
        },
        {
          "@type": "Place",
          "name": "Wakad"
        },
        {
          "@type": "Place",
          "name": "Hinjewadi"
        },
        {
          "@type": "Place",
          "name": "Baner"
        },
        {
          "@type": "Place",
          "name": "Balewadi"
        },
        {
          "@type": "Place",
          "name": "Aundh"
        },
        {
          "@type": "Place",
          "name": "Pashan"
        },
        {
          "@type": "Place",
          "name": "Sus"
        },
        {
          "@type": "Place",
          "name": "Bavdhan"
        },
        {
          "@type": "Place",
          "name": "Pimple Nilakh"
        },
        {
          "@type": "Place",
          "name": "Sangvi"
        },
        {
          "@type": "Place",
          "name": "Pimple Saudagar"
        },
        {
          "@type": "Place",
          "name": "Tathawade"
        },
        {
          "@type": "Place",
          "name": "Punawale"
        },
        {
          "@type": "Place",
          "name": "Ravet"
        },
        {
          "@type": "Place",
          "name": "Thergaon"
        },
        {
          "@type": "Place",
          "name": "Kalewadi"
        },
        {
          "@type": "Place",
          "name": "Rahatani"
        },
        {
          "@type": "Place",
          "name": "Pimpri"
        },
        {
          "@type": "Place",
          "name": "Chinchwad"
        },
        {
          "@type": "Place",
          "name": "Akurdi"
        },
        {
          "@type": "Place",
          "name": "Nigdi"
        },
        {
          "@type": "Place",
          "name": "Bhosari"
        },
        {
          "@type": "Place",
          "name": "Moshi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I get IV therapy in Pune or Pimpri-Chinchwad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Suraaj Clinic & Advanced Wellness Center in Wakad offers medically supervised IV therapy for patients from across Pune and Pimpri-Chinchwad, including Hinjewadi, Baner, Pimple Saudagar, Ravet and Chinchwad. Every drip is prescribed by a registered physician after a consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Is IV vitamin therapy safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IV therapy is generally safe when it is medically indicated, prescribed by a qualified doctor and given in a clinic with monitoring. It is not suitable for everyone, for example some people with heart or kidney disease, so we review your history, medicines and reports before recommending it."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a consultation before an IV drip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We never give a drip without a physician consultation. If your reports show a deficiency or dehydration, the doctor will explain whether an IV, tablets or diet changes are the better option."
          }
        },
        {
          "@type": "Question",
          "name": "Can IV drips make my skin fairer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We do not offer skin lightening. Our skin and hair drips support skin and hair health with nutrients and antioxidants, alongside diet and treatment of any underlying deficiency. Results vary from person to person."
          }
        },
        {
          "@type": "Question",
          "name": "What does a dietician consultation at the clinic include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A review of your health, reports and routine, followed by a personalised diet plan that fits Indian meals and your schedule, with regular follow-ups. Because a physician is involved, plans also account for diabetes, thyroid, PCOS, cholesterol or kidney conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How is medical weight loss different from a diet plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Medical weight management starts by checking for causes such as thyroid problems, insulin resistance or PCOS. The plan then combines nutrition, activity and, where appropriate, medicines prescribed by the doctor, with progress tracked over time."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer online diet and nutrition consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Online consultations start at ₹799, so patients anywhere in Pune and Pimpri-Chinchwad can start their nutrition plan from home. IV therapy needs a clinic visit."
          }
        },
        {
          "@type": "Question",
          "name": "What are the clinic timings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The clinic is open all 7 days: Monday to Friday 9:30 am to 12:30/1 pm and 6:30 pm to 9:30 pm; Saturday 9 am to 2 pm and 6:30 pm to 9:30 pm; Sunday 9 am to 2 pm and 6:30 pm to 10 pm. Timings can change on festivals, so please call +91 93717 10257 before visiting."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <PageShell nav={[{ href: "#services", label: "Wellness Services" }, { href: "#packages", label: "Packages" }, { href: "#safety", label: "Safety" }, { href: "#areas", label: "Areas We Serve" }, { href: "/blog/", label: "Blog" }, { href: "/", label: "Physician Care" }]} cta={{ href: "#book", label: "Book Assessment" }} topLeft="📍 Sonigara Landmark Complex, Wakad · Serving Pune & PCMC">
      <JsonLd data={schema} />
      <main>
        <section className="w-hero"><div className="wrap">
            <div className="reveal">
              <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> › Wellness</nav>
              <span className="eyebrow" style={{marginTop: 14}}>Dr. Suraaj Wellness · Pune &amp; Pimpri-Chinchwad</span>
              <h1>IV therapy, nutrition &amp; weight loss, <em>prescribed by a doctor.</em></h1>
              <p className="lead">Wellness treatments at our Wakad clinic start with a physician consultation and your reports, never a menu. Patients visit us from <mark className="hl">Hinjewadi, Baner, Pimple Saudagar, Ravet, Chinchwad and across Pune &amp; PCMC</mark>.</p>
              <div className="hero-cta" style={{display: 'flex', gap: 14, flexWrap: 'wrap', margin: '30px 0 0'}}>
                <a href="#book" className="btn btn-primary pulse">Book a Wellness Assessment</a>
                <a href="https://wa.me/919371710257?text=Hi%2C%20I%27d%20like%20to%20know%20about%20wellness%20services" className="btn btn-ghost" target="_blank" rel="noopener">WhatsApp Us</a>
              </div>
              <div className="promise stagger">
                <div><b>Doctor-prescribed</b>Every IV and plan by a registered physician</div>
                <div><b>Reports first</b>Tests guide what you actually need</div>
                <div><b>Monitored</b>Given in clinic, with follow-up</div>
              </div>
            </div>
            <div className="w-visual reveal">
              <div className="frame"><Image alt="Dr. Suraaj Gadiwadd, physician offering IV therapy and nutrition care in Wakad, Pune" src="/images/dr-suraaj-portrait.jpg" width={900} height={1200} priority /></div>
              <div className="badge-float bf-1"><i>✅</i><div>Registered with MCI<small>Reg. No. 14-52930</small></div></div>
              <div className="badge-float bf-2"><i>💻</i><div>Online nutrition consult<small>from ₹799</small></div></div>
            </div>
          </div></section>
        <section id="services"><div className="wrap">
            <div className="center reveal"><span className="eyebrow">Wellness services</span><br />
              <h2 className="uline">Medically supervised wellness in Wakad</h2>
              <p className="lead">Seven services, one principle: <mark className="hl">treat the cause, not just the symptom</mark>.</p></div>
            <div className="grid-services stagger"><article className="svc feature" id="iv-hydration"><div className="ic"><svg viewBox="0 0 24 24"><rect x={7} y={2} width={10} height={13} rx={2} /><path d="M12 15v4M12 19v3M7 9h10" /></svg></div><h3>IV Hydration &amp; Recovery</h3><p>Fluids and electrolytes after fever, gastro infections, travel or heat exhaustion.</p><ul><li>Rehydration after illness</li><li>Electrolyte balance</li><li>Monitored in clinic</li></ul><a className="card-cta" href="#book" data-service="IV Hydration & Recovery">Book this →</a></article><article className="svc feature" id="iv-energy"><div className="ic"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg></div><h3>Energy &amp; Vitamin IV</h3><p>For fatigue linked to a confirmed deficiency, prescribed after tests.</p><ul><li>B-complex &amp; minerals</li><li>Based on your reports</li><li>Paired with diet advice</li></ul><a className="card-cta" href="#book" data-service="Energy & Vitamin IV">Book this →</a></article><article className="svc feature" id="iv-immunity"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg></div><h3>Immunity Support IV</h3><p>Vitamin C and zinc support while you recover from illness.</p><ul><li>Post-viral recovery</li><li>Doctor-assessed suitability</li><li>Follow-up included</li></ul><a className="card-cta" href="#book" data-service="Immunity Support IV">Book this →</a></article><article className="svc feature" id="iv-skin-hair"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 15.2 7 18l1.2-5.6L4 8.6 9.6 8z" /></svg></div><h3>Skin &amp; Hair Wellness IV</h3><p>Antioxidant and nutrient support for skin, hair and nails, from within.</p><ul><li>Antioxidant (Vitamin C) drips</li><li>Hair &amp; nail nutrients</li><li>No skin-lightening claims</li></ul><a className="card-cta" href="#book" data-service="Skin & Hair Wellness IV">Book this →</a></article><article className="svc" id="dietician"><div className="ic"><svg viewBox="0 0 24 24"><path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15" /><path d="M5 19l8-8" /></svg></div><h3>Dietician &amp; Nutrition Plans</h3><p>Personalised Indian diet plans that fit your meals, reports and routine.</p><ul><li>Diabetes, thyroid &amp; PCOS diets</li><li>Gut health &amp; deficiencies</li><li>Online or in clinic</li></ul><a className="card-cta" href="#book" data-service="Dietician & Nutrition Plans">Book this →</a></article><article className="svc" id="weight-loss"><div className="ic"><svg viewBox="0 0 24 24"><path d="M4 20h16" /><path d="M7 20V10M12 20V6M17 20v-7" /></svg></div><h3>Medical Weight Management</h3><p>Doctor-led weight loss that looks for the cause first.</p><ul><li>Thyroid &amp; insulin checks</li><li>Body composition tracking</li><li>Medicines where appropriate</li></ul><a className="card-cta" href="#book" data-service="Medical Weight Management">Book this →</a></article><article className="svc" id="preventive"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /><path d="M8 11h2l1-2 2 4 1-2h2" /></svg></div><h3>Preventive Health &amp; Longevity</h3><p>Check-ups and metabolic screening to stay well for longer.</p><ul><li>Health check-up packages</li><li>Metabolic risk screening</li><li>Long-term wellness plan</li></ul><a className="card-cta" href="#book" data-service="Preventive Health & Longevity">Book this →</a></article></div>
          </div></section>
        <section className="journey"><div className="wrap">
            <div className="center reveal"><span className="eyebrow">How it works</span><br /><h2 className="uline">From assessment to results</h2></div>
            <div className="steps stagger">
              <div className="step"><h3>Assess</h3><p>Consultation with Dr. Suraaj: history, medicines, goals.</p></div>
              <div className="step"><h3>Test</h3><p>Blood tests where needed, collected at the clinic.</p></div>
              <div className="step"><h3>Plan</h3><p>Diet, IV or medicines, only what your results support.</p></div>
              <div className="step"><h3>Track</h3><p>Follow-ups to measure progress and adjust.</p></div>
            </div>
          </div></section>
        <section id="packages" className="packages"><div className="wrap">
            <div className="center reveal"><span className="eyebrow">Packages</span><br /><h2 className="uline">Ways to start</h2>
              <p className="lead">Final pricing is confirmed after your assessment, so you only pay for what you need.</p></div>
            {/* CLINIC: replace "Ask for price" with real prices / current offers before publishing. */}
            <div className="pkg-grid stagger">
              <div className="pkg"><h3>Wellness Assessment</h3><div className="price">Ask for price</div>
                <ul><li>Physician consultation</li><li>Review of reports &amp; medicines</li><li>Advice on tests needed</li><li>Personal wellness roadmap</li></ul>
                <a href="#book" className="btn btn-ghost" data-service="Wellness assessment">Book assessment</a></div>
              <div className="pkg best"><h3>Nutrition Programme</h3><div className="price">From ₹799 <small>online consult</small></div>
                <ul><li>Personalised Indian diet plan</li><li>Plan built around your reports</li><li>Regular follow-up reviews</li><li>In clinic or online</li></ul>
                <a href="#book" className="btn btn-primary" data-service="Dietician & nutrition plan">Start my plan</a></div>
              <div className="pkg"><h3>IV Therapy Session</h3><div className="price">Ask for price</div>
                <ul><li>Suitability check by the doctor</li><li>Drip chosen from your results</li><li>Given &amp; monitored in clinic</li><li>Diet advice to go with it</li></ul>
                <a href="#book" className="btn btn-ghost" data-service="IV therapy">Check suitability</a></div>
            </div>
          </div></section>
        <section id="safety" className="iv"><div className="wrap">
            <div className="reveal"><span className="eyebrow">Safety first</span>
              <h2>Why a doctor-led wellness clinic matters</h2>
              <p className="lead">IV therapy and diet changes affect your whole body. That's why every plan here is made by a <mark className="hl">registered physician with diabetes and endocrinology training</mark>.</p>
              <Link href="/#credentials" className="btn btn-gold" style={{marginTop: 24}}>View the doctor's credentials</Link></div>
            <ul className="safety-list stagger reveal">
              <li><i>01</i><span>No drip without a consultation and, where needed, blood tests.</span></li>
              <li><i>02</i><span>Heart, kidney and liver health checked before any IV.</span></li>
              <li><i>03</i><span>Drips given in the clinic with monitoring, never at a party or at home.</span></li>
              <li><i>04</i><span>If tablets or diet will do the job, we'll tell you, and skip the IV.</span></li>
            </ul>
          </div></section>
        <section id="areas" className="areas"><div className="wrap">
            <div className="reveal"><span className="eyebrow">Areas we serve</span>
              <h2>Serving Pune &amp; Pimpri-Chinchwad from Wakad</h2>
              <p className="lead">Our clinic is at Sonigara Landmark Complex, Chatrapati Chowk Road, Wakad, close to the Hinjewadi IT Park side of the city and easy to reach from both Pune and PCMC. Nutrition consultations are also available online across Pune.</p>
              <a className="btn btn-primary" style={{marginTop: 24}} href="https://www.google.com/maps/search/?api=1&query=Dr+Suraaj+Clinic,+Sonigara+Landmark+Complex,+Chatrapati+Chowk+Rd,+Wakad,+Pune+411057" target="_blank" rel="noopener">Get directions</a></div>
            <div className="reveal">
              <div className="area-group"><h3>Pimpri-Chinchwad (PCMC)</h3><div className="area-chips"><span>Pimple Saudagar</span><span>Tathawade</span><span>Punawale</span><span>Ravet</span><span>Thergaon</span><span>Kalewadi</span><span>Rahatani</span><span>Pimpri</span><span>Chinchwad</span><span>Akurdi</span><span>Nigdi</span><span>Bhosari</span><span>Moshi</span></div></div>
              <div className="area-group"><h3>Pune</h3><div className="area-chips"><span>Wakad</span><span>Hinjewadi</span><span>Baner</span><span>Balewadi</span><span>Aundh</span><span>Pashan</span><span>Sus</span><span>Bavdhan</span><span>Pimple Nilakh</span><span>Sangvi</span></div></div>
            </div>
          </div></section>
        <section id="faq" className="faq"><div className="wrap">
            <div className="reveal"><span className="eyebrow">FAQs</span><h2>Wellness questions, answered</h2>
              <p className="lead">Still unsure? Call <CallLink /> or <WhatsAppLink text="Hi, I have a question about wellness services">message us on WhatsApp</WhatsAppLink>.</p></div>
            <div className="reveal"><details open><summary>Where can I get IV therapy in Pune or Pimpri-Chinchwad?</summary><p>Dr. Suraaj Clinic &amp; Advanced Wellness Center in Wakad offers medically supervised IV therapy for patients from across Pune and Pimpri-Chinchwad, including Hinjewadi, Baner, Pimple Saudagar, Ravet and Chinchwad. Every drip is prescribed by a registered physician after a consultation.</p></details><details><summary>Is IV vitamin therapy safe?</summary><p>IV therapy is generally safe when it is medically indicated, prescribed by a qualified doctor and given in a clinic with monitoring. It is not suitable for everyone, for example some people with heart or kidney disease, so we review your history, medicines and reports before recommending it.</p></details><details><summary>Do I need a consultation before an IV drip?</summary><p>Yes. We never give a drip without a physician consultation. If your reports show a deficiency or dehydration, the doctor will explain whether an IV, tablets or diet changes are the better option.</p></details><details><summary>Can IV drips make my skin fairer?</summary><p>We do not offer skin lightening. Our skin and hair drips support skin and hair health with nutrients and antioxidants, alongside diet and treatment of any underlying deficiency. Results vary from person to person.</p></details><details><summary>What does a dietician consultation at the clinic include?</summary><p>A review of your health, reports and routine, followed by a personalised diet plan that fits Indian meals and your schedule, with regular follow-ups. Because a physician is involved, plans also account for diabetes, thyroid, PCOS, cholesterol or kidney conditions.</p></details><details><summary>How is medical weight loss different from a diet plan?</summary><p>Medical weight management starts by checking for causes such as thyroid problems, insulin resistance or PCOS. The plan then combines nutrition, activity and, where appropriate, medicines prescribed by the doctor, with progress tracked over time.</p></details><details><summary>Do you offer online diet and nutrition consultations?</summary><p>Yes. Online consultations start at ₹799, so patients anywhere in Pune and Pimpri-Chinchwad can start their nutrition plan from home. IV therapy needs a clinic visit.</p></details><details><summary>What are the clinic timings?</summary><p>The clinic is open all 7 days: Mon–Fri 9:30 am–12:30/1 pm &amp; 6:30–9:30 pm; Sat 9 am–2 pm &amp; 6:30–9:30 pm; Sun 9 am–2 pm &amp; 6:30–10 pm. Timings can change on festivals, so please call <CallLink /> before visiting.</p></details></div>
          </div></section>
        <section id="book" className="contact"><div className="wrap">
            <div className="reveal"><span className="eyebrow">Book</span><h2>Book your wellness assessment</h2>
              <p className="lead" style={{marginBottom: 24}}>Tell us what you'd like help with. We'll confirm a time on WhatsApp.</p>
              <div className="loc"><h3>📍 Clinic address</h3><p>Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Rd, Dynasty Society, Vishnu Dev Nagar, Wakad, Pune, Maharashtra 411057</p></div>
              <div className="loc"><h3>🕘 Timings</h3><p>Mon–Fri 9:30 am–12:30/1 pm &amp; 6:30–9:30 pm · Sat 9 am–2 pm &amp; 6:30–9:30 pm · Sun 9 am–2 pm &amp; 6:30–10 pm. <Link href="/#contact" style={{color: 'var(--gold)', fontWeight: 700}}>Full timetable →</Link></p></div></div>
            <BookingForm variant="wellness" />
          </div></section>
      </main>
    </PageShell>
  );
}
