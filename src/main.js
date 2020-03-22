import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'
import Kablys from './components/Kablys';

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'kablys',
    component: Kablys
  },
]

const router = new VueRouter({
  routes
})

Vue.use(VueAnalytics, {
  router,
  id: 'UA-152365821-1',
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
