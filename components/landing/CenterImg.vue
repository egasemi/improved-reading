<template>
  <section class="flex flex-row mt-4">
    <div class="basis-1/2">
      <img src="/img/img1.jpg" alt="Descripción de la imagen">
    </div>
    <div class="basis-1/2 grid justify-items-center content-center">
      <ul>
        <h1 class="text-xl mb-5"><b>A pesar de la sobrecarga de información:</b></h1>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li>más tiempo</li>
        </div>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li>menos estrés</li>
        </div>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li>mayor concentración</li>
        </div>
        <div class="flex items-center">
          <img src="/icons/task2.svg" alt="check icon" id="icon">
          <li>ojos relajados</li>
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
