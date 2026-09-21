"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMsg
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-[#0F0F16] text-white text-xs font-mono py-2 px-3 rounded-lg border border-xt-red/50 shadow-glow-red animate-in fade-in slide-in-from-right-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Falar com especialista XTune</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2BF47A] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Pulse effect rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />
        <span className="absolute -inset-2 rounded-full border border-[#25D366]/30 pointer-events-none" />

        <MessageSquare className="w-6 h-6 fill-current relative z-10" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#060608] rounded-full z-20" />
      </a>
    </div>
  );
}

