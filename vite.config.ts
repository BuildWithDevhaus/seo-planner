import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
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
})