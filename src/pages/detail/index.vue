<template>
  <div class="detail">
    <detail :data="detail" :type="type"/>
  </div>
</template>

<script>
  import { http } from '@/utils'
  import Api from '@/config/api'
  import detail from "@/components/detail"
  export default {
    data(){
      return{
        type: '',
        detail: {}
      }
    },
    onLoad() {
      wx.setNavigationBarTitle({
        title: '培训详情'
      })
      this.detail = {}
      this.init();
    },
    components: {
      detail
    },
    methods: {
      init () {
        const {trainId, type} = this.$root.$mp.query;
        this.type = type;
        http('GET',Api.train_detail,{
          trainId
        }).then(res=>{
          this.detail = res
        })
      },
    }
  }

</script>
<style scoped>

</style>
