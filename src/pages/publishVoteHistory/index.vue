<template>
  <div class="publishVoteHistory">
    <voteList :list.sync="list" type="publishVoteHistory"/>
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
        title: '我发布的集赞'
      })
      this.init();
    },

    components: {
      voteList
    },

    methods: {
      init(){
        http('GET',Api.published_vote).then(res=>this.list = res);
      },
    }
  }

</script>
<style scoped>

</style>
