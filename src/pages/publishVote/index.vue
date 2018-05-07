<template>
  <div class="publishVote">
    <textarea v-model="content" placeholder="请写出你自己希望培训的内容，并发起投票"></textarea>
    <button class="btn" @click="submit">发起投票</button>
  </div>
</template>

<script>
  import { link } from '@/utils'
  import { http, upload } from '@/utils'
  import Api from '@/config/api'
  export default {
    data() {
      return {
        content: ''
      }
    },
    onLoad(){
      wx.setNavigationBarTitle({
        title: '发起投票'
      })
    },
    methods: {
      submit(e) {
        if(!this.content){
          wx.showModal({
            title: "提示",
            content: "请填写投票内容!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        http('GET',Api.add_option,{content: this.content}).then(()=>{
          wx.showToast({
            title: "发起投票成功!",
            duration: 1000
          })
          setTimeout(()=>{
            link('vote')
          },1000)
        })
      },
    }
  }

</script>
<style scoped>
.publishVote{
  padding: 30rpx;
}
textarea{
  margin-bottom: 50rpx;
  box-sizing: border-box;
  padding: 30rpx;
  width: 100%;
  border: 1px solid #e8e8e8;
}

</style>
