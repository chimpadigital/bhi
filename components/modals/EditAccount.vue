<template>
  <div class="z-30 absolute top-0 left-0 w-screen h-screen">
    <div class="flex justify-center  w-full  px-4 lg:px-0">
      <div class="login__modal mt-32">
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
          {{ password ? 'Modificar contraseña' : 'Editar cuenta' }}
        </p>

        <!-- form edit -->
        <div v-if="!password" class="mt-16 px-8 lg:px-24">
          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Nombre de la Agencia</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Correo electrónico</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Contraseña</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Crear Contraseña</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Confirmar Contraseña</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Nombre del Vendedor</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Dirección</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Teléfono</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Razón Social</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Redes Sociales</span>

            <div class="mb-4 flex">
              <div class="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51">
                  <g id="Group_559" data-name="Group 559" transform="translate(-413 -976)">
                    <g id="Group_62" data-name="Group 62" transform="translate(677.794 -1482.206)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="25.5"
                        cy="25.5"
                        r="25.5"
                        transform="translate(-264.794 2458.206)"
                        fill="#09f"
                      />
                    </g>
                    <path id="Icon_simple-twitter" data-name="Icon simple-twitter" d="M24.951,5.789a10.417,10.417,0,0,1-2.943.807A5.164,5.164,0,0,0,24.261,3.76,10.586,10.586,0,0,1,21,4.993a5.123,5.123,0,0,0-8.865,3.5,5.244,5.244,0,0,0,.132,1.171A14.515,14.515,0,0,1,1.708,4.322,5.023,5.023,0,0,0,1.015,6.9a5.126,5.126,0,0,0,2.279,4.266,5.108,5.108,0,0,1-2.321-.642v.064a5.128,5.128,0,0,0,4.11,5.028,5.172,5.172,0,0,1-2.3.089,5.142,5.142,0,0,0,4.8,3.559,10.279,10.279,0,0,1-6.356,2.193A10.878,10.878,0,0,1,0,21.387a14.578,14.578,0,0,0,7.872,2.3A14.476,14.476,0,0,0,22.453,9.12c0-.218,0-.437-.016-.656A10.349,10.349,0,0,0,25,5.81l-.049-.021Z" transform="translate(426 987.631)" fill="#fff" />
                  </g>
                </svg>
              </div>

              <input class="input-bhi w-full" type="text">
            </div>

            <div class="mb-4 flex">
              <div class="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50.875" height="50.567" viewBox="0 0 50.875 50.567">
                  <g id="Group_558" data-name="Group 558" transform="translate(-442 -1048.048)">
                    <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M51.438,26A25.438,25.438,0,1,0,22.025,51.13V33.353H15.563V26h6.462V20.4c0-6.375,3.8-9.9,9.608-9.9a39.148,39.148,0,0,1,5.695.5v6.257H34.119c-3.159,0-4.145,1.961-4.145,3.973V26h7.055L35.9,33.353H29.975V51.13A25.447,25.447,0,0,0,51.438,26Z" transform="translate(441.438 1047.486)" fill="#09f" />
                  </g>
                </svg>
              </div>

              <input class="input-bhi w-full" type="text">
            </div>

            <div class="flex">
              <div class="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51">
                  <g id="Group_557" data-name="Group 557" transform="translate(-428 -1116)">
                    <g id="Group_64" data-name="Group 64" transform="translate(692.794 -1342.206)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="25.5"
                        cy="25.5"
                        r="25.5"
                        transform="translate(-264.794 2458.206)"
                        fill="#09f"
                      />
                    </g>
                    <g id="Icon_ionic-logo-instagram" data-name="Icon ionic-logo-instagram" transform="translate(436.5 1124.5)">
                      <path id="Path_316" data-name="Path 316" d="M22.208,6.583a5.224,5.224,0,0,1,5.208,5.208V22.208a5.224,5.224,0,0,1-5.208,5.208H11.792a5.224,5.224,0,0,1-5.208-5.208V11.792a5.224,5.224,0,0,1,5.208-5.208H22.208m0-2.083H11.792A7.313,7.313,0,0,0,4.5,11.792V22.208A7.313,7.313,0,0,0,11.792,29.5H22.208A7.313,7.313,0,0,0,29.5,22.208V11.792A7.313,7.313,0,0,0,22.208,4.5Z" fill="#fff" />
                      <path id="Path_317" data-name="Path 317" d="M25.313,12.375A1.688,1.688,0,1,1,27,10.688,1.683,1.683,0,0,1,25.313,12.375Z" transform="translate(-1.619 -0.381)" fill="#fff" />
                      <path id="Path_318" data-name="Path 318" d="M18,13.5A4.5,4.5,0,1,1,13.5,18,4.5,4.5,0,0,1,18,13.5m0-2.25A6.75,6.75,0,1,0,24.75,18,6.752,6.752,0,0,0,18,11.25Z" transform="translate(-1 -1)" fill="#fff" />
                    </g>
                  </g>
                </svg>
              </div>

              <input class="input-bhi w-full" type="text">
            </div>
          </div>
        </div>

        <!-- form update password -->
        <div v-else class="mt-16 px-8 lg:px-24">
          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 ">Contraseña</span>
            <div class="relative w-full">
              <input
                class="input-bhi w-full z-0"
                :type="p01 ? 'password' : 'text'"
                value="pass2000@0444!!.com"
              >

              <div
                style="top:50%;transform:translateY(-50%);right:15px"
                class="absolute z-10 cursor-pointer"
                @click="p01 = !p01"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="16.333" viewBox="0 0 24.5 16.333">
                  <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M24.352,12.046A13.643,13.643,0,0,0,12.25,4.5a13.645,13.645,0,0,0-12.1,7.546,1.376,1.376,0,0,0,0,1.242,13.643,13.643,0,0,0,12.1,7.546,13.645,13.645,0,0,0,12.1-7.546A1.376,1.376,0,0,0,24.352,12.046Zm-12.1,6.746a6.125,6.125,0,1,1,6.125-6.125A6.125,6.125,0,0,1,12.25,18.792Zm0-10.208a4.054,4.054,0,0,0-1.077.161A2.035,2.035,0,0,1,8.328,11.59,4.074,4.074,0,1,0,12.25,8.583Z" transform="translate(0 -4.5)" fill="#00008b" />
                </svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 ">Nueva contraseña</span>
            <div class="relative w-full">
              <input
                class="input-bhi w-full z-0"
                :type="p02 ? 'password' : 'text'"
                value="pass2000@0444!!.com"
              >

              <div
                style="top:50%;transform:translateY(-50%);right:15px"
                class="absolute z-10 cursor-pointer"
                @click="p02 = !p02"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="16.333" viewBox="0 0 24.5 16.333">
                  <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M24.352,12.046A13.643,13.643,0,0,0,12.25,4.5a13.645,13.645,0,0,0-12.1,7.546,1.376,1.376,0,0,0,0,1.242,13.643,13.643,0,0,0,12.1,7.546,13.645,13.645,0,0,0,12.1-7.546A1.376,1.376,0,0,0,24.352,12.046Zm-12.1,6.746a6.125,6.125,0,1,1,6.125-6.125A6.125,6.125,0,0,1,12.25,18.792Zm0-10.208a4.054,4.054,0,0,0-1.077.161A2.035,2.035,0,0,1,8.328,11.59,4.074,4.074,0,1,0,12.25,8.583Z" transform="translate(0 -4.5)" fill="#00008b" />
                </svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 ">Repetir nueva contraseña</span>
            <div class="relative w-full">
              <input
                class="input-bhi w-full z-0"
                :type="p03 ? 'password' : 'text'"
                value="pass2000@0444!!.com"
              >

              <div
                style="top:50%;transform:translateY(-50%);right:15px"
                class="absolute z-10 cursor-pointer"
                @click="p03 = !p03"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="16.333" viewBox="0 0 24.5 16.333">
                  <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M24.352,12.046A13.643,13.643,0,0,0,12.25,4.5a13.645,13.645,0,0,0-12.1,7.546,1.376,1.376,0,0,0,0,1.242,13.643,13.643,0,0,0,12.1,7.546,13.645,13.645,0,0,0,12.1-7.546A1.376,1.376,0,0,0,24.352,12.046Zm-12.1,6.746a6.125,6.125,0,1,1,6.125-6.125A6.125,6.125,0,0,1,12.25,18.792Zm0-10.208a4.054,4.054,0,0,0-1.077.161A2.035,2.035,0,0,1,8.328,11.59,4.074,4.074,0,1,0,12.25,8.583Z" transform="translate(0 -4.5)" fill="#00008b" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mt-20 mb-16">
          <input class="w-5 h-5 mr-2" type="radio">
          <span class="text-base" style="color: #0099FF">He leído los términos y condiciones.</span>
        </div>

        <!-- btn -->
        <div class="text-center mb-32">
          <span class="bg-bhi-primary border-2 border-bhi-primary text-white rounded-3xl py-4 px-12 text-lg lg:text-xl hover:bg-white hover:text-bhi-primary outline-none cursor-pointer duration-300">
            Guardar cambios
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    password: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data: () => ({
    p01: true,
    p02: true,
    p03: true
  }),
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    close (e) {
      this.$nuxt.$emit('OVERLAY_DISABLED')

      if (e) {
        return this.$nuxt.$emit('EDIT_ACCOUNT_DISABLED', true)
      }
      this.$nuxt.$emit('EDIT_ACCOUNT_DISABLED')
    }
  }
}
</script>
<style lang="postcss" scoped>
.login__modal  {
  @apply relative w-full max-w-3xl bg-white rounded-3xl rounded-bl-none bg-top bg-no-repeat;
  background-image: url('/assets/images/body/bg-create.svg'), url('/assets/images/body/bg-create-3.svg'), url('/assets/images/body/bg-create-2.svg');
  background-position: left top, 97% bottom, bottom right;
  background-size: 100% auto, auto 18%, 100% auto;
  transition: .3s cubic-bezier(.25,.8,.25,1);
  animation: fadeIn 0.4s;
}
.recovery-text {
  color: #0099FF
}
</style>
