import { motion } from "framer-motion";

// Banco de dados de matérias da IA (Exemplos que mudam conforme o dia)
const allPosts = [
  { id: 1, title: "Cortes Masculinos em Alta", category: "Masculino", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", excerpt: "O estilo clássico está de volta com um toque moderno." },
  { id: 2, title: "Cuidados Pós-Coloração", category: "Feminino", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", excerpt: "Como manter o brilho e a saúde dos fios coloridos." },
  { id: 3, title: "Barba e Visagismo", category: "Masculino", image: "https://images.unsplash.com/photo-1621605815841-aa88014b97d3?auto=format&fit=crop&q=80&w=800", excerpt: "Ajustando o desenho da barba ao formato do seu rosto." },
  { id: 4, title: "Penteados para Gala", category: "Feminino", image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=800", excerpt: "Elegância e sofisticação para os seus eventos noturnos." },
  { id: 5, title: "Gestão de Salão de Luxo", category: "Carreira", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", excerpt: "Pequenos detalhes que encantam clientes de alto padrão." }
];

export default function Blog() {
  // Lógica de IA: Seleciona um post diferente a cada dia do mês
  const dayOfMonth = new Date().getDate();
  const dailyPostIndex = dayOfMonth % allPosts.length;
  const activePost = allPosts[dailyPostIndex];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <h2 className="text-[#F97316] text-sm font-bold tracking-[0.3em] uppercase mb-2">Matéria do Dia</h2>
          <h1 className="text-4xl font-light text-white uppercase">INTELIGÊNCIA <span className="text-[#F97316] font-black">LINK</span></h1>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#111] border border-[#F97316]/20 rounded-3xl overflow-hidden"
        >
          <div className="h-96 overflow-hidden">
            <img src={activePost.image} className="w-full h-full object-cover" alt="Blog" />
          </div>
          <div className="p-8">
            <span className="text-[#F97316] text-xs font-bold uppercase tracking-widest">{activePost.category}</span>
            <h2 className="text-3xl font-bold text-white mt-4 mb-4">{activePost.title}</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{activePost.excerpt}</p>
            <button className="bg-[#F97316] text-black px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-white transition-colors">
              Ler Matéria Completa
            </button>
          </div>
        </motion.article>
      </div>
    </div>
  );
}