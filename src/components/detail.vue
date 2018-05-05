<template>
  <div class="detail">
    <div class="head">
      <img :src="data.icon" alt="" class="left">
      <h2 class="title">{{data.title}}</h2>
      <p class="time">时间：{{data.time}}</p>
      <p class="address">地址：{{data.address}}</p>
      <p class="teacher">讲师：{{data.teacher}}</p>
      <p class="remank">详情：{{data.remank}}</p>
    </div>
    <div class="qa">
      <ul>
        <li v-for="(i, index) in list" :key="index">
          <div class="q">
            <span>{{i.q}}</span>
          </div>
          <div class="a">
            {{i.a}}
          </div>
        </li>
      </ul>
    </div>
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
    props: ['data'],
    created(){
        this.data = {
          icon: require('@/assets/detail_bg.jpg'),
          title: '人力资源制度讲解',
          time: '20180504',
          address: '1号楼102',
          teacher: '刘泽明',
          remank: '这里是心情熬过去这里是心情熬过去这里是心情熬过去这里是心情熬过去这里是心情熬过去这里是心情熬过去这里是心情熬过去这里是心情熬过去这里是心情熬过去'
        }
    }

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
.head .time{
  font-size: 32rpx;
  color: #666;
}
.head .address{
  font-size: 32rpx;
  color: #666;
}
.head .teacher{
  font-size: 32rpx;
  color: #666;
}
.head .remank{
  font-size: 32rpx;
  color: #666;
}
</style>
