<template>
  <div class="all">
    <proList :data.sync="list" type="joined"/>
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
      wx.setNavigationBarTitle({
        title: '我参加的'
      })
      this.init();
    },

    components: {
      proList
    },

    methods: {
      init () {
        http('POST',Api.joined_train).then(res=>{
          this.list = res
        })
      },
    }
  }

</script>
<style scoped>

</style>
