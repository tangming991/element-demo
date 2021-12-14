import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import ElementPlus from 'element-plus'

createApp(App)
    .use(ElementPlus)
    .mount('#app')
