<template>
  <div>
    <!-- tabs -->
    <div class="flex flex-col lg:flex-row border-b-2 border-bhi-primary mb-10">
      <nuxt-link
        :to="`/admin/viajes/${viaje.url}/reservados/${agency.url}`"
        class="tab__action lg:mr-3 tab__active"
      >
        Reservados
      </nuxt-link>
      <nuxt-link
        :to="`/admin/viajes/${viaje.url}/confirmados/${agency.url}`"
        class="tab__action"
      >
        Confirmados
      </nuxt-link>
    </div>

    <!-- name -->
    <div class="mb-10">
      <span class="text-4xl font-bold">Pasajero con reserva {{ pasajero }}</span>
    </div>

    <!-- title -->
    <div class="title-bhi mb-10">
      Datos del pasajero
    </div>

    <!-- form -->
    <div class="flex flex-wrap">
      <!-- left -->
      <div class="w-full lg:w-1/2 lg:pr-8">
        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg mb-4">Nombre completo</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg mb-4">Teléfono</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg mb-4">Correo Electrónico</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg mb-4">Observaciones generales</span>
          <textarea
            style="height: 175px"
            class="input-bhi h-full pt-4"
            type="text"
            placeholder="Escriba aqui si el pasajero posee alguna enfermedad
o alergía alimenticia."
          />

          <p class="text-lg font-bold my-4">
            En caso de emergencia comunicarse con
          </p>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg mb-4">Nombre completo</span>
            <input class="input-bhi" type="text">
          </div>

          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg mb-4">Teléfono</span>
            <input class="input-bhi" type="text">
          </div>
        </div>
      </div>

      <!-- rigth -->
      <div class="w-full lg:w-1/2">
        <div class="mb-4">
          <p class="text-xl mb-4">
            Tipo de Documento
          </p>

          <div class="relative w-full lg:max-w-xs lg:w-2/5">
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
          <p class="text-xl  mb-4">
            N° de Documento
          </p>
          <input class="input-bhi w-full" type="text">
        </div>

        <div class="mb-4">
          <p class="text-xl mb-4">
            Adjuntar documento
          </p>
          <div class="relative lg:w-2/5">
            <input class="input-bhi pl-12 w-full z-0 cursor-pointer" type="text" placeholder="Descargar" disabled>

            <div
              style="left: 10px; top: 50%; transform: translateY(-50%);"
              class="absolute z-10 cursor-pointer"
            >
              <svg style="transform: rotate(90deg);" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <circle
                  id="Ellipse_111"
                  data-name="Ellipse 111"
                  cx="15"
                  cy="15"
                  r="15"
                  fill="#00008b"
                />
                <g id="Group_713" data-name="Group 713" transform="translate(1.833 -1)">
                  <g id="Group_525" data-name="Group 525" transform="translate(22 21) rotate(180)">
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
                  <line
                    id="Line_8"
                    data-name="Line 8"
                    y2="10"
                    transform="translate(8.5 11)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-xl  mb-4">
            Ficha médica
          </p>
          <div class="relative lg:w-2/5">
            <input class="input-bhi pl-12 w-full z-0 cursor-pointer" type="text" placeholder="Descargar" disabled>

            <div
              style="left: 10px; top: 50%; transform: translateY(-50%);"
              class="absolute z-10 cursor-pointer"
            >
              <svg style="transform: rotate(90deg);" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <circle
                  id="Ellipse_111"
                  data-name="Ellipse 111"
                  cx="15"
                  cy="15"
                  r="15"
                  fill="#00008b"
                />
                <g id="Group_713" data-name="Group 713" transform="translate(1.833 -1)">
                  <g id="Group_525" data-name="Group 525" transform="translate(22 21) rotate(180)">
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
                  <line
                    id="Line_8"
                    data-name="Line 8"
                    y2="10"
                    transform="translate(8.5 11)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-xl font-semibold mb-4">
            Tipo de habitación
          </p>

          <div class="flex flex-col">
            <div class="flex items-center mb-2">
              <div class="btn-bhi-control mr-6" />
              <span class="text-xl font-normal">Individual</span>
            </div>

            <div class="flex items-center mb-2">
              <div class="btn-bhi-control-select mr-6" />
              <span class="text-xl font-normal">Doble</span>
            </div>

            <div class="flex items-center mb-2">
              <div class="btn-bhi-control mr-6" />
              <span class="text-xl font-normal">Triple</span>
            </div>

            <div class="flex items-center">
              <div class="btn-bhi-control mr-6" />
              <span class="text-xl font-normal">Cuadruple</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg mb-4">Redes Sociales</span>

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
    </div>

    <!-- btn -->
    <div class="flex mt-16 mb-40 flex-col lg:flex-row">
      <div
        class="btn-bhi-primary lg:mr-6 text-center lg:text-right"
        @click="action(true)"
      >
        Aprobar
      </div>

      <div
        class="btn-bhi-primary mt-4 lg:mt-0 text-center lg:text-right"
        @click="action(false)"
      >
        Dar de baja
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pasajero: null,
    viaje: {
      name: null,
      url: null
    },
    agency: {
      name: null,
      url: null
    }
  }),
  mounted () {
    const { name, url } = JSON.parse(localStorage.getItem('viaje'))
    this.viaje.name = name
    this.viaje.url = url

    const { name: aname, url: aurl } = JSON.parse(localStorage.getItem('agency'))
    this.agency.name = aname
    this.agency.url = aurl

    this.pasajero = JSON.parse(localStorage.getItem('pasajero')).name
  },
  methods: {
    action (e) {
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      this.$nuxt.$emit('ADMIN_ACTION_ACTIVE', e)

      const a = this.$route.path
      const url = a.substr(0, a.indexOf('/planilla'))
      this.$router.push(url)
    }
  }
}
</script>
