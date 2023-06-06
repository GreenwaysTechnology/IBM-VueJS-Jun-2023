// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/global/StatusBar.vue'

//createApp(App).mount('#app')
// const app =createApp(App)
// //register component at application object :  Global Components
// app.component('StatusBar',StatusBar)
//short cut:builder pattern / command chain pattern 

createApp(App)
    .component('StatusBar', StatusBar)
    .provide('companyName','IBM')
    .mount('#app')