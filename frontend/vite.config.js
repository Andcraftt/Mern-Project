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
        '@reduxjs/toolkit',
        'react-icons',
        'react-icons/fa',
        'react-icons/fa6',
        /^react-icons\/.*/, // This covers all react-icons subpaths
      ],
    },
  },
  optimizeDeps: {
    include: ['react-icons'], // This helps with development builds
  },
});