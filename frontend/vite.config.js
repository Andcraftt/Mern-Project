import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Para resolver rutas absolutas

export default defineConfig({
  plugins: [react()],
  
  // Configuración de resolución de módulos
  resolve: {
    alias: {
      // Alias para react-icons (evita errores de importación)
      'react-icons/fa': path.resolve(__dirname, './node_modules/react-icons/fa/index.js'),
      'react-icons/fa6': path.resolve(__dirname, './node_modules/react-icons/fa6/index.js'),
      
      // Alias para Redux Toolkit (opcional, pero útil para imports absolutos)
      '@reduxjs/toolkit': path.resolve(__dirname, './node_modules/@reduxjs/toolkit/dist/index.js'),
    },
    // Extensiones que Vite intentará resolver automáticamente
    extensions: ['.js', '.jsx', '.json', '.mjs'],
  },

  // Configuración del build para producción
  build: {
    rollupOptions: {
      // Módulos que NO deben incluirse en el bundle (se espera que estén en el entorno)
      external: [
        'react-icons',
        /^react-icons\/.*/, // Todos los subpaths de react-icons
        '@reduxjs/toolkit', // Redux Toolkit
      ],
    },
    // Opciones para CommonJS (necesario para algunas dependencias)
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  // Optimización de dependencias (para desarrollo)
  optimizeDeps: {
    include: [
      'react-icons', 
      '@reduxjs/toolkit', // Asegura que se optimice en desarrollo
    ],
  },
});