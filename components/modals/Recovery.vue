<template>
  <div class="z-30 absolute top-0 left-0 w-screen h-screen">
    <div class="flex justify-center items-center w-full h-full px-4 lg:px-0">
      <div class="login__modal">
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
          Restaurar Contraseña
        </p>

        <!-- form -->
        <div class="mt-16 px-8 lg:px-24 pb-12">
          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Correo Electrónico</span>
            <input class="input-bhi" type="text">
          </div>
        </div>

        <!-- btn -->
        <div class="text-center" style="margin-bottom: 7rem">
          <span class="bg-bhi-primary border-2 border-bhi-primary text-white rounded-3xl py-4 px-12 text-lg lg:text-xl hover:bg-white hover:text-bhi-primary outline-none cursor-pointer duration-300">
            Enviar link de Restauración
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$nuxt.$emit('RECOVERY_DISABLED')
      this.$nuxt.$emit('OVERLAY_DISABLED')
    }
  }
}
</script>
<style lang="postcss" scoped>
.login__modal  {
  @apply relative w-full max-w-3xl bg-white rounded-3xl rounded-bl-none bg-top bg-no-repeat;
  background-image: url('/assets/images/body/bg-login-2.svg'), url('/assets/images/body/bg-recovery.svg');
  background-position: 97% bottom, left bottom;
  background-size: auto 54%, 100% auto;
  transition: .3s cubic-bezier(.25,.8,.25,1);
  animation: fadeIn 0.4s;
}
.recovery-text {
  color: #0099FF
}
</style>
