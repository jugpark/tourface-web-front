import Vue from 'vue'
import App from './App.vue'
import router from "@/routes/index"
import axios from 'axios'
import '@/styles/fonts.css'

Vue.prototype.$axios = axios

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
