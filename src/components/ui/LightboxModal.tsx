"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, Tag } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  category?: string;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  category,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0D0D14] border border-[#2A2A3C] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with title and close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F2C] bg-[#09090E]">
          <div className="flex items-center gap-3">
            {category && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-xt-red/10 text-xt-red border border-xt-red/30 tracking-wider uppercase font-semibold">
                {category}
              </span>
            )}
            <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181822] text-[#8E8EA0] hover:text-white hover:bg-[#252535] transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative w-full aspect-video sm:aspect-[16/10] bg-black/60 flex items-center justify-center overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Bottom caption bar */}
        {caption && (
          <div className="px-6 py-4 border-t border-[#1F1F2C] bg-[#0A0A0F] text-sm text-[#A0A0B4] flex items-center justify-between">
            <p className="leading-relaxed">{caption}</p>
            <span className="hidden sm:inline-flex text-[11px] font-mono text-[#606075]">
              ESC para fechar
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

