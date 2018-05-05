<script>
  import store from '@/state/store'
  import { http } from '@/utils'
  import Api from '@/config/api'

  export default {
  created () {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: r => {
          http('POST',Api.set_user_info,r).then(result=>{
            store.commit('set_token', result)
            wx.getUserInfo({
              success: res => {
                store.commit('set_user_info', res.userInfo)
                http('POST',Api.update_user_info,res.userInfo)
              }
            });
          });
        }
      });
    },
  }
}
</script>

<style>
  @import "./assets/font/iconfont.css";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #8e8c8c;
  font-size: 32rpx;
  background: #f12f2f2;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
  .btn{
    background: #65e46e;
    color: #fff;
  }
  .btn:active{
    background: #65D96D;
  }
</style>
