"use client";

import React from "react";
import { POSITIONING_PILLARS } from "@/data/site-content";
import { Crosshair, Cpu, Award, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Positioning() {
  const pillarIcons = [
    <Crosshair key="1" className="w-6 h-6 text-xt-red" />,
    <Cpu key="2" className="w-6 h-6 text-xt-purple" />,
    <Award key="3" className="w-6 h-6 text-xt-red" />,
    <Zap key="4" className="w-6 h-6 text-xt-purple" />,
  ];

  return (
    <section id="posicionamento" className="py-24 bg-[#08080B] relative overflow-hidden">
      {/* Glow lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-xt-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-xt-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14141E] border border-[#262638] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-4">
            <span>FILOSOFIA DE ENGENHARIA</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            NÃO É SÓ <span className="text-xt-red">REMAP.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#9E9EB2] leading-relaxed">
            Cada moto possui uma configuração, uma proposta e uma necessidade diferente. A Planet Xtune trabalha com eletrônica, calibração e performance para encontrar o melhor resultado para cada projeto.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSITIONING_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="relative p-6 sm:p-7 rounded-xl bg-[#0F0F16] border border-[#1F1F2C] hover:border-[#3A3A52] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              {/* Corner accent glow on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-[#161622] border border-[#252538] group-hover:scale-110 transition-transform">
                    {pillarIcons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#323246] group-hover:text-xt-red transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white tracking-wide uppercase group-hover:text-xt-red transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-[#76768E] uppercase tracking-wider mt-0.5">
                  {pillar.subtitle}
                </p>

                <p className="mt-4 text-sm text-[#A2A2B6] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#181824] flex items-center justify-between text-xs font-mono text-[#6A6A80] group-hover:text-white transition-colors">
                <span>METODOLOGIA XT</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner quote */}
        <div className="mt-14 p-6 rounded-xl bg-gradient-to-r from-[#12121B] via-[#161624] to-[#12121B] border border-[#222232] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-display font-bold text-xl text-white">
              “Performance não é sorte. É calibração.”
            </p>
            <p className="text-xs font-mono text-[#8E8EA0]">
              Entenda como cada parâmetro é refinado na bancada e em dinamômetro.
            </p>
          </div>
          <Link
            href="#orcamento"
            className="shrink-0 px-5 py-2.5 rounded bg-xt-red hover:bg-[#E50914] text-white text-xs font-mono font-bold tracking-wider clip-diagonal transition-all"
          >
            FALAR COM ESPECIALISTA
          </Link>
        </div>
      </div>
    </section>
  );
}

