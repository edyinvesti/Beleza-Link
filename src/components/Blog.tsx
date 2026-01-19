import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "O Guia Definitivo do Corte Masculino Moderno", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Uma análise profunda sobre a arquitetura dos fios, visagismo aplicado e as tendências de 2026.",
    content: `A barbearia brasileira atravessou uma metamorfose sem precedentes. O que antes era apenas uma necessidade higiênica, hoje é um dos pilares da imagem pessoal do homem de alto padrão. Em 2026, o Beleza Link observa uma transição clara: saímos da era dos degradês ultra-rápidos e entramos na era da "Arquitetura Capilar".

    O Renascimento das Tesouras:
    O luxo em 2026 é silencioso. Isso reflete no uso predominante das tesouras de fio navalha e fio laser sobre as máquinas. O trabalho artesanal permite ao profissional respeitar o caimento natural e a densidade específica de cada cliente. Um corte feito inteiramente na tesoura cresce com mais elegância, mantendo a forma por até quatro semanas, enquanto cortes de máquina perdem o desenho em dez dias.

    Visagismo e Intencionalidade:
    Não existe "o corte da moda", existe o corte que comunica quem você é. Se você ocupa um cargo de liderança, linhas mais retas e quadradas na região temporal transmitem autoridade e firmeza. Para perfis criativos, texturas mais desconectadas no topo trazem dinamismo. No Beleza Link, cada ângulo é calculado para harmonizar com a linha da mandíbula e o arco das sobrancelhas.

    A Ciência da Finalização:
    O maior erro do homem moderno é usar produtos genéricos. Para 2026, a tendência é o acabamento "Raw Style" (estilo natural). Isso é alcançado com o uso de Sea Salt Sprays que doam volume sem peso, seguidos por uma pomada de argila de alta densidade. A técnica correta exige aquecer o produto na palma das mãos até que ele desapareça, para só então aplicar da raiz às pontas, garantindo fixação invisível.`
  },
  { 
    id: 2, 
    title: "O Renascimento do Loiro: Ciência e Arte", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Como a tecnologia Bond Builder e o design de cor personalizado estão salvando fios e elevando a autoestima.",
    content: `Alcançar o loiro perfeito é uma jornada química complexa que exige um mestre em colorimetria. No cenário atual, o "Loiro Saudável" superou o "Loiro Branco". A tendência internacional, que trouxemos para o Beleza Link, foca na preservação da massa cortical antes, durante e depois da descoloração.

    A Engenharia por trás das Mechas:
    O processo começa muito antes do pó descolorante. Realizamos um teste de porosidade para entender se o fio suporta a abertura de tons. O segredo da naturalidade em 2026 é a técnica de "Shadow Root", onde criamos um degradê imperceptível que imita a luz do sol. Isso permite que a cliente mantenha um visual luxuoso mesmo com dois ou três meses de crescimento.

    Tecnologia e Recuperação de Pontes:
    Durante a descoloração, as pontes de dissulfeto são rompidas. Utilizamos aditivos Plex de quarta geração que agem como um cimento celular, reconstruindo essas pontes enquanto o pigmento é retirado. O resultado é um fio que, mesmo após horas de processo químico, mantém a elasticidade e o brilho vitrificado.

    O Ritual Pós-Química:
    Uma loira de luxo não sai do salão sem um plano de ação. A acidificação é o primeiro passo: retornar o cabelo ao seu pH natural. Em casa, o uso de máscaras com nanoprotenas é essencial, pois penetram no córtex sem pesar na fibra. O óleo de finalização deve ter proteção térmica e UV, agindo como um escudo contra a oxidação causada pelo sol.`
  },
  { 
    id: 3, 
    title: "Penteados de Gala: O Poder do Minimalismo", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=1200", 
    excerpt: "Do coque Sleek às ondas Hollywoodianas, descubra o que define a elegância nas grandes recepções.",
    content: `Em 2026, o conceito de 'Luxo Silencioso' dominou as passadeiras vermelhas e os eventos de gala. A estética agora foca na perfeição da forma em vez da complexidade excessiva. Um penteado de sucesso deve parecer sem esforço, embora exija uma técnica magistral.

    A Técnica do Sleek Look:
    O coque polido tornou-se a marca registada da sofisticação moderna. O segredo reside na preparação: um brushing impecável seguido da aplicação de bálsamos antifrizz. A posição do coque deve seguir o ângulo do maxilar para criar um efeito de 'lifting' facial natural.

    Ondas de Cinema (Old Hollywood):
    Diferente dos caracóis comuns, as ondas de gala são contínuas. Após o uso do modelador, os fios são escovados em conjunto para criar uma única síncope de brilho. Esta técnica realça as nuances da coloração e confere uma aura de glamour clássico que nunca passa de moda.

    A Importância dos Detalhes:
    A escolha do acessório deve ser minimalista. No Beleza Link, acreditamos que o penteado é o suporte para a joia da cliente. O uso de finalizadores de brilho espelhado garante que, sob as luzes do evento, o cabelo reflita saúde e opulência.`
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
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-sm font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Magazine</h2>
                <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">THE <span className="text-[#F97316]">JOURNAL</span></h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayPosts.map((post, i) => (
                  <motion.article key={i} onClick={() => setSelectedPost(post)} className="cursor-pointer group">
                    <div className="h-[500px] overflow-hidden rounded-[30px] border border-white/5 relative">
                      <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={post.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-10 left-8 right-8">
                        <span className="text-[#F97316] text-[10px] font-black uppercase tracking-widest mb-3 block">{post.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#F97316] transition-colors">{post.title}</h3>
                        <div className="w-8 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold text-[10px] tracking-[0.4em] mb-12">← VOLTAR</button>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter">{selectedPost.title}</h2>
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