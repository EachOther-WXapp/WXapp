<template>
    <ul class="menu">
        <li v-for="(i, index) in list" :key="i.name" @click="go(i, index)" :class="index === act ? 'act' : ''">
          <i class="iconfont" :class="i.icon"></i>
          <span>{{i.name}}</span>
        </li>
    </ul>
</template>

<script>
  import store from '@/state/store'
  import { link } from '@/utils'
  export default {
  data() {
    return {
      act: 0,
      list: [
        {
          icon: "icon-shouye1",
          url: "index",
          name: "首页"
        },
        {
          icon: "icon-taolun",
          url: "group",
          name: "讨论"
        },
        {
          icon: "icon-tubiaolunkuo-",
          url: "mine",
          name: "我的"
        }
      ]
    };
  },
  created(){
    wx.setNavigationBarTitle({
      title: this.list[0].name
    })
  },
  methods: {
    go (obj, index) {
      this.act = index;
      wx.setNavigationBarTitle({
        title: obj.name
      })
      store.commit('deal_menu', obj.url)
    }
  }
};
</script>

<style scoped>
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
    font-size: 24rpx;
  }
  .menu li.act{
    color: #65e46e;
  }
  .menu li:active{
     transform: scale(1.2);
  }

</style>
