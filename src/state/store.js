/**
 * Created by gxx on 2018/5/5.
 */
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    userInfo: {},
    menu_act: 'index'
  },
  mutations: {
    deal_menu: (state, index) => {
      state.menu_act = index;
    },
    set_user_info: (state, data) =>{
      state.userInfo = data
    },
    set_token: (state, token) =>{
      state.token = token
    }
  }
})

export default store
