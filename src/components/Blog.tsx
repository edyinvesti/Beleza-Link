import { motion } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Cortes Masculinos em Alta", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", 
    excerpt: "O estilo clássico está de volta com um toque moderno.",
    content: "O ano de 2026 traz o retorno triunfante dos cortes estruturados. O segredo está no acabamento impecável e na transição suave entre as camadas. Para o homem de luxo, o detalhe é o que define o estilo: pomadas de efeito seco e alinhamento preciso da barba complementam o visual."
  },
  { 
    id: 2, 
    title: "Cuidados Pós-Coloração", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Como manter o brilho e a saúde dos fios coloridos.",
    content: "Manter a cor vibrante exige um protocolo de cuidados rigoroso. O uso de óleos essenciais e máscaras de reconstrução ácida é fundamental para selar as cutículas após o processo químico. Evitar água muito quente e usar protetores térmicos garantem que o loiro ou o moreno iluminado durem muito mais."
  },
  { 
    id: 3, 
    title: "Barba e Visagismo", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1621605815841-aa88014b97d3?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Ajustando o desenho da barba ao formato do seu rosto.",
    content: "A barba é a moldura do rosto masculino. Através do visagismo, conseguimos equilibrar os traços, disfarçar imperfeições e realçar os pontos fortes. Seja um 'Stubble' bem cuidado ou uma barba longa e densa, a hidratação diária com óleos específicos é o que separa o comum do extraordinário."
  },
  { 
    id: 4, 
    title: "Penteados para Gala", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1492706682371-2f2ed5151c0f?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Elegância e sofisticação para os seus eventos noturnos.",
    content: "Eventos de gala pedem penteados que resistam à noite toda sem perder o glamour. Coques baixos desestruturados ou ondas 'Old Hollywood' são as escolhas favoritas. O segredo dos grandes profissionais é o equilíbrio entre fixação e movimento natural dos fios."
  },
  { 
    id: 5, 
    title: "Gestão de Salão de Luxo", 
    category: "Carreira", 
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Pequenos detalhes que encantam clientes de alto padrão.",
    content: "No mercado de luxo, você não vende um serviço, você vende uma experiência. Desde a temperatura do café até o aroma do ambiente, cada detalhe conta. A pontualidade e o atendimento personalizado são a base para fidelizar o público que busca exclusividade."
  }
  // ... (os outros posts seguem a mesma lógica de conteúdo)
];

export default function Blog() {
  const dayOfMonth = new Date().getDate();
  const dailyPostIndex = dayOfMonth % allPosts.length;
  const activePost = allPosts[dailyPostIndex];

  const handleAgendar = () => {
    const telefone = "5562992115143";
    const mensagem = encodeURIComponent(`Olá! Li a matéria "${activePost.title}" e quero agendar.`);
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <h2 className="text-[#F97316] text-sm font-bold tracking-[0.3em] uppercase mb-2">Leitura de Hoje</h2>
          <h1 className="text-4xl font-light text-white uppercase tracking-tighter italic">BELEZA <span className="text-[#F97316] font-black">LINK</span></h1>
        </motion.div>

        <motion.article 
          key={activePost.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden"
        >
          <div className="h-[400px] overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
             <img src={activePost.image} className="w-full h-full object-cover" alt="Blog" />
          </div>
          
          <div className="p-8 md:p-12 relative z-20 mt-[-80px]">
            <span className="bg-[#F97316] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{activePost.category}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{activePost.title}</h2>
            
            {/* O TEXTO DA MATÉRIA AGORA APARECE AQUI */}
            <div className="text-white/70 text-lg leading-relaxed mb-10 space-y-4">
              <p className="border-l-4 border-[#F97316] pl-6 italic text-white font-medium">"{activePost.excerpt}"</p>
              <p>{activePost.content}</p>
            </div>

            <button 
              onClick={handleAgendar}
              className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-[#F97316] hover:text-white transition-all shadow-lg shadow-orange-500/10"
            >
              Agendar este serviço
            </button>
          </div>
        </motion.article>
      </div>
    </div>
  );
}