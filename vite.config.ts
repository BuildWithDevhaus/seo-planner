
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src", // This is relative to the project root
    },
  },

  build: {
    target: "esnext",
    cssCodeSplit: false,
    rollupOptions: {
      output: {

        entryFileNames: "index.js",
        manualChunks: () => "index.js",

      },
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },

});

