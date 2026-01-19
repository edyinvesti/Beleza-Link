import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "O Guia Definitivo do Corte Masculino Moderno", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", 
    excerpt: "A evolução da barbearia clássica e a ciência por trás dos cortes estruturados que dominam 2026.",
    content: `A barbearia brasileira vive uma era de ouro. O que antes era apenas 'cortar o cabelo' transformou-se em um ritual de consultoria de imagem. Em 2026, observamos o declínio dos degradês ultra-marcados para dar lugar ao 'Luxury Scissor Work' — o trabalho minucioso feito quase inteiramente na tesoura.

    O Retorno da Estrutura:
    Cortes como o 'Executive Contour' e o 'Modern Pompadour' exigem uma base sólida. O segredo de um corte caro não está no que se tira, mas no que se deixa. Manter as laterais com volume controlado permite ajustes no formato do crânio, corrigindo visualmente imperfeições e alongando a silhueta do rosto.

    A Ciência da Texturização:
    Diferente dos anos passados, a textura agora é interna. Usamos tesouras de fio navalha e técnicas de 'point cutting' para criar canais de ar entre os fios. Isso permite que o homem moderno acorde, passe a mão no cabelo e ele se assente perfeitamente, com movimento natural e sem aquele aspecto 'pesado' de blocos de cabelo.

    Finalização Profissional:
    Esqueça o gel de brilho molhado. O luxo em 2026 é seco. Pomadas à base de argila (Bentone ou Kaolin) oferecem fixação de alta performance com acabamento matte. Isso garante que o penteado resista ao clima de Anápolis sem perder a elegância.

    Manutenção e Ética de Estilo:
    Um corte de alto padrão tem uma vida útil de 15 a 21 dias. Passar disso significa perder a moldura do rosto. O homem que frequenta o Beleza Link entende que o cabelo é seu principal acessório de autoridade e confiança.`
  },
  { 
    id: 2, 
    title: "Arquitetura Capilar: O Renascimento do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", 
    excerpt: "Como as técnicas de micro-mechas e o selamento de cutículas estão redefinindo a saúde capilar pós-química.",
    content: `Ser loira é um estado de espírito, mas manter o loiro é uma ciência exata. O editorial desta semana mergulha no conceito de 'Saúde em Primeiro Lugar'.

    Micro-Mechas e Naturalidade:
    A tendência 'Expensive Blonde' foca em transições imperceptíveis. Em vez de blocos de cor, trabalhamos com fios selecionados individualmente. Isso evita a marcação na raiz e permite um crescimento muito mais elegante, exigindo menos retoques agressivos.

    Proteção da Fibra:
    Durante a descoloração, a fibra capilar perde massa e aminoácidos essenciais. O uso de 'Plex' de última geração durante o processo protege as pontes de dissulfeto. Mas o trabalho real começa no lavatório: a acidificação é o passo que ninguém pode pular. Ela fecha a cutícula instantaneamente, 'prendendo' a cor e o brilho dentro do fio.

    O Cronograma Domiciliar:
    Para a mulher de luxo, o cuidado em casa é uma extensão do salão. Recomendamos o uso intercalado de máscaras de lipídios (nutrição) e queratina hidrolisada (reconstrução). O uso de protetor térmico não é opcional — é o seguro de vida do seu investimento em cor.

    O brilho espelhado que você vê nas passarelas é o resultado de uma cutícula selada e um couro cabeludo oxigenado. No Beleza Link, tratamos cada fio como uma obra de arte em restauração.`
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
              <div className="text-center mb-16">
                <h2 className="text-[#F97316] text-xs font-bold tracking-[0.4em] uppercase mb-3 italic">Beleza Link Magazine</h2>
                <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">EDITORIAL <br/><span className="text-[#F97316]">PREMIUM</span></h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {displayPosts.map((post, i) => (
                  <motion.article 
                    key={i} onClick={() => setSelectedPost(post)}
                    className="cursor-pointer group bg-[#080808] border border-white/5 rounded-[50px] overflow-hidden hover:border-[#F97316]/40 transition-all duration-700 shadow-2xl"
                  >
                    <div className="h-96 overflow-hidden relative">
                      <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                      <div className="absolute bottom-8 left-8">
                        <span className="bg-[#F97316] text-black text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-12">
                      <h3 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:text-[#F97316] transition-colors">{post.title}</h3>
                      <p className="text-white/40 text-lg font-light mb-8 line-clamp-2">{post.excerpt}</p>
                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border-b border-[#F97316] pb-1">Ler Artigo Completo</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold uppercase text-[10px] tracking-[0.3em] mb-12 flex items-center gap-4 hover:gap-6 transition-all">
                <span className="h-[1px] w-8 bg-[#F97316]"></span> VOLTAR PARA A CAPA
              </button>
              <div className="bg-[#050505] rounded-[60px] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(249,115,22,0.05)]">
                <div className="relative h-[600px]">
                    <img src={selectedPost.image} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
                    <div className="absolute bottom-16 left-12 right-12">
                         <span className="text-[#F97316] font-bold text-sm uppercase tracking-[0.5em] mb-4 block">{selectedPost.category}</span>
                         <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">{selectedPost.title}</h2>
                    </div>
                </div>
                <div className="p-12 md:p-24">
                  <div className="text-white/80 text-xl leading-[2] font-light space-y-12 whitespace-pre-line text-justify">
                    {selectedPost.content}
                  </div>
                  <div className="mt-32 pt-10 border-t border-white/5 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-[#F97316] flex items-center justify-center mb-6">
                        <span className="text-[#F97316] font-bold">B</span>
                    </div>
                    <p className="text-white/20 text-[10px] uppercase tracking-[1em]">Beleza Link Editorial • 2026</p>
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