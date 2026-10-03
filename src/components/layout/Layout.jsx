import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col relative w-full">
        <Navbar />
        {/* Main Content Area */}
        <main className="p-4 md:p-6 overflow-x-hidden flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div> 
  );
}
