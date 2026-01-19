import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Uma tese completa sobre a evolução da imagem masculina e a psicologia do estilo contemporâneo.",
    content: `Capítulo I: A Evolução Histórica e a Ruptura de 2026\nPara compreender o estado atual da barbearia de luxo, precisamos olhar para trás. A imagem masculina deixou de ser uma mera formalidade para se tornar uma ferramenta de comunicação não-verbal de altíssimo impacto.\n\nCapítulo II: O Visagismo Aplicado\nNo Beleza Link, tratamos o corte não como uma simples remoção de fios, mas como uma verdadeira escultura facial. Em 2026, a grande ruptura é o abandono total da uniformidade dos degradês industriais. O homem de sucesso busca agora a exclusividade do corte feito sob medida para a sua estrutura óssea.\n\nCapítulo III: A Técnica da Tesoura\nPor que a tesoura é o símbolo supremo do luxo? Ao contrário da máquina, ela permite ao mestre criar "canais" de densidade. Usamos a técnica de corte profundo para remover o peso sem sacrificar o movimento. Isso resulta em um cabelo que tem "memória": os fios retornam exatamente ao lugar planejado.\n\nCapítulo IV: Manutenção de Marca Pessoal\nUm homem Beleza Link entende que sua imagem é seu maior patrimônio. Manter um cronograma de 15 em 15 dias não é vaidade; é manutenção de autoridade. O luxo silencioso está nos detalhes: uma nuca perfeitamente limpa e um cabelo que comunica sucesso antes de você dizer a primeira palavra.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Um tratado técnico sobre descoloração segura, reconstrução molecular e o conceito de Loiro Inteligente.",
    content: `Introdução: O Conceito de Alta Performance\nSer loira é um estado de espírito e um investimento em autoestima que exige ciência. No Beleza Link, abandonamos as técnicas agressivas. Nossa filosofia é o "Slow Bleaching" — uma descoloração lenta e controlada que preserva a integridade absoluta das pontes do fio.\n\nSeção I: Biologia e Melanina\nAntes de iniciar, realizamos uma análise de tricologia exaustiva. Identificamos o fundo de clareamento natural. O erro fatal é forçar a barreira do fio em uma única sessão. Usamos oxidantes de baixa volumagem aliados a protetores de córtex que agem como um escudo impenetrável.\n\nSeção II: Design de Cor e Contorno\nO loiro moderno nunca é monocromático. Trabalhamos com o "Color Melt", uma fusão artística de tons areia, champanhe e pérola. O objetivo é criar sombras estratégicas que realcem os olhos através do contraste.\n\nSeção III: Reconstrução Molecular\nInjetamos aminoácidos durante o processo. A tecnologia Bond Builder reconecta as ligações rompidas em tempo real. O resultado final não é apenas uma cor nova, mas um cabelo que possui mais força após a química devido à carga massiva de polímeros reconstrutores.`
  },
  { 
    id: 3, 
    title: "Poder Minimalista", 
    category: "Penteados", 
    image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Do coque Sleek às ondas Hollywoodianas, descubra o que define a elegância nas grandes recepções.",
    content: `Introdução: Estética do Luxo Silencioso\nEm 2026, o conceito de 'Luxo Silencioso' dominou as passadeiras vermelhas. A estética foca na perfeição da forma em vez da complexidade excessiva. Um penteado de sucesso deve parecer sem esforço, embora exija uma técnica magistral de preparação.\n\nSeção I: A Técnica do Sleek Look\nO coque polido tornou-se a marca da sofisticação. O segredo reside na preparação: um brushing impecável seguido da aplicação de bálsamos antifrizz. A posição do coque deve seguir o ângulo do maxilar para criar um efeito de 'lifting' facial natural.\n\nSeção II: Ondas de Cinema\nDiferente dos caracóis comuns, as ondas de gala são contínuas. Após o uso do modelador, os fios são escovados em conjunto para criar uma única síncope de brilho. Esta técnica realça as nuances da cor e confere uma aura de glamour clássico.\n\nSeção III: Finalizadores de Luxo\nA escolha do acessório deve ser minimalista. No Beleza Link, o penteado é o suporte para a joia da cliente. O uso de finalizadores de brilho espelhado garante que o penteado resista a horas de evento mantendo a maleabilidade.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Previne zoom indesejado em inputs e melhora scroll no iOS
  useEffect(() => {
    if (selectedPost) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedPost]);

  const day = new Date().getDate();
  const displayPosts = [
    allPosts[day % allPosts.length],
    allPosts[(day + 1) % allPosts.length],
    allPosts[(day + 2) % allPosts.length]
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 font-sans text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-12 md:mb-24 text-center">
                <h2 className="text-[#F97316] text-[10px] md:text-sm font-bold tracking-[0.4em] md:tracking-[0.7em] uppercase mb-2">Beleza Link Magazine</h2>
                <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {displayPosts.map((post, i) => (
                  <motion.article 
                    key={i} 
                    onClick={() => setSelectedPost(post)} 
                    className="cursor-pointer group active:scale-95 transition-transform duration-200"
                  >
                    <div className="h-[450px] md:h-[550px] overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/5 relative bg-[#050505]">
                      <img src={post.image} className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-[1s]" alt={post.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10">
                        <span className="text-[#F97316] text-[9px] font-black uppercase tracking-[0.3em] mb-3 block">{post.category}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-none uppercase tracking-tighter">{post.title}</h3>
                        <div className="w-8 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="reading" 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }} 
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setSelectedPost(null)} 
                className="text-[#F97316] font-bold text-[10px] tracking-[0.3em] mb-10 flex items-center gap-2"
              >
                ← VOLTAR
              </button>
              
              <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-10 leading-tight md:leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              
              <div className="rounded-[30px] md:rounded-[50px] overflow-hidden mb-10 md:mb-16 shadow-2xl">
                <img src={selectedPost.image} className="w-full h-[300px] md:h-[500px] object-cover" />
              </div>

              <div className="text-white/80 text-lg md:text-2xl leading-[1.6] md:leading-[2] font-light space-y-8 md:space-y-12 whitespace-pre-line text-justify pb-20 px-2">
                {selectedPost.content}
              </div>

              <div className="border-t border-white/10 pt-10 flex justify-between items-center opacity-40 pb-10">
                <div className="text-xl font-black uppercase">Beleza Link</div>
                <p className="text-[8px] uppercase tracking-[0.5em]">2026</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}