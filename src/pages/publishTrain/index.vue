<template>
  <div class="publishTrain">
    <ul>
      <li>
        <i class="iconfont icon-zhuti"></i>
        <input type="text" v-model="item.theme" placeholder="主题" >
      </li>
      <li class="time">
        <i class="iconfont icon-kaishishijian"></i>
        <div class="picker">
          <picker mode="date" :value="startdate.value" :start="startdate.start" :end="startdate.end" @change="timeChange($event, 'startdate')" >
            <input type="text" v-model="startdate.value" placeholder="开始日期" >
          </picker>
          <picker mode="time" :value="starttime.value" :start="starttime.start" :end="starttime.end" @change="timeChange($event, 'starttime')">
            <input type="text" v-model="starttime.value" placeholder="开始时间">
          </picker>
        </div>
      </li>
      <li class="time">
        <i class="iconfont icon-jieshushijian"></i>
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
        <input type="text" v-model="item.conferenceId" placeholder="TeamView（选填）">
      </li>
      <li>
        <i class="iconfont icon-github"></i>
        <input type="text" v-model="item.githubUrl" placeholder="github（选填）">
      </li>
      <li class="remank">
        <textarea v-model="item.detail" placeholder="活动详情及备注"></textarea>
      </li>
      <li class="images">
        <img :src="imgurl" alt="" v-if="imgurl" :class="imgurl ? 'act' : ''">
        <button class="btn" @click="chooseImage" :class="imgurl ? 'act' : ''">上传主题图片</button>
      </li>
    </ul>
    <button class="submit btn" @click="submit">发起培训</button>
  </div>
</template>

<script>
  import { link } from '@/utils'
  import { http, upload } from '@/utils'
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
        imgurl: '',
        item: {
          startTime: '',
          endTime: '',
          imageId: '',
          theme: '',
          lecturer: '',
          site: '',
          conferenceId: '',
          githubUrl: '',
          detail: '',
        }
      }
    },
    onLoad(){
      wx.setNavigationBarTitle({
        title: '发起培训'
      })
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
            _this.imgurl = res.tempFilePaths[0];
            upload(Api.age_form, res.tempFilePaths[0]).then(result=>_this.item.imageId = result)
          }
        })
      },
      timeChange(e, type) {
        this[type].value = e.target.value;
      },
      submit(){
        if(!this.item.theme){
          wx.showModal({
            title: "提示",
            content: "请填写主题!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.startdate.value){
          wx.showModal({
            title: "提示",
            content: "请选择开始日期!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.starttime.value){
          wx.showModal({
            title: "提示",
            content: "请选择开始时间!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.enddate.value){
          wx.showModal({
            title: "提示",
            content: "请选择结束日期!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.endtime.value){
          wx.showModal({
            title: "提示",
            content: "请选择结束时间!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.item.lecturer){
          wx.showModal({
            title: "提示",
            content: "请填写讲师!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.item.site){
          wx.showModal({
            title: "提示",
            content: "请填写地点!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.item.detail){
          wx.showModal({
            title: "提示",
            content: "请填写活动详情!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        if(!this.item.imageId){
          wx.showModal({
            title: "提示",
            content: "请上传主题图片!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        this.item.startTime = + new Date(this.startdate.value+' '+this.starttime.value);
        this.item.endTime = + new Date(this.enddate.value+' '+this.endtime.value);
        if(this.item.startTime >= this.item.endTime){
          wx.showModal({
            title: "提示",
            content: "结束时间需大于起始时间!",
            showCancel: false,
            confirmText: "确定",
          })
          return
        }
        http('POST',Api.train_add,this.item).then(()=>{
          wx.showToast({
            title: "发起培训成功!",
            duration: 1000
          })
          setTimeout(()=>{
            link('main')
          },1000)
        })
      }
    },
  }

</script>
<style scoped>
.publishTrain{
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
