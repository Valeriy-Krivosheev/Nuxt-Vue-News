// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/eslint"],
  imports: {
    presets: [
      {
        from: "pinia",
        imports: ["defineStore", "storeToRefs", "acceptHMRUpdate"],
      },
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  app: {
    head: {
      title: "World news",
    },
  },
});
