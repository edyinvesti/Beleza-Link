import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definindo a estrutura do Post para o TypeScript não dar erro
interface Post {
  id: number;
  title: string;
  category: string;
  image: string;
  affiliateLink: string;
  content: string;
}

const allPosts: Post[] = [
  { 
    id: 1, 
    title: "Arquitetura do Corte: O Tratado da Imagem Masculina", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200",
    affiliateLink: "https://shopee.com.br",
    content: `[CAPÍTULO I: ANTROPOLOGIA E A PSICOLOGIA DA IMAGEM]\nA imagem masculina contemporânea transcende a estética básica; ela é uma ferramenta de comunicação não-verbal de altíssimo impacto no ambiente de negócios e social. No Beleza Link, tratamos o corte como "Arquitetura Identitária". A história do cabelo masculino revela que o estilo sempre foi um marcador de casta, poder e intenção. Em 2026, a ruptura ocorre no abandono da uniformidade industrial dos degradês genéricos para a busca da escultura personalizada. O visagismo biométrico é a chave. Analisamos cada milímetro da estrutura óssea para projetar uma sombra que favoreça a mandíbula e o olhar.\n\n[CAPÍTULO II: GEOMETRIA CRANIANA E A FÍSICA DO CORTE EM TESOURA]\nO domínio da tesoura é o que separa o artesão do operador de máquina. Enquanto a máquina corta por impacto mecânico, muitas vezes mastigando a cutícula do fio, a tesoura de fio navalha realiza uma secção precisa. Esta precisão preserva a medula do fio, permitindo que o cabelo cresça de forma saudável e mantenha o design por até 45 dias. A matemática do corte envolve ângulos de projeção de 45 a 90 graus, criando camadas internas que distribuem o peso de forma inteligente. O "Point Cutting" cria canais de textura que permitem o fluxo de ar, essencial para o clima de Anápolis.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro: O Tratado da Cor Inteligente", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=1200",
    affiliateLink: "https://shopee.com.br",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO]\nA descoloração capilar é uma intervenção química profunda. Aplicamos "Slow Bleaching" — clareamento lento que respeita o tempo de oxidação da melanina. O fio tem queratina e pontes de dissulfeto; se rompidas violentamente, o fio "emborracha". O controle cinético evita o superaquecimento do córtex. A cutícula deve ser aberta de forma controlada para não perder a capacidade de reter nutrientes.\n\n[CAPÍTULO II: ENGENHARIA DOS BOND BUILDERS]\nTecnologia Plex atua como cimento molecular. Injetamos polímeros que reconectam as fibras em tempo real. Isso impede a quebra e permite atingir tons claríssimos mantendo a força tensora. Aminoácidos de baixo peso molecular, como arginina e cisteína, penetram na fibra mesmo saturada. O loiro inteligente foca na preservação total do córtex capilar.`
  }
];

export default function Blog() {
  // CORREÇÃO: Informando ao TS que o estado pode ser um Post ou null
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => { 
    if (selectedPost) window.scrollTo(0,0); 
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="mb-20 text-center">
                <h2 className="text-[#F97316] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Beleza Link Inteligência</h2>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">O <span className="text-[#F97316]">DIÁRIO</span></h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {allPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)} 
                    className="cursor-pointer group relative bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden transition-all"
                  >
                    <div className="h-[500px] bg-[#111]">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={post.title} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="text-[#F97316] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">{post.category}</span>
                      <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">{post.title}</h3>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
               <h2 className="text-5xl md:text-8xl font-black mb-16 leading-none tracking-tighter uppercase">{selectedPost.title}</h2>
               <img src={selectedPost.image} className="w-full rounded-[40px] mb-12 shadow-2xl" alt={selectedPost.title} />
               <div className="text-white/80 text-xl md:text-2xl leading-relaxed space-y-12 text-justify pb-20">
                 {selectedPost.content}
                 <div className="pt-20">
                    <a href={selectedPost.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full bg-[#F97316] text-black text-center py-6 rounded-full font-black text-xl uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                      🛒 Adquirir Kit de Manutenção Profissional
                    </a>
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}