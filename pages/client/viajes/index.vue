<template>
  <div class="mb-24">
    <!-- tabs -->
    <div class="flex flex-col lg:flex-row border-b-2 border-bhi-primary mb-10">
      <div
        class="tab__action lg:mr-3"
        :class="{'tab__active': tabs.r}"
        @click="activeTabs('r')"
      >
        Reservados
      </div>
      <div
        class="tab__action"
        :class="{'tab__active': tabs.c}"
        @click="activeTabs()"
      >
        Mis viajes
      </div>
    </div>

    <!-- search -->
    <div class="mb-10">
      <Search />
    </div>

    <!-- tags -->
    <div class="mb-10 flex">
      <Tags :data="['Destino', 'fecha', 'Código de reserva']" />
    </div>

    <!-- title -->
    <div class="title-bhi">
      {{ tabs.r ? 'Tours Reservados' : 'Mis viajes' }}
    </div>

    <!-- viajes / tours -->
    <Viajes :data="data.slice(0,3)" :tab="tabs.r" />
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
    tabs: {
      r: true,
      c: false
    }
  }),
  methods: {
    activeTabs (t) {
      if (t === 'r') {
        this.tabs.r = true
        this.tabs.c = false
        return true
      }
      this.tabs.c = true
      this.tabs.r = false
    }
  }
}
</script>
