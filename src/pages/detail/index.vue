<template>
  <div class="detail">
    <detail :data="detail"/>
  </div>
</template>

<script>
  import { http } from '@/utils'
  import Api from '@/config/api'
  import detail from "@/components/detail"
  export default {
    data(){
      return{
        detail: {}
      }
    },
    onLoad() {
      this.init();
    },
    components: {
      detail
    },
    methods: {
      init () {
        const {trainId} = this.$root.$mp.query;
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
