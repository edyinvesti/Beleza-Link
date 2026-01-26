export default function Marcas() {
  const marcas = ["L'Oréal", "Wella", "Kerastase", "Truss", "Schwarzkopf", "Redken"];
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-zinc-500 text-sm font-bold uppercase tracking-[0.3em] mb-12">Marcas de Elite no Sistema</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          {marcas.map(m => (
            <div key={m} className="flex items-center justify-center font-black text-xl text-white border border-white/10 py-6 rounded-2xl hover:border-[#F97316]/50 transition-colors">
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}