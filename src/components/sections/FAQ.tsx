"use client";

import React, { useState } from "react";
import { FAQ_LIST, SITE_CONFIG } from "@/data/site-content";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#08080B] relative overflow-hidden border-t border-[#181824]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-xt-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14141E] border border-[#242436] text-[11px] font-mono text-xt-purple tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ESCLARECIMENTOS TÉCNICOS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            PERGUNTAS <span className="text-xt-red">FREQUENTES</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#9A9AB0]">
            Respostas transparentes e com embasamento de engenharia para as principais dúvidas sobre remap, calibração e eletrônica.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0E0E16] border-xt-red/40 shadow-glow-red"
                    : "bg-[#0B0B11] border-[#1C1C28] hover:border-[#2C2C3E]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-xt-red/70 shrink-0">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-[#161622] text-[#8E8EA0] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-xt-red bg-xt-red/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#181824] animate-in fade-in duration-200">
                    <p className="text-sm text-[#A0A0B8] leading-relaxed pl-7">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA if user still has questions */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#0D0D14] border border-[#222232] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-lg text-white">
              Sua dúvida não foi listada?
            </h4>
            <p className="text-xs text-[#8E8EA0]">
              Fale diretamente com nossa equipe de acerto pelo WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Olá! Estive no site da Planet Xtune e fiquei com uma dúvida técnica sobre remap da minha moto."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-gradient-to-r from-xt-red to-[#B30F1A] text-white text-xs font-mono font-bold tracking-wider clip-diagonal shadow-glow-red hover:shadow-lg transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>TIRAR DÚVIDA COM PREPARADOR</span>
          </a>
        </div>
      </div>
    </section>
  );
}

