import React from 'react';
import { LayoutDashboard, Cpu, ScanLine, Users, BarChart3, MapPin, PlayCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const menuItems = [
    { id: 'ia', label: 'Painel Master', icon: LayoutDashboard },
    { id: 'ia-inteligente', label: 'IA Inteligente', icon: Cpu },
    { id: 'scanner', label: 'Agenda Viva', icon: ScanLine },
    { id: 'clientes', label: 'Clientes VIP', icon: Users },
    { id: 'financeiro', label: 'Financeiro Pro', icon: BarChart3 },
    { id: 'live', label: 'Live Oficial', icon: PlayCircle },
    { id: 'vitrine', label: 'Minha Vitrine', icon: MapPin },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 bg-[#111] border-r border-white/5 flex flex-col p-6 hidden md:flex fixed h-full">
        <div className="mb-10">
          <h1 className="text-[#dc2626] font-black italic tracking-tighter text-xl uppercase">
            BELEZA <span className="text-white">LINK</span>
          </h1>
        </div>
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button key={item.id} onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[11px] font-bold uppercase ${
                  isActive ? 'bg-[#F97316] text-black' : 'text-zinc-400 hover:bg-white/5'
                }`}>
                <Icon size={18} /> {item.label}
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 md:ml-64 p-4 md:p-10">{children}</main>
    </div>
  );
}