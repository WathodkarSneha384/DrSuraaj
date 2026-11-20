// Single source of truth for clinic details. Update here and every page follows.
export const SITE_URL = "https://www.drsuraajclinic.com";

export const CLINIC = {
  name: "Dr. Suraaj Clinic & Advanced Wellness Center",
  shortName: "Dr. Suraaj Clinic",
  doctor: "Dr. Suraaj M. Gadiwadd",
  phoneDisplay: "+91 93717 10257",
  phoneTel: "+919371710257",
  whatsapp: "919371710257",
  email: "info@drsuraajclinic.com",
  addressLine:
    "Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Rd, Dynasty Society, Vishnu Dev Nagar, Wakad, Pune, Maharashtra 411057",
  addressShort: "Shop 101, 1st Floor, Sonigara Landmark Complex, Chatrapati Chowk Rd, Wakad, Pune 411057",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Suraaj+Clinic,+Sonigara+Landmark+Complex,+Chatrapati+Chowk+Rd,+Wakad,+Pune+411057",
  instagram: "https://www.instagram.com/dr.suraajgadiwadd5/",
  facebook: "https://www.facebook.com/people/Drsuraaj-clinic/61553472147445/",
  googleReviews: "https://www.google.com/search?q=dr+suraj+clinic+wakad+pune",
};

/** Opening hours, Monday..Sunday, each day = [open, close] pairs in 24h "HH:MM" (clinic time, IST).
 *  Used for the "Open now" badge, today's hours and Google structured data. */
export const HOURS: { day: string; slots: [string, string][] }[] = [
  { day: "Monday", slots: [["09:30", "13:00"], ["18:30", "21:30"]] },
  { day: "Tuesday", slots: [["09:30", "13:00"], ["18:30", "21:30"]] },
  { day: "Wednesday", slots: [["09:30", "13:00"], ["18:30", "21:30"]] },
  { day: "Thursday", slots: [["09:30", "13:00"], ["18:30", "21:30"]] },
  { day: "Friday", slots: [["09:30", "13:00"], ["18:30", "21:30"]] },
  { day: "Saturday", slots: [["09:00", "14:00"], ["18:30", "21:30"]] },
  { day: "Sunday", slots: [["09:00", "14:00"], ["18:30", "22:00"]] },
];

/** How the timings are shown to patients (grouped). `days` are indexes into HOURS (0 = Monday). */
export const HOURS_DISPLAY: { label: string; days: number[]; morning: string; evening: string }[] = [
  { label: "Monday – Friday", days: [0, 1, 2, 3, 4], morning: "9:30 am – 12:30 / 1 pm", evening: "6:30 pm – 9:30 pm" },
  { label: "Saturday", days: [5], morning: "9 am – 2 pm", evening: "6:30 pm – 9:30 pm" },
  { label: "Sunday", days: [6], morning: "9 am – 2 pm", evening: "6:30 pm – 10 pm" },
];

export const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export const fmtTime = (t: string) => {
  let [h, m] = t.split(":").map(Number);
  const ap = h < 12 ? "am" : "pm";
  h = h % 12 || 12;
  return `${h}${m ? ":" + String(m).padStart(2, "0") : ""} ${ap}`;
};

export const waLink = (text?: string) =>
  `https://wa.me/${CLINIC.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
