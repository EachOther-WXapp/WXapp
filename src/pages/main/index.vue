<template>
  <div class="main">
    <wx-menu></wx-menu>
    <index v-if="menu_act === 'index'"/>
    <group v-if="menu_act === 'group'"/>
    <mine v-if="menu_act === 'mine'"/>
  </div>
</template>

<script>
  import store from '@/state/store'
  import menu from "@/components/menu";
  import index from "@/pages/index";
  import group from "@/pages/group";
  import mine from "@/pages/mine";
export default {
  computed: {
    menu_act () {
      return store.state.menu_act
    }
  },

  components: {
    index,
    group,
    mine,
    'wx-menu': menu
  },
  methods: {
    increment () {
    },
    decrement () {
    }
  }
}

</script>
<style scoped>
  .main{
    padding-bottom: 100rpx;
  }
</style>
