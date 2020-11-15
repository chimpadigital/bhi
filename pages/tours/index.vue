<template>
  <div>
    <Search />
    <Results />
    <Footer />
  </div>
</template>
<script>
import Search from '~/components/panel/Search'
import Results from '~/components/panel/Results'
import Footer from '~/components/home/Footer'
export default {
  middleware: ['auth'],
  components: {
    Search, Results, Footer
  },
  beforeRouteEnter (to, from, next) {
    if (from.fullPath === '/' || from.path === '/') {
      next((vm) => {
        vm.$nuxt.$emit('LOGIN_DISABLED')
        vm.$nuxt.$emit('OVERLAY_DISABLED')
        return true
      })
    }
    next()
  }
}
</script>
