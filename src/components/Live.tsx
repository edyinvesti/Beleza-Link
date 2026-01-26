import { useState } from 'react';
import { Share2, Users, CheckCircle2 } from 'lucide-react';

export default function Live() {
  const [viewers] = useState(1482);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Beleza Link', url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch { console.log("Erro"); }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 font-sans overflow-hidden">
      <style>{`
        @keyframes b-link-flow {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        .stream-aside-content {
          animation: b-link-flow 35s linear infinite;
          will-change: transform;
        }
        
        /* EFEITO DE BORDA NEON PISCANTE */
        @keyframes neon-glow {
          0%, 100% { 
            box-shadow: 0 0 5px #dc2626, 0 0 10px #dc2626;
            border-color: #ef4444;
          }
          50% { 
            box-shadow: 0 0 20px #dc2626, 0 0 30px #dc2626;
            border-color: #ffffff;
          }
        }
        .live-neon-badge {
          animation: neon-glow 1.2s infinite ease-in-out;
          border-width: 2px;
          border-style: solid;
        }
        
        @keyframes rec-dot {
          0% { opacity: 1; }
          50% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        .rec-indicator {
          animation: rec-dot 1s infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3 space-y-4">
          <div className="relative aspect-video bg-zinc-950 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">

            {/* SELO AO VIVO COM BORDAS PISCANTES E NEON */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
              <div className="live-neon-badge bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full rec-indicator shadow-[0_0_8px_#dc2626]"></div>
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">AO VIVO</span>
              </div>

              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                <Users size={14} className="text-[#F97316]" />
                <span className="text-[11px] font-bold text-white tracking-tight">{viewers.toLocaleString()}</span>
              </div>
            </div>

            {/* BOTÃO DE COMPARTILHAR */}
            <button
              onClick={handleShare}
              className={`absolute bottom-6 left-6 z-30 p-5 rounded-full transition-all duration-500 shadow-2xl active:scale-90 ${copied ? 'bg-green-500 text-white' : 'bg-[#F97316] text-black hover:scale-110'}`}
            >
              {copied ? <CheckCircle2 size={24} /> : <Share2 size={24} />}
            </button>

            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="https://assets.mixkit.co/videos/preview/mixkit-stylist-washing-the-hair-of-a-customer-40432-large.mp4" type="video/mp4" />
            </video>
          </div>

          {/* CARD DE OFERTA */}
          <div className="bg-zinc-900/40 p-6 rounded-[30px] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=200" className="w-full h-full object-cover" alt="Kit" />
              </div>
              <div>
                <h4 className="font-black text-[#F97316] text-xs uppercase">Kit Elite Profissional</h4>
                <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">OFERTA EXCLUSIVA</p>
              </div>
            </div>
            <button onClick={() => window.open('https://wa.me/5562992115143')} className="bg-[#F97316] text-black font-black px-8 py-3 rounded-full text-[10px] uppercase hover:bg-white transition-all shadow-lg shadow-orange-500/20">
              COMPRAR AGORA
            </button>
          </div>
        </div>

        {/* CHAT - MANTENDO A ESTRUTURA SEM MUDANÇA RADICAL */}
        <div className="lg:col-span-1 h-[550px] bg-zinc-900/60 rounded-[40px] border border-white/5 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 w-full p-5 z-10 bg-zinc-900/90 border-b border-white/5 backdrop-blur-md">
            <h3 className="text-[10px] font-black uppercase text-[#F97316] tracking-widest text-center">Chat de Elite</h3>
          </div>
          <div className="h-full pt-20 p-6 overflow-hidden">
            <div className="stream-aside-content space-y-8">
              {[
                { u: "Marta_Hair", t: "Que brilho é esse?!", c: "#9ca3af" },
                { u: "Studio_Elite", t: "Onde clico para comprar?", c: "#F97316" },
                { u: "Beleza_VIP", t: "Envio rápido para SP?", c: "#9ca3af" },
                { u: "Ana_Hair", t: "Melhor selagem que usei.", c: "#9ca3af" },
                { u: "Sandro_Pro", t: "Já comprei o meu!", c: "#F97316" },
                { u: "Marta_Hair", t: "Que brilho é esse?!", c: "#9ca3af" },
                { u: "Studio_Elite", t: "Onde clico para comprar?", c: "#F97316" },
                { u: "Beleza_VIP", t: "Envio rápido para SP?", c: "#9ca3af" },
                { u: "Ana_Hair", t: "Melhor selagem que usei.", c: "#9ca3af" },
                { u: "Sandro_Pro", t: "Já comprei o meu!", c: "#F97316" }
              ].map((m, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span style={{ color: m.c }} className="text-[9px] font-black uppercase tracking-tighter">{m.u}</span>
                  <p className="text-zinc-400 text-[11px] leading-tight font-medium">{m.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}