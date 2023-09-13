import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'

const app = createApp(App).use(router).use(store).mount('#app')

if (window.Cypress) {
  window.__app__ = app
}
