import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/web.config",
          dest: ".",
        },
      ],
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://10.140.243.43:1338/",
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("host", "10.140.243.43:1338");
          });
        },
      },
    },
  },
});
