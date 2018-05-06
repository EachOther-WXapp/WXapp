<template>
  <div class="month">
    <proList :data.sync="list" type="month"/>
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
        title: '一个月内的培训'
      })
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
