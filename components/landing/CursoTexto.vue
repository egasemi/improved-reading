<script setup>
defineProps(["curso"]);
</script>

<template>
    <h1 class="text-lg lg:text-2xl lg:tracking-tight text-orange mb-2 mt-4">
      {{curso.title}}
    </h1>
    <p>
      {{curso.desc}} 
      <a :href="curso.button.link" target="_blank" class="text-orange underline font-bold">Mas información</a>
    </p>
</template>
