<template>
	<header id="header" class="bg-[url('@/assets/assemblee.png')] bg-center bg-cover bg-no-repeat text-white text-center"><div class="bg-black/20 backdrop-blur w-full h-full p-8 space-y-6 md:px-64 dark:bg-black/40">
		<div class="flex place-content-center space-x-2">
			<a href=""><button class="bg-primary/25 text-sm font-medium rounded-full px-7 pt-3 pb-3 duration-150 hover:bg-primary/50">Rejoindre</button></a>
			<a href="/page"><button class="bg-white/5 text-sm font-medium rounded-full px-7 pt-3 pb-3 duration-150 hover:bg-white/10">Explorer</button></a>
		</div>
	</div></header>
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
			}
		},
		watch: {
			'$route.params.name': 'fetchMarkdown'
		},
		created() {
			this.fetchMarkdown();
		}
	};
</script>