<template>
  <section class="flex flex-col md:flex-row mt-4">
    <div class="basis-1/2">
      <img src="/img/img1.jpg" alt="Descripción de la imagen">
    </div>
    <div class="basis-1/2 grid justify-items-center content-center">
      <ul class="grid gap-5">
        <h1 class="text-2xl mb-5"><b>A pesar de la sobrecarga de información:</b></h1>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li class="text-3xl font-bold">más tiempo</li>
        </div>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li class="text-3xl font-bold">menos estrés</li>
        </div>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li class="text-3xl font-bold">mayor concentración</li>
        </div>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li class="text-3xl font-bold">ojos relajados</li>
        </div>
      </ul>
    </div>
  </section>
</template>
<style>
  section {
    background-color: #E8E8E8;
  }

  li {
    color: #ff6a00;
  }

  #icon {
    height: 40px;
    margin-right: 5px;
  }
</style>
