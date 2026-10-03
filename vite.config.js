import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tambahan plugin Tailwind CSS

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true
  }
})