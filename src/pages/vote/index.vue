<template>
  <div class="vote">
    <voteList :list.sync="list" type="vote"/>
  </div>
</template>

<script>
  import { http } from '@/utils'
  import Api from '@/config/api'
  import voteList from "@/components/voteList";
  export default {
    data(){
      return{
        list:[],
        totalApproveAmount: 0,
      }
    },
    onLoad() {
      wx.setNavigationBarTitle({
        title: '集赞区'
      })
      this.init();
    },

    components: {
      voteList
    },

    methods: {
      init(){
        http('GET',Api.vote_list).then(res=>this.list = res);
      },
    }
  }

</script>
<style scoped>

</style>
