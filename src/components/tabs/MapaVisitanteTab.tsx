import { MapPin, Search, Filter } from "lucide-react";

export const MapaVisitanteTab = () => {
  const locais = [
    { id: 1, nome: "Edy Beauty Concept", nota: "5.0", dist: "1.2km", preco: "R$ 45+", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400" },
    { id: 2, nome: "Studio VIP Master", nota: "4.8", dist: "2.5km", preco: "R$ 60+", img: "https://images.unsplash.com/photo-1621605815841-aa897af68b3c?w=400" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 h-[calc(100vh-120px)] flex flex-col gap-6">
      {/* BARRA DE BUSCA PÚBLICA */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F97316]" size={20} />
          <input type="text" placeholder="QUAL SERVIÇO VOCÊ PROCURA HOJE?" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-5 pl-14 text-[12px] font-black uppercase tracking-widest text-white outline-none focus:border-[#F97316]" />
        </div>
        <button className="bg-zinc-900 px-6 rounded-2xl border border-white/10 text-white hover:text-[#F97316]">
          <Filter size={20} />
        </button>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* LISTA DE RESULTADOS (ESTILO AIRBNB) */}
        <div className="w-96 overflow-y-auto pr-2 space-y-4">
          {locais.map(local => (
            <div key={local.id} className="bg-zinc-900/50 border border-white/5 rounded-[32px] overflow-hidden group cursor-pointer hover:border-[#F97316]/50 transition-all">
              <img src={local.img} className="h-32 w-full object-cover group-hover:scale-105 transition-transform" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-[11px] font-black uppercase text-white italic">{local.nome}</h3>
                  <span className="text-[9px] font-black text-amber-400 flex items-center gap-1">★ {local.nota}</span>
                </div>
                <p className="text-[8px] text-zinc-500 font-bold uppercase">{local.dist} • {local.preco}</p>
              </div>
            </div>
          ))}
        </div>

        {/* O MAPA INTERATIVO */}
        <div className="flex-1 bg-zinc-900 rounded-[40px] border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-48.9,-16.3,12/1000x800?access_token=none')] bg-cover bg-center opacity-40"></div>

          {/* PIN DO EDY NO MAPA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
            <div className="absolute -inset-4 bg-[#F97316] rounded-full animate-ping opacity-20"></div>
            <div className="relative bg-[#F97316] p-3 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]">
              <MapPin size={24} className="text-black" />
            </div>
            {/* MINI CARD HOVER */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white p-2 rounded-xl text-black text-[8px] font-black uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Edy Beauty Concept
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};