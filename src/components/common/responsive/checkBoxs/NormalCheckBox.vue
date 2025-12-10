<template>
    <el-checkbox-group
        v-model="model"
        :disabled="disabled"
        class="responsive-normal-checkbox"
        :style="cssVars"
    >
        <el-checkbox
            v-for="opt in options"
            :key="String(opt.value)"
            :label="opt.value"
            :disabled="opt.disabled"
        >
            {{ opt.label }}
        </el-checkbox>
    </el-checkbox-group>
</template>

<script setup lang="ts">
type Option = { label: string; value: string | number | boolean; disabled?: boolean }

const model = defineModel<(string | number)[]>()

const props = withDefaults(
    defineProps<{
        options: ReadonlyArray<Readonly<Option>>
        borderColor?: string
        bgColor?: string
        activeCheckColor?: string
        activeBgColor?: string
        fontColor?: string
        disabled?: boolean
    }>(),
    {
        options: () => [],
        disabled: false,
    },
)

const cssVars = computed(() => ({
    '--rr-border': props.borderColor ?? '#0758ee',
    '--rr-bgColor': props.bgColor ?? '#ffffff',
    '--rr-activeCheckColor': props.activeCheckColor ?? '#ffffff',
    '--rr-activeBgColor': props.activeBgColor ?? '#ffffff',
    '--rr-fontColor': props.fontColor ?? '#101010',
}))
</script>

<style lang="scss">
div.responsive-normal-checkbox {
    label.el-checkbox {
        display: flex;
        align-items: center;
        gap: 5px;
        span.el-checkbox__input {
            width: 0.938rem !important;
            height: 0.938rem !important;
            &.is-checked {
                span.el-checkbox__inner {
                    border-color: var(--rr-border) !important;
                    background-color: var(--rr-activeBgColor) !important;
                    &:after {
                        border-color: var(--rr-activeCheckColor) !important;
                        border-width: 2px !important;
                    }
                }
            }
            span.el-checkbox__inner {
                border-color: var(--rr-border) !important;
                background-color: var(--rr-bgColor);
            }
        }
        span.el-checkbox__label {
            color: var(--rr-fontColor);
            padding-left: 0 !important;
            @include pc-fixed {
                font-size: 0.938rem !important;
            }
            @include pc-fluid {
                @include responsive-font-size(0.813rem, 0.938rem);
            }
            @include mobile {
                @include responsive-font-size(0.813rem, 0.938rem);
            }
        }
    }
}
</style>
