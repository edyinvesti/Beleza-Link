import { useState, useEffect } from "react";
export default function MarcasElite() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const marcasElite = [
    { nome: "LUX GLOSS", tel: "5562992115143" },
    { nome: "SELAGEM 3D", tel: "5562991598393" },
    { nome: "PLATINUM PRO", tel: "5562992115143" },
    { nome: "KYHEROS", tel: "5562991598393" },
    { nome: "VELVET SKIN", tel: "5562992115143" },
    { nome: "TREEH HAIR", tel: "5562991598393" },
    { nome: "AKY LISSO", tel: "5562992115143" },
    { nome: "YGRY", tel: "5562991598393" },
    { nome: "LAED", tel: "5562992115143" },
    { nome: "NATURAL LISS", tel: "5562991598393" }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const interval = setInterval(() => setRotation(prev => prev - 0.5), 30);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);

  const abrirWhatsApp = (marca: string, tel: string) => {
    const msg = encodeURIComponent(`Olá! Quero descobrir o segredo da marca ${marca}`);
    window.open(`https://wa.me/${tel}?text=${msg}`, "_blank");
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 md:py-24 min-h-[550px] md:min-h-[700px] flex flex-col items-center justify-center border-t border-white/5">
      <div className="text-center z-10 mb-12 md:mb-20 px-4 group cursor-pointer">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-white leading-none">
          Marcas de <span className="text-[#F97316]">Elite</span>
        </h2>
        <div className="mt-4 md:mt-6 flex flex-col items-center gap-2">
          <div className="text-[#F97316] animate-bounce text-2xl md:text-3xl font-light">↓</div>
          <p className="text-white/20 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">TOQUE PARA REVELAR</p>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center" style={{ perspective: "1200px" }}>
        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-linear"
             style={{ transformStyle: "preserve-3d", transform: isMobile ? `rotateX(${rotation}deg)` : `rotateY(${rotation}deg)` }}>
          {marcasElite.map((m, i) => (
            <div key={i} onClick={(e) => { e.stopPropagation(); abrirWhatsApp(m.nome, m.tel); }}
                 className="absolute w-[160px] md:w-[320px] h-[70px] md:h-[120px] flex items-center justify-center rounded-[15px] bg-zinc-900 border-b-[4px] border-r-[4px] border-black cursor-pointer transition-all" 
                 style={{ transform: isMobile ? `rotateX(${(i * 360) / 10}deg) translateZ(180px)` : `rotateY(${(i * 360) / 10}deg) translateZ(450px)`, backfaceVisibility: "hidden" }}>
              <span className="text-[10px] md:text-xl font-black tracking-widest text-zinc-300 uppercase px-4 text-center">{m.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}