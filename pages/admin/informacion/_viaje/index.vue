<template>
  <div v-if="viaje">
    <div class="container px-4 lg:px-0 mb-10">
      <!-- back -->
      <div class="mb-10 mt-20 inline-block cursor-pointer">
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

          <span class="ml-4 italic text-lg">Volver</span>
        </div>
      </div>

      <!-- input name -->
      <div class="mb-20 flex flex-wrap justify-between items-center">
        <div class="w-full lg:w-3/5">
          <div class="relative">
            <input type="text" class="input__name text-2xl lg:text-5xl" :value="viaje.name">

            <div class="absolute right-0" style="top: 50%; transform: translateY(-50%)">
              <svg xmlns="http://www.w3.org/2000/svg" width="40.935" height="36.379" viewBox="0 0 40.935 36.379">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M28.612,5.913l6.41,6.41a.7.7,0,0,1,0,.981L19.5,28.825l-6.6.732a1.382,1.382,0,0,1-1.528-1.528l.732-6.6L27.631,5.913A.7.7,0,0,1,28.612,5.913ZM40.125,4.285,36.656.817a2.779,2.779,0,0,0-3.923,0L30.218,3.333a.7.7,0,0,0,0,.981l6.41,6.41a.7.7,0,0,0,.981,0l2.516-2.516a2.779,2.779,0,0,0,0-3.923ZM27.29,24.6v7.235H4.548V9.1H20.88a.874.874,0,0,0,.6-.249l2.843-2.843a.853.853,0,0,0-.6-1.457H3.411A3.412,3.412,0,0,0,0,7.959V32.975a3.412,3.412,0,0,0,3.411,3.411H28.427a3.412,3.412,0,0,0,3.411-3.411V21.761a.854.854,0,0,0-1.457-.6L27.539,24A.874.874,0,0,0,27.29,24.6Z" transform="translate(0 -0.007)" fill="#09f" />
              </svg>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5 lg:text-right mt-10 lg:mt-0">
          <a class="btn-bhi-primary">
            Guardar
          </a>
        </div>
      </div>

      <!-- images -->
      <div class="flex flex-col lg:flex-row flex-wrap items-center mb-20">
        <!-- images -->
        <div class="mr-5 flex items-center overscroll-contain">
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
        <div class="btn-bhi-primary mt-10 lg:mt-0">
          Cargar imagen
        </div>
      </div>

      <!-- title -->
      <div class="title-bhi">
        Información del viaje
      </div>
    </div>

    <!-- divider - dual -->
    <div class="flex flex-wrap">
      <!-- left -->
      <div class="w-full lg:w-1/2 flex justify-end mb-10 lg:mb-0">
        <div class="container-middle">
          <!-- inputs edit -->
          <div class="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path id="Rectangle_333" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#09f" />
              <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(3.5 5)" fill="#fff" />
            </svg>

            <p class="flex-1 mx-5 text-xl border-b border-bhi-secondary pb-2">
              Salida desde Bahia Blanca
            </p>

            <div class="btn-bhi-primary btn__edit">
              <span class="mr-2">Editar</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>

          <div class="flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path id="Rectangle_335" data-name="Rectangle 335" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#09f" />
              <path id="Icon_awesome-bed" data-name="Icon awesome-bed" d="M6.875,10.625A3.125,3.125,0,1,0,3.75,7.5,3.129,3.129,0,0,0,6.875,10.625Zm13.75-5h-8.75a.625.625,0,0,0-.625.625v5.625H2.5V3.75a.625.625,0,0,0-.625-.625H.625A.625.625,0,0,0,0,3.75V17.5a.625.625,0,0,0,.625.625h1.25A.625.625,0,0,0,2.5,17.5V15.625h20V17.5a.625.625,0,0,0,.625.625h1.25A.625.625,0,0,0,25,17.5V10A4.375,4.375,0,0,0,20.625,5.625Z" transform="translate(8 9.875)" fill="#fff" />
            </svg>

            <p class="mx-5 text-xl border-b border-bhi-secondary pb-2">
              03
            </p>
            <p class="ml-3 mr-8 text-xl">
              noches
            </p>

            <div class="btn-bhi-primary btn__edit">
              <span class="mr-2">Editar</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>

          <div class="flex items-center">
            <p class="flex-1 ml-2 text-base italic border-b border-bhi-secondary pb-2">
              Traslados - Media pensión - Coordinador - Seguro Medíco
            </p>

            <div class="btn-bhi-primary btn__edit">
              <span class="mr-2">Editar</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- rigth -->
      <div class="w-full lg:w-1/2 pl-4 lg:pl-24 lg:-mt-12">
        <div class="w-full bg-bhi-secondary rounded-tl-3xl pb-16 lg:-mt-8 card__information_tour shadow-secondary">
          <div class="container-middle mx-auto lg:mx-0">
            <!-- title -->
            <div class="bg-white inline-flex items-center rounded-3xl rounded-bl-none pr-2">
              <span class="text-bhi-primary px-12 py-3 font-bold text-xl">Precio por adulto</span>

              <svg
                id="Group_591"
                data-name="Group 591"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <path id="Path_327" data-name="Path 327" d="M20,0a20,20,0,0,1,0,40H0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
                <path id="Icon_simple-cashapp" data-name="Icon simple-cashapp" d="M24.573,3.615A5.313,5.313,0,0,0,21.4.437,16.176,16.176,0,0,0,16.271,0H8.708A16.8,16.8,0,0,0,3.6.417,5.312,5.312,0,0,0,.427,3.6,16.443,16.443,0,0,0,0,8.708v7.573a16.8,16.8,0,0,0,.417,5.1,5.312,5.312,0,0,0,3.177,3.177,16.443,16.443,0,0,0,5.1.427h7.583a16.767,16.767,0,0,0,5.1-.417,5.313,5.313,0,0,0,3.187-3.188,16.443,16.443,0,0,0,.427-5.1V8.729a16.482,16.482,0,0,0-.427-5.115ZM18.146,8.437l-.969.969a.521.521,0,0,1-.7.01,5.208,5.208,0,0,0-3.354-1.229c-1.01,0-2.021.333-2.021,1.26s1.083,1.25,2.333,1.719c2.187.729,4,1.646,4,3.792,0,2.333-1.812,3.938-4.771,4.115l-.271,1.25a.51.51,0,0,1-.5.406H10.031l-.094-.01a.521.521,0,0,1-.4-.615l.292-1.323a6.812,6.812,0,0,1-3-1.635v-.01a.5.5,0,0,1,0-.708l1.042-1.01a.51.51,0,0,1,.7,0A5.037,5.037,0,0,0,12.1,16.792c1.354,0,2.26-.573,2.26-1.479s-.917-1.146-2.646-1.792c-1.833-.656-3.573-1.583-3.573-3.75,0-2.521,2.094-3.75,4.573-3.865l.26-1.281a.5.5,0,0,1,.5-.4h1.854l.1.01a.5.5,0,0,1,.385.594L15.542,6.26a7.818,7.818,0,0,1,2.583,1.448l.021.021a.5.5,0,0,1,0,.708Z" transform="translate(8 8)" fill="#fff" />
              </svg>
            </div>

            <!-- information -->
            <div class="mt-16 ml-12">
              <div class="inline-flex flex-col text-white w-full">
                <span class="text-base text-center lg:text-left">Habitación Individual</span>

                <div class="flex flex-col lg:flex-row items-center mt-3">
                  <span class="text-4xl font-bold lg:mr-4 border border-white rounded-3xl lg:pl-8 lg:pr-20 pl-8 pr-8">9.000</span>
                  <span class="text-3xl font-bold lg:mr-10">AR$</span>

                  <div class="btn-bhi-primary btn__edit">
                    <span class="mr-2">Editar</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                      <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
                    </svg>
                  </div>
                </div>

                <span class="text-base mt-6 text-center lg:text-left">Habitación doble</span>

                <div class="flex flex-col lg:flex-row items-center mt-3">
                  <span class="text-4xl font-bold mr-4 border border-white rounded-3xl lg:pl-8 lg:pr-20 pl-8 pr-8">6.000</span>
                  <span class="text-3xl font-bold lg:mr-10">AR$</span>

                  <div class="btn-bhi-primary btn__edit">
                    <span class="mr-2">Editar</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                      <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2 container -->
    <div class="container mt-8 mb-16 lg:mb-32">
      <!-- btns -->
      <div class="container flex flex-wrap mt-10 lg:mt-0 px-4 lg:px-0 mb-12">
        <div class="w-full lg:w-1/2" />
        <div class="w-full lg:w-1/2 lg:pl-24">
          <nuxt-link
            :to="`${$route.path}/intinerario`"
            class="btn-bhi-secondary-outline lg:mr-12 block lg:inline-block"
          >
            Cargar intinerario
          </nuxt-link>
          <nuxt-link
            :to="`${$route.path}/excursiones`"
            class="btn-bhi-secondary-outline block lg:inline-block mt-4 lg:mt-0"
          >
            Cargar excursiones
          </nuxt-link>
        </div>
      </div>

      <!-- pasos 1-2 -->
      <div class="flex flex-wrap lg:flex-no-wrap -mx-8 mb-20">
        <!-- left -->
        <div class="w-full lg:w-1/2 mx-8">
          <div class="container-middle h-full bg-bhi-secondary rounded-3xl rounded-bl-none shadow-primary">
            <!-- title -->
            <div class="bg-white inline-flex items-center rounded-3xl rounded-bl-none pr-2 shadow-secondary">
              <span class="text-bhi-primary px-12 py-3 font-bold text-xl">Paso 1 - Pasajeros</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_584" data-name="Group 584" transform="translate(-424 -1543)">
                  <path id="Path_326" data-name="Path 326" d="M20,0a20,20,0,0,1,0,40H0V20A20,20,0,0,1,20,0Z" transform="translate(424 1543)" fill="#00008b" />
                  <path id="Icon_material-person" data-name="Icon material-person" d="M18.5,18.5a6.25,6.25,0,1,0-6.25-6.25A6.248,6.248,0,0,0,18.5,18.5Zm0,3.125c-4.172,0-12.5,2.094-12.5,6.25V31H31V27.875C31,23.719,22.672,21.625,18.5,21.625Z" transform="translate(425 1545)" fill="#fff" />
                </g>
              </svg>
            </div>

            <!-- description -->
            <div class="mt-8 ml-12 text-white flex flex-col">
              <span class="font-bold text-4xl">Pasajeros</span>
              <span class="text-base italic">Defina rango de edad</span>

              <div class="my-10 flex-col lg:flex-row flex">
                <span class="font-bold text-4xl">Niños</span>

                <div
                  class="flex items-center lg:ml-10 mt-5 lg:mt-0"
                >
                  <span
                    class="
                  mr-4
                  text-base
                  italic"
                  >
                    Desde</span>
                  <input
                    type="number"
                    style="max-width: 90px"
                    class="bg-transparent outline-none border border-white text-3xl rounded-3xl px-4"
                  >
                </div>

                <div class="flex items-center lg:ml-6 mt-5 lg:mt-0">
                  <span class="mr-4 text-base italic">Hasta</span>
                  <input
                    type="number"
                    style="max-width: 90px"
                    class="bg-transparent outline-none border border-white text-3xl rounded-3xl px-4"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- rigth -->
        <div class="w-full lg:w-1/2 mt-4 lg:mt-0 mx-8">
          <div class="container-middle h-full bg-bhi-secondary rounded-3xl rounded-bl-none shadow-primary pr-12">
            <!-- title -->
            <div class="bg-white inline-flex items-center rounded-3xl rounded-bl-none pr-2 shadow-secondary">
              <span class="text-bhi-primary px-12 py-3 font-bold text-xl">Paso 2 - Transporte</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <path id="Rectangle_334" data-name="Rectangle 334" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
                <path id="Icon_awesome-bus" data-name="Icon awesome-bus" d="M23.828,6.25h-.391V3.906C23.438,1.719,18.594,0,12.5,0S1.563,1.719,1.563,3.906V6.25H1.172A1.172,1.172,0,0,0,0,7.422v3.906A1.172,1.172,0,0,0,1.172,12.5h.391v7.813a1.563,1.563,0,0,0,1.563,1.563v1.563A1.563,1.563,0,0,0,4.688,25H6.25a1.563,1.563,0,0,0,1.563-1.562V21.875h9.375v1.563A1.563,1.563,0,0,0,18.75,25h1.563a1.563,1.563,0,0,0,1.563-1.562V21.875h.313a1.232,1.232,0,0,0,1.25-1.25V12.5h.391A1.172,1.172,0,0,0,25,11.328V7.422A1.172,1.172,0,0,0,23.828,6.25ZM5.469,19.531a1.563,1.563,0,1,1,1.563-1.562A1.563,1.563,0,0,1,5.469,19.531Zm.781-5.469A1.563,1.563,0,0,1,4.688,12.5V6.25A1.563,1.563,0,0,1,6.25,4.688h12.5A1.563,1.563,0,0,1,20.313,6.25V12.5a1.563,1.563,0,0,1-1.562,1.563Zm13.281,5.469a1.563,1.563,0,1,1,1.563-1.562A1.563,1.563,0,0,1,19.531,19.531Z" transform="translate(8 8)" fill="#fff" />
              </svg>
            </div>

            <!-- description -->
            <div class="mt-8 ml-12 text-white flex flex-col">
              <span class="font-bold text-4xl">Tipo de transporte</span>
              <span class="text-base italic">Defina el tipo de transporte</span>

              <div class="my-10 flex">
                <div class="w-full relative">
                  <input
                    type="number"
                    class="select_ bg-transparent outline-none border border-white text-3xl rounded-3xl px-4 w-full select-none cursor-pointer"
                    placeholder="Seleccione transporte"
                    disabled
                  >

                  <svg
                    class="absolute cursor-pointer"
                    style="right: 10px; top: 50%; transform: translateY(-50%) rotate(-90deg)"
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
                      fill="#fff"
                    />
                    <g id="Group_525" data-name="Group 525" transform="translate(7.167 10)">
                      <line
                        id="Line_2"
                        data-name="Line 2"
                        x1="5.167"
                        y2="4.833"
                        transform="translate(4.833)"
                        fill="none"
                        stroke="#09f"
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
                        stroke="#09f"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- title - paso 3 -->
      <div class="bg-white inline-flex items-center rounded-3xl rounded-bl-none pr-2 shadow-secondary mb-16">
        <span class="text-bhi-primary px-12 py-3 font-bold text-xl">Paso 3 - Hotel</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path id="Path_332" data-name="Path 332" d="M20,0a20,20,0,0,1,0,40H0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
          <path id="Icon_feather-star" data-name="Icon feather-star" d="M14.583,2.083l3.863,7.825,8.637,1.262-6.25,6.088,1.475,8.6L14.583,21.8,6.858,25.858l1.475-8.6-6.25-6.088,8.638-1.262Z" transform="translate(5.917 5.917)" fill="#fff" />
        </svg>
      </div>

      <!-- hotel -->
      <div class="flex flex-wrap">
        <!-- left -->
        <div class="w-full lg:w-3/12 flex flex-col items-center mb-10 lg:mb-0">
          <!-- img -->
          <div class="flex items-center mb-5">
            <div
              style="width: 211px; height: 211px"
              class="relative rounded-md mr-2 last:mr-0 select-none"
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
          <div class="btn-bhi-primary btn__edit w-auto">
            <span class="mr-2">Editar</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
              <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
            </svg>
          </div>
        </div>

        <!-- rigth -->
        <div class="w-full lg:w-9/12">
          <!-- starts -->
          <div class="flex items-center mb-4">
            <div class="mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="134.515" height="22.281" viewBox="0 0 134.515 22.281">
                <g id="Group_830" data-name="Group 830" transform="translate(-384 -1597.5)">
                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M11.356.739l-2.711,5.5L2.579,7.12a1.329,1.329,0,0,0-.735,2.267l4.389,4.276L5.195,19.7a1.328,1.328,0,0,0,1.926,1.4l5.427-2.852L17.974,21.1A1.329,1.329,0,0,0,19.9,19.7l-1.038-6.041,4.389-4.276a1.329,1.329,0,0,0-.735-2.267L16.45,6.236,13.739.739a1.33,1.33,0,0,0-2.383,0Z" transform="translate(382.559 1598.001)" fill="#09f" />
                  <path id="Icon_awesome-star-2" data-name="Icon awesome-star" d="M11.356.739l-2.711,5.5L2.579,7.12a1.329,1.329,0,0,0-.735,2.267l4.389,4.276L5.195,19.7a1.328,1.328,0,0,0,1.926,1.4l5.427-2.852L17.974,21.1A1.329,1.329,0,0,0,19.9,19.7l-1.038-6.041,4.389-4.276a1.329,1.329,0,0,0-.735-2.267L16.45,6.236,13.739.739a1.33,1.33,0,0,0-2.383,0Z" transform="translate(409.833 1598.001)" fill="#09f" />
                  <path id="Icon_awesome-star-3" data-name="Icon awesome-star" d="M11.356.739l-2.711,5.5L2.579,7.12a1.329,1.329,0,0,0-.735,2.267l4.389,4.276L5.195,19.7a1.328,1.328,0,0,0,1.926,1.4l5.427-2.852L17.974,21.1A1.329,1.329,0,0,0,19.9,19.7l-1.038-6.041,4.389-4.276a1.329,1.329,0,0,0-.735-2.267L16.45,6.236,13.739.739a1.33,1.33,0,0,0-2.383,0Z" transform="translate(438.346 1598.001)" fill="#09f" />
                  <path
                    id="Icon_awesome-star-4"
                    data-name="Icon awesome-star"
                    d="M11.356.739l-2.711,5.5L2.579,7.12a1.329,1.329,0,0,0-.735,2.267l4.389,4.276L5.195,19.7a1.328,1.328,0,0,0,1.926,1.4l5.427-2.852L17.974,21.1A1.329,1.329,0,0,0,19.9,19.7l-1.038-6.041,4.389-4.276a1.329,1.329,0,0,0-.735-2.267L16.45,6.236,13.739.739a1.33,1.33,0,0,0-2.383,0Z"
                    transform="translate(467.346 1598.001)"
                    fill="none"
                    stroke="#09f"
                    stroke-width="1"
                  />
                  <path
                    id="Icon_awesome-star-5"
                    data-name="Icon awesome-star"
                    d="M11.356.739l-2.711,5.5L2.579,7.12a1.329,1.329,0,0,0-.735,2.267l4.389,4.276L5.195,19.7a1.328,1.328,0,0,0,1.926,1.4l5.427-2.852L17.974,21.1A1.329,1.329,0,0,0,19.9,19.7l-1.038-6.041,4.389-4.276a1.329,1.329,0,0,0-.735-2.267L16.45,6.236,13.739.739a1.33,1.33,0,0,0-2.383,0Z"
                    transform="translate(494.346 1598.001)"
                    fill="none"
                    stroke="#09f"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </div>

            <!-- btn -->
            <div class="btn-bhi-primary btn__edit w-auto">
              <span class="mr-2">Editar</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>

          <!-- input name -->
          <div class="flex flex-col lg:flex-row items-center mb-8">
            <input type="text" class="input__name lg:mr-10" style="font-size: 2rem" value="Nombre del hotel">

            <div class="btn-bhi-primary btn__edit w-auto mt-5 lg:mt-0">
              <span class="mr-2">Editar</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
                <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
              </svg>
            </div>
          </div>

          <!-- type -->
          <div>
            <p class="text-base italic mb-4">
              Seleccione tipo de habitación
            </p>

            <div class="flex items-center mb-10 overflow-x-scroll overflow-hidden lg:overflow-x-hidden">
              <div class="flex items-center select-none cursor-pointer mr-6">
                <div class="w-4 h-4 rounded-full bg-bhi-secondary border border-bhi-secondary mr-2" />
                <span class="text-lg">Individual</span>
              </div>

              <div class="flex items-center select-none cursor-pointer mr-6">
                <div class="w-4 h-4 rounded-full bg-bhi-secondary border border-bhi-secondary mr-2" />
                <span class="text-lg">Doble</span>
              </div>

              <div class="flex items-center select-none cursor-pointer mr-6">
                <div class="w-4 h-4 rounded-full y border border-bhi-secondary mr-2" />
                <span class="text-lg">Triple</span>
              </div>

              <div class="flex items-center select-none cursor-pointer">
                <div class="w-4 h-4 rounded-full  border border-bhi-secondary mr-2" />
                <span class="text-lg">Cuadruple</span>
              </div>
            </div>

            <p class="text-base italic mb-4">
              Seleccione tipo de cama
            </p>

            <div class="flex items-center0">
              <div class="flex items-center select-none cursor-pointer mr-6">
                <div class="w-4 h-4 rounded-full y border border-bhi-secondary mr-2" />
                <span class="text-lg">Twin</span>
              </div>

              <div class="flex items-center select-none cursor-pointer mr-6">
                <div class="w-4 h-4 rounded-full bg-bhi-secondary border border-bhi-secondary mr-2" />
                <span class="text-lg">Matrimonial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- btn final -->
    <div class="flex justify-center mb-10 lg:mb-56">
      <div class="btn-bhi-primary">
        Guardar cambios
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    viaje: null
  }),
  mounted () {
    this.viaje = JSON.parse(localStorage.getItem('viaje-edit'))
  }
}
</script>
<style lang="postcss" scoped>
.input__name {
  @apply font-bold capitalize outline-none border-b border-bhi-secondary w-full
}
.btn__edit {
  @apply py-1 flex items-center px-5;
  &:hover svg path {
    @apply text-bhi-primary fill-current
  }
}
.select_::-webkit-input-placeholder {
  @apply text-base italic font-light;
  color: #fff;
}
.select_::-moz-placeholder {
  @apply text-base italic font-light;
  color: #fff;
 }
.select_:-ms-input-placeholder {
  @apply text-base italic font-light;
  color: #fff;
 }
.select_:-moz-placeholder {
  @apply text-base italic font-light;
  color: #fff;
 }
</style>
