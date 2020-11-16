<template>
  <div class="my-12 container">
    <div class="px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
      <p
        v-if="user"
        :class="{'max-w-xs w-full': $route.path.includes('/admin/viajes/')}"
        class="text-bhi-primary text-4xl font-bold"
      >
        Hola, <span> {{ user.nameAgency }} </span>
      </p>

      <!-- back -->
      <div v-if="$route.path.includes('/admin/viajes/')" class="hidden lg:flex cursor-pointer flex-1 pl-10">
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

      <nuxt-link
        v-if="$route.path === '/admin/viajes' || $route.path === '/admin/informacion'"
        to="/admin/viajes/nuevo"
        class="btn-bhi-secondary-outline mt-4 lg:mt-0"
      >
        Nuevo viaje
      </nuxt-link>

      <div
        v-if="$route.path.includes('/admin/agencias')"
        class="flex flex-col lg:flex-row mt-5 lg:mt-0"
      >
        <div class="btn-bhi-secondary-outline text-center mb-5 lg:mb-0 lg:mr-10" @click="showAgencyPending">
          Solicitudes pendientes
        </div>
        <div class="btn-bhi-secondary-outline text-center" @click="create">
          Nueva agencia
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    create () {
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      return this.$nuxt.$emit('CREATE_ACTIVE', true)
    },
    showAgencyPending () {
      return this.$nuxt.$emit('SHOW_AGENCYS_PENDING')
    }
  }
}
</script>
