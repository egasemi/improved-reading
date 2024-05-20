<script setup>

definePageMeta({
  layout: "landing",
  name: "Improved Reading"
});

const logos = [
  {
    title: "Líder del mercado en formación para la lectura",
    subtitle: "> 2 millones de participantes en 50 años",
    img: "logo3.png"
  },
  {
    title: "Recomendado oficialmente",
    subtitle: 'La fundación alemana líder en seguridad del consumidor "Stiftung Warentest" dice "bueno" (3/2015) - mejor curso presencial de Lectura Rápida',
    img: "logo4.png"
  },
  {
    title: "No sólo lectura superficial",
    subtitle: "Para todos aquellos que prestan atención a la calidad y la seguridad al leer",
    img: "logo1.png"
  },
  {
    title: "Con base científica",
    subtitle: "Todas las técnicas están científicamente probadas",
    img: "logo2.png"
  }
]

const logos2 = [
  {
    img: "logo5.jpg"
  },
  {
    img: "logo7.png"
  },
  {
    img: "logo8.jpg"
  },
  {
    img: "logo9.png"
  },
  {
    img: "logo10.png"
  },
  {
    img: "logo11.jpeg"
  },
  {
    img: "logo12.jpeg"
  }
]

const cursos = [
  {
    title: "Cursos presenciales in situ: nuestro origen (2 días)",
    desc: "En sus instalaciones o en una sala de seminarios alquilada, un grupo de participantes ejecuta la formación en formato papel (con el apoyo de aplicaciones específicas en nuestras tablets) o en pantalla (con PC aportadas por cada participante). ",
    popular: false,
    button: {
      text: "Más información",
      link: "pdfs/2_descripcion_curso_insitu.pdf",
    },
  },
  {
    title: "Conferencia práctica “Lectura Eficaz” (webinar o presencial, 2 horas)",
    desc: "En esta interactiva conferencia en directo enseñamos los fundamentos de una técnica de lectura eficaz y los tres errores de lectura más importantes que la mayoría de la gente comete a lo largo de su vida.",
    popular: false,
    button: {
      text: "Más información",
      link: "pdfs/3_conferencia_practica.pdf",
    },
  },
  {
    title: "Taller de impulso “Lectura Eficaz” (webinar o presencial, 5 horas)",
    desc: "Entrene las técnicas básicas de Improved Reading de forma compacta en un formato de 5 hs como seminario web o presencial. ¡Experimente, en muy poco tiempo, cómo puede cambiar notablemente hábitos obstructivos que han estado incorporados durante años!",
    popular: false,
    button: {
      text: "Más información",
      link: "pdfs/4_taller_impulso.pdf",
    },
  },  
  {
    title: "Versión 100% en línea (10 horas)",
    desc: "Fórmese de forma completa e independiente, con el apoyo activo de un tutor profesional. Usted adquiere las licencias en línea de forma individual o en paquetes económicos y las pone a disposición de los participantes cuando las necesiten. Pueden empezar el curso inmediatamente, sin más trámites.",
    popular: false,
    button: {
      text: "Más información",
      link: "https://webcoached.de/shop/trainerenglisch/speed-reading-training-auf-englisch/?coupon-code=improved-reading.com.ar",
    },
  }, 
  {
    title: "6 Webinars + formación en línea (6 + 8 horas)",
    desc: "Sistema híbrido compuesto de una serie de seminarios online en grupo y formación individual online, con tutor personal.",
    popular: false,
    button: {
      text: "Más información",
      link: "pdfs/6_descripcion_webinar.pdf",
    },
  }, 
  {
    title: "Lectura Eficaz en la Academia: 3 webinars + formación en línea (5 + 10 horas)",
    desc: "Seminarios web en directo + formación en línea con entrenamiento personal",
    popular: false,
    button: {
      text: "Más información",
      link: "pdfs/7_descripcion_science.pdf",
    },
  }, 
]
</script>

<template>
  <LandingContainer>
    <LandingHero/>
    <p>
      Llevamos <b>más de 50 años trabajando a nivel internacional como formadores líderes en Lectura Rápida y Eficaz</b>,
       principalmente en empresas, administración pública y ciencia, pero también en escuelas y universidades.
    </p>
    <br>
    <p>
      Nos importa mucho ayudar a las personas con nuestra experiencia a afrontar mejor los retos de la sociedad de la 
      información. La creciente digitalización aumenta continuamente la complejidad de la información a procesar y se 
      percibe como una de las principales cargas en la educación y el trabajo.
    </p>
    <br>
    <p>
      Lo que hace que <strong>Improved Reading</strong> sea tan especial es nuestro programa de formación compacto y 
      orientado a la práctica, que cambia inmediatamente las rutinas de lectura de larga duración, basado en una didáctica
      lógicamente pensada. Puede entrenar la <strong>lectura eficaz y rápida</strong> con nosotros en un
      <strong>seminario presencial</strong> o en un <strong>curso en línea</strong> que incluye el apoyo de un entrenador 
      experimentado.
    </p>
    <LandingLogos :logos="logos2" title="Algunos clientes que confían en nosotros en Alemania"/>
    <br>
    <p>
      Improved Reading es una asociación internacional que utiliza la misma forma y el mismo sistema para <strong>aumentar la eficacia lectora</strong>
      de sus participantes en <strong>todo el mundo</strong>. Desarrollado originalmente en Australia en 1968 por el Dr. Stan Rodgers, el sistema ha 
      sido adaptado a los descubrimientos científicos actuales desde 2011 por I.I.S.E. Europe GmbH, con sede en Eppstein, Alemania. I.I.S.E. 
      son las siglas de "International Institute of Social Economics", un instituto fundado por el Prof. Dr. Barrie O. Pettman con el objetivo 
      de difundir medidas de apoyo a la ciencia y la educación. En todo el mundo, el sistema está representado por franquiciados y 
      licenciatarios en sus respectivos países. Los derechos de licencia y el control central están en manos de I.I.S.E. Europe GmbH, 
      con Wolfgang Schmitz como propietario y director gerente.
    </p>
    <br>
    <p>
      <strong>Nicolás Cardarelli</strong> es docente y abogado por la Universidad Nacional de Rosario. Es el licenciatario titular de
      los derechos de promoción y venta del curso en Argentina, Uruguay y Chile desde el año 2023. En el año 2024 finalizó
       su formación como <strong>tutor especialista en Lectura Eficaz.</strong>
    </p>
    <h1 class="text-2xl lg:text-3xl lg:tracking-tight text-orange my-8 font-bold hover-underline">
      <NuxtLink href="pdfs/1_descripcion_general.pdf" external target="_blank">Nuestra oferta: ¡Formatos de formación que se adaptan exactamente a las necesidades de cada cliente!</NuxtLink>
    </h1>
    <p>
      Hemos desarrollado nuestras competencias y herramientas para la formación en línea desde 2015. Esto nos da una gran experiencia 
      sobre cómo combinar la formación clásica con elementos en línea o incluso llevarla a cabo completamente en línea. Descubramos 
      juntos cuál es la solución más adecuada para su organización. <a class="text-orange underline font-bold" href="/contact">Contacta con nosotros</a>
    </p>
    <div class="grid md:grid-cols-3 gap-10 mx-auto mt-12">
      <LandingCurso v-for="curso of cursos" :curso="curso" />
    </div>
    <br>
    <LandingCenterImg/>
    <br>
    <LandingLogos :logos="logos" title="Nuestras propuestas únicas"/>
    <br>
    <LandingBestSeller/>
    <br>
    <LandingLoaders/>
  </LandingContainer>
</template>
<style>
p {
  font-size: large;
  margin-bottom: 2rem;
}

h1 {
  font-weight: bold;
}

.hover-underline:hover {
  text-decoration: underline;
}
</style>
