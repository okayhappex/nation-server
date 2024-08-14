import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LegalPage from '../components/LegalDocument.vue'
import DocPage from '../components/Documentation.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView
		},
		{
			path: '/about',
			component: AboutView
		},
		{
			path: '/page/:name/',
			component: LegalPage
		},
		{
			path: '/dev/nsa/:name',
			component: DocPage
		}
	]
})

export default router
