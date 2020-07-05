import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './List.vue'

Vue.use(Vuelidate)
Vue.use(VueRouter)
// Vue.filter('uppercase', (value)=>{return value.toUpperCase()})
// Vue.filter('uppercase', value => value.toUpperCase())

Vue.component('app-list', List)
//Global mix to all
// Vue.mixin({
//   beforeCreate(){
// console.log('wtf', 'before create')
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
