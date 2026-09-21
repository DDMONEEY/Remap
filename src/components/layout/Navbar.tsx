"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageSquare, PhoneCall, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INÍCIO", href: "#" },
    { name: "NÃO É SÓ REMAP", href: "#posicionamento" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060608]/90 backdrop-blur-md border-b border-[#1F1F2A] py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-10 overflow-hidden rounded bg-black/40 border border-[#2A2A38] group-hover:border-xt-red transition-colors flex items-center justify-center p-0.5">
                <Image
                  src="/images/logo-xt.jpg"
                  alt="Planet Xtune Logo"
                  width={48}
                  height={40}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white group-hover:text-xt-red transition-colors">
                    PLANET <span className="text-xt-red">XTUNE</span>
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-xt-red/10 text-xt-red border border-xt-red/30 rounded font-semibold tracking-widest">
                    ECU
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#8E8EA0] uppercase">
                  PERFORMANCE LAB
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono tracking-widest text-[#A0A0B2] hover:text-white hover:text-xt-red transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-xt-red to-xt-purple transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions: WhatsApp CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-xt-red to-[#B30F1A] hover:from-[#FF3340] hover:to-xt-red rounded clip-diagonal transition-all duration-300 shadow-glow-red hover:shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>FALAR COM XTUNE</span>
              </a>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#A0A0B2] hover:text-white hover:bg-[#14141B] rounded border border-[#22222E] transition-colors"
                aria-label="Abrir Menu de Navegação"
              >
                <Menu className="w-6 h-6" />
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

