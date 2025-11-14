/*
 * @Description:1
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-11-14 08:40:59
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

// window.microApp?.addDataListener((data) => {
//     console.log('子应用收到data', data)
// }, true)

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
