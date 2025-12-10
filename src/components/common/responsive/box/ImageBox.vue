<template>
    <div
        class="responsive-img-box"
        :style="{
            width: responsiveValue(width, widthMax) ?? '100%',
        }"
    >
        <img :src="src" :alt="alt || ''" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string
    alt: string
    width?: number
    widthMax?: number
}>()
</script>

<style scoped lang="scss">
div.responsive-img-box {
    img {
        display: block;
        width: 100%;
        height: auto;
    }
}
</style>
