"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INÍCIO", href: "#" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "XTUNE LITE", href: "#xtune-lite" },
    { name: "PROJETOS", href: "#projetos" },
    { name: "BASTIDORES", href: "#bastidores" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTATO", href: "#contato" },
  ];

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMsg
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[#060608]/95 border-b border-[#1F1F2A] py-3 shadow-xl"
            : "bg-gradient-to-b from-[#060608] to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="relative w-11 h-9 sm:w-12 sm:h-10 overflow-hidden rounded bg-black/60 border border-[#2A2A38] group-hover:border-xt-red transition-colors flex items-center justify-center p-0.5 shrink-0">
                <Image
                  src="/images/logo-xt.jpg"
                  alt="Planet Xtune Logo"
                  width={48}
                  height={40}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-wider text-white group-hover:text-xt-red transition-colors whitespace-nowrap">
                    PLANET <span className="text-xt-red">XTUNE</span>
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-xt-red/10 text-xt-red border border-xt-red/30 rounded font-semibold tracking-widest shrink-0">
                    ECU
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#8E8EA0] uppercase whitespace-nowrap">
                  PERFORMANCE LAB
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Only on xl screens 1280px+ to completely avoid overlapping) */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono font-medium tracking-widest text-[#B4B4C8] hover:text-white hover:text-xt-red transition-colors relative py-1 whitespace-nowrap group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-xt-red to-xt-purple transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions: WhatsApp CTA + Mobile/Tablet Menu Button */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-xt-red to-[#B30F1A] hover:from-[#FF3340] hover:to-xt-red rounded clip-diagonal transition-all shadow-glow-red hover:shadow-lg active:scale-95 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>FALAR COM XTUNE</span>
              </a>

              {/* Hamburger button (visible on screens below 1280px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden flex items-center gap-2 px-3 py-2 text-[#D0D0E2] hover:text-white bg-[#14141B] hover:bg-[#1A1A24] rounded-lg border border-[#22222E] hover:border-xt-red transition-colors"
                aria-label="Abrir Menu de Navegação"
              >
                <Menu className="w-5 h-5 text-xt-red" />
                <span className="text-xs font-mono font-bold tracking-wider hidden xs:inline">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}
