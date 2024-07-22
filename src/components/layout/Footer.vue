<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <footer>
        <div class="footer-col">
            <RouterLink to="/lois"><h3>Textes de loi</h3></RouterLink>
            <RouterLink to="/page/constitution">Constitution</RouterLink>
            <RouterLink to="/page/impots_et_taxes">Impôts et Taxes</RouterLink>
            <RouterLink to="/page/confidentialite">Utilisation des Données</RouterLink>
            <RouterLink to="/page/code_civil">Code civil</RouterLink>
            <RouterLink to="/page/code_penal">Code pénal</RouterLink>
        </div>
    </footer>
</template>