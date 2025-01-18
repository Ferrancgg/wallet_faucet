import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Usa globals como describe/it sin importar importarlos
    environment: 'jsdom', // Emula el DOM para pruebas con React
    setupFiles: './src/tests/setup.js', // Archivo de configuración global para pruebas
  },
})
