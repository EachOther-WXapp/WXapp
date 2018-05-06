<template>
  <div class="publishTraninHistory">
    <proList :data.sync="list" type="publishTraninHistory"/>
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
        title: '我发布的培训'
      })
      this.init();
    },

    components: {
      proList
    },

    methods: {
      init () {
        http('POST',Api.published_train).then(res=>{
          this.list = res
        })
      },
    }
  }

</script>
<style scoped>

</style>
