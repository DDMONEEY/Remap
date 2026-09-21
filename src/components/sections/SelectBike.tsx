"use client";

import React from "react";
import { BIKE_BRANDS_SELECTOR } from "@/data/site-content";
import { ArrowRight, Bike } from "lucide-react";
import {
  BMWLogo,
  YamahaLogo,
  KawasakiLogo,
  DucatiLogo,
  HondaLogo,
  TriumphLogo,
} from "@/components/ui/BrandLogos";

interface SelectBikeProps {
  onSelectBrand?: (brand: string) => void;
}

export default function SelectBike({ onSelectBrand }: SelectBikeProps) {
  const handleSelect = (brandName: string) => {
    if (onSelectBrand) {
      onSelectBrand(brandName);
    }
    const formElement = document.getElementById("orcamento");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderBrandIcon = (name: string) => {
    switch (name) {
      case "BMW":
        return <BMWLogo className="w-12 h-12" />;
      case "Yamaha":
        return <YamahaLogo className="w-12 h-12" />;
      case "Kawasaki":
        return <KawasakiLogo className="w-12 h-12" />;
      case "Ducati":
        return <DucatiLogo className="w-12 h-12" />;
      case "Honda":
        return <HondaLogo className="w-12 h-12" />;
      case "Triumph":
        return <TriumphLogo className="w-12 h-12" />;
      default:
        return (
          <span className="font-display font-extrabold text-xl text-white">
            XT
          </span>
        );
    }
  };

  return (
    <section className="py-20 bg-[#08080C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14141F] border border-[#242436] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-3">
            <Bike className="w-3.5 h-3.5" />
            <span>SELEÇÃO DE MODELO</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            QUAL É O SEU <span className="text-xt-red">PROJETO?</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#9A9AB0]">
            Selecione a fabricante da sua motocicleta para iniciar uma avaliação personalizada com nossa equipe técnica.
          </p>
        </div>

        {/* Brand Cards Grid with 7 Options (including Triumph) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5">
          {BIKE_BRANDS_SELECTOR.map((brand) => (
            <button
              key={brand.name}
              type="button"
              onClick={() => handleSelect(brand.name)}
              className="group p-4 rounded-xl bg-[#0F0F17] border border-[#1E1E2C] hover:border-xt-red transition-all duration-200 flex flex-col items-center justify-between text-center hover:-translate-y-1 shadow-md hover:shadow-glow-red cursor-pointer"
            >
              {/* Brand Vector Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#14141E] border border-[#2A2A3E] group-hover:border-white/40 flex items-center justify-center p-2 mb-3 transition-transform group-hover:scale-110 shadow-inner">
                {renderBrandIcon(brand.name)}
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-white group-hover:text-xt-red transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[9px] font-mono text-[#78788E] line-clamp-1 mt-0.5">
                  {brand.popular}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#181824] w-full flex items-center justify-center gap-1 text-[10px] font-mono text-[#5E5E72] group-hover:text-white transition-colors">
                <span>SELECIONAR</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
