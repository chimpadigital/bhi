<template>
  <div class="z-30 absolute top-0 left-0 w-screen h-screen">
    <div class="flex justify-center items-center w-full h-full px-4 lg:px-0">
      <div class="login__modal">
        <!-- btn closerelative  -->
        <div class="absolute cursor-pointer" style="top: 30px; right: 30px" @click="close">
          <svg
            id="Boton_cerrar"
            data-name="Boton cerrar"
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
              fill="#00008b"
            />
            <g id="Group_525" data-name="Group 525" transform="translate(10 10)">
              <line
                id="Line_2"
                data-name="Line 2"
                x1="10"
                y2="10"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="1.5"
              />
              <line
                id="Line_3"
                data-name="Line 3"
                x2="10"
                y2="10"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="1.5"
              />
            </g>
          </svg>
        </div>

        <!-- title -->
        <p class="text-center text-bhi-primary font-bold text-2xl lg:text-4xl mt-12">
          Iniciar Sesión
        </p>

        <!-- form -->
        <div class="mt-16 px-8 lg:px-24 pb-12">
          <div class="flex flex-col mb-4">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Correo Electrónico</span>
            <input v-model="email" class="input-bhi" type="text">
          </div>
          <div class="flex flex-col">
            <span class="lg:text-xl text-lg font-bold mb-4 pl-5">Contraseña</span>
            <input v-model="password" class="input-bhi" type="password">
          </div>
        </div>

        <!-- btn -->
        <div class="text-center">
          <span
            class="bg-bhi-primary border-2 border-bhi-primary text-white rounded-3xl py-4 px-12 text-lg lg:text-xl hover:bg-white hover:text-bhi-primary outline-none cursor-pointer duration-300"
            @click="onLogin"
          >
            Iniciar Sesión
          </span>
        </div>

        <!-- new acc / recovery -->
        <div class="text-center recovery-text text-base my-10 flex flex-col">
          <span class="cursor-pointer mb-3" @click="openCreate">¿No tenés cuenta? Regístrate.</span>
          <span class="cursor-pointer" @click="openRecovery">Restaurar contraseña.</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '~/helpers/api'
import { isAdmin } from '~/helpers/methods'
export default {
  data: () => ({
    email: 'admin@bhi.com',
    password: 'password@2000'
  }),
  methods: {
    async onLogin () {
      try {
        const { data } = await login(this.email, this.password)

        const { token, user } = data

        if (!token) {
          return alert(JSON.stringify(data))
        }

        return this.verifyActive(user.verify, user.active, user.roles)
      } catch (error) {
        alert(error)
      }
    },
    verifyActive (v, a, r) {
      if (!a) {
        return alert('usuario no fue acivado')
      }

      if (!v) {
        return alert('usuario a la espera de verificacion')
      }

      if (v && a) {
        this.$nuxt.$emit('OVERLAY_DISABLED')
        this.$nuxt.$emit('LOGIN_DISABLED')

        if (isAdmin(r)) {
          return this.$router.push('/admin')
        }

        this.$router.push('/tours')
      }
    },
    openCreate () {
      this.$nuxt.$emit('LOGIN_DISABLED')
      this.$nuxt.$emit('CREATE_ACTIVE')
    },
    openRecovery () {
      this.$nuxt.$emit('LOGIN_DISABLED')
      this.$nuxt.$emit('RECOVERY_ACTIVE')
    },
    close () {
      this.$nuxt.$emit('LOGIN_DISABLED')
      this.$nuxt.$emit('OVERLAY_DISABLED')
    }
  }
}
</script>
<style lang="postcss" scoped>
.login__modal  {
  @apply relative w-full max-w-3xl bg-white rounded-3xl rounded-bl-none bg-top bg-no-repeat;
  background-image: url('/assets/images/body/bg-login.svg'), url('/assets/images/body/bg-login-2.svg');
  background-position: left top, 97% bottom;
  background-size: 100% auto, auto 44%;
  transition: .3s cubic-bezier(.25,.8,.25,1);
  animation: fadeIn 0.4s;
}
.recovery-text {
  color: #0099FF
}
</style>
