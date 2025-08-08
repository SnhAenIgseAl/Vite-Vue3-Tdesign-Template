import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/index'
    },
    {
		path: '/index',
		name: 'index',
		component: () => import('@/views/Index/Index.vue')
	}
]



const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})



export default router