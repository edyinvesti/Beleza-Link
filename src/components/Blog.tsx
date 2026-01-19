import { motion } from "framer-motion";

const allPosts = [
  { id: 1, title: "Cortes Masculinos em Alta", category: "Masculino", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", excerpt: "O estilo clássico está de volta com um toque moderno." },
  { id: 2, title: "Cuidados Pós-Coloração", category: "Feminino", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", excerpt: "Como manter o brilho e a saúde dos fios coloridos." },
  { id: 3, title: "Barba e Visagismo", category: "Masculino", image: "https://images.unsplash.com/photo-1621605815841-aa88014b97d3?auto=format&fit=crop&q=80&w=800", excerpt: "Ajustando o desenho da barba ao formato do seu rosto." },
  { id: 4, title: "Penteados para Gala", category: "Feminino", image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=800", excerpt: "Elegância e sofisticação para os seus eventos noturnos." },
  { id: 5, title: "Gestão de Salão de Luxo", category: "Carreira", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", excerpt: "Pequenos detalhes que encantam clientes de alto padrão." },
  { id: 6, title: "Skincare Masculino", category: "Masculino", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800", excerpt: "Por que a hidratação é essencial para a pele do homem moderno." },
  { id: 7, title: "Loiras de Luxo", category: "Feminino", image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=800", excerpt: "Os segredos para manter o loiro platinado sempre saudável." },
  { id: 8, title: "O Corte Pompadour", category: "Masculino", image: "https://images.unsplash.com/photo-1599351431247-f10b21ce53e2?auto=format&fit=crop&q=80&w=800", excerpt: "A história e a técnica por trás do corte mais icônico da barbearia." },
  { id: 9, title: "Maquilhagem Minimalista", category: "Feminino", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800", excerpt: "Como realçar a beleza natural com a técnica 'Clean Girl'." },
  { id: 10, title: "Aroma e Presença", category: "Unissex", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800", excerpt: "Como escolher o perfume ideal que combina com o seu estilo." },
  { id: 11, title: "Degradê Perfeito", category: "Masculino", image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800", excerpt: "As variações de fade que estão em alta nos grandes centros." },
  { id: 12, title: "Terapia Capilar", category: "Feminino", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800", excerpt: "Tratamentos profundos para reconstrução total da fibra." },
  { id: 13, title: "Ergonomia no Trabalho", category: "Carreira", image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800", excerpt: "Como proteger a sua saúde física durante as horas de atendimento." },
  { id: 14, title: "Sobrancelhas e Olhar", category: "Feminino", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800", excerpt: "O design de sobrancelhas como moldura para um olhar marcante." },
  { id: 15, title: "Networking na Beleza", category: "Carreira", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", excerpt: "Como criar parcerias lucrativas no mercado da estética." }
];

export default function Blog() {
  const dayOfMonth = new Date().getDate();
  const dailyPostIndex = dayOfMonth % allPosts.length;
  const activePost = allPosts[dailyPostIndex];

  // Link de WhatsApp para agendamento
  const handleAgendar = () => {
    const telefone = "5511999999999"; // SUBSTITUA PELO SEU NÚMERO
    const mensagem = encodeURIComponent(`Olá! Vi a matéria sobre "${activePost.title}" no Blog Beleza Link e gostaria de saber mais sobre este serviço.`);
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <h2 className="text-[#F97316] text-sm font-bold tracking-[0.3em] uppercase mb-2">Matéria do Dia</h2>
          <h1 className="text-4xl font-light text-white uppercase tracking-tighter">INTELIGÊNCIA <span className="text-[#F97316] font-black">LINK</span></h1>
        </motion.div>

        <motion.article 
          key={activePost.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111] border border-[#F97316]/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="h-[450px] overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
             <img src={activePost.image} className="w-full h-full object-cover" alt="Blog" />
          </div>
          <div className="p-10 relative z-20 mt-[-100px]">
            <span className="bg-[#F97316] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {activePost.category}
            </span>
            <h2 className="text-4xl font-bold text-white mt-6 mb-4">{activePost.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">{activePost.excerpt}</p>
            <button 
              onClick={handleAgendar}
              className="group flex items-center gap-3 text-white font-bold uppercase text-xs tracking-[0.2em] hover:text-[#F97316] transition-colors"
            >
              <span className="w-12 h-[2px] bg-[#F97316] group-hover:w-20 transition-all" />
              Agendar este serviço
            </button>
          </div>
        </motion.article>
      </div>
    </div>
  );
}