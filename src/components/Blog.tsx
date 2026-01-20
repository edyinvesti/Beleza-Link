import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScannerIA from "./ScannerIA"; // Importando o seu novo arquivo separado

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
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]\nA imagem masculina contemporânea transcende a estética básica...`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200",
    affiliateLink: "https://shopee.com.br",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]\nA descoloração capilar é uma intervenção química profunda...`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => { 
    if (selectedPost) window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* TÍTULO DO DIÁRIO */}
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Inteligência</h2>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              {/* GRID DE POSTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
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
              </div>

              {/* O CARD DO SCANNER IA - BLOCO SEPARADO */}
              <ScannerIA />
              
            </motion.div>
          ) : (
            /* TELA DE LEITURA */
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
               <h2 className="text-5xl md:text-8xl font-black mb-16 leading-none tracking-tighter uppercase">{selectedPost.title}</h2>
               <img src={selectedPost.image} className="w-full rounded-[40px] mb-12 shadow-2xl" alt={selectedPost.title} />
               <div className="text-white/80 text-xl md:text-2xl leading-relaxed space-y-12 text-justify pb-20 px-4">
                 {selectedPost.content}
                 <div className="pt-20 text-center">
                    <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-black uppercase tracking-widest text-xs mb-8 block mx-auto underline">Sair da Leitura</button>
                    <a href={selectedPost.affiliateLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#F97316] text-black text-center py-8 rounded-[30px] font-black text-2xl uppercase hover:bg-white transition-all shadow-[0_10px_40px_rgba(249,115,22,0.3)]">
                      Adquirir Kit Profissional
                    </a>
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}