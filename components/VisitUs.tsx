import BookingForm from "./BookingForm";
import { CLINIC, HOURS_DISPLAY } from "@/lib/site";

const MAP_EMBED =
  "https://www.google.com/maps?q=Dr+Suraaj+Clinic,+Sonigara+Landmark+Complex,+Chatrapati+Chowk+Rd,+Wakad,+Pune+411057&output=embed";

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const ICONS = {
  call: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  chat: "M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3.5 6l8.5 7 8.5-7",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
};

export default function VisitUs() {
  return (
    <section id="contact" className="visit">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Visit us</span>
          <br />
          <h2 className="uline">Your visit to Dr. Suraaj Clinic</h2>
          <p className="lead">Walk in or book ahead. Open all 7 days, mornings and evenings, in Wakad, Pune.</p>
        </div>

        <div className="visit-grid">
          {/* Left: everything a patient needs before coming in */}
          <div className="visit-info reveal">
            <div className="today-strip">
              <span className="today-ic"><Icon d={ICONS.clock} /></span>
              <div>
                <div className="today-top">
                  Today <span className="open-badge" id="openBadge" />
                </div>
                <div className="today-hours" data-today-hours>Open 7 days · morning &amp; evening</div>
              </div>
            </div>

            <div className="actions">
              <a className="action" href={`tel:${CLINIC.phoneTel}`}>
                <span className="a-ic"><Icon d={ICONS.call} /></span>
                <span><b>Call the clinic</b><small>{CLINIC.phoneDisplay}</small></span>
              </a>
              <a className="action wa" href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent("Hi, I would like to book an appointment")}`} target="_blank" rel="noopener">
                <span className="a-ic"><Icon d={ICONS.chat} /></span>
                <span><b>WhatsApp us</b><small>Quick replies &amp; booking</small></span>
              </a>
              <a className="action" href={CLINIC.mapsUrl} target="_blank" rel="noopener">
                <span className="a-ic"><Icon d={ICONS.pin} /></span>
                <span><b>Get directions</b><small>Opens Google Maps</small></span>
              </a>
              <a className="action" href={`mailto:${CLINIC.email}`}>
                <span className="a-ic"><Icon d={ICONS.mail} /></span>
                <span><b>Email</b><small>{CLINIC.email}</small></span>
              </a>
            </div>

            <div className="addr">
              <span className="a-ic small"><Icon d={ICONS.pin} /></span>
              <p>
                <b>Shop 101, 1st Floor, Sonigara Landmark Complex</b>
                <br />
                Chatrapati Chowk Rd, Dynasty Society, Vishnu Dev Nagar, Wakad, Pune, Maharashtra 411057
              </p>
            </div>

            <div className="week">
              <div className="week-title">Clinic timings</div>
              <table className="hours">
                <thead>
                  <tr><th scope="col">Day</th><th scope="col">Morning</th><th scope="col">Evening</th></tr>
                </thead>
                <tbody>
                  {HOURS_DISPLAY.map((h) => (
                    <tr key={h.label} data-days={h.days.join(" ")}>
                      <th scope="row">{h.label}</th>
                      <td>{h.morning}</td>
                      <td>{h.evening}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="hours-note">Timings may change on festivals and public holidays. Please call before visiting.</p>
            </div>
          </div>

          {/* Right: booking */}
          <div className="visit-book">
            <BookingForm variant="home" />
            <ul className="book-notes reveal">
              <li>Walk-ins welcome, subject to availability</li>
              <li>Online video consultations from ₹799</li>
              <li>Blood test sample collection at the clinic</li>
            </ul>
          </div>
        </div>

        {/* Map with address card */}
        <div className="visit-map reveal">
          <iframe
            title="Map: Dr. Suraaj Clinic, Sonigara Landmark Complex, Wakad, Pune"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-card">
            <b>Dr. Suraaj Clinic</b>
            <span>Sonigara Landmark Complex, Wakad</span>
            <a className="btn btn-primary" href={CLINIC.mapsUrl} target="_blank" rel="noopener">Open in Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
