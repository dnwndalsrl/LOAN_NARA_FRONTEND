<template>
    <div
        :style="{
            backgroundColor: props.backgroundColor,
        }"
        class="circle-badge-box"
    >
        <div
            class="circle"
            :style="{
                backgroundColor: props.circleColor,
            }"
        ></div>
        <p>
            {{ props.title }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    circleColor: string
    backgroundColor: string
}>()
</script>

<style scoped lang="scss">
div.circle-badge-box {
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 50px;
    div.circle {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 4px;
    }
    p {
        font-weight: 700;
        font-size: 13px;
        color: #222222;
    }
}
</style>
