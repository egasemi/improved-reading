<script setup>
const props = defineProps(['logos', 'title'])
</script>

<template>
  <div class="mt-24">
    <h2 class="text-center text-3xl lg:text-4xl text-orange font-bold">{{props.title}}</h2>
    <div class="flex flex-col md:flex-row gap-8 items-top justify-center mt-10">
      <div v-for="logo in props.logos" class="flex flex-col md:w-1/2 lg:w-1/5 mb-5 md:justify-center">
        <h1 v-if="logo.title" class="text-xl lg:tracking-tight text-orange font-bold text-center">{{logo.title}}</h1>
        <p v-if="logo.subtitle" class="text-center">{{logo.subtitle}}</p>
        <img :src="'img/'+logo.img" style="margin-top: auto;"/>
      </div>
    </div>
  </div>
</template>
<style>
.fixed-height {
  height: 100px;
}
</style>