<template>
    <el-input
        :class="
            isStyleUnderline ? 'responsive-normal-input is-underline' : 'responsive-normal-input'
        "
        v-model="model"
        :disabled="disabled"
        :readonly="readonly"
        :clearable="clearable"
        :maxlength="maxlength"
        :minlength="minlength"
        :show-password="showPassword"
        :placeholder="placeholder"
        :type="type"
        :style="cssVars"
        @input="onInput"
    />
</template>

<script setup lang="ts">
const model = defineModel<string | number | null>()
const props = withDefaults(
    defineProps<{
        modelValue: string | number | null
        disabled?: boolean
        clearable?: boolean
        maxlength?: number
        minlength?: number
        showPassword?: boolean
        placeholder?: string
        readonly?: boolean
        bgColor?: string
        isStyleUnderline?: boolean
        type?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'number'
    }>(),
    {
        disabled: false,
        clearable: false,
        showPassword: false,
        readonly: false,
        placeholder: '',
        isStyleUnderline: false,
        type: 'text',
    },
)

const emit = defineEmits<{
    (e: 'input', value: string | number | null): void
}>()

const onInput = (value: string | number | null) => {
    emit('input', value)
}

const cssVars = computed(() => ({
    '--rr-bg-color': props.bgColor ?? '#ffffff',
}))
</script>

<style lang="scss">
div.responsive-normal-input {
    height: 2.813rem;
    &.is-underline {
        div.el-input__wrapper {
            background-color: inherit !important;
            border-bottom: 2px solid #dadada !important;
            border-radius: 0 !important;
        }
    }
    div.el-input__wrapper {
        box-shadow: none !important;
        background-color: var(--rr-bg-color);
        border-radius: 8px !important;
        input.el-input__inner {
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
        }
    }
}
</style>
