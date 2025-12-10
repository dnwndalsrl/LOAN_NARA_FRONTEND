<template>
    <button
        class="normal-button"
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
button.normal-button {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #dddddd;
    cursor: pointer;
    border-radius: 8px;
}
</style>
