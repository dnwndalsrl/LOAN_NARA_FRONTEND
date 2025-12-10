<template>
    <div class="select-date-picker-box">
        <div class="img-box is-prev" @click="onClickPrevDate()">
            <img src="/images/admin/bg_gray_arrow.png" alt="이전" />
        </div>
        <p class="date-title">{{ model }}</p>
        <div class="img-box is-next" @click="onClickNextDate()">
            <img src="/images/admin/bg_gray_arrow.png" alt="다음" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()

const model = defineModel<string>({ default: '' })

const FORMAT = 'YYYY-MM-DD(ddd)'

const emit = defineEmits(['click'])

// 선택하는 DatePicker 이전날
const onClickPrevDate = () => {
    model.value = $dayjs(model.value, FORMAT).subtract(1, 'day').format('YYYY-MM-DD(ddd)')
    emit('click')
}

// 선택하는 DatePicker 다음날
const onClickNextDate = () => {
    model.value = $dayjs(model.value, FORMAT).add(1, 'day').format('YYYY-MM-DD(ddd)')
    emit('click')
}
</script>

<style lang="scss">
div.select-date-picker-box {
    display: flex;
    align-items: center;
    div.img-box {
        width: 24px;
        cursor: pointer;
        img {
            display: block;
            width: 100%;
            height: auto;
        }
        &.is-next {
            transform: rotate(180deg);
        }
    }
    p.date-title {
        font-size: 14px;
        font-weight: 700;
        color: #000000;
        margin: 0 16px;
    }
}
</style>
