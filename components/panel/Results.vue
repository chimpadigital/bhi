<template>
  <div class="results__ pt-24">
    <div class="container px-4 lg:px-16 mb-12">
      <div class="title-bhi ">
        9 resultados encontrados
      </div>
    </div>

    <div class="content-best-sellers">
      <BestSellers />
    </div>
    <Footer />
  </div>
</template>
<script>
import BestSellers from '~/components/home/BestSellers'
import Footer from '~/components/home/Footer'
export default {
  components: {
    BestSellers, Footer
  }
}
</script>
<style lang="postcss" scoped>
.results__ {
  @apply bg-top bg-no-repeat relative;
  background-image: url('/assets/images/body/bg-home.svg');
  background-size: 100%;
}

.content-best-sellers {
  @apply bg-bottom bg-no-repeat relative;
  background-image: url('/assets/images/body/bg-panel.svg');
  background-size: 100% auto;
  background-position: left 107.4%;
}
</style>
