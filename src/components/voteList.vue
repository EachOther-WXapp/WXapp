<template>
  <div class="voteList">
    <ul>
      <li v-for="(i, index) in list" :key="index" v-if="list.length">
        <div class="con">
          <span class="title">{{i.content}}</span>
          <progress :percent="i.percent" show-info activeColor="#65e46e" stroke-width="12" active active-mode="forwards"/>
          <div class="zan"  v-if="type !== 'publishVoteHistory'">
            <i @click="zan(i,index, 'approveAmount')" class="zan iconfont icon-zan1" :class="index === act && type === 'approveAmount' ? 'act' : i.approveAmount>0 ? 'approveAmount':''">{{i.approveAmount}}</i>
            <i @click="zan(i,index, 'disapproveAmount')" class="zan iconfont icon-cai"  :class="index === act2 && type === 'disapproveAmount' ? 'act2' : i.disapproveAmount ? 'disapproveAmount':''">{{i.disapproveAmount}}</i>
          </div>
        </div>
        <div class="delete" v-if="type === 'publishVoteHistory'">
          <button class="btn" @click="del(i, index)">删除</button>
        </div>
      </li>
    </ul>
    <div class="none" v-if="show">
      <img :src="img" alt="">
      <button class="btn" @click="submit">发起投票</button>
    </div>
  </div>
</template>

<script>
  import { link } from '@/utils'
  import { http } from '@/utils'
  import Api from '@/config/api'
  export default {
    data() {
      return {
        totalApproveAmount: 0,
        img: require('@/assets/none.png'),
        show: false,
        act: null,
        act2: null,
        type: null,
      }
    },

    props: ['list', 'type'],

    methods: {
      set_percent(){
        this.list.forEach(t=>{
          t.percent = (t.approveAmount/this.totalApproveAmount*100).toFixed(2)
        })
      },
      zan(obj, index, type){
        this.type = type
        setTimeout(()=>{
          this.act = null
          this.act2 = null
          this.type = null
        },500)
        if(type === 'approveAmount'){
          this.act = index;
          http('GET',Api.vote_approve,{voteOptionId:obj.id}, null, false).then(()=>{
            obj[type]++
            this.totalApproveAmount++
            this.set_percent();
          });
        }else{
          this.act2 = index
          http('GET',Api.vote_disapprove,{voteOptionId:obj.id}, null, false).then(()=>{
            obj[type]++
          });
        }
      },
      submit(){
        link('publishVote')
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
              http('GET',Api.delete_vote,{voteOptionId:obj.id}).then(()=>{
                _this.list.splice(index,1)
              });
            }
          }
        })
      }
    },
    watch: {
      'list'(val){
        this.show = !val.length;
        if(this.show)return;
        this.totalApproveAmount = this.list[0].totalApproveAmount;
        this.set_percent()
      }
    }
  }

</script>
<style scoped>
  .voteList{
    padding: 30rpx;
    padding-bottom: 100rpx;
  }
  li{
    padding: 30rpx 0;
    border-bottom: 1px solid #e8e8e8;
  }
  li:last-child{
    border: none
  }
  .title{
    font-size: 30rpx;
  }
  progress{
    padding: 20rpx 0;
  }
  .zan{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .zan i{
    font-size: 40rpx;
  }

  .zan.act{
    animation: zan .5s ;
    color: #65e46e;
  }
  .zan.approveAmount{
    color: #65e46e;
  }
  .zan.disapproveAmount{
    color: rgba(255, 0, 0, 0.73);
  }
  .zan.act2{
    animation: zan2 .5s ;
    color: rgba(255, 0, 0, 0.73);
  }

  .delete{
    margin: 20rpx auto;
    width: 200rpx;
  }

  @keyframes zan
  {
    0% {
      transform: scale(.9)  translateX(0);
    }
    75% {
      transform: scale(1.5) translateX(100rpx);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }

  @keyframes zan2
  {
    0% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(100rpx);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
