<template>
  <div>
    <ul class="list" v-if="data.length">
      <li v-for="(i, index) in data" :key="index" :class="type === 'publishTraninHistory' ? 'publishTraninHistory' : ''">
        <div class="top">
          <img :src="i.imageUrl" alt="" class="left" v-if="i.imageUrl" @click="go(i)">
          <div class="right">
            <div @click="go(i)">
              <h2 class="title">{{i.theme}}</h2>
              <p class="address">地址：{{i.site}}</p>
              <p class="bot"><span class="teacher">讲师：{{i.lecturer}}</span> <span class="time">时间：{{i.trainStartTimeStr}}~{{i.trainEndTimeStr}}</span></p>
            </div>
            <div class="bottom" v-if="type === 'index' || type === 'month'">
              <span><button class="btn" @click="join(i, index)" :class="i.joinFlag ? '' : 'dis'">{{ i.joinFlag ? '加入培训' : '已参加'}}</button></span>
              <span class="zancon" :class="index === act ? 'animate' : 'plus'"><i class="likeNumber" v-if="i.likeNumber>0" >+{{i.likeNumber}}</i><i @click="zan(i,index)" class="zan iconfont icon-zan1" :class="i.likeNumber>0 ? 'act' : ''"></i></span>
            </div>
          </div>
        </div>
        <div class="del" v-if="type === 'publishTraninHistory'">
          <button class="btn" @click="del(i, index)">删除</button>
        </div>
      </li>
    </ul>
    <div class="none" v-if="show">
      <img :src="img" alt="">
      <button class="btn" @click="submit">发起培训</button>
    </div>
  </div>
</template>

<script>
  import { link } from '@/utils'
  import detail from "./detail";
  import { http } from '@/utils'
  import Api from '@/config/api'
  export default {
    data(){
      return{
        show: false,
        img: require('@/assets/none.png'),
        act: null
      }
    },
    components: {
      detail
    },
    props: ['data', 'type'],

    methods: {
      go(obj){
        link('detail',{trainId: obj.id, type: this.type})
      },
      join(obj,index){
        if(!obj.joinFlag)return
        http('GET',Api.join_train,{trainId:obj.id}).then(()=>{
          this.data[index].joinFlag = !this.data[index].joinFlag
          wx.showToast({
            title: "加入成功!",
            duration: 1000
          })
        })
      },
      zan(obj,index){
        this.act = index;
        setTimeout(()=>{this.act = null },500)
        http('GET',Api.zan,{trainId:obj.id}, null, false).then(()=>this.data[index].likeNumber++);
      },
      del(obj, index){
        let _this = this;
        wx.showModal({
          title: "警告！",
          content: "您确定要删除此条发布记录吗",
          confirmText: "确定",
          cancelText: "取消",
          success: function(res) {
            if (res.confirm) {
              http('GET',Api.delete_train,{trainId:obj.id}).then(()=>{
                _this.data.splice(index,1)
              });
            }
          }
        })
      },
      submit(){
        link('publishTrain')
      }
    },
    watch:{
      'data'(val){
        this.show = !val.length
      }
    }
  }

</script>
<style scoped>
  li{
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    padding: 30rpx;
    display: flex;
    align-items: center;
  }
  li.publishTraninHistory{
    flex-direction: column;
  }
  li:last-child{
    border: none
  }
  li>div{
    flex: 1;
  }
  li:after{
    position: absolute;
    right: 20rpx;
    content: '>';
    transform: scale(1,1.5);
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
  .bottom span:last-child{
    position: relative;
  }
  .bottom i{
    font-size: 50rpx;
    text-align: right;
  }
  .bottom i.likeNumber{
    right: -20rpx;
    top: -20rpx;
    color: #65e46e;
    position: absolute;
    font-size: 24rpx;
  }
  .left{
    background: rgba(101, 228, 110, 0.05);
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
  .del{
    margin: 40rpx auto 0;
    width: 200rpx;
  }
  .del .btn{
    height: 70rpx;
    line-height: 70rpx;
    font-size: 32rpx;
  }
  .zancon.animate{
    animation: zan .5s ;
  }
  .zan.act{
    color: #65e46e;
  }
  .btn.dis{
    pointer-events: none;
    background: #ccc;
  }
  @keyframes zan
  {
    0% {
      transform-origin: left top;
      transform: scale(.9) rotate(45deg);
    }
    75% {
      transform-origin: left top;
      transform: scale(1.5) rotate(-30deg);
    }
    100% {
      transform-origin: left top;
      transform: scale(1) rotate(0);
    }
  }

</style>

