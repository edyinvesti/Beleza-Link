import React from 'react';
import { Cpu, PlayCircle, ScanLine, BarChart3, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import MarcasElite from '../MarcasElite';

export const IATab = () => {
  const cards = [
    { id: 'live', title: 'Transmissão Ao Vivo', icon: PlayCircle, desc: 'Selo Neon Ativo', color: 'from-red-600 to-red-900' },
    { id: 'ia', title: 'IA Inteligente', icon: Cpu, desc: 'Análise de Perfil', color: 'from-orange-500 to-orange-800' },
    { id: 'scanner', title: 'Scanner Facial', icon: ScanLine, desc: 'Visagismo Digital', color: 'from-zinc-700 to-zinc-900' },
    { id: 'cursos', title: 'Cursos & Treinos', icon: GraduationCap, desc: 'Elite Academy', color: 'from-blue-600 to-blue-900' },
    { id: 'financeiro', title: 'Gestão Pro', icon: BarChart3, desc: 'Fluxo de Caixa', color: 'from-emerald-600 to-emerald-900' },
    { id: 'vitrine', title: 'Minha Vitrine', icon: MapPin, desc: 'Geolocalização', color: 'from-purple-600 to-purple-900' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* CABEÇALHO DO PAINEL */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">PAINEL <span className="text-[#F97316]">MASTER</span></h2>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Gerenciamento de Elite</p>
        </div>
        <Sparkles className="text-[#F97316] animate-pulse" size={24} />
      </div>

      {/* GRADE DE CARDS (BLOCOS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="group relative bg-zinc-900/50 border border-white/5 p-8 rounded-[35px] hover:border-[#F97316]/30 transition-all cursor-pointer overflow-hidden shadow-2xl">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2">{card.title}</h3>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MARCAS DE ELITE (CARROSSEL) */}
      <div className="pt-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-center text-zinc-600 mb-10">Marcas de Elite Parcerias</h3>
        <MarcasElite />
      </div>
    </div>
  );
};