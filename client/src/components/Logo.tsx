export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#00FFAB" fillOpacity="0.1"/>
        <path d="M20 8L28 14V26L20 32L12 26V14L20 8Z" stroke="#00FFAB" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="4" fill="#00FFAB"/>
        <path d="M20 8V16" stroke="#00FFAB" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 24V32" stroke="#00FFAB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span className="text-[#00FFAB] font-bold text-xl tracking-tight">Awra Tech</span>
    </div>
  );
}
