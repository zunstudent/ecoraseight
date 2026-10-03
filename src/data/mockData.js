export const initialCameras = [
    {
    id: "cam-01",
    name: "Kamera 01 - Area Minicafe ASIA",
    location: "Minicafe ASIA",
    status: "active",
    healthStatus: "normal",
    eqiScore: 85,
    lastUpdated: "Baru saja",
    baselineImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    currentImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    detectedAnomalies: [],
},
{
    id: "cam-02",
    name: "Kamera 02 - Area Perpustakaan ASIA",
    location: "Perpustakaan ASIA",
    status: "inactive",
    healthStatus: "normal",
    eqiScore: 80,
    lastUpdated: "2 hari yang lalu",
    baselineImage: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80",
    currentImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    detectedAnomalies: [
        {
            id: "anomaly-01",
            type: "Kebocoran Air",
            description: "Terdeteksi kebocoran air di area ini.",
            confidence: 89.0,
            timestamp: "2023-08-15T10:30:00Z",
            bbox: {
                top: "60%",
                left: "40%",
                width: "20%",
                height: "15%"
            }
        }
    ],
},
{
    id: "cam-03",
    name: "Kamera 03 - Tes AI Asli (Python)",
    location: "Ruang Server AI",
    status: "active",
    healthStatus: "warning",
    eqiScore: 45,
    lastUpdated: "Detik ini",
    baselineImage: "/baseline_ai.jpg",
    currentImage: "/current_ai.jpg",
    detectedAnomalies: [
        {
            id: "anomaly-auto-1",
            type: "Sampah Terdeteksi",
            confidence: 95.0,
            bbox: {
                top: "67.5%",
                left: "64.38%",
                width: "21.38%",
                height: "15.17%"
            }
        },
        {
            id: "anomaly-auto-2",
            type: "Genangan Terdeteksi",
            confidence: 95.0,
            bbox: {
                top: "40.67%",
                left: "36.75%",
                width: "20.38%",
                height: "18.83%"
            }
        }
    ]
}
];

export const environmentalTrends = [
    { time: "06:00", eqi: 95, anomalies: 0},
    { time: "09:00", eqi: 90, anomalies: 1},
    { time: "12:00", eqi: 85, anomalies: 2},
    { time: "15:00", eqi: 80, anomalies: 1},
    { time: "18:00", eqi: 75, anomalies: 3},
    { time: "21:00", eqi: 70, anomalies: 2},
];
