import { CLINIC } from "@/lib/site";

/** Tappable phone number: opens the dialer on phones (and Skype/FaceTime etc. on computers). */
export function CallLink({ children = CLINIC.phoneDisplay }: { children?: React.ReactNode }) {
  return (
    <a className="inline-link" href={`tel:${CLINIC.phoneTel}`} aria-label={`Call ${CLINIC.phoneDisplay}`}>
      {children}
    </a>
  );
}

/** Opens a WhatsApp chat with the clinic (app on phones, WhatsApp Web on computers). */
export function WhatsAppLink({ children = "WhatsApp", text }: { children?: React.ReactNode; text?: string }) {
  const href = `https://wa.me/${CLINIC.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
  return (
    <a className="inline-link wa" href={href} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      {children}
    </a>
  );
}
