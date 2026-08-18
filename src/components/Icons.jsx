export function LeafMark(props) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" {...props}>
      <path d="M8 24C8 13 15 7 25 7C25 17 19 24 8 24Z" fill="currentColor" />
      <path d="M8 24C10 18 15 13 22 10" stroke="var(--field)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function IconSeedling(props) {
  return (
    <svg viewBox="0 0 40 40" width="26" height="26" fill="none" {...props}>
      <path d="M20 34V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 20C20 12 14 8 7 8C7 16 12 21 20 20Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 15C20 9 25 6 32 6C32 12 28 16 20 15Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 34H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconScan(props) {
  return (
    <svg viewBox="0 0 40 40" width="26" height="26" fill="none" {...props}>
      <path d="M8 14V10a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 14V10a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 26v4a2 2 0 0 0 2 2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 26v4a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12C15 12 13 16 13 20C13 24 15 28 20 28C25 28 27 24 27 20C27 16 25 12 20 12Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.12" />
      <path d="M9 20H31" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 3" />
    </svg>
  );
}

export function IconInsight(props) {
  return (
    <svg viewBox="0 0 40 40" width="26" height="26" fill="none" {...props}>
      <path d="M20 6a11 11 0 0 0-6 20.2c.7.5 1 1.3 1 2.1V30h10v-1.7c0-.8.4-1.6 1-2.1A11 11 0 0 0 20 6Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.12" />
      <path d="M16 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 20l2.2 2.4L24 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconInput(props) {
  return (
    <svg viewBox="0 0 40 40" width="24" height="24" fill="none" {...props}>
      <rect x="7" y="10" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 17h16M12 22h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCpu(props) {
  return (
    <svg viewBox="0 0 40 40" width="24" height="24" fill="none" {...props}>
      <rect x="12" y="12" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="17" width="6" height="6" rx="1" fill="currentColor" />
      <path d="M20 6v5M20 29v5M6 20h5M29 20h5M9 9l3.5 3.5M27.5 27.5L31 31M31 9l-3.5 3.5M12.5 27.5L9 31" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconReport(props) {
  return (
    <svg viewBox="0 0 40 40" width="24" height="24" fill="none" {...props}>
      <path d="M12 6h11l5 5v23a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M23 6v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15 22l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" {...props}>
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
