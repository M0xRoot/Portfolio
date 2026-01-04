import { createApp } from 'vue'
import '@/assets/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
