<template>
  <div
    :class="{'bg-bhi-primary rounded-br-3xl': $route.path.includes('/admin') || $route.path.includes('/client')}"
  >
    <div
      class="container px-2 lg:px-0 pt-4 pb-5"
      :class="{'border-b border-white': url}"
    >
      <div class="flex justify-between items-center text-white">
        <!-- logo -->
        <div class="flex items-center">
          <nuxt-link to="/">
            <img class="mr-4 w-16" src="~/assets/images/logo/logo.png" alt="BHI Logo">
          </nuxt-link>
          <span>Descrubrí los colores de tu destino</span>
        </div>

        <!-- btns -->
        <div v-show="!user">
          <div v-if="$route.path === '/'" class="hidden lg:flex">
            <div class="btn-login mr-3" @click="login">
              Iniciar Sesión
            </div>
            <div class="btn-login" @click="register">
              Registrarme
            </div>
          </div>

          <div v-if="$route.path.includes('/tours')" class="flex items-center">
            <div class="hidden lg:flex">
              <div class="w-5 h-5 mr-4">
                <img class="cursor-pointer" src="~/assets/images/body/icons/search.svg" alt="Icon">
              </div>
              <div class="w-5 h-5 mr-4">
                <img class="cursor-pointer" src="~/assets/images/body/icons/user.svg" alt="Icon">
              </div>
            </div>

            <div>
              <div class="w-6 h-6 flex items-center">
                <img class="cursor-pointer" src="~/assets/images/body/icons/menu.svg" alt="Icon">
              </div>
            </div>
          </div>
        </div>

        <div v-show="user">
          <div v-if="$route.path.includes('/admin') || $route.path.includes('/client')" class="hidden lg:flex">
            <div
              class="flex items-center select-none cursor-pointer"
              @click="_logout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <g id="Icon_feather-log-out" data-name="Icon feather-log-out" transform="translate(-3.5 -3.5)">
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M9.833,24.5H6.278A2.038,2.038,0,0,1,4.5,22.278V6.722A2.038,2.038,0,0,1,6.278,4.5H9.833"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M24,19.389l4.444-4.444L24,10.5"
                    transform="translate(-3.944 -0.444)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M24.167,18H13.5"
                    transform="translate(0.333 -3.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>

              <span class="text-white text-xl ml-3">Cerrar Sesión</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['user']),
    url () {
      if (this.$route.path.includes('/admin') || this.$route.path.includes('/client')) {
        return false
      }
      return true
    }
  },
  methods: {
    ...mapActions('user', ['logout']),
    login () {
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      this.$nuxt.$emit('LOGIN_ACTIVE')
    },
    register () {
      this.$nuxt.$emit('OVERLAY_ACTIVE')
      this.$nuxt.$emit('CREATE_ACTIVE')
    },
    async _logout () {
      this.$router.push('/')
      await this.logout()
    }
  }
}
</script>
<style lang="postcss" scoped>
.btn-login {
  @apply border border-white rounded-2xl px-3 py-1 font-semibold text-13 cursor-pointer
}
.btn-login:hover {
  @apply text-bhi-primary bg-white duration-200
}
</style>
