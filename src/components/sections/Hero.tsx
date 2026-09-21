"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Gauge, Zap, Activity } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Conheci a XTune ECU pelo site e quero saber mais sobre preparação/remap para minha moto."
  )}`;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060608]">
      {/* Background Banner with grunge / graffiti identity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/xt-banner.jpg"
          alt="XTune ECU Background"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Lightweight gradient overlays without expensive GPU blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/75 to-[#060608]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-transparent to-[#060608]" />
      </div>

      {/* Engineering tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Decorative vertical HUD lines */}
      <div className="hidden lg:block absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#2E2E40] to-transparent pointer-events-none">
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 flex flex-col gap-8 text-[9px] font-mono text-[#666680] tracking-widest uppercase rotate-180 [writing-mode:vertical-rl]">
          <span>TELEMETRY ACQUISITION</span>
          <span className="text-xt-red">PRECISION MAPS</span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#2E2E40] to-transparent pointer-events-none">
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 flex flex-col gap-8 text-[9px] font-mono text-[#666680] tracking-widest uppercase [writing-mode:vertical-rl]">
          <span>RECORDISTA NACIONAL 600CC</span>
          <span className="text-xt-purple">XT SOLUTIONS</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12121A] border border-[#2A2A3C] shadow-lg mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xt-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-xt-red" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#D0D0E2] uppercase">
            XTUNE ECU // LAB & COMPETIÇÃO
          </span>
        </div>

        {/* Primary Impact Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.9] sm:leading-[0.88]">
          PERFORMANCE
          <br />
          <span className="bg-gradient-to-r from-xt-red via-[#FF4D58] to-xt-purple bg-clip-text text-transparent">
            SEM LIMITES.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-xl text-[#B0B0C4] font-normal leading-relaxed tracking-wide">
          Tecnologia, precisão e experiência de laboratório para extrair o máximo de torque, resposta e potência da sua motocicleta.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#orcamento"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded bg-gradient-to-r from-xt-red via-[#E50914] to-[#B30F1A] text-white font-mono text-sm font-bold tracking-wider clip-diagonal shadow-glow-red hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Flame className="w-5 h-5 text-yellow-300" />
            <span>QUERO PREPARAR MINHA MOTO</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            href="#servicos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded bg-[#101017] hover:bg-[#181822] text-[#E0E0EE] hover:text-white font-mono text-sm font-semibold tracking-wider border border-[#2B2B3D] hover:border-xt-purple/60 transition-all duration-200"
          >
            <Gauge className="w-4 h-4 text-xt-purple" />
            <span>CONHECER A XTUNE</span>
          </Link>
        </div>

        {/* Technical telemetry strip */}
        <div className="mt-12 sm:mt-16 w-full max-w-3xl pt-6 border-t border-[#1C1C26] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E2C]">
            <p className="text-[10px] font-mono text-[#6E6E82] uppercase tracking-wider">RPM PEAK</p>
            <p className="text-sm sm:text-base font-mono font-bold text-white flex items-center gap-1.5 mt-0.5">
              <Zap className="w-3.5 h-3.5 text-xt-red" />
              <span>14.500 RPM</span>
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E2C]">
            <p className="text-[10px] font-mono text-[#6E6E82] uppercase tracking-wider">RIDE-BY-WIRE</p>
            <p className="text-sm sm:text-base font-mono font-bold text-white flex items-center gap-1.5 mt-0.5">
              <Activity className="w-3.5 h-3.5 text-xt-purple" />
              <span>RESPOSTA 1:1</span>
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E2C]">
            <p className="text-[10px] font-mono text-[#6E6E82] uppercase tracking-wider">TARGET AFR</p>
            <p className="text-sm sm:text-base font-mono font-bold text-white mt-0.5">
              12.8 — 13.0
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E2C]">
            <p className="text-[10px] font-mono text-[#6E6E82] uppercase tracking-wider">CALIBRAÇÃO</p>
            <p className="text-sm sm:text-base font-mono font-bold text-xt-red mt-0.5">
              INDIVIDUALIZADA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
