import {createApp} from 'vue'
import App from './App.vue'
import Header from './GlobalPages/Header.vue'


const app = createApp(App)
// 在const和mount之间写
app.component("Header", Header)
app.mount('#app')
