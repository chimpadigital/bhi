<template>
  <div class="container">
    <!-- back -->
    <div class="mb-16 mt-20 inline-block cursor-pointer">
      <div class="flex items-center" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <circle
            id="Ellipse_111"
            data-name="Ellipse 111"
            cx="15"
            cy="15"
            r="15"
            fill="#00008b"
          />
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
        </svg>

        <span class="ml-4 italic text-lg">Volver a Información del viaje</span>
      </div>
    </div>

    <!-- title - btn -->
    <div class="flex flex-col lg:flex-row justify-between items-center mb-8">
      <span class="text-4xl font-bold">Excursiones</span>

      <div class="btn-bhi-primary">
        Guardar cambios
      </div>
    </div>

    <!-- form -->
    <div class="flex flex-wrap lg:flex-no-wrap -mx-4 mb-12">
      <!-- left -->
      <div class="w-full px-4">
        <div class="flex flex-col flex-wrap bg-card-gray rounded-3xl rounded-bl-none shadow-primary mb-8 p-10">
          <!-- title -->
          <span class="text-xl font-bold text-bhi-secondary mb-4">Título</span>

          <!-- input -->
          <textarea
            type="text"
            class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal pb-5 mb-8 pt-1"
          >SAN MARTIN DE LOS ANDES CAMINO DE LOS 7 LAGOS, VISITANDO VILLA LA ANGOSTURA</textarea>

          <!-- title -->
          <span class="text-xl font-bold text-bhi-secondary mb-4">Descripción</span>

          <!-- input -->
          <textarea
            type="text"
            class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal pb-5 h-tetarea pt-1"
          >- La programación del Itinerario queda sujeta a condiciones climáticas.
- Revise sus pertenencias, la empresa no se responsabiliza por la pérdida, extravío u olvido de las mismas en los servicios de transporte y hotelería.
- No incluye excursiones opcionales, ni entradas a Parques Nacionales, Provinciales, Museos y Reservas Naturales.
- Los servicios opcionales una vez contratados no tendrán ningún tipo de reembolso por cancelación por parte del pasajero.
NO INCLUYE CUBIERTO EN MINA CLAVERO VIGENCIA: HASTA - TARIFAS SUJETAS A MODIFICACIONES SIN PREVIO AVISO.</textarea>
        </div>
      </div>

      <!-- rigth -->
      <div class="w-full lg:w-6/12 flex justify-center lg:justify-end px-4">
        <div
          style="max-width: 408px; max-height: 349px"
          class="relative w-full h-full "
        >
          <img class="h-full w-full rounded-3xl" src="/assets/images/body/bg-ex-card-1.jpg" alt="imagen tour">

          <div
            class="absolute"
            style="top: 20px; right: 10px"
          >
            <div class="btn-bhi-primary py-2 flex items-center pr-4">
              <span class="mr-4">Cargar imagen</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="18.287" height="16.252" viewBox="0 0 18.287 16.252">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M12.782,2.645l2.864,2.864a.31.31,0,0,1,0,.438L8.712,12.881l-2.946.327a.617.617,0,0,1-.683-.683L5.41,9.579,8.878,6.111l3.466-3.466A.31.31,0,0,1,12.782,2.645Zm5.143-.727L16.375.369a1.242,1.242,0,0,0-1.752,0L13.5,1.493a.31.31,0,0,0,0,.438l2.864,2.864a.31.31,0,0,0,.438,0l1.124-1.124a1.242,1.242,0,0,0,0-1.752Zm-5.734,9.077v3.232H2.032V4.068h7.3a.39.39,0,0,0,.27-.111l1.27-1.27a.381.381,0,0,0-.27-.651H1.524A1.524,1.524,0,0,0,0,3.56V14.735a1.524,1.524,0,0,0,1.524,1.524H12.7a1.524,1.524,0,0,0,1.524-1.524V9.725a.382.382,0,0,0-.651-.27l-1.27,1.27A.39.39,0,0,0,12.191,10.995Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- form -->
    <div class="flex flex-wrap lg:flex-no-wrap -mx-4 mb-12">
      <!-- left -->
      <div class="w-full px-4">
        <div class="flex flex-col flex-wrap bg-card-gray rounded-3xl rounded-bl-none shadow-primary mb-8 p-10">
          <!-- title -->
          <span class="text-xl font-bold text-bhi-secondary mb-4">Título</span>

          <!-- input -->
          <textarea
            type="text"
            class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal pb-5 mb-8 pt-1"
          >VOLCÁN LANÍN</textarea>

          <!-- title -->
          <span class="text-xl font-bold text-bhi-secondary mb-4">Descripción</span>

          <!-- input -->
          <textarea
            type="text"
            class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal pb-5 h-tetarea pt-1"
          >Saldremos de San Martín de los Andes por la mañana. Al llegar a Junín de los Andes realizaremos un City Tour por la ciudad visitando los talleres de artesanos, locales mapuches y la iglesia reformada al estilo araucano, donde se rinde culto a la virgen de las Nieves (diseñada integrando la fe y las creencias mapuches y cristianas). Luego continuaremos la excursión hasta obtener una vista de los lagos Huechulafquen y Paimún con espectaculares miradores hacia la cordillera, donde encontraremos una inolvidable vista del Volcán Lanín y sus glaciares eternos.</textarea>
        </div>
      </div>

      <!-- rigth -->
      <div class="w-full lg:w-6/12 flex justify-center lg:justify-end px-4">
        <div
          style="max-width: 408px; max-height: 349px"
          class="relative w-full h-full"
        >
          <img class="h-full w-full rounded-3xl" src="/assets/images/body/bg-ex-card-1.jpg" alt="imagen tour">

          <div
            class="absolute"
            style="top: 20px; right: 10px"
          >
            <div class="btn-bhi-primary py-2 flex items-center pr-4">
              <span class="mr-4">Cargar imagen</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="18.287" height="16.252" viewBox="0 0 18.287 16.252">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M12.782,2.645l2.864,2.864a.31.31,0,0,1,0,.438L8.712,12.881l-2.946.327a.617.617,0,0,1-.683-.683L5.41,9.579,8.878,6.111l3.466-3.466A.31.31,0,0,1,12.782,2.645Zm5.143-.727L16.375.369a1.242,1.242,0,0,0-1.752,0L13.5,1.493a.31.31,0,0,0,0,.438l2.864,2.864a.31.31,0,0,0,.438,0l1.124-1.124a1.242,1.242,0,0,0,0-1.752Zm-5.734,9.077v3.232H2.032V4.068h7.3a.39.39,0,0,0,.27-.111l1.27-1.27a.381.381,0,0,0-.27-.651H1.524A1.524,1.524,0,0,0,0,3.56V14.735a1.524,1.524,0,0,0,1.524,1.524H12.7a1.524,1.524,0,0,0,1.524-1.524V9.725a.382.382,0,0,0-.651-.27l-1.27,1.27A.39.39,0,0,0,12.191,10.995Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- btn -->
    <div class="flex justify-center lg:justify-end mb-8">
      <div class="btn-bhi-primary py-2 flex items-center pr-4">
        <span class="mr-4">Agregar excursión</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
          <path id="Path_3" data-name="Path 3" d="M28,15.5A12.5,12.5,0,1,1,15.5,3,12.5,12.5,0,0,1,28,15.5Z" transform="translate(-3 -3)" fill="#fff" />
          <g id="Group_818" data-name="Group 818">
            <path
              id="Path_4"
              data-name="Path 4"
              d="M18,12v6.852"
              transform="translate(-5.5 -2.926)"
              fill="none"
              stroke="#00008b"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M12,18h6.852"
              transform="translate(-2.926 -5.5)"
              fill="none"
              stroke="#00008b"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </g>
        </svg>
      </div>
    </div>

    <!-- divider -->
    <div class="bg-card-gray h-1 w-full mb-16 lg:mb-32" />

    <div class="flex justify-center mb-6 lg:mb-40">
      <div class="btn-bhi-primary">
        Guardar cambios
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['auth', 'admin']
}
</script>
<style lang="postcss" scoped>
.h-tetarea {
  height: 291px;
}
</style>
