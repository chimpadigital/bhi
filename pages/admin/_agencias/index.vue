<template>
  <div>
    <!-- tabs -->
    <div class="flex flex-col lg:flex-row border-b-2 border-bhi-primary mb-10">
      <div
        class="tab__action tab__active"
      >
        Buscar Agencia
      </div>
    </div>

    <!-- search -->
    <div class="mb-10">
      <Search />
    </div>

    <!-- tags -->
    <div class="mb-10 flex">
      <Tags :data="['Nombre de agencia']" />
    </div>

    <!-- title -->
    <div class="title-bhi mb-10">
      {{ register ? 'Buscar agencia' : 'Solicitudes pendientes' }}
    </div>

    <!-- agency register-->
    <div v-if="register" class="flex flex-wrap -mx-3">
      <div
        v-for="({name, photo}, i) in data"
        :key="i"
        class="w-full md:w-1/2 lg:w-1/3 mt-10 px-3"
      >
        <div class="shadow-primary bg-white rounded-3xl rounded-bl-none pb-8">
          <!-- image -->
          <img class="card__img w-full lg:w-auto" :src="photo" :alt="name">

          <!-- name -->
          <div class="text-center mt-10">
            <span
              style="max-width:76px"
              class="text-xl font-bold capitalize inline-block text-center"
            >{{ name }}</span>
          </div>

          <div class="flex flex-col items-center mt-10">
            <nuxt-link
              :to="`${$route.path}/informacion`"
              class="btn-bhi-primary"
            >
              Ver info
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- query agency -->
    <div v-else>
      <div class="mt-10">
        <div
          v-for="(e, i) in pass"
          :key="i"
          class="rounded-3xl rounded-bl-none bg-bhi-aux flex w-full items-center pl-5 pr-10 py-5 mb-10 last:mb-0 shadow-primary justify-between flex-col lg:flex-row"
        >
          <div class="flex items-center mb-4 lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <g id="Group_680" data-name="Group 680" transform="translate(-24 -615)">
                <path id="Rectangle_336" data-name="Rectangle 336" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(24 615)" fill="#00008b" />
                <path id="Icon_map-travel-agency" data-name="Icon map-travel-agency" d="M23.44,7.88h-6V5.892c0-1.426-.921-3.012-2.344-3.012H10.3C8.874,2.88,7.94,4.466,7.94,5.892V7.88H2.44a1,1,0,0,0-1,1v14.5a1,1,0,0,0,1,1h21a1,1,0,0,0,1-1V8.88A1,1,0,0,0,23.44,7.88Zm-8,15H9.94v-.534c0-.011.307-.026.453-.044a1.581,1.581,0,0,0,.38-.088.964.964,0,0,0,.474-.3,1.037,1.037,0,0,0,.193-.523V16.273a1.089,1.089,0,0,0-.218-.54,1.283,1.283,0,0,0-.39-.374,1.169,1.169,0,0,0-.393-.2c-.214-.065-.5-.106-.5-.123v-.641l4.088-.229-.087.132v6.978a1.072,1.072,0,0,0,.246.523.957.957,0,0,0,.435.321,2.918,2.918,0,0,0,.383.141c.141.041.436.07.436.088ZM10.75,11a1.5,1.5,0,0,1,.514-1.143,1.815,1.815,0,0,1,2.448,0A1.508,1.508,0,0,1,14.221,11a1.488,1.488,0,0,1-.514,1.138,1.823,1.823,0,0,1-2.444,0A1.487,1.487,0,0,1,10.75,11Zm5.19-3.12H9.44V5.892c0-.533.54-1.512,1.073-1.512H14.54c.532,0,1.4.978,1.4,1.512Z" transform="translate(31.56 621.12)" fill="#fff" />
              </g>
            </svg>

            <!-- name -->
            <span class="text-xl font-bold ml-5">
              {{ `Agencia ${e.name}` }}
            </span>
          </div>

          <!-- icons controls -->
          <div class="flex items-center">
            <nuxt-link
              :to="`${$route.path}/informacion`"
              class="btn-bhi-primary text-10 lg:text-13 py-2 px-4 font-light mr-4"
            >
              Ver perfil
            </nuxt-link>

            <a
              to="#"
              class="btn-bhi-primary text-10 lg:text-13 py-2 px-4 font-light mr-4"
              @click="action('aprobada')"
            >
              Aprobar
            </a>

            <a
              to="#"
              class="btn-bhi-primary text-10 lg:text-13 py-2 px-4 font-light"
              @click="action('eliminada')"
            >
              Dar de baja
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from '~/components/admin/Search'
import Tags from '~/components/admin/Tags'
export default {
  middleware: ['auth', 'admin'],
  components: {
    Search, Tags
  },
  data: () => ({
    register: true,
    data: [
      { name: 'agency a', photo: '/assets/images/body/agency/01.jpg' },
      { name: 'agency b', photo: '/assets/images/body/agency/02.jpg' },
      { name: 'agency c', photo: '/assets/images/body/agency/03.jpg' },
      { name: 'agency d', photo: '/assets/images/body/agency/04.jpg' },
      { name: 'agency e', photo: '/assets/images/body/agency/05.jpg' },
      { name: 'agency f', photo: '/assets/images/body/agency/06.jpg' }
    ],
    pass: [
      { name: '01', id: '6452e53e11' },
      { name: '02', id: '03b56c1aa6' },
      { name: '03', id: '232faeb052' },
      { name: '04', id: '3fb9eb3ec9' }
    ]
  }),
  mounted () {
    this.$nuxt.$on('AGENCY_SHOW_SECTION', async (bool) => {
      const url = '/admin/agencias'

      if (this.$route.path !== url) {
        await this.$router.push(url)
      }

      this.register = bool
    })

    this.$nuxt.$on('SHOW_AGENCYS_PENDING', () => (this.register = false))
  },
  methods: {
    action (b) {
      window.scroll(0, 0)
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      this.$nuxt.$emit('ADMIN_ACTION_ACTIVE', {
        title: b
      })
    }
  }
}
</script>
