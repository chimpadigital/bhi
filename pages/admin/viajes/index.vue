<template>
  <div>
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
        Confirmados
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
      {{ tabs.r ? 'Tours reservados' : 'Tours confirmados' }}
    </div>

    <!-- viajes / tours -->
    <Viajes :data="data" :tab="tabs.r" />
  </div>
</template>
<script>
import tours from '~/helpers/tours'
import Search from '~/components/admin/Search'
import Tags from '~/components/admin/Tags'
import Viajes from '~/components/admin/Viajes'
export default {
  middleware: ['auth', 'admin'],
  components: {
    Search, Tags, Viajes
  },
  data: () => ({
    data: tours,
    tabs: {
      r: true,
      c: false
    },
    tags: [
      'destino', 'fecha', 'agencia'
    ]
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
