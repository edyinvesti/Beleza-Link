import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Uma tese completa sobre a evolução da imagem masculina e a psicologia do estilo contemporâneo.",
    content: `Capítulo I: A Evolução Histórica e a Ruptura de 2026\nPara compreender o estado atual da barbearia de luxo, precisamos olhar para trás. A imagem masculina deixou de ser uma mera formalidade para se tornar uma ferramenta de comunicação não-verbal de altíssimo impacto.\n\nCapítulo II: O Visagismo Aplicado\nNo Beleza Link, tratamos o corte não como uma simples remoção de fios, mas como uma verdadeira escultura facial. Em 2026, a grande ruptura é o abandono total da uniformidade dos degradês industriais. O homem de sucesso busca agora a exclusividade do corte feito sob medida para a sua estrutura óssea.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Um tratado técnico sobre descoloração segura, reconstrução molecular e o conceito de Loiro Inteligente.",
    content: `Introdução: O Conceito de Alta Performance\nSer loira é um estado de espírito e um investimento em autoestima que exige ciência. No Beleza Link, abandonamos as técnicas agressivas. Nossa filosofia é o "Slow Bleaching" — uma descoloração lenta e controlada que preserva a integridade absoluta das pontes do fio.\n\nSeção I: Biologia e Melanina\nAntes de iniciar, realizamos uma análise de tricologia exaustiva. Identificamos o fundo de clareamento natural. Usamos oxidantes de baixa volumagem aliados a protetores de córtex.`
  },
  { 
    id: 3, 
    title: "Poder Minimalista", 
    category: "Penteados", 
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Do coque Sleek às ondas Hollywoodianas, descubra o que define a elegância nas grandes recepções.",
    content: `Introdução: Estética do Luxo Silencioso\nEm 2026, o conceito de 'Luxo Silencioso' dominou as passadeiras vermelhas. A estética foca na perfeição da forma em vez da complexidade excessiva. Um penteado de sucesso deve parecer sem esforço, embora exija uma técnica magistral de preparação.\n\nSeção I: A Técnica do Sleek Look\nO coque polido tornou-se a marca da sofisticação. O segredo reside na preparação: um brushing impecável seguido da aplicação de bálsamos antifrizz.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) window.scrollTo(0,0);
  }, [selectedPost]);

  const day = new Date().getDate();
  const displayPosts = [
    allPosts[day % allPosts.length],
    allPosts[(day + 1) % allPosts.length],
    allPosts[(day + 2) % allPosts.length]
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-12 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-2">Beleza Link Magazine</h2>
                <h1 className="text-6xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayPosts.map((post, i) => (
                  <motion.article 
                    key={i} 
                    onClick={() => setSelectedPost(post)} 
                    className="cursor-pointer group"
                  >
                    <div className="h-[500px] overflow-hidden rounded-[40px] border border-white/10 relative bg-[#111]">
                      {/* Removido o grayscale inicial para garantir que a imagem seja vista claramente */}
                      <img 
                        src={post.image} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt={post.title}
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-10 left-8 right-8">
                        <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">{post.category}</span>
                        <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter leading-none">{post.title}</h3>
                        <div className="w-8 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold text-[10px] tracking-[0.3em] mb-10">← VOLTAR</button>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter uppercase">{selectedPost.title}</h2>
              <div className="rounded-[40px] overflow-hidden mb-12 bg-[#111]">
                <img src={selectedPost.image} className="w-full h-full object-cover" alt={selectedPost.title} />
              </div>
              <div className="text-white/80 text-xl md:text-2xl leading-relaxed space-y-12 whitespace-pre-line text-justify pb-20">
                {selectedPost.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}