<template>
    <div
        class="img-box"
        :style="{
            width: typeof width === 'number' ? width + 'px' : width || '100%',
            height: typeof height === 'number' ? height + 'px' : height || '100%',
        }"
    >
        <img :src="src" :alt="alt || ''" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string
    alt: string
    width?: string | number
    height?: string | number
}>()
</script>

<style scoped lang="scss">
div.img-box {
    img {
        display: block;
        width: 100%;
        height: auto;
    }
}
</style>
