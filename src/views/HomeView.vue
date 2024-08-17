<script setup>
	import { RouterLink } from 'vue-router'
</script>
<template>
	<header id="header" class="bg-[url('/splash.png')] bg-center bg-cover bg-no-repeat text-white text-center"><div class="w-full h-full p-8 space-y-6 md:px-64 dark:bg-black/20">
		<img src="/favicon.png" id="nation_logo" class="w-24 h-24 mx-auto" />
		<div>
			<h1 class="text-3xl font-bold">Nation</h1>
			<p>Le serveur démocratique.</p>
		</div>
		<div class="flex place-content-center space-x-2">
			<RouterLink to=""><button class="bg-white/25 text-sm font-medium rounded-full px-7 pt-3 pb-3 duration-150 hover:bg-white/50">Rejoindre</button></RouterLink>
			<RouterLink to="/page"><button class="bg-white/5 text-sm font-medium rounded-full px-7 pt-3 pb-3 duration-150 hover:bg-white/10">Explorer</button></RouterLink>
		</div>
	</div></header>
	<main class="p-8 space-y-8">
		<section id="lois" class="text-center space-y-6 md:w-3/4 md:mx-auto">
			<h2 class="text-xl font-bold">Textes de loi</h2>
			<div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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