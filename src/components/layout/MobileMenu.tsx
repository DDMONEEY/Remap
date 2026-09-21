"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MessageSquare, MapPin, ChevronRight, Activity } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/data/site-content";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ name: string; href: string }>;
  whatsappUrl: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  whatsappUrl,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#060608]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300 overflow-y-auto">
      {/* Header inside mobile menu */}
      <div className="flex items-center justify-between border-b border-[#1F1F2A] pb-5">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-10 overflow-hidden rounded bg-black/40 border border-[#2A2A38] flex items-center justify-center p-0.5">
            <Image
              src="/images/logo-xt.jpg"
              alt="Planet Xtune Logo"
              width={48}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-xl tracking-wider text-white">
                PLANET <span className="text-xt-red">XTUNE</span>
              </span>
              <span className="text-[10px] font-mono px-1 py-0.5 bg-xt-red/10 text-xt-red border border-xt-red/30 rounded font-semibold tracking-widest">
                ECU
              </span>
            </div>
            <p className="text-[9px] font-mono text-[#8E8EA0] uppercase tracking-widest">
              PERFORMANCE SEM LIMITES
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#14141B] border border-[#2A2A38] text-white hover:text-xt-red hover:border-xt-red transition-colors"
          aria-label="Fechar Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation list */}
      <nav className="my-8 flex flex-col gap-3">
        {links.map((link, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#12121A] transition-all border border-transparent hover:border-[#222230]"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-xt-red/70 group-hover:text-xt-red">
                  {num} //
                </span>
                <span className="font-display font-bold text-2xl tracking-wider text-[#E2E2EC] group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#4A4A5E] group-hover:text-xt-red group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </nav>

      {/* Quick CTAs and Social footer inside mobile menu */}
      <div className="pt-6 border-t border-[#1F1F2A] flex flex-col gap-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded bg-gradient-to-r from-xt-red to-[#B30F1A] text-white font-mono text-sm font-bold tracking-wider shadow-glow-red hover:shadow-lg transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          <span>FALAR NO WHATSAPP</span>
        </a>

        <div className="flex items-center justify-between text-xs font-mono text-[#8E8EA0] pt-2">
          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-xt-purple" />
            <span>{SITE_CONFIG.instagram.handle}</span>
          </a>

          <div className="flex items-center gap-1.5 text-[11px] text-[#6E6E82]">
            <Activity className="w-3.5 h-3.5 text-xt-red animate-pulse" />
            <span>LAB MARINGÁ-PR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
