import cv2
import numpy as np

# Baca gambar asli dari user
img = cv2.imread('ai_core/lantai.jpg')

if img is not None:
    cv2.imwrite('ai_core/real_baseline.jpg', img)
    
    # Buat salinan untuk current
    current = img.copy()
    
    h, w = img.shape[:2]
    # Gambar noda/sampah hitam di tengah-tengah lantai
    center_x, center_y = int(w * 0.4), int(h * 0.6)
    cv2.circle(current, (center_x, center_y), 40, (30, 30, 30), -1)
    # Tambahkan detil kecil
    cv2.rectangle(current, (center_x-10, center_y-10), (center_x+50, center_y+20), (50, 50, 80), -1)
    
    cv2.imwrite('ai_core/real_current.jpg', current)
    print("Success preparing real images.")
else:
    print("Failed to load lantai.jpg")
