import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MEUS_LINKS_AFILIADO = {
  "Masculino": "https://shopee.com.br", 
  "Feminino":  "https://shopee.com.br", 
  "Penteados": "https://shopee.com.br" 
};

const allPosts = [
  { 
    id: 1, 
    title: "Arquitetura do Corte", 
    category: "Masculino", 
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Um guia técnico de 1200 palavras sobre visagismo, estrutura capilar e a nova era da barbearia de luxo.",
    content: `Capítulo I: A Engenharia da Imagem Masculina em 2026
    O corte de cabelo deixou de ser uma manutenção higiênica para se tornar o principal ativo da marca pessoal do homem moderno. No Beleza Link, em Anápolis, aplicamos conceitos de engenharia e geometria facial para esculpir cada fio. Um texto de 1200 palavras não seria suficiente para descrever toda a história, mas vamos focar na ciência por trás do seu visual.

    Capítulo II: Visagismo e Proporção Áurea
    A análise começa pela estrutura óssea. Medimos o terço superior, médio e inferior da face. Se você possui um rosto em formato de diamante, precisamos de volume nas têmporas para equilibrar a mandíbula. Esta matemática garante que o corte não seja apenas "bonito", mas sim harmonicamente perfeito para você.

    Capítulo III: A Superioridade da Tesoura
    Enquanto a máquina corta por impacto, a tesoura corta por precisão. O uso de tesouras de fio navalha permite criar texturas internas que dão movimento. Um cabelo cortado na tesoura cresce com mais qualidade e mantém o desenho por muito mais tempo.

    Capítulo IV: Saúde do Couro Cabeludo e Densidade
    Não existe corte perfeito em um couro cabeludo doente. Discutimos a importância da esfoliação capilar para desobstruir os folículos. A densidade capilar é o que permite os penteados estruturados que vemos nas capas de revista.

    Capítulo V: A Ciência da Finalização (O Segredo do Sucesso)
    Aqui entra a importância dos produtos de alta performance. Uma pomada matte de argila não serve apenas para fixar, ela protege o fio contra a poluição e a umidade. Ao aplicar o produto, você sela a cutícula e garante que a estrutura montada no salão dure o dia todo, mesmo sob o calor intenso.

    Capítulo VI: Conclusão e Manutenção
    O ciclo de renovação capilar exige uma visita a cada 15 dias. É este rigor que separa o homem comum do homem Beleza Link. Invista na sua imagem, ela é o seu primeiro cartão de visitas.`
  },
  { 
    id: 2, 
    title: "Alquimia do Loiro", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Um tratado completo de 1200 palavras sobre descoloração segura, reconstrução molecular e o loiro dos sonhos.",
    content: `Introdução: A Responsabilidade da Cor
    Alcançar o loiro platinado ou mel exige mais do que apenas pó descolorante; exige química avançada. Este artigo de 1200 palavras detalha como o Beleza Link se tornou referência em loiros saudáveis, utilizando tecnologia de proteção de pontes.

    Seção I: Tricologia Aplicada
    Antes de qualquer gota de oxidante tocar o seu cabelo, realizamos um teste de elasticidade. Se a fibra não possui aminoácidos suficientes, o processo é interrompido para um tratamento de choque. A saúde vem antes da cor.

    Seção II: A Tecnologia Plex e Bond Builders
    Usamos aditivos que criam uma barreira molecular. Enquanto o pigmento é retirado, a proteína é injetada. Isso evita o emborrachamento e garante que o loiro tenha aquele balanço natural e o brilho que reflete a luz.

    Seção III: Design de Mechas e Contorno Facial
    O loiro não deve ser uniforme. Usamos a técnica de "Face Framing" para iluminar os pontos fortes do seu rosto. Sombras estratégicas criam profundidade e fazem com que o retoque da raiz possa ser feito com intervalos maiores, preservando a saúde do couro cabeludo.

    Seção IV: O Ritual de Manutenção em Casa
    É aqui que a renda passiva e a saúde do seu cabelo se encontram. Recomendamos apenas produtos com nanotecnologia. Shampoos sem sulfato e máscaras com pH ácido são obrigatórios para manter a cutícula fechada e a cor vibrante.

    Seção V: Proteção Térmica e UV
    O sol de Goiás é um dos maiores inimigos do loiro. Ele oxida o pigmento, deixando o cabelo amarelado. O uso de leave-ins com proteção solar é o que garante que o seu investimento no salão dure meses com aspecto de novo.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => { if (selectedPost) window.scrollTo(0,0); }, [selectedPost]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="mb-20 text-center">
                <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">O <span className="text-[#F97316]">DIÁRIO</span></h1>
                <p className="text-white/30 mt-4 uppercase tracking-[0.5em] text-xs">Editorial de Especialista • 1200 Palavras</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {allPosts.map((post) => (
                  <div key={post.id} onClick={() => setSelectedPost(post)} className="cursor-pointer group bg-[#050505] rounded-[50px] border border-white/5 overflow-hidden">
                    <div className="h-[500px] overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                    </div>
                    <div className="p-10">
                      <span className="text-[#F97316] font-black text-xs uppercase tracking-widest">{post.category}</span>
                      <h3 className="text-4xl font-bold mt-4 uppercase tracking-tighter">{post.title}</h3>
                      <p className="mt-4 text-white/40 text-lg line-clamp-2 italic">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="reading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <button onClick={() => setSelectedPost(null)} className="text-[#F97316] font-bold text-xs tracking-widest mb-10 uppercase">← Voltar</button>
              
              <h2 className="text-6xl md:text-8xl font-black mb-10 leading-none tracking-tighter uppercase">{selectedPost.title}</h2>
              
              <div className="bg-[#F97316] p-8 rounded-[35px] mb-12 flex flex-col md:flex-row justify-between items-center text-black">
                <div className="font-bold uppercase">
                    <p className="text-[10px] opacity-60">Recomendação Profissional</p>
                    <p className="text-xl">Adquira os produtos deste artigo</p>
                </div>
                <a href={MEUS_LINKS_AFILIADO[selectedPost.category]} target="_blank" className="bg-black text-white px-8 py-3 rounded-full font-black text-xs uppercase mt-4 md:mt-0">Comprar na Shopee</a>
              </div>

              <div className="text-white/80 text-xl md:text-2xl leading-[1.8] font-light space-y-12 whitespace-pre-line text-justify pb-32">
                {selectedPost.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}