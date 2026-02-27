<template>
    <ul class="step-status">
        <li :class="props.level === '1' ? 'step-item is-active' : 'step-item'">
            <div class="badge-box">STEP 1</div>
            <p>약관동의</p>
        </li>
        <li class="img-box">
            <img src="/images/common/right_arrow_light_gray.png" alt="회원가입" />
        </li>
        <li :class="props.level === '2' ? 'step-item is-active' : 'step-item'">
            <div class="badge-box">STEP 2</div>
            <p>정보입력</p>
        </li>
        <li class="img-box">
            <img src="/images/common/right_arrow_light_gray.png" alt="회원가입" />
        </li>
        <li :class="props.level === '3' ? 'step-item is-active' : 'step-item'">
            <div class="badge-box">STEP 3</div>
            <p>가입완료</p>
        </li>
    </ul>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        level: string
    }>(),
    {
        level: '1',
    },
)
</script>

<style lang="scss">
ul.step-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background-color: $color-light-gray;
    @include r(padding-top, 22, 22, 22, 22, 22);
    @include r(padding-bottom, 22, 22, 22, 22, 22);
    li.step-item {
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        align-items: center;
        &.is-active {
            div.badge-box {
                background-color: $color-primary !important;
            }
            p {
                color: $color-primary !important;
            }
        }
        @include r(gap, 8, 8, 8, 8, 8);
        @include respond(mobile-plus) {
            flex-direction: column;
        }
        @include respond(mobile) {
            flex-direction: column;
        }
        div.badge-box {
            font-weight: 700;
            border-radius: 50px;
            background-color: #8b98b1;
            color: $color-white;
            @include r(font-size, 12, 12, 12, 12, 12);
            @include r(padding-top, 3, 3, 3, 3, 3);
            @include r(padding-bottom, 3, 3, 3, 3, 3);
            @include r(padding-left, 6, 6, 6, 6, 6);
            @include r(padding-right, 6, 6, 6, 6, 6);
        }
        p {
            color: #8b98b1;
            font-weight: 700;
            @include r(font-size, 18, 18, 18, 18, 18);
        }
    }
    li.img-box {
        @include r(width, 8, 8, 8, 8, 8);
        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }
}
</style>
