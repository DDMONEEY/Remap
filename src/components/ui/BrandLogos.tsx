import React from "react";

interface LogoProps {
  className?: string;
}

// 1. BMW Motorrad (Classic Roundel)
export function BMWLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#111" stroke="#888" strokeWidth="2" />
      <circle cx="50" cy="50" r="32" fill="#fff" />
      {/* Top Left Quadrant (Blue) */}
      <path d="M50 50 L50 18 A32 32 0 0 0 18 50 Z" fill="#0066B1" />
      {/* Bottom Right Quadrant (Blue) */}
      <path d="M50 50 L50 82 A32 32 0 0 0 82 50 Z" fill="#0066B1" />
      {/* Inner dividing lines */}
      <path d="M18 50 H82 M50 18 V82" stroke="#222" strokeWidth="2.5" />
      {/* BMW Letters */}
      <text x="32" y="15" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="8" textAnchor="middle">B</text>
      <text x="50" y="11" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="8" textAnchor="middle">M</text>
      <text x="68" y="15" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="8" textAnchor="middle">W</text>
    </svg>
  );
}

// 2. Yamaha (Iconic Tuning Forks)
export function YamahaLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#12121A" stroke="#E60012" strokeWidth="4" />
      <circle cx="50" cy="50" r="10" fill="#E60012" />
      {/* 3 Tuning forks at 120 degree angles */}
      <g stroke="#E60012" strokeWidth="5" strokeLinecap="round">
        {/* Fork 1: pointing up */}
        <line x1="50" y1="50" x2="50" y2="18" />
        <path d="M42 26 L50 18 L58 26" fill="none" strokeWidth="4" />
        {/* Fork 2: pointing down-right */}
        <line x1="50" y1="50" x2="78" y2="66" />
        <path d="M72 58 L78 66 L68 72" fill="none" strokeWidth="4" />
        {/* Fork 3: pointing down-left */}
        <line x1="50" y1="50" x2="22" y2="66" />
        <path d="M28 58 L22 66 L32 72" fill="none" strokeWidth="4" />
      </g>
      <circle cx="50" cy="50" r="4" fill="#fff" />
    </svg>
  );
}

// 3. Kawasaki (Racing Green Emblem & K)
export function KawasakiLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0C0C12" stroke="#69BE28" strokeWidth="2" />
      {/* Iconic Kawasaki stylized K with diagonal speed cuts */}
      <path
        d="M28 20 H40 V42 L64 20 H78 L48 48 L80 80 H64 L38 54 V80 H28 Z"
        fill="#69BE28"
      />
    </svg>
  );
}

// 4. Ducati (Official Red Shield)
export function DucatiLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield outline */}
      <path
        d="M20 18 C38 15, 62 15, 80 18 C83 45, 75 75, 50 88 C25 75, 17 45, 20 18 Z"
        fill="#CC0000"
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      {/* Top Banner text */}
      <text
        x="50"
        y="30"
        fill="#FFFFFF"
        fontFamily="Impact, sans-serif"
        fontWeight="bold"
        fontSize="10"
        letterSpacing="2"
        textAnchor="middle"
      >
        DUCATI
      </text>
      {/* Dynamic white curved slash */}
      <path
        d="M30 68 C40 52, 60 44, 75 42 L68 38 C52 42, 36 50, 24 64 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 5. Honda (Iconic Wing)
export function HondaLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0E0E14" stroke="#E4002B" strokeWidth="1.5" />
      {/* Wing sweeps */}
      <path
        d="M22 68 C35 65, 52 58, 65 48 C75 40, 80 30, 82 24 C72 26, 60 32, 50 40 C42 46, 32 55, 22 68 Z"
        fill="#E4002B"
      />
      <path
        d="M22 58 C35 55, 48 48, 60 38 C68 32, 74 24, 76 18 C66 21, 56 26, 46 34 C38 40, 30 48, 22 58 Z"
        fill="#FF2E44"
      />
      <path
        d="M22 78 C35 76, 52 70, 68 60 C58 64, 46 68, 35 70 L22 78 Z"
        fill="#B3001E"
      />
      <text
        x="50"
        y="90"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="11"
        letterSpacing="2"
        textAnchor="middle"
      >
        HONDA
      </text>
    </svg>
  );
}

// 6. Triumph Motorcycles (Triangle & Union Jack)
export function TriumphLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Inverted Triangle Badge */}
      <path
        d="M15 22 H85 L50 85 Z"
        fill="#0D0D15"
        stroke="#D4AF37"
        strokeWidth="3"
      />
      {/* Stylized Union Jack geometry */}
      <path d="M50 22 V85 M15 22 L85 22" stroke="#444" strokeWidth="2" />
      <path d="M25 22 L75 80 M75 22 L25 80" stroke="#333" strokeWidth="1.5" />
      {/* Triumph Wordmark banner */}
      <rect x="18" y="38" width="64" height="18" rx="3" fill="#161622" stroke="#D4AF37" strokeWidth="1.5" />
      <text
        x="50"
        y="51"
        fill="#FFFFFF"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="9"
        letterSpacing="1"
        textAnchor="middle"
      >
        TRIUMPH
      </text>
    </svg>
  );
}

// 7. FuelTech (Official FT Badge)
export function FuelTechLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Slanted oval container */}
      <ellipse cx="50" cy="50" rx="46" ry="32" fill="#0E0E14" stroke="#E50914" strokeWidth="3" transform="rotate(-6 50 50)" />
      {/* Stylized FT emblem */}
      <g fill="#E50914" transform="translate(18, 30)">
        {/* F */}
        <path d="M5 5 H25 V12 H13 V18 H23 V25 H13 V38 H5 Z" />
        {/* T */}
        <path d="M26 5 H46 V12 H39 V38 H31 V12 H26 Z" />
      </g>
      <text
        x="50"
        y="75"
        fill="#FFFFFF"
        fontFamily="Impact, sans-serif"
        fontSize="8"
        letterSpacing="2"
        textAnchor="middle"
      >
        FUELTECH
      </text>
    </svg>
  );
}

// 8. InjePro (Electronic Tuning Injection)
export function InjeProLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0C0C12" stroke="#FF5722" strokeWidth="2" />
      {/* Pulse / Wave emblem */}
      <circle cx="50" cy="40" r="22" stroke="#FF5722" strokeWidth="3" />
      <path d="M38 40 H44 L48 30 L52 50 L56 40 H62" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="50"
        y="78"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="10"
        letterSpacing="1.5"
        textAnchor="middle"
      >
        INJE<tspan fill="#FF5722">PRO</tspan>
      </text>
    </svg>
  );
}

// 9. Athlon (Athlon Cartec Performance)
export function AthlonLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0C0C12" stroke="#3B82F6" strokeWidth="2" />
      {/* Stylized geometric A with speed lines */}
      <path
        d="M50 18 L76 68 H62 L50 42 L38 68 H24 Z"
        fill="#3B82F6"
      />
      <path d="M40 52 H60" stroke="#FFFFFF" strokeWidth="3" />
      <text
        x="50"
        y="85"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="9"
        letterSpacing="2"
        textAnchor="middle"
      >
        ATHLON
      </text>
    </svg>
  );
}

// 10. Servitec (Ignitions & CDI)
export function ServitecLogo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0C0C12" stroke="#8B5CF6" strokeWidth="2" />
      {/* Lightning bolt / spark */}
      <path
        d="M54 18 L34 46 H50 L44 74 L66 42 H50 Z"
        fill="#8B5CF6"
      />
      <text
        x="50"
        y="88"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="9"
        letterSpacing="1.5"
        textAnchor="middle"
      >
        SERVITEC
      </text>
    </svg>
  );
}
