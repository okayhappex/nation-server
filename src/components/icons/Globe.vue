<script setup>
    defineProps({
        className: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <svg :class="className" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        <path d="M12 3.05554C14.455 5.25282 16 8.44597 16 12C16 15.554 14.455 18.7471 12 20.9444" stroke-linecap="round" />
        <path d="M12.0625 21C9.57126 18.8012 8 15.5841 8 12C8 8.41592 9.57126 5.19883 12.0625 3" stroke-linecap="round" />
        <path d="M3 12H21" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>