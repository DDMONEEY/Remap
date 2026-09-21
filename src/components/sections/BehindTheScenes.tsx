"use client";

import React from "react";
import Image from "next/image";
import { BEHIND_THE_SCENES_STEPS, SITE_CONFIG } from "@/data/site-content";
import { Binary, Shield, Cpu, Activity, ArrowRight } from "lucide-react";

export default function BehindTheScenes() {
  return (
    <section id="bastidores" className="py-24 bg-[#08080B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-xt-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Process Steps (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14141E] border border-[#242436] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-3">
                <Binary className="w-3.5 h-3.5" />
                <span>MÉTODO CIENTÍFICO E LABORATÓRIO</span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-tight">
                POR TRÁS DA <span className="text-xt-red">PERFORMANCE.</span>
              </h2>

              <p className="mt-4 text-base text-[#9A9AB0] leading-relaxed">
                Não vendemos apenas números de potência. Entregamos engenharia, diagnóstico avançado e calibração de precisão com protocolo transparente em cada etapa.
              </p>
            </div>

            {/* 4 Process Steps */}
            <div className="flex flex-col gap-4 mt-2">
              {BEHIND_THE_SCENES_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-4 sm:p-5 rounded-xl bg-[#0F0F17] border border-[#1E1E2C] hover:border-[#333348] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-xt-red bg-xt-red/10 border border-xt-red/20 px-2 py-1 rounded shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-xt-red transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#8E8EA4] leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#151522] text-[#707086] border border-[#202030] self-start sm:self-auto shrink-0">
                    {step.telemetry}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Team photo card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#101018] border border-[#222234] shadow-2xl p-2 group">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/about/xtune-team.jpg"
                  alt="Equipe Planet Xtune ECU"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-xt-red text-white uppercase font-bold">
                    LABORATÓRIO & PISTA
                  </span>
                  <p className="font-display font-bold text-lg text-white mt-1">
                    Equipe Planet Xtune ECU
                  </p>
                  <p className="text-xs text-[#A8A8BF]">
                    Profissionais dedicados exclusivamente à eletrônica e acerto de motos.
                  </p>
                </div>
              </div>
            </div>

            {/* Dyno room showcase card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#101018] border border-[#222234] shadow-xl p-2 group">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/projects/dyno-tuning.jpg"
                  alt="Dinamômetro Planet Xtune"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SALA CLIMATIZADA DE DINAMÔMETRO
                    </span>
                    <p className="font-display font-bold text-base text-white">
                      Aferição Sob Carga Contínua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

