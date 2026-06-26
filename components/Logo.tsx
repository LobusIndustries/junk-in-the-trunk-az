export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size * 2.8}
      height={size}
      viewBox="0 0 280 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Junk in the Trunk AZ logo"
    >
      {/* Truck body */}
      <rect x="10" y="38" width="160" height="48" rx="4" fill="#1a1a1a" />
      {/* Cab */}
      <rect x="140" y="20" width="70" height="66" rx="4" fill="#111111" />
      {/* Windshield */}
      <rect x="148" y="26" width="52" height="32" rx="3" fill="#f97316" opacity="0.9" />
      {/* Truck bed junk pile - old TV */}
      <rect x="22" y="20" width="28" height="22" rx="2" fill="#374151" />
      <rect x="26" y="24" width="20" height="14" rx="1" fill="#6b7280" />
      {/* Couch */}
      <rect x="58" y="26" width="36" height="16" rx="2" fill="#78350f" />
      <rect x="58" y="22" width="36" height="8" rx="2" fill="#92400e" />
      <rect x="58" y="22" width="8" height="20" rx="1" fill="#92400e" />
      <rect x="86" y="22" width="8" height="20" rx="1" fill="#92400e" />
      {/* Box */}
      <rect x="102" y="24" width="24" height="18" rx="1" fill="#b45309" />
      <line x1="114" y1="24" x2="114" y2="42" stroke="#92400e" strokeWidth="1.5" />
      <line x1="102" y1="33" x2="126" y2="33" stroke="#92400e" strokeWidth="1.5" />
      {/* Lamp */}
      <rect x="130" y="32" width="6" height="12" rx="1" fill="#4b5563" />
      <ellipse cx="133" cy="30" rx="8" ry="5" fill="#6b7280" />
      {/* Wheels */}
      <circle cx="50" cy="88" r="14" fill="#1f2937" />
      <circle cx="50" cy="88" r="8" fill="#374151" />
      <circle cx="50" cy="88" r="3" fill="#9ca3af" />
      <circle cx="165" cy="88" r="14" fill="#1f2937" />
      <circle cx="165" cy="88" r="8" fill="#374151" />
      <circle cx="165" cy="88" r="3" fill="#9ca3af" />
      {/* Orange accent stripe */}
      <rect x="10" y="60" width="160" height="5" fill="#f97316" />
      {/* Headlight */}
      <rect x="207" y="50" width="10" height="8" rx="2" fill="#fef08a" />
      {/* Exhaust pipe */}
      <rect x="205" y="22" width="5" height="14" rx="2" fill="#374151" />
      <ellipse cx="207" cy="22" rx="4" ry="3" fill="#6b7280" opacity="0.5" />
    </svg>
  );
}
