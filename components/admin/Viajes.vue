<template>
  <div class="flex flex-wrap -mx-3">
    <div
      v-for="({name, photo}, i) in data.slice(0, 6)"
      :key="i"
      class="w-full md:w-1/2 lg:w-1/3 mt-10 px-3"
    >
      <div class="shadow-primary bg-white rounded-3xl rounded-bl-none pb-8">
        <!-- image -->
        <img class="card__img w-full lg:w-auto" :src="photo" :alt="name">

        <!-- name -->
        <div class="text-center mt-10">
          <span class="text-xl font-bold capitalize">{{ name }}</span>
        </div>

        <!-- btns -->
        <div v-if="$route.path === '/admin/viajes'" class="text-center mt-10">
          <nuxt-link
            v-if="tab"
            :to="`/admin/viajes/${name.split(' ').join('-')}`"
            class="btn-bhi-primary-outline"
            @click.native="setViaje(name)"
          >
            Ver info
          </nuxt-link>

          <nuxt-link
            v-else
            :to="`/admin/viajes/${name.split(' ').join('-')}`"
            class="btn-bhi-primary"
            @click.native="setViaje(name)"
          >
            Ver info
          </nuxt-link>
        </div>

        <div v-if="$route.path === '/admin/informacion'" class="flex flex-col items-center mt-10">
          <nuxt-link
            :to="`${$route.path}/${name.split(' ').join('-')}`"
            class="btn-bhi-primary"
            @click.native="setEdit(name)"
          >
            Modificar viaje
          </nuxt-link>

          <span class="btn-bhi-primary mt-10">
            Cancelar viaje
          </span>
        </div>

        <div v-if="$route.path === '/client'" class="text-center mt-10">
          <nuxt-link
            :to="`/client/viajes/${name.split(' ').join('-')}`"
            class="btn-bhi-primary"
          >
            Ver info
          </nuxt-link>
        </div>

        <div v-if="$route.path === '/client/viajes'" class="text-center mt-10">
          <nuxt-link
            :to="`/client/viajes/${name.split(' ').join('-')}`"
            class="btn-bhi-primary"
          >
            Ver info
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: null
    },
    tab: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    setEdit (name) {
      const viaje = {
        name,
        url: name.split(' ').join('-')
      }

      localStorage.setItem('viaje-edit', JSON.stringify(viaje))
    },
    setViaje (name) {
      const viaje = {
        name,
        url: name.split(' ').join('-')
      }

      localStorage.setItem('viaje', JSON.stringify(viaje))
    }
  }
}
</script>
