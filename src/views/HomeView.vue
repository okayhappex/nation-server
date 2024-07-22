<script setup>
	import { RouterLink } from 'vue-router'
</script>
<template>
	<header id="header" class="bg-[url('@/assets/assemblee.png')] bg-center bg-cover bg-no-repeat text-white text-center"><div class="bg-black/20 backdrop-blur w-full h-full p-8 space-y-6 md:px-64">
		<img src="/favicon.png" id="nation_logo" class="w-24 h-24 mx-auto" />
		<div>
			<h1 class="text-3xl font-bold">Nation</h1>
			<p>Le serveur démocratique.</p>
		</div>
		<div class="flex place-content-center space-x-2">
			<a href=""><button class="bg-primary text-sm font-medium rounded-full px-7 pt-3 pb-3">Rejoindre</button></a>
			<a href="/page"><button class="bg-white/10 text-sm font-medium rounded-full px-7 pt-3 pb-3">Explorer</button></a>
		</div>
	</div></header>
</template>