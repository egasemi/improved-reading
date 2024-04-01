<script setup>
defineProps(["curso"]);
</script>

<template>
  <div>
    <div
      class="flex flex-col justify-between w-full h-full order-first lg:order-none border-2 border-[#ff6a00] border-opacity-50 py-5 px-6 rounded-md hover-shadow"
    >
      <div>
        <p class="text-lg lg:text-2xl lg:tracking-tight text-orange font-bold">
          {{curso.title}}
        </p>
        <h4 class="text-md font-medium text-gray-400">{{ curso.desc }}</h4>
      </div>
      <div class="flex mt-8">
        <NuxtLink
            :href="curso.button.link"
            target="_blank"
            external
            class="rounded text-center px-5 py-2.5 w-full bg-orange">
            {{ curso.button.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
.hover-shadow {
  transition: box-shadow 0.3s ease-in-out;
}

.hover-shadow:hover {
  box-shadow: 0 0 10px #ff6a00;
}
</style>
