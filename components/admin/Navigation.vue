<template>
  <div class="flex flex-col max-w-xs">
    <nuxt-link
      class="navigation-item"
      exact-active-class="navigation-item-active"
      to="/admin"
    >
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g id="Group_651" data-name="Group 651" transform="translate(-120 -306)">
            <path
              id="Rectangle_350"
              class="_b"
              data-name="Rectangle 350"
              d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z"
              transform="translate(120 306)"
              fill="#00008b"
            />
            <path
              id="Icon_material-home"
              class="_w"
              data-name="Icon material-home"
              d="M13,25.75v-7.5h5v7.5h6.25v-10H28L15.5,4.5,3,15.75H6.75v10Z"
              transform="translate(125 310.5)"
              fill="#fff"
            />
          </g>
        </svg>

        <span class="ml-5">Inicio</span>
      </div>
    </nuxt-link>

    <nuxt-link
      class="navigation-item"
      active-class="navigation-item-active"
      exact-active-class="navigation-item-active"
      to="/admin/viajes"
    >
      <div class="flex items-center">
        <svg
          id="Group_647"
          data-name="Group 647"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path id="Rectangle_333" class="_b" data-name="Rectangle 333" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
          <path
            id="Icon_material-location-on"
            class="_w"
            data-name="Icon material-location-on"
            d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z"
            transform="translate(3.5 5)"
            fill="#fff"
          />
        </svg>

        <span class="ml-5">Tours / Viajes</span>
      </div>
    </nuxt-link>

    <nuxt-link
      class="navigation-item"
      active-class="navigation-item-active"
      exact-active-class="navigation-item-active"
      to="/admin/informacion"
    >
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g id="Group_645" data-name="Group 645" transform="translate(-45 -453)">
            <path
              id="Rectangle_334"
              class="_b"
              data-name="Rectangle 334"
              d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z"
              transform="translate(45 453)"
              fill="#00008b"
            />
            <path
              id="Icon_awesome-info-circle"
              class="_w"
              data-name="Icon awesome-info-circle"
              d="M13.063.563a12.5,12.5,0,1,0,12.5,12.5A12.5,12.5,0,0,0,13.063.563Zm0,5.544a2.117,2.117,0,1,1-2.117,2.117A2.117,2.117,0,0,1,13.063,6.107Zm2.823,12.8a.6.6,0,0,1-.6.6H10.845a.6.6,0,0,1-.6-.6V17.7a.6.6,0,0,1,.6-.6h.6V13.869h-.6a.6.6,0,0,1-.6-.6v-1.21a.6.6,0,0,1,.6-.6h3.226a.6.6,0,0,1,.6.6v5.04h.6a.6.6,0,0,1,.6.6Z"
              transform="translate(52.438 459.438)"
              fill="#fff"
            />
          </g>
        </svg>

        <p class="ml-5">
          Información de <br>
          Tours / Viajes
        </p>
      </div>
    </nuxt-link>

    <nuxt-link
      class="navigation-item"
      active-class="navigation-item-active"
      exact-active-class="navigation-item-active"
      to="/admin/agencias"
    >
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g id="Group_646" data-name="Group 646" transform="translate(-24 -615)">
            <path
              id="Rectangle_336"
              class="_b"
              data-name="Rectangle 336"
              d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z"
              transform="translate(24 615)"
              fill="#00008b"
            />
            <path
              id="Icon_map-travel-agency"
              class="_w"
              data-name="Icon map-travel-agency"
              d="M23.44,7.88h-6V5.892c0-1.426-.921-3.012-2.344-3.012H10.3C8.874,2.88,7.94,4.466,7.94,5.892V7.88H2.44a1,1,0,0,0-1,1v14.5a1,1,0,0,0,1,1h21a1,1,0,0,0,1-1V8.88A1,1,0,0,0,23.44,7.88Zm-8,15H9.94v-.534c0-.011.307-.026.453-.044a1.581,1.581,0,0,0,.38-.088.964.964,0,0,0,.474-.3,1.037,1.037,0,0,0,.193-.523V16.273a1.089,1.089,0,0,0-.218-.54,1.283,1.283,0,0,0-.39-.374,1.169,1.169,0,0,0-.393-.2c-.214-.065-.5-.106-.5-.123v-.641l4.088-.229-.087.132v6.978a1.072,1.072,0,0,0,.246.523.957.957,0,0,0,.435.321,2.918,2.918,0,0,0,.383.141c.141.041.436.07.436.088ZM10.75,11a1.5,1.5,0,0,1,.514-1.143,1.815,1.815,0,0,1,2.448,0A1.508,1.508,0,0,1,14.221,11a1.488,1.488,0,0,1-.514,1.138,1.823,1.823,0,0,1-2.444,0A1.487,1.487,0,0,1,10.75,11Zm5.19-3.12H9.44V5.892c0-.533.54-1.512,1.073-1.512H14.54c.532,0,1.4.978,1.4,1.512Z"
              transform="translate(31.56 621.12)"
              fill="#fff"
            />
          </g>
        </svg>

        <span class="ml-5">Agencias</span>
      </div>
    </nuxt-link>

    <div v-if="$route.path.includes('/admin/agencias')" class="flex flex-col items-end" style="max-width: 274px;">
      <a class="underline text-base mb-4 cursor-pointer" @click="agencyRoute(true)">
        Agencias registradas
      </a>
      <a class="underline text-base cursor-pointer" @click="agencyRoute(false)">
        Solicitudes pendiente
      </a>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    agencyRoute (b) {
      return this.$nuxt.$emit('AGENCY_SHOW_SECTION', b)
    }
  }
}
</script>
<style lang="postcss" scoped>
.navigation-item {
  @apply flex items-center pl-5 h-20 text-xl font-bold rounded-3xl rounded-bl-none mb-10 duration-300;
  background: #E4F4FF;
  max-width: 274px;
  &:hover {
    @apply bg-bhi-primary text-white;
  }
}

.navigation-item:hover ._b {
  @apply text-white fill-current
}
.navigation-item:hover ._w {
  @apply text-bhi-primary fill-current
}

.navigation-item-active {
  @apply bg-bhi-primary text-white;
}
.navigation-item-active ._b {
  @apply text-white fill-current;
}
.navigation-item-active ._w {
  @apply text-bhi-primary fill-current
}
</style>
