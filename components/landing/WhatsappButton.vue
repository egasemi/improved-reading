<script setup>

    const isMobile = ref(false);
  
    onMounted(() => {
        isMobile.value = window.innerWidth < 768;
        window.addEventListener('resize', () => {
          isMobile.value = window.innerWidth < 768;
        });
    });

</script>

<template>
  <div class="whatsapp-button">
    <a :href="!isMobile ? 'https://api.whatsapp.com/send?phone=5493413363549' : 'https://wa.me/5493413363549'" target="_blank">
      <img src="/img/whatsapp_logo.png" alt="WhatsApp Logo">
    </a>
  </div>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 50px;
}
</style>
