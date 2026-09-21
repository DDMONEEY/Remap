"use client";

import React, { useState } from "react";
import { XTUNE_LITE_PRODUCT, SITE_CONFIG } from "@/data/site-content";
import { 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  Terminal,
  FileCode2,
  HardDrive,
  Activity,
  Play,
  Layers,
  Sliders,
  Check
} from "lucide-react";

export default function XtuneLite() {
  const [selectedModel, setSelectedModel] = useState("Honda CG 160 (2022+)");

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais informações e adquirir o software XTUNE LITE para Honda Denso."
  )}`;

  return (
    <section id="xtune-lite" className="py-20 sm:py-24 bg-[#09090E] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Product Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded bg-xt-red/10 border border-xt-red/30 text-xt-red text-[11px] font-mono font-bold tracking-widest uppercase">
                {XTUNE_LITE_PRODUCT.badge}
              </span>
              <span className="px-3 py-1 rounded bg-[#161622] border border-[#262638] text-[#A0A0B8] text-[11px] font-mono tracking-wider uppercase">
                HONDA DENSO SOLUTIONS
              </span>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {XTUNE_LITE_PRODUCT.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-3 rounded-lg bg-[#11111A] border border-[#202030] flex items-start gap-2.5"
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

            {/* Price & CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="p-3 rounded-lg bg-[#14141E] border border-xt-red/30 shrink-0">
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
                className="flex items-center justify-center gap-3 px-7 py-3.5 rounded bg-gradient-to-r from-xt-red to-[#B30F1A] text-white font-mono text-xs sm:text-sm font-bold tracking-wider clip-diagonal shadow-glow-red hover:shadow-xl active:scale-95 transition-all"
              >
                <span>CONHECER XTUNE LITE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Ultra-Crisp High-Tech Laptop Mockup Interface (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#14141E] border border-[#2A2A3C] p-3 sm:p-4 shadow-2xl">
              {/* Laptop Top Bezel / Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#222234] mb-3 bg-[#0C0C12] rounded-t-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Terminal className="w-3.5 h-3.5 text-xt-red" />
                  <span className="font-bold tracking-wider">XTUNE LITE — HONDA DENSO ECU v2.4</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  HARDWARE ONLINE
                </span>
              </div>

              {/* Crisp ECU Software Screen Viewport */}
              <div className="bg-[#07070B] border border-[#1E1E2C] rounded-lg p-3 sm:p-4 font-mono text-xs text-[#A0A0B8]">
                {/* Software Top Toolbar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1A1A26] text-[11px]">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold bg-[#141420] px-2 py-1 rounded border border-[#242436]">
                      ECU: DENSO 38770-K2G
                    </span>
                    <span className="hidden sm:inline text-xt-purple">FLASH: 64KB</span>
                    <span className="hidden sm:inline text-emerald-400">CHECKSUM: OK</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xt-red">
                    <Activity className="w-3.5 h-3.5" />
                    <span>CAN-BUS: 500 KBPS</span>
                  </div>
                </div>

                {/* Main software work area */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Left Column: Model Selection & Actions */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-[#707085] uppercase tracking-wider font-bold">
                      MODELOS COMPATÍVEIS:
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {XTUNE_LITE_PRODUCT.compatibleModels.map((item) => (
                        <button
                          key={item.model}
                          onClick={() => setSelectedModel(item.model)}
                          className={`p-2 rounded text-left transition-colors flex items-center justify-between border ${
                            selectedModel === item.model
                              ? "bg-xt-red/10 border-xt-red/50 text-white font-bold"
                              : "bg-[#101018] border-[#1C1C28] text-[#8E8EA0] hover:text-white"
                          }`}
                        >
                          <span className="text-[11px]">{item.model}</span>
                          <span className="text-[9px] text-xt-purple">{item.note}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#1A1A26] flex flex-col gap-1.5">
                      <div className="p-2 rounded bg-[#0E0E16] border border-[#1E1E2C] text-[10px]">
                        <span className="text-white font-bold block">PINAGEM DE BANCADA</span>
                        <span className="text-[#78788E]">Manual ilustrado incluso</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: 3D Ignition Map Grid */}
                  <div className="sm:col-span-2 bg-[#0B0B12] border border-[#1E1E2C] rounded-lg p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="text-white font-bold flex items-center gap-1">
                          <Sliders className="w-3 h-3 text-xt-purple" />
                          MAPA PRINCIPAL // AVANÇO DE IGNIÇÃO
                        </span>
                        <span className="text-xt-red text-[10px]">AFR TARGET: 12.8</span>
                      </div>

                      {/* Visual Map Grid Matrix */}
                      <div className="grid grid-cols-6 gap-1 text-[10px] text-center my-2 font-mono">
                        <div className="bg-[#12121C] text-[#6E6E82] p-1 rounded">RPM</div>
                        <div className="bg-[#12121C] text-[#6E6E82] p-1 rounded">20%</div>
                        <div className="bg-[#12121C] text-[#6E6E82] p-1 rounded">40%</div>
                        <div className="bg-[#12121C] text-[#6E6E82] p-1 rounded">60%</div>
                        <div className="bg-[#12121C] text-[#6E6E82] p-1 rounded">80%</div>
                        <div className="bg-[#12121C] text-[#6E6E82] p-1 rounded">WOT</div>

                        <div className="bg-[#101018] text-[#808096] p-1 rounded">4.000</div>
                        <div className="bg-[#161624] text-white p-1 rounded">18°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">22°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">26°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">30°</div>
                        <div className="bg-xt-red/20 text-white border border-xt-red/40 p-1 rounded font-bold">34°</div>

                        <div className="bg-[#101018] text-[#808096] p-1 rounded">8.000</div>
                        <div className="bg-[#161624] text-white p-1 rounded">24°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">28°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">32°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">36°</div>
                        <div className="bg-xt-red/20 text-white border border-xt-red/40 p-1 rounded font-bold">40°</div>

                        <div className="bg-[#101018] text-[#808096] p-1 rounded">11.000</div>
                        <div className="bg-[#161624] text-white p-1 rounded">28°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">32°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">36°</div>
                        <div className="bg-[#161624] text-white p-1 rounded">40°</div>
                        <div className="bg-xt-red/30 text-xt-red border border-xt-red/60 p-1 rounded font-bold">44°</div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#181824] gap-2 mt-2">
                      <button className="flex-1 py-1.5 px-2 bg-[#161624] hover:bg-[#1E1E30] text-white text-[10px] rounded border border-[#28283E] text-center font-bold">
                        LEITURA ECU
                      </button>
                      <button className="flex-1 py-1.5 px-2 bg-gradient-to-r from-xt-red to-[#B30F1A] text-white text-[10px] rounded text-center font-bold shadow-glow-red">
                        GRAVAR ARQUIVO
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="mt-3 pt-2.5 border-t border-[#181824] flex items-center justify-between text-[10px] text-[#707085]">
                  <span>PORTA: USB-CAN ADAPTER DETECTADO</span>
                  <span className="text-emerald-400 font-bold">CALIBRAÇÃO VALIDADA (SEM ERROS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
