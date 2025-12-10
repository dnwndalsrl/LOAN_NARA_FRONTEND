<template>
    <el-input
        :class="isSmall ? 'normal-input is-small' : 'normal-input'"
        v-model="model"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :clearable="props.clearable"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        :show-password="props.showPassword"
        :placeholder="props.placeholder"
        :type="props.type"
        :autocomplete="'new-password'"
        @input="onInput"
    />
</template>

<script setup lang="ts">
const model = defineModel<string | number | null>()
const emit = defineEmits<{
    (e: 'input', value: string | number | null): void
}>()
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
        isStyleUnderline?: boolean
        isSmall?: boolean
        type?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'number'
    }>(),
    {
        disabled: false,
        clearable: false,
        showPassword: false,
        readonly: false,
        placeholder: '',
        isStyleUnderline: false,
        isSmall: false,
        type: 'text',
    },
)

const onInput = (value: string | number | null) => {
    emit('input', value)
}
</script>

<style lang="scss">
div.normal-input {
    &.is-small {
        div.el-input__wrapper {
            height: 32px !important;
            input.el-input__inner {
                font-size: 13px !important;
            }
        }
    }
    div.el-input__wrapper {
        height: 55px !important;
        border-radius: 6px !important;
        input.el-input__inner {
            font-size: 16px !important;
            font-weight: 400 !important;
            color: #101010 !important;
        }
    }
}
</style>
