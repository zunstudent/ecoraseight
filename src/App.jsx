import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MetricsCard from './components/dashboard/MetricsCard';
import CameraFeed from './components/dashboard/CameraFeed';
import { initialCameras } from './data/mockData';

function DashboardPage() {
  const activeCamera = initialCameras[2]; // Tampilkan hasil tes AI Python

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-black">Dashboard Pemantauan</h2>
          <p className="text-gray-600">Ringkasan kondisi lingkungan secara real-time.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
          Simulasi Peringatan Baru
        </button>
      </div>

      {/* Deretan Kartu Metrik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricsCard 
          title="Rata-rata EQI" 
          value="81 / 100" 
          description="Kondisi lingkungan secara keseluruhan baik." 
        />
        <MetricsCard 
          title="Kamera Aktif" 
          value="3 Unit" 
          description="Semua kamera berfungsi normal." 
        />
        <MetricsCard 
          title="Anomali Terdeteksi" 
          value="1 Peringatan" 
          description="Perlu pengecekan di Aliran Sungai." 
        />
      </div>

      {/* Kotak Kamera */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CameraFeed camera={activeCamera} />
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded shadow-sm">
          <h3 className="font-bold border-b border-gray-200 pb-2 mb-3">Detail Lokasi</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Nama:</strong> {activeCamera.name}</li>
            <li><strong>Zona:</strong> {activeCamera.location}</li>
            <li><strong>Terakhir Update:</strong> {activeCamera.lastUpdated}</li>
          </ul>
          
          <div className="mt-6 border border-red-200 bg-red-50 p-3 rounded">
            <h4 className="font-bold text-red-700 text-sm">⚠️ Log Deteksi Terakhir</h4>
            <p className="text-xs text-red-600 mt-1">Sistem mendeteksi adanya penumpukan sampah sebesar 25% dari area ukur sejak pukul 10:42 WIB.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlankPage({ title }) {
  return <div className="p-6 text-gray-600 bg-white border border-gray-200 rounded shadow-sm">Halaman {title} sedang dalam pengembangan...</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="cameras" element={<BlankPage title="Kamera" />} />
          <Route path="alerts" element={<BlankPage title="Riwayat Anomali" />} />
          <Route path="settings" element={<BlankPage title="Pengaturan" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
