<template>
  <div class="publish">
    <ul>
      <li><input type="text" v-model="item.title" placeholder="主题"></li>
      <li>
        <picker mode="time" :value="time.value" :start="time.start" :end="time.end" @change="timeChange">
          <view class="picker">
            时间: {{time.value}}
          </view>
        </picker>
      </li>
      <li><input type="text" v-model="item.teacher" placeholder="讲师"></li>
      <li><input type="text" v-model="item.address" placeholder="地点"></li>
      <li><input type="text" v-model="item.remank" placeholder="详情"></li>
      <li><input type="text" v-model="item.team" placeholder="TeamView"></li>
      <li><input type="text" v-model="item.github" placeholder="github"></li>
    </ul>
    <button>发布</button>
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
      timeChange(e) {
        this.time.value = e.target.value;
      },
    }
  }

</script>
<style scoped>
.publish{
  padding: 30rpx;
}
  li{

  }
</style>
