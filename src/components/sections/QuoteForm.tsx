"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Bike, 
  RotateCcw,
  Sparkles,
  Zap,
  ShieldCheck
} from "lucide-react";

interface QuoteFormProps {
  selectedBrand?: string;
}

export default function QuoteForm({ selectedBrand }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    instagram: "",
    marca: selectedBrand || "BMW",
    modelo: "",
    ano: "",
    cilindrada: "",
    uso: "Rua",
    objetivo: "Remap",
    modificacoes: "",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedBrand) {
      setFormData((prev) => ({ ...prev, marca: selectedBrand }));
    }
  }, [selectedBrand]);

  const usos = ["Rua", "Pista", "Track Day", "Competição", "Outro"];
  const objetivos = [
    "Remap",
    "Mais potência",
    "Mais resposta",
    "FuelTech",
    "InjePro",
    "Diagnóstico",
    "Projeto personalizado",
  ];

  const marcasOptions = [
    "BMW",
    "Yamaha",
    "Kawasaki",
    "Ducati",
    "Honda",
    "Triumph",
    "Suzuki",
    "KTM",
    "Outra Fabricante",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare structured message for WhatsApp
    const message = `*SOLICITAÇÃO DE AVALIAÇÃO — PLANET XTUNE ECU*
---------------------------------------
*Cliente:* ${formData.nome || "Não informado"}
*WhatsApp:* ${formData.whatsapp || "Não informado"}
*Instagram:* ${formData.instagram || "Não informado"}
---------------------------------------
*DADOS DA MOTO:*
*Marca:* ${formData.marca}
*Modelo:* ${formData.modelo || "A informar"}
*Ano:* ${formData.ano || "A informar"}
*Cilindrada:* ${formData.cilindrada || "A informar"}
*Uso Pretendido:* ${formData.uso}
*Objetivo:* ${formData.objetivo}
---------------------------------------
*Modificações Realizadas:*
${formData.modificacoes || "Nenhuma / Original"}
*Detalhes Adicionais:*
${formData.mensagem || "Avaliação técnica geral"}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;

    // Mark as submitted
    setSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-[#060608] relative overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-xt-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12121A] border border-[#242436] text-[11px] font-mono text-xt-red tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AVALIAÇÃO TÉCNICA PERSONALIZADA</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            VAMOS FALAR SOBRE A <span className="text-xt-red">SUA MOTO.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#9A9AB0] max-w-xl mx-auto">
            Preencha os dados do seu projeto. Nossos especialistas em calibração farão a análise técnica do conjunto para indicar a melhor solução.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#0C0C14] border border-[#222232] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-xt-red via-xt-purple to-xt-red rounded-t-2xl" />

          {submitted ? (
            /* Confirmation Screen */
            <div className="text-center py-12 flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                AVALIAÇÃO SOLICITADA COM SUCESSO!
              </h3>

              <p className="mt-3 text-sm text-[#A0A0B8] max-w-md">
                Os dados da sua moto foram organizados e a conversa no WhatsApp oficial da Planet Xtune foi iniciada. Caso a janela não tenha aberto, utilize o botão abaixo:
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded bg-gradient-to-r from-xt-red to-[#B30F1A] text-white font-mono text-xs font-bold tracking-wider shadow-glow-red flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ABRIR CONVERSA NO WHATSAPP</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 rounded bg-[#161622] hover:bg-[#202030] text-xs font-mono text-[#8E8EA0] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Enviar Outro Projeto</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(44) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Instagram (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="@seuperfil"
                    value={formData.instagram}
                    onChange={(e) =>
                      setFormData({ ...formData, instagram: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-purple transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Bike Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Fabricante *
                  </label>
                  <select
                    value={formData.marca}
                    onChange={(e) =>
                      setFormData({ ...formData, marca: e.target.value })
                    }
                    className="w-full px-3 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red"
                  >
                    {marcasOptions.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Modelo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: S1000RR / MT-09"
                    value={formData.modelo}
                    onChange={(e) =>
                      setFormData({ ...formData, modelo: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Ano *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 2023"
                    value={formData.ano}
                    onChange={(e) =>
                      setFormData({ ...formData, ano: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Cilindrada
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 1000cc / 600cc"
                    value={formData.cilindrada}
                    onChange={(e) =>
                      setFormData({ ...formData, cilindrada: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red"
                  />
                </div>
              </div>

              {/* Row 3: Uso Pretendido */}
              <div>
                <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-2 font-semibold">
                  Uso Pretendido da Motocicleta:
                </label>
                <div className="flex flex-wrap gap-2">
                  {usos.map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setFormData({ ...formData, uso: u })}
                      className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                        formData.uso === u
                          ? "bg-xt-red text-white shadow-glow-red border border-transparent"
                          : "bg-[#14141E] text-[#8E8EA0] border border-[#222232] hover:border-white/20"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Objetivo Principal */}
              <div>
                <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-2 font-semibold">
                  Objetivo Principal com a Xtune:
                </label>
                <div className="flex flex-wrap gap-2">
                  {objetivos.map((obj) => (
                    <button
                      key={obj}
                      type="button"
                      onClick={() => setFormData({ ...formData, objetivo: obj })}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                        formData.objetivo === obj
                          ? "bg-xt-purple text-white shadow-glow-purple border border-transparent"
                          : "bg-[#14141E] text-[#8E8EA0] border border-[#222232] hover:border-white/20"
                      }`}
                    >
                      {obj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Modificações & Mensagem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Modificações Já Realizadas (Escape, Filtro, etc.)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Escape ponteira ou full esportivo, filtro K&N, vela iridium, moto original..."
                    value={formData.modificacoes}
                    onChange={(e) =>
                      setFormData({ ...formData, modificacoes: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-red resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8EA0] uppercase mb-1.5 font-semibold">
                    Conte Mais Sobre Sua Moto ou Dúvidas
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Moto com buraco em média rotação, quero tirar limitador de velocidade, uso em track day..."
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({ ...formData, mensagem: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-[#14141E] border border-[#222232] text-white text-sm focus:outline-none focus:border-xt-purple resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1C1C28]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#787890]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Atendimento técnico sem compromisso</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-xt-red via-[#E50914] to-[#B30F1A] text-white font-mono text-sm font-bold tracking-wider clip-diagonal shadow-glow-red hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SOLICITAR AVALIAÇÃO</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

