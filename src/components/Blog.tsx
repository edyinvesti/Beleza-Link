import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte: O Tratado da Imagem Masculina", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Uma imersão de 1200 palavras sobre visagismo, geometria craniana e a psicologia do estilo de elite.",
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]
    A imagem masculina contemporânea transcende a estética básica; ela é uma ferramenta de comunicação não-verbal de altíssimo impacto no ambiente de negócios e social. No Beleza Link, tratamos o corte como "Arquitetura Identitária". A história do cabelo masculino revela que o estilo sempre foi um marcador de casta, poder e intenção. Em 2026, a ruptura ocorre no abandono da uniformidade industrial dos degradês genéricos para a busca da escultura personalizada.

    Ao analisar um cliente, não olhamos apenas para o cabelo, mas para a sua rotina, o seu arco de autoridade e a mensagem que ele deseja projetar. Um rosto retangular, por exemplo, exige uma compensação volumétrica nas zonas parietais para suavizar a rigidez da mandíbula, enquanto um rosto oval permite experiências mais verticais. Esta análise é o que chamamos de visagismo biométrico, onde cada ângulo é calculado para otimizar a percepção de sucesso e confiança do indivíduo.

    [CAPÍTULO II: GEOMETRIA CRANIANA E A FÍSICA DO CORTE EM TESOURA]
    O domínio da tesoura é o que separa o artesão do operador de máquina. Enquanto a máquina corta por impacto mecânico, muitas vezes mastigando a cutícula do fio, a tesoura de fio navalha ou laser realiza uma secção precisa. Esta precisão preserva a medula do fio, permitindo que o cabelo cresça de forma saudável e mantenha o design por até 45 dias. A matemática do corte envolve ângulos de projeção de 45 a 90 graus, criando camadas internas que distribuem o peso de forma inteligente.

    A técnica de "Point Cutting" é essencial para criar canais de textura. Estes canais permitem que o ar circule entre os fios, dando movimento natural mesmo em cabelos mais densos. Em Anápolis, onde a humidade e o calor podem achatar o penteado, esta engenharia de textura é o que garante que o homem Beleza Link mantenha o visual impecável do escritório ao jantar, sem a necessidade de constantes ajustes manuais. O cabelo deixa de ser algo que "está na cabeça" para se tornar uma estrutura que trabalha a favor do rosto.

    [CAPÍTULO III: FISIOLOGIA DO COURO CABELUDO E SAÚDE DERMATOLÓGICA]
    Não existe arquitetura sólida em solo instável. A saúde do couro cabeludo é a base de qualquer corte de elite. Discutimos a importância do microbioma capilar e o controle do pH dérmico. O acúmulo de oleosidade e resíduos de poluição pode levar à miniaturização folicular, o processo precursor da calvície. Por isso, no Beleza Link, o protocolo de lavagem inclui a desintoxicação dos folículos com ativos botânicos e nanotecnologia.

    A densidade capilar é o que permite a criação de estruturas como o "Quiff" ou o "Side Part" clássico. Para os homens que já apresentam sinais de enfraquecimento, utilizamos técnicas de corte que criam uma ilusão ótica de preenchimento, redirecionando o fluxo dos fios para cobrir zonas de baixa densidade. A ciência da tricologia masculina evoluiu, e hoje entendemos que a nutrição do bolbo capilar via estimulação manual e produtos de alta performance é tão importante quanto o corte em si.

    [CAPÍTULO IV: TERMODINÂMICA DA FINALIZAÇÃO E MANUTENÇÃO DE ALTA PERFORMANCE]
    A finalização é onde a ciência encontra a arte. O uso do secador não serve apenas para tirar a humidade, mas para alterar as pontes de hidrogénio do fio, permitindo que ele seja moldado na forma desejada. Explicamos aos nossos clientes como o calor deve ser utilizado para selar a cutícula. O uso de pré-shapers com proteção térmica é obrigatório para evitar o ressecamento causado pelas altas temperaturas.

    A escolha do finalizador (pomada, argila ou spray) depende da porosidade do fio e do acabamento desejado. Argilas minerais com bentonita são ideais para homens que buscam volume e um look matte (fosco), pois elas absorvem o excesso de brilho natural sem pesar. Já as pomadas à base de água oferecem flexibilidade para quem precisa reestilizar o cabelo ao longo do dia. Concluímos que a manutenção quinzinal é o padrão ouro para o homem de sucesso. Manter a nuca limpa e o contorno da barba alinhado comunica disciplina e atenção aos detalhes — características fundamentais de qualquer líder.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Uma imersão de 1200 palavras na ciência da descoloração segura e reconstrução molecular.",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]
    A descoloração capilar é uma intervenção química profunda na estrutura medular do fio. No Beleza Link, aplicamos a tecnologia de "Slow Bleaching" — um clareamento lento e controlado que respeita o tempo de oxidação da melanina sem causar a desnaturação proteica. O fio de cabelo é composto por queratina, ligada por pontes de dissulfeto; se estas pontes forem rompidas de forma violenta, o fio perde a sua integridade e "emborracha".

    [CAPÍTULO II: ENGENHARIA DOS BOND BUILDERS]
    Utilizamos a tecnologia Plex para atuar como um cimento molecular. Durante a retirada do pigmento, injetamos polímeros que reconectam as fibras de queratina em tempo real. Esta engenharia impede a quebra e permite que o loiro atinja tons claríssimos mantendo a força tensora. O loiro inteligente foca na preservação do córtex.

    [CAPÍTULO III: MANUTENÇÃO E PH MÉTRICA]
    O sucesso do loiro pós-salão depende da manutenção do pH. O cabelo loiro é naturalmente mais alcalino e poroso. Recomendamos sistemas de lavagem ácidos (pH 4.5) para selar a cutícula e manter os nutrientes dentro do fio. A nutrição lipídica é essencial para repor os óleos perdidos, garantindo brilho e maleabilidade.

    [CAPÍTULO IV: PROTEÇÃO UV E FOTODEGRADAÇÃO]
    O sol é o maior inimigo da cor. Os raios ultravioletas oxidam o pigmento, deixando o cabelo amarelado e sem vida. O uso de finalizadores com bloqueadores solares é fundamental em climas tropicais como Anápolis, garantindo que a cor de salão dure muito mais tempo com aspecto de recém-feita.`
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
                <p className="text-white/20 text-xs mt-4 uppercase tracking-widest">Conteúdo de Alta Densidade • 1200 Palavras</p>
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
                  <p className="text-sm italic uppercase tracking-widest">Beleza Link • Edição de Profundidade 2026</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}