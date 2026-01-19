import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Tendências Femininas 2026",
    excerpt: "Descubra as cores e cortes que estão a dominar os salões de luxo nesta temporada.",
    date: "19 Jan 2026",
    category: "Feminino",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "A Arte da Barbearia Moderna",
    excerpt: "O guia definitivo para o homem que não abre mão de uma barba impecável e um corte preciso.",
    date: "18 Jan 2026",
    category: "Masculino",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Postura Profissional",
    excerpt: "Como elevar o nível do seu atendimento e fidelizar clientes de alto padrão.",
    date: "17 Jan 2026",
    category: "Carreira",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#F97316] text-sm font-bold tracking-[0.3em] uppercase mb-2">Conteúdo Exclusivo</h2>
          <h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tighter">
            BLOG BELEZA <span className="text-[#F97316] font-black">LINK</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#F97316]/50 transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#F97316] text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                  <span className="text-white/40 text-[10px]">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F97316] transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-white font-bold text-xs uppercase tracking-widest border-b-2 border-[#F97316] pb-1">
                  Ler Artigo
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}