<template>
    <NuxtLink
        class="normal-link"
        :class="getButtonClass"
        type="button"
        @click="handleClick()"
        :style="{
            backgroundColor: props.bgColor,
            borderColor: props.borderColor,
            color: props.fontColor,
        }"
    >
        <div v-if="getIconInfo?.position === 'left'" class="img-box">
            <NuxtImg :src="getIconInfo.src" :alt="props.title" :modifiers="ICON_IMAGE_OPTIONS" />
        </div>
        {{ title }}
        <div v-if="getIconInfo?.position === 'right'" class="img-box">
            <NuxtImg :src="getIconInfo.src" :alt="props.title" :modifiers="ICON_IMAGE_OPTIONS" />
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        type?:
            | 'NORMAL'
            | 'WARNING'
            | 'RESET'
            | 'RIGHTARROWGRAY'
            | 'RIGHTARROWWHITE'
            | 'SEARCH'
            | 'FILE'
        size?: 'LARGE' | 'SMALL'
        title: string
        bgColor: string
        borderColor: string
        fontColor: string
    }>(),
    {
        type: 'NORMAL',
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

// 이미지 Config
const ICON_CONFIG: any = {
    WARNING: {
        position: 'left',
        src: '/images/common/warning.png',
    },
    RESET: {
        position: 'left',
        src: '/images/common/reset.png',
    },
    FILE: {
        position: 'left',
        src: '/images/common/file_add.png',
    },
    SEARCH: {
        position: 'left',
        src: '/images/common/search_white.png',
    },
    RIGHTARROWGRAY: {
        position: 'right',
        src: '/images/common/right_arrow_gray.png',
    },
    RIGHTARROWWHITE: {
        position: 'right',
        src: '/images/common/right_arrow_white.png',
    },
}

// =============================================== Computed
// Props에 따른 동적 Button Class 가져오기
const getButtonClass = computed(() => [
    `is-${props.type.toLowerCase()}`,
    `is-${props.size.toLowerCase()}`,
])

// Props에 다른 동적 Icon 가져오기
const getIconInfo = computed(() => ICON_CONFIG[props.type])

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
    font-weight: 700;
    &.is-large {
        @include r(font-size, 13, 13, 13, 13, 13);
        @include r(padding-top, 8, 8, 8, 8, 8);
        @include r(padding-bottom, 8, 8, 8, 8, 8);
        @include r(padding-left, 12, 12, 12, 12, 12);
        @include r(padding-right, 12, 12, 12, 12, 12);
    }
    &.is-small {
        @include r(font-size, 12, 12, 12, 12, 12);
        @include r(padding-top, 4, 4, 4, 4, 4);
        @include r(padding-bottom, 4, 4, 4, 4, 4);
        @include r(padding-left, 8, 8, 8, 8, 8);
        @include r(padding-right, 8, 8, 8, 8, 8);
    }
    &.is-warning {
        display: flex;
        align-items: center;
        div.img-box {
            @include r(width, 11, 11, 11, 11, 11);
            @include r(margin-right, 6, 6, 6, 6, 6);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    &.is-reset {
        display: flex;
        align-items: center;
        div.img-box {
            @include r(width, 12, 12, 12, 12, 12);
            @include r(margin-right, 6, 6, 6, 6, 6);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    &.is-rightarrowgray {
        display: flex;
        align-items: center;
        div.img-box {
            @include r(width, 6, 6, 6, 6, 6);
            @include r(margin-left, 10, 10, 10, 10, 10);
            @include r(margin-top, 2, 2, 2, 2, 2);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    &.is-rightarrowwhite {
        display: flex;
        align-items: center;
        div.img-box {
            @include r(width, 6, 6, 6, 6, 6);
            @include r(margin-left, 10, 10, 10, 10, 10);
            @include r(margin-top, 2, 2, 2, 2, 2);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    &.is-search {
        display: flex;
        align-items: center;
        div.img-box {
            @include r(width, 10, 10, 10, 10, 10);
            @include r(margin-right, 4, 4, 4, 4, 4);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    &.is-file {
        display: flex;
        align-items: center;
        div.img-box {
            @include r(width, 11, 11, 11, 11, 11);
            @include r(margin-right, 6, 6, 6, 6, 6);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
