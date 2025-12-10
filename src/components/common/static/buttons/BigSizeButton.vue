<template>
    <button
        class="big-size-button"
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
button.big-size-button {
    display: block;
    width: fit-content;
    padding: 8px;
    border: 1px solid #dddddd;
    cursor: pointer;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
}
</style>
