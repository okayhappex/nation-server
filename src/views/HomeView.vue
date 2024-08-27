<script setup>
	import { RouterLink } from 'vue-router'
</script>
<template>
	<header id="header" class="bg-[url('/splash.png')] bg-center bg-cover bg-no-repeat text-white"><div class="w-full h-full p-8 space-y-12 sm:p-16 md:space-y-16 md:flex lg:p-32 dark:bg-black/20">
		<div class="space-y-8 sm:space-y-12 md:space-y-16 md:2/3">
			<img src="/text.png" class="h-16 max-md:mx-auto sm:h-24" />
			<p class="text-4xl font-bold max-md:text-center">Sûrement l'un des <u>premiers</u> serveurs <u>démocratiques</u>.</p>
		</div>
		<div class="flex flex-col text-center space-y-6 place-content-center md:w-1/3">
			<a href="https://dsc.gg/nationserver"><button class="block bg-white/20 font-black border-2 border-white/25 rounded-full py-3 mx-auto duration-300 max-sm:w-full sm:px-10 hover:bg-white/25">REJOINDRE</button></a>
			<RouterLink to="/dev" class="text-white/25 text-sm font-bold duration-150 hover:text-white/50 hover:underline">ESPACE DEV</RouterLink>
		</div>
	</div></header>
	<main id="content" class="p-8 space-y-8">
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