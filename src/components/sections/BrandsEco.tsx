"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BRANDS_ECOSYSTEM } from "@/data/site-content";
import { Cpu, Bike, Sparkles, ArrowRight } from "lucide-react";

export default function BrandsEco() {
  const [activeTab, setActiveTab] = useState<"all" | "ecu" | "bike">("all");

  const filteredBrands =
    activeTab === "all"
      ? BRANDS_ECOSYSTEM
      : BRANDS_ECOSYSTEM.filter((b) => b.type === activeTab);

  return (
    <section className="py-24 bg-[#060608] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-xt-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12121A] border border-[#242436] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>ECOSSISTEMA & COMPATIBILIDADE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            TECNOLOGIA QUE FALA A LÍNGUA DA <span className="text-xt-red">PERFORMANCE.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#9898AC] leading-relaxed">
            Desenvolvemos e calibramos soluções integradas com os principais fabricantes mundiais de motocicletas e os sistemas de injeção e ECU mais respeitados da alta performance.
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
              TODAS AS MARCAS
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
              <span>SISTEMAS ECU</span>
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
              <span>FABRICANTES DE MOTOS</span>
            </button>
          </div>
        </div>

        {/* Brands Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="group relative p-5 rounded-xl bg-[#0B0B11] border border-[#1A1A24] hover:border-[#383852] transition-all duration-300 flex flex-col items-center text-center justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Top ambient color bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: brand.accent }}
              />

              {/* Logo / Thumbnail with grayscale filter that turns colorful on hover */}
              <div className="my-3 relative w-16 h-16 rounded-full bg-[#14141E] border border-[#242436] group-hover:border-white/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 shadow-inner">
                {brand.logoImage ? (
                  <div className="relative w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={brand.logoImage}
                      alt={brand.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="font-display font-extrabold text-lg text-[#6A6A80] group-hover:text-white transition-colors">
                    {brand.name.substring(0, 3).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Brand Title */}
              <div className="w-full">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161622] text-[#828296] border border-[#1E1E2C] uppercase">
                  {brand.type === "ecu" ? "Eletrônica / ECU" : "Superbike"}
                </span>

                <h3 className="mt-2 font-display font-bold text-lg text-white group-hover:text-xt-red transition-colors tracking-wide">
                  {brand.name}
                </h3>

                <p className="mt-1 text-[11px] text-[#707085] line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* Microinteraction footer */}
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

