import cv2
import numpy as np

# Buat gambar putih kosong (Baseline) 800x600
baseline = np.ones((600, 800, 3), dtype=np.uint8) * 255
# Gambar beberapa garis sebagai referensi latar belakang (lantai/ubin)
for i in range(0, 800, 100):
    cv2.line(baseline, (i, 0), (i, 600), (200, 200, 200), 2)
for i in range(0, 600, 100):
    cv2.line(baseline, (0, i), (800, i), (200, 200, 200), 2)

cv2.imwrite("baseline.jpg", baseline)

# Buat salinan untuk gambar saat ini (Current)
current = baseline.copy()
# Tambahkan "Sampah" atau anomali: kotak gelap
cv2.rectangle(current, (300, 250), (450, 350), (50, 50, 50), -1)
# Tambahkan anomali kedua: genangan air (bentuk elips)
cv2.ellipse(current, (600, 450), (80, 40), 0, 0, 360, (150, 100, 50), -1)

cv2.imwrite("current.jpg", current)
print("Gambar baseline.jpg dan current.jpg berhasil dibuat!")
