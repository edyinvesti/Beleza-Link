import { motion } from "framer-motion";

const allPosts = [
  { id: 1, title: "Cortes Masculinos em Alta", category: "Masculino", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", excerpt: "O estilo clássico com um toque moderno para 2026." },
  { id: 2, title: "Cuidados Pós-Coloração", category: "Feminino", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", excerpt: "Como manter o brilho e a saúde dos fios coloridos." },
  { id: 3, title: "Barba e Visagismo", category: "Masculino", image: "https://images.unsplash.com/photo-1621605815841-aa88014b97d3?auto=format&fit=crop&q=80&w=800", excerpt: "Ajustando o desenho ao formato do seu rosto." },
  { id: 4, title: "Penteados para Gala", category: "Feminino", image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=800", excerpt: "Elegância e sofisticação para os seus eventos noturnos." },
  { id: 5, title: "Gestão de Salão de Luxo", category: "Carreira", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", excerpt: "Pequenos detalhes que encantam clientes de alto padrão." },
  { id: 6, title: "Skincare Masculino", category: "Masculino", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800", excerpt: "A importância da hidratação para o homem moderno." },
  { id: 7, title: "Loiras de Luxo", category: "Feminino", image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=800", excerpt: "Segredos para o loiro platinado sempre saudável." },
  { id: 8, title: "O Corte Pompadour", category: "Masculino", image: "https://images.unsplash.com/photo-1599351431247-f10b21ce53e2?auto=format&fit=crop&q=80&w=800", excerpt: "Técnica por trás do corte mais icônico da história." },
  { id: 9, title: "Make Minimalista", category: "Feminino", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800", excerpt: "Realçando a beleza natural com a técnica Clean Girl." },
  { id: 10, title: "Aroma e Presença", category: "Unissex", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800", excerpt: "Escolhendo o perfume que combina com seu estilo." }
];

export default function Blog() {
  // Lógica do Robô: Seleciona 3 posts baseados no dia atual
  const day = new Date().getDate();
  const index1 = day % allPosts.length;
  const index2 = (day + 1) % allPosts.length;
  const index3 = (day + 2) % allPosts.length;
  
  const displayPosts = [allPosts[index1], allPosts[index2], allPosts[index3]];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
          <h2 className="text-[#F97316] text-xs font-bold tracking-[0.4em] uppercase mb-3">Editoria de Luxo</h2>
          <h1 className="text-5xl font-black text-white uppercase tracking-tighter">
            BELEZA <span className="text-[#F97316]">LINK</span> MAGAZINE
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post, i) => (
            <motion.article
              key={`${post.id}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group bg-[#0a0a0a] border border-white/5 rounded-[32px] overflow-hidden hover:border-[#F97316]/30 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#F97316] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                  {post.excerpt}
                </p>
                <div className="w-8 h-[2px] bg-[#F97316] group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.6em]">Novas matérias em 24h • IA Beleza Link</p>
        </div>
      </div>
    </div>
  );
}