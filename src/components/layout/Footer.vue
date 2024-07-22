<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <footer class="flex bg-primary text-white bottom-0 p-8 w-full md:px-64">
        <div class="flex flex-col">
            <RouterLink to="/lois" class="mb-4"><h3 class="text-lg font-semibold">Textes de loi</h3></RouterLink>
            <RouterLink to="/page/constitution">Constitution</RouterLink>
            <RouterLink to="/page/impots_et_taxes">Impôts et Taxes</RouterLink>
            <RouterLink to="/page/confidentialite">Utilisation des Données</RouterLink>
            <RouterLink to="/page/code_civil">Code civil</RouterLink>
            <RouterLink to="/page/code_penal">Code pénal</RouterLink>
        </div>
    </footer>
</template>