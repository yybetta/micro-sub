/*
 * @Description:
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-11-13 18:32:01
 */
import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

const routes = [
    {
        path: '/',
        name: 'Page1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'Page2',
        component: Page2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
