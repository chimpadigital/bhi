<template>
  <div class="z-30 absolute top-0 left-0 w-screen lg:h-screen">
    <div class="flex justify-center mt-10 lg:mt-0 lg:items-center w-full h-full px-4 lg:px-0">
      <div class="confirm__modal">
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

        <!-- title -->
        <p class="text-center text-bhi-primary font-bold text-2xl lg:text-4xl mt-12">
          Confirmación del Viaje
        </p>

        <!-- form -->
        <div class="mt-10 px-8 lg:px-16 pb-12">
          <!-- destino -->
          <div class="flex flex-col font-bold">
            <span class="text-xl">Destino</span>
            <span class="text-bhi-secondary text-3xl">Mar de Plata</span>
          </div>

          <!-- pasj - butacas -->
          <div class="flex flex-wrap mt-10">
            <div class="w-full lg:w-1/2">
              <div class="flex flex-col font-bold">
                <span class="text-xl">Cant. de Pasajeros</span>
                <span class="text-bhi-secondary text-3xl">2 adultos</span>
                <span class="text-bhi-secondary text-3xl">3 niños</span>
                <span class="text-bhi-secondary text-3xl">1 bebe</span>

                <span class="text-xl italic underline mt-3 font-normal cursor-pointer">ver datos</span>
              </div>
            </div>
            <div class="w-full lg:w-1/2 mt-4 lg:mt-0">
              <div class="flex flex-col font-bold">
                <span class="text-xl">Butacas</span>
                <span class="text-bhi-secondary text-3xl">13A - 13B - 13A - 13B - 13A
                  - 13B - 13A - 13B - 13A
                  - 13B - 13A - 13B</span>

                <span class="text-xl italic underline mt-3 font-normal cursor-pointer">ver reserva</span>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <div class="flex flex-col font-bold">
              <span class="text-xl">Hotel Antartida</span>
              <span class="text-bhi-secondary text-3xl">4 Dobles - 1 Individual - 1 triple - 1 cuadruple</span>

              <span class="text-xl italic underline mt-3 font-normal cursor-pointer">ver reserva</span>
            </div>
          </div>
        </div>

        <!-- btn -->
        <div class="text-center mb-10 mt-16">
          <span
            class="bg-bhi-primary border-2 border-bhi-primary text-white rounded-3xl py-4 px-12 text-lg lg:text-xl hover:bg-white hover:text-bhi-primary outline-none cursor-pointer duration-300"
            @click="confirm"
          >
            Reservar
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    confirm () {
      this.$nuxt.$emit('CONFIRMATION_DISABLED')
      this.$nuxt.$emit('SUCCESS_ACTIVE')
    },
    close () {
      this.$nuxt.$emit('CONFIRMATION_DISABLED')
      this.$nuxt.$emit('OVERLAY_DISABLED')
    }
  }
}
</script>
<style lang="postcss" scoped>
.confirm__modal  {
  @apply relative w-full max-w-3xl bg-white rounded-3xl rounded-bl-none bg-top bg-no-repeat shadow-primary;
  background-image: url('/assets/images/body/bg-recovery.svg');
  background-position: left 115%;
  background-size: 100% auto;
  transition: .3s cubic-bezier(.25,.8,.25,1);
  animation: fadeIn 0.4s;
}
.recovery-text {
  color: #0099FF
}
</style>
