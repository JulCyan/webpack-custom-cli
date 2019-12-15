import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const options = {
  state: {
    userInfo: {},
    author: 'cyan'
  },
  mutations: {
    stateChange(state, {
      type,
      val
    }) {
      state[type] = val
    }
  },
  actions: {}
}
export default new Vuex.Store(options)