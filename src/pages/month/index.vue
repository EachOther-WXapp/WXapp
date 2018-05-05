<template>
  <div class="all">
    <proList :data.sync="list"/>
  </div>
</template>

<script>
  import { http } from '@/utils'
  import Api from '@/config/api'
  import proList from "@/components/list";
  export default {
    data(){
      return{
        list:[]
      }
    },
    onLoad() {
      this.init();
    },

    components: {
      proList
    },

    methods: {
      init () {
        http('POST',Api.month_list).then(res=>{
          this.list = res
        })
      },
    }
  }

</script>
<style scoped>

</style>
