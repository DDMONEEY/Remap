"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/site-content";
import { Camera, ZoomIn, Eye } from "lucide-react";
import LightboxModal from "../ui/LightboxModal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
    category: string;
  } | null>(null);

  return (
    <section className="py-20 bg-[#060608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-[#1A1A24] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-xt-purple tracking-widest uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>EDITORIAL MOTORSPORT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              GALERIA DE <span className="text-xt-red">BASTIDORES E PISTA</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#78788E]">
            CLIQUE PARA AMPLIAR EM ALTA RESOLUÇÃO
          </p>
        </div>

        {/* Asymmetrical Grid / Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, index) => {
            const isWide = index === 0 || index === 4;
            return (
              <div
                key={item.id}
                onClick={() =>
                  setSelectedImage({
                    src: item.image,
                    title: item.title,
                    caption: item.caption,
                    category: item.category,
                  })
                }
                className={`group relative rounded-xl overflow-hidden bg-[#0F0F16] border border-[#1E1E2C] hover:border-xt-red/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${
                  isWide ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badges & Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-xt-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A8A8C0] mt-1 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          title={selectedImage.title}
          caption={selectedImage.caption}
          category={selectedImage.category}
        />
      )}
    </section>
  );
}

