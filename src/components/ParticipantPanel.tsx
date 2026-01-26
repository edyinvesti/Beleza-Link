import { useState } from "react";
import { 
  LayoutDashboard, BrainCircuit, Calendar, Users, Wallet, 
  MapPin, PanelLeftClose, PanelLeftOpen 
} from "lucide-react";
import { PainelTab } from "./tabs/PainelTab";
import { IATab } from "./tabs/IATab";
import { AgendaTab } from "./tabs/AgendaTab";
import { ClientesTab } from "./tabs/ClientesTab";
import { FinanceiroTab } from "./tabs/FinanceiroTab";
import { GeolocalizacaoTab } from "./tabs/GeolocalizacaoTab";

export default function ParticipantPanel() {
  const [currentPath, setCurrentPath] = useState("painel");
  const [isFocusMode, setIsFocusMode] = useState(false);

  const profileImage = localStorage.getItem("edy_beauty_photo") || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop";
  const profileName = localStorage.getItem("edy_beauty_name") || "Edy Beleza";

  // LISTA OFICIAL DE ACORDO COM O SEU PEDIDO (DELETADO MAPA DE VISITANTES)
  const menuItems = [
    { id: "painel", label: "Painel Master", icon: LayoutDashboard },
    { id: "ia", label: "IA Inteligente", icon: BrainCircuit },
    { id: "agenda", label: "Agenda Viva", icon: Calendar },
    { id: "clientes", label: "Clientes VIP", icon: Users },
    { id: "financeiro", label: "Financeiro PRO", icon: Wallet },
    { id: "geolocalizacao", label: "Minha Vitrine", icon: MapPin }
  ];

  const renderContent = () => {
    switch(currentPath) {
      case "painel": return <PainelTab />;
      case "ia": return <IATab />;
      case "agenda": return <AgendaTab />;
      case "clientes": return <ClientesTab />;
      case "financeiro": return <FinanceiroTab />;
      case "geolocalizacao": return <GeolocalizacaoTab />;
      default: return <PainelTab />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans">
      {/* SIDEBAR REPROJETADA */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-black border-r border-white/5 z-50 transition-all duration-500 ease-in-out w-72 ${
          isFocusMode ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="p-8 flex flex-col items-center h-full">
          <h2 className="text-xl font-black italic text-[#F97316] mb-10 tracking-[0.2em] uppercase">Beleza Link</h2>
          
          <div className="w-32 h-32 rounded-full border-2 border-[#F97316] p-1.5 mb-6 overflow-hidden shrink-0 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
            <img src={profileImage} className="w-full h-full rounded-full object-cover" alt="Profile" />
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-zinc-400">{profileName}</p>
          
          <nav className="w-full space-y-1">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setCurrentPath(item.id)} 
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  currentPath === item.id 
                  ? "bg-[#F97316] text-black shadow-[0_10px_20px_rgba(249,115,22,0.2)]" 
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <item.icon size={18} /> 
                <span className="text-[10px] uppercase font-black tracking-widest">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main 
        className={`flex-1 min-h-screen transition-all duration-500 ease-in-out ${
          isFocusMode ? "ml-0" : "ml-72"
        }`}
      >
        <div className="p-10 max-w-7xl mx-auto">
          <header className="flex items-center gap-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <button 
              onClick={() => setIsFocusMode(!isFocusMode)} 
              className="p-3 bg-zinc-900 rounded-xl text-[#F97316] border border-white/5 hover:scale-110 active:scale-95 transition-all shadow-lg"
            >
              {isFocusMode ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>
            <div className="h-10 w-[1px] bg-zinc-800"></div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">
              {menuItems.find(i => i.id === currentPath)?.label}
            </h1>
          </header>

          <div className="relative z-10">
             {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}