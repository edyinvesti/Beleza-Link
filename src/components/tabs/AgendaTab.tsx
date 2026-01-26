import { useState, useEffect } from "react";
import { Clock, CheckCircle2, Plus, Calendar as CalendarIcon, X, CalendarDays } from "lucide-react";
import { supabase } from "../../lib/supabase";

export const AgendaTab = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [servicos, setServicos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [cliente, setCliente] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [hora, setHora] = useState("");
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const { data: apps } = await supabase.from('appointments').select('*').order('appointment_time');
      setAppointments(apps || []);
      const { data: servs } = await supabase.from('products').select('name');
      setServicos(servs || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarDados(); }, []);

  const salvarAgendamento = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentando salvar:", { cliente, servicoSelecionado, hora, data });

    const { error } = await supabase.from('appointments').insert([{
      client_name: cliente.toUpperCase(),
      service_name: servicoSelecionado,
      appointment_date: data,
      appointment_time: hora,
      status: 'confirmado'
    }]);

    if (!error) {
      setShowModal(false);
      setCliente("");
      setServicoSelecionado("");
      setHora("");
      carregarDados();
    } else {
      console.error("Erro detalhado:", error);
      alert("ERRO AO SALVAR: " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen space-y-8 pb-24">
      <div className="flex justify-between items-center bg-zinc-900/60 p-6 rounded-[32px] border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#F97316]/20 text-[#F97316] rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black italic uppercase text-white tracking-tighter">Agenda Viva</h2>
            <p className="text-[10px] font-black text-[#F97316] uppercase tracking-[0.2em]">Edy Beleza • Gestão de Luxo</p>
          </div>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#F97316] text-black px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-xl"
        >
          <Plus size={18} /> Novo Horário
        </button>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-20 text-zinc-600 font-black italic">CONECTANDO...</div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[40px] text-zinc-600 font-black uppercase text-[10px]">
            Nenhum agendamento para hoje
          </div>
        ) : (
          appointments.map((app) => (
            <div key={app.id} className="flex items-center gap-6 bg-zinc-900/40 border border-white/5 p-6 rounded-[32px]">
              <div className="min-w-[80px] text-center">
                <span className="text-xl font-black italic text-white">{app.appointment_time.slice(0, 5)}</span>
                <Clock size={12} className="text-[#F97316] mx-auto mt-1" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-black uppercase text-white tracking-tight">{app.client_name}</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{app.service_name}</p>
              </div>
              <CheckCircle2 size={18} className="text-emerald-500" />
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 w-full max-w-lg rounded-[48px] p-10 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-8 right-8 text-zinc-500 hover:text-white"><X size={24} /></button>
            <h3 className="text-2xl font-black italic uppercase text-white mb-8">Marcar Cliente</h3>
            <form onSubmit={salvarAgendamento} className="space-y-5">
              <input 
                type="text" placeholder="NOME DA CLIENTE" required 
                className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#F97316]"
                value={cliente} onChange={e => setCliente(e.target.value)}
              />
              <select 
                required className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#F97316]"
                value={servicoSelecionado} onChange={e => setServicoSelecionado(e.target.value)}
              >
                <option value="">SELECIONE UM SERVIÇO</option>
                {servicos.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="time" required className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white" value={hora} onChange={e => setHora(e.target.value)} />
                <input type="date" required className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white" value={data} onChange={e => setData(e.target.value)} />
              </div>
              <button type="submit" className="w-full bg-[#F97316] text-black py-6 rounded-[24px] font-black uppercase text-xs tracking-[0.2em] mt-4">
                Confirmar na Agenda
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};