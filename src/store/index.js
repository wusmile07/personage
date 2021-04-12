import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // data
  state: {
    count: 0,
    article_list: [],
  },
  // computed
  getters: {
    getCount: (state) => state.count.toFixed(10)
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_COUNT(state, data) {
      console.log(state, data)
    },
    SET_ARTICLE_LIST(state, data) {
      state.article_list = data
    }
  },
  actions: {
    async getArticles({commit}, options) {
      const {_limit} = options
      const res = await axios.get(`http://localhost:3000/articles?_limit=${_limit}`)
      commit('SET_ARTICLE_LIST', res.data)
    }
  },
  modules: {
  }
})
