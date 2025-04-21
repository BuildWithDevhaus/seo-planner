import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        manualChunks: () => 'index.js',
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});