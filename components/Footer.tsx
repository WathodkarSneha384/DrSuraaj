import Link from "next/link";
import { CLINIC } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <span className="brand-name" style={{ fontSize: 24 }}>Dr. Suraaj Clinic</span>
            <span className="brand-sub">&amp; Advanced Wellness Center</span>
            <p style={{ marginTop: 16, maxWidth: 300 }}>
              Physician-led general medicine, metabolic care, nutrition and IV therapy in Wakad, Pune.
            </p>
            <p style={{ marginTop: 12, maxWidth: 300, fontSize: 13 }}>
              {CLINIC.addressShort}
              <br />
              <a href={`tel:${CLINIC.phoneTel}`} style={{ color: "#fff" }}>{CLINIC.phoneDisplay}</a>
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/#general-physician">General Physician</Link></li>
              <li><Link href="/#services">Diabetes Care</Link></li>
              <li><Link href="/wellness/#dietician">Dietician &amp; Nutrition</Link></li>
              <li><Link href="/wellness/">Wellness &amp; IV Therapy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Clinic</h4>
            <ul>
              <li><Link href="/#about">About the Doctor</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
              <li><Link href="/blog/">Health Blog</Link></li>
              <li><Link href="/type-2-diabetes-symptoms-treatment/">Type 2 Diabetes Guide</Link></li>
              <li><Link href="/#credentials">Credentials</Link></li>
              <li><Link href="/#contact">Timings &amp; Map</Link></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href={CLINIC.instagram} target="_blank" rel="noopener">Instagram</a></li>
              <li><a href={CLINIC.facebook} target="_blank" rel="noopener">Facebook</a></li>
              <li><a href={CLINIC.googleReviews} target="_blank" rel="noopener">Google Reviews</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </span>
          <span>Information on this site is for general awareness and is not a substitute for a medical consultation.</span>
        </div>
      </div>
    </footer>
  );
}
