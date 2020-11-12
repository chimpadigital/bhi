<template>
  <div>
    <Banner />

    <div class="container-intinerario">
      <div class="container px-4 lg:px-0">
        <!-- title -->
        <div class="title-bhi mt-12 mb-16">
          Intinerario
        </div>

        <!-- 1 block -->
        <div class="flex flex-wrap shadow-primary rounded-3xl rounded-bl-none relative">
          <!-- arrow -->
          <div
            class="absolute cursor-pointer select-none btn-next-abs"
            :class="{'btn-rotate': !one}"
            @click="one = !one"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <g id="Boton_volver" data-name="Boton volver" transform="translate(40 40) rotate(180)">
                <path id="Path_328" data-name="Path 328" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#09f" />
                <g id="Group_525" data-name="Group 525" transform="translate(16.832 15)">
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x1="5.167"
                    y2="4.833"
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
                    transform="translate(0 4.833)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </div>

          <!-- left -->
          <div
            class="w-full lg:w-1/2 rounded-tl-3xl bg-card-gray"
          >
            <!-- 1 bg -->
            <div
              v-if="
                one"
              class="w-full h-full animation-fade"
              style="animation: fadeIn 0.4s;"
            >
              <img class="w-full h-full rounded-3xl rounded-bl-none animation-fade" :src="require('~/assets/images/body/bg-intinerario.png')" alt="intinerario">
            </div>

            <!-- 2 bg -->

            <img v-else class="w-full h-full rounded-3xl rounded-bl-none animation-fade" :src="require('~/assets/images/body/tours/07.png')" alt="intinerario">
          </div>

          <!-- rigth -->
          <div class="w-full lg:w-1/2 px-10 pt-10 rounded-r-3xl bg-card-gray">
            <!-- 1 tap -->
            <div class="mb-10">
              <!-- 1 day -->
              <div class="text-base lg:text-xl mb-6">
                <span class="text-bhi-secondary font-bold inline-block mb-6">PRIMER DÍA:</span>
                <p>
                  Salida con destino a VILLA CARLOS PAZ.
                </p>
              </div>

              <!-- 2 day -->
              <div class="text-base lg:text-xl mb-6">
                <span class="text-bhi-secondary font-bold inline-block mb-6">SEGUNDO DÍA:</span>
                <p>
                  Arribo en horas del mediodía. Almuerzo. Tarde libre. Recomendamos
                  <br>
                  opcional CITY TOUR Y BAR DE HIELO. Cena.
                </p>
              </div>

              <!-- 3 day -->
              <div class="text-base lg:text-xl mb-6">
                <span class="text-bhi-secondary font-bold inline-block mb-6">TERCER DÍA:</span>
                <p>
                  Desayuno. Almuerzo. Por la tarde recomendamos excursión opcional a CAPILLA DEL MONTE. Cena.
                </p>
              </div>

              <!-- 4 day -->
              <div class="text-base lg:text-xl">
                <span class="text-bhi-secondary font-bold inline-block mb-6">CUARTO DÍA:</span>
                <p>
                  Desayuno. Almuerzo. Recomendamos excursión opcional de día entero a MINA CLAVERO, POR EL CAMINO DE LAS ALTAS CUMBRES. Cena.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- title -->
        <div class="title-bhi mt-20 mb-16">
          Excursiones Opcionales
        </div>

        <!-- 2 block -->
        <div class="flex flex-wrap relative shadow-primary">
          <!-- arrow -->
          <div
            class="absolute cursor-pointer select-none btn-next-abs z-20"
            :class="{'btn-rotate': !two}"
            @click="two = !two"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <g id="Boton_volver" data-name="Boton volver" transform="translate(40 40) rotate(180)">
                <path id="Path_328" data-name="Path 328" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#09f" />
                <g id="Group_525" data-name="Group 525" transform="translate(16.832 15)">
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x1="5.167"
                    y2="4.833"
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
                    transform="translate(0 4.833)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div class="w-full lg:w-1/2 text-base lg:text-xl pl-10 py-24 bg-card-gray rounded-l-3xl">
            <div class="flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_579" data-name="Group 579" transform="translate(-61 -655)">
                  <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(61 655)" fill="#09f" />
                  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(64.5 660)" fill="#fff" />
                </g>
              </svg>

              <span class="inline-block ml-8">CAPILLA DEL MONTE
              </span>
            </div>

            <div class="flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_579" data-name="Group 579" transform="translate(-61 -655)">
                  <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(61 655)" fill="#09f" />
                  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(64.5 660)" fill="#fff" />
                </g>
              </svg>

              <span class="inline-block ml-8">CUMBRESITA
              </span>
            </div>

            <div class="flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_579" data-name="Group 579" transform="translate(-61 -655)">
                  <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(61 655)" fill="#09f" />
                  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(64.5 660)" fill="#fff" />
                </g>
              </svg>

              <div class="flex flex-col ml-8">
                <span class="inline-block">MINA CLAVERO</span>

                <span class="text-base italic">Con asado incluido.
                </span>
              </div>
            </div>

            <div class="flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_579" data-name="Group 579" transform="translate(-61 -655)">
                  <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(61 655)" fill="#09f" />
                  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(64.5 660)" fill="#fff" />
                </g>
              </svg>

              <span class="inline-block ml-8">PAQUETE DE EXCURSIONES OPCIONALES DIURNAS
              </span>
            </div>

            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_579" data-name="Group 579" transform="translate(-61 -655)">
                  <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(61 655)" fill="#09f" />
                  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(64.5 660)" fill="#fff" />
                </g>
              </svg>

              <div class="flex flex-col ml-8">
                <span class="inline-block">CITY TOUR Y BAR DE HIELO</span>

                <span class="text-base italic">Incluye entrada.</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <!-- 1 bg -->
            <div
              v-if="
                two"
              class="w-full h-full animation-fade"
              style="animation: fadeIn 0.4s;"
            >
              <img class="w-full h-full rounded-3xl rounded-bl-none animation-fade" :src="require('~/assets/images/body/tours/05.jpg')" alt="intinerario">
            </div>

            <!-- 2 bg -->

            <img v-else class="w-full h-full rounded-3xl rounded-bl-none animation-fade" :src="require('~/assets/images/body/tours/06.jpg')" alt="intinerario">
          </div>
        </div>

        <!-- observaciones -->
        <!-- title -->
        <p class="text-bhi-secondary text-3xl mt-24 font-bold">
          Observaciones
        </p>

        <div class="mt-8 text-base lg:text-xl flex flex-col">
          <span class="mb-6">- Régimen de comidas estará en función de la opción hotelera contratada.
          </span>

          <span class="mb-6">- La programación del Itinerario queda sujeta a condiciones climáticas.</span>

          <span class="mb-6">- Revise sus pertenencias, la empresa no se responsabiliza por la pérdida, extravío u olvido de las mismas en los servicios de transporte y hotelería.</span>

          <span class="mb-6">- No incluye excursiones opcionales, ni entradas a Parques Nacionales, Provinciales, Museos y Reservas Naturales.</span>

          <span class="mb-6">- Los servicios opcionales una vez contratados no tendrán ningún tipo de reembolso por cancelación por parte del pasajero.</span>

          <span>NO INCLUYE CUBIERTO EN MINA CLAVERO VIGENCIA: HASTA - TARIFAS SUJETAS A MODIFICACIONES SIN PREVIO AVISO.</span>
        </div>
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
  data: () => ({
    one: true,
    two: true
  })
}
</script>
<style lang="postcss" scoped>
.container-intinerario {
  @apply bg-no-repeat relative bg-left-top pb-24;
  background-image: url('/assets/images/body/bg-tour.svg'), url('/assets/images/body/bg-intinerario.svg');
  background-size: 100% auto;
  background-position: left top, left bottom;
}
.btn-next-abs {
  top: 50%;
  transform: translateY(-50%);
  right: -20px;
  transition: 0.3s;
}
.btn-rotate {
  transform: translateY(-50%) rotate(180deg);
}

</style>
