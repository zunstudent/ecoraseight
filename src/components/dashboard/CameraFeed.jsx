import { useState } from 'react';

export default function CameraFeed({ camera }) {
  const [viewMode, setViewMode] = useState('current'); // 'current', 'baseline', 'split'

  if (!camera) return <div className="border border-gray-300 p-4 text-center">Pilih kamera</div>;

  const hasAnomaly = camera.detectedAnomalies && camera.detectedAnomalies.length > 0;

  return (
    <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-300 flex justify-between items-center bg-gray-50">
        <div>
          <h3 className="font-bold text-black">{camera.name}</h3>
          <p className="text-xs text-gray-600">{camera.location}</p>
        </div>
        <div className="flex gap-2 text-sm">
          <button
            onClick={() => setViewMode('current')}
            className={`px-3 py-1 border ${viewMode === 'current' ? 'bg-gray-200 border-gray-400 font-bold' : 'bg-white border-gray-300'}`}
          >
            Terkini
          </button>
          <button
            onClick={() => setViewMode('baseline')}
            className={`px-3 py-1 border ${viewMode === 'baseline' ? 'bg-gray-200 border-gray-400 font-bold' : 'bg-white border-gray-300'}`}
          >
            Acuan Dasar
          </button>
          <button
            onClick={() => setViewMode('split')}
            className={`px-3 py-1 border ${viewMode === 'split' ? 'bg-gray-200 border-gray-400 font-bold' : 'bg-white border-gray-300'}`}
          >
            Bandingkan
          </button>
        </div>
      </div>

      {/* Gambar */}
      <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
        {viewMode === 'split' ? (
          <div className="w-full h-full grid grid-cols-2 gap-1 bg-gray-300">
            <div className="relative bg-white">
              <img src={camera.baselineImage} alt="Baseline" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs border border-gray-400">Kondisi Awal (Normal)</div>
            </div>
            <div className="relative bg-white">
              <img src={camera.currentImage} alt="Current" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs border border-gray-400">Deteksi Terkini</div>
              {/* Bounding box simulasi sederhana */}
              {camera.detectedAnomalies?.map(anomaly => (
                <div key={anomaly.id} style={anomaly.bbox} className="absolute border-2 border-red-500">
                  <span className="bg-red-500 text-white text-[10px] px-1 absolute -top-4 left-[-2px] whitespace-nowrap">
                    {anomaly.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img 
              src={viewMode === 'baseline' ? camera.baselineImage : camera.currentImage} 
              alt="View" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs border border-gray-400 font-bold">
              {viewMode === 'baseline' ? 'Kondisi Awal (Normal)' : 'Kamera AI Live Stream'}
            </div>
            {/* Bounding box untuk mode terkini */}
            {viewMode === 'current' && camera.detectedAnomalies?.map(anomaly => (
              <div key={anomaly.id} style={anomaly.bbox} className="absolute border-2 border-red-500">
                <span className="bg-red-500 text-white text-[10px] px-1 absolute -top-4 left-[-2px] whitespace-nowrap">
                  {anomaly.type} ({anomaly.confidence}%)
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-white border-t border-gray-300 text-sm flex justify-between">
        <div>
          <span>Skor Kualitas (EQI): <strong className={camera.eqiScore < 70 ? "text-red-600" : "text-black"}>{camera.eqiScore}</strong></span>
        </div>
        <div>
          <span>Status: {hasAnomaly ? <strong className="text-red-600">Terdeteksi Anomali</strong> : <strong>Normal</strong>}</span>
        </div>
      </div>
    </div>
  );
}
