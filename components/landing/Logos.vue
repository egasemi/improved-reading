<script setup>
const logos = [
  {
    title: "Líder del mercado en formación para la lectura",
    subtitle: "> 2 millones de participantes en 50 años",
    img: "logo1.png"
  },
  {
    title: "Recomendado oficialmente",
    subtitle: 'La fundación alemana líder en seguridad del consumidor "Stiftung Warentest" dice "bueno" (3/2015) – mejor curso presencial de Lectura Rápida',
    img: "logo2.png"
  },
  {
    title: "No sólo lectura superficial",
    subtitle: "Para todos aquellos que prestan atención a la calidad y la seguridad al leer",
    img: "logo3.png"
  },
  {
    title: "Con base científica",
    subtitle: "Todas las técnicas están científicamente probadas",
    img: "logo4.png"
  }
]
</script>

<template>
  <div class="mt-24">
    <h2 class="text-center text-3xl lg:text-4xl text-orange font-bold">Nuestro USP</h2>
    <div
      class="flex gap-8 items-center justify-center mt-10"
    >
      <div v-for="logo in logos" class="basis-1/4">
        <h1 class="text-md lg:text-xl lg:tracking-tight text-orange font-bold text-center">{{logo.title}}</h1>
        <p class="text-center">{{logo.subtitle}}</p>
        <img class="h-8 md:h-40 mx-auto" :src="'img/'+logo.img" />
      </div>
    </div>
  </div>
</template>
