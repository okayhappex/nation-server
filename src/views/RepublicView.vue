<script setup>
    import Globe from '@/components/icons/Globe.vue'

    document.title = "Nation - Gouvernement"
</script>
<template>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-secondary text-xl uppercase font-bold">Informations</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
            <div class="px-8 space-y-2">
                <h2 class="text-tertiary font-bold text-lg mb-4">Mandat actuel</h2>

                <li class="list-none"><b>Début</b><br> 18 juin</li>
                <li class="list-none"><b>Fin</b><br> 1er septembre</li>
                <li class="list-none"><b>Élections</b><br> Aucune</li>
            </div>
            <div class="px-8 space-y-2">
                <h2 class="text-tertiary font-bold text-lg mb-4">Prochain mandat</h2>

                <li class="list-none"><b>Début</b><br> 1er septembre</li>
                <li class="list-none"><b>Fin</b><br> 28 septembre</li>
                <li class="list-none"><b>Élections complètes</b><br> 27 août</li>
            </div>
            <div class="px-8 space-y-2">
                <h2 class="text-tertiary font-bold text-lg mb-4">Élections</h2>

                <li class="list-none"><b>Début</b><br> 27 août</li>
                <li class="list-none"><b>Fin</b><br> 1er septembre</li>
                <li class="list-none"><b>Type</b><br> Complètes</li>
            </div>
        </div>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-secondary text-xl uppercase font-bold">Administrateurs</h1>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/kheops.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">Kheops</h2>
                    <span class="text-zinc-500 text-sm font-medium">Fondateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/happex.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">happex</h2>
                    <span class="text-zinc-500 text-sm font-medium">Co-fondateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/bird.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">Bird</h2>
                    <span class="text-zinc-500 text-sm font-medium">Administrateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/alexis.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">Alexis</h2>
                    <span class="text-zinc-500 text-sm font-medium">Administrateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/taox7.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">Taox7</h2>
                    <span class="text-zinc-500 text-sm font-medium">Administrateur</span>
                </div>
            </div>
        </div>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-secondary text-xl uppercase font-bold">Gouvernement provisoire</h1>
        <div class="grid gap-8 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/kheops.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">Kheops</h2>
                    <span class="text-zinc-500 text-sm font-medium">Président de la République</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/happex.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-primary text-lg font-bold">happex</h2>
                    <span class="text-zinc-500 text-sm font-medium">Premier Ministre</span>
                </div>
            </div>
        </div>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-secondary text-xl uppercase font-bold">Tribunal</h1>
        <i>Vide.</i>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-secondary text-xl uppercase font-bold">Députés</h1>
        <i>Vide.</i>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-secondary text-xl uppercase font-bold">Commissariat</h1>
        <i>Vide.</i>
    </section>
</template>