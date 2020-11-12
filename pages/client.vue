<template>
  <div class="client__container">
    <Header />
    <Hi />

    <div class="container px-4 lg:px-0">
      <div class="flex">
        <!-- navigation -->
        <div class="max-w-xs w-full hidden lg:block">
          <Navigation />
        </div>

        <!-- body -->
        <div
          class="lg:border-l-2 lg:pl-10 lg:border-bhi-primary w-full  mb-20"
        >
          <nuxt-child />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from '~/components/home/Header'
import Hi from '~/components/client/Hi'
import Navigation from '~/components/client/Navigation'
import Footer from '~/components/home/Footer'
export default {
  components: {
    Header, Hi, Navigation, Footer
  }
}
</script>
<style lang="postcss" scoped>
.client__container {
  @apply bg-no-repeat relative;
  background-image: url('/assets/images/body/bg-admin.svg');
  background-size: 100% auto;
  background-position: left 90%;
}
</style>
