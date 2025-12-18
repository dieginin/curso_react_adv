import { VitePWA } from "vite-plugin-pwa"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
        type: "module",
        suppressWarnings: true,
      },
      registerType: "autoUpdate",
      srcDir: "src",
      strategies: "injectManifest",
    }),
  ],
})
