import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Index from './components/Index.vue'
import User from './components/User.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/user',
            name: 'UserTop',
            component: User
        }
    ]
})

const app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.mount("#app")