import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

const wasmFile = normalizePath(
  resolve(
    __dirname,
    "node_modules",
    "mediainfo.js",
    "dist",
    "MediaInfoModule.wasm"
  )
);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: wasmFile,
          dest: "wasm-files",
        },
      ],
    }),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
});
