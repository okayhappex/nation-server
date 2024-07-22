<template>
	<div id="content" v-html="content" class="p-8 md:px-64"></div>
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
					const response = await axios.get(`/docs/${pageName}.md`);
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
<style>
	div#content h1,
	div#content h2,
	div#content h3,
	div#content h4,
	div#content h5,
	div#content h6,
	div#content p,
	div#content li,
	div#content blockquote {
		display: block;
		font-weight: 400;
		padding: 2px 8px; 
		margin: 16px 0;
	}

	div#content h1 {
		font-size: 36px;
		font-weight: 700;
		text-align: center;
		margin: 64px 0;
	}

	div#content h2 {
		color: #3257ec;
		font-size: 24px;
		font-weight: 700;
		text-align: center;
		margin: 48px 0;
	}

	div#content h3 {
		color: #26ce85;
		font-size: 20px;
		font-weight: 700;
	}

	div#content p {
		text-align: justify;
	}

	div#content strong {
		font-weight: 700;
	}

	div#content ul {
		margin-bottom: 32px;
	}

	div#content li {
		text-align: justify;
		margin-bottom: 16px;
		/* list-style-type: none; */
	}
	
	div#content li > ul > li {
		text-indent: 32px;
		list-style-type: disc;
	}

	div#content table {
		border-radius: 12px;
		/* background-color */
		width: 100%;
		overflow: hidden;
		border-spacing: 0;
	}

	div#content th {
		background-color: #ffb800;
		color: white;
		padding: 8px 16px;
	}

	div#content td {
		padding: 8px 16px;
	}

	div#content tr:nth-child(even) {
		background-color: #cfcfcf;
	}
</style>