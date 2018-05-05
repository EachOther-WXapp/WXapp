<template>
  <ul class="list">
    <li v-for="(i, index) in list" :key="index" @click="go(i)">
      <div class="top">
        <img :src="i.icon" alt="" class="left">
        <div class="right">
          <h2 class="title">{{i.title}}</h2>
          <p class="address">地址：{{i.address}}</p>
          <p class="bot"><span class="teacher">讲师：{{i.teacher}}</span> <span class="time">时间：{{i.time}}</span></p>
          <div class="bottom">
            <span><button class="btn">加入培训</button></span>
            <span><i class="iconfont icon-zan1"></i></span>
          </div>
        </div>
      </div>

    </li>
  </ul>
</template>

<script>
  import { link } from '@/utils'
  import detail from "./detail";

  export default {
    data(){
      return{
        list: [
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: '人力资源制度讲解',
            time: '20180504',
            address: '1号楼102',
            teacher: '刘泽明'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'java入门培训',
            time: '20180505',
            address: '2号楼201',
            teacher: '李思伍'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'c#.net入门培训',
            time: '20180506',
            address: '3号楼303',
            teacher: '张强'
          },     {
            icon: require('@/assets/detail_bg.jpg'),
            title: '人力资源制度讲解',
            time: '20180504',
            address: '1号楼102',
            teacher: '刘泽明'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'java入门培训',
            time: '20180505',
            address: '2号楼201',
            teacher: '李思伍'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'c#.net入门培训',
            time: '20180506',
            address: '3号楼303',
            teacher: '张强'
          },     {
            icon: require('@/assets/detail_bg.jpg'),
            title: '人力资源制度讲解',
            time: '20180504',
            address: '1号楼102',
            teacher: '刘泽明'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'java入门培训',
            time: '20180505',
            address: '2号楼201',
            teacher: '李思伍'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'c#.net入门培训',
            time: '20180506',
            address: '3号楼303',
            teacher: '张强'
          },     {
            icon: require('@/assets/detail_bg.jpg'),
            title: '人力资源制度讲解',
            time: '20180504',
            address: '1号楼102',
            teacher: '刘泽明'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'java入门培训',
            time: '20180505',
            address: '2号楼201',
            teacher: '李思伍'
          },
          {
            icon: require('@/assets/detail_bg.jpg'),
            title: 'c#.net入门培训',
            time: '20180506',
            address: '3号楼303',
            teacher: '张强'
          }
        ]
      }
    },
    components: {
      detail
    },

    methods: {
      go(obj){
        link('detail',obj)
      }
    }
  }

</script>
<style scoped>
  li{
    border-bottom: 1px solid #e8e8e8;
    padding: 30rpx;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .bottom{
    padding-top: 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom button{
    width: 200rpx;
    font-size: 28rpx;
  }
  .bottom i{
    font-size: 50rpx;
    text-align: right;
  }
  .left{
    width: 200rpx;
    height: 200rpx;
  }
  .right{
    padding: 0 30rpx;
    flex: 1;
  }
  .right .title{
    font-size: 40rpx;
  }
  .right .address{
    padding: 20rpx 0;
    font-size: 32rpx;
  }
  .right .bot{
    display: flex;
    justify-content: space-between;
  }
  .right .time{
    font-size: 24rpx;
  }
  .right .teacher{
    font-size: 24rpx;
  }
</style>

