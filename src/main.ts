import { createApp } from 'vue'
import { useAppStore } from '@/stores'
import { apiService } from '@/api/apiService'
import { createPinia } from 'pinia'
import App from './App.vue'

const secretToken = '87c2c85a445a630a60d4d409a38ee424a31c944eb87c453e0dd20bb9ffcae33e';

(async function initApp () {
  apiService.configure('https://gorest.co.in/public/v2', { Authorization: `Bearer ${secretToken}` })
  
  const pinia = createPinia()
  const app = createApp(App)
  app.use(pinia)
  app.mount('#app')

  const { initAppStore } = useAppStore()
  initAppStore()
})();
