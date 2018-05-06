<template>
  <div class="detail">
    <div class="head">
      <img :src="data.imageUrl" alt="" class="left" v-if="data.imageUrl">
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

  export default {
    data(){
      return{
        list:[{
          q: '考试是开卷还是闭卷',
          a: '开卷'
        },{
          q: '可以请假不',
          a: '可以'
        }]
      }
    },
    props: ['data']
  };
</script>

<style scoped>
.detail{
  padding: 0 30rpx;
}
.head img{
  width: 100%;
}
.head .title{
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
.head p i{
  width: 50rpx;
}
</style>
