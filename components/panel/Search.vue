<template>
  <div class="search-style">
    <Header />

    <!-- filter -->
    <div class=" max-w-lg mx-auto mt-10 px-4 lg:px-0">
      <div class="flex flex-col mb-8">
        <span class="lg:text-xl text-lg font-bold mb-2 pl-5 text-white">Destino o Tour</span>
        <input class="input-bhi bg-white border-white" type="text" value="Argentina">
      </div>
      <div class="flex flex-col">
        <span class="lg:text-xl text-lg font-bold mb-2 pl-5 text-white">Mes</span>
        <input class="input-bhi bg-white border-white" type="text" value="Septiembre">
      </div>

      <div class="text-center mt-16 pb-16">
        <span class="bg-bhi-primary border-2 border-bhi-primary text-white rounded-3xl py-4 px-12 text-lg lg:text-xl hover:bg-white hover:text-bhi-primary hover:border-white outline-none cursor-pointer duration-300">
          Buscar
        </span>
      </div>
    </div>

    <!-- tabs -->
    <div class="container mt-5 text-center lg:text-left" style="padding-bottom: 0.9rem">
      <span class="bg-bhi-primary text-white rounded-t-3xl py-4 px-10 font-bold text-base cursor-pointer select-none">Por Fecha</span>
      <span class="bg-white text-bhi-primary rounded-t-3xl py-4 px-10 font-bold text-base cursor-pointer select-none">Por Destino</span>
    </div>
  </div>
</template>
<script>
import Header from '~/components/home/Header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="postcss" scoped>
.search-style {
  @apply bg-center bg-cover bg-no-repeat relative;
  background-color: #00008B;
  background-image: url('/assets/images/body/bg-search.jpg');
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 139, .5);
}
</style>
