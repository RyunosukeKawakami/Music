import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store.js'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
