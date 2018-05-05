<template>
  <div class="publish">
    <ul>
      <li>
        <i class="iconfont icon-zhuti"></i>
        <input type="text" v-model="item.theme" placeholder="主题">
      </li>
      <li class="time">
        <i class="iconfont icon-shijian"></i>
        <div class="picker">
          <picker mode="date" :value="startdate.value" :start="startdate.start" :end="startdate.end" @change="timeChange($event, 'startdate')">
            <input type="text" v-model="startdate.value" placeholder="开始日期">
          </picker>
          <picker mode="time" :value="starttime.value" :start="starttime.start" :end="starttime.end" @change="timeChange($event, 'starttime')">
            <input type="text" v-model="starttime.value" placeholder="开始时间">
          </picker>
        </div>
      </li>
      <li class="time">
        <i class="iconfont icon-shijian"></i>
        <div class="picker">
          <picker mode="date" :value="enddate.value" :start="enddate.start" :end="enddate.end" @change="timeChange($event, 'enddate')">
            <input type="text" v-model="enddate.value" placeholder="结束日期">
          </picker>
          <picker mode="time" :value="endtime.value" :start="endtime.start" :end="endtime.end" @change="timeChange($event, 'endtime')">
            <input type="text" v-model="endtime.value" placeholder="结束时间">
          </picker>
        </div>
      </li>
      <li>
        <i class="iconfont icon-jiangshi"></i>
        <input type="text" v-model="item.lecturer" placeholder="讲师">
      </li>
      <li>
        <i class="iconfont icon-didian"></i>
        <input type="text" v-model="item.site" placeholder="地点">
      </li>
      <li>
        <i class="iconfont icon-team"></i>
        <input type="text" v-model="item.conferenceId" placeholder="TeamView">
      </li>
      <li>
        <i class="iconfont icon-github"></i>
        <input type="text" v-model="item.githubUrl" placeholder="github">
      </li>
      <li class="remank">
        <textarea v-model="item.detail" placeholder="活动详情及备注"></textarea>
      </li>
      <li class="images">
        <img :src="item.imageBase64" alt="" v-if="item.imageBase64" :class="item.imageBase64 ? 'act' : ''">
        <button class="btn" @click="chooseImage" :class="item.imageBase64 ? 'act' : ''">上传主题图片</button>
      </li>
    </ul>
    <button class="submit btn" @click="submit">发布</button>
  </div>
</template>

<script>
  import { link } from '@/utils'
  import { http } from '@/utils'
  import Api from '@/config/api'
  export default {
    data() {
      return {
        starttime: {
          start: Date.now(),
          end: Date.now(),
          value: '',
        },
        startdate:{
          start: Date.now(),
          end: Date.now(),
          value: '',
        },
        endtime: {
          start: Date.now(),
          end: Date.now(),
          value: '',
        },
        enddate:{
          start: Date.now(),
          end: Date.now(),
          value: '',
        },
        item: {
          startTime: '',
          endTime: '',
          imageBase64: '',
          theme: '',
          lecturer: '',
          site: '',
          conferenceId: '',
          githubUrl: '',
          detail: '',
        }
      }
    },
    methods: {
      chooseImage(){
        let _this = this;
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            _this.item.imageBase64 = res.tempFilePaths[0];
          }
        })
      },
      timeChange(e, type) {
        this[type].value = e.target.value;
      },
      submit(){
        this.item.startTime = + new Date(this.startdate.value+' '+this.starttime.value);
        this.item.endTime = + new Date(this.enddate.value+' '+this.endtime.value);
        http('POST',Api.train_add,this.item).then(res=>{
          link('main')
        })
      }
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
    margin: 30rpx auto;
    height: 200rpx;
    border: 1px solid #e8e8e8;
    align-items: flex-start;
    padding: 20rpx;
    border-top: none
  }
  li.images{
    border-bottom: none;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
  li.images img{
    margin: 0 auto;
    text-align: center;
  }
  li.images img.act{
    width: 100%;
    height: 300rpx;
  }
  li.images button{
    width: 100%;
  }
  li.images button.act{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 300rpx;
  }
  .picker{
    flex: 1;
    display: flex;
  }
  picker{
    text-align: left;
    flex: 1;
  }
  .submit{
    margin-top: 30rpx;
  }
</style>
