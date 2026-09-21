"use client";

import React from "react";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/data/site-content";
import { 
  Cpu, 
  Sliders, 
  Zap, 
  Flame, 
  Activity, 
  Wrench, 
  Code2, 
  Sparkles,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export default function Services() {
  const serviceIcons = [
    <Cpu key="1" className="w-6 h-6 text-xt-red" />,
    <Sliders key="2" className="w-6 h-6 text-xt-purple" />,
    <Zap key="3" className="w-6 h-6 text-yellow-400" />,
    <Flame key="4" className="w-6 h-6 text-orange-500" />,
    <Activity key="5" className="w-6 h-6 text-emerald-400" />,
    <Wrench key="6" className="w-6 h-6 text-xt-red" />,
    <Code2 key="7" className="w-6 h-6 text-xt-purple" />,
    <Sparkles key="8" className="w-6 h-6 text-blue-400" />,
  ];

  return (
    <section id="servicos" className="py-24 bg-[#060608] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#1A1A26] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12121A] border border-[#242436] text-[11px] font-mono text-xt-purple tracking-widest uppercase mb-3">
              <span>SOLUÇÕES EM ELETRÔNICA E PERFORMANCE</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              O QUE A <span className="text-xt-red">XTUNE FAZ</span>
            </h2>
            <p className="mt-3 text-base text-[#9A9AB0] max-w-xl">
              Do acerto de injeção original até gerenciamento programável de competição e desenvolvimento de softwares de bancada.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Olá! Gostaria de consultar os serviços de remap e eletrônica da Planet Xtune."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded bg-[#12121A] border border-[#262638] hover:border-xt-red text-white text-xs font-mono font-bold tracking-wider transition-all group"
          >
            <MessageSquare className="w-4 h-4 text-xt-red" />
            <span>SOLICITAR CONSULTORIA TÉCNICA</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="relative p-6 rounded-xl bg-[#0D0D14] border border-[#1C1C28] hover:border-[#383850] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5 shadow-lg overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2E2E42] to-transparent group-hover:from-xt-red group-hover:to-xt-purple transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-lg bg-[#14141E] border border-[#222232] group-hover:scale-110 transition-transform">
                    {serviceIcons[idx]}
                  </div>
                  <span className="font-mono text-xl font-bold text-[#3E3E56] group-hover:text-white transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide group-hover:text-xt-red transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs text-[#A2A2B8] leading-relaxed">
                  {service.shortDesc}
                </p>

                <p className="mt-3 text-[11px] text-[#6E6E84] leading-relaxed border-t border-[#161622] pt-3">
                  {service.fullDesc}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-[#161622]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#14141E] text-[#86869C] border border-[#1E1E2C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações sobre o serviço: ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono font-semibold text-[#8E8EA0] group-hover:text-xt-red transition-colors"
                >
                  <span>CONSULTAR ESPECIFICAÇÃO</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

