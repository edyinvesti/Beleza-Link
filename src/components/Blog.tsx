import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]\nA imagem masculina contemporânea transcende a estética básica; ela é uma ferramenta de comunicação não-verbal de altíssimo impacto no ambiente de negócios e social. No Beleza Link, tratamos o corte como "Arquitetura Identitária".\n\n[CAPÍTULO II: GEOMETRIA CRANIANA E A FÍSICA DO CORTE EM TESOURA]\nO domínio da tesoura é o que separa o artesão do operador de máquina. Enquanto a máquina corta por impacto mecânico, a tesoura de fio navalha realiza uma secção precisa, preservando a saúde do fio e mantendo o design por muito mais tempo.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200",
    affiliateLink: "https://shopee.com.br",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]\nA descoloração capilar é uma intervenção química profunda. Aplicamos "Slow Bleaching" — clareamento lento que respeita o tempo de oxidação da melanina sem comprometer as pontes de dissulfeto.\n\n[CAPÍTULO II: ENGENHARIA DOS BOND BUILDERS]\nUtilizamos tecnologia Plex para atuar como um cimento molecular, reconectando as fibras em tempo real e permitindo atingir tons claríssimos com total segurança.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => { 
    if (selectedPost) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Inteligência</h2>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {allPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)} 
                    className="cursor-pointer group relative bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden transition-all"
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
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
               {/* O BOTÃO FOI DELETADO DAQUI E DE TODO O ARQUIVO */}
               <h2 className="text-5xl md:text-8xl font-black mb-16 leading-none tracking-tighter uppercase">{selectedPost.title}</h2>
               
               <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl">
                 <img src={selectedPost.image} className="w-full object-cover" alt={selectedPost.title} />
               </div>

               <div className="text-white/80 text-xl md:text-2xl leading-relaxed space-y-12 text-justify pb-20 px-4">
                 {selectedPost.content}
                 <div className="pt-20">
                    <a href={selectedPost.affiliateLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#F97316] text-black text-center py-8 rounded-[30px] font-black text-2xl uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                      Adquirir Kit de Manutenção Profissional
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