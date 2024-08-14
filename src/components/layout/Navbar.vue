<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="flex bg-primary h-16 overflow-hidden dark:bg-zinc-800">
        <RouterLink to="/" class="float-left px-5 place-content-center">
            <img src="@/assets/logo_with_text.png" class="h-9" />
        </RouterLink>
        <div class="grow"></div>
        <a href="https://dsc.gg/nationserver" class="float-left h-full px-5 place-content-center">
            <button class="bg-indigo-400 text-sm font-medium rounded-md px-5 h-10">Rejoindre</button>
        </a>
    </nav>
</template>