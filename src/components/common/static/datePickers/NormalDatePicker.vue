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
        :class="isSmall ? 'normal-date-picker is-small' : 'normal-date-picker'"
        @change="onChange"
    />
</template>

<script setup lang="ts">
type DateValue = string | [string, string] | null

const model = defineModel<DateValue>({ default: null })

const props = withDefaults(
    defineProps<{
        type?: 'date' | 'daterange' | 'month' | 'year'
        placeholder?: string
        startPlaceholder?: string
        endPlaceholder?: string
        rangeSeparator?: string
        disabled?: boolean
        isSmall?: boolean
    }>(),
    {
        type: 'date',
        placeholder: '날짜 선택',
        startPlaceholder: '시작일',
        endPlaceholder: '종료일',
        rangeSeparator: '-',
        disabled: false,
        isSmall: false,
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
    height: 55px !important;
    &.is-small {
        height: 32px !important;
        input {
            font-size: 13px !important;
        }
    }
    input {
        font-size: 16px !important;
        font-weight: 400 !important;
    }
}
</style>
