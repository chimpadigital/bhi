<template>
  <div style="background: #DDE8FD">
    <div class="footer__ bg-cover lg:bg-100%">
      <div class="container py-10">
        <div class="flex flex-wrap w-full">
          <!-- logo -->
          <div class="w-full lg:w-2/4 flex justify-center lg:block">
            <div class="w-40">
              <img class="w-40 pb-4" src="~/assets/images/logo/logo.png" alt="BHI Logo">

              <div class="w-full flex flex-col items-center justify-center">
                <span class="text-white text-15 mb-2">Siguenos en</span>

                <!-- social -->
                <div class="flex">
                  <!-- twitter -->
                  <div class="w-8 h-8 flex justify-center items-center">
                    <a target="_blank" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32.003" height="100%" viewBox="0 0 32.003 23.732">
                        <path id="Twitter" d="M1234.243,1141.11l-.057-.039a5.471,5.471,0,0,0-4.209-1.614l-.058-.117.038-.02c1.461-.33,2.326-.681,2.6-1.07.077-.311-.02-.487-.346-.525a7.881,7.881,0,0,0-2.018.506c.769-.506,1.057-.856.884-1.031a3.864,3.864,0,0,0-2.422,1.187c.307-.545.442-.856.365-.895a5.612,5.612,0,0,0-1.076.914,17.469,17.469,0,0,0-1.576,2.042l-.019.039a18.368,18.368,0,0,0-2.172,5.116l-.154.136-.038.019a8.161,8.161,0,0,0-2.249-1.965,25.006,25.006,0,0,0-3.691-1.984,30.62,30.62,0,0,0-4.69-2,4.784,4.784,0,0,0,2.575,4.28v.019a6.112,6.112,0,0,0-1.769.272c.115,1.673,1.288,2.821,3.5,3.443l-.019.039a2.475,2.475,0,0,0-2.133.895,3.855,3.855,0,0,0,3.882,2.081,2.751,2.751,0,0,0-.845.623,1.327,1.327,0,0,0-.346,1.284,2.093,2.093,0,0,0,2.172,1.011l.058.078-.02.039a8.01,8.01,0,0,1-6.612,2.587l-.039.02a8.379,8.379,0,0,1-5.094-2.3,15.852,15.852,0,0,0,7.285,5.816,17.074,17.074,0,0,0,10.341.253h.057a16.463,16.463,0,0,0,8.515-6.03,12.049,12.049,0,0,0,2.018-4.552,4.15,4.15,0,0,0,3.786-1.536l-.02-.039a7.36,7.36,0,0,1-3.4-.195v-.195q2.767-.321,3.287-1.809a5.057,5.057,0,0,1-3.806.039,8.43,8.43,0,0,0-2.48-4.824" transform="translate(-1208.66 -1137.2)" fill="#fff" />
                      </svg>
                    </a>
                  </div>

                  <!-- facebook -->
                  <div class="w-8 h-8 mx-3 flex justify-center items-center">
                    <a target="_blank" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.084" height="21.958" viewBox="0 0 10.084 21.958">
                        <path id="Facebook" d="M1255.7,1148.188h-3.041v10.97h-4.506v-10.97h-2.142v-3.877h2.142V1141.8c0-1.8.843-4.6,4.548-4.6l3.339.013v3.764h-2.423a.923.923,0,0,0-.956,1.056v2.279h3.433Z" transform="translate(-1246.01 -1137.2)" fill="#fff" />
                      </svg>
                    </a>
                  </div>

                  <!-- instagram -->
                  <div class="w-8 h-8 flex justify-center items-center">
                    <a target="_blank" href="#" class="w-8 h-8 flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21.697" height="21.959" viewBox="0 0 21.697 21.959">
                        <path id="instagram" d="M17.5,21.959H4.193A4.223,4.223,0,0,1,0,17.716V4.243A4.223,4.223,0,0,1,4.193,0H17.5A4.224,4.224,0,0,1,21.7,4.243V17.716A4.223,4.223,0,0,1,17.5,21.959ZM2.112,8.727v8.989a2.093,2.093,0,0,0,2.079,2.1H17.5a2.093,2.093,0,0,0,2.079-2.1V8.727h-3.24a5.931,5.931,0,1,1-10.99,0Zm8.737-1.613a3.825,3.825,0,0,0-3.1,1.611,3.886,3.886,0,0,0,.4,4.985,3.77,3.77,0,0,0,2.7,1.133,3.865,3.865,0,0,0,0-7.73Zm8.337-4.584-.479,0-3.2.01.013,3.722,3.665-.012V2.529Z" fill="#fff" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- menu 1 - Enlaces -->
          <div class="w-full lg:w-1/4 pl-4 lg:pl-0">
            <div class="flex flex-col text-white">
              <span class="text-2xl font-bold pb-4">Elances</span>

              <nuxt-link to="#" class="pb-3 text-base">
                Ingreso
              </nuxt-link>
              <nuxt-link to="#" class="pb-3 text-base">
                Registrese
              </nuxt-link>
              <nuxt-link to="#" class="pb-3 text-base">
                Destino
              </nuxt-link>
            </div>
          </div>

          <!-- menu 2 - Contacto -->
          <div class="w-full lg:w-1/4 pl-4 lg:pl-0">
            <div class="flex flex-col text-white">
              <span class="text-2xl font-bold pb-4">Contacto</span>

              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.143" height="24.381" viewBox="0 0 17.143 24.381">
                  <g id="Group_797" data-name="Group 797" transform="translate(-993 -99.808)">
                    <g id="pin_1_" data-name="pin (1)" transform="translate(997.285 104.094)">
                      <g id="Group_300" data-name="Group 300">
                        <g id="Group_299" data-name="Group 299">
                          <path id="Path_204" data-name="Path 204" d="M170.286,90a4.286,4.286,0,1,0,4.286,4.286A4.291,4.291,0,0,0,170.286,90Zm0,7.152a2.867,2.867,0,1,1,2.862-2.867A2.869,2.869,0,0,1,170.286,97.152Z" transform="translate(-166 -90)" fill="#fff" />
                        </g>
                      </g>
                    </g>
                    <g id="Group_298" data-name="Group 298" transform="translate(993 99.808)">
                      <g id="Group_297" data-name="Group 297">
                        <path id="Path_203" data-name="Path 203" d="M84.571,0a8.573,8.573,0,0,0-7.292,13.078l6.8,10.964a.714.714,0,0,0,.607.338H84.7a.714.714,0,0,0,.607-.347l6.631-11.071A8.573,8.573,0,0,0,84.571,0Zm6.136,12.229L84.68,22.294l-6.186-9.968a7.148,7.148,0,1,1,12.214-.1Z" transform="translate(-76)" fill="#fff" />
                      </g>
                    </g>
                  </g>
                </svg>

                <nuxt-link to="#" class="text-base ml-4">
                  Ubicación 385
                </nuxt-link>
              </div>

              <div class="flex items-center mb-4">
                <svg
                  id="phone_1_"
                  data-name="phone (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.754"
                  height="20.754"
                  viewBox="0 0 20.754 20.754"
                >
                  <path id="Path_200" data-name="Path 200" d="M14.916,20.754a5.782,5.782,0,0,1-1.984-.354,21.154,21.154,0,0,1-7.681-4.9,21.152,21.152,0,0,1-4.9-7.681A5.74,5.74,0,0,1,.062,5,5.887,5.887,0,0,1,3.087.691,5.779,5.779,0,0,1,5.854,0a.649.649,0,0,1,.634.513l1.018,4.75a.649.649,0,0,1-.176.595L5.592,7.6a17.071,17.071,0,0,0,7.566,7.566L14.9,13.423a.649.649,0,0,1,.595-.176l4.75,1.018a.649.649,0,0,1,.513.634,5.779,5.779,0,0,1-.691,2.767,5.887,5.887,0,0,1-4.309,3.025,5.768,5.768,0,0,1-.838.062ZM5.336,1.325A4.544,4.544,0,0,0,1.574,7.379a19.671,19.671,0,0,0,11.8,11.8,4.544,4.544,0,0,0,6.054-3.762l-3.864-.828-1.817,1.817a.648.648,0,0,1-.734.128A18.364,18.364,0,0,1,4.219,7.741a.648.648,0,0,1,.128-.734L6.164,5.19Z" transform="translate(0 0)" fill="#fff" />
                </svg>

                <nuxt-link to="#" class="text-base ml-4">
                  877-255-7945
                </nuxt-link>
              </div>

              <div class="flex items-center">
                <svg
                  id="mail_1_"
                  data-name="mail (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.787"
                  height="17.358"
                  viewBox="0 0 22.787 17.358"
                >
                  <g id="Group_295" data-name="Group 295">
                    <path id="Path_201" data-name="Path 201" d="M20.785,61H2a2.006,2.006,0,0,0-2,2V76.355a2.006,2.006,0,0,0,2,2H20.785a2.006,2.006,0,0,0,2-2V63A2.006,2.006,0,0,0,20.785,61Zm-.277,1.335-9.072,9.072-9.15-9.072ZM1.335,76.078V63.273l6.43,6.375Zm.944.944,6.434-6.434,2.255,2.235a.668.668,0,0,0,.942,0l2.2-2.2,6.4,6.4Zm19.173-.944-6.4-6.4,6.4-6.4Z" transform="translate(0 -61)" fill="#fff" />
                  </g>
                </svg>

                <nuxt-link to="#" class="text-base ml-4">
                  info@form.com
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-t border-white">
        <p class="text-center text-white text-xs py-4">
          2020 Copyright | Creado por Chimpancé
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.footer__ {
  @apply w-full bg-center bg-no-repeat bg-gray-500;
  border-radius: 0 50px 0 0;
  background-image: url('/assets/images/body/bg-footer.jpg');
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 139, .5);
}
</style>
