import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte: O Tratado da Imagem Masculina", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Uma imersão de 1200 palavras sobre visagismo, geometria craniana e a psicologia do estilo de elite.",
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]\nA imagem masculina contemporânea transcende a estética básica; ela é uma ferramenta de comunicação não-verbal de altíssimo impacto no ambiente de negócios e social...\n\n[CAPÍTULO II: GEOMETRIA CRANIANA E A FÍSICA DO CORTE EM TESOURA]\nO domínio da tesoura é o que separa o artesão do operador de máquina...\n\n[CAPÍTULO III: FISIOLOGIA DO COURO CABELUDO E SAÚDE DERMATOLÓGICA]\nNão existe arquitetura sólida em solo instável. A saúde do couro cabeludo é a base de qualquer corte de elite...\n\n[CAPÍTULO IV: TERMODINÂMICA DA FINALIZAÇÃO E MANUTENÇÃO DE ALTA PERFORMANCE]\nA finalização é onde a ciência encontra a arte. O uso do secador não serve apenas para tirar a humidade, mas para alterar as pontes de hidrogénio do fio...`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Uma imersão de 1200 palavras na ciência da descoloração segura e reconstrução molecular.",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]\nA descoloração capilar é uma intervenção química profunda na estrutura medular do fio...\n\n[CAPÍTULO II: ENGENHARIA DOS BOND BUILDERS]\nUtilizamos a tecnologia Plex para atuar como um cimento molecular. Durante a retirada do pigmento, injetamos polímeros que reconectam as fibras de queratina em tempo real...\n\n[CAPÍTULO III: MANUTENÇÃO E PH MÉTRICA]\nO sucesso do loiro pós-salão depende da manutenção do pH. O cabelo loiro é naturalmente mais alcalino e poroso...\n\n[CAPÍTULO IV: PROTEÇÃO UV E FOTODEGRADAÇÃO]\nO sol é o maior inimigo da cor. Os raios ultravioletas oxidam o pigmento, deixando o cabelo amarelado e sem vida.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => { if (selectedPost) window.scrollTo(0,0); }, [selectedPost]);

  const day = new Date().getDate();
  const displayPosts = [allPosts[day % allPosts.length], allPosts[(day + 1) % allPosts.length]].filter(Boolean);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Inteligência</h2>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
                {/* REMOVIDO: Linha de "Conteúdo de Alta Densidade" */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {displayPosts.map((post) => (
                  <motion.article key={post.id} onClick={() => setSelectedPost(post)} className="cursor-pointer group relative bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden active:scale-95 transition-all">
                    <div className="h-[500px] overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={post.title} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">{post.category}</span>
                      <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none mb-4">{post.title}</h3>
                      <div className="flex items-center gap-3">
                        <div className="h-[1px] w-10 bg-[#F97316]" />
                        <span className="text-[10px] font-bold uppercase opacity-50 tracking-widest italic">Leitura Completa</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black mb-16 leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl">
                <img src={selectedPost.image} className="w-full h-[300px] md:h-[600px] object-cover" alt={selectedPost.title} />
              </div>
              <div className="text-white/80 text-xl md:text-2xl leading-[1.8] font-light space-y-12 whitespace-pre-line text-justify pb-40 border-l border-white/5 pl-8">
                {selectedPost.content}
                <div className="pt-20 border-t border-white/10 text-center opacity-30">
                  <p className="text-sm italic uppercase tracking-widest">Beleza Link • 2026</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}