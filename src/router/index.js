import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarkdownPage from '../components/LegalDocument.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView
		},
		{
			path: '/page/:name/',
			component: MarkdownPage
		}
	]
})

export default router
