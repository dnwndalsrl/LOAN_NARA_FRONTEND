<template>
    <button
        type="button"
        class="responsive-normal-button"
        :style="{
            backgroundColor: bgColor,
            paddingTop: responsiveValue(pt, ptMax),
            paddingRight: responsiveValue(pr, prMax),
            paddingBottom: responsiveValue(pb, pbMax),
            paddingLeft: responsiveValue(pl, plMax),
            color: fontColor,
            fontWeight: fontWeight,
            fontSize: responsiveValue(fontSize, fontSizeMax),
        }"
        @click="handleClick"
    >
        {{ title }}
    </button>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    bgColor: string
    fontColor: string
    fontWeight: number
    fontSize: number
    fontSizeMax?: number
    pt?: number
    ptMax?: number
    pb?: number
    pbMax?: number
    pl?: number
    plMax?: number
    pr?: number
    prMax?: number
}>()

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
    emit('click', event)
}
</script>

<style lang="scss">
button.responsive-normal-button {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    border-radius: 8px;
}
</style>
