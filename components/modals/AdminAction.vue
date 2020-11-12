<template>
  <div class="z-30 absolute top-0 left-0 w-screen lg:h-screen">
    <div class="flex justify-center mt-10 lg:mt-0 lg:items-center w-full h-full px-4 lg:px-0">
      <div class="success__modal">
        <!-- btn closerelative  -->
        <div class="absolute cursor-pointer" style="top: 30px; right: 30px" @click="close">
          <svg
            id="Boton_cerrar"
            data-name="Boton cerrar"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <circle
              id="Ellipse_111"
              data-name="Ellipse 111"
              cx="15"
              cy="15"
              r="15"
              fill="#00008b"
            />
            <g id="Group_525" data-name="Group 525" transform="translate(10 10)">
              <line
                id="Line_2"
                data-name="Line 2"
                x1="10"
                y2="10"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="1.5"
              />
              <line
                id="Line_3"
                data-name="Line 3"
                x2="10"
                y2="10"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="1.5"
              />
            </g>
          </svg>
        </div>

        <div class="flex justify-center mt-24">
          <svg xmlns="http://www.w3.org/2000/svg" width="116.112" height="116.112" viewBox="0 0 116.112 116.112">
            <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M116.675,58.619A58.056,58.056,0,1,1,58.619.563,58.056,58.056,0,0,1,116.675,58.619ZM51.9,89.359,94.977,46.285a3.746,3.746,0,0,0,0-5.3l-5.3-5.3a3.745,3.745,0,0,0-5.3,0L49.255,70.819l-16.4-16.4a3.746,3.746,0,0,0-5.3,0l-5.3,5.3a3.746,3.746,0,0,0,0,5.3L46.606,89.359a3.746,3.746,0,0,0,5.3,0Z" transform="translate(-0.563 -0.563)" fill="#09f" />
          </svg>
        </div>

        <!-- title -->
        <p v-if="add === 'download'" class="text-center text-bhi-secondary font-bold text-4xl lg:text-4xl mt-3">
          Planilla Descargada
        </p>

        <p v-if="add === 'comprobante'" class="text-center text-bhi-secondary font-bold text-4xl lg:text-4xl mt-3">
          Comprobante descargado
        </p>

        <p v-if="add === 'cambios-guardados'" class="text-center text-bhi-secondary font-bold text-4xl lg:text-4xl mt-3">
          Cambios guardados
        </p>

        <p v-if="add === 'agency'" class="text-center text-bhi-secondary font-bold text-4xl lg:text-4xl mt-3">
          Agencia {{ agency.title }}
        </p>

        <p v-if="typeof add === 'boolean'" class="text-center text-bhi-secondary font-bold text-4xl lg:text-4xl mt-3">
          {{ add ? 'Pasajero confirmado' : 'Pasajero eliminado' }}
        </p>

        <!-- btn -->
        <div class="text-center mt-20 mb-24">
          <span class="btn-bhi-primary" @click="close">
            Volver
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    add: {
      type: [Boolean, String],
      default: true,
      required: true
    },
    agency: {
      type: [Boolean, String, Object],
      default: true,
      required: true
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    close () {
      this.$nuxt.$emit('ADMIN_ACTION_DISABLED')
      this.$nuxt.$emit('OVERLAY_DISABLED')
    }
  }
}
</script>
<style lang="postcss" scoped>
.success__modal  {
  @apply relative w-full max-w-3xl bg-white rounded-3xl rounded-bl-none bg-top bg-no-repeat shadow-primary;
  background-image: url('/assets/images/body/bg-success.svg'), url('/assets/images/body/bg-admin-modal.svg');
  background-position: left top, 95% bottom;
  background-size: 100% auto, auto;
  transition: .3s cubic-bezier(.25,.8,.25,1);
  animation: fadeIn 0.4s;
}
.recovery-text {
  color: #0099FF
}

.btn-bhi-primary-outline:hover svg path {
  fill: #fff
}
.btn-bhi-primary-outline:hover svg .line-w {
  @apply text-bhi-primary stroke-current
}
</style>
