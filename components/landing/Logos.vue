<script setup>
const props = defineProps(['logos', 'title'])
</script>

<template>
  <div class="mt-24">
    <h2 class="text-center text-3xl lg:text-4xl text-orange font-bold">{{props.title}}</h2>
    <div
      class="flex flex-wrap gap-8 items-top justify-center mt-10"
    >
      <div v-for="logo in props.logos" class="w-full md:w-1/2 lg:w-1/5">
        <h1 v-if="logo.title" class="text-md lg:text-xl lg:tracking-tight text-orange font-bold text-center">{{logo.title}}</h1>
        <p v-if="logo.subtitle" class="text-center">{{logo.subtitle}}</p>
        <NuxtImg :src="'img/'+logo.img" sizes="250px"/>
      </div>
    </div>
  </div>
</template>
