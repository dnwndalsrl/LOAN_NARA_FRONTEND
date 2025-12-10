<template>
    <el-radio-group
        v-model="model"
        :disabled="disabled"
        class="responsive-round-radio-button"
        :style="cssVars"
    >
        <el-radio
            v-for="opt in options"
            :key="String(opt.value)"
            :label="opt.value"
            :disabled="opt.disabled"
            :border="true"
        >
            {{ opt.label }}
        </el-radio>
    </el-radio-group>
</template>

<script setup lang="ts">
type Option = { label: string; value: string | number | boolean; disabled?: boolean }

type designOption = ['blue', 'green']

const model = defineModel<string | number | boolean | undefined>()

const props = withDefaults(
    defineProps<{
        options: ReadonlyArray<Readonly<Option>>
        borderColor?: string
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
    '--rr-text': props.fontColor ?? '#0758ee',
    '--rr-bg-checked': props.borderColor ?? '#0758ee',
    '--rr-text-checked': '#ffffff',
}))
</script>

<style lang="scss">
div.responsive-round-radio-button {
    display: flex !important;
    flex-wrap: nowrap !important;
    gap: 15px;
    label.el-radio {
        width: 100%;
        border-radius: 8px !important;
        padding: 0 !important;
        margin: 0 !important;
        height: 2.875rem;
        &.is-bordered {
            border: 1px solid var(--rr-border) !important;
        }
        &.is-checked {
            background-color: var(--rr-border) !important;
            span.el-radio__label {
                color: var(--rr-text-checked, #fff);
            }
        }
        span.el-radio__input {
            display: none !important;
        }
        span.el-radio__label {
            width: 100% !important;
            text-align: center !important;
            padding-left: 0 !important;
            color: var(--rr-text);
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
