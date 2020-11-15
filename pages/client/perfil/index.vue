<template>
  <div class="mb-10 lg:mb-40">
    <!-- tabs -->
    <div class="flex flex-col-reverse lg:flex-row border-b-2 border-bhi-primary mb-8 items-center justify-between">
      <div
        class="tab__action tab__active"
      >
        Mi Perfil
      </div>

      <div class="btn-bhi-primary mb-4 lg:mb-0 btn__edit" @click="edit(false)">
        <span class="mr-2">Editar</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="12.835" viewBox="0 0 14.442 12.835">
          <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M10.094,2.091l2.262,2.262a.245.245,0,0,1,0,.346L6.88,10.174l-2.327.258a.488.488,0,0,1-.539-.539l.258-2.327L9.748,2.091A.245.245,0,0,1,10.094,2.091Zm4.062-.574L12.933.293a.981.981,0,0,0-1.384,0l-.888.888a.245.245,0,0,0,0,.346l2.262,2.262a.245.245,0,0,0,.346,0l.888-.888A.981.981,0,0,0,14.156,1.516ZM9.628,8.685v2.552H1.6V3.214H7.366a.308.308,0,0,0,.213-.088l1-1a.3.3,0,0,0-.213-.514H1.2A1.2,1.2,0,0,0,0,2.813v8.826a1.2,1.2,0,0,0,1.2,1.2h8.826a1.2,1.2,0,0,0,1.2-1.2V7.682a.3.3,0,0,0-.514-.213l-1,1A.308.308,0,0,0,9.628,8.685Z" transform="translate(0 -0.007)" fill="#fff" />
        </svg>
      </div>
    </div>

    <!-- name -->
    <div class="mb-12">
      <span class="font-bold text-xl lg:text-4xl">Nombre de la agencia</span>
    </div>

    <!-- form -->
    <div class="flex flex-wrap">
      <!-- left -->
      <div class="w-full lg:w-7/12 lg:pr-16">
        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg font-bold mb-4 ">Correo electrónico</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg font-bold mb-4 ">Nombre del vendedor</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg font-bold mb-4 ">Dirección</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg font-bold mb-4 ">Teléfono</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg font-bold mb-4 ">Razón social</span>
          <input class="input-bhi" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <span class="lg:text-xl text-lg font-bold mb-4 ">Contraseña</span>
          <div class="relative w-full">
            <input
              class="input-bhi w-full z-0"
              :type="password ? 'password' : 'text'"
              value="pass2000@0444!!.com"
            >

            <div
              style="top:50%;transform:translateY(-50%);right:15px"
              class="absolute z-10 cursor-pointer"
              @click="password = !password"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="16.333" viewBox="0 0 24.5 16.333">
                <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M24.352,12.046A13.643,13.643,0,0,0,12.25,4.5a13.645,13.645,0,0,0-12.1,7.546,1.376,1.376,0,0,0,0,1.242,13.643,13.643,0,0,0,12.1,7.546,13.645,13.645,0,0,0,12.1-7.546A1.376,1.376,0,0,0,24.352,12.046Zm-12.1,6.746a6.125,6.125,0,1,1,6.125-6.125A6.125,6.125,0,0,1,12.25,18.792Zm0-10.208a4.054,4.054,0,0,0-1.077.161A2.035,2.035,0,0,1,8.328,11.59,4.074,4.074,0,1,0,12.25,8.583Z" transform="translate(0 -4.5)" fill="#00008b" />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex btn-bhi-primary lg:hidden items-center py-2 mb-5 justify-center">
          @click="edit(true)"
          <span class="mr-4">Modificar contraseña</span>

          <svg xmlns="http://www.w3.org/2000/svg" width="18.287" height="16.252" viewBox="0 0 18.287 16.252">
            <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M12.782,2.645l2.864,2.864a.31.31,0,0,1,0,.438L8.712,12.881l-2.946.327a.617.617,0,0,1-.683-.683L5.41,9.579l6.934-6.934A.31.31,0,0,1,12.782,2.645Zm5.143-.727L16.375.369a1.242,1.242,0,0,0-1.752,0L13.5,1.493a.31.31,0,0,0,0,.438l2.864,2.864a.31.31,0,0,0,.438,0l1.124-1.124a1.242,1.242,0,0,0,0-1.752Zm-5.734,9.077v3.232H2.032V4.068h7.3a.39.39,0,0,0,.27-.111l1.27-1.27a.381.381,0,0,0-.27-.651H1.524A1.524,1.524,0,0,0,0,3.56V14.735a1.524,1.524,0,0,0,1.524,1.524H12.7a1.524,1.524,0,0,0,1.524-1.524V9.725a.382.382,0,0,0-.651-.27l-1.27,1.27A.39.39,0,0,0,12.191,10.995Z" transform="translate(0 -0.007)" fill="#fff" />
          </svg>
        </div>
      </div>

      <!-- rigth -->
      <div class="w-full lg:w-5/12 flex flex-col">
        <div class="flex flex-col flex-1">
          <span class="lg:text-xl text-lg font-bold mb-4">Redes Sociales</span>

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

        <div class="hidden btn-bhi-primary lg:flex items-center py-2 w-content mb-5 -ml-8" @click="edit(true)">
          <span class="mr-4">Modificar contraseña</span>

          <svg xmlns="http://www.w3.org/2000/svg" width="18.287" height="16.252" viewBox="0 0 18.287 16.252">
            <path id="Icon_awesome-edit" data-name="Icon awesome-edit" d="M12.782,2.645l2.864,2.864a.31.31,0,0,1,0,.438L8.712,12.881l-2.946.327a.617.617,0,0,1-.683-.683L5.41,9.579l6.934-6.934A.31.31,0,0,1,12.782,2.645Zm5.143-.727L16.375.369a1.242,1.242,0,0,0-1.752,0L13.5,1.493a.31.31,0,0,0,0,.438l2.864,2.864a.31.31,0,0,0,.438,0l1.124-1.124a1.242,1.242,0,0,0,0-1.752Zm-5.734,9.077v3.232H2.032V4.068h7.3a.39.39,0,0,0,.27-.111l1.27-1.27a.381.381,0,0,0-.27-.651H1.524A1.524,1.524,0,0,0,0,3.56V14.735a1.524,1.524,0,0,0,1.524,1.524H12.7a1.524,1.524,0,0,0,1.524-1.524V9.725a.382.382,0,0,0-.651-.27l-1.27,1.27A.39.39,0,0,0,12.191,10.995Z" transform="translate(0 -0.007)" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['auth'],
  data: () => ({
    password: true
  }),
  methods: {
    edit (e) {
      this.$nuxt.$emit('OVERLAY_ACTIVE')

      if (e) {
        return this.$nuxt.$emit('EDIT_ACCOUNT_ACTIVE', true)
      }

      this.$nuxt.$emit('EDIT_ACCOUNT_ACTIVE')
    }
  }
}
</script>
<style lang="postcss" scoped>
.btn__edit {
  @apply py-1 flex items-center px-5;
  &:hover svg path {
    @apply text-bhi-primary fill-current
  }
}
</style>
