<template>
  <div class="history">
    <proList :data.sync="list" type="history"/>
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
        title: '培训历史'
      })
      this.init();
    },

    components: {
      proList
    },

    methods: {
      init () {
        http('POST',Api.history_train).then(res=>{
          this.list = res
        })
      },
    }
  }

</script>
<style scoped>

</style>
