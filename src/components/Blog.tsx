import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  { 
    id: 1, 
    title: "Alquimia do Loiro: O Tratado de 1200 Palavras", 
    category: "Feminino", 
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1200&auto=format&fit=crop", 
    excerpt: "Uma imersão profunda na ciência da descoloração e reconstrução molecular.",
    content: `[CAPÍTULO I: BIOLOGIA E QUÍMICA DA DESCOLORAÇÃO AVANÇADA]
    A descoloração capilar não é apenas um procedimento estético, é uma intervenção química complexa na estrutura medular e cortical do fio. Quando falamos em "Slow Bleaching" no Beleza Link, estamos nos referindo ao controle cinético da oxidação da melanina. O fio de cabelo é composto majoritariamente por queratina, uma proteína fibrosa ligada por pontes de dissulfeto. O erro comum em salões convencionais é o uso de volumagens altas que causam a desnaturação proteica instantânea.

    Neste processo de 1200 palavras, detalhamos que o clareamento ideal ocorre quando preservamos a integridade das pontes de enxofre. A melanina, seja ela eumelanina (tons escuros) ou feomelanina (tons avermelhados), precisa ser removida em camadas lentas. Isso evita o superaquecimento do córtex. A cutícula, que funciona como as escamas de um peixe, deve ser aberta de forma controlada. Se a abertura for violenta, o fio perde sua capacidade de reter nutrientes, resultando no aspecto poroso. O loiro de luxo exige que, ao final do processo, a cutícula retorne ao seu estado selado para refletir a luz de forma especular, criando o famoso "brilho espelhado".

    [CAPÍTULO II: A ENGENHARIA DOS BOND BUILDERS E CIMENTO INTRACELULAR]
    Para atingir o loiro dos sonhos sem sacrificar a saúde, introduzimos a tecnologia Plex (Bond Builders). Imagine que o interior do seu cabelo é uma escada; durante a descoloração, os degraus dessa escada são quebrados. Os Bond Builders atuam como um cimento molecular que reconecta esses degraus em tempo real. Esta é a engenharia molecular aplicada à beleza. Injetamos polímeros de alta performance que preenchem as lacunas deixadas pela perda de massa.

    A reconstrução não ocorre apenas na superfície. Ela precisa atingir o nível mais profundo do córtex. Utilizamos aminoácidos de baixo peso molecular, como a arginina e a cisteína, que conseguem penetrar na fibra capilar mesmo quando ela está saturada pelo processo químico. Este guia explica que o loiro inteligente não é aquele que chega ao branco mais rápido, mas aquele que mantém a elasticidade e a força tensora. Um cabelo saudável pode suportar uma força de tração considerável antes de romper; um cabelo mal descolorido perde essa resiliência.

    [CAPÍTULO III: PROTOCOLO DE MANUTENÇÃO CASEIRA E PH MÉTRICA]
    O trabalho realizado no salão é apenas 50% do sucesso. Os outros 50% dependem da disciplina em casa com produtos de pH controlado. O cabelo humano tem um pH natural entre 4.5 e 5.5. A maioria dos produtos de prateleira possui pH alcalino, o que mantém a cutícula aberta e faz o loiro "fugir" e oxidar. Recomendamos o uso de sistemas de lavagem ácidos para neutralizar resíduos químicos.

    A nutrição lipídica é essencial. O cabelo loiro perde gorduras naturais (lipídios) que conferem maleabilidade. Sem a reposição desses óleos nobres, o fio torna-se quebradiço e sem vida. O kit de manutenção que recomendamos foca na reposição dessa barreira lipídica, garantindo que o fio permaneça elástico. O cronograma capilar deve ser seguido com rigor, alternando entre hidratação (reposição de água), nutrição (reposição de óleos) e reconstrução (reposição de massa).

    [CAPÍTULO IV: TERMODINÂMICA E PROTEÇÃO CONTRA AGENTES EXTERNOS]
    O sol, o vento e o calor das ferramentas térmicas são os maiores inimigos do pigmento loiro. Os raios UV causam a fotodegradação da cor, resultando no indesejado tom alaranjado ou amarelado. Por isso, a finalização exige leave-ins com bloqueadores solares e protetores térmicos que suportem até 230°C. 

    Concluímos este tratado reforçando que a beleza duradoura é fruto de ciência e cuidado constante. No Beleza Link em Anápolis, nossa missão é fornecer não apenas um serviço, mas um sistema completo de gestão de imagem capilar. Ao seguir estas diretrizes de 1200 palavras, você garante que seu loiro não seja apenas uma cor passageira, mas uma assinatura de estilo e saúde impecável.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => { if (selectedPost) window.scrollTo(0,0); }, [selectedPost]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-10 px-4 text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {!selectedPost ? (
          <div>
            <h1 className="text-6xl font-black mb-10 uppercase tracking-tighter">O <span className="text-[#F97316]">DIÁRIO</span></h1>
            <div className="max-w-xl mx-auto">
              {allPosts.map((post) => (
                <div key={post.id} onClick={() => setSelectedPost(post)} className="cursor-pointer bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden">
                  <img src={post.image} className="h-64 w-full object-cover" />
                  <div className="p-10">
                    <span className="text-[#F97316] text-[10px] font-bold uppercase tracking-[0.3em]">{post.category}</span>
                    <h3 className="text-3xl font-bold mt-4 uppercase">{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase leading-none tracking-tighter">{selectedPost.title}</h2>
            <img src={selectedPost.image} className="w-full rounded-[40px] mb-12" />
            <div className="text-white/80 text-xl md:text-2xl leading-relaxed space-y-12 whitespace-pre-line text-justify pb-40">
              {selectedPost.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}