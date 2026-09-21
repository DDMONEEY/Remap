"use client";

import React, { useState } from "react";
import { BRANDS_ECOSYSTEM, BrandItem } from "@/data/site-content";
import { Cpu, Bike, Sparkles, ArrowRight } from "lucide-react";
import {
  BMWLogo,
  YamahaLogo,
  KawasakiLogo,
  DucatiLogo,
  HondaLogo,
  TriumphLogo,
  FuelTechLogo,
  InjeProLogo,
  AthlonLogo,
  ServitecLogo,
} from "@/components/ui/BrandLogos";

export default function BrandsEco() {
  const [activeTab, setActiveTab] = useState<"all" | "ecu" | "bike">("all");

  const filteredBrands =
    activeTab === "all"
      ? BRANDS_ECOSYSTEM
      : BRANDS_ECOSYSTEM.filter((b) => b.type === activeTab);

  const renderLogo = (key: BrandItem["logoKey"]) => {
    switch (key) {
      case "fueltech":
        return <FuelTechLogo className="w-12 h-12" />;
      case "injepro":
        return <InjeProLogo className="w-12 h-12" />;
      case "athlon":
        return <AthlonLogo className="w-12 h-12" />;
      case "servitec":
        return <ServitecLogo className="w-12 h-12" />;
      case "bmw":
        return <BMWLogo className="w-12 h-12" />;
      case "yamaha":
        return <YamahaLogo className="w-12 h-12" />;
      case "kawasaki":
        return <KawasakiLogo className="w-12 h-12" />;
      case "ducati":
        return <DucatiLogo className="w-12 h-12" />;
      case "honda":
        return <HondaLogo className="w-12 h-12" />;
      case "triumph":
        return <TriumphLogo className="w-12 h-12" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#060608] relative overflow-hidden border-t border-[#161622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12121A] border border-[#242436] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>ECOSSISTEMA DE ALTA PERFORMANCE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            TECNOLOGIA QUE FALA A LÍNGUA DA <span className="text-xt-red">PERFORMANCE.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#9898AC] leading-relaxed">
            Calibração e desenvolvimento para os maiores fabricantes mundiais de motocicletas e os sistemas de gerenciamento eletrônico mais respeitados das pistas.
          </p>

          {/* Tab Filter */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-[#0E0E15] border border-[#222230]">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-xt-red text-white shadow-glow-red"
                  : "text-[#8E8EA0] hover:text-white"
              }`}
            >
              TODAS AS MARCAS ({BRANDS_ECOSYSTEM.length})
            </button>
            <button
              onClick={() => setActiveTab("ecu")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                activeTab === "ecu"
                  ? "bg-xt-red text-white shadow-glow-red"
                  : "text-[#8E8EA0] hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>SISTEMAS ECU (4)</span>
            </button>
            <button
              onClick={() => setActiveTab("bike")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                activeTab === "bike"
                  ? "bg-xt-red text-white shadow-glow-red"
                  : "text-[#8E8EA0] hover:text-white"
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>SUPERBIKES (6)</span>
            </button>
          </div>
        </div>

        {/* 10 Brands Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="group relative p-5 rounded-xl bg-[#0C0C14] border border-[#1C1C28] hover:border-[#383852] transition-all duration-200 flex flex-col items-center text-center justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Top ambient color bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: brand.accent }}
              />

              {/* Crisp Vector Logo */}
              <div className="my-2 relative w-16 h-16 rounded-2xl bg-[#14141E] border border-[#222234] group-hover:border-white/30 flex items-center justify-center p-2 transition-transform duration-200 group-hover:scale-110 shadow-inner">
                {renderLogo(brand.logoKey)}
              </div>

              {/* Brand Title */}
              <div className="w-full mt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141420] text-[#828296] border border-[#1E1E2C] uppercase font-semibold">
                  {brand.type === "ecu" ? "Eletrônica / ECU" : "Superbike"}
                </span>

                <h3 className="mt-2.5 font-display font-bold text-lg text-white group-hover:text-xt-red transition-colors tracking-wide">
                  {brand.name}
                </h3>

                <p className="mt-1 text-[11px] text-[#7E7E94] line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* Action footer */}
              <div className="mt-4 pt-3 border-t border-[#161622] w-full flex items-center justify-center gap-1 text-[10px] font-mono text-[#5A5A70] group-hover:text-white transition-colors">
                <span>CONHECER PROJETOS</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
