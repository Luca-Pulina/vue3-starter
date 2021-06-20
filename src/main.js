import { createApp } from 'vue'
import App from './App.vue'
import router from './router/indexRouter'

import './index.css'

createApp(App).use(router).mount('#app')
