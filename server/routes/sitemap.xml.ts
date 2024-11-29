import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default defineEventHandler(async (event) => {
  // Define las rutas que deseas incluir en el sitemap
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/contacto', changefreq: 'monthly', priority: 0.7 },
  ]

  // Crear el stream del sitemap
  const sitemap = new SitemapStream({
    hostname: 'https://improved-reading.com.ar' // Cambia por tu dominio
  })

  const data = await streamToPromise(Readable.from(routes).pipe(sitemap))

  // Configura el encabezado del contenido como XML
  event.res.setHeader('Content-Type', 'application/xml')

  // Retorna el contenido del sitemap
  return data.toString()
})
