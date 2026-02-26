<template>
    <el-input
        :class="props.size === 'NORMAL' ? 'normal-input' : 'normal-input is-small'"
        v-model="model"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :clearable="props.clearable"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        :show-password="props.showPassword"
        :placeholder="props.placeholder"
        :type="props.type"
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
        size?: 'NORMAL' | 'SMALL'
        disabled?: boolean
        clearable?: boolean
        maxlength?: number
        minlength?: number
        showPassword?: boolean
        placeholder?: string
        readonly?: boolean
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

const onInput = (value: string | number | null) => {
    emit('input', value)
}
</script>

<style lang="scss">
div.normal-input {
    width: 100%;
    &.is-small {
        div.el-input_wrapper {
            input.el-input__inner {
                @include r(font-size, 13, 13, 13, 13, 13);
                @include r(height, 32, 32, 32, 32, 32);
            }
        }
    }
    div.el-input__wrapper {
        border-radius: 8px !important;
        border: 1px solid #dcdfe6 !important;
        box-shadow: none !important;
        input.el-input__inner {
            font-weight: 400;
            color: #292e41;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(height, 49, 49, 49, 49, 49);
        }
    }
}
</style>
