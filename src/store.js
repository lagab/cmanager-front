import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    showNavigation (state, enable) {
      state.drawer = enable
    },
  },
  actions: {
    async toggleNavigation ({commit, state}) {
      commit("showNavigation", !state.drawer)
    },
  }
})
