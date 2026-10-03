import cv2
import numpy as np
import json
import os

def detect_anomalies(baseline_path, current_path, output_json="result.json"):
    # Baca gambar
    baseline = cv2.imread(baseline_path)
    current = cv2.imread(current_path)

    if baseline is None or current is None:
        print("Error: Gambar tidak ditemukan!")
        return

    # Resize gambar agar ukurannya sama
    current = cv2.resize(current, (baseline.shape[1], baseline.shape[0]))

    # Konversi ke Grayscale (Hitam Putih)
    gray_base = cv2.cvtColor(baseline, cv2.COLOR_BGR2GRAY)
    gray_curr = cv2.cvtColor(current, cv2.COLOR_BGR2GRAY)

    # Tambahkan Gaussian Blur untuk mengurangi noise
    gray_base = cv2.GaussianBlur(gray_base, (21, 21), 0)
    gray_curr = cv2.GaussianBlur(gray_curr, (21, 21), 0)

    # Hitung perbedaan absolut antar frame
    frame_delta = cv2.absdiff(gray_base, gray_curr)

    # Lakukan Thresholding (Binarize the image)
    thresh = cv2.threshold(frame_delta, 25, 255, cv2.THRESH_BINARY)[1]
    
    # Dilatasi untuk memperjelas area yang berubah
    thresh = cv2.dilate(thresh, None, iterations=2)

    # Cari kontur (area perubahan)
    contours, _ = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    anomalies = []
    img_h, img_w = current.shape[:2]

    anomaly_count = 1
    for c in contours:
        # Abaikan kontur yang terlalu kecil (misal daun bergerak)
        if cv2.contourArea(c) < 500:
            continue

        # Dapatkan bounding box (x, y, w, h)
        (x, y, w, h) = cv2.boundingRect(c)

        # Ubah ke persentase agar responsif di Frontend (Web)
        top_pct = round((y / img_h) * 100, 2)
        left_pct = round((x / img_w) * 100, 2)
        width_pct = round((w / img_w) * 100, 2)
        height_pct = round((h / img_h) * 100, 2)

        anomalies.append({
            "id": f"anomaly-auto-{anomaly_count}",
            "type": "Perubahan Terdeteksi",
            "confidence": 95.0,
            "bbox": {
                "top": f"{top_pct}%",
                "left": f"{left_pct}%",
                "width": f"{width_pct}%",
                "height": f"{height_pct}%"
            }
        })
        
        # Gambar kotak merah di gambar current untuk visualisasi lokal
        cv2.rectangle(current, (x, y), (x + w, y + h), (0, 0, 255), 2)
        cv2.putText(current, "Anomali", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
        anomaly_count += 1

    # Simpan hasil gambar
    cv2.imwrite("output_deteksi.jpg", current)

    # Tulis hasil ke JSON
    result_data = {
        "status": "success",
        "anomalies_found": len(anomalies),
        "data": anomalies
    }

    with open(output_json, "w") as f:
        json.dump(result_data, f, indent=4)

    print(f"Selesai! Ditemukan {len(anomalies)} anomali.")
    print("Hasil gambar disimpan di 'output_deteksi.jpg'")
    print("Hasil JSON disimpan di", output_json)

# Untuk test run langsung (kalau kamu siapkan 2 gambar)
if __name__ == "__main__":
    print("Jalankan script dengan cara import, atau ganti path gambar di bawah ini.")
    detect_anomalies("baseline.jpg", "current.jpg")