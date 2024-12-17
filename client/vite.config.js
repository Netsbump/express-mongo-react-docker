import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   host: true, // Expose le serveur Vite à l'extérieur
   port: 5173, // Port par défaut
  },
})
