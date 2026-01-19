import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Volume2, VolumeX, Send, ChevronLeft, Share2, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [showShare, setShowShare] = useState(false);
  const [chat, setChat] = useState([
    { id: 1, user: "SISTEMA", text: "Bem-vindos à Live! Partilhe com as amigas." }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const users = ["MARIA", "ANA", "CARLA", "JULIANA"];
    const texts = ["Amo esse kit!", "O brilho é incrível!", "Já pedi o meu!", "Melhor produto!"];
    const interval = setInterval(() => {
      setChat(prev => [...prev, { id: Date.now() + Math.random(), user: users[Math.floor(Math.random() * users.length)], text: texts[Math.floor(Math.random() * texts.length)] }]);
      setTimeout(scrollToBottom, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: 'Beleza Link - Ao Vivo', url });
    } else {
      setShowShare(!showShare);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado com sucesso!");
    setShowShare(false);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setChat(prev => [...prev, { id: Date.now(), user: "VOCÊ", text: msgInput.trim() }]);
    setMsgInput("");
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 font-sans">
      <nav className="fixed top-0 w-full z-[100] bg-black/95 border-b border-white/5 p-4 flex items-center justify-between px-6">
        <button onClick={() => window.history.back()} className="bg-[#F97316] text-black px-6 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2">
          <ChevronLeft size={14} /> Voltar
        </button>
        
        {/* NOVO BOTÃO DE PARTILHAR NA NAVBAR */}
        <button onClick={handleShare} className="bg-white/10 text-white p-2.5 rounded-xl border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2 text-[10px] font-bold uppercase">
          <Share2 size={16} className="text-[#F97316]" /> Partilhar
        </button>
      </nav>

      <main className="px-4 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        {/* MENU DE PARTILHA POPUP */}
        <AnimatePresence>
          {showShare && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute top-0 right-12 z-[110] bg-zinc-900 border border-white/10 p-4 rounded-3xl shadow-2xl flex flex-col gap-3">
               <button onClick={copyLink} className="flex items-center gap-3 text-xs font-bold hover:text-[#F97316]"><Copy size={14}/> Copiar Link</button>
               <button onClick={() => window.open(`https://wa.me/?text=Vem ver essa live: ${window.location.href}`)} className="flex items-center gap-3 text-xs font-bold hover:text-green-500 underline">WhatsApp</button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="lg:col-span-8">
          <h1 className="text-4xl md:text-7xl font-black uppercase italic mb-6 leading-none">CANAL <span className="text-[#F97316]">BELEZA LINK</span></h1>
          <div className="relative aspect-video bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            
            {/* Selo do Produto */}
            <div onClick={() => window.open('https://wa.me/5511999999999')} className="absolute top-4 left-4 bg-black/80 p-2 pr-4 rounded-full border border-white/20 flex items-center gap-3 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=100" className="w-10 h-10 rounded-full object-cover border-2 border-[#F97316]" />
              <div><p className="text-[7px] font-black text-[#F97316] uppercase leading-none">Comprar</p><p className="text-[10px] font-black uppercase leading-none">Kit Expert Shine</p></div>
            </div>
                        {/* BOTÃO DE VOLUME RESTAURADO */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; 
                  setIsMuted(!isMuted);
                }} 
                className="absolute bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md p-4 rounded-full border border-white/10 hover:bg-[#F97316] hover:text-black transition-all"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
          <div className="lg:col-span-4" h-[500px] lg:h-[600px] bg-zinc-900/50 rounded-[40px] border border-white/10 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/5 text-[9px] font-black uppercase text-zinc-500 tracking-[0.2em] text-center">Live Chat</div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {chat.map((c) => (
              <div key={c.id}>
                <p className="text-[9px] font-black text-[#F97316] uppercase">{c.user}</p>
                <p className="text-[13px] text-zinc-300 bg-white/5 p-3 rounded-2xl border border-white/5 inline-block">{c.text}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
            <input value={msgInput} onChange={(e) => setMsgInput(e.target.value)} placeholder="Comenta algo..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#F97316]" />
            <button type="submit" className="bg-[#F97316] p-3 rounded-xl text-black font-bold"><Send size={18} /></button>
          </form>
        </div>
      </main>
    </div>
  );
}