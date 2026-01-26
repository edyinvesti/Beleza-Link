import { useState, useEffect } from "react";
import { Users, Search, UserPlus, Star, MessageSquare, MoreVertical, ExternalLink } from "lucide-react";
import { getClients } from "../../services/database";
// Assuming types are available here, if not we will fix
import { Client } from "../../types";

export const ClientesTab = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F97316]"></div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700 space-y-8">
      {/* HEADER DE GESTÃO - MANTIDO EXTATAMENTE IGUAL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="BUSCAR CLIENTE VIP..."
              className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#F97316]/50 transition-all"
            />
          </div>
          <button className="bg-zinc-900 p-4 rounded-2xl border border-white/5 text-[#F97316] hover:bg-zinc-800 transition-all">
            <UserPlus size={20} />
          </button>
        </div>
        <div className="bg-[#F97316] rounded-2xl flex items-center justify-center p-4 gap-3 cursor-pointer hover:bg-[#ff8533] transition-all group">
          <Users size={20} className="text-black" />
          <span className="text-black font-black uppercase text-[10px] tracking-widest">Cadastrar Novo</span>
        </div>
      </div>

      {/* LISTA DE CLIENTES - CONECTADA */}
      <div className="grid grid-cols-1 gap-4">
        {clients.length === 0 ? (
          <div className="text-center py-10 text-zinc-500 font-black uppercase tracking-widest text-xs">
            Nenhum cliente encontrado.
          </div>
        ) : (
          clients.map((client) => (
            <div key={client.id} className="bg-zinc-900/30 border border-white/5 rounded-[32px] p-6 hover:bg-zinc-900/60 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/5 flex items-center justify-center text-[#F97316] font-black text-xl shadow-inner">
                    {client.name ? client.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2) : '?'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-black uppercase tracking-tight text-white">{client.name || 'Sem Nome'}</h3>
                      {/* Lógica provisória para VIP baseada em dados reais se existirem, ou mock visual */}
                      {client.category?.includes("VIP") && <Star size={12} className="fill-[#F97316] text-[#F97316]" />}
                    </div>
                    <p className="text-[9px] text-[#F97316] font-black uppercase tracking-widest mt-0.5">{client.category || 'Recente'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 max-w-2xl">
                  <div>
                    <p className="text-[8px] text-zinc-500 font-black uppercase tracking-tighter">Última Visita</p>
                    <p className="text-[10px] font-bold text-white uppercase">{client.lastVisit || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-[8px] text-zinc-500 font-black uppercase tracking-tighter">Telefone</p>
                    <p className="text-[10px] font-bold text-emerald-400 uppercase">{client.phone || '-'}</p>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-[8px] text-zinc-500 font-black uppercase tracking-tighter">Status</p>
                    <p className={`text-[10px] font-bold uppercase ${client.status === 'Inativo' ? 'text-red-500' : 'text-emerald-500'}`}>
                      {client.status || 'Ativo'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-3 bg-black rounded-xl text-zinc-500 hover:text-[#F97316] transition-colors border border-white/5">
                    <MessageSquare size={16} />
                  </button>
                  <button className="p-3 bg-black rounded-xl text-zinc-500 hover:text-white transition-colors border border-white/5">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-3 text-zinc-700">
                    <MoreVertical size={18} />
                  </button>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};