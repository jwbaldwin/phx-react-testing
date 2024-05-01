import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    publicDir: false,
    build: {
      outDir: "../priv/static",
      emptyOutDir: true,
      target: ["ESNext"],
      manifest: false,
      rollupOptions: {
        input: "js/app.tsx",
        output: {
          assetFileNames: "assets/[name][extname]",
          chunkFileNames: "[name].js",
          entryFileNames: "assets/[name].js",
        },
      },
      commonjsOptions: {
        exclude: [],
        include: ["vendor/topbar.js"],
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./js/"),
      },
    },
  };
});
