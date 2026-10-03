import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Camera, AlertTriangle, Settings } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Kamera', icon: Camera, path: '/cameras' },
    { name: 'Riwayat Anomali', icon: AlertTriangle, path: '/alerts' },
    { name: 'Pengaturan', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-gray-200">
        <h1 className="font-bold text-xl text-black">EcoRaseight</h1>
        <p className="text-sm text-gray-500">Vision AI System</p>
      </div>

      <nav className="p-4 flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded transition-colors text-sm ${
                isActive
                  ? 'bg-gray-200 text-black font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">MIKIR KIDS</p>
      </div>
    </aside>
  );
}
