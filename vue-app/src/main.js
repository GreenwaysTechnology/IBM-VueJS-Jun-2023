// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/global/StatusBar.vue'
import { highLight } from './directives/highlightDirective'
import { myPlugin } from './plugins/myPlugin'

//createApp(App).mount('#app')
// const app =createApp(App)
// //register component at application object :  Global Components
// app.component('StatusBar',StatusBar)
//short cut:builder pattern / command chain pattern 

createApp(App)
    .component('StatusBar', StatusBar)
    .provide('companyName', 'IBM')
    // .directive('focus', (element) => {
    //     console.log('directive => ', element)
    //     element.focus()
    // })
    .directive('highlight',highLight())
    .use(myPlugin)
    .mount('#app')