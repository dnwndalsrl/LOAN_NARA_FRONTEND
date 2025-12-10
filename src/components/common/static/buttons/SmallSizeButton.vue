<template>
    <button
        class="small-size-button"
        type="button"
        @click="handleClick()"
        :style="{
            backgroundColor: props.bgColor,
            borderColor: props.borderColor,
            color: props.fontColor,
        }"
    >
        {{ title }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    bgColor: string
    borderColor?: string
    fontColor?: string
}>()

const emit = defineEmits<{
    (e: 'click'): void
}>()

const handleClick = () => {
    emit('click')
}
</script>

<style lang="scss">
button.small-size-button {
    display: block;
    width: fit-content;
    padding: 4px 6px;
    border: 1px solid #dddddd;
    cursor: pointer;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
}
</style>
