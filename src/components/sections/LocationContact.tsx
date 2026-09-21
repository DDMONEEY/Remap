"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ExternalLink,
  Navigation,
  ShieldCheck
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export default function LocationContact() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMsg
  )}`;

  return (
    <section id="contato" className="py-24 bg-[#060608] relative overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-xt-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14141E] border border-[#242436] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-3">
                <Navigation className="w-3.5 h-3.5" />
                <span>LABORATÓRIO & ATENDIMENTO</span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-tight">
                VENHA CONHECER A <span className="text-xt-red">XTUNE.</span>
              </h2>

              <p className="mt-3 text-base text-[#9A9AB0] leading-relaxed">
                Agende uma visita ao nosso laboratório para avaliação do seu projeto ou consulte o procedimento para envio da sua central eletrônica de qualquer lugar do Brasil.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {/* WhatsApp Direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0D14] border border-[#1E1E2C] hover:border-xt-red transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8E8EA0] uppercase">
                      WHATSAPP OFICIAL & AGENDAMENTOS
                    </span>
                    <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#606072] group-hover:text-white transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0D14] border border-[#1E1E2C] hover:border-xt-purple transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-lg bg-xt-purple/10 border border-xt-purple/30 text-xt-purple group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8E8EA0] uppercase">
                      INSTAGRAM OFICIAL
                    </span>
                    <p className="text-base font-bold text-white group-hover:text-xt-purple transition-colors">
                      {SITE_CONFIG.instagram.handle}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#606072] group-hover:text-white transition-colors" />
              </a>

              {/* Schedule */}
              <div className="p-4 rounded-xl bg-[#0D0D14] border border-[#1E1E2C] flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-[#14141E] border border-[#242436] text-xt-red">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8E8EA0] uppercase">
                    HORÁRIO DE FUNCIONAMENTO
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {SITE_CONFIG.address.schedule}
                  </p>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-xl bg-[#0D0D14] border border-[#1E1E2C] flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-[#14141E] border border-[#242436] text-xt-purple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8E8EA0] uppercase">
                    LOCALIZAÇÃO DO LABORATÓRIO
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {SITE_CONFIG.address.label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Dark Map Frame (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#0F0F17] border border-[#222234] p-4 shadow-2xl overflow-hidden group">
              {/* Map header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1C1C2A] mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <span className="w-2 h-2 rounded-full bg-xt-red animate-ping" />
                  <span className="font-bold">SEDE & LABORATÓRIO — MARINGÁ/PR</span>
                </div>
                <span className="text-[10px] font-mono text-[#78788E]">
                  ATENDIMENTO BRASIL
                </span>
              </div>

              {/* Stylized Dark Map Box */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0F] border border-[#1A1A26] flex items-center justify-center p-6 text-center">
                {/* Tech grid texture */}
                <div className="absolute inset-0 bg-tech-grid opacity-30" />

                {/* Radar effect circles */}
                <div className="absolute w-64 h-64 rounded-full border border-xt-red/20 animate-pulse pointer-events-none" />
                <div className="absolute w-96 h-96 rounded-full border border-xt-purple/10 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-3 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-xt-red/10 border-2 border-xt-red flex items-center justify-center text-xt-red shadow-glow-red">
                    <MapPin className="w-7 h-7" />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-2xl text-white uppercase">
                      Maringá — Paraná
                    </h4>
                    <p className="text-xs text-[#9090A6] mt-1 leading-relaxed">
                      Hub de desenvolvimento de ECU, calibração em dinamômetro e recebimento de centrais de todo o Brasil via correios e transportadoras.
                    </p>
                  </div>

                  <a
                    href={SITE_CONFIG.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded bg-gradient-to-r from-xt-red to-[#B30F1A] text-white font-mono text-xs font-bold tracking-wider clip-diagonal shadow-glow-red hover:shadow-lg transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>ABRIR NO GOOGLE MAPS</span>
                  </a>
                </div>
              </div>

              {/* Map Footer status */}
              <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#787890]">
                <span>RECEBIMENTO DE ECUS VIA SEDEX</span>
                <span className="text-emerald-400 font-semibold">LAB ATIVO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
