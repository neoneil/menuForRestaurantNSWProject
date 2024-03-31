import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import MenuList from './components/MenuList.vue'
import DragComponent from './components/DragComponent'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/menu', component: MenuList },
        { path: '/drag', component: DragComponent },
    ]
});



const app = createApp(App)
app.use(router);
app.mount('#app')
