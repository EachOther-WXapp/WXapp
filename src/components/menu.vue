<template>
    <ul class="menu">
        <li v-for="(i, index) in list" :key="i.name" @click="go(i)" :classs="i.url === local ? 'act' : ''">
          <i class="iconfont" :class="i.icon"></i>
          <span>{{i.name}}</span>
        </li>
    </ul>
</template>

<script>
  import { link } from '@/utils'
  export default {
  data() {
    return {
      list: [
        {
          icon: "icon-shouye",
          url: "index",
          name: "首页"
        },
        {
          icon: "icon-taolun",
          url: "group",
          name: "讨论组"
        },
        {
          icon: "icon-iconfonticon5",
          url: "mine",
          name: "个人中心"
        }
      ]
    };
  },
  props: ['local'],
  created() {
  },
  methods: {
    go (obj) {
      link(obj.url)
    }
  }
};
</script>

<style>
  @import "../assets/font/iconfont.css";
  .menu{
    text-align: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .menu li {
    flex: 1;
    font-size: 32rpx;
  }
  .menu li.act{
    color: red;
  }
</style>
