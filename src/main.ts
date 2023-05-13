import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mLibs from './libs'

import './style.css'

/**
 * @description 注册 svg-icon
 */
import 'virtual:svg-icons-register'

import { useREM } from './utils/flexible'

useREM()

createApp(App).use(router).use(mLibs).mount('#app')
