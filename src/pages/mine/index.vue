<template>
  <div class="counter-warp">
    <wx-menu local="mine"></wx-menu>
    mine
  </div>
</template>

<script>
  import menu from "@/components/menu";
  export default {
    computed: {
      count () {
      }
    },

    components: {
      'wx-menu': menu
    },

    methods: {
      increment () {
      },
      decrement () {
      }
    }
  }

</script>
<style>

</style>
