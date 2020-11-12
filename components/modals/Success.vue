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
        <p class="text-center text-bhi-secondary font-bold text-4xl lg:text-4xl mt-3">
          Viaje confirmado
        </p>

        <div class="flex flex-col items-center text-xl mt-8">
          <span class="italic font-light">Nº de Reserva: 00000000</span>

          <span class="text-bhi-secondary font-bold mt-8">Ficha de Viaje</span>
        </div>

        <!-- btn -->
        <div class="flex justify-center mt-6 mb-12">
          <div class="max-w-xs px-10 w-full">
            <nuxt-link to="#" class="btn-bhi-primary-outline inline-block w-full text-center mt-4 path">
              <div class="w-full flex items-center justify-around">
                <svg class="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <g id="Boton_volver" data-name="Boton volver" transform="translate(0 30) rotate(-90)">
                    <path id="Path_329" data-name="Path 329" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" fill="#00008b" />
                    <g id="Group_525" data-name="Group 525" transform="translate(7.167 10)">
                      <line
                        id="Line_2"
                        class="line-w"
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
                        class="line-w"
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
                  </g>
                </svg>

                <span>Descargar</span>
              </div>
            </nuxt-link>

            <nuxt-link
              to="/"
              class="btn-bhi-primary inline-block w-full text-center mt-4"
              @click.native="close"
            >
              Volver al Home
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$nuxt.$emit('SUCCESS_DISABLED')
      this.$nuxt.$emit('OVERLAY_DISABLED')
    }
  }
}
</script>
<style lang="postcss" scoped>
.success__modal  {
  @apply relative w-full max-w-3xl bg-white rounded-3xl rounded-bl-none bg-top bg-no-repeat shadow-primary;
  background-image: url('/assets/images/body/bg-success.svg');
  background-position: left 115%;
  background-size: 100% auto;
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
