<template>
    <el-checkbox
        v-model="model"
        :label="props.label"
        :disabled="props.disabled"
        :indeterminate="props.isIndeterminate"
        class="normal-checkbox"
        @change="handleChange"
    >
        <slot>{{ props.label }}</slot>
    </el-checkbox>
</template>

<script setup lang="ts">
const model = defineModel<boolean | string | number>()

const props = withDefaults(
    defineProps<{
        label: string | number | boolean
        disabled?: boolean
        isIndeterminate?: boolean
    }>(),
    {
        disabled: false,
        isIndeterminate: false,
    },
)

const emit = defineEmits<{
    (e: 'change', value: boolean | string | number): void
}>()

const handleChange = (val: boolean | string | number) => {
    emit('change', val)
}
</script>

<style lang="scss">
label.normal-checkbox {
    display: flex;
    align-items: center;
    gap: 5px;
    height: auto !important;
    &.is-checked {
        span.el-checkbox__label {
            color: #222222 !important;
        }
    }
    span.el-checkbox__input {
        margin-top: 3px;
        &.is-checked {
            span.el-checkbox__inner {
                &:after {
                }
            }
        }
        span.el-checkbox__inner {
        }
    }
    span.el-checkbox__label {
        color: #222222 !important;
        padding-left: 0 !important;
        font-size: 14px;
    }
}
</style>
