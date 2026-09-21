"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { ShieldCheck, Trophy, Cpu, Target } from "lucide-react";

export default function StatsBanner() {
  const icons = [
    <ShieldCheck key="1" className="w-5 h-5 text-xt-red" />,
    <Trophy key="2" className="w-5 h-5 text-yellow-500" />,
    <Cpu key="3" className="w-5 h-5 text-xt-purple" />,
    <Target key="4" className="w-5 h-5 text-xt-red" />,
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0C0C12] border border-[#222232] rounded-xl shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
        {/* Subtle accent border at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-xt-red via-xt-purple to-xt-red" />
        
        {/* Engineering pattern */}
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-[#08080C]/50 border border-[#1A1A26] hover:border-[#2D2D42] transition-colors"
            >
              <div className="mb-2 p-2 rounded-md bg-[#14141E] border border-[#222230]">
                {icons[idx]}
              </div>

              <div className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                <span className={idx % 2 === 0 ? "text-xt-red" : "text-white"}>
                  {stat.value}
                </span>
              </div>

              <h3 className="mt-1 font-mono font-bold text-xs sm:text-sm tracking-wider text-[#E0E0EC] uppercase">
                {stat.label}
              </h3>

              <p className="mt-1 text-[11px] sm:text-xs text-[#7E7E94] leading-tight">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

