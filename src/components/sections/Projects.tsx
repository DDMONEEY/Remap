"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, SITE_CONFIG } from "@/data/site-content";
import { Trophy, Gauge, ArrowRight, Tag, ZoomIn, CheckCircle } from "lucide-react";
import LightboxModal from "../ui/LightboxModal";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
    category: string;
  } | null>(null);

  return (
    <section id="projetos" className="py-24 bg-[#08080B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-xt-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-xt-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14141F] border border-[#262638] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>RESULTADOS DE PISTA E BANCADA</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-none">
            RESULTADO NÃO SE EXPLICA.
            <br />
            <span className="text-xt-red">SE MOSTRA.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#9E9EB2] leading-relaxed">
            Projetos reais desenvolvidos pela Planet Xtune ECU. De motos de recorde nacional de pista a acertos de bancada e softwares proprietários.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl bg-[#0F0F16] border border-[#1E1E2C] hover:border-[#383850] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image Preview with Hover Zoom */}
              <div
                className="relative w-full aspect-[4/3] bg-black overflow-hidden cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src: project.image,
                    title: project.title,
                    caption: project.description,
                    category: project.category,
                  })
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F16] via-transparent to-black/30" />

                {/* Highlight Badge */}
                {project.highlight && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-xt-red text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-glow-red">
                    {project.highlight}
                  </div>
                )}

                {/* Zoom indicator on hover */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E8EA0] mb-1.5">
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white tracking-wide group-hover:text-xt-red transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-mono text-xs text-xt-purple tracking-wider uppercase font-semibold mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#A0A0B4] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="mt-6 pt-4 border-t border-[#1C1C28]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#161622] text-[#86869E] border border-[#222234]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Vi o projeto ${project.title} (${project.subtitle}) no site e gostaria de saber mais sobre um acerto similar para minha moto.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-xt-red transition-colors"
                  >
                    <span>CONVERSAR SOBRE ESSE PROJETO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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

