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
      <span class="text-4xl font-bold">Intinerario</span>

      <div class="btn-bhi-primary">
        Guardar cambios
      </div>
    </div>

    <!-- form -->
    <div class="mb-8">
      <div class="flex flex-wrap bg-card-gray rounded-3xl rounded-bl-none shadow-primary mb-8">
        <!-- left -->
        <div class="w-full lg:w-2/5">
          <div class="flex flex-col pl-10 pt-8 pr-6">
            <span class="text-xl text-bhi-secondary font-bold mb-3">Día</span>

            <input
              type="text"
              class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal"
              value="Primer Día"
            >
          </div>
        </div>

        <!-- rigth -->
        <div class="w-full lg:w-3/5 pb-10">
          <div class="flex flex-col pl-10 pt-8 pr-6">
            <span class="text-xl text-bhi-secondary font-bold mb-3">Día</span>

            <textarea
              class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal"
            >Salida con destino a VILLA CARLOS PAZ.</textarea>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap bg-card-gray rounded-3xl rounded-bl-none shadow-primary ">
        <!-- left -->
        <div class="w-full lg:w-2/5">
          <div class="flex flex-col pl-10 pt-8 pr-6">
            <span class="text-xl text-bhi-secondary font-bold mb-3">Día</span>

            <input
              type="text"
              class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal"
              value="Primer Día"
            >
          </div>
        </div>

        <!-- rigth -->
        <div class="w-full lg:w-3/5 pb-10">
          <div class="flex flex-col pl-10 pt-8 pr-6">
            <span class="text-xl text-bhi-secondary font-bold mb-3">Día</span>

            <textarea
              class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal"
            >Salida con destino a VILLA CARLOS PAZ.</textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- bnt -->
    <div class="flex justify-end mb-8">
      <div class="btn-bhi-primary py-2 pr-2 flex items-center">
        <span class="mr-4">Agregar día</span>

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
    <div class="bg-card-gray h-1 w-full mb-8" />

    <!-- slider -->
    <div class="flex flex-col mb-20">
      <span class="text-4xl font-bold mb-6">Imágenes de slider</span>

      <div class="flex flex-col lg:flex-row flex-wrap items-center">
        <!-- images -->
        <div class="lg:mr-5 flex items-center">
          <div
            v-for="(e, i) in 2"
            :key="i"
            class="w-40 h-40 relative rounded-md mr-2 last:mr-0 select-none"
          >
            <img class="rounded-md h-full w-full z-0" src="/assets/images/body/tours/02.jpg" alt="imagen viaje">

            <div class="absolute left-0 bottom-0 w-full z-10 cursor-pointer">
              <div class="text-center bg-red-700 text-white rounded-b-md">
                <span class="py-1 inline-block">Eliminar</span>
              </div>
            </div>
          </div>
        </div>

        <!-- btn -->
        <div class="btn-bhi-primary mt-10 lg:mt-0 py-2">
          Cargar imagen
        </div>
      </div>
    </div>

    <!-- excursiones opcionales -->
    <div class="flex flex-col mb-10">
      <span class="text-4xl font-bold mb-10">Excursiones opcionales</span>

      <div class="flex flex-col bg-card-gray rounded-3xl rounded-bl-none shadow-primary">
        <!-- title -->
        <span class="text-xl font-bold text-bhi-secondary mt-8 mb-6 pl-10">Excursión</span>

        <!-- item -->
        <div
          v-for="(e, i) in 6"
          :key="i"
          class="flex items-center px-10 mb-8 last::mb-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#09f" />
            <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(3.5 5)" fill="#fff" />
          </svg>

          <input
            type="text"
            class="ml-5 text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal w-full"
            placeholder="Ingrese aquí el nombre de la excursión"
          >
        </div>

        <!-- btn -->
        <div class="flex justify-end px-10 mb-10">
          <div
            v-if="addDay"
            class="btn-bhi-primary py-2 pr-2 flex items-center"
            @mouseover="addDay = false"
          >
            <span class="mr-4">Agregar excursiones</span>

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

          <div
            v-else
            class="btn-bhi-primary py-2 pr-2 flex items-center"
            @mouseleave="addDay = true"
          >
            <span class="mr-4">Agregar día</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
              <path id="Path_3" data-name="Path 3" d="M28,15.5A12.5,12.5,0,1,1,15.5,3,12.5,12.5,0,0,1,28,15.5Z" transform="translate(-3 -3)" fill="#00008b" />
              <g id="Group_818" data-name="Group 818">
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M18,12v6.852"
                  transform="translate(-5.5 -2.926)"
                  fill="none"
                  stroke="#fff"
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
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- divider -->
    <div class="bg-card-gray h-1 w-full mb-8" />

    <!-- slider -->
    <div class="flex flex-col mb-20">
      <span class="text-4xl font-bold mb-6">Imágenes de slider</span>

      <div class="flex flex-col lg:flex-row flex-wrap items-center overflow-x-scroll overflow-hidden lg:overflow-x-hidden">
        <!-- images -->
        <div class="lg:mr-5 flex items-center l">
          <div
            v-for="(e, i) in 3"
            :key="i"
            class="w-40 h-40 relative rounded-md mr-2 last:mr-0 select-none"
          >
            <img class="rounded-md h-full w-full z-0" src="/assets/images/body/tours/02.jpg" alt="imagen viaje">

            <div class="absolute left-0 bottom-0 w-full z-10 cursor-pointer">
              <div class="text-center bg-red-700 text-white rounded-b-md">
                <span class="py-1 inline-block">Eliminar</span>
              </div>
            </div>
          </div>
        </div>

        <!-- btn -->
        <div class="hidden lg:block btn-bhi-primary mt-10 lg:mt-0 py-2">
          Cargar imagen
        </div>
      </div>

      <!-- btn -->
      <div class="flex lg:hidden justify-center">
        <div class=" btn-bhi-primary mt-10 lg:mt-0 py-2">
          Cargar imagen
        </div>
      </div>
    </div>

    <!-- title -->
    <div class="title-bhi mb-10">
      Observaciones / Información adicional
    </div>

    <!-- form -->
    <div class="flex flex-col">
      <span class="font-bold text-bhi-secondary text-3xl mb-4">Título</span>

      <input
        type="text"
        class="text-base border border-gray-400 rounded-3xl rounded-bl-none outline-none px-4 font-normal w-full mb-4 py-2"
        placeholder="Ingrese aquí el nombre de la excursión"
      >

      <textarea
        style="height: 290px"
        class="text-base border px-4 border-gray-400 rounded-3xl rounded-bl-none outline-none font-normal w-full mb-4 py-2 italic"
        placeholder="Ingrese aquí las observaciones y/o información adicional"
      />
    </div>

    <!-- btn -->
    <div class="flex justify-center my-10 lg:my-32">
      <div class="btn-bhi-primary">
        Guardar Cambios
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['auth', 'admin'],
  data: () => ({
    addDay: true
  })
}
</script>
