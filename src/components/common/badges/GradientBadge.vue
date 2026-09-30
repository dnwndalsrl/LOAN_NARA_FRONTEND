<template>
    <div class="gradient-badge">
        <p>{{ props.title }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<style lang="scss">
div.gradient-badge {
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: 50px;
    background: linear-gradient(
        90deg,
        $color-primary-500 0%,
        #4f82dd 33%,
        #69a2ff 66%,
        $color-primary-500 100%
    );
    background-size: 200% 100%;
    background-position: 0% 50%;
    animation: premium-gradient-move 2.5s linear infinite;
    @include r(padding-top, 2, 2, 2, 2, 2);
    @include r(padding-bottom, 2, 2, 2, 2, 2);
    @include r(padding-left, 6, 6, 6, 6, 6);
    @include r(padding-right, 6, 6, 6, 6, 6);
    p {
        font-weight: $font-weight-bold;
        color: $color-white;
        line-height: 1;
        @include r(font-size, 11, 11, 11, 11, 11);
    }
}

@keyframes premium-gradient-move {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
}
</style>
