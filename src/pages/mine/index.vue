<template>
  <div class="container">
    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
    </div>
    <wx-menu local="mine"></wx-menu>
  </div>
</template>

<script>
  import menu from "@/components/menu";
  export default {
    data(){
      return{
        userInfo: "",
      }
    },
    computed: {
      count () {
      }
    },

    components: {
      'wx-menu': menu
    },

    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo();
    },

    methods: {
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: res => {
                this.userInfo = res.userInfo;
                console.log(res)
              }
            });
          }
        });
      },
    }
  }

</script>
<style>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

</style>
