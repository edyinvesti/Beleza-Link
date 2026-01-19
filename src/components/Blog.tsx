import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Cortes Masculinos em Alta", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", 
    excerpt: "O estilo clássico com um toque moderno para 2026.",
    content: "O ano de 2026 traz o retorno triunfante dos cortes estruturados. O segredo está no acabamento impecável e na transição suave entre as camadas. Para o homem de luxo, o detalhe é o que define o estilo: pomadas de efeito seco e alinhamento preciso da barba complementam o visual."
  },
  { 
    id: 2, 
    title: "Cuidados Pós-Coloração", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Como manter o brilho e a saúde dos fios coloridos.",
    content: "Manter a cor vibrante exige um protocolo de cuidados rigoroso. O uso de óleos essenciais e máscaras de reconstrução ácida é fundamental para selar as cutículas após o processo químico. Evitar água muito quente e usar protetores térmicos garantem que o loiro dure muito mais."
  },
  { 
    id: 3, 
    title: "Barba e Visagismo", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1621605815841-aa88014b97d3?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Ajustando o desenho ao formato do seu rosto.",
    content: "A barba é a moldura do rosto masculino. Através do visagismo, conseguimos equilibrar os traços, disfarçar imperfeições e realçar os pontos fortes. Seja um 'Stubble' bem cuidado ou uma barba longa, a hidratação diária é o que separa o comum do extraordinário."
  },
  { 
    id: 4, 
    title: "Penteados para Gala", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Elegância e sofisticação para os seus eventos noturnos.",
    content: "Eventos de gala pedem penteados que resistam à noite toda sem perder o glamour. Coques baixos desestruturados ou ondas 'Old Hollywood' são as escolhas favoritas. O segredo é o equilíbrio entre fixação e movimento natural."
  }
  // Adicione mais se desejar...
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Lógica de 3 cards baseados no dia
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
            // LISTA DE CARDS (VISÃO GERAL)
            <motion.div 
              key="list"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-[#F97316] text-xs font-bold tracking-[0.4em] uppercase mb-3">Editoria de Luxo</h2>
                <h1 className="text-5xl font-black text-white uppercase tracking-tighter">BELEZA <span className="text-[#F97316]">LINK</span> MAGAZINE</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayPosts.map((post, i) => (
                  <motion.article
                    key={i}
                    onClick={() => setSelectedPost(post)}
                    className="cursor-pointer group bg-[#0a0a0a] border border-white/5 rounded-[32px] overflow-hidden hover:border-[#F97316]/30 transition-all shadow-2xl"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-duration-700 opacity-60 group-hover:opacity-100" alt={post.title} />
                      <div className="absolute top-6 left-6">
                        <span className="bg-[#F97316] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">{post.title}</h3>
                      <p className="text-white/50 text-sm font-light mb-6 line-clamp-2">{post.excerpt}</p>
                      <span className="text-[#F97316] text-[10px] font-bold uppercase tracking-widest group-hover:pl-2 transition-all">Ler Matéria +</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            // MODO LEITURA (MATÉRIA ABERTA)
            <motion.div 
              key="reading"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
              className="max-w-3xl mx-auto"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-[#F97316] font-bold uppercase text-xs tracking-widest mb-8 flex items-center gap-2"
              >
                ← Voltar para a Revista
              </button>

              <div className="rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
                <img src={selectedPost.image} className="w-full h-[400px] object-cover" alt={selectedPost.title} />
                <div className="p-10 md:p-16">
                  <span className="text-[#F97316] text-xs font-black uppercase tracking-widest">{selectedPost.category}</span>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-8 leading-tight">{selectedPost.title}</h2>
                  <div className="text-white/70 text-xl leading-relaxed space-y-8 font-light italic border-l-2 border-[#F97316] pl-8">
                    {selectedPost.content}
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