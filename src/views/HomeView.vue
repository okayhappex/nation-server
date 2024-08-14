<script setup>
	import { RouterLink } from 'vue-router'
</script>
<template>
	<header id="header" class="bg-[url('@/assets/assemblee.png')] bg-center bg-cover bg-no-repeat text-white text-center"><div class="bg-black/20 backdrop-blur w-full h-full p-8 space-y-6 md:px-64 dark:bg-black/40">
		<img src="/favicon.png" id="nation_logo" class="w-24 h-24 mx-auto" />
		<div>
			<h1 class="text-3xl font-bold">Nation</h1>
			<p>Le serveur démocratique.</p>
		</div>
		<div class="flex place-content-center space-x-2">
			<RouterLink to=""><button class="bg-primary/25 text-sm font-medium rounded-full px-7 pt-3 pb-3 duration-150 hover:bg-primary/50">Rejoindre</button></RouterLink>
			<RouterLink to="/page"><button class="bg-white/5 text-sm font-medium rounded-full px-7 pt-3 pb-3 duration-150 hover:bg-white/10">Explorer</button></RouterLink>
		</div>
	</div></header>
	<main class="md:p-8 md:space-y-8">
		<section id="lois" class="text-center space-y-6 md:w-3/4 md:mx-auto">
			<h2 class="text-xl font-bold">Textes de loi</h2>
			<div class="grid grid-cols-5 gap-2">
				<RouterLink class="block place-content-center bg-black/10 text-sm font-medium rounded-xl h-24 p-6 duration-150 hover:bg-black/20" to="/lois/constitution">Constitution</RouterLink>
				<RouterLink class="block place-content-center bg-black/10 text-sm font-medium rounded-xl h-24 p-6 duration-150 hover:bg-black/20" to="/lois/code_penal">Code pénal</RouterLink>
				<RouterLink class="block place-content-center bg-black/10 text-sm font-medium rounded-xl h-24 p-6 duration-150 hover:bg-black/20" to="/lois/code_civil">Code civil</RouterLink>
				<RouterLink class="block place-content-center bg-black/10 text-sm font-medium rounded-xl h-24 p-6 duration-150 hover:bg-black/20" to="/lois/impots_et_taxes">Impôts et Taxes</RouterLink>
				<RouterLink class="block place-content-center bg-black/10 text-sm font-medium rounded-xl h-24 p-6 duration-150 hover:bg-black/20" to="/lois/confidentialite">Charte de Confidentialité</RouterLink>
				<RouterLink class="block place-content-center bg-black/10 text-sm font-medium rounded-xl h-24 p-6 duration-150 hover:bg-black/20" to="/lois/organisations">Code des Ventes et des Locations</RouterLink>
			</div>
		</section>
	</main>
</template>