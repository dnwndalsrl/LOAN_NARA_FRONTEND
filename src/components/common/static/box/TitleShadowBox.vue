<template>
    <div class="title-shadow-box">
        <div class="align-box">
            <p class="title">{{ props.title }}</p>
            <p v-if="props.subTitle" class="sub-title">{{ props.subTitle }}</p>
        </div>
        <div class="content-box">
            <slot name="content" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    subTitle?: string
}>()
</script>

<style scoped lang="scss">
div.title-shadow-box {
    width: 100%;
    padding: 30px;
    box-shadow: 0px 4px 8px 0px #cacacc3d;
    background-color: #ffffff;
    border-radius: 8px;
    div.align-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        p.title {
            font-size: 18px;
            font-weight: 700;
            color: #000000;
        }
        p.sub-title {
            font-size: 14px;
            font-weight: 500;
            color: #727375;
        }
    }
}
</style>
