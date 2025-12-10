<template>
    <div
        :style="{
            borderColor: props.borderColor,
            backgroundColor: props.backgroundColor,
        }"
        class="normal-badge-box"
    >
        <p
            :style="{
                color: props.fontColor,
            }"
        >
            {{ props.title }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    fontColor: string
    borderColor: string
    backgroundColor: string
}>()
</script>

<style scoped lang="scss">
div.normal-badge-box {
    display: block;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 50px;
    border: 1px solid #000000;
    p {
        font-weight: 700;
        font-size: 13px;
    }
}
</style>
