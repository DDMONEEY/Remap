"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/site-content";
import { ArrowUpRight, Heart, MessageCircle, Users } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export default function InstagramFeed() {
  const posts = [
    {
      id: "ig-1",
      image: "/images/projects/record-600cc.jpg",
      caption: "Recordista Nacional Moto 600cc 🏆 Desenvolvimento de bancada e pista.",
      likes: "1.240",
      comments: "84",
    },
    {
      id: "ig-2",
      image: "/images/projects/dyno-tuning.jpg",
      caption: "Dinamômetro em operação contínua. Calibração fina em tempo real.",
      likes: "945",
      comments: "62",
    },
    {
      id: "ig-3",
      image: "/images/projects/mxf-bosch.jpg",
      caption: "Soluções XTune ECU para MXF 250 / 270 Bosch MSE6.0.",
      likes: "870",
      comments: "51",
    },
    {
      id: "ig-4",
      image: "/images/gallery/bmw-s1000rr.jpg",
      caption: "BMW S1000RR no dyno. Liberação de potência e ajuste de mapas de pista.",
      likes: "1.520",
      comments: "138",
    },
    {
      id: "ig-5",
      image: "/images/xt-banner.jpg",
      caption: "Power, Speed, Control. Identidade oficial XTune ECU.",
      likes: "1.890",
      comments: "112",
    },
    {
      id: "ig-6",
      image: "/images/about/xtune-team.jpg",
      caption: "Equipe especializada pronta para destravar o limite da sua moto.",
      likes: "1.100",
      comments: "73",
    },
  ];

  return (
    <section className="py-24 bg-[#08080B] relative overflow-hidden border-t border-[#181824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6 bg-[#0E0E16] p-6 rounded-2xl border border-[#222232]">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-xt-red p-0.5 shadow-glow-red">
              <Image
                src="/images/xt-avatar.jpg"
                alt="XTune ECU Instagram Avatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-xl text-white">
                  SIGA A XTUNE
                </h3>
                <span className="text-xs font-mono text-xt-purple font-bold">
                  {SITE_CONFIG.instagram.handle}
                </span>
              </div>
              <p className="text-xs text-[#8E8EA0] mt-0.5">
                Projetos diários, acertos em dinamômetro e bastidores de pista.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#14141E] border border-[#262638] text-[#C0C0D4]">
              <Users className="w-3.5 h-3.5 text-xt-red" />
              <span>{SITE_CONFIG.instagram.followers} seguidores</span>
            </div>

            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-xt-purple to-[#7928CA] hover:from-[#9D4EDD] hover:to-xt-purple text-white text-xs font-mono font-bold tracking-wider shadow-glow-purple transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>VER NO INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-black border border-[#1E1E2C] hover:border-xt-purple transition-all duration-300 block shadow-md hover:shadow-xl"
            >
              <Image
                src={post.image}
                alt="XTune ECU Instagram Post"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />

              {/* Hover overlay with likes & comments */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A0A0B8]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-xt-red fill-current" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-xt-purple" />
                    {post.comments}
                  </span>
                </div>

                <p className="text-[10px] text-[#D0D0E2] line-clamp-3 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center gap-1 text-[9px] font-mono text-xt-purple font-bold">
                  <span>VER POST</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
