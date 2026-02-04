<template>
    <div class="premium-badge">
        <div class="img-box">
            <img src="/images/common/premium_badge.png" alt="프리미엄" />
        </div>
        <p>PREMIUM</p>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.premium-badge {
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: 50px;
    background: linear-gradient(
        90deg,
        $color-primary 0%,
        #4f82dd 33%,
        #69a2ff 66%,
        $color-primary 100%
    );
    background-size: 200% 100%;
    background-position: 0% 50%;
    animation: premium-gradient-move 2.5s linear infinite;
    @include r(padding-top, 6, 6, 6, 6, 6);
    @include r(padding-bottom, 6, 6, 6, 6, 6);
    @include r(padding-left, 8, 8, 8, 8, 8);
    @include r(padding-right, 8, 8, 8, 8, 8);
    div.img-box {
        @include r(width, 11, 11, 11, 11, 11);
        @include r(margin-right, 4, 4, 4, 4, 4);
        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }
    p {
        font-weight: 700;
        color: $color-white;
        @include r(font-size, 12, 12, 12, 12, 12);
    }
}

@keyframes premium-gradient-move {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
}
</style>
