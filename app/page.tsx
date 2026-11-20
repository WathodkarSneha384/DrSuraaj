import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CallLink, WhatsAppLink } from "@/components/ContactLinks";
import JsonLd from "@/components/JsonLd";
import VisitUs from "@/components/VisitUs";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  "title": "Dr. Suraaj Clinic Wakad | Physician, Dietician & IV Therapy",
  "description": "Physician-led clinic in Wakad, Pune, open 7 days: general medicine, diabetes care, dietician, weight management and supervised IV therapy. Book on WhatsApp.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "type": "website",
    "title": "Dr. Suraaj Clinic & Advanced Wellness Center, Wakad, Pune",
    "description": "Physician consultations, diabetes care, diet & nutrition, and medically supervised IV therapy, all under one physician.",
    "url": "/",
    "images": [{ "url": "/images/og-image.jpg", "width": 1200, "height": 630, "alt": "Dr. Suraaj Clinic & Advanced Wellness Center, Wakad, Pune" }]
  }
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "MedicalClinic",
        "LocalBusiness"
      ],
      "@id": "https://www.drsuraajclinic.com/#clinic",
      "name": "Dr. Suraaj Clinic & Advanced Wellness Center",
      "alternateName": [
        "Dr Suraj Clinic",
        "Dr Suraaj Clinic Wakad"
      ],
      "url": "https://www.drsuraajclinic.com/",
      "logo": "https://www.drsuraajclinic.com/images/logo.png",
      "image": "https://www.drsuraajclinic.com/images/og-image.jpg",
      "telephone": "+91-9371710257",
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Dr+Suraaj+Clinic,+Sonigara+Landmark+Complex,+Chatrapati+Chowk+Rd,+Wakad,+Pune+411057",
      "email": "info@drsuraajclinic.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Rd, Dynasty Society, Vishnu Dev Nagar",
        "addressLocality": "Wakad, Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Wakad",
        "Pimple Saudagar",
        "Hinjewadi",
        "Pimple Nilakh",
        "Tathawade",
        "Ravet",
        "Baner",
        "Pimpri-Chinchwad"
      ],
      "medicalSpecialty": [
        "PrimaryCare",
        "Endocrine",
        "DietNutrition"
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "General physician consultation"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Treatment of fever, viral and bacterial infections"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Hypertension (high blood pressure) management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Thyroid disorder management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Gastrointestinal disease treatment"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Diabetes and metabolic health management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Personalised diet and nutrition planning"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Medical weight management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Medically supervised IV nutritional therapy"
        },
        {
          "@type": "MedicalTherapy",
          "name": "IV skin and hair wellness therapy"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Preventive health check-up and longevity assessment"
        },
        {
          "@type": "MedicalTest",
          "name": "Blood test sample collection"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:30",
          "closes": "13:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "18:30",
          "closes": "21:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "18:30",
          "closes": "21:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "18:30",
          "closes": "22:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/people/Drsuraaj-clinic/61553472147445/",
        "https://www.instagram.com/dr.suraajgadiwadd5/"
      ],
      "employee": {
        "@id": "https://www.drsuraajclinic.com/#doctor"
      }
    },
    {
      "@type": "Physician",
      "@id": "https://www.drsuraajclinic.com/#doctor",
      "name": "Dr. Suraaj M. Gadiwadd",
      "description": "Physician (M.D., General Medicine, Kazan State Medical University, 2009; Medical Council of India Reg. No. 14-52930) with a Post Graduate Diploma in Clinical Endocrinology & Diabetes and 14+ years of clinical experience.",
      "image": "https://www.drsuraajclinic.com/images/dr-suraaj-portrait.jpg",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Kazan State Medical University"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "M.D. (General Medicine) – Doctor of Medicine",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Kazan State Medical University"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Medical Council of India Registration No. 14-52930",
          "credentialCategory": "license",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Medical Council of India"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Post Graduate Diploma in Clinical Endocrinology & Diabetes (EACME, 2020–21)",
          "credentialCategory": "certificate"
        }
      ],
      "medicalSpecialty": [
        "PrimaryCare",
        "Endocrine"
      ],
      "worksFor": {
        "@id": "https://www.drsuraajclinic.com/#clinic"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should I see a general physician?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See a general physician for fever, infections, cough and cold, stomach problems, body aches, and for ongoing conditions like blood pressure, diabetes and thyroid. A physician is also the right first stop for health check-ups and when you're unsure which specialist you need."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a doctor-led dietician and nutrition clinic in Wakad, Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Suraaj Clinic & Advanced Wellness Center in Wakad offers personalised diet and nutrition plans designed alongside a registered physician, so your blood reports, medicines and conditions like diabetes or thyroid are considered in your plan."
          }
        },
        {
          "@type": "Question",
          "name": "What is IV nutritional therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IV nutritional therapy delivers fluids, vitamins and minerals directly into the bloodstream through a drip. At our clinic every IV is prescribed only after a physician consultation and relevant tests, and is given under medical supervision."
          }
        },
        {
          "@type": "Question",
          "name": "Is IV therapy safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IV therapy is generally safe when it is medically indicated, prescribed by a qualified doctor and administered in a clinical setting. It is not suitable for everyone, which is why we assess your history, medicines and reports before recommending it."
          }
        },
        {
          "@type": "Question",
          "name": "Do you treat diabetes and help with weight loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Suraaj is a physician with a Post Graduate Diploma in Clinical Endocrinology & Diabetes. We manage diabetes, pre-diabetes, blood pressure, cholesterol and weight with medication where needed plus nutrition and lifestyle plans."
          }
        },
        {
          "@type": "Question",
          "name": "Can I consult Dr. Suraaj online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Private online video consultations start at ₹799. You can book by phone or WhatsApp on +91 93717 10257."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the clinic located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Suraaj Clinic is at Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Road, Vishnu Dev Nagar, Wakad, Pune 411057. We see patients from Wakad, Pimple Saudagar, Hinjewadi, Tathawade, Ravet and Pimple Nilakh."
          }
        },
        {
          "@type": "Question",
          "name": "What are the clinic timings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The clinic is open all 7 days. Monday to Friday: 9:30 am to 12:30/1 pm and 6:30 pm to 9:30 pm. Saturday: 9 am to 2 pm and 6:30 pm to 9:30 pm. Sunday: 9 am to 2 pm and 6:30 pm to 10 pm. Timings may change on festivals, so please call +91 93717 10257 before visiting."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <PageShell nav={[{ href: "#services", label: "Services" }, { href: "#general-physician", label: "General Physician" }, { href: "#about", label: "The Doctor" }, { href: "/wellness/", label: "Wellness" }, { href: "/blog/", label: "Blog" }, { href: "#contact", label: "Contact" }]} cta={{ href: "#contact", label: "Book Appointment" }}>
      <JsonLd data={schema} />
      <>

        <main id="top">
          {/* Hero */}
          <section className="hero">
            <div className="wrap">
              <div className="reveal">
                <span className="eyebrow">Physician-led care · Wakad, Pune</span>
                <h1>Everyday medicine.<br /><em>Advanced</em> wellness.<br />One trusted doctor.</h1>
                <p className="lead">From fever and infections to <mark className="hl">diabetes, personalised nutrition and medically supervised IV therapy</mark>, Dr. Suraaj Clinic &amp; Advanced Wellness Center looks after your <mark className="hl">whole health under one roof</mark>.</p>
                <div className="hero-cta">
                  <a href="#contact" className="btn btn-primary pulse">Book an Appointment
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a href="https://wa.me/919371710257?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation" className="btn btn-ghost" target="_blank" rel="noopener">WhatsApp Us</a>
                </div>
                <div className="trust">
                  <div><b data-count={14} data-suffix="+">14+</b><small>Years of clinical practice</small></div>
                  <div><b data-count={15} data-suffix="k+">15k+</b><small>Patients treated</small></div>
                  <div><b>PGD</b><small>Endocrinology &amp; Diabetes</small></div>
                </div>
              </div>
              <div className="hero-visual reveal">
                <div className="frame">
                  <Image alt="Dr. Suraaj Gadiwadd, physician and diabetes doctor at Dr. Suraaj Clinic & Advanced Wellness Center, Wakad, Pune" src="/images/dr-suraaj-portrait.jpg" width={900} height={1200} priority />
                </div>
                <div className="badge-float bf-1"><i>🩺</i><div>Dr. Suraaj Gadiwadd<small>Physician · Diabetes &amp; Metabolic Care</small></div></div>
                <div className="badge-float bf-2"><i>✅</i><div>Registered with MCI<small>Reg. No. 14-52930</small></div></div>
              </div>
            </div>
          </section>
          <div className="strip" aria-label="Our specialities">
            <div className="strip-track">
              <span>General Medicine</span><span>Diabetes &amp; Metabolic Health</span><span>Dietician &amp; Nutrition</span><span>Weight Management</span><span>IV Nutritional Therapy</span><span>IV Skin &amp; Hair Wellness</span><span>Longevity &amp; Prevention</span>
              <span aria-hidden="true">General Medicine</span><span aria-hidden="true">Diabetes &amp; Metabolic Health</span><span aria-hidden="true">Dietician &amp; Nutrition</span><span aria-hidden="true">Weight Management</span><span aria-hidden="true">IV Nutritional Therapy</span><span aria-hidden="true">IV Skin &amp; Hair Wellness</span><span aria-hidden="true">Longevity &amp; Prevention</span>
            </div>
          </div>
          {/* Services */}
          <section id="services">
            <div className="wrap">
              <div className="center reveal">
                <span className="eyebrow">Our Services</span><br />
                <h2 className="uline">Complete care, from first symptom to long-term wellness</h2>
                <p className="lead">Every plan starts with a proper medical consultation, so wellness treatments are always <mark className="hl">backed by a physician's judgement</mark>.</p>
              </div>
              <div className="grid-services stagger">
                <article className="svc">
                  <div className="ic"><svg viewBox="0 0 24 24"><path d="M6 3v6a4 4 0 0 0 8 0V3" /><path d="M10 13v3a5 5 0 0 0 10 0v-2" /><circle cx={20} cy={12} r={2} /></svg></div>
                  <h3>General Medicine</h3>
                  <p>Same-day consultations for acute and everyday health concerns.</p>
                  <ul><li>Fever, cough, cold &amp; infections</li><li>Blood pressure &amp; thyroid</li><li>Stomach &amp; gut problems</li><li>Blood test collection</li></ul>
                </article>
                <article className="svc">
                  <div className="ic"><svg viewBox="0 0 24 24"><circle cx={12} cy={5} r={2} /><path d="M12 7v7M7 9l5 2 5-2M9 21l3-7 3 7" /></svg></div>
                  <h3>Metabolic Health</h3>
                  <p>Specialist-trained care for diabetes and related conditions.</p>
                  <ul><li><Link href="/type-2-diabetes-symptoms-treatment/" style={{textDecoration: 'underline', textDecorationColor: 'var(--gold)'}}>Type 2 diabetes</Link> &amp; pre-diabetes</li><li>Cholesterol &amp; fatty liver</li><li>PCOS &amp; insulin resistance</li><li>Metabolic risk assessment</li></ul>
                </article>
                <article className="svc">
                  <span className="tag">New</span>
                  <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 21c-5-3-8-7-8-11a8 8 0 0 1 16 0c0 4-3 8-8 11z" /><path d="M12 7v8M9 11h6" /></svg></div>
                  <h3>Dietician &amp; Nutrition</h3>
                  <p>Personalised diet plans designed around your reports and routine.</p>
                  <ul><li>Diabetic &amp; thyroid diets</li><li>Gut health &amp; vitamin deficiencies</li><li>Family &amp; senior nutrition</li><li>Regular follow-up reviews</li></ul>
                  <Link className="card-more" href="/wellness/#dietician">Learn more →</Link></article>
                <article className="svc">
                  <span className="tag">New</span>
                  <div className="ic"><svg viewBox="0 0 24 24"><path d="M4 20h16" /><path d="M7 20V10M12 20V6M17 20v-7" /></svg></div>
                  <h3>Weight Management</h3>
                  <p>Medically guided, sustainable weight loss, without crash diets.</p>
                  <ul><li>Body composition analysis</li><li>Hormone &amp; thyroid screening</li><li>Diet + activity plan</li><li>Medication where appropriate</li></ul>
                  <Link className="card-more" href="/wellness/#weight-loss">Learn more →</Link></article>
                <article className="svc feature">
                  <span className="tag">New</span>
                  <div className="ic"><svg viewBox="0 0 24 24"><rect x={7} y={2} width={10} height={13} rx={2} /><path d="M12 15v4M12 19v3M7 9h10" /></svg></div>
                  <h3>IV Nutritional Therapy</h3>
                  <p>Medically supervised drips for hydration, energy and recovery.</p>
                  <ul><li>Vitamin &amp; mineral replenishment</li><li>Hydration &amp; post-illness recovery</li><li>Immunity support</li><li>Physician-prescribed only</li></ul>
                  <Link className="card-more" href="/wellness/#iv-hydration">Learn more →</Link></article>
                <article className="svc feature">
                  <span className="tag">New</span>
                  <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 15.2 7 18l1.2-5.6L4 8.6 9.6 8z" /></svg></div>
                  <h3>IV Skin &amp; Hair Wellness</h3>
                  <p>Antioxidant and nutrient drips that support skin and hair health from within.</p>
                  <ul><li>Antioxidant (Vitamin C) drips</li><li>Hair &amp; nail nutrient support</li><li>Combined with diet plans</li><li>Assessed for suitability first</li></ul>
                  <Link className="card-more" href="/wellness/#iv-skin-hair">Learn more →</Link></article>
              </div>
              <div className="center reveal" style={{marginTop: 44}}>
                <a href="#contact" className="btn btn-ghost">Not sure which service you need? Talk to the doctor</a>
              </div>
            </div>
          </section>
          {/* General physician */}
          <section id="general-physician" className="gp">
            <div className="wrap">
              <div className="reveal">
                <span className="eyebrow">General Physician in Wakad</span>
                <h2>Your family doctor, <mark className="hl">first and always</mark></h2>
                <p className="lead">General medicine remains the heart of our clinic. Dr. Suraaj diagnoses and treats everyday illnesses and long-term conditions for every member of the family, and refers you to the right specialist only when you need one.</p>
                <div className="conditions stagger">
                  <span>Fever &amp; viral infections</span><span>Dengue, malaria &amp; typhoid</span><span>Cough, cold &amp; throat infections</span>
                  <span>High blood pressure</span><span>Diabetes</span><span>Thyroid disorders</span>
                  <span>Acidity, gastritis &amp; IBS</span><span>Urinary infections</span><span>Vitamin deficiencies</span>
                  <span>Headache &amp; body ache</span><span>Allergies</span><span>Health check-ups</span>
                </div>
                <a href="#contact" className="btn btn-primary">Book a physician consultation</a>
              </div>
              <div>
                <h3 className="reveal" style={{fontSize: 28, marginBottom: 18}}>Why see a general physician first?</h3>
                <div className="benefits stagger">
                  <div className="benefit"><i>🩺</i><div><h3>Complete health management</h3><p>One doctor who looks at your whole health, not one symptom at a time.</p></div></div>
                  <div className="benefit"><i>📈</i><div><h3>Chronic condition care</h3><p>Regular monitoring of BP, sugar, thyroid and cholesterol.</p></div></div>
                  <div className="benefit"><i>👨‍👩‍👧</i><div><h3>Care for the whole family</h3><p>Children, adults and seniors, with one record of your family's health.</p></div></div>
                  <div className="benefit"><i>🧭</i><div><h3>Right specialist referrals</h3><p>When you need a specialist, we guide you to the right one.</p></div></div>
                  <div className="benefit"><i>🛡️</i><div><h3>Preventive care</h3><p>Screening and early detection before problems become serious.</p></div></div>
                  <div className="benefit"><i>₹</i><div><h3>Cost-effective care</h3><p>Avoid unnecessary tests and specialist visits.</p></div></div>
                </div>
              </div>
            </div>
          </section>
          {/* Care journey */}
          <section className="journey">
            <div className="wrap">
              <div className="center reveal">
                <span className="eyebrow">How it works</span><br />
                <h2 className="uline">Your care journey</h2>
                <p className="lead">Wellness that is planned like medicine: assessed, personalised and reviewed.</p>
              </div>
              <div className="steps stagger">
                <div className="step"><h3>Consult</h3><p>A detailed consultation with Dr. Suraaj on your symptoms, history and goals.</p></div>
                <div className="step"><h3>Test</h3><p>Relevant blood tests with sample collection at the clinic.</p></div>
                <div className="step"><h3>Personalise</h3><p>A combined plan of treatment, nutrition and, where suitable, IV therapy.</p></div>
                <div className="step"><h3>Follow up</h3><p>Regular reviews so your plan changes as your results improve.</p></div>
              </div>
            </div>
          </section>
          {/* Approach */}
          <section className="approach" id="approach">
            <div className="wrap">
              <div className="reveal">
                <span className="eyebrow">Our approach</span>
                <h2>Modern science. <mark className="hl">Personalised care.</mark></h2>
                <p className="lead">We look at how your hormones, metabolism, heart, gut and lifestyle work together, then build a plan that fits your life. Evidence-based medicine first, wellness therapies only where they help.</p>
                <div className="pillars stagger">
                  <div><b>Diagnose</b>Physician consultation &amp; the right tests</div>
                  <div><b>Treat</b>Evidence-based medicines when needed</div>
                  <div><b>Nourish</b>Nutrition, diet &amp; IV support</div>
                  <div><b>Prevent</b>Screening for a longer, healthier life</div>
                </div>
              </div>
              <div className="approach-visual reveal">
                <figure>
                  <Image
                    alt="Dr. Suraaj Clinic's four areas of care: General Medicine, Metabolic Health, IV Nutritional Therapy, and Nutrition & Longevity"
                    src="/images/services-signboard.jpg"
                    width={1305}
                    height={1206}
                    sizes="(max-width: 980px) 100vw, 560px"
                  />
                </figure>
                <div className="approach-chip"><b>4</b> areas of care · <b>1</b> physician who knows your full picture</div>
              </div>
            </div>
          </section>
          {/* About doctor */}
          <section id="about" className="about">
            <div className="wrap">
              <div className="doc-card reveal">
                <div className="doc-photo">
                  {/* Doctor photo: public/images/dr-suraaj.jpg (covers the branded card underneath). */}
                  <Image alt="Dr. Suraaj Gadiwadd at his consultation desk, Dr. Suraaj Clinic, Wakad, Pune" src="/images/dr-suraaj.jpg" width={900} height={1125} />
                  <div className="monogram">
                    <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 30c0-8 5-13 10-14-1 7-5 12-10 14z" fill="#e9dcc2" /><path d="M34 12c-2 8-6 14-12 18 2-7 6-13 12-18z" fill="#b8924a" /></svg>
                    <span>SG</span>
                  </div>
                  <h3>Dr. Suraaj M. Gadiwadd</h3>
                  <div className="role">Physician · Founder</div>
                  <div className="chips"><span>14+ yrs experience</span><span>PGD Endocrinology &amp; Diabetes</span><span>15,000+ patients</span></div>
                </div>
              </div>
              <div className="reveal">
                <span className="eyebrow">Meet your doctor</span>
                <h2>Dr. Suraaj M. Gadiwadd</h2>
                <p className="lead">A <mark className="hl">registered physician with over 14 years of clinical experience</mark> and a special interest in nutrition, vitamins, amino acids and gut health. Dr. Suraaj founded the clinic to bring everyday medicine and evidence-based wellness together, so patients get one doctor who knows their full picture.</p>
                <div className="creds">
                  <div className="cred"><i>✓</i><div><b>M.D. (General Medicine), 2009</b><span>Kazan State Medical University · 14+ years of practice, 15,000+ patients treated</span></div></div>
                  <div className="cred"><i>✓</i><div><b>PG Diploma in Clinical Endocrinology &amp; Diabetes</b><span>EACME, 2020–21 · CPD modules accredited by the Federation of the Royal Colleges of Physicians (UK)</span></div></div>
                  <div className="cred"><i>✓</i><div><b>Registered Medical Practitioner</b><span>Medical Council of India, Reg. No. 14-52930</span></div></div>
                  <div className="cred"><i>✓</i><div><b>Nutrition &amp; gut-health focus</b><span>Integrates diet planning with clinical treatment</span></div></div>
                </div>
                <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}><a href="#contact" className="btn btn-primary">Book a consultation</a><a href="#credentials" className="btn btn-ghost">View certificates</a></div>
              </div>
            </div>
          </section>
          {/* Credentials */}
          <section id="credentials">
            <div className="wrap">
              <div className="center reveal">
                <span className="eyebrow">Qualifications</span><br />
                <h2 className="uline">Verified credentials</h2>
                <p className="lead">Your health deserves a qualified, registered doctor. Tap any certificate to view it.</p>
              </div>
              <div className="cert-grid stagger">
                <button className="cert" data-full="/images/cert-md-diploma.jpg" aria-label="View M.D. diploma">
                  <div className="thumb"><Image alt="Doctor of Medicine diploma in General Medicine, Kazan State Medical University, 2009" src="/images/cert-md-diploma.jpg" width={800} height={1100} /></div>
                  <div className="meta"><small>Degree · 2009</small><h3>M.D. – General Medicine</h3><p>Doctor of Medicine, Kazan State Medical University (6-year programme)</p></div>
                </button>
                <button className="cert" data-full="/images/cert-mci-registration.jpg" aria-label="View Medical Council of India registration certificate">
                  <div className="thumb"><Image alt="Medical Council of India registration certificate, Reg. No. 14-52930" src="/images/cert-mci-registration.jpg" width={1200} height={927} /></div>
                  <div className="meta"><small>Registration · 2014</small><h3>Medical Council of India</h3><p>Registered Medical Practitioner, Reg. No. 14-52930</p></div>
                </button>
                <button className="cert" data-full="/images/cert-pg-diploma-endocrinology-diabetes.jpg" aria-label="View PG Diploma in Clinical Endocrinology and Diabetes">
                  <div className="thumb"><Image alt="Post Graduate Diploma in Clinical Endocrinology and Diabetes certificate, EACME 2020-21" src="/images/cert-pg-diploma-endocrinology-diabetes.jpg" width={1200} height={834} /></div>
                  <div className="meta"><small>Specialist training · 2020–21</small><h3>PG Diploma, Endocrinology &amp; Diabetes</h3><p>EACME · CPD-accredited by the Federation of the Royal Colleges of Physicians (UK)</p></div>
                </button>
              </div>
              <p className="verify center reveal">Personal details on certificates are hidden for privacy. Registration can be verified on the National Medical Commission's Indian Medical Register.</p>
            </div>
          </section>
          <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Certificate viewer"><button aria-label="Close">×</button><img alt="" /></div>
          {/* IV spotlight */}
          <section id="iv-therapy" className="iv">
            <div className="wrap">
              <div className="reveal">
                <span className="eyebrow">IV Therapy in Wakad</span>
                <h2>Medically supervised IV therapy, done the right way</h2>
                <p className="lead">IV therapy should be a <mark className="hl">medical decision, not a menu choice</mark>. Each drip at our clinic is prescribed by a registered physician after assessing your history, medicines and reports, then given in a clinical setting with monitoring.</p>
                <div className="safety">🛡️ <b>Our safety promise:</b> no drip without a consultation. If IV therapy isn't right for you, we'll tell you, and suggest what is.</div>
                <Link href="/wellness/" className="btn btn-gold" style={{marginTop: 24}}>Explore all wellness services →</Link>
              </div>
              <div className="drips stagger">
                <div className="drip"><h3>Hydration</h3><p>After fever, gastro infections, travel or heat exhaustion.</p></div>
                <div className="drip"><h3>Energy &amp; Recovery</h3><p>B-complex and minerals for deficiency-related fatigue.</p></div>
                <div className="drip"><h3>Immunity</h3><p>Vitamin C and zinc support during recovery.</p></div>
                <div className="drip"><h3>Skin &amp; Hair</h3><p>Antioxidant and nutrient support, paired with diet.</p></div>
              </div>
            </div>
          </section>
          {/* Online consult */}
          <section className="online">
            <div className="wrap">
              <div className="online-card reveal">
                <div>
                  <h3>Skip the travel. Consult online.</h3>
                  <p>Private video consultations with Dr. Suraaj start at just ₹799.</p>
                </div>
                <a href="https://wa.me/919371710257?text=Hi%2C%20I%20would%20like%20an%20online%20consultation" className="btn" target="_blank" rel="noopener">Book Online Consult</a>
              </div>
            </div>
          </section>
          {/* Reviews */}
          <section className="reviews">
            <div className="wrap center">
              <span className="eyebrow">Patient reviews</span><br />
              <h2 className="uline reveal">Trusted by families across Wakad &amp; Pimple Saudagar</h2>
              {/* DEVELOPER: embed REAL Google reviews here (e.g. via Google Places API or a reviews widget). Do not add invented testimonials. */}
              <div className="review-box">
                <div className="stars">★★★★★</div>
                <p style={{margin: '10px 0 20px'}}>Read what our patients say about us on Google.</p>
                <a className="btn btn-gold" href="https://www.google.com/search?q=dr+suraj+clinic+wakad+pune" target="_blank" rel="noopener">See Google Reviews</a>
              </div>
            </div>
          </section>
          {/* Health library */}
          <section id="health-library" className="library">
            <div className="wrap">
              <div className="center reveal">
                <span className="eyebrow">Health Library</span><br />
                <h2 className="uline">Learn from Dr. Suraaj</h2>
                <p className="lead">Clear, evidence-based articles written by our doctor to help you understand your health.</p>
              </div>
              <Link className="article-feature reveal" href="/type-2-diabetes-symptoms-treatment/">
                <div className="body">
                  <small>Diabetes &amp; Metabolic Health · Article 1</small>
                  <h3>Type 2 Diabetes: Symptoms, Causes, Diagnosis, Treatment &amp; Long-Term Management</h3>
                  <p>Everything you need to know, from early warning signs and HbA1c levels to an Indian diabetes plate and whether diabetes can go into remission.</p>
                  <ul><li>Early symptoms most people miss</li><li>HbA1c &amp; fasting sugar ranges explained</li><li>Diet, exercise &amp; medicines, in plain language</li></ul>
                  <div className="author"><Image alt="" src="/images/dr-suraaj-square.jpg" width={44} height={44} /><span>By <b style={{color: 'var(--green-900)'}}>Dr. Suraaj Gadiwadd</b> · 15 min read</span></div>
                  <span className="btn btn-primary" style={{marginTop: 24}}>Read the article →</span>
                </div>
                <div className="article-art" aria-hidden="true">
                  <div style={{fontFamily: 'var(--serif)', fontSize: 26, marginBottom: 6}}>Know your numbers</div>
                  <div className="stat-row"><span>HbA1c – normal</span><b>below 5.7%</b></div>
                  <div className="stat-row"><span>HbA1c – prediabetes</span><b>5.7 – 6.4%</b></div>
                  <div className="stat-row"><span>HbA1c – diabetes</span><b>6.5% or above</b></div>
                  <div className="stat-row"><span>Fasting glucose – diabetes</span><b>126 mg/dL or above</b></div>
                </div>
              </Link>
              <div className="center reveal" style={{marginTop: 28}}><Link className="btn btn-ghost" href="/blog/">View all articles →</Link></div>
              <div className="coming reveal"><span>Coming soon:</span><span>Fatty liver (MASLD)</span><span>Insulin resistance</span><span>Diabetes diet</span><span>Thyroid health</span><span>IV therapy guide</span></div>
            </div>
          </section>
          {/* FAQ (AEO: written as direct answers to real patient questions) */}
          <section id="faq" className="faq">
            <div className="wrap">
              <div className="reveal">
                <span className="eyebrow">FAQs</span>
                <h2>Questions patients ask us</h2>
                <p className="lead">Can't find your answer? Call <CallLink /> or <WhatsAppLink>message us on WhatsApp</WhatsAppLink>.</p>
              </div>
              <div className="reveal">
                <details open><summary>Is there a doctor-led dietician and nutrition clinic in Wakad, Pune?</summary>
                  <p>Yes. We offer personalised diet and nutrition plans designed alongside a registered physician, so your blood reports, medicines and conditions like diabetes or thyroid are considered in your plan.</p></details>
                <details><summary>What is IV nutritional therapy?</summary>
                  <p>IV nutritional therapy delivers fluids, vitamins and minerals directly into the bloodstream through a drip. At our clinic every IV is prescribed only after a physician consultation and relevant tests, and is given under medical supervision.</p></details>
                <details><summary>Is IV therapy safe?</summary>
                  <p>IV therapy is generally safe when it is medically indicated, prescribed by a qualified doctor and given in a clinical setting. It isn't suitable for everyone, which is why we assess your history, medicines and reports first.</p></details>
                <details><summary>Do you treat diabetes and help with weight loss?</summary>
                  <p>Yes. Dr. Suraaj holds a Post Graduate Diploma in Clinical Endocrinology &amp; Diabetes. We manage diabetes, pre-diabetes, blood pressure, cholesterol and weight with medication where needed plus nutrition and lifestyle plans.</p></details>
                <details><summary>Can I consult Dr. Suraaj online?</summary>
                  <p>Yes. Private online video consultations start at ₹799. Book by calling <CallLink /> or on <WhatsAppLink text="Hi, I would like an online consultation">WhatsApp</WhatsAppLink>.</p></details>
                <details><summary>When should I see a general physician?</summary>
                  <p>See a general physician for fever, infections, cough and cold, stomach problems, body aches, and for ongoing conditions like blood pressure, diabetes and thyroid. A physician is also the right first stop for health check-ups and when you're unsure which specialist you need.</p></details>
                <details><summary>Where is the clinic located?</summary>
                  <p>Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Road, Vishnu Dev Nagar, Wakad, Pune 411057. We see patients from Wakad, Pimple Saudagar, Hinjewadi, Tathawade, Ravet and Pimple Nilakh.</p></details>
                <details><summary>What are the clinic timings?</summary>
                  <p>We're open all 7 days with morning and evening sessions. See the full timetable in the <a href="#contact" style={{color: 'var(--green-700)'}}>Visit us</a> section below. Timings may change on festivals, so please call before visiting.</p></details>
              </div>
            </div>
          </section>
          <VisitUs />
        </main>

      </>
    </PageShell>
  );
}
