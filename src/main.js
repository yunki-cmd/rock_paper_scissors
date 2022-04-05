import { createApp } from 'vue'
import App from './App.vue'
import router from './rout/index.js'
import store from './store/store'
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
