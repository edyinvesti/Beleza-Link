import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONFIG_AFILIADOS = {
  "Masculino": { link: "https://shopee.com.br", item: "Pomada de Argila Profissional" },
  "Feminino": { link: "https://shopee.com.br", item: "Máscara de Nutrição Lipídica" },
  "Penteados": { link: "https://shopee.com.br", item: "Spray Fixador de Alta Memória" }
};

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Um tratado técnico de 1200 palavras sobre a engenharia da imagem masculina.",
    content: `[CAPÍTULO I: A FUNDAÇÃO DA IMAGEM]\nO visagismo contemporâneo não é apenas estética; é uma ciência métrica. Analisamos a estrutura óssea craniana para determinar o peso visual.\n\n[CAPÍTULO II: A MATEMÁTICA DO FIO]\nCada folículo capilar possui um ciclo de crescimento. O corte em tesoura respeita a cutícula do fio, garantindo um crescimento ordenado.\n\n[CAPÍTULO III: FINALIZAÇÃO E PERFORMANCE]\nA escolha do produto é vital. A pomada correta absorve o suor e mantém o acabamento matte por 12 horas.\n\n[CAPÍTULO IV: RITUAIS DE MANUTENÇÃO]\nUm cronograma quinzenal não é luxo, é estratégia de marca pessoal. A precisão nos detalhes comunica autoridade.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "A enciclopédia do loiro perfeito: 1200 palavras sobre descoloração segura.",
    content: `[CAPÍTULO I: BIOLOGIA DA DESCOLORAÇÃO]\nA descoloração é um processo de oxidação. No Beleza Link, usamos tecnologia de 'Slow Bleaching' para clarear sem romper as pontes de enxofre.\n\n[CAPÍTULO II: O PODER DOS BOND BUILDERS]\nA tecnologia Plex atua como um cimento intracelular, impedindo a quebra. O loiro inteligente é aquele que cresce forte.\n\n[CAPÍTULO III: MANUTENÇÃO CASEIRA DE LUXO]\nO uso de shampoos com pH ácido é fundamental para manter a cor vibrante e a cutícula selada.\n\n[CAPÍTULO IV: PROTEÇÃO TÉRMICA E SOLAR]\nO sol oxida o pigmento. Ensinamos como criar uma barreira protetora com leave-ins específicos que refletem os raios UV.`
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
                        <span className="text-[10px] font-bold uppercase opacity-50 tracking-widest">Leitura Completa</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
              {/* O Botão de voltar e o retângulo laranja foram removidos deste bloco conforme solicitado */}
              
              <h2 className="text-5xl md:text-8xl font-black mb-16 leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              
              <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl bg-[#0a0a0a]">
                <img src={selectedPost.image} className="w-full h-[300px] md:h-[600px] object-cover" alt={selectedPost.title} />
              </div>

              <div className="text-white/80 text-xl md:text-2xl leading-[1.8] font-light space-y-12 whitespace-pre-line text-justify pb-40 pl-8 border-l border-white/5">
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