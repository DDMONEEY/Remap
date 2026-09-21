"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/site-content";
import { Trophy, ShieldCheck, Flame, Gauge, Cpu, CheckCircle } from "lucide-react";

export default function Authority() {
  const credentials = [
    {
      title: "+1.000 Motos Mapeadas",
      desc: "Histórico consolidado em motos de alta cilindrada (BMW, Yamaha, Kawasaki, Ducati, Honda) e motos de competição.",
      icon: <ShieldCheck className="w-5 h-5 text-xt-red" />,
    },
    {
      title: "Recordista Nacional Moto 600cc",
      desc: "Resultado comprovado em pista e bancada com troféus oficiais de 1º lugar na categoria 600cc.",
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Desenvolvimento de Soluções Próprias",
      desc: "Criação de ferramentas e softwares de reprogramação como a plataforma XTune Lite para centrais Denso e Bosch.",
      icon: <Cpu className="w-5 h-5 text-xt-purple" />,
    },
    {
      title: "Especialistas em FuelTech & InjePro",
      desc: "Instalação e acerto de módulos programáveis com confecção de chicotes dedicados e telemetria de sensores.",
      icon: <Flame className="w-5 h-5 text-xt-red" />,
    },
  ];

  return (
    <section className="py-24 bg-[#060608] relative overflow-hidden border-y border-[#181824]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-xt-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Banner Card with Record Trophy Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#101018] border border-[#26263A] p-3 shadow-2xl">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/projects/record-600cc.jpg"
                  alt="Recorde Nacional 600cc Planet Xtune"
                  fill
                  className="object-cover object-center filter brightness-95 contrast-110"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-xt-red text-white text-xs font-mono font-bold uppercase w-fit shadow-glow-red">
                    <Trophy className="w-4 h-4 text-yellow-300" />
                    <span>RECORDISTA NACIONAL MOTO 600CC</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    Kawasaki Ninja ZX-6R
                  </h3>
                  <p className="text-xs text-[#C0C0D4]">
                    Troféus de 1º lugar e comprovação máxima de eficiência mecânica e eletrônica sob regime de corrida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authority Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-xt-purple font-semibold tracking-widest uppercase">
                CREDENCIAIS E RESULTADOS
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-tight mt-1">
                EXPERIÊNCIA QUE VAI <span className="text-xt-red">ALÉM DA OFICINA.</span>
              </h2>
              <p className="mt-4 text-base text-[#9A9AB0] leading-relaxed">
                Nosso trabalho combina bancada eletrônica, testes em dinamômetro e validação sob as condições mais severas do motociclismo de velocidade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="p-5 rounded-xl bg-[#0D0D14] border border-[#1E1E2C] hover:border-[#34344A] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 rounded-lg bg-[#14141F] border border-[#222232] w-fit mb-3">
                      {cred.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {cred.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#8A8A9E] leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee quote */}
            <div className="p-4 rounded-xl bg-[#101018] border-l-4 border-xt-red border-y border-r border-[#1F1F2E] flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Backup vitalício do arquivo original da sua central
                </p>
                <p className="text-xs text-[#7A7A90]">
                  Garantia de reversão para os padrões de fábrica a qualquer momento.
                </p>
              </div>
              <CheckCircle className="w-5 h-5 text-xt-red shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

