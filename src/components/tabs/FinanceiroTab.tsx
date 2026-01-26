import { useState, useEffect } from "react";
import { ArrowUpCircle, ArrowDownCircle, History, DollarSign, Zap } from "lucide-react";
import { supabase } from "../../lib/supabase";

export const FinanceiroTab = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState<'income' | 'expense'>('income');

  const carregarDados = async () => {
    setLoading(true);
    const { data } = await supabase.from('transactions').select('*').order('created_at', { ascending: false });
    if (data) setTransactions(data);
    setLoading(false);
  };

  useEffect(() => { carregarDados(); }, []);

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('transactions').insert([{ 
      description: desc.toUpperCase(), 
      amount: parseFloat(valor.replace(',', '.')), 
      type: tipo 
    }]);
    if (!error) { setDesc(""); setValor(""); carregarDados(); }
  };

  const total = transactions.reduce((acc, t) => t.type === 'income' ? acc + Number(t.amount) : acc - Number(t.amount), 0);

  return (
    <div className="space-y-6 p-2 text-white animate-in slide-in-from-bottom-4 duration-700">
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-6 rounded-[32px] shadow-lg shadow-orange-900/20">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Saldo Master</p>
            <h2 className="text-4xl font-black italic">R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
          </div>
          <Zap className="text-white animate-pulse" size={40} fill="white" />
        </div>
      </div>

      <form onSubmit={salvar} className="bg-zinc-900/80 border border-white/10 p-6 rounded-[32px] space-y-4">
        <div className="flex bg-black/50 p-1 rounded-2xl">
          <button type="button" onClick={() => setTipo('income')} className={`flex-1 py-3 rounded-xl font-black text-[10px] ${tipo === 'income' ? 'bg-emerald-500 text-black' : 'text-zinc-500'}`}>ENTRADA</button>
          <button type="button" onClick={() => setTipo('expense')} className={`flex-1 py-3 rounded-xl font-black text-[10px] ${tipo === 'expense' ? 'bg-red-500 text-black' : 'text-zinc-500'}`}>SAÍDA</button>
        </div>
        <input placeholder="DESCRIÇÃO" className="w-full bg-black/40 border border-white/5 p-4 rounded-xl text-center font-bold" value={desc} onChange={e => setDesc(e.target.value)} required />
        <input placeholder="VALOR" type="number" step="0.01" className="w-full bg-black/40 border border-white/5 p-4 rounded-xl text-center text-2xl font-black" value={valor} onChange={e => setValor(e.target.value)} required />
        <button className="w-full bg-white text-black py-4 rounded-xl font-black hover:bg-orange-500 transition-colors">CONFIRMAR NO SISTEMA</button>
      </form>

      <div className="space-y-3">
        {transactions.map(t => (
          <div key={t.id} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-black italic uppercase">{t.description}</span>
            <span className={`font-black ${t.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
              {t.type === 'income' ? '+' : '-'} R$ {Number(t.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
