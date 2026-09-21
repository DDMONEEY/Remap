import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://planetxtune.com.br"),
  title: "Planet Xtune ECU — Performance Sem Limites | Remap, Acerto & Eletrônica",
  description: "Especialistas em alta performance de motocicletas. Remap de ECU, calibração em dinamômetro, FuelTech, InjePro, desenvolvimento de softwares e soluções eletrônicas. Recordista Nacional 600cc.",
  keywords: [
    "Planet Xtune ECU",
    "Planet Xtune",
    "Remap de motos",
    "Remap moto Maringá",
    "Remap ECU Maringá",
    "Preparação de motos Maringá",
    "FuelTech motos",
    "InjePro motos",
    "Injeção eletrônica motos",
    "Performance motos Maringá",
    "ECU motos",
    "Acerto ECU motos",
    "XTune Lite",
    "Remap BMW Motorrad",
    "Remap Yamaha MT",
    "Remap Kawasaki Ninja",
    "Remap Ducati"
  ],
  authors: [{ name: "Planet Xtune ECU" }],
  creator: "Planet Xtune ECU",
  publisher: "Planet Xtune ECU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Planet Xtune ECU — Performance Sem Limites",
    description: "Tecnologia, precisão e experiência para extrair o máximo da sua motocicleta. Remap, Dinamômetro, FuelTech e InjePro.",
    url: "https://planetxtune.com.br",
    siteName: "Planet Xtune ECU",
    images: [
      {
        url: "/images/xt-banner.jpg",
        width: 1024,
        height: 465,
        alt: "Planet Xtune ECU — Performance Sem Limites",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet Xtune ECU — Performance Sem Limites",
    description: "Especialistas em alta performance de motocicletas. Remap de ECU, FuelTech, InjePro e Recorde Nacional 600cc.",
    images: ["/images/xt-banner.jpg"],
  },
  icons: {
    icon: "/images/xt-avatar.jpg",
    apple: "/images/xt-avatar.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": "https://planetxtune.com.br/#business",
      "name": "Planet Xtune ECU",
      "image": "https://planetxtune.com.br/images/xt-banner.jpg",
      "description": "Centro especializado em eletrônica de alta performance, remap de ECU, FuelTech, InjePro e calibração de motocicletas de alta cilindrada.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maringá",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "telephone": "+5544998243321",
      "url": "https://planetxtune.com.br",
      "sameAs": [
        "https://www.instagram.com/planet.xtune.ecu/"
      ],
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "serviceType": "Remap de ECU de Motocicletas",
      "provider": {
        "@id": "https://planetxtune.com.br/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "description": "Reprogramação eletrônica profissional de centrais de motocicletas para aumento de performance, torque e resposta de acelerador."
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,500;0,700;1,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Rajdhani:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060608] text-[#F4F4F8] font-sans antialiased min-h-screen selection:bg-xt-red selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
