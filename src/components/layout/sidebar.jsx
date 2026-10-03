// Untuk membuat sidebar dengan navigasi ke halaman Dashboard, Kamera, Riwayat Anomali, dan Pengaturan
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Camera, AlertTriangle, Settings, Leaf } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Kamera', icon: Camera, path: '/cameras' },
    { name: 'Riwayat Anomali', icon: AlertTriangle, path: '/alerts' },
    { name: 'Pengaturan', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="bg-emerald-500/20 p-2 rounded-xl border border-emerald-500/30">
          <Leaf className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-slate-100 leading-tight">EcoRaseight</h1>
          <p className="text-[10px] text-emerald-400 font-medium">Vision AI System</p>
        </div>
      </div>

      <nav className="p-4 flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-slate-800 text-center">
        <p className="text-[10px] text-slate-500">TES JEMBOD<br/>MBODD</p>
      </div>
    </aside>
  );
}