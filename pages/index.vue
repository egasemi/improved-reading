<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero/>
    <ContentDoc path="/index1" v-slot="{doc}">
      <article>
        <h1 class="text-2xl lg:text-3xl lg:tracking-tight text-orange my-8">{{ doc.title }}</h1>
        <ContentRenderer :value="doc"/>
      </article>
    </ContentDoc>
    <ContentDoc path="/index2" v-slot="{doc}">
      <article>
        <h1 class="text-2xl lg:text-3xl lg:tracking-tight text-orange my-8">{{ doc.title }}</h1>
        <ContentRenderer :value="doc"/>
      </article>
    </ContentDoc>
    <LandingLogos></LandingLogos>
  </LandingContainer>
</template>
