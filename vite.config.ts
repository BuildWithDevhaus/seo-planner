
import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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

