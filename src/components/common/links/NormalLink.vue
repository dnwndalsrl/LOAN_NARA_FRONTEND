<template>
    <NuxtLink
        class="normal-link"
        :class="size === 'LARGE' ? 'is-large' : 'is-small'"
        @click="handleClick()"
        :style="{
            backgroundColor: props.bgColor,
            borderColor: props.borderColor,
            color: props.fontColor,
        }"
    >
        <div class="align-wrapper">
            <div v-if="isIcon && iconDirection === 'LEFT'" class="img-box">
                <NuxtImg :src="iconUrl" :alt="props.title" :modifiers="ICON_IMAGE_OPTIONS" />
            </div>
            <p class="link-title">{{ title }}</p>
            <div v-if="isIcon && iconDirection === 'RIGHT'" class="img-box">
                <NuxtImg :src="iconUrl" :alt="props.title" :modifiers="ICON_IMAGE_OPTIONS" />
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        isIcon?: boolean
        iconDirection?: 'LEFT' | 'RIGHT'
        iconUrl?: string
        size?: 'LARGE' | 'SMALL'
        title: string
        bgColor: string
        borderColor: string
        fontColor: string
    }>(),
    {
        isIcon: false,
        iconDirection: 'LEFT',
        size: 'LARGE',
    },
)

const emit = defineEmits<{
    (e: 'click'): void
}>()

// 이미지 최적화 옵션
const ICON_IMAGE_OPTIONS = {
    width: 32,
    height: 32,
    format: 'webp',
    quality: 80,
    fit: 'contain',
    densities: [1, 2],
    loading: 'lazy',
    decoding: 'async',
}

// =============================================== Custom Function
const handleClick = () => {
    emit('click')
}
</script>

<style lang="scss">
a.normal-link {
    display: block;
    width: fit-content;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #ffffff;
    font-weight: $font-weight-bold;
    line-height: 1;
    &.is-large {
        @include r(height, 32, 32, 32, 32, 32);
        div.align-wrapper {
            @include r(padding-left, 12, 12, 12, 12, 12);
            @include r(padding-right, 12, 12, 12, 12, 12);
            p.link-title {
                @include r(font-size, 13, 13, 13, 13, 13);
            }
        }
    }
    &.is-small {
        @include r(height, 22, 22, 22, 22, 22);
        div.align-wrapper {
            @include r(padding-left, 8, 8, 8, 8, 8);
            @include r(padding-right, 8, 8, 8, 8, 8);
            p.link-title {
                @include r(font-size, 12, 12, 12, 12, 12);
            }
        }
    }
    div.align-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @include r(gap, 8, 8, 8, 8, 8);
        p.link-title {
            line-height: 1;
        }
        div.img-box {
            @include r(width, 10, 10, 10, 10, 10);
            @include r(height, 10, 10, 10, 10, 10);
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
