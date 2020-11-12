<template>
  <div>
    <Banner />
    <Body />
    <Footer />
  </div>
</template>
<script>
import Banner from '~/components/panel/tours/Banner'
import Body from '~/components/panel/tours/Body'
import Footer from '~/components/home/Footer'
export default {
  components: {
    Banner, Body, Footer
  }
}
</script>
