<template>
  <div class="publish">
    <ul>
      <li>
        <i class="iconfont icon-zhuti"></i>
        <input type="text" v-model="item.title" placeholder="主题">
      </li>
      <li class="time">
        <i class="iconfont icon-shijian"></i>
        <div class="picker">
          <picker mode="date" :value="date.value" :start="date.start" :end="date.end" @change="timeChange($event, 0)">
            <input type="text" v-model="date.value" placeholder="年月日">
          </picker>
          <picker mode="time" :value="time.value" :start="time.start" :end="time.end" @change="timeChange($event, 1)">
            <input type="text" v-model="time.value" placeholder="时分">
          </picker>
        </div>
      </li>
      <li>
        <i class="iconfont icon-jiangshi"></i>
        <input type="text" v-model="item.teacher" placeholder="讲师">
      </li>
      <li>
        <i class="iconfont icon-didian"></i>
        <input type="text" v-model="item.address" placeholder="地点">
      </li>
      <li>
        <i class="iconfont icon-team"></i>
        <input type="text" v-model="item.team" placeholder="TeamView">
      </li>
      <li>
        <i class="iconfont icon-github"></i>
        <input type="text" v-model="item.github" placeholder="github">
      </li>
      <li class="remank">
        <textarea v-model="item.remank" placeholder="活动详情及备注"></textarea>
      </li>
    </ul>
    <button class="btn">发布</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: {
          start: Date.now(),
          end: Date.now(),
          value: '',
        },
        date:{
          start: Date.now(),
          end: Date.now(),
          value: '',
        },
        item: {
          title: '',
          time: '',
          teacher: '',
          address: '',
          remank: '',
          team: '',
          github: ''
        }
      }
    },
    computed: {
      count () {
      }
    },

    components: {
    },
    methods: {
      timeChange(e, type) {
        if(type){
          this.time.value = e.target.value;
        }else{
          this.date.value = e.target.value;
        }
      },
    }
  }

</script>
<style scoped>
.publish{
  padding: 30rpx;
}
  li{
    border-bottom: 1px solid #e8e8e8;
    padding: 30rpx 0;
    display: flex;
    align-items: center;
  }
  li input{
    width: 100%;
  }
  li i{
    width: 50rpx;
  }
  li.time{
  }
  li.time input{
    pointer-events: none;
  }
  li.remank{
    margin-top: 30rpx;
    height: 200rpx;
    border: 1px solid #e8e8e8;
    align-items: flex-start;
    padding: 20rpx;
    border-top: none
  }
  .picker{
    flex: 1;
    display: flex;
  }
  picker{
    text-align: left;
    flex: 1;
  }
  .btn{
    margin-top: 30rpx;
  }
</style>
