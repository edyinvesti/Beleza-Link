import { useState } from "react";
import { 
  MapPin, Store, Plus, Trash2, 
  CheckCircle, Scissors, QrCode, Share2, MessageCircle, Copy, Check
} from "lucide-react";

export const GeolocalizacaoTab = () => {
  const [nome, setNome] = useState("EDY BEAUTY CONCEPT");
  const [copied, setCopied] = useState(false);
  const [servicos, setServicos] = useState([
    { id: 1, nome: "Escovinha Modelada", preco: "65,00" },
    { id: 2, nome: "Corte Masculino PRO", preco: "50,00" }
  ]);

  const siteURL = window.location.href;

  const copiarLink = () => {
    navigator.clipboard.writeText(siteURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const compartilharWhatsApp = () => {
    const mensagem = encodeURIComponent(`Olá! Confira meus serviços no Beleza Link e agende seu horário aqui: ${siteURL}`);
    window.open(`https://wa.me/?text=${mensagem}`, '_blank');
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 pb-20 text-white font-sans">
      
      {/* CENTRAL DE COMPARTILHAMENTO */}
      <div className="bg-[#F97316] p-8 rounded-[40px] text-black shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter italic">Compartilhe sua Vitrine</h3>
            <p className="text-[10px] font-bold uppercase opacity-80 mt-1">Envie seu catálogo para seus clientes agora mesmo</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {/* BOTÃO COPIAR LINK */}
            <button 
              onClick={copiarLink}
              className="bg-black text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:scale-105 transition-all"
            >
              {copied ? <><Check size={18} className="text-emerald-400" /> Copiado!</> : <><Copy size={18} /> Copiar Link</>}
            </button>

            {/* BOTÃO WHATSAPP */}
            <button 
              onClick={compartilharWhatsApp}
              className="bg-white text-black px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle size={18} className="text-emerald-600" /> Enviar no WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LADO DO PROPRIETÁRIO */}
        <div className="space-y-6">
          <div className="bg-zinc-900/40 p-8 rounded-[40px] border border-white/5 space-y-6">
            <h3 className="text-[#F97316] font-black uppercase text-[12px] tracking-[0.3em] flex items-center gap-2">
              <Scissors size={16} /> Meus Serviços
            </h3>
            
            <div className="space-y-4">
              {servicos.map(s => (
                <div key={s.id} className="flex justify-between items-center bg-black/40 p-5 rounded-3xl border border-white/5">
                  <span className="text-[11px] font-black uppercase text-zinc-300">{s.nome}</span>
                  <span className="text-sm font-black text-[#F97316]">R$ {s.preco}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PREVIEW DO CARD */}
        <div className="bg-white rounded-[50px] overflow-hidden shadow-2xl text-black">
          <div className="h-56 bg-zinc-800 relative">
            <img src="https://images.unsplash.com/photo-1522337621166-07fc2936321a?w=800" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <h4 className="absolute bottom-6 left-8 text-white text-3xl font-black italic uppercase tracking-tighter">{nome}</h4>
          </div>

          <div className="p-10 space-y-6">
            <div className="space-y-4">
              {servicos.map(s => (
                <div key={s.id} className="flex justify-between items-center border-b border-zinc-100 pb-3">
                  <span className="text-[12px] font-black uppercase">{s.nome}</span>
                  <span className="text-lg font-black text-black">R$ {s.preco}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-black text-white py-6 rounded-[30px] font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#F97316] transition-all">
              AGENDAR AGORA <CheckCircle size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};