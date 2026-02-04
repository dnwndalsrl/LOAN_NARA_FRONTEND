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
    border: 1px solid #3665ff;
    border-radius: 50px;
    background-color: #ebf0ff;
    font-weight: 700;
    color: #3665ff;
    @include r(padding-top, 2, 2, 2, 2, 2);
    @include r(padding-bottom, 2, 2, 2, 2, 2);
    @include r(padding-left, 6, 6, 6, 6, 6);
    @include r(padding-right, 6, 6, 6, 6, 6);
    @include r(font-size, 11, 11, 11, 11, 11);
}
</style>
