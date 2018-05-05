<template>
  <div class="container" v-once>
    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
      <span>{{userInfo.nickName}}</span>
    </div>
    <div>
      <ul>
        <li v-for="(i,index) in featurelist" :key="index" @click="go(i)">
          <span>{{i.icon}}</span>
          <span>{{i.name}}</span>
        </li>
      </ul>
    </div>
    <div class="list">
      <!--<h2 class="title">我的信息</h2>-->
      <ul>
        <li v-for="(i,index) in infolist" :key="index" @click="go(i)">
          <span>{{i.icon}}</span>
          <span>{{i.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { link } from '@/utils'
  export default {
    data(){
      return{
        userInfo: {},
        featurelist: [{
          icon: '',
          name: '发起培训',
          url: 'publishTrain'
        },{
          icon: '',
          name: '发起投票',
          url: ''
        }],
        infolist: [{
          icon: '',
          name: '我参加的',
          url: ''
        },{
          icon: '',
          name: '我发布的',
          url: ''
        },{
          icon: '',
          name: '我培训的',
          url: ''
        }]
      }
    },
    computed: {
      count () {
      }
    },

    components: {
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
//                console.log(res)
              }
            });
          }
        });
      },
      go(obj){
        link(obj.url)
      }
    }
  }

</script>
<style scoped>
  .userinfo {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300rpx;
    background: #65e46e;
    color: #fff;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  .list{
    background: #fff;
    width: 100%;
  }
  .title{
    background: #f12f2f2;
    width: 100%;
    text-align: left;
    margin: 20px auto
  }
  .list li{
    position: relative;
    display: flex;
    align-items: center;
    padding: 30rpx 45rpx;
    border-bottom: 1px solid #e8e8e8;
  }
  .list li:after{
    position: absolute;
    right: 45rpx;
    content: '>';
    transform: scale(1,1.5);
  }

</style>
