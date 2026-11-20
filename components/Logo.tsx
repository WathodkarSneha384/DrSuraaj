export default function Logo({ size = 46 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" width={size} height={size}>
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#1b4535" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="25" fill="none" stroke="#b8924a" strokeWidth="1" />
      <path d="M20 40c0-10 6-16 13-17-1 9-6 15-13 17z" fill="#1b4535" />
      <path d="M44 18c-2 10-7 18-15 23 3-9 8-17 15-23z" fill="#4f8a6b" />
      <path d="M30 44c4-6 9-9 14-10" stroke="#b8924a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="17" r="4" fill="#1b4535" />
      <path d="M43 38v10M38 43h10" stroke="#1b4535" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
