import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "A Engenharia do Visagismo Masculino: O Guia Definitivo 2026", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Uma tese completa sobre a evolução da imagem masculina, técnicas de corte na tesoura e a psicologia do estilo.",
    content: `Capítulo I: A Evolução Histórica e a Ruptura de 2026
    Para compreender o estado atual da barbearia de luxo, precisamos olhar para trás. A imagem masculina deixou de ser uma mera formalidade para se tornar uma ferramenta de comunicação não-verbal. No Beleza Link, tratamos o corte não como uma remoção de fios, mas como uma escultura facial. Em 2026, a grande ruptura é o abandono da uniformidade dos degradês industriais feitos apenas em máquina. O homem contemporâneo busca a exclusividade do "Bespoke Haircut" — o corte sob medida.

    Capítulo II: A Arquitetura das Linhas e o Visagismo Aplicado
    O visagismo é a ciência que estuda a criação de uma imagem personalizada. Não cortamos o cabelo para que ele fique bonito no espelho do salão, mas para que ele harmonize com a estrutura óssea do cliente. 
    1. Rostos Angulares: Trabalhamos com texturizações suaves para não endurecer demais a expressão.
    2. Rostos Arredondados: Criamos elevação vertical no topo (pompadours estruturados) para alongar a silhueta.
    3. A Linha da Mandíbula: A barba não é apenas pelo facial; é o contorno que define a autoridade. Usamos técnicas de "Grading" para que a barba e o cabelo se fundam em uma linha contínua que ressalte o ângulo mandibular.

    Capítulo III: A Técnica do Scissor Work (Trabalho em Tesoura)
    Por que a tesoura é o símbolo do luxo? Ao contrário da máquina, que corta o fio de forma reta e abrupta, a tesoura permite ao mestre barbeiro criar "canais" de densidade. Usamos a técnica de 'Point Cutting' profundo para remover o peso sem sacrificar o comprimento. Isso resulta em um cabelo que tem memória: você pode praticar esportes, enfrentar o vento de Anápolis e, com um simples movimento das mãos, os fios retornam ao lugar planejado.

    Capítulo IV: A Química da Finalização e Cuidados Domiciliares
    O segredo de um cabelo que mantém o aspecto de "acabei de sair do barbeiro" por semanas está na finalização estratificada. 
    Primeiro, a preparação: O uso de tônicos capilares que estimulam a circulação no couro cabeludo e preparam o fio para o calor. 
    Segundo, a modelagem: O uso de argilas minerais (Kaolin) que absorvem a oleosidade excessiva ao longo do dia, mantendo o aspecto matte. 
    Terceiro, o selamento: Um spray de fixação de memória flexível que mantém a estrutura sem deixar o cabelo rígido ou "plastificado".

    Capítulo V: Conclusão e Ética do Estilo
    Um homem Beleza Link entende que sua imagem é seu maior patrimônio. Manter um cronograma de 15 em 15 dias não é vaidade; é manutenção de marca pessoal. O luxo silencioso está nos detalhes: uma nuca perfeitamente limpa, uma sobrancelha alinhada e um cabelo que comunica sucesso antes mesmo de você dizer a primeira palavra.`
  },
  { 
    id: 2, 
    title: "A Alquimia do Loiro Perfeito: Da Biologia do Fio ao Design de Cor", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Um tratado técnico sobre descoloração segura, reconstrução molecular e o conceito de Loiro Inteligente.",
    content: `Introdução: O Conceito de Loiro de Alta Performance
    Ser loira é um investimento em autoestima que exige um entendimento profundo da biologia capilar. No Beleza Link, abandonamos as técnicas agressivas de clareamento rápido. Nossa filosofia é o "Slow Bleaching" — uma descoloração lenta e controlada que preserva a integridade das pontes de hidrogênio e enxofre do fio.

    Seção I: A Biologia da Fibra Capilar e a Melanina
    Cada cabelo possui uma história genética. Antes de iniciar qualquer processo, nossos especialistas realizam uma análise de tricologia básica. Identificamos o fundo de clareamento natural da cliente, que pode variar do vermelho ao amarelo pálido. O erro comum em salões convencionais é tentar forçar a barreira natural do fio em uma única sessão, o que leva ao emborrachamento. Aqui, usamos oxidantes de baixa volumagem aliados a protetores de córtex que agem como um escudo durante a abertura das cutículas.

    Seção II: A Arte das Mechas Criativas e o Contorno Facial
    O loiro moderno não é monocromático. Trabalhamos com o "Color Melt", uma fusão de tons que mistura nuances de areia, champanhe e pérola. O objetivo é criar sombras estratégicas que realcem os olhos e as maçãs do rosto da cliente. A técnica de "Babylights" no contorno do rosto ilumina a expressão instantaneamente, enquanto a preservação da cor natural na nuca garante profundidade e contraste.

    Seção III: Reconstrução Molecular e a Tecnologia Plex
    O que acontece dentro do fio durante a descoloração? Ocorre uma oxidação dos pigmentos, mas também uma perda de massa proteica. Para combater isso, injetamos aminoácidos durante o processo. A tecnologia Bond Builder que utilizamos no Beleza Link reconecta as ligações rompidas em tempo real. O resultado final não é apenas uma cor nova, mas um cabelo que possui mais força após a química do que possuía antes, devido à carga de polímeros reconstrutores.

    Seção IV: O Guia de Sobrevivência Pós-Salão
    A manutenção em casa é 50% do sucesso de um loiro de luxo. 
    1. Higienização: O uso de shampoos com pH balanceado (4.5 a 5.5) é crucial para não abrir as cutículas e perder o matizador.
    2. Nutrição: O cabelo descolorido tem sede de lipídios. Máscaras ricas em óleos de semente de uva e camélia devem ser usadas semanalmente.
    3. Proteção Térmica: O calor do secador é o maior inimigo da cor. Finalizadores com proteção térmica agem como um filme protetor, evitando a oxidação prematura (o amarelamento indesejado).

    Conclusão: A Experiência Beleza Link
    Escolher o Beleza Link para o seu loiro é escolher a segurança da ciência aliada ao olhar artístico. Entendemos que cada cliente é única e que a cor perfeita é aquela que brilha com saúde natural.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const day = new Date().getDate();
  const displayPosts = [allPosts[day % allPosts.length], allPosts[(day + 1) % allPosts.length]].filter(Boolean);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-24 text-center">
                <h2 className="text-[#F97316] text-sm font-bold tracking-[0.7em] uppercase mb-4">Beleza Link Magazine</h2>
                <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none opacity-20 absolute left-0 right-0 pointer-events-none">EDITION</h1>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">THE <span className="text-[#F97316]">KNOWLEDGE</span></h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {displayPosts.map((post, i) => (
                  <motion.article key={i} onClick={() => setSelectedPost(post)} className="cursor-pointer group">
                    <div className="h-[700px] overflow-hidden rounded-[60px] border border-white/5 relative bg-[#050505]">
                      <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" alt={post.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-16 left-12 right-12">
                        <span className="text-[#F97316] text-xs font-black uppercase tracking-[0.4em] mb-6 block">{post.category}</span>
                        <h3 className="text-5xl font-bold mb-8 leading-[0.9] tracking-tighter group-hover:text-[#F97316] transition-colors">{post.title}</h3>
                        <p className="text-white/40 text-xl font-light line-clamp-2 mb-10">{post.excerpt}</p>
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-20 bg-[#F97316]" />
                            <span className="text-xs font-bold uppercase tracking-widest">Leitura Profunda</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-5xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold text-xs tracking-[0.5em] mb-20 hover:tracking-[0.8em] transition-all">
                ← VOLTAR AO EDITORIAL
              </button>
              
              <div className="mb-24">
                <h2 className="text-6xl md:text-9xl font-black mb-12 leading-[0.8] tracking-tighter text-justify uppercase">{selectedPost.title}</h2>
                <div className="flex items-center gap-8 mb-16">
                    <span className="bg-[#F97316] text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">{selectedPost.category}</span>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Tempo de leitura: 12 min</span>
                </div>
              </div>

              <div className="text-white text-2xl md:text-3xl leading-[1.8] font-light space-y-16 whitespace-pre-line text-justify border-l border-white/10 pl-12 md:pl-20 mb-32">
                {selectedPost.content}
              </div>

              <div className="border-t border-white/10 pt-20 flex justify-between items-center opacity-40 mb-20">
                <div className="text-2xl font-black">BELEZA LINK</div>
                <p className="text-[10px] uppercase tracking-[1em]">Anápolis • 2026</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}