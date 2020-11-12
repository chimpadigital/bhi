<template>
  <div>
    <Banner />

    <div class="body-reservar">
      <!-- title -->
      <div class="container px-4 lg:px-0 mb-16">
        <div class="pt-12">
          <div class="title-bhi">
            Completar datos de Pasajeros
          </div>

          <p class="text-xl mt-1 italic">
            Ingresá los datos completos de cada pasajero.
          </p>
        </div>
      </div>

      <!-- card -->
      <div
        v-for="(e, i) in 4"
        :key="i"
        class="flex flex-wrap pb-32 last:pb-0"
      >
        <!-- left -->
        <div class="w-full lg:w-1/2 flex justify-end">
          <div class="container-middle rounded-tl-3xl bg-card-gray lg:pb-16 shadow-primary">
            <!-- title -->
            <div class="bg-bhi-secondary text-white text-xl inline-block py-4 px-12 rounded-3xl rounded-bl-none">
              Pasajero 0{{ i + 1 }}
            </div>

            <!-- form -->
            <div class="mt-16 px-4 lg:pl-20">
              <div class="mb-4">
                <p class="text-xl font-semibold mb-4">
                  Nombre completo
                </p>
                <input class="input-bhi w-full" type="text" placeholder="Ingrese su nombre completo">
              </div>

              <div class="mb-4">
                <p class="text-xl font-semibold mb-4">
                  Teléfono
                </p>
                <input class="input-bhi w-full" type="text" placeholder="Ingrese su número de teléfono">
              </div>

              <div>
                <p class="text-xl font-semibold mb-4">
                  Correo Electrónico
                </p>
                <input class="input-bhi w-full" type="text" placeholder="Ingrese su correo electrónico">
              </div>
            </div>
          </div>
        </div>

        <!-- rigth -->
        <div class="w-full lg:w-1/2 bg-card-gray pb-8 lg:pb-0 shadow-r">
          <div class="container-middle">
            <!-- form -->
            <div class="mt-4 lg:mt-32 px-4 lg:pl-20">
              <div class="mb-4">
                <p class="text-xl font-semibold mb-4">
                  Tipo de Documento
                </p>

                <div class="relative w-full lg:max-w-xs">
                  <select class="input-bhi w-full cursor-pointer appearance-none">
                    <option disabled selected>
                      DNI
                    </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>

                  <div class="pointer-events-none cursor-pointer absolute inset-y-0 right-0 flex items-center px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                      <g id="Boton_volver" data-name="Boton volver" transform="translate(0 30) rotate(-90)">
                        <path id="Path_329" data-name="Path 329" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" fill="#00008b" />
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
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <p class="text-xl font-semibold mb-4">
                  N° de Documento
                </p>
                <input class="input-bhi w-full" type="text" placeholder="Ingrese su número de documento">
              </div>

              <div>
                <p class="text-xl font-semibold mb-4">
                  Tipo de habitación
                </p>

                <div class="flex">
                  <div class="w-1/2">
                    <div class="flex items-center">
                      <div class="btn-bhi-control mr-6" />
                      <span class="text-xl font-normal">Individual</span>
                    </div>

                    <div class="flex items-center mt-1">
                      <div class="btn-bhi-control-select mr-6" />
                      <span class="text-xl font-normal">Doble</span>
                    </div>
                  </div>

                  <div class="w-1/2">
                    <div class="flex items-center">
                      <div class="btn-bhi-control mr-6" />
                      <span class="text-xl font-normal">Triple</span>
                    </div>

                    <div class="flex items-center mt-1">
                      <div class="btn-bhi-control mr-6" />
                      <span class="text-xl font-normal">Cuadruple</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- btn -->
      <div class="text-center pb-32">
        <a class="btn-bhi-primary cursor-pointer" @click="confirm">
          Confirmar
        </a>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Banner from '~/components/panel/tours/Banner'
import Footer from '~/components/home/Footer'
export default {
  components: {
    Banner, Footer
  },
  methods: {
    confirm () {
      window.scrollTo(0, 0)
      this.$nuxt.$emit('CONFIRMATION_ACTIVE')
      this.$nuxt.$emit('OVERLAY_ACTIVE')
    }
  }
}
</script>
<style lang="postcss" scoped>
.body-reservar {
  @apply bg-no-repeat relative;
  background-image: url('/assets/images/body/bg-tour.svg'), url('/assets/images/body/bg-tour-2.svg');
  background-size: 100% auto, 100% auto;
  background-position: top left, left 103.2%;
}
.btn-bhi-control-select,
.btn-bhi-control {
  @apply select-none flex justify-center items-center rounded-full border border-bhi-primary cursor-pointer text-10;
  width: 24px;
  height: 24px;
}
.btn-bhi-control {
  @apply bg-transparent text-bhi-primary
}
.btn-bhi-control-select {
  @apply bg-bhi-primary text-white;
}
.btn-bhi-control:hover {
  @apply text-white  bg-bhi-primary
}
.btn-bhi-control-select:hover {
  @apply text-black  bg-transparent
}
</style>
