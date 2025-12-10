<template>
    <div
        class="responsive-round-title-box"
        :style="{
            backgroundColor: bgColor,
            paddingTop: responsiveValue(pt, ptMax),
            paddingRight: responsiveValue(pr, prMax),
            paddingBottom: responsiveValue(pb, pbMax),
            paddingLeft: responsiveValue(pl, plMax),
        }"
    >
        <p
            :style="{
                color: fontColor,
                fontWeight: fontWeight,
                fontSize: responsiveValue(fontSize, fontSizeMax),
            }"
        >
            {{ title }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    bgColor: string
    fontColor: string
    fontWeight: number
    fontSize: number
    fontSizeMax?: number
    pt: number
    ptMax?: number
    pb: number
    pbMax?: number
    pl: number
    plMax?: number
    pr: number
    prMax?: number
}>()
</script>

<style scoped lang="scss">
div.responsive-round-title-box {
    width: fit-content;
    border-radius: 18px;
}
</style>
