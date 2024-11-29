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
        { hid: 'description', name: 'description', content: 'Lectura Rápida y Eficaz para profesionales por la empresa líder del mercado.' },
        { hid: 'keywords', name: 'keywords', content: 'lectura, comprensión, velocidad lectora, cursos de lectura, improved reading, educación' },
        { name: 'author', content: 'Improved Reading' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },


        { hid: 'og:title', property: 'og:title', content: 'Improved Reading' },
        { hid: 'og:description', property: 'og:description', content: 'Lectura Rápida y Eficaz para profesionales por la empresa líder del mercado.' },
        { hid: 'og:image', property: 'og:image', content: 'https://improved-reading.com.ar/img/logo.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://improved-reading.com.ar' },
        { hid: 'og:type', property: 'og:type', content: 'website' },

        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      link: [
        {rel: 'icon', type: 'image/png', href: '/favicon.ico'},
        {rel: 'canonical', href: 'https://improved-reading.com.ar'}
      ],
      script: [
        {
          hid: 'json-ld',
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Improved Reading",
            "url": "https://improved-reading.com.ar",
            "logo": "https://improved-reading.com.ar/img/logo.png",
            "description": "Lectura Rápida y Eficaz para profesionales por la empresa líder del mercado.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Apolo 1984",
              "addressLocality": "Santa Fe",
              "addressRegion": "Rosario",
              "addressCountry": "Argentina"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+54-341-336-3549",
              "contactType": "customer service",
              "areaServed": "AR"
            }
          })
        }
      ]
    },
  }
});