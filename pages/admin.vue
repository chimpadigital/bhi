<template>
  <div class="admin__container">
    <Header />
    <Hi v-if="!$route.path.includes('/informacion/')" />

    <div
      class="px-4 lg:px-0"
      :class="{'container': !$route.path.includes('/informacion/')}"
    >
      <div class="flex">
        <!-- navigation -->
        <div v-if="!$route.path.includes('/informacion/')" class="max-w-xs w-full hidden lg:block">
          <Navigation />
        </div>

        <!-- body -->
        <div
          class="lg:border-bhi-primary w-full mb-20"
          :class="{'lg:border-l-2 lg:pl-10': !$route.path.includes('/informacion/')}"
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
import Footer from '~/components/home/Footer'
import Hi from '~/components/admin/Hi'
import Navigation from '~/components/admin/Navigation'
export default {
  components: {
    Header, Footer, Hi, Navigation
  }
}
</script>
<style lang="postcss" scoped>
.admin__container {
  @apply bg-no-repeat relative;
  background-image: url('/assets/images/body/bg-admin.svg');
  background-size: 100% auto;
  background-position: left 89%;
}
</style>
