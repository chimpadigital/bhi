<template>
  <div>
    <Banner />

    <div class="container-excursiones">
      <!-- title -->
      <div class="container px-4 lg:px-0">
        <div class="title-bhi mt-16 mb-20">
          Información de Excursiones
        </div>
      </div>

      <!-- block 1 -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 flex justify-end">
          <div class="container-middle shadow-primary">
            <div class="bg-card-gray w-full h-full px-4 lg:px-0">
              <div
                class="relative w-full h-full flex justify-center items-center bg-center bg-cover bg-blue-color rounded-3xl rounded-bl-none px-6"
                :style="{ backgroundImage: 'url(' + require('~/assets/images/body/bg-ex-card-1.jpg') }"
              >
                <p class="text-white text-card-title z-10 font-bold text-center py-16">
                  San Martín de Los Andes
                  Camino de Los 7 Lagos
                  Visitando Villa La Angostura
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 bg-card-gray shadow-primary">
          <div class="container-middle py-10 lg:py-20 px-4 lg:pl-12">
            <p class="text-base lg:text-xl">
              Recorrido con amplia variedad en paisajes que nos permitirá conocer Villa La Angostura, Ríos, Arroyos como así también los Lagos que conectan a San Carlos de Bariloche con la hermosa Cuidad de San Martín de los Andes a través de la Ruta 40 o más conocida como Camino de los Siete Lagos ( Lago Correntoso, Lago Espejo, Lago Escondido, Lago Villarino, Lago Falkner, Lago Machonico y Lago Lacar ). Durante el circuito haremos distintas paradas para disfrutar de los maravillosos paisajes.
            </p>
          </div>
        </div>
      </div>

      <!-- block 2 -->
      <div class="flex flex-wrap flex-row-reverse mt-16 lg:mt-24">
        <div class="w-full lg:w-1/2 flex">
          <div class="container-middle">
            <div class="bg-card-gray w-full h-full lg:rounded-3xl lg:rounded-bl-none shadow-primary px-4 lg:px-0">
              <div
                class="relative w-full h-full flex justify-center items-center bg-center bg-cover bg-blue-color rounded-3xl rounded-bl-none px-6"
                :style="{ backgroundImage: 'url(' + require('~/assets/images/body/bg-ex-card-2.jpg') }"
              >
                <p class="text-white text-card-title z-10 font-bold text-center py-16">
                  Volcán Lanín
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 bg-card-gray shadow-primary flex justify-end">
          <div class="container-middle py-10 lg:py-20 px-4 lg:pr-12">
            <p class="text-base lg:text-xl">
              Saldremos de San Martín de los Andes por la mañana. Al llegar a Junín de los Andes realizaremos un City Tour por la ciudad visitando los talleres de artesanos, locales mapuches y la iglesia reformada al estilo araucano, donde se rinde culto a la virgen de las Nieves (diseñada integrando la fe y las creencias mapuches y cristianas). Luego continuaremos la excursión hasta obtener una vista de los lagos Huechulafquen y Paimún con espectaculares miradores hacia la cordillera, donde encontraremos una inolvidable vista del Volcán Lanín y sus glaciares eternos.
            </p>
          </div>
        </div>
      </div>

      <!-- block 3 -->
      <div class="flex flex-wrap mt-16 lg:mt-24">
        <div class="w-full lg:w-1/2 flex justify-end">
          <div class="container-middle shadow-primary">
            <div class="bg-card-gray w-full h-full px-4 lg:px-0">
              <div
                class="relative w-full h-full flex justify-center items-center bg-center bg-cover bg-blue-color rounded-3xl rounded-bl-none px-6"
                :style="{ backgroundImage: 'url(' + require('~/assets/images/body/bg-ex-card-3.png') }"
              >
                <p class="text-white text-card-title z-10 font-bold text-center py-16">
                  City Tour, Quila Quina y
                  Mirador Arrayanes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 bg-card-gray shadow-primary">
          <div class="container-middle py-10 lg:py-20 px-4 lg:pl-12">
            <p class="text-base lg:text-xl">
              Saldremos del hotel recorriendo las arterias principales de la ciudad como son calle Villegas y av San Martín. Acompañados por nuestro guía de parque nacional Lanín visitaremos su muelle principal. Luego emprenderemos nuestro camino a el paraje quila quina, paraje que se encuentra dentro del parque. Atravesaremos comunidades mapuches visitando el Arroyo Grande, un hermoso salto de agua que se halla entre gigantescas rocas al que se puede acceder por una pasarela señalizada.
            </p>
          </div>
        </div>
      </div>

      <!-- block 4 -->
      <div class="flex flex-wrap flex-row-reverse mt-16 lg:mt-24">
        <div class="w-full lg:w-1/2 flex">
          <div class="container-middle">
            <div class="bg-card-gray w-full h-full lg:rounded-3xl lg:rounded-bl-none shadow-primary px-4 lg:px-0">
              <div
                class="relative w-full h-full flex justify-center items-center bg-center bg-cover bg-blue-color rounded-3xl rounded-bl-none px-6"
                :style="{ backgroundImage: 'url(' + require('~/assets/images/body/bg-ex-card-4.png') }"
              >
                <p class="text-white text-card-title z-10 font-bold text-center py-16">
                  Pucón (Chile)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 bg-card-gray shadow-primary flex justify-end">
          <div class="container-middle py-10 lg:py-20 px-4 lg:pr-12">
            <p class="text-base lg:text-xl">
              Saldremos de San Martín de los Andes, para tomar la ruta nacional No 234, pasando por la ciudad de Junín de los Andes, empalmando luego con la ruta provincial, la No 60, bordeando el río Malleo; y con el marco típico de estepa patagónica, comenzaremos a ingresar en un gran bosque de Pehuenes (araucarias araucanas), que se comparte entre el Parque Nacional Lanín y el Parque Nacional Villarrica de Chile. Llegaremos al cruce fronterizo, Paso Internacional Tromen o Mamuil Malal, luego de hacer los trámites migratorios en ambos puestos fronterizos, continuaremos viaje por una zona de paisajes, conformados por lagos, ríos e imponentes montañas.
            </p>
          </div>
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
  }
}
</script>
<style lang="postcss" scoped>
.container-excursiones {
  @apply bg-no-repeat relative bg-left-top pb-40;
  background-image: url('/assets/images/body/bg-tour.svg'), url('/assets/images/body/bg-intinerario.svg');
  background-size: 100% auto;
  background-position: left top, left bottom;
}
.text-card-title {
  font-size: 2.1rem;
}
.bg-blue-color {
  box-shadow: inset 0 0 0 1000px rgba(0, 153, 255, 0.4);
}

@media (max-width: 1166px) {
  .text-card-title {
    @apply text-2xl
  }
}
</style>
