import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import portfolio from './portfolio.vue'
import router from './router'


const app = createApp(portfolio)

app.use(createPinia())
app.use(router)
app.mount('#app')

