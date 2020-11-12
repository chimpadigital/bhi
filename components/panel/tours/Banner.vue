<template>
  <div
    v-if="data"
    class="bg-top bg-no-repeat relative bg-cover lg:bg-100%"
    style="box-shadow: inset 0 0 0 1000px rgba(0, 0, 139, .3);"
  >
    <!-- :style="{ backgroundImage: 'url(' + require('~/'+ data.photo) + ')' }" -->
    <Header />

    <div class="container px-4 lg:px-0">
      <!-- back -->
      <div
        class="inline-block mt-12 cursor-pointer select-none"
        @click="$router.back()"
      >
        <div class="flex items-center">
          <div class="w-8 h-8">
            <svg
              id="Boton_volver"
              data-name="Boton volver"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path id="Path_329" data-name="Path 329" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" fill="#09f" />
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
          </div>
          <span class="ml-3 text-white italic text-base lg:text-xl">
            {{ $route.path.includes('intinerario') ||
              $route.path.includes('excursiones') ||
              $route.path.includes('reservar') ?
                'Volver a Información del viaje'
              : 'Volver' }}
          </span>
        </div>
      </div>

      <h2 class="text-4xl lg:text-5xl capitalize text-white font-bold mt-8 pb-48">
        {{ data.name }}
      </h2>
    </div>
  </div>
</template>
<script>
import Header from '~/components/home/Header'
import tours from '~/helpers/tours'
export default {
  components: {
    Header
  },
  data: () => ({
    data: null
  }),
  mounted () {
    const t = this.$route.path
      .replace('/tours/', '')
      .replace('/intinerario', '')
      .replace('/excursiones', '')
      .replace('/reservar', '')
      .split('-')
      .join(' ')

    const current = tours.filter(({ name }) => name === t)[0]

    if (current) {
      this.data = current
    }
  }
}
</script>
