import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'

import Icon from './assets/js/icon'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn,
})
app.component('Icon', Icon)
app.mount('#app')
