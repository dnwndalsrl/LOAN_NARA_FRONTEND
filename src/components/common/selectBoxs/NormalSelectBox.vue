<template>
    <el-select-v2
        v-model="model"
        :placeholder="props.placeholder"
        :options="props.options"
        :disabled="props.disabled"
        :clearable="props.clearable"
        :filterable="props.filterable"
        :class="props.size === 'SMALL' ? 'normal-select-box is-small' : 'normal-select-box'"
        @change="onChange"
    />
</template>
<script setup lang="ts">
type Option = { label: string; value: string | number; disabled?: boolean }

const model = defineModel<string | number | null>()

const props = withDefaults(
    defineProps<{
        size?: 'NORMAL' | 'SMALL'
        options: Array<Option>
        disabled?: boolean
        clearable?: boolean
        placeholder?: string
        filterable?: boolean
    }>(),
    {
        options: () => [],
        disabled: false,
        clearable: false,
        placeholder: '',
        filterable: false,
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
    @include r(height, 49, 49, 49, 49, 49);
    &.is-small {
        @include r(height, 32, 32, 32, 32, 32);
        div.div.el-select__wrapper {
            @include r(font-size, 13, 13, 13, 13, 13);
        }
    }
    div.el-select__wrapper {
        border-radius: 8px !important;
        height: 100% !important;
        min-height: inherit !important;
        font-weight: 400 !important;
        color: $color-black !important;
        line-height: 1 !important;
        box-shadow: none !important;
        border: 1px solid #dcdfe6 !important;
        padding: 0 0.75rem !important;
        @include r(font-size, 14, 14, 14, 14, 14);
    }
}
</style>
