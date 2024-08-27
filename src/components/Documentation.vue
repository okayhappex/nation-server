<template>
	<div class="bg-orange-500 text-center px-8 py-4 md:px-64">Le site étant en développement, la plupart des liens pointant en dehors de la documentation sont susceptibles de ne pas fonctionner.</div>
	<div id="md" v-html="content" class="p-8 md:px-64"></div>
</template>
<script>
	import markdownIt from 'markdown-it';
	import axios from 'axios';

	export default {
		data() {
			return {
				content: ''
			};
		},
		methods: {
			async fetchMarkdown() {
				const md = markdownIt();
				const pageName = this.$route.params.name;
				try {
					const response = await axios.get(`/dev/nsa/${pageName}.md`);
					this.content = md.render(response.data);
				} catch (error) {
					console.error('Error fetching the Markdown file:', error);
					this.content = '<p>Error loading content. Please try again later.</p>';
				}
			},
			
			async getTitle() {
				document.title = document.getElementsByTagName('h1')[0].innerText
			}
		},
		watch: {
			'$route.params.name': 'fetchMarkdown'
		},
		created() {
			this.fetchMarkdown();
			this.getTitle();
		}
	};
</script>