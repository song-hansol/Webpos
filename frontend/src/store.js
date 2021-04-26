import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    isLogIn: false,
    posNo: 1,
    date: null
  },
  getters: {
    // user: (state) => { return state.user }
    user: function (state) {
      console.log("GETTER!!!");
      return state.user;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLogInState(state, boolean) {
      state.isLogIn = boolean
    }
  }
})
