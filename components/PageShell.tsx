import Footer from "./Footer";
import Header, { NavLink } from "./Header";
import TopBar from "./TopBar";

export const MAIN_NAV: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/#general-physician", label: "General Physician" },
  { href: "/#about", label: "The Doctor" },
  { href: "/wellness/", label: "Wellness" },
  { href: "/blog/", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function PageShell({
  children,
  nav = MAIN_NAV,
  cta,
  topLeft,
}: {
  children: React.ReactNode;
  nav?: NavLink[];
  cta?: NavLink;
  topLeft?: string;
}) {
  return (
    <>
      <TopBar left={topLeft} />
      <Header links={nav} cta={cta} />
      {children}
      <Footer />
    </>
  );
}
