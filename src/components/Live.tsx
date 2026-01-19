import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Send, ChevronLeft, Share2 } from "lucide-react";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [chat, setChat] = useState([
    { id: 1, user: "SISTEMA", text: "Bem-vindos ao Canal Beleza Link!" }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const users = ["MARIA R.", "ANA LÚCIA", "CLÍNICA BELLA", "FERNANDA"];
    const texts = ["Amo esse kit!", "Melhor live!", "O brilho é incrível!", "Já pedi o meu!"];
    const interval = setInterval(() => {
      setChat(prev => [...prev, { id: Date.now() + Math.random(), user: users[Math.floor(Math.random() * users.length)], text: texts[Math.floor(Math.random() * texts.length)] }]);
      setTimeout(scrollToBottom, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setChat(prev => [...prev, { id: Date.now(), user: "VOCÊ", text: msgInput.trim() }]);
    setMsgInput("");
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 font-sans">
      {/* NAVBAR COM TUDO: AO VIVO E PARTILHAR */}
      <nav className="fixed top-0 w-full z-[100] bg-black/95 border-b border-white/5 p-4 flex items-center justify-between px-6">
        <button onClick={() => window.history.back()} className="bg-[#F97316] text-black px-6 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2">
          <ChevronLeft size={14} /> Voltar
        </button>
        
        {/* SINAL AO VIVO RESTAURADO */}
        <div className="flex items-center gap-2 bg-red-600/10 px-4 py-2 rounded-full border border-red-600/20">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">AO VIVO</span>
        </div>

        <button onClick={() => navigator.share({title: 'Live Beleza Link', url: window.location.href})} className="bg-white/5 text-white p-2.5 rounded-xl border border-white/10">
          <Share2 size={16} className="text-[#F97316]" />
        </button>
      </nav>

      <main className="px-4 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h1 className="text-4xl md:text-7xl font-black uppercase italic mb-6">CANAL <span className="text-[#F97316]">BELEZA LINK</span></h1>
          <div className="relative aspect-video bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            
            {/* Selo do Produto */}
            <div onClick={() => window.open('https://wa.me/5511999999999')} className="absolute top-4 left-4 bg-black/80 p-2 pr-4 rounded-full border border-white/20 flex items-center gap-3 cursor-pointer z-50">
              <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=100" className="w-10 h-10 rounded-full object-cover border-2 border-[#F97316]" />
              <div><p className="text-[7px] font-black text-[#F97316] uppercase">Comprar</p><p className="text-[10px] font-black uppercase">Kit Banho de Verniz</p></div>
            </div>
            {/* Volume Restaurado */}
            <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} className="absolute bottom-6 right-6 z-50 bg-black/60 p-4 rounded-full border border-white/10">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-[#F97316]" />}
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 h-[500px] lg:h-[600px] bg-zinc-900/50 rounded-[40px] border border-white/10 flex flex-col overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/5 bg-white/5 text-[10px] font-bold uppercase text-zinc-500 text-center tracking-widest">Chat da Comunidade</div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {chat.map((c) => (
              <div key={c.id}>
                <p className="text-[9px] font-black text-[#F97316] uppercase">{c.user}</p>
                <p className="text-sm text-zinc-200 bg-white/5 p-3 rounded-2xl border border-white/5 inline-block">{c.text}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
            <input value={msgInput} onChange={(e) => setMsgInput(e.target.value)} placeholder="Comentar..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none" />
            <button type="submit" className="bg-[#F97316] p-3 rounded-xl text-black font-bold"><Send size={18} /></button>
          </form>
        </div>
      </main>
    </div>
  );
}