<template>
  <div :class="{'best-sellers-block': $route.path === '/'}">
    <!-- title -->
    <div
      v-if="$route.path === '/'"
      class="pt-32 text-center"
    >
      <span class="title-bhi">Los más vendidos</span>
    </div>

    <div :class="{'tours-block': $route.path === '/'}">
      <div class="container lg:px-16 pb-10">
        <div class="flex flex-wrap w-full">
          <div
            v-for="({ name, description, date, days, photo }, i) in data"
            :key="i"
            class="w-full md:w-1/2 lg:w-1/3 mb-8 flex justify-center"
          >
            <div class="card__tour">
              <!-- img -->
              <div class="relative">
                <img class="card__img" :src="photo" :alt="name">

                <p class="card__title rounded-tr-lg">
                  <span class="text-base font-bold text-bhi-primary capitalize"> {{ name }} </span>
                </p>
              </div>

              <!-- description -->
              <div class="px-4 text-13 mt-8">
                <p> {{ description }} </p>

                <!-- date -->
                <div class="mt-8">
                  <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22.278" viewBox="0 0 25 22.278">
                      <g id="Group_242" data-name="Group 242" transform="translate(-5.583 -6.381)">
                        <g id="calendar" transform="translate(5.583 6.381)">
                          <g id="Group_221" data-name="Group 221" transform="translate(0 0)">
                            <g id="Group_220" data-name="Group 220" transform="translate(0 0)">
                              <path id="Path_13" data-name="Path 13" d="M22.408,22.8H20.839V21.551a.651.651,0,0,0-1.3,0V22.8H13.154V21.551a.651.651,0,0,0-1.3,0V22.8H5.405V21.551a.651.651,0,0,0-1.3,0V22.8H2.6A2.635,2.635,0,0,0,0,25.432V40.573a2.6,2.6,0,0,0,2.6,2.6H22.4a2.6,2.6,0,0,0,2.6-2.6V25.432A2.625,2.625,0,0,0,22.408,22.8Zm1.3,17.778a1.3,1.3,0,0,1-1.289,1.3H2.6a1.3,1.3,0,0,1-1.3-1.3V25.432A1.325,1.325,0,0,1,2.6,24.1H4.1v.944a.651.651,0,1,0,1.3,0V24.1h6.447v.944a.651.651,0,1,0,1.3,0V24.1h6.382v.944a.651.651,0,1,0,1.3,0V24.1h1.569a1.325,1.325,0,0,1,1.3,1.335Z" transform="translate(0 -20.9)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_223" data-name="Group 223" transform="translate(9.39 7.615)">
                            <g id="Group_222" data-name="Group 222">
                              <path id="Path_14" data-name="Path 14" d="M139.273,135h-.683a.39.39,0,0,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-138.2 -135)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_225" data-name="Group 225" transform="translate(14.12 7.615)">
                            <g id="Group_224" data-name="Group 224">
                              <path id="Path_15" data-name="Path 15" d="M208.873,135h-.683a.39.39,0,1,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-207.8 -135)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_227" data-name="Group 227" transform="translate(18.889 7.615)">
                            <g id="Group_226" data-name="Group 226">
                              <path id="Path_16" data-name="Path 16" d="M279.073,135h-.683a.39.39,0,0,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-278 -135)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_229" data-name="Group 229" transform="translate(9.39 12.221)">
                            <g id="Group_228" data-name="Group 228">
                              <path id="Path_17" data-name="Path 17" d="M139.273,204h-.683a.39.39,0,0,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-138.2 -204)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_231" data-name="Group 231" transform="translate(4.62 12.221)">
                            <g id="Group_230" data-name="Group 230">
                              <path id="Path_18" data-name="Path 18" d="M69.077,204H68.39a.39.39,0,1,0,0,.78h.683a.39.39,0,0,0,0-.78Z" transform="translate(-68 -204)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_233" data-name="Group 233" transform="translate(14.12 12.221)">
                            <g id="Group_232" data-name="Group 232">
                              <path id="Path_19" data-name="Path 19" d="M208.873,204h-.683a.39.39,0,1,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-207.8 -204)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_235" data-name="Group 235" transform="translate(18.889 12.221)">
                            <g id="Group_234" data-name="Group 234">
                              <path id="Path_20" data-name="Path 20" d="M279.073,204h-.683a.39.39,0,0,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-278 -204)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_237" data-name="Group 237" transform="translate(9.39 16.759)">
                            <g id="Group_236" data-name="Group 236" transform="translate(0 0)">
                              <path id="Path_21" data-name="Path 21" d="M139.273,272h-.683a.39.39,0,0,0,0,.78h.683a.39.39,0,0,0,0-.78Z" transform="translate(-138.2 -272)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_239" data-name="Group 239" transform="translate(4.62 16.759)">
                            <g id="Group_238" data-name="Group 238" transform="translate(0 0)">
                              <path id="Path_22" data-name="Path 22" d="M69.077,272H68.39a.39.39,0,1,0,0,.78h.683a.39.39,0,0,0,0-.78Z" transform="translate(-68 -272)" fill="#09f" />
                            </g>
                          </g>
                          <g id="Group_241" data-name="Group 241" transform="translate(14.12 16.759)">
                            <g id="Group_240" data-name="Group 240" transform="translate(0 0)">
                              <path id="Path_23" data-name="Path 23" d="M208.873,272h-.683a.39.39,0,1,0,0,.78h.683a.39.39,0,1,0,0-.78Z" transform="translate(-207.8 -272)" fill="#09f" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span class="inline-block ml-4">Salida: {{ date }} </span>
                  </div>

                  <div class="flex items-center">
                    <svg
                      id="Group_501"
                      data-name="Group 501"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="17.578"
                      viewBox="0 0 25 17.578"
                    >
                      <path id="Path_312" data-name="Path 312" d="M22.07,80.395H10.254a2.923,2.923,0,0,0-2.2.995,2.922,2.922,0,0,0-3.662-.6V76H0V93.578H4.395v-2.93H20.605v2.93H25V83.324A2.933,2.933,0,0,0,22.07,80.395ZM2.93,92.113H1.465V77.465H2.93Zm1.465-8.789a1.465,1.465,0,0,1,2.93,0v1.465H4.395Zm19.141,8.789H22.07V90.648h1.465Zm0-2.93H4.395v-2.93H23.535Zm0-4.395H8.789V83.324a1.467,1.467,0,0,1,1.465-1.465H22.07a1.467,1.467,0,0,1,1.465,1.465Z" transform="translate(0 -76)" fill="#09f" />
                    </svg>

                    <span class="inline-block ml-4"> {{ days }} </span>
                  </div>
                </div>

                <!-- btn -->
                <div class="mt-10 text-center">
                  <nuxt-link
                    class="btn-bhi-primary "
                    :to="`/tours/${name.split(' ').join('-')}`"
                  >
                    Reservar
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="user" class="flex justify-center pb-16">
        <nuxt-link to="/tours" class="btn-bhi-primary">
          Ver todos los tours
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import tours from '~/helpers/tours'
export default {
  data: () => ({
    data: tours
  }),
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>
<style lang="postcss" scoped>
.best-sellers-block {
  @apply bg-top bg-no-repeat relative;
  background-image: url('/assets/images/body/bg-home.svg');
  background-size: 100% auto;
}

.tours-block {
  @apply mt-20 bg-no-repeat;
  background-image: url('/assets/images/body/bg-home-2.svg');
  background-size: 100% auto;
  background-position: left 104.4%;
}

.card__tour {
  @apply w-full bg-white rounded-3xl relative shadow-primary pb-10;
  max-width: 297px;
}
.card__img {
  @apply rounded-3xl;
  height: 227px;
}
.card__title {
  @apply w-full bg-white inline-block text-center absolute bottom-0 left-0 py-1;
  max-width: 216px;
}
</style>
