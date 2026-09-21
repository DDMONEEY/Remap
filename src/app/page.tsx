"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBanner from "@/components/sections/StatsBanner";
import Positioning from "@/components/sections/Positioning";
import Services from "@/components/sections/Services";
import XtuneLite from "@/components/sections/XtuneLite";
import BrandsEco from "@/components/sections/BrandsEco";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import BehindTheScenes from "@/components/sections/BehindTheScenes";
import Authority from "@/components/sections/Authority";
import SelectBike from "@/components/sections/SelectBike";
import QuoteForm from "@/components/sections/QuoteForm";
import InstagramFeed from "@/components/sections/InstagramFeed";
import LocationContact from "@/components/sections/LocationContact";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string>("BMW");

  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F4F8] relative selection:bg-xt-red selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats / Social Proof */}
      <StatsBanner />

      {/* 3. Positioning: "Não é só Remap" */}
      <Positioning />

      {/* 4. Services: "O que a Xtune Faz" */}
      <Services />

      {/* 5. Product: XTune Lite (Software Honda Denso) */}
      <XtuneLite />

      {/* 6. Brands Ecosystem: FuelTech, InjePro, Athlon, Servitec + Motos */}
      <BrandsEco />

      {/* 7. Results & Projects: Recordista 600cc, Dyno, etc. */}
      <Projects />

      {/* 8. Editorial Motorsport Gallery with Lightbox */}
      <Gallery />

      {/* 9. "Por Trás da Performance": Dyno, Bench, Team */}
      <BehindTheScenes />

      {/* 10. Authority: Credentials & National Records */}
      <Authority />

      {/* 11. "Sua Moto": Interactive Brand Selector */}
      <SelectBike onSelectBrand={(brand) => setSelectedBrand(brand)} />

      {/* 12. Quote Form: Interactive WhatsApp Lead Generator */}
      <QuoteForm selectedBrand={selectedBrand} />

      {/* 13. Instagram Feed */}
      <InstagramFeed />

      {/* 14. Location & Contact: Maringá-PR + Map */}
      <LocationContact />

      {/* 15. Technical FAQ Accordion */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </main>
  );
}

