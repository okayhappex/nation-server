<script setup>
	import { RouterView } from 'vue-router'

	import Navbar from '@/components/layout/Navbar.vue';
	import Footer from '@/components/layout/Footer.vue'

	document.title = "Nation - Accueil"
</script>

<template>
	<Navbar />
	<RouterView />
	<Footer />
</template>