<template>
  <div class="flex flex-col lg:flex-row">
    <div
      v-for="(e, i) in data"
      :key="i"
      class="tags__general mr-5 last:mr-0 mt-2 lg:mt-0"
    >
      <span class="mr-4">
        {{ e }}
      </span>

      <svg xmlns="http://www.w3.org/2000/svg" width="5.798" height="5.547" viewBox="0 0 5.798 5.547">
        <path id="Icon_material-close" data-name="Icon material-close" d="M13.3,8.059,12.714,7.5,10.4,9.715,8.084,7.5,7.5,8.059l2.315,2.215L7.5,12.489l.584.559L10.4,10.832l2.315,2.215.584-.559-2.315-2.215Z" transform="translate(-7.5 -7.5)" fill="#09f" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>
