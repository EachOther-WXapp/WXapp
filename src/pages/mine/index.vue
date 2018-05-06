<template>
  <div class="container" >
    <div class="userinfo">
      <img :src="head_bg" alt="" class="bg">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
      <span class="nickName">{{userInfo.nickName}}</span>
    </div>
    <ul class="featurelist">
      <li v-for="(i,index) in featurelist" :key="index" @click="go(i)">
        <i class="iconfont" :class="i.icon"></i>
        <span>{{i.name}}</span>
      </li>
    </ul>
    <div class="infolist">
      <!--<h2 class="title">我的信息</h2>-->
      <ul>
        <li v-for="(i,index) in infolist" :key="index" @click="go(i)">
          <i class="iconfont" :class="i.icon"></i>
          <span>{{i.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import store from '@/state/store'
  import { link } from '@/utils'
  export default {
    data(){
      return{
        head_bg: require('@/assets/head_bg.jpg'),
        userInfo: store.state.userInfo,
        featurelist: [{
          icon: 'icon-peixun',
          name: '发起培训',
          url: 'publishTrain'
        },{
          icon: 'icon-toupiao',
          name: '发起投票',
          url: 'publishVote'
        }],
        infolist: [{
          icon: 'icon-daiban',
          name: '我参加的',
          url: 'joined'
        },{
          icon: 'icon-fabu',
          name: '我发布的',
          url: ''
        },{
          icon: 'icon-shouye',
          name: '我培训的',
          url: 'history'
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
    },

    methods: {
      go(obj){
        link(obj.url)
      }
    }
  }

</script>
<style scoped>
  .userinfo {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300rpx;
    color: #fff;
  }
  .userinfo .bg{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .userinfo-avatar {
    position: relative;
    z-index: 1;
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  .nickName{
    position: relative;
    z-index: 1;
  }

  .title{
    background: #f12f2f2;
    width: 100%;
    text-align: left;
    margin: 20px auto
  }
  .featurelist{
    padding: 40rpx 0;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    width: 100%;
    align-items: center;
    position: relative;
    color: #65e46e;
  }
  .featurelist i{
    font-size: 50rpx;
    padding-bottom: 20rpx;
  }
  .featurelist:after{
    display: block;
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    height: 100%;
    width: 1px;
    background: #e8e8e8;
  }
  .featurelist li{
    text-align: center;
    flex: 1;
  }
  .infolist{
    background: #fff;
    width: 100%;
  }
  .infolist i{
    padding-right: 20rpx;
  }
  .infolist li{
    font-size: 28rpx;
    position: relative;
    display: flex;
    align-items: center;
    padding: 30rpx 45rpx;
    border-bottom: 1px solid #e8e8e8;
  }
  .infolist li:after{
    position: absolute;
    right: 45rpx;
    content: '>';
    transform: scale(1,1.5);
  }

</style>
