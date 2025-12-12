<template>
    <section style="padding: 24px; text-align: center" class="error-container">
        <div class="error-box">
            <ul class="header-wrapper">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="body-wrapper">
                <p class="error-code-title">{{ props.error.statusCode || 'Error' }}</p>
                <p class="error-message-title">{{ '잘못된 접근입니다.' }}</p>
                <div class="prev-btn" @click="router.back()">이전 페이지</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
const router = useRouter()
const props = defineProps<{ error: NuxtError }>()
</script>

<style lang="scss">
section.error-container {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;
    // div.error-box {
    //     background-color: #dbe5ff;
    //     width: 640px;
    //     border-radius: 24px;
    //     @include r(padding-top, 18, 22, 22, 22);
    //     @include r(padding-bottom, 18, 22, 22, 22);
    //     @include r(padding-left, 24, 28, 28, 28);
    //     @include r(padding-right, 24, 28, 28, 28);
    //     @include respond(tablet) {
    //         width: 100%;
    //     }
    //     @include respond(mobile) {
    //         width: 100%;
    //     }
    //     ul.header-wrapper {
    //         display: flex;
    //         align-items: center;
    //         justify-content: end;
    //         gap: 10px;
    //         li {
    //             background-color: #b7c4e5;
    //             border-radius: 50%;
    //             @include r(width, 10, 16, 16, 16);
    //             @include r(height, 10, 16, 16, 16);
    //         }
    //     }
    //     div.body-wrapper {
    //         display: flex;
    //         flex-direction: column;
    //         align-items: center;
    //         @include r(padding-top, 30, 53, 53, 53);
    //         @include r(padding-bottom, 30, 53, 53, 53);
    //         p.error-code-title {
    //             font-weight: 900;
    //             color: #7e8cb1;
    //             @include r(font-size, 50, 74, 74, 74);
    //         }
    //         p.error-message-title {
    //             font-weight: 900;
    //             color: #7e8cb1;
    //             margin-top: 10px;
    //             margin-bottom: 40px;
    //             @include r(font-size, 16, 40, 40, 40);
    //         }
    //         div.prev-btn {
    //             width: fit-content;
    //             background-color: #254793;
    //             color: #ffffff;
    //             font-weight: 500;
    //             border-radius: 8px;
    //             cursor: pointer;
    //             @include r(padding-top, 12, 20, 20, 20);
    //             @include r(padding-bottom, 12, 20, 20, 20);
    //             @include r(padding-left, 25, 30, 30, 30);
    //             @include r(padding-right, 25, 30, 30, 30);
    //             @include r(font-size, 11, 16, 16, 16);
    //         }
    //     }
    // }
}
</style>
