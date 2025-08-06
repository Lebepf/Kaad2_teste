import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import textbox from './directives/textbox'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

// Diretivas
app.directive('textbox', textbox)

app.use(createPinia())
app.use(router)

app.mount('#app')
