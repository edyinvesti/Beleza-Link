import { useState, useEffect } from "react";
import { UserPlus, Phone, Star, X, } from "lucide-react";
import { supabase } from "../../lib/supabase";

export const ClientesVipTab = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const carregarClientes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .order('name', { ascending: true });
      if (error) throw error;
      setClientes(data || []);
    } catch (e) {
      console.error("Erro ao carregar clientes:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarClientes(); }, []);

  const salvarCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('customers').insert([
        { name: nome.toUpperCase(), phone: telefone }
      ]);
      if (error) throw error;
      setShowModal(false);
      setNome(""); setTelefone("");
      carregarClientes();
    } catch (e: any) {
      alert("Erro ao salvar: " + e.message);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-zinc-900/40 p-6 rounded-[32px] border border-white/5">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#F97316]/10 text-[#F97316] rounded-2xl">
            <UserPlus size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black italic uppercase text-white">Clientes VIP</h2>
            <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Base de Dados Real</p>
          </div>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#F97316] text-black px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#F97316]/20"
        >
          Novo Cliente
        </button>
      </div>

      <div className="grid gap-4">
        {loading ? (
          <div className="text-center py-10 text-zinc-600 font-black italic">SINCRONIZANDO...</div>
        ) : clientes.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-[40px] text-zinc-600 font-black uppercase text-[10px]">
            Nenhum cliente VIP cadastrado.
          </div>
        ) : (
          clientes.map((c) => (
            <div key={c.id} className="flex items-center gap-6 bg-zinc-900/30 border border-white/5 p-6 rounded-[32px] hover:border-[#F97316]/20 transition-all">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#F97316] font-black italic border border-white/5">
                {c.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-black uppercase text-white">{c.name}</h3>
                <p className="text-[10px] text-zinc-500 font-bold mt-1 uppercase tracking-widest flex items-center gap-2">
                   <Phone size={10} className="text-[#F97316]" /> {c.phone}
                </p>
              </div>
              <Star size={16} className="text-amber-500 fill-amber-500/20" />
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 w-full max-w-md rounded-[40px] p-8 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><X /></button>
            <h3 className="text-xl font-black italic uppercase text-white mb-6">Cadastrar VIP</h3>
            <form onSubmit={salvarCliente} className="space-y-4">
              <input 
                type="text" placeholder="NOME DA CLIENTE" required 
                className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-[#F97316]"
                value={nome} onChange={e => setNome(e.target.value)}
              />
              <input 
                type="text" placeholder="TELEFONE" 
                className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-[#F97316]"
                value={telefone} onChange={e => setTelefone(e.target.value)}
              />
              <button type="submit" className="w-full bg-[#F97316] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest mt-4">
                Salvar VIP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};