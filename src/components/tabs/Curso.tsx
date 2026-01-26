// [cite: 19, 21, 23]
import { Lock, Play, Award, BarChart3, User, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Curso() {
  const [filtroAtivo, setFiltroAtivo] = useState("TODOS");
  const categorias = [
    { nome: "CABELEREIRO PROFISSIONAL", cursos: [{ id: 1, titulo: "Arquitetura do Corte", horas: "15h", progresso: 65 }] },
    { nome: "MANICURE & NAILS", cursos: [{ id: 9, titulo: "Manicure de Luxo", horas: "12h", progresso: 0 }] }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-10 px-4 font-sans">
      <h2 className="text-4xl font-black uppercase mb-8">Elite <span className="text-[#F97316]">Academy</span></h2>
      {categorias.map((secao, idx) => (
        <section key={idx} className="mb-8">
          <h3 className="text-[10px] font-black tracking-widest text-zinc-600 uppercase mb-4 italic border-l-2 border-[#F97316] pl-3">{secao.nome}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secao.cursos.map(curso => (
              <div key={curso.id} className="bg-zinc-900/40 p-6 rounded-[30px] border border-white/5">
                <h4 className="font-black text-xs uppercase mb-2">{curso.titulo}</h4>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F97316]" style={{ width: curso.progresso + '%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}