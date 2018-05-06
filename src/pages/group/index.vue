<template>
  <div class="group">
    <ul>
      <li v-for="(i,index) in list" :key="index" @click="go(i)">
        <img :src="i.icon" alt="">
        <p>{{i.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { link } from '@/utils'
export default {
  data(){
      return{
        list:[{
          icon: require('@/assets/group1.jpeg'),
          name: '最近一个月',
          url: 'month'
        },{
          icon: require('@/assets/group2.jpg'),
          name: '培训投票区',
          url: 'publishTrain'
        },{
          icon: require('@/assets/group3.png'),
          name: '敬请期待',
          url: ''
        }]
      }
  },
  methods: {
      go(obj){
        link(obj.url)
      }
  }
}

</script>
<style scoped>
  .group{

  }
  li{
    position: relative;
    height: 300rpx;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30rpx;
    justify-content: center;
  }
  li img{
    background: rgba(101, 228, 110, 0.05);
    height: 100%;
    position: absolute;
    filter: blur(5rpx)
  }
  li p{
    text-shadow: 2px 2px 2px #d91700;
    font-size: 100rpx;
    color: #d91700;
    position: absolute;
  }
</style>
