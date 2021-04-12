import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/element-components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
* vue全家桶
* vue + vue-router + vuex + element-ui
* vuex：状态管理 vue状态管理
* state，驱动应用的数据源；
  view，以声明方式将 state 映射到视图；
  actions，响应在 view 上的用户输入导致的状态变化。

  多个组件共享状态

  不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation

  setState()
  =
  setData()
* */
