import { useState, useRef } from "react";
import { Camera, Zap, ShieldCheck, Search, Activity, Microscope } from "lucide-react";

export const ScannerTab = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [scanning, setScanning] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const iniciarCamera = async () => {
    try {
      const media = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment", focusMode: "continuous" } 
      });
      setStream(media);
      if (videoRef.current) videoRef.current.srcObject = media;
    } catch (err) {
      alert("Por favor, permita o acesso à câmera para o Scanner.");
    }
  };

  const realizarVarredura = () => {
    setScanning(true);
    // Simulação de processamento de imagem por redes neurais
    setTimeout(() => {
      setScanning(false);
      setResultado({
        porosidade: "ALTA (Nível 4)",
        cortex: "FADIGA ESTRUTURAL",
        cuticula: "FRAGMENTADA",
        tratamento: "Protocolo de Reposição de Carbono + Aminoácidos"
      });
    }, 4000);
  };

  return (
    <div className="p-4 space-y-6 text-white animate-in fade-in duration-1000">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1">
          <Microscope className="text-orange-500" size={20} />
          <h2 className="text-xl font-black italic tracking-tighter uppercase">Scanner IA Tech</h2>
        </div>
        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Análise de Fibra Capilar v4.0</p>
      </div>

      <div className="relative aspect-[3/4] bg-black rounded-[40px] border-2 border-orange-500/20 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        {!stream ? (
          <button onClick={iniciarCamera} className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-900/50">
            <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Camera size={32} className="text-orange-500" />
            </div>
            <div className="text-center">
              <span className="block text-xs font-black uppercase italic tracking-widest">Ativar Lente de Varredura</span>
              <span className="text-[9px] text-zinc-500 font-bold uppercase mt-1">Acesso à câmera necessário</span>
            </div>
          </button>
        ) : (
          <div className="relative w-full h-full">
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover grayscale contrast-125" />
            
            {/* OVERLAY DE MIRA TECNOLÓGICA */}
            <div className="absolute inset-0 border-[40px] border-black/40 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-orange-500/40 rounded-full pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-orange-500"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-orange-500"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-orange-500"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-orange-500"></div>
            </div>

            {/* LINHA DE SCANNER ANIMADA */}
            {scanning && (
              <div className="absolute inset-0 z-20">
                <div className="w-full h-[2px] bg-orange-500 shadow-[0_0_15px_#f97316] animate-scan-line"></div>
                <div className="absolute inset-0 bg-orange-500/5 animate-pulse"></div>
              </div>
            )}

            {!scanning && !resultado && (
              <div className="absolute bottom-10 inset-x-0 flex justify-center">
                <button onClick={realizarVarredura} className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase shadow-2xl active:scale-95 transition-all flex items-center gap-3">
                  <Search size={16} />
                  Iniciar Varredura
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {resultado && (
        <div className="bg-zinc-900 border border-orange-500/30 p-6 rounded-[32px] space-y-4 animate-in slide-in-from-bottom-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Activity className="text-orange-500" size={16} />
              <span className="text-[10px] font-black uppercase italic">Diagnóstico Concluído</span>
            </div>
            <span className="text-[8px] bg-orange-500 text-black px-2 py-1 rounded-full font-black">AI ANALYZER</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/50 p-3 rounded-2xl border border-white/5">
              <p className="text-[7px] text-zinc-500 font-bold uppercase mb-1">Porosidade</p>
              <p className="text-xs font-black text-white">{resultado.porosidade}</p>
            </div>
            <div className="bg-black/50 p-3 rounded-2xl border border-white/5">
              <p className="text-[7px] text-zinc-500 font-bold uppercase mb-1">Córtex</p>
              <p className="text-xs font-black text-white">{resultado.cortex}</p>
            </div>
          </div>

          <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
            <p className="text-[9px] text-orange-500 font-black uppercase mb-1">Recomendação Técnica:</p>
            <p className="text-xs text-zinc-300 font-medium italic">{resultado.tratamento}</p>
          </div>

          <button onClick={() => {setStream(null); setResultado(null);}} className="w-full py-2 text-[9px] font-black text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">Resetar Lente</button>
        </div>
      )}

      <style>{`
        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-line {
          position: absolute;
          width: 100%;
          animation: scan-line 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
