<script setup>
    import { RouterLink } from 'vue-router'

    document.title = "Nation - Espace Dev"
</script>
<template>
    <div id="header" class="bg-gradient-to-br from-fuchsia-500 to-blue-500"><div class="bg-[url('@/assets/patterns/slashes_1.png')] bg-left bg-no-repeat bg-contain p-16 md:px-64 md:py-32">
        <h1 class="text-5xl text-center font-bold uppercase">Espace Développeurs</h1>
    </div></div>
    <main class="grid p-8 gap-8 sm:grid-cols-2 md:px-64">
        <RouterLink to="/dev/nsa/get_started" class="block bg-blue-800/50 text-white border-2 border-blue-800 rounded-xl p-8 space-y-4 duration-300 hover:bg-blue-800/80">
            <h2 class="text-xl font-bold">Documentation du module NSArchive</h2>
            <p>NSArchive (ou NSA) est un module Python qui vous sera précieux durant votre développement.</p>
        </RouterLink>
        <RouterLink to="/lois/confidentialite" class="block bg-violet-800/50 text-white border-2 border-violet-800 rounded-xl p-8 space-y-4 duration-300 hover:bg-violet-800/80">
            <h2 class="text-xl font-bold">Charte de la confidentialité</h2>
            <p>La charte qui protège vos données et celles des autres membres. À respecter impérativement !</p>
        </RouterLink>
        <RouterLink to="#" class="block bg-green-800/50 text-white border-2 border-green-800 rounded-xl p-8 space-y-4 duration-300 hover:bg-green-800/80">
            <h2 class="text-xl font-bold">Comment être développeur ?</h2>
            <p>Candidatures fermées</p>
        </RouterLink>
    </main>
</template>