// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/content","@vuestic/nuxt"],
  vuestic: {
    fonts: false,
    css: false,
    config: {
      colors: {
        variables: {primary: "#ff6a00"}
      }
    }
  },
  app: {
    head: {
      title: "Improved Reading"
    }
  }
});
