import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Uma tese completa sobre a evolução da imagem masculina e a psicologia do estilo contemporâneo.",
    content: `Capítulo I: A Evolução Histórica e a Ruptura de 2026
    Para compreender o estado atual da barbearia de luxo, precisamos olhar para trás. A imagem masculina deixou de ser uma mera formalidade para se tornar uma ferramenta de comunicação não-verbal de altíssimo impacto. No Beleza Link, tratamos o corte não como uma simples remoção de fios, mas como uma verdadeira escultura facial. Em 2026, a grande ruptura é o abandono total da uniformidade dos degradês industriais feitos apenas em máquina. O homem contemporâneo de sucesso busca agora a exclusividade do "Bespoke Haircut" — o corte feito sob medida para a sua estrutura.

    Capítulo II: A Arquitetura das Linhas e o Visagismo Aplicado
    O visagismo é a ciência que estuda a criação de uma imagem personalizada. Não cortamos o cabelo apenas para que ele fique bonito no espelho do salão, mas para que ele harmonize com a estrutura óssea do cliente em todos os ângulos. 
    1. Rostos Angulares: Trabalhamos com texturizações suaves para não endurecer demais a expressão, conferindo um ar de acessibilidade sem perder a força.
    2. Rostos Arredondados: Criamos elevação vertical no topo para alongar a silhueta, utilizando pompadours estruturados que conferem uma presença imponente.
    3. A Linha da Mandíbula: A barba não é apenas pelo facial; é o contorno que define a autoridade. Usamos técnicas de "Grading" para que a barba e o cabelo se fundam em uma linha contínua que ressalte o ângulo mandibular de forma natural e poderosa.

    Capítulo III: A Técnica do Trabalho em Tesoura (Scissor Work)
    Por que a tesoura é o símbolo supremo do luxo? Ao contrário da máquina, que corta o fio de forma reta e abrupta, a tesoura permite ao mestre barbeiro criar "canais" de densidade. Usamos a técnica de corte profundo para remover o peso sem sacrificar o comprimento necessário para o movimento. Isso resulta em um cabelo que tem "memória": você pode praticar desporto, enfrentar o vento e, com um simples movimento das mãos, os fios retornam exatamente ao lugar planejado. É a engenharia aplicada à estética.

    Capítulo IV: A Química da Finalização e Cuidados Domiciliares
    O segredo de um cabelo que mantém o aspecto de "acabei de sair do barbeiro" por semanas está na finalização estratificada. 
    Primeiro, a preparação: O uso de tônicos capilares que estimulam a circulação no couro cabeludo e preparam o fio para qualquer exposição térmica. 
    Segundo, a modelagem: O uso de argilas minerais que absorvem a oleosidade excessiva ao longo do dia, mantendo o aspecto matte e sofisticado. 
    Terceiro, o selamento: Um spray de fixação de memória flexível que mantém a estrutura sem deixar o cabelo rígido ou com aquele aspecto artificial "plastificado".

    Capítulo V: Conclusão e Ética do Estilo
    Um homem Beleza Link entende que sua imagem é seu maior patrimônio e cartão de visitas. Manter um cronograma rigoroso de 15 em 15 dias não é vaidade; é manutenção de marca pessoal e profissional. O luxo silencioso está nos detalhes: uma nuca perfeitamente limpa, uma sobrancelha alinhada e um cabelo que comunica sucesso, autoridade e cuidado antes mesmo de você proferir a primeira palavra.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Um tratado técnico sobre descoloração segura, reconstrução molecular e o conceito de Loiro Inteligente.",
    content: `Introdução: O Conceito de Loiro de Alta Performance
    Ser loira é um estado de espírito e um investimento em autoestima que exige um entendimento profundo da biologia capilar. No Beleza Link, abandonamos as técnicas agressivas de clareamento rápido que sacrificam a saúde do fio. Nossa filosofia é o "Slow Bleaching" — uma descoloração lenta, artesanal e controlada que preserva a integridade absoluta das pontes de hidrogénio e enxofre do fio.

    Seção I: A Biologia da Fibra Capilar e a Melanina
    Cada cabelo possui uma história genética única. Antes de iniciar qualquer processo químico, nossos especialistas realizam uma análise de tricologia exaustiva. Identificamos o fundo de clareamento natural da cliente, que pode variar do vermelho intenso ao amarelo pálido. O erro fatal em salões convencionais é tentar forçar a barreira natural do fio em uma única sessão, o que invariavelmente leva ao emborrachamento. Aqui, usamos oxidantes de baixa volumagem aliados a protetores de córtex que agem como um escudo impenetrável durante a abertura das cutículas.

    Seção II: A Arte das Mechas Criativas e o Contorno Facial
    O loiro moderno de luxo nunca é monocromático. Trabalhamos com o "Color Melt", uma fusão artística de tons que mistura nuances de areia, champanhe e pérola. O objetivo é criar sombras estratégicas que realcem os olhos e as maçãs do rosto da cliente através do contraste. A técnica de iluminação no contorno do rosto ilumina a expressão instantaneamente, enquanto a preservação da cor natural na nuca garante profundidade e uma transição elegante no crescimento.

    Seção III: Reconstrução Molecular e a Tecnologia de Proteção
    O que acontece exatamente dentro do fio durante a descoloração? Ocorre uma oxidação dos pigmentos, mas também uma perda crítica de massa proteica. Para combater este efeito, injetamos aminoácidos durante o processo. A tecnologia Bond Builder que utilizamos no Beleza Link reconecta as ligações rompidas em tempo real. O resultado final não é apenas uma cor nova, mas um cabelo que possui mais força após a química do que possuía antes, devido à carga massiva de polímeros reconstrutores de alta tecnologia.

    Seção IV: O Guia de Sobrevivência Pós-Salão
    A manutenção em casa é responsável por 50% do sucesso de um loiro de luxo a longo prazo. 
    1. Higienização: O uso de shampoos com pH rigorosamente balanceado (4.5 a 5.5) é crucial para não abrir as cutículas e perder o pigmento matizador.
    2. Nutrição: O cabelo descolorido tem uma necessidade extrema de lipídios. Máscaras ricas em óleos nobres de semente de uva e camélia devem ser usadas semanalmente.
    3. Proteção Térmica: O calor do secador é o maior inimigo da cor vibrante. Finalizadores com proteção térmica agem como um filme protetor, evitando a oxidação prematura e o amarelamento indesejado.`
  },
  { 
    id: 3, 
    title: "Poder Minimalista", 
    category: "Penteados", 
    image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Do coque Sleek às ondas Hollywoodianas, descubra o que define a elegância nas grandes recepções.",
    content: `Introdução: A Estética do Luxo Silencioso
    Em 2026, o conceito de 'Luxo Silencioso' dominou as passadeiras vermelhas. A estética agora foca na perfeição da forma em vez da complexidade excessiva. Um penteado de sucesso deve parecer sem esforço, embora exija uma técnica magistral de preparação e execução. No Beleza Link, entendemos que o penteado é o quadro que emoldura o rosto.

    Seção I: A Técnica do Sleek Look
    O coque polido tornou-se a marca registada da sofisticação moderna. O segredo reside na preparação: um brushing impecável seguido da aplicação de bálsamos antifrizz de alta tecnologia. A posição do coque deve seguir rigorosamente o ângulo do maxilar para criar um efeito de 'lifting' facial natural e elegante.

    Seção II: Ondas de Cinema (Old Hollywood)
    Diferente dos caracóis comuns, as ondas de gala são contínuas. Após o uso do modelador, os fios são escovados em conjunto para criar uma única síncope de brilho. Esta técnica realça as nuances da coloração e confere uma aura de glamour clássico que nunca passa de moda, garantindo que o cabelo brilhe sob qualquer iluminação.

    Seção III: A Importância dos Finalizadores de Luxo
    A escolha do acessório deve ser minimalista para não competir com a beleza natural. No Beleza Link, acreditamos que o penteado é o suporte para a joia da cliente. O uso de finalizadores de brilho espelhado e sprays de fixação com partículas de seda garante que o penteado resista a horas de evento mantendo a maleabilidade.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const day = new Date().getDate();
  const displayPosts = [
    allPosts[day % allPosts.length],
    allPosts[(day + 1) % allPosts.length],
    allPosts[(day + 2) % allPosts.length]
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-24 text-center">
                <h2 className="text-[#F97316] text-sm font-bold tracking-[0.7em] uppercase mb-4">Beleza Link Magazine</h2>
                <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none opacity-20 absolute left-0 right-0 pointer-events-none">EDIÇÃO</h1>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayPosts.map((post, i) => (
                  <motion.article key={i} onClick={() => setSelectedPost(post)} className="cursor-pointer group">
                    <div className="h-[550px] overflow-hidden rounded-[40px] border border-white/5 relative bg-[#050505]">
                      <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" alt={post.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <div className="absolute bottom-12 left-10 right-10">
                        <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{post.category}</span>
                        <h3 className="text-3xl font-bold mb-6 leading-none group-hover:text-[#F97316] transition-colors uppercase tracking-tighter">{post.title}</h3>
                        <div className="w-8 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold text-xs tracking-[0.5em] mb-12 hover:tracking-[0.8em] transition-all">
                ← VOLTAR PARA A CAPA
              </button>
              <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">{selectedPost.title}</h2>
              <img src={selectedPost.image} className="w-full h-[500px] object-cover rounded-[50px] mb-16 shadow-2xl" />
              <div className="text-white/80 text-2xl leading-[2] font-light space-y-12 whitespace-pre-line text-justify pb-32">
                {selectedPost.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}