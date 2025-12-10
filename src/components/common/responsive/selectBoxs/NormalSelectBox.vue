<template>
    <el-select
        v-model="model"
        :disabled="disabled"
        :clearable="clearable"
        :placeholder="placeholder"
        :style="cssVars"
        :class="
            isStyleUnderline
                ? 'responsive-normal-select-box is-underline'
                : 'responsive-normal-select-box'
        "
    >
        <el-option
            v-for="opt in options"
            :key="String(opt.value)"
            :label="opt.label"
            :value="opt.value"
            :disabled="opt.disabled"
        />
    </el-select>
</template>
<script setup lang="ts">
type Option = { label: string; value: string | number; disabled?: boolean }

const model = defineModel<string | number | null>()

const props = withDefaults(
    defineProps<{
        options: ReadonlyArray<Readonly<Option>>
        disabled?: boolean
        clearable?: boolean
        bgColor?: string
        placeholder?: string
        isStyleUnderline?: boolean
    }>(),
    {
        options: () => [],
        disabled: false,
        clearable: false,
        placeholder: '',
        isStyleUnderline: false,
    },
)

const cssVars = computed(() => ({
    '--rr-bg-color': props.bgColor ?? '#ffffff',
}))
</script>
<style lang="scss">
div.responsive-normal-select-box {
    display: block !important;
    width: 100% !important;
    height: 2.813rem !important;
    &.is-underline {
        div.el-select__wrapper {
            background-color: inherit !important;
            border-bottom: 2px solid #dadada !important;
            border-radius: 0 !important;
        }
    }
    div.el-select__wrapper {
        box-shadow: none !important;
        background-color: var(--rr-bg-color) !important;
        border-radius: 8px !important;
        height: 100% !important;
        font-weight: 400 !important;
        color: #101010 !important;
        @include pc-fixed {
            font-size: 0.938rem !important;
        }
        @include pc-fluid {
            @include responsive-font-size(0.813rem, 0.938rem);
        }
        @include mobile {
            @include responsive-font-size(0.813rem, 0.938rem);
        }
        div.el-select__selection {
            div.el-select__selected-item {
                input.el-select__input {
                }
            }
        }
        div.el-select__suffix {
        }
    }
}
</style>
