<template>
  <div>
    <Banner />
    <BestSellers />
    <Footer />
  </div>
</template>
<script>
import Banner from '~/components/home/Banner'
import BestSellers from '~/components/home/BestSellers'
import Footer from '~/components/home/Footer'
export default {
  components: {
    Banner, BestSellers, Footer
  }
}
</script>
