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
  }
}
</script>
