<template>
    <div class="responsive-required-title">
        <p
            :style="{
                color: fontColor,
                fontWeight: fontWeight,
                fontSize: responsiveValue(fontSize, fontSizeMax),
            }"
        >
            {{ title }}
            <strong>*</strong>
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    fontColor: string
    fontWeight: number
    fontSize: number
    fontSizeMax?: number
}>()
</script>

<style lang="scss">
div.responsive-required-title {
    @include pc-fixed {
        margin-bottom: 0.875rem;
    }
    @include pc-fluid {
        margin-bottom: 0.875rem;
    }
    @include mobile {
        margin-bottom: 0.625rem;
    }
    p {
        strong {
            font-weight: 700;
            color: #e24a4a;
        }
    }
}
</style>
