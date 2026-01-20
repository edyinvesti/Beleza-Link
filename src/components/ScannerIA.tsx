import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScannerIA() {
  const [isScanning, setIsScanning] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  // Simulação de Processamento Biométrico
  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setHasResult(true);
    }, 3500);
  };

  return (
    <section className="w-full bg-black py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Identidade Visual do Bloco */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Tech</h2>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            SCANNER <span className="text-[#F97316]">IA</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {!hasResult ? (
            <motion.div 
              key="scanner-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#050505] border border-white/10 rounded-[50px] p-12 shadow-2xl"
            >
              <div className="mb-10">
                <div className="w-24 h-24 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F97316]/20">
                  <svg className="w-10 h-10 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xl font-light text-white/60 max-w-md mx-auto leading-relaxed">
                  Capture a imagem da fibra capilar para iniciar a varredura de porosidade e saúde cortical.
                </p>
              </div>

              <button 
                onClick={handleScan}
                disabled={isScanning}
                className="group relative inline-flex items-center justify-center bg-[#F97316] text-black px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] transition-all hover:bg-white active:scale-95 disabled:opacity-50"
              >
                {isScanning ? "Processando Biometria..." : "Iniciar Diagnóstico"}
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="scanner-result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-left"
            >
              <div className="bg-[#080808] border border-[#F97316]/30 rounded-[50px] p-10 md:p-16 shadow-[0_0_50px_rgba(249,115,22,0.1)]">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Relatório Técnico</h3>
                  <span className="bg-[#F97316] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase">Status: Analisado</span>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-6">
                    <div>
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest block mb-2">Saúde da Fibra</span>
                      <p className="text-xl font-light italic">Porosidade média com sinais de oxidação térmica.</p>
                    </div>
                    <div>
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest block mb-2">Estrutura Molecular</span>
                      <p className="text-xl font-light italic">Córtex estável, necessidade de reposição lipídica imediata.</p>
                    </div>
                  </div>
                  <div className="bg-black/50 p-8 rounded-3xl border border-white/5">
                    <span className="text-[#F97316] text-[10px] font-bold uppercase tracking-widest block mb-4">Cronograma IA (4 Semanas)</span>
                    <ul className="space-y-3 text-xs font-bold uppercase opacity-80">
                      <li className="flex justify-between border-b border-white/5 pb-2"><span>Semana 1</span> <span className="text-[#F97316]">Nutrição</span></li>
                      <li className="flex justify-between border-b border-white/5 pb-2"><span>Semana 2</span> <span>Hidratação</span></li>
                      <li className="flex justify-between border-b border-white/5 pb-2"><span>Semana 3</span> <span className="text-[#F97316]">Nutrição</span></li>
                      <li className="flex justify-between"><span>Semana 4</span> <span>Selagem pH</span></li>
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => setHasResult(false)}
                  className="w-full text-center text-white/20 hover:text-[#F97316] transition-all text-[10px] font-black uppercase tracking-[0.5em]"
                >
                  Reiniciar Nova Varredura
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}