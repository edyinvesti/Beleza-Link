import { DollarSign, Users, Calendar, ArrowUpRight, TrendingUp } from "lucide-react";

export const PainelTab = () => {
  const stats = [
    { label: "Receita Bruta", value: "R$ 18.250", trend: "+12%", color: "text-emerald-400", icon: DollarSign },
    { label: "Novos Clientes", value: "142", trend: "+8", color: "text-[#F97316]", icon: Users },
    { label: "Agendamentos", value: "56", trend: "+15%", color: "text-purple-400", icon: Calendar }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      {/* GRID DE CARDS SUPERIOR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[40px] hover:border-[#F97316]/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 bg-black rounded-2xl border border-white/5 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <span className={`text-[9px] font-black px-2 py-1 rounded-lg flex items-center gap-1 bg-white/5 ${item.color}`}>
                {item.trend} <ArrowUpRight size={10} />
              </span>
            </div>
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">{item.label}</h3>
            <p className="text-3xl font-black italic mt-1 tracking-tighter text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* ÁREA DE PERFORMANCE E GRÁFICO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900/20 border border-white/5 p-8 rounded-[40px]">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-lg font-black italic uppercase tracking-tighter text-white">Crescimento Mensal</h2>
              <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Desempenho de faturamento</p>
            </div>
            <TrendingUp className="text-[#F97316]" size={20} />
          </div>
          
          {/* GRÁFICO DE BARRAS TURBO */}
          <div className="h-56 flex items-end gap-3 px-2">
            {[45, 60, 40, 85, 55, 75, 95, 65, 80, 100, 70, 90].map((h, i) => (
              <div key={i} className="group relative flex-1">
                <div 
                  className="bg-[#F97316]/20 border-t-2 border-[#F97316] rounded-t-lg transition-all duration-500 group-hover:bg-[#F97316]/50" 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}%
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[7px] font-black text-zinc-600 uppercase tracking-[0.3em]">
            <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
            <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
          </div>
        </div>

        {/* RANKING OU STATUS RÁPIDO */}
        <div className="bg-black border border-white/5 p-8 rounded-[40px] flex flex-col justify-center items-center text-center">
          <div className="w-20 h-20 rounded-full border-4 border-[#F97316] border-t-transparent animate-spin duration-[3s] mb-6"></div>
          <h2 className="text-sm font-black italic uppercase text-white">Status do Sistema</h2>
          <p className="text-[9px] font-black text-zinc-500 uppercase mt-2 tracking-widest">Motor RAG: <span className="text-emerald-400">Online</span></p>
          <p className="text-[9px] font-black text-zinc-500 uppercase mt-1 tracking-widest">Sincronização: <span className="text-emerald-400">100%</span></p>
        </div>
      </div>
    </div>
  );
};