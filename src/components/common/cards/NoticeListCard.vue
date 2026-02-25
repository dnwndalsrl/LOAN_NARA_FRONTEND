<template>
    <li class="notice-list-card">
        <NuxtLink>{{ props.title }}</NuxtLink>
        <NewBadge />
        <p>{{ props.date }}</p>
    </li>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title: string
        date: string
    }>(),
    {
        title: '',
        date: '2025-11-11',
    },
)

// =============================================== Computed

// =============================================== Custom Function
</script>

<style lang="scss">
li.mobile-table-card {
    a {
        display: block;
        font-weight: 400;
        color: $color-black;
        text-decoration: none;
        cursor: pointer;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @include r(font-size, 13, 13, 13, 13, 13);
    }
}
</style>
