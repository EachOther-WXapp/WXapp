<template>
  <div class="counter-warp">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        {{i.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{
                name: '12321'
            },{
                name: 'dasfs'
            }]
        }
    },
  computed: {
    count () {
    }
  },

  components: {
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
