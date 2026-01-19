import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte: O Tratado da Imagem Masculina", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    affiliateLink: "https://seu-link-de-afiliado.com/kit-masculino",
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]
    A imagem masculina contemporânea transcende a estética básica; ela é uma ferramenta de comunicação não-verbal de altíssimo impacto no ambiente de negócios e social. No Beleza Link, tratamos o corte como "Arquitetura Identitária". A história do cabelo masculino revela que o estilo sempre foi um marcador de casta, poder e intenção. Em 2026, a ruptura ocorre no abandono da uniformidade industrial dos degradês genéricos para a busca da escultura personalizada. O visagismo biométrico é a chave. Analisamos cada milímetro da estrutura óssea para projetar uma sombra que favoreça a mandíbula e o olhar.

    [CAPÍTULO II: GEOMETRIA CRANIANA E A FÍSICA DO CORTE EM TESOURA]
    O domínio da tesoura é o que separa o artesão do operador de máquina. Enquanto a máquina corta por impacto mecânico, muitas vezes mastigando a cutícula do fio, a tesoura de fio navalha realiza uma secção precisa. Esta precisão preserva a medula do fio, permitindo que o cabelo cresça de forma saudável e mantenha o design por até 45 dias. A matemática do corte envolve ângulos de projeção de 45 a 90 graus, criando camadas internas que distribuem o peso de forma inteligente. O "Point Cutting" cria canais de textura que permitem o fluxo de ar, essencial para o clima de Anápolis.

    [CAPÍTULO III: FISIOLOGIA DO COURO CABELUDO E SAÚDE DERMATOLÓGICA]
    Não existe arquitetura sólida em solo instável. A saúde do couro cabeludo é a base de qualquer corte de elite. O microbioma capilar e o controle do pH dérmico são vitais. O acúmulo de oleosidade leva à miniaturização folicular. No Beleza Link, usamos desintoxicação folicular com nanotecnologia. A densidade capilar permite criar estruturas como o "Quiff". Para quem tem sinais de calvície, redirecionamos o fluxo dos fios para cobrir zonas de baixa densidade, usando ciência e ilusão ótica.

    [CAPÍTULO IV: TERMODINÂMICA DA FINALIZAÇÃO]
    A finalização é onde a ciência encontra a arte. O secador altera as pontes de hidrogénio do fio. O uso de pré-shapers com proteção térmica é obrigatório. Argilas minerais com bentonita são ideais para volume e look matte. Pomadas à base de água oferecem flexibilidade. A manutenção quinzinal é o padrão ouro. Manter a nuca limpa comunica disciplina e atenção aos detalhes, fundamentais para qualquer líder de sucesso.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop",
    affiliateLink: "https://seu-link-de-afiliado.com/kit-loiro",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]
    A descoloração capilar é uma intervenção química profunda. Aplicamos "Slow Bleaching" — clareamento lento que respeita o tempo de oxidação da melanina. O fio tem queratina e pontes de dissulfeto; se rompidas violentamente, o fio "emborracha". O controle cinético evita o superaquecimento do córtex. A cutícula deve ser aberta de forma controlada para não perder a capacidade de reter nutrientes.

    [CAPÍTULO II: ENGENHARIA DOS BOND BUILDERS]
    Tecnologia Plex atua como cimento molecular. Injetamos polímeros que reconectam as fibras em tempo real. Isso impede a quebra e permite atingir tons claríssimos mantendo a força tensora. Aminoácidos de baixo peso molecular, como arginina e cisteína, penetram na fibra mesmo saturada. O loiro inteligente foca na preservação total do córtex capilar.

    [CAPÍTULO III: MANUTENÇÃO E PH MÉTRICA]
    O sucesso depende da manutenção do pH. O loiro é alcalino e poroso. Usar sistemas de lavagem ácidos (pH 4.5) sela a cutícula. A nutrição lipídica repõe óleos nobres, garantindo brilho. O cronograma capilar deve alternar hidratação, nutrição e reconstrução. Sem a barreira lipídica, o fio torna-se quebradiço e sem vida.

    [CAPÍTULO IV: PROTEÇÃO UV E FINALIZAÇÃO]
    O sol é o inimigo. Raios UV oxidam o pigmento, deixando o cabelo amarelado. Finalizadores com bloqueadores solares são fundamentais. A beleza duradoura é fruto de ciência e cuidado. No Beleza Link, fornecemos um sistema de gestão de imagem. Ao seguir estas diretrizes, você garante que seu loiro seja uma assinatura de saúde impecável.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => { if (selectedPost) window.scrollTo(0,0); }, [selectedPost]);

  const displayPosts = allPosts;

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
                        <span className="text-[10px] font-bold uppercase opacity-50 tracking-widest italic">Leitura Completa</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="mb-8 text-[#F97316] text-xs font-bold uppercase tracking-widest flex items-center gap-2">← Voltar para o Diário</button>
              <h2 className="text-5xl md:text-8xl font-black mb-16 leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              <div className="rounded-[40px] overflow-hidden mb-16">
                <img src={selectedPost.image} className="w-full h-[300px] md:h-[600px] object-cover" alt={selectedPost.title} />
              </div>
              <div className="text-white/80 text-xl md:text-2xl leading-[1.8] font-light space-y-12 whitespace-pre-line text-justify pb-20 border-l border-white/5 pl-8">
                {selectedPost.content}
                
                {/* BOTÃO DE AFILIADO */}
                <div className="pt-20">
                  <a href={selectedPost.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full bg-[#F97316] text-black text-center py-8 rounded-[30px] font-black text-2xl uppercase tracking-tighter hover:bg-white transition-colors shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                    Adquirir Kit de Manutenção Profissional
                  </a>
                  <p className="text-center text-[10px] opacity-30 mt-4 uppercase tracking-widest">Recomendação técnica Beleza Link • 2026</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}