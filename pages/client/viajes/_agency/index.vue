<template>
  <div v-if="viaje">
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

    <!-- back -->
    <div class="hidden lg:flex cursor-pointer mb-10">
      <div class="flex items-center" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <circle
            id="Ellipse_111"
            data-name="Ellipse 111"
            cx="15"
            cy="15"
            r="15"
            fill="#00008b"
          />
          <g id="Group_525" data-name="Group 525" transform="translate(7.167 10)">
            <line
              id="Line_2"
              data-name="Line 2"
              x1="5.167"
              y2="4.833"
              transform="translate(4.833)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1.5"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x2="5.167"
              y2="5.167"
              transform="translate(4.833 4.833)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1.5"
            />
          </g>
        </svg>

        <span class="ml-4 italic text-lg">Volver</span>
      </div>
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

    <!-- title btn -->
    <div class="title-bhi mb-10">
      Lista de pasajeros con reserva
    </div>

    <!-- resumen -->
    <div>
      <div
        v-for="(e, i) in viajes"
        :key="i"
        class="rounded-3xl rounded-bl-none bg-bhi-aux flex flex-col lg:flex-row w-full items-center pl-5 pr-10 py-5 mb-10 last:mb-0 shadow-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path id="Rectangle_334" data-name="Rectangle 334" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
          <path id="Icon_material-person" data-name="Icon material-person" d="M18.5,18.5a6.25,6.25,0,1,0-6.25-6.25A6.248,6.248,0,0,0,18.5,18.5Zm0,3.125c-4.172,0-12.5,2.094-12.5,6.25V31H31V27.875C31,23.719,22.672,21.625,18.5,21.625Z" transform="translate(1 2)" fill="#fff" />
        </svg>

        <!-- name -->
        <span class="text-xl font-bold ml-5 flex-1 capitalize">
          {{ e.name }}
        </span>

        <!-- icons controls -->
        <div class="flex items-center mt-2 lg:mt-0">
          <nuxt-link
            :to="tabs.r ? `` : `${$route.path}/confirm/${e.id}`"
            class="btn-bhi-primary py-1 lg:py-2 px-4 text-base font-light"
            @click.native="actionUser(e)"
          >
            {{ tabs.r ? 'Dar de baja' : 'Ver planilla' }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from '~/components/admin/Search'
export default {
  middleware: ['auth'],
  components: {
    Search
  },
  data: () => ({
    viaje: null,
    tabs: {
      r: true,
      c: false
    },
    viajes: [
      { id: '6452e53e11', name: 'ramiro perez' },
      { id: '03b56c1aa6', name: 'julieta Ortega' },
      { id: '232faeb052', name: 'jorge lopez' },
      { id: '3fb9eb3ec9', name: 'santiago prados' }
    ]
  }),
  mounted () {
    const t = this.$route.path
      .replace('/client/', '')
      .replace('viajes/', '')
      .replace('/', '')
      .split('-')
      .join(' ')

    this.viaje = t
  },
  methods: {
    actionUser (u) {
      if (this.tabs.r) {
        this.$nuxt.$emit('OVERLAY_ACTIVE')
        this.$nuxt.$emit('ADMIN_ACTION_ACTIVE', false)
        return true
      }

      localStorage.setItem('client.agency.confirm', JSON.stringify(u))
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
