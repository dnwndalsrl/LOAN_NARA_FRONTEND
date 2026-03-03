<template>
    <el-date-picker
        v-model="model"
        :type="props.type"
        :placeholder="props.placeholder"
        :start-placeholder="props.startPlaceholder"
        :end-placeholder="props.endPlaceholder"
        :range-separator="props.rangeSeparator"
        :disabled="props.disabled"
        value-format="YYYY-MM-DD"
        :class="props.size === 'SMALL' ? 'normal-date-picker is-small' : 'normal-date-picker'"
        @change="onChange"
    />
</template>

<script setup lang="ts">
type DateValue = string | [string, string] | null

const model = defineModel<DateValue>({ default: null })

const props = withDefaults(
    defineProps<{
        type?: 'date' | 'daterange' | 'month' | 'year'
        size?: 'NORMAL' | 'SMALL'
        placeholder?: string
        startPlaceholder?: string
        endPlaceholder?: string
        rangeSeparator?: string
        disabled?: boolean
    }>(),
    {
        type: 'date',
        placeholder: '날짜 선택',
        startPlaceholder: '시작일',
        endPlaceholder: '종료일',
        rangeSeparator: '-',
        disabled: false,
    },
)

const emit = defineEmits<{
    (e: 'change', value: DateValue): void
}>()

const onChange = (value: DateValue) => {
    emit('change', value)
}
</script>
<style lang="scss">
div.normal-date-picker {
    width: 100% !important;
    border-radius: 6px !important;
    border: 1px solid #dcdfe6 !important;
    box-shadow: none !important;
    @include r(height, 49, 49, 49, 49, 49);
    &.is-small {
        @include r(height, 32, 32, 32, 32, 32);
        input {
            @include r(font-size, 13, 13, 13, 13, 13);
        }
    }
    input {
        @include r(font-size, 14, 14, 14, 14, 14);
        font-weight: 400 !important;
    }
}
</style>
