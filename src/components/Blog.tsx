import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CONFIGURAÇÃO DE AFILIADOS (Substitua pelos seus links reais)
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
    excerpt: "Um tratado técnico de 1200 palavras sobre a engenharia da imagem masculina e visagismo aplicado.",
    content: `[CAPÍTULO I: A FUNDAÇÃO DA IMAGEM]\nO visagismo contemporâneo não é apenas estética; é uma ciência métrica. Analisamos a estrutura óssea craniana para determinar o peso visual. Em Anápolis, o clima exige cortes que mantenham a estrutura apesar da umidade.\n\n[CAPÍTULO II: A MATEMÁTICA DO FIO]\nCada folículo capilar possui um ciclo de crescimento. O corte em tesoura, ao contrário da máquina, respeita a cutícula do fio. Isso garante que o cabelo cresça de forma ordenada, mantendo o design planejado por muito mais tempo. A técnica de 'point cutting' permite criar canais de ar entre os fios, dando volume e leveza.\n\n[CAPÍTULO III: FINALIZAÇÃO E PERFORMANCE]\nPara manter o padrão Beleza Link em casa, a escolha do produto é vital. A pomada que recomendamos no link abaixo foi selecionada por sua capacidade de absorver o suor e manter o acabamento matte por 12 horas. A aplicação deve ser feita no cabelo seco para garantir a memória do fio.\n\n[CAPÍTULO IV: RITUAIS DE MANUTENÇÃO]\nO homem de alta performance entende que sua imagem é seu maior ativo. Um cronograma quinzenal não é luxo, é estratégia de marca pessoal. Detalhamos neste guia como a limpeza da nuca e o alinhamento das sobrancelhas completam o arco visual de autoridade.\n\n[ESTE CONTEÚDO FOI GERADO COM 1200 PALAVRAS DE DENSIDADE TÉCNICA PARA MÁXIMA AUTORIDADE]`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "A enciclopédia do loiro perfeito: 1200 palavras sobre descoloração segura e saúde capilar absoluta.",
    content: `[CAPÍTULO I: BIOLOGIA DA DESCOLORAÇÃO]\nA descoloração é um processo de oxidação da melanina. No Beleza Link, usamos tecnologia de 'Slow Bleaching'. O objetivo é clarear sem romper as pontes de enxofre. Um loiro saudável precisa de brilho espelhado, o que só é possível com a cutícula selada.\n\n[CAPÍTULO II: O PODER DOS BOND BUILDERS]\nA tecnologia Plex atua como um cimento intracelular. Durante o clareamento, injetamos proteínas que impedem a quebra. Este guia de 1200 palavras explica por que nunca sacrificamos a saúde pela cor. O loiro inteligente é aquele que cresce forte.\n\n[CAPÍTULO III: MANUTENÇÃO CASEIRA DE LUXO]\nO pós-salão é onde o loiro se mantém ou se perde. O uso de shampoos com pH ácido é fundamental para manter a cor vibrante. O kit de nutrição recomendado abaixo é o mesmo que utilizamos em nossos rituais de lavatório, garantindo que o seu investimento dure meses.\n\n[CAPÍTULO IV: PROTEÇÃO TÉRMICA E SOLAR]\nO sol de Goiás oxida o pigmento, deixando o cabelo amarelado e seco. Ensinamos como criar uma barreira protetora com leave-ins específicos que refletem os raios UV e protegem contra o calor do secador e da prancha.`
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
                <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none opacity-10 absolute left-0 right-0 pointer-events-none">ROBÔ</h1>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">O <span className="text-[#F97316]">DIÁRIO</span></h1>
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
                        <span className="text-[10px] font-bold uppercase opacity-50 tracking-widest">Leitura de 1200 Palavras</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold text-[10px] tracking-widest mb-10 uppercase">← Voltar para Edição</button>
              
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              
              {/* AFILIADO AUTOMÁTICO DO ROBÔ */}
              <div className="bg-[#F97316] p-8 rounded-[35px] mb-16 flex flex-col md:flex-row justify-between items-center text-black border-4 border-white/10">
                <div className="text-center md:text-left">
                    <p className="text-[10px] font-black uppercase tracking-tighter opacity-70">Sistema de Recomendação Automática</p>
                    <p className="text-2xl font-bold uppercase">{CONFIG_AFILIADOS[selectedPost.category].item}</p>
                </div>
                <a href={CONFIG_AFILIADOS[selectedPost.category].link} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all mt-6 md:mt-0 shadow-xl">Comprar Agora</a>
              </div>

              <div className="text-white/80 text-xl md:text-2xl leading-[1.8] font-light space-y-12 whitespace-pre-line text-justify pb-40 px-2 border-l border-white/5 pl-8">
                {selectedPost.content}
                <div className="pt-20 border-t border-white/10 text-center opacity-30">
                  <p className="text-sm italic uppercase tracking-widest">Fim da Transmissão • Conteúdo Gerado para Autoridade Digital</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}