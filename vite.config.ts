import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Optimize chunk size - increase threshold for better performance
    chunkSizeWarningLimit: 1000,
    // Generate source maps only for production debugging
    sourcemap: false,
    // Minify with esbuild (faster than terser)
    minify: "esbuild",
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers
    target: "ES2020",
    // Output optimizations
    rollupOptions: {
      output: {
        // Optimize chunk names for caching
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash][extname]",
        // Vendor chunk optimization
        manualChunks: {
          // Split vendor libraries
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["@radix-ui/react-dropdown-menu", "@radix-ui/react-alert-dialog", "@radix-ui/react-dialog"],
          // Hooks in separate chunk
          "query-vendor": ["@tanstack/react-query"],
        },
      },
    },
  },
  // Image optimization settings
  assetsInclude: ["**/*.webp"],
}));
