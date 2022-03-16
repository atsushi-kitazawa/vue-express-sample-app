import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Index from './components/Index.vue'
import User from './components/User.vue'
import RouterPush from './components/RouterPush.vue'
import Admin from './components/Admin.vue'

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
            name: 'User',
            component: User
        },
        {
            path: '/push',
            name: 'RouterPush',
            component: RouterPush,
            props: true
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
        }
    ]
})

const app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.mount("#app")