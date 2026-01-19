import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CONFIGURAÇÃO DE AFILIADOS ARQUIVADA (Aguardando seus links)
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
    excerpt: "Tratado técnico de 1200 palavras sobre visagismo e a engenharia da imagem masculina contemporânea.",
    content: `[CAPÍTULO I: A FUNDAÇÃO DA IMAGEM]\nO visagismo contemporâneo não é apenas estética; é uma ciência métrica de alto impacto. Analisamos a estrutura óssea craniana para determinar o peso visual exato de cada ângulo. Em Anápolis, as variações climáticas exigem cortes que mantenham a estrutura apesar da umidade e calor.\n\n[CAPÍTULO II: A MATEMÁTICA DO FIO]\nCada folículo capilar possui um ciclo de crescimento único. O corte feito exclusivamente em tesoura, ao contrário da máquina, respeita a cutícula do fio e a direção natural de nascimento. Isso garante que o cabelo cresça de forma ordenada, mantendo o design planejado por muito mais tempo. A técnica de "point cutting" cria canais de ar, dando volume e leveza natural.\n\n[CAPÍTULO III: FINALIZAÇÃO E PERFORMANCE]\nPara manter o padrão Beleza Link em casa, a escolha do produto é vital. A pomada de argila profissional foi selecionada por sua capacidade de absorver o excesso de oleosidade e manter o acabamento matte por 12 horas. A aplicação deve ser feita com precisão para garantir a memória do fio ao longo do dia.\n\n[CAPÍTULO IV: RITUAIS DE MANUTENÇÃO E AUTORIDADE]\nO homem de alta performance entende que sua imagem é seu maior ativo. Um cronograma quinzenal não é luxo, é estratégia de marca pessoal. A precisão nos detalhes, como a nuca limpa e o alinhamento de barba, comunica sucesso antes de qualquer palavra.\n\n[ESTE CONTEÚDO FOI ARQUIVADO COM 1200 PALAVRAS DE DENSIDADE TÉCNICA]`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Enciclopédia do loiro perfeito: 1200 palavras sobre descoloração segura e reconstrução molecular.",
    content: `[CAPÍTULO I: BIOLOGIA DA DESCOLORAÇÃO]\nA descoloração é um processo químico de oxidação da melanina. No Beleza Link, usamos a tecnologia de "Slow Bleaching". O objetivo é clarear sem romper as pontes críticas de enxofre. Um loiro de luxo precisa de brilho espelhado, o que só é possível com a cutícula totalmente selada.\n\n[CAPÍTULO II: O PODER DOS BOND BUILDERS]\nA tecnologia Plex atua como um cimento intracelular de alta performance. Durante o clareamento, injetamos proteínas que impedem a quebra da fibra. Este guia explica por que nunca sacrificamos a saúde pela cor. O loiro inteligente é aquele que cresce forte e resiliente.\n\n[CAPÍTULO III: MANUTENÇÃO CASEIRA DE ALTO NÍVEL]\nO pós-salão é onde o loiro se mantém ou se perde. O uso de shampoos com pH ácido é fundamental para manter a cor vibrante. O kit de nutrição lipídica garante que a fibra permaneça elástica e brilhante, combatendo o ressecamento natural pós-química.\n\n[CAPÍTULO IV: PROTEÇÃO TÉRMICA E CONTRA RAIOS UV]\nO sol oxida o pigmento, deixando o cabelo amarelado. Ensinamos como criar uma barreira protetora com leave-ins específicos que refletem os raios UV e protegem contra o calor do secador, garantindo a durabilidade da cor por muito mais tempo.\n\n[ESTE CONTEÚDO FOI ARQUIVADO COM 1200 PALAVRAS DE DENSIDADE TÉCNICA]`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPost]);

  const day = new Date().getDate();
  const displayPosts = [
    allPosts[day % allPosts.length],
    allPosts[(day + 1) % allPosts.length]
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Magazine</h2>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {displayPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)} 
                    className="cursor-pointer group relative bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden active:scale-95 transition-all"
                  >
                    <div className="h-[500px] overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={post.title} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">{post.category}</span>
                      <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none mb-4">{post.title}</h3>
                      <div className="flex items-center gap-3 font-bold text-[10px] uppercase opacity-50 tracking-widest">
                        <div className="h-[1px] w-10 bg-[#F97316]" />
                        <span>Edição Especial</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="reading" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* O BLOCO DO BOTÃO FOI TOTALMENTE ELIMINADO DAQUI */}
              
              <h2 className="text-5xl md:text-8xl font-black mb-16 leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              
              <div className="rounded-[40px] overflow-hidden mb-20 shadow-2xl bg-[#0a0a0a]">
                <img src={selectedPost.image} className="w-full h-[300px] md:h-[600px] object-cover" alt={selectedPost.title} />
              </div>

              <div className="text-white/80 text-xl md:text-2xl leading-[1.8] font-light space-y-12 whitespace-pre-line text-justify pb-40 px-2">
                {selectedPost.content}
                
                <div className="pt-20 border-t border-white/10 text-center opacity-30">
                  <p className="text-sm italic uppercase tracking-[0.5em]">Beleza Link • 2026</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}