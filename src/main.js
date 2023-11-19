import Vue from 'vue'
import App from './App.vue'
import router from "@/routes/index"

// import './assets/main.css'

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
