import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, MapPin, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/data/site-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMsg
  )}`;

  return (
    <footer className="relative bg-[#050507] border-t border-[#1C1C26] pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-xt-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-xt-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A24]">
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="#" className="flex items-center gap-3">
              <div className="relative w-12 h-10 overflow-hidden rounded bg-black/50 border border-[#2A2A38] p-0.5">
                <Image
                  src="/images/logo-xt.jpg"
                  alt="XTune ECU Logo"
                  width={48}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                  XTUNE <span className="text-xt-red">ECU</span>
                </span>
                <p className="text-[10px] font-mono tracking-widest text-[#8E8EA0] uppercase">
                  PERFORMANCE SEM LIMITES
                </p>
              </div>
            </Link>

            <p className="text-sm text-[#A0A0B4] leading-relaxed max-w-md">
              Especialistas em eletrônica de alta performance para motocicletas. Acerto de ECU em bancada e dinamômetro, integração FuelTech e InjePro, e desenvolvimento de softwares de calibração proprietários.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-[#101016] border border-[#252535] text-[#D0D0E0]">
                <ShieldCheck className="w-3.5 h-3.5 text-xt-red" />
                <span>Recordista Nacional 600cc</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-[#101016] border border-[#252535] text-[#D0D0E0]">
                <Cpu className="w-3.5 h-3.5 text-xt-purple" />
                <span>+1.000 Motos Mapeadas</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-xt-red pl-2.5">
              NAVEGAÇÃO
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#9E9EB2]">
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="text-xs font-mono text-xt-red/60 group-hover:text-xt-red transition-colors">01.</span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="#posicionamento" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="text-xs font-mono text-xt-red/60 group-hover:text-xt-red transition-colors">02.</span>
                  Não é Só Remap
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="text-xs font-mono text-xt-red/60 group-hover:text-xt-red transition-colors">03.</span>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#xtune-lite" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="text-xs font-mono text-xt-red/60 group-hover:text-xt-red transition-colors">04.</span>
                  XTune Lite (Software)
                </Link>
              </li>
              <li>
                <Link href="#projetos" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="text-xs font-mono text-xt-red/60 group-hover:text-xt-red transition-colors">05.</span>
                  Projetos & Resultados
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="text-xs font-mono text-xt-red/60 group-hover:text-xt-red transition-colors">06.</span>
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Channels (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-xt-purple pl-2.5">
              CANAIS OFICIAIS
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#0F0F16] border border-[#222230] hover:border-xt-red/60 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-xt-red/10 border border-xt-red/30 flex items-center justify-center text-xt-red group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#8E8EA0]">Atendimento & Orçamentos</p>
                    <p className="text-sm font-bold text-white group-hover:text-xt-red transition-colors">WhatsApp Oficial</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#606075] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#0F0F16] border border-[#222230] hover:border-xt-purple/60 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-xt-purple/10 border border-xt-purple/30 flex items-center justify-center text-xt-purple group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#8E8EA0]">Acompanhe os Projetos</p>
                    <p className="text-sm font-bold text-white group-hover:text-xt-purple transition-colors">{SITE_CONFIG.instagram.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#606075] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A0A0F] border border-[#1A1A24] text-xs font-mono text-[#8E8EA0]">
                <MapPin className="w-4 h-4 text-xt-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">{SITE_CONFIG.address.label}</p>
                  <p className="text-[11px] text-[#707085]">{SITE_CONFIG.address.schedule}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E6E82]">
          <p>© {currentYear} XTune ECU. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>ECU CALIBRATION & HARDWARE</span>
            <span className="text-[#3A3A4A]">•</span>
            <span>HIGH PERFORMANCE ENGINES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
