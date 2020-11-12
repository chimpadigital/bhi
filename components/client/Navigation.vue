<template>
  <div class="flex flex-col max-w-xs">
    <nuxt-link
      class="navigation-item"
      exact-active-class="navigation-item-active"
      to="/client"
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
      to="/client/viajes"
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
      to="/client/perfil"
    >
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path id="Rectangle_350" data-name="Rectangle 350" d="M20,0h0A20,20,0,0,1,40,20v0A20,20,0,0,1,20,40H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" fill="#00008b" />
          <path id="Icon_material-person" data-name="Icon material-person" d="M18.5,18.5a6.25,6.25,0,1,0-6.25-6.25A6.248,6.248,0,0,0,18.5,18.5Zm0,3.125c-4.172,0-12.5,2.094-12.5,6.25V31H31V27.875C31,23.719,22.672,21.625,18.5,21.625Z" transform="translate(2 2)" fill="#fff" />
        </svg>

        <p class="ml-5">
          Mi perfil
        </p>
      </div>
    </nuxt-link>
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
