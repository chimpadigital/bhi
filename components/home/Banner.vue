<template>
  <div class="banner-style flex flex-col">
    <Header />

    <!-- welcome -->
    <div class="h-full flex justify-center items-center">
      <span class="text-white font-bold text-4xl lg:text-5xl mt-10 pb-0 lg:pb-40">Bienvenido</span>
    </div>

    <Cards />
  </div>
</template>
<script>
import Header from './Header'
import Cards from './Cards'
export default {
  components: {
    Header, Cards
  }
}
</script>
<style lang="postcss" scoped>
.banner-style {
  @apply h-screen bg-center bg-cover bg-no-repeat relative;
  background-color: #00008B;
  background-image: url('/assets/images/body/banner.jpg');
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 139, .5);
}
</style>
