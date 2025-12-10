<template>
    <section class="main-section">
        <!-- 1번째 영역 -->
        <MainSection1 />
        <!-- 2번째 영역 -->
        <MainSection2 />
        <!-- 3번째 영역 -->
        <MainSection3 />
        <!-- 4번째 영역 -->
        <MainSection4 />
        <!-- 5번째 영역 -->
        <MainSection5 />
        <!-- 6번째 영역 -->
        <MainSection6 />
    </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
section.main-section {
    section.section-wrapper {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div.align-box {
            @include r(padding-left, 15, 20, 40, 0);
            @include r(padding-right, 15, 20, 40, 0);
            @include respond(max) {
                max-width: $bp-pc;
                margin: 0 auto;
            }
            @include respond(pc) {
                max-width: 100%;
            }
            @include respond(laptop) {
                max-width: 100%;
            }
            @include respond(tablet) {
                max-width: 100%;
            }
            @include respond(mobile) {
                max-width: 100%;
            }
        }
    }
}
</style>
