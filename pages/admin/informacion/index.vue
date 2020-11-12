<template>
  <div>
    <!-- tabs -->
    <div class="flex flex-col lg:flex-row border-b-2 border-bhi-primary mb-10">
      <div
        class="tab__action tab__active"
      >
        Reservados
      </div>
    </div>

    <!-- search -->
    <div class="mb-10">
      <Search />
    </div>

    <!-- tags -->
    <div class="mb-10 flex">
      <Tags :data="tags" />
    </div>

    <!-- title -->
    <div class="title-bhi">
      Viajes Publicados
    </div>

    <!-- viajes / tours -->
    <Viajes :data="data" />
  </div>
</template>
<script>
import tours from '~/helpers/tours'
import Search from '~/components/admin/Search'
import Tags from '~/components/admin/Tags'
import Viajes from '~/components/admin/Viajes'
export default {
  components: {
    Search, Tags, Viajes
  },
  data: () => ({
    data: tours,
    tags: [
      'destino', 'fecha', 'agencia'
    ]
  })
}
</script>
