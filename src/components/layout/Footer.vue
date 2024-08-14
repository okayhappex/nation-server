<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <footer class="grid bg-primary text-white bottom-0 p-8 gap-8 w-full sm:grid-cols-3 md:grid-cols-4 md:px-64 dark:bg-zinc-900">
        <div class="flex flex-col">
            <RouterLink to="/lois" class="mb-4"><h3 class="text-lg font-semibold">Textes de loi</h3></RouterLink>
            <RouterLink to="/page/constitution">Constitution</RouterLink>
            <RouterLink to="/page/impots_et_taxes">Impôts et Taxes</RouterLink>
            <RouterLink to="/page/confidentialite">Utilisation des Données</RouterLink>
            <RouterLink to="/page/code_civil">Code civil</RouterLink>
            <RouterLink to="/page/code_penal">Code pénal</RouterLink>
        </div>
        <div class="flex flex-col">
            <RouterLink to="/about" class="mb-4"><h3 class="text-lg font-semibold">À propos de Nation</h3></RouterLink>
            <RouterLink to="/histoire">Histoire</RouterLink>
            <RouterLink to="/gov">Gouvernement</RouterLink>
        </div>
    </footer>
</template>