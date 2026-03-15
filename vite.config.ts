import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

const isReplit = Boolean(process.env.REPL_ID || process.env.REPLIT_CLUSTER);

export default defineConfig({
  server: {
    // host 0.0.0.0 only when running on Replit; localhost otherwise
    host: isReplit ? "0.0.0.0" : "localhost",
    port: 8080,
    // allowedHosts: true is a security risk — only enable on Replit
    allowedHosts: isReplit ? true : ["localhost"],
  },
  plugins: [
    react(),
    compression({ algorithm: "gzip", ext: ".gz", threshold: 1024 }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
  },
});
