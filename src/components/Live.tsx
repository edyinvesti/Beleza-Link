import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Volume2, VolumeX, Send, ChevronLeft } from "lucide-react";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [chat, setChat] = useState([
    { id: 1, user: "SISTEMA", text: "Chat ao vivo! Escreve algo para testar." }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 1. LÓGICA DE SIMULAÇÃO (MENSAGENS AUTOMÁTICAS)
  useEffect(() => {
    const users = ["ANA BEATRIZ", "CARLA M.", "PEDRO", "LUÍZA", "SALÃO VIP"];
    const texts = ["Que top!", "Quero o meu!", "Brilho nota 10.", "Ainda tem stock?", "Melhor live!"];
    
    const interval = setInterval(() => {
      const newUser = users[Math.floor(Math.random() * users.length)];
      const newText = texts[Math.floor(Math.random() * texts.length)];
      
      setChat(prev => [...prev, { 
        id: Date.now() + Math.random(), 
        user: newUser, 
        text: newText 
      }]);
      setTimeout(scrollToBottom, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 2. FUNÇÃO DE ENVIO MANUAL
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;

    const myMsg = {
      id: Date.now(),
      user: "VOCÊ",
      text: msgInput.trim()
    };

    setChat(prev => [...prev, myMsg]);
    setMsgInput("");
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24">
      {/* NAVBAR FIXA - UM SÓ BOTÃO */}
      <nav className="fixed top-0 w-full z-[90] bg-black border-b border-white/5 p-4 flex items-center justify-between px-6">
        <button onClick={() => window.history.back()} className="bg-[#F97316] text-black px-6 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2">
          <ChevronLeft size={14} /> Voltar
        </button>
        <span className="text-[10px] font-black text-red-600 animate-pulse uppercase">● AO VIVO</span>
      </nav>

      <main className="px-4 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h1 className="text-4xl md:text-7xl font-black uppercase italic mb-6">CANAL <span className="text-[#F97316]">BELEZA LINK</span></h1>
          <div className="relative aspect-video bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            
            {/* Selo Produto */}
            <div onClick={() => window.open('https://wa.me/5511999999999')} className="absolute top-4 left-4 bg-black/80 p-2 pr-4 rounded-full border border-white/20 flex items-center gap-3 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=100" className="w-10 h-10 rounded-full object-cover border-2 border-[#F97316]" />
              <div><p className="text-[7px] font-black text-[#F97316] uppercase">Comprar</p><p className="text-[10px] font-black uppercase">Kit Expert Shine</p></div>
            </div>

            <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} className="absolute bottom-4 right-4 bg-black/60 p-3 rounded-full border border-white/10">
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-[#F97316]" />}
            </button>
          </div>
        </div>

        {/* CHAT - LÓGICA DE RENDERIZAÇÃO GARANTIDA */}
        <div className="lg:col-span-4 h-[500px] lg:h-[600px] bg-zinc-900/50 rounded-[40px] border border-white/10 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/5 text-[10px] font-bold uppercase text-zinc-500 tracking-widest text-center">Chat em Tempo Real</div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {chat.map((c) => (
              <div key={c.id} className="flex flex-col">
                <span className="text-[9px] font-black text-[#F97316] uppercase">{c.user}</span>
                <span className="text-[13px] text-zinc-200 bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5 inline-block">
                  {c.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
            <input 
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              placeholder="Escreve uma mensagem..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#F97316]" 
            />
            <button type="submit" className="bg-[#F97316] p-3 rounded-xl text-black font-bold">
              <Send size={18} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}