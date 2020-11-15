<template>
  <div>
    <!-- cards -->
    <div class="flex flex-wrap">
      <!-- left -->
      <div class="w-full lg:w-1/2 lg:pr-5">
        <!-- title -->
        <div class="card__resumen">
          <span class="inline-block text-xl font-bold text-white px-10 py-3 bg-bhi-primary rounded-3xl rounded-bl-none">Ventas</span>

          <!-- indicador -->
          <div class="flex justify-center items-center flex-col">
            <div class="text-center">
              <div class="rounded__fill">
                <div class="text-3xl font-bold">
                  20
                </div>
              </div>
            </div>

            <span class="text-base py-5">Mes de Septiembre</span>
          </div>
        </div>
      </div>

      <!-- rigth -->
      <div class="w-full lg:w-1/2 lg:pl-5 pt-10 lg:pt-0">
        <!-- title -->
        <div class="card__resumen">
          <span class="inline-block text-xl font-bold text-white px-10 py-3 bg-bhi-primary rounded-3xl rounded-bl-none">Usuarios</span>

          <!-- indicador -->
          <div class="flex justify-center items-center flex-col">
            <div class="text-center">
              <div class="rounded__fill">
                <div class="text-3xl font-bold">
                  25
                </div>
              </div>
            </div>

            <span class="text-base py-5">Nuevos usuarios registrados</span>
          </div>
        </div>
      </div>
    </div>

    <!-- title -->
    <span class="title-bhi my-10">
      Solicitudes pendientes
    </span>

    <!-- pending -->
    <div v-if="pending.length" class="mb-10">
      <!-- icon user-->
      <div
        v-for="(e, i) in pending"
        :key="i"
        class="rounded-3xl rounded-bl-none bg-bhi-aux flex w-full items-center pl-5 pr-10 py-5 mb-10 last:mb-0 shadow-primary"
      >
        <svg
          id="Group_655"
          data-name="Group 655"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path id="Rectangle_334" data-name="Rectangle 334" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
          <path id="Icon_material-person" data-name="Icon material-person" d="M18.5,18.5a6.25,6.25,0,1,0-6.25-6.25A6.248,6.248,0,0,0,18.5,18.5Zm0,3.125c-4.172,0-12.5,2.094-12.5,6.25V31H31V27.875C31,23.719,22.672,21.625,18.5,21.625Z" transform="translate(1 2)" fill="#fff" />
        </svg>

        <!-- name -->
        <span class="text-xl font-bold ml-5 flex-1">
          {{ e }}
        </span>

        <!-- icons controls -->
        <div class="flex items-center">
          <div class="cursor-pointer mr-10" @click="confirmUser(i)">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M40.563,20.563a20,20,0,1,1-20-20A20,20,0,0,1,40.563,20.563ZM18.249,31.152,33.088,16.314a1.29,1.29,0,0,0,0-1.825l-1.825-1.825a1.29,1.29,0,0,0-1.825,0l-12.1,12.1-5.65-5.65a1.29,1.29,0,0,0-1.825,0L8.037,20.94a1.29,1.29,0,0,0,0,1.825l8.387,8.387a1.29,1.29,0,0,0,1.825,0Z" transform="translate(-0.563 -0.563)" fill="#00008b" />
            </svg>
          </div>

          <div class="cursor-pointer" @click="deleteUser(i)">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path id="Icon_material-cancel" data-name="Icon material-cancel" d="M23,3A20,20,0,1,1,3,23,19.982,19.982,0,0,1,23,3ZM13,30.18,15.82,33,23,25.82,30.18,33,33,30.18,25.82,23,33,15.82,30.18,13,23,20.18,15.82,13,13,15.82,20.18,23Z" transform="translate(-3 -3)" fill="#00008b" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- empty pending -->
    <div v-else class="mb-10 text-center">
      <span class="text-xl text-bhi-primary font-bold">No hay solicitudes pendientes</span>
    </div>

    <!-- btn -->
    <nuxt-link v-if="pending.length" to="#" class="btn-bhi-secondary px-10">
      Ver todo
    </nuxt-link>
  </div>
</template>
<script>
export default {
  middleware: ['auth'],
  data: () => ({
    pending: [
      'Nombre de Usuario', 'Nombre de Usuario', 'Nombre de Usuario'
    ]
  }),
  methods: {
    confirmUser (i) {
      const a = [...this.pending].filter((e, index) => index !== i)
      this.pending = a
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      this.$nuxt.$emit('ADMIN_ACTION_ACTIVE', true)
    },
    deleteUser (i) {
      const a = [...this.pending].filter((e, index) => index !== i)
      this.pending = a
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      this.$nuxt.$emit('ADMIN_ACTION_ACTIVE', false)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.fullPath === '/' || from.path === '/') {
      next((vm) => {
        vm.$nuxt.$emit('LOGIN_DISABLED')
        vm.$nuxt.$emit('OVERLAY_DISABLED')
        return true
      })
    }
    next()
  }
}
</script>
<style lang="postcss" scoped>
.card__resumen {
  @apply rounded-3xl rounded-bl-none shadow-primary bg-bhi-aux;
}

.rounded__fill {
  @apply border-8 border-bhi-secondary rounded-full flex justify-center items-center;
  width: 110px;
  height: 110px;
}
</style>
