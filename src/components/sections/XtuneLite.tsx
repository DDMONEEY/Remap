"use client";

import React from "react";
import Image from "next/image";
import { XTUNE_LITE_PRODUCT, SITE_CONFIG } from "@/data/site-content";
import { 
  Laptop, 
  CheckCircle2, 
  Binary, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Terminal,
  FileCode2,
  HardDrive
} from "lucide-react";

export default function XtuneLite() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais informações e adquirir o software XTUNE LITE para Honda Denso."
  )}`;

  return (
    <section id="xtune-lite" className="py-24 bg-[#09090E] relative overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-xt-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-xt-purple/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Product Information (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded bg-xt-red/10 border border-xt-red/30 text-xt-red text-[11px] font-mono font-bold tracking-widest uppercase">
                {XTUNE_LITE_PRODUCT.badge}
              </span>
              <span className="px-3 py-1 rounded bg-[#161622] border border-[#262638] text-[#A0A0B8] text-[11px] font-mono tracking-wider uppercase">
                HONDA DENSO SOLUTIONS
              </span>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
                XTUNE <span className="text-xt-red">LITE</span>
              </h2>
              <p className="font-mono text-sm sm:text-base text-xt-purple tracking-widest uppercase mt-1">
                {XTUNE_LITE_PRODUCT.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#B0B0C4] leading-relaxed">
              {XTUNE_LITE_PRODUCT.description}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {XTUNE_LITE_PRODUCT.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-3 rounded-lg bg-[#101018] border border-[#1E1E2C] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-xt-red shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-mono text-xs font-bold text-white uppercase">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] text-[#7A7A90] mt-0.5 leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compatible Models Box */}
            <div className="p-4 rounded-xl bg-[#0D0D14] border border-[#222232]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white mb-2 uppercase">
                <Cpu className="w-4 h-4 text-xt-purple" />
                <span>Modelos Honda Compatíveis (Linha 2022+):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {XTUNE_LITE_PRODUCT.compatibleModels.map((item) => (
                  <span
                    key={item.model}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#151520] border border-[#242436] text-[#D0D0E2]"
                  >
                    <strong className="text-white">{item.model}</strong> ({item.year})
                  </span>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="p-3.5 rounded-lg bg-[#14141E] border border-xt-red/30">
                <span className="text-[10px] font-mono text-[#8E8EA0] uppercase block">
                  VALOR DE LANÇAMENTO
                </span>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-white text-xt-red">
                  {XTUNE_LITE_PRODUCT.price}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded bg-gradient-to-r from-xt-red to-[#B30F1A] text-white font-mono text-xs sm:text-sm font-bold tracking-wider clip-diagonal shadow-glow-red hover:shadow-xl active:scale-95 transition-all"
              >
                <span>CONHECER XTUNE LITE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Laptop Mockup Interface (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glow backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-xt-red/20 via-xt-purple/20 to-transparent blur-2xl rounded-2xl transform -rotate-1" />

              {/* Laptop Shell Container */}
              <div className="relative rounded-2xl bg-[#14141E] border border-[#2A2A3C] p-3 sm:p-4 shadow-2xl">
                {/* Laptop Top Bezel / Webcam bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#222234] mb-3 bg-[#0C0C12] rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7E7E94]">
                    <Terminal className="w-3 h-3 text-xt-red" />
                    <span>XTUNE LITE // ECU INTERFACE v2.4</span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    CONNECTED
                  </span>
                </div>

                {/* Laptop Screen Content with Real XTune Lite Photo */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-black border border-[#1F1F30]">
                  <Image
                    src={XTUNE_LITE_PRODUCT.image}
                    alt="XTune Lite Software Laptop Mockup"
                    fill
                    className="object-cover object-center filter brightness-105 contrast-110"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  {/* Subtle scanline and HUD telemetry overlay */}
                  <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

                  {/* Corner interface badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#A0A0B8]">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-3.5 h-3.5 text-xt-red" />
                      <span>DENSO FLASH: SYNCED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCode2 className="w-3.5 h-3.5 text-xt-purple" />
                      <span>PINOUT MANUAL: LOADED</span>
                    </div>
                  </div>
                </div>

                {/* Laptop Bottom Deck Base */}
                <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-b-lg bg-[#0C0C12] border-t border-[#222234] text-[10px] font-mono text-[#6E6E84]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>STATUS: OPERACIONAL EM BANCADA</span>
                  </div>
                  <span>PORT: USB-CAN BUS // 500 KBPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

