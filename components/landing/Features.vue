<script setup>
const features = [
  {
    title: "Bring Your Own Framework",
    description:
      "Build your site using Vue, web components, or just plain ol' HTML + JavaScript.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "100% Static HTML, No JS",
    description:
      "Nuxt renders your entire page to static HTML, removing all JavaScript from your final build by default.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "On-Demand Components",
    description:
      "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.  ",
    icon: "bx:bxs-data",
  },
  {
    title: "Broad Integration",
    description:
      "Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
    icon: "bx:bxs-bot",
  },
  {
    title: "SEO Enabled",
    description:
      "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Community",
    description:
      "Nuxt is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    icon: "bx:bxs-user",
  },
];

const title = "text-2xl lg:text-3xl lg:tracking-tight text-orange"
const paraph = "text-md mt-4"
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 :class=title>
      Lectura mejorada e I.I.S.E. de donde venimos
    </h2>
    <p :class="paraph">
      Durante más de <b>50 años, hemos sido internacionalmente activos como destacados instructores de Speed Reading</b>, principalmente en empresas, administración y ciencia, pero también en escuelas.
    </p>
    <p :class="paraph">
      Es un asunto cercano a nuestros corazones apoyar a las personas 
      con nuestra experiencia para enfrentar mejor los desafíos de la 
      sociedad de la información. El aumento de la digitalización aumenta 
      continuamente la complejidad de la información a procesar y se percibe 
      como una de las principales cargas en educación y trabajo.
    </p>
    <p :class="paraph">
      Lo que hace que <b>la Lectura Mejorada</b> sea tan especial 
      es nuestro programa de entrenamiento compacto y orientado 
      a la práctica que cambia inmediatamente las rutinas de lectura de larga data, 
      basados en didáctica lógicamente pensada. Usted puede entrenar <b>una lectura eficiente 
      y rápida</b> con nosotros en <b>un seminario cara a cara en papel o directamente en la pantalla
       o como un curso en línea</b> que incluye el apoyo de un entrenador experimentado.
    </p>
    <p :class="paraph">
      Mejora de la Lectura es una asociación internacionalmente activa que utiliza la misma forma y 
      el mismo sistema para aumentar la eficiencia lectora de sus participantes en todo el mundo. 
      Originalmente desarrollado en Australia en 1968 por el Dr. Stan Rodgers, el sistema ha sido 
      adaptado a los hallazgos científicos actuales desde 2011 por <b>I.I.S.E. Europe GmbH</b>, con sede en 
      Eppstein/Alemania, junto con sus socios. I.I.S.E. significa "<b>I</b> nternational <b>I</b> nstitute of <b>S</b> ocial <b>E</b> conomics", 
      un instituto fundado por Prof. Dr. Barrie O. Pettman con el objetivo de difundir medidas de apoyo para la ciencia 
      y la educación. En todo el mundo, el sistema está representado por franquiciados y licenciatarios en sus 
      respectivos países. Los derechos de licencia y el control central están en manos de I.I.S.E. Europe GmbH, 
      con Wolfgang Schmitz como propietario y director general.
    </p>
    <br>
    <h2 :class="title">
      Nuestra oferta: Formatos de entrenamiento que se adaptan a cada cliente necesita exactamente.
    </h2>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
