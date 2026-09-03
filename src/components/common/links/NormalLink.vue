<template>
    <NuxtLink
        :to="to"
        class="normal-link"
        :class="[
            size === 'LARGE' ? 'is-large' : 'is-small',
            `bg-${bgColor}`,
            `border-${borderColor}`,
            `font-${fontColor}`,
        ]"
        @click="handleClick()"
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
type ColorKey =
    | 'white'
    | 'gray-900'
    | 'gray-800'
    | 'gray-700'
    | 'gray-600'
    | 'gray-500'
    | 'gray-400'
    | 'gray-300'
    | 'gray-200'
    | 'gray-100'
    | 'primary-900'
    | 'primary-800'
    | 'primary-700'
    | 'primary-600'
    | 'primary-500'
    | 'primary-400'
    | 'primary-300'
    | 'primary-200'
    | 'primary-100'
    | 'secondary-900'
    | 'secondary-800'
    | 'secondary-700'
    | 'secondary-600'
    | 'secondary-500'
    | 'secondary-400'
    | 'secondary-300'
    | 'secondary-200'
    | 'secondary-100'
    | 'point-900'
    | 'point-800'
    | 'point-700'
    | 'point-600'
    | 'point-500'
    | 'point-400'
    | 'point-300'
    | 'point-200'
    | 'point-100'
    | 'success-900'
    | 'success-800'
    | 'success-700'
    | 'success-600'
    | 'success-500'
    | 'success-400'
    | 'success-300'
    | 'success-200'
    | 'success-100'
    | 'error-900'
    | 'error-800'
    | 'error-700'
    | 'error-600'
    | 'error-500'
    | 'error-400'
    | 'error-300'
    | 'error-200'
    | 'error-100'

const props = withDefaults(
    defineProps<{
        to?: string
        isIcon?: boolean
        iconDirection?: 'LEFT' | 'RIGHT'
        iconUrl?: string
        size?: 'LARGE' | 'SMALL'
        title: string
        bgColor?: ColorKey
        borderColor?: ColorKey
        fontColor?: ColorKey
    }>(),
    {
        isIcon: false,
        iconDirection: 'LEFT',
        size: 'LARGE',
        bgColor: 'primary-500',
        borderColor: 'primary-500',
        fontColor: 'white',
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
    text-decoration: none;
    @each $name, $color in $button-colors {
        &.bg-#{$name} {
            background-color: $color;
        }

        &.border-#{$name} {
            border-color: $color;
        }

        &.font-#{$name} {
            color: $color;
        }
    }
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
