import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

import './assets/main.css'
import '@fontsource-variable/inter'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.component('Iconify', Icon)

app.mount('#app')