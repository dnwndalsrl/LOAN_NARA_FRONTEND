<template>
    <div class="normal-badge">
        {{ props.title }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<style lang="scss">
div.normal-badge {
    width: fit-content;
    border: 1px solid $color-primary-500;
    border-radius: 50px;
    background-color: $color-primary-100;
    font-weight: $font-weight-bold;
    color: $color-primary-500;
    @include r(padding-top, 2, 2, 2, 2, 2);
    @include r(padding-bottom, 2, 2, 2, 2, 2);
    @include r(padding-left, 6, 6, 6, 6, 6);
    @include r(padding-right, 6, 6, 6, 6, 6);
    @include r(font-size, 11, 11, 11, 11, 11);
}
</style>
