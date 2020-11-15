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

    <!-- viaje title -->
    <div class="flex flex-col items-center lg:flex-row mb-10">
      <span
        class="text-4xl font-bold capitalize mr-4"
      >
        {{ viaje }}
      </span>

      <p class="text-base italic underline mt-5">
        Septiembre 2020
      </p>
    </div>

    <!-- title -->
    <div class="title-bhi mb-10">
      {{ tabs.r ? 'Agencias con viajes reservados' : 'Agencias con viajes confirmados' }}
    </div>

    <!-- resumen -->
    <div>
      <div
        v-for="({ name }, i) in viajes"
        :key="i"
        class="rounded-3xl rounded-bl-none bg-bhi-aux flex w-full items-center pl-5 pr-10 py-5 mb-10 last:mb-0 shadow-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g id="Group_680" data-name="Group 680" transform="translate(-24 -615)">
            <path id="Rectangle_336" data-name="Rectangle 336" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(24 615)" fill="#00008b" />
            <path id="Icon_map-travel-agency" data-name="Icon map-travel-agency" d="M23.44,7.88h-6V5.892c0-1.426-.921-3.012-2.344-3.012H10.3C8.874,2.88,7.94,4.466,7.94,5.892V7.88H2.44a1,1,0,0,0-1,1v14.5a1,1,0,0,0,1,1h21a1,1,0,0,0,1-1V8.88A1,1,0,0,0,23.44,7.88Zm-8,15H9.94v-.534c0-.011.307-.026.453-.044a1.581,1.581,0,0,0,.38-.088.964.964,0,0,0,.474-.3,1.037,1.037,0,0,0,.193-.523V16.273a1.089,1.089,0,0,0-.218-.54,1.283,1.283,0,0,0-.39-.374,1.169,1.169,0,0,0-.393-.2c-.214-.065-.5-.106-.5-.123v-.641l4.088-.229-.087.132v6.978a1.072,1.072,0,0,0,.246.523.957.957,0,0,0,.435.321,2.918,2.918,0,0,0,.383.141c.141.041.436.07.436.088ZM10.75,11a1.5,1.5,0,0,1,.514-1.143,1.815,1.815,0,0,1,2.448,0A1.508,1.508,0,0,1,14.221,11a1.488,1.488,0,0,1-.514,1.138,1.823,1.823,0,0,1-2.444,0A1.487,1.487,0,0,1,10.75,11Zm5.19-3.12H9.44V5.892c0-.533.54-1.512,1.073-1.512H14.54c.532,0,1.4.978,1.4,1.512Z" transform="translate(31.56 621.12)" fill="#fff" />
          </g>
        </svg>

        <!-- name -->
        <span class="text-xl font-bold ml-5 flex-1 capitalize">
          {{ name }}
        </span>

        <!-- icons controls -->
        <div class="flex items-center">
          <nuxt-link
            :to="tabs.r ? `${$route.path}/reservados/${name.split(' ').join('-')}` : `${$route.path}/confirmados/${name.split(' ').join('-')}`"
            class="btn-bhi-primary py-2 px-4 text-base font-light"
            @click.native="setAgency(name)"
          >
            Ver info
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tours from '~/helpers/tours'
import Search from '~/components/admin/Search'
export default {
  middleware: ['auth', 'admin'],
  components: {
    Search
  },
  data: () => ({
    viaje: null,
    data: tours,
    tabs: {
      r: true,
      c: false
    },
    tags: [
      'destino', 'fecha', 'agencia'
    ],
    viajes: [
      { name: 'agencia a' },
      { name: 'agencia b' },
      { name: 'agencia c' },
      { name: 'agencia d' }
    ]
  }),
  mounted () {
    const t = this.$route.path
      .replace('/admin/', '')
      .replace('viajes/', '')
      .split('-')
      .join(' ')

    this.viaje = t
  },
  methods: {
    setAgency (name) {
      const agency = {
        name,
        url: name.split(' ').join('-')
      }

      localStorage.setItem('agency', JSON.stringify(agency))
    },
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
