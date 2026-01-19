import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "O Guia do Corte Masculino Moderno", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Como escolher o corte ideal que une praticidade e sofisticação para o dia a dia.",
    content: `A evolução da barbearia clássica trouxe de volta o prazer do cuidado detalhado. Em 2026, o foco não é apenas o degradê, mas a estrutura do topo e a textura dos fios. 
    
    1. A Estrutura: Cortes como o 'Executive Contour' exigem uma base sólida. O segredo está em manter as laterais bem ajustadas para alongar o rosto.
    2. A Texturização: Usar tesouras de fio navalha permite que o cabelo tenha movimento natural sem parecer pesado.
    3. Finalização: O uso de pomadas à base de argila (matte) é essencial para quem busca um visual moderno e não quer o brilho excessivo do gel.
    
    Um corte de luxo não termina na cadeira do barbeiro; ele se mantém com a manutenção correta a cada 15 dias.`
  },
  { 
    id: 2, 
    title: "Cronograma Capilar Pós-Química", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", 
    excerpt: "O segredo das loiras de luxo para manter a fibra capilar intacta e brilhante.",
    content: `Descolorir os fios é um processo artístico, mas que exige responsabilidade técnica. Para manter o cabelo saudável, o cronograma capilar deve ser seguido à risca.
    
    • Nutrição Profunda: Reposição de lipídios com óleos de argan e macadâmia para devolver o balanço.
    • Reconstrução Ácida: Após a química, o pH do cabelo fica alcalino. Usar produtos que fechem a cutícula é o que garante que a cor não desbote.
    • Hidratação Hídrica: Repor a água perdida é o primeiro passo para acabar com o aspecto 'espigado'.
    
    Lembre-se: O luxo está na saúde do fio. Um loiro bonito é, acima de tudo, um loiro resistente e macio ao toque.`
  },
  { 
    id: 3, 
    title: "Visagismo: A Ciência da Barba", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1621605815841-aa88014b97d3?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Sua barba pode mudar completamente a percepção do seu rosto. Aprenda como.",
    content: `O visagismo vai além da estética; é sobre intenção. Através das linhas da barba, podemos projetar mais autoridade ou mais acessibilidade.
    
    Rostos Arredondados: Devem optar por linhas mais angulares e laterais baixas para criar um efeito de emagrecimento visual.
    Rostos Quadrados: Podem usar barbas mais cheias no queixo para suavizar a mandíbula.
    Cuidados Diários: Lavar com shampoo específico é o mínimo. O uso do óleo de barba penetra na pele por baixo dos pelos, evitando a descamação e garantindo um perfume discreto e elegante.`
  },
  { 
    id: 4, 
    title: "Penteados de Gala e Tendências", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Do coque minimalista às ondas Hollywoodianas: o que usar em eventos de alto padrão.",
    content: `O luxo silencioso chegou aos penteados. Menos é mais, desde que a execução seja perfeita.
    
    Coque Baixo (Sleek): O favorito das passarelas. Exige um polimento extremo e um brilho espelhado. Ideal para destacar joias e decotes.
    Ondas Marcadas: O clássico 'Old Hollywood' nunca morre. A técnica consiste em escovar os cachos após a modelagem para criar uma onda única e contínua.
    Finalização: O spray de fixação extra-forte é seu melhor amigo, mas deve ser aplicado a 30cm de distância para não criar uma crosta artificial.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const day = new Date().getDate();
  const displayPosts = [
    allPosts[day % allPosts.length],
    allPosts[(day + 1) % allPosts.length],
    allPosts[(day + 2) % allPosts.length]
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="text-center mb-16">
                <h2 className="text-[#F97316] text-xs font-bold tracking-[0.4em] uppercase mb-3 italic">Beleza Link Magazine</h2>
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">EDITORIAL DE <span className="text-[#F97316]">LUXO</span></h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {displayPosts.map((post, i) => (
                  <motion.article 
                    key={i} onClick={() => setSelectedPost(post)}
                    className="cursor-pointer group bg-[#050505] border border-white/5 rounded-[40px] overflow-hidden hover:border-[#F97316]/40 transition-all duration-700"
                  >
                    <div className="h-72 overflow-hidden relative">
                      <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                      <div className="absolute top-6 right-6">
                        <span className="bg-white text-black text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#F97316] transition-colors">{post.title}</h3>
                      <p className="text-white/40 text-sm font-light mb-8 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4">
                         <div className="h-[1px] w-8 bg-[#F97316] group-hover:w-16 transition-all" />
                         <span className="text-white text-[10px] font-bold uppercase tracking-widest">Ver Detalhes</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold uppercase text-[10px] tracking-[0.3em] mb-12 hover:pl-2 transition-all">
                [ VOLTAR PARA O EDITORIAL ]
              </button>
              <div className="bg-[#050505] rounded-[50px] border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(249,115,22,0.1)]">
                <img src={selectedPost.image} className="w-full h-[500px] object-cover" />
                <div className="p-12 md:p-20">
                  <span className="text-[#F97316] font-bold text-xs uppercase tracking-[0.5em] mb-4 block">{selectedPost.category}</span>
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">{selectedPost.title}</h2>
                  <div className="text-white/80 text-xl leading-[1.8] font-light space-y-8 whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                  <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <p className="text-white/20 text-[10px] uppercase tracking-[1em]">Beleza Link • 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}