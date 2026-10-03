export default function Navbar({ activeAlertCount = 1 }) {
  return (
    <header className="bg-white border-b border-gray-200 text-black px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3 md:hidden">
        <h1 className="font-bold">EcoRaseight</h1>
      </div>
      
      <div className="hidden md:flex flex-col">
        <h2 className="text-lg font-semibold">Live Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Status AI: <strong className="text-black">Online</strong>
        </div>

        <div className="text-sm">
          Notifikasi: {activeAlertCount}
        </div>

        <div className="text-sm border-l border-gray-300 pl-4">
          Admin PENS
        </div>
      </div>
    </header>
  );
}
