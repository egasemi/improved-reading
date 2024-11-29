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
  modules: ["nuxt-icon", "@nuxt/content", "@vuestic/nuxt", "@nuxt/image"],
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
      title: "Improved Reading",
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Improved Reading' },
        { hid: 'og:description', property: 'og:description', content: 'Lectura Rápida y Eficaz para profesionales por la empresa líder del mercado .' },
        { hid: 'og:image', property: 'og:image', content: 'https://improved-reading.com.ar/img/logo.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://improved-reading.com.ar' },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ]
    },
  }
});