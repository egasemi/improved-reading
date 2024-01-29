<script setup>
const logos = [
  {
    title: "Líder del mercado en formación de lectura",
    subtitle: "2 millones de participantes en 50 años",
    img: "logo1.png"
  },
  {
    title: "Recomendado oficialmente",
    subtitle: "La principal fundación alemana de seguridad de los consumidores 'Foundation merchandise test' dice 'good' (3/2015) Mejor curso de Aula de Vela",
    img: "logo2.png"
  },
  {
    title: "No simplemente lectura diagonal",
    subtitle: "Para todos aquellos que prestan atención a la calidad y la seguridad a la hora de leer",
    img: "logo3.png"
  },
  {
    title: "Con base en la sens",
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
