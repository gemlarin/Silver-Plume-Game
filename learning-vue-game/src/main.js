import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Meta from 'vue-meta'

Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

export const lifeBus = new Vue();    //bus for damage to player
export const manaBus = new Vue();    //bus for mana use
export const healBus = new Vue();    //bus for healing player
export const statusBus = new Vue();  //bus to change player status
export const itemBus = new Vue();    //bus to trasport items from the book to the bag

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

