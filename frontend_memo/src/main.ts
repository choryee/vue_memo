import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './views-tictactoe/store'
import store from './views-landMine/storeMine'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
