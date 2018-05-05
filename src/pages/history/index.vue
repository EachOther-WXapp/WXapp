<template>
  <div class="detail">
    <detail :data="$root.$mp.query"/>
  </div>
</template>

<script>
  import detail from "@/components/detail"
  export default {
    computed: {
      count () {
      }
    },

    components: {
      detail
    },
    methods: {
      increment () {
      },
      decrement () {
      }
    }
  }

</script>
<style scoped>

</style>
