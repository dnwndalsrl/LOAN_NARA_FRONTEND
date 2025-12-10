<template>
    <el-select-v2
        v-model="model"
        :placeholder="props.placeholder"
        :options="props.options"
        :disabled="props.disabled"
        :clearable="props.clearable"
        :filterable="props.filterable"
        :class="isSmall ? 'normal-select-box is-small' : 'normal-select-box'"
        @change="onChange"
    />
</template>
<script setup lang="ts">
type Option = { label: string; value: string | number; disabled?: boolean }

const model = defineModel<string | number | null>()

const props = withDefaults(
    defineProps<{
        options: Array<Option>
        disabled?: boolean
        clearable?: boolean
        placeholder?: string
        filterable?: boolean
        isSmall?: boolean
    }>(),
    {
        options: () => [],
        disabled: false,
        clearable: false,
        placeholder: '',
        filterable: false,
        isSmall: false,
    },
)

const emit = defineEmits<{
    (e: 'change', value: string | number | null, option: Option | null): void
}>()

const onChange = (val: string | number | null) => {
    const opt = props.options.find((o) => o.value === val) ?? null
    emit('change', val, opt)
}
</script>
<style lang="scss">
div.normal-select-box {
    display: block !important;
    width: 100% !important;
    height: 55px !important;
    &.is-small {
        height: 32px !important;
    }
    div.el-select__wrapper {
        border-radius: 8px !important;
        height: 100% !important;
        font-weight: 400 !important;
        color: #101010 !important;
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
