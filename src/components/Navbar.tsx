import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#ea580c] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
              <Sparkles className="text-white" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">BELEZA LINK</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/comunidade" className="text-sm font-medium text-zinc-400 hover:text-[#F97316] transition-colors">Comunidade</Link>
            <Link to="/live" className="text-sm font-medium text-[#F97316] animate-pulse">Live</Link>
            <Link to="/scanner" className="text-sm font-medium text-zinc-400 hover:text-[#F97316] transition-colors">Scanner IA</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}