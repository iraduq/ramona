import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),

    // 1. Optimizarea automată a imaginilor
    ViteImageOptimizer({
      avif: { quality: 70 },
      webp: { quality: 70 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
      svg: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                cleanupIDs: true,
              },
            },
          } as any, // <-- Aici am adăugat "as any" pentru a opri eroarea de TypeScript
        ],
      },
    }),

    // 2. Transformarea în PWA pentru viteză maximă și cache offline
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,avif,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),

    // 3. Compresie GZIP
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    // 4. Compresie BROTLI
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),

    // 5. Analizator de bundle
    visualizer({
      open: false,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  build: {
    target: "esnext",
    minify: "terser",
    cssCodeSplit: true,

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.info", "console.debug", "console.warn"],
        passes: 2,
      },
      format: {
        comments: false,
      },
    },

    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-framer";
            if (id.includes("lucide-react")) return "vendor-lucide";
            if (id.includes("react-router-dom") || id.includes("@remix-run"))
              return "vendor-router";
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("scheduler")
            )
              return "vendor-react";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("sonner")) return "vendor-sonner";
            return "vendor-core";
          }
        },
      },
    },
  },
});
