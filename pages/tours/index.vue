<template>
  <div>
    <Search />
    <Results />
  </div>
</template>
<script>
import Search from '~/components/panel/Search'
import Results from '~/components/panel/Results'
export default {
  components: {
    Search, Results
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
