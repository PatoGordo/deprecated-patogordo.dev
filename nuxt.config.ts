import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    build: { assetsInlineLimit: 0 },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["iconify-icon"].includes(tag),
        },
      },
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
    server: {
      proxy: {
        "/api": {
          target: "https://api-patogordo.netlify.app/api",
          changeOrigin: true,
        },
      },
    },
  },
});
