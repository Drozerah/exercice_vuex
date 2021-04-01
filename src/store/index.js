import Vue from 'vue'
import Vuex from 'vuex'

// add Vuex plugin to the Vue instance
Vue.use(Vuex) 

// create and export store instance with state and mutations
export const store = new Vuex.Store({
  state: {
    X: 0,
    Name: 'Drozerah'
  },
  mutations: {
    SET_X: (state, val) => {
      // val is a payload
      state.X = val
    }
  }
})
