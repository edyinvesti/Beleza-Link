import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScannerIA from "./ScannerIA";

interface Post {
  id: number;
  title: string;
  category: string;
  image: string;
  affiliateLink: string;
  content: string;
}

const allPosts: Post[] = [
  { 
    id: 1, 
    title: "Arquitetura do Corte: O Tratado da Imagem Masculina", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200",
    affiliateLink: "https://shopee.com.br",
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]...`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200",
    affiliateLink: "https://shopee.com.br",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]...`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [selectedPost, showScanner]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost && !showScanner ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Inteligência</h2>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* CARDS DOS POSTS */}
                {allPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)} 
                    className="cursor-pointer group relative bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden transition-all hover:border-[#F97316]/30"
                  >
                    <div className="h-[500px] bg-[#111]">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt={post.title} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">{post.category}</span>
                      <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">{post.title}</h3>
                    </div>
                  </motion.article>
                ))}

                {/* CARD NÚMERO 7: O SCANNER IA (Agora como um Card) */}
                <motion.article 
                  onClick={() => setShowScanner(true)}
                  className="cursor-pointer group relative bg-[#050505] rounded-[40px] border-2 border-dashed border-[#F97316]/20 overflow-hidden transition-all hover:border-[#F97316] h-[500px] flex flex-col items-center justify-center text-center p-10"
                >
                  <div className="w-20 h-20 bg-[#F97316]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </div>
                  <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Ferramenta Tech</span>
                  <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none mb-4">Scanner <br/><span className="text-[#F97316]">Capilar IA</span></h3>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Iniciar Diagnóstico</p>
                </motion.article>
              </div>
            </motion.div>
          ) : showScanner ? (
            /* TELA DO SCANNER (QUANDO CLICADO) */
            <motion.div key="scanner-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               <button onClick={() => setShowScanner(false)} className="text-[#F97316] font-black uppercase tracking-widest text-[10px] mb-8 underline">Voltar para o Diário</button>
               <ScannerIA />
            </motion.div>
          ) : (
            /* TELA DE LEITURA DO POST */
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
               <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-black uppercase tracking-widest text-[10px] mb-8 underline">Voltar para o Diário</button>
               <h2 className="text-5xl md:text-8xl font-black mb-16 leading-none tracking-tighter uppercase">{selectedPost?.title}</h2>
               <img src={selectedPost?.image} className="w-full rounded-[40px] mb-12" alt={selectedPost?.title} />
               <div className="text-white/80 text-xl md:text-2xl leading-relaxed space-y-12 pb-20 px-4">
                 {selectedPost?.content}
                 <a href={selectedPost?.affiliateLink} target="_blank" className="block w-full bg-[#F97316] text-black text-center py-8 rounded-[30px] font-black text-2xl uppercase">Adquirir Kit</a>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}