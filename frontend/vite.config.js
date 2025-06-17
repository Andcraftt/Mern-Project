import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: [
        '@reduxjs/toolkit',   // Si aún lo necesitas
        'react-icons/fa6',    // Añade esto
        'react-icons',        // Opcional: para cubrir otros imports
      ],
    },
  },
});