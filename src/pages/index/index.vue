<template>
  <div class="index">
    <proList :data.sync="list" type="index"/>
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
      http('POST',Api.today_list,null,false).then(res=>this.list = res)
    },
  }
}

</script>
<style scoped>

</style>
