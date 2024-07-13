import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueFire, VueFireAuth } from 'vuefire'
import firebase from 'firebase/compat/app'
import { firebaseApp } from './config/firebase.config'

const app = createApp(App)

app.use(VueFire,{
  firebaseApp,
  modules: [
    VueFireAuth(),
  ]
})

app.use(createPinia())
app.use(router)

app.mount('#app')
