<template>
  <div class="detail">
    <div class="head">
      <img :src="data.imageUrl" alt="" class="left">
      <h2 class="title">{{data.theme}}</h2>
      <p class="time">
        <i class="iconfont icon-kaishishijian"></i>
       <span>开始时间：{{data.trainStartTimeStr}}</span>
      </p>
      <p class="time">
        <i class="iconfont icon-jieshushijian"></i>
        <span>结束时间：{{data.trainEndTimeStr}}</span>
      </p>
      <p class="teacher">
        <i class="iconfont icon-jiangshi"></i>
        <span>讲师：{{data.lecturer}}</span>
      </p>
      <p class="address">
        <i class="iconfont icon-didian"></i>
        <span>地址：{{data.site}}</span>
      </p>
      <p class="conferenceId">
        <i class="iconfont icon-team"></i>
        <span>TeamView：{{data.conferenceId}}</span>
      </p>
      <p class="githubUrl">
        <i class="iconfont icon-github"></i>
        <span>github：{{data.githubUrl}}</span>
      </p>
      <p class="remank">
        <i class="iconfont icon-record-copy"></i>
        <span>详情：{{data.detail}}</span>
      </p>
    </div>
    <div class="bottom" v-if="type === 'index' || type === 'month'">
      <span><button class="btn" @click="join" :class="data.joinFlag ? '' : 'dis'">{{ data.joinFlag ? '加入培训' : '您已参加'}}</button></span>
      <span class="zancon" :class="act ? 'animate' : ''"><i class="likeNumber" v-if="data.likeNumber>0" >+{{data.likeNumber}}</i><i @click="zan" class="zan iconfont icon-zan1" :class="data.likeNumber>0 ? 'act' : ''"></i></span>
    </div>
    <!--<div class="qa">-->
      <!--<ul>-->
        <!--<li v-for="(i, index) in list" :key="index">-->
          <!--<div class="q">-->
            <!--<span>{{i.q}}</span>-->
          <!--</div>-->
          <!--<div class="a">-->
            <!--{{i.a}}-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>
  import { link } from '@/utils'
  import { http } from '@/utils'
  import Api from '@/config/api'
  export default {
    data(){
      return{
        act: false,
        list:[{
          q: '考试是开卷还是闭卷',
          a: '开卷'
        },{
          q: '可以请假不',
          a: '可以'
        }]
      }
    },
    props: ['data', 'type'],
    methods: {
      join(){
        if(!this.data.joinFlag)return
        http('GET',Api.join_train,{trainId:this.data.id}).then(()=>{
          this.data.joinFlag = !this.data.joinFlag
          wx.showToast({
            title: "加入成功!",
            duration: 1000
          })
          link('main')
        })
      },
      zan(){
        this.act = !this.act;
        setTimeout(()=>{this.act = !this.act},500)
        http('GET',Api.zan,{trainId:this.data.id}, null, false).then(()=>this.data.likeNumber++);
      }
    }
  };
</script>

<style scoped>
.detail{
  padding: 0 30rpx 100rpx;
}
.head img{
  background: rgba(101, 228, 110, 0.05);
  width: 100%;
}
.head .title{
  height: 50rpx;
  text-align: center;
  font-size: 40rpx;
}
.head p{
  padding: 30rpx 0;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  line-height: 70rpx;
  font-size: 32rpx;
  color: #666;
}
.head p:last-child{
  border: none;
}
.head p i{
  width: 50rpx;
}
.bottom{
  border-top: 1px solid #dedede;
  right: 0;
  left: 0;
  background: #fff;
  position: fixed;
  bottom: 0;
  line-height: 100rpx;
  display: flex;
  align-items: center;
}
.bottom span{
  flex: 1;
  text-align: center;
}
.bottom span:last-child{
  position: relative;
}
.bottom i{
  font-size: 50rpx;
}
.bottom i.likeNumber{
  left: 54%;
  top: -25rpx;
  color: #65e46e;
  position: absolute;
  font-size: 24rpx;
}
.zancon.animate{
  animation: zan cubic-bezier(0,1.93,.28,.05) .5s ;
}
.zan.act{
  color: #65e46e;
}
.btn{
  border-radius: 0;
}
.btn.dis{
  pointer-events: none;
  background: #ccc;
}
@keyframes zan
{
  0% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-100rpx) scale(1.5);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
