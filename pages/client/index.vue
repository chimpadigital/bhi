<template>
  <div>
    <!-- title -->
    <div class="title-bhi">
      Tours reservados
    </div>

    <!-- viajes / tours -->
    <Viajes :data="data.slice(0,3)" :tab="false" />

    <!-- title -->
    <div class="title-bhi mt-10">
      Mis viajes
    </div>

    <!-- viajes / tours -->
    <Viajes :data="data.slice(0,3)" :tab="false" />
  </div>
</template>
<script>
import tours from '~/helpers/tours'
import Viajes from '~/components/admin/Viajes'
export default {
  middleware: ['auth', 'user'],
  components: {
    Viajes
  },
  data: () => ({
    data: tours
  })
}
</script>
