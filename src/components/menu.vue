<template>
    <ul class="menu">
        <li v-for="(i, index) in list" :key="i.name" @click="go(i, index)" v-bind:style="{ color: index === act ? 'red' : '' }">
          <i class="iconfont" :class="i.icon"></i>
          <span>{{i.name}}</span>
        </li>
    </ul>
</template>

<script>
  // Use Vuex
  import store from '@/state/store'
  import { link } from '@/utils'
  export default {
  data() {
    return {
      abc: 'red',
      act: 0,
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
  computed: {
    computedClassStr (a) {
      return 'red'
    },
  },
  props: ['local'],
  created() {
  },
  methods: {
    go (obj, index) {
      this.act = index === this.act ? 'red' : '';
      store.commit('deal_menu', obj.url)
//      link(obj.url)
    }
  }
};
</script>

<style scoped>
  @import "../assets/font/iconfont.css";
  .menu{
    z-index: 100;
    background: #fff;
    height: 100rpx;
    border-top: 1px solid #dedede;
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
