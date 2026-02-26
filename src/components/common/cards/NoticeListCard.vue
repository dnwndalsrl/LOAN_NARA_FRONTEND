<template>
    <li class="notice-list-card">
        <div class="align-left">
            <div class="black-circle"></div>
            <NuxtLink>{{ props.title }}</NuxtLink>
            <NewBadge />
        </div>
        <div class="align-right">
            <p>{{ props.date }}</p>
        </div>
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
li.notice-list-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 0;
    @include r(gap, 12, 12, 12, 12, 12);
    &:last-child {
        margin-bottom: 0;
    }
    @include r(margin-bottom, 12, 12, 12, 14, 14);
    div.align-left {
        display: flex;
        align-items: center;
        flex: 1 1 0;
        min-width: 0;
        div.black-circle {
            flex: 0 0 auto;
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 50%;
            background-color: $color-black;
            @include r(margin-right, 10, 10, 10, 10, 10);
        }
        a {
            min-width: 0;
            display: block;
            font-weight: 400;
            color: $color-black;
            text-decoration: none;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            overflow-wrap: anywhere;
            @include r(font-size, 13, 13, 13, 14, 14);
            @include r(margin-right, 4, 4, 4, 4, 4);
        }
        div.new-badge {
            flex: 0 0 auto;
        }
    }
    div.align-right {
        flex: 0 0 auto;
        p {
            font-weight: 400;
            color: $color-dark-gray;
            @include r(font-size, 13, 13, 13, 14, 14);
        }
    }
}
</style>
