<template>
    <div class="signup-complete-section">
        <PageHeaderBox />
        <section class="step-status-wrapper">
            <StepStatus :level="'3'" />
        </section>
        <section class="complete-wrapper">
            <div class="complete-title-box">
                <div class="img-box">
                    <img src="/images/common/check_gray.png" alt="가입완료" />
                </div>
                <h2>관리자 승인 후 로그인을 하실 수 있습니다.</h2>
                <p>
                    회원가입이 완료 되었습니다<br />기타 궁금하신 사항은
                    고객센터(<strong>1599-9687</strong>)로 문의 바랍니다.
                </p>
            </div>
            <ul class="complete-step-list-wrapper">
                <template v-for="(item, index) in completeStepInfo" :key="`step-${index}`">
                    <li class="step-item">
                        <div class="img-box">
                            <img :src="item.image" :alt="item.title" />
                        </div>

                        <div class="badge-area">
                            <p class="step-title">STEP {{ item.step }}</p>
                        </div>

                        <p class="title">{{ item.title }}</p>
                    </li>

                    <li
                        v-if="index !== completeStepInfo.length - 1"
                        class="arrow-item"
                        aria-hidden="true"
                    >
                        <img src="/images/auth/signup/complete/next_step_arrow.png" alt="" />
                    </li>
                </template>
            </ul>
        </section>
        <section class="footer-wrapper">
            <div class="button-wrapper">
                <NormalLink
                    :type="'NORMAL'"
                    :size="'LARGE'"
                    :title="'메인으로 이동'"
                    :bgColor="'#717786'"
                    :borderColor="'#717786'"
                    :fontColor="'#FFFFFF'"
                />
                <NormalLink
                    :type="'NORMAL'"
                    :size="'LARGE'"
                    :title="'로그인'"
                    :bgColor="'#366ECC'"
                    :borderColor="'#366ECC'"
                    :fontColor="'#FFFFFF'"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const completeStepInfo = ref([
    {
        step: 1,
        image: '/images/auth/signup/complete/step_complete1.png',
        title: '회원가입',
    },
    {
        step: 2,
        image: '/images/auth/signup/complete/step_complete2.png',
        title: '허가업체 확인여부',
    },
    {
        step: 3,
        image: '/images/auth/signup/complete/step_complete3.png',
        title: '대부등록증 전송',
    },
    {
        step: 4,
        image: '/images/auth/signup/complete/step_complete4.png',
        title: '광고선택',
    },
    {
        step: 5,
        image: '/images/auth/signup/complete/step_complete5.png',
        title: '광고비 입금',
    },
    {
        step: 6,
        image: '/images/auth/signup/complete/step_complete6.png',
        title: '광고노출',
    },
])
</script>

<style lang="scss">
div.signup-complete-section {
    section.step-status-wrapper {
        @include r(margin-top, 20, 30, 30, 30, 30);
    }
    section.complete-wrapper {
        @include r(margin-top, 80, 80, 80, 80, 80);
        div.complete-title-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            div.img-box {
                @include r(margin-bottom, 32, 32, 32, 32, 32);
                @include r(width, 64, 64, 64, 64, 64);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            h2 {
                font-weight: $font-weight-bold;
                color: $color-gray-900;
                @include r(font-size, 24, 28, 28, 28, 28);
                @include r(margin-bottom, 24, 24, 24, 24, 24);
            }
            p {
                font-weight: $font-weight-regular;
                text-align: center;
                color: $color-gray-900;
                line-height: 1.2;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(margin-bottom, 80, 80, 80, 80, 80);
                strong {
                    font-weight: $font-weight-semi-bold;
                    color: $color-primary-500;
                }
            }
        }
        ul.complete-step-list-wrapper {
            display: flex;
            align-items: center;
            @include r(gap, 16, 16, 16, 16, 16);
            @include respond(laptop) {
                flex-direction: column;
            }
            @include respond(tablet) {
                flex-direction: column;
            }
            @include respond(mobile-plus) {
                flex-direction: column;
            }
            @include respond(mobile) {
                flex-direction: column;
            }
            li.step-item {
                display: flex;
                align-items: center;
                flex-direction: column;
                border: 1px solid $color-gray-200;
                border-radius: 16px;
                @include r(padding-top, 24, 24, 16, 16, 16);
                @include r(padding-bottom, 24, 24, 20, 20, 20);
                @include r(padding-left, 24, 24, 16, 16, 16);
                @include r(padding-right, 24, 24, 16, 16, 16);
                @include respond(laptop) {
                    width: 100%;
                    flex-direction: row;
                }
                @include respond(tablet) {
                    width: 100%;
                    flex-direction: row;
                }
                @include respond(mobile-plus) {
                    width: 100%;
                    flex-direction: row;
                }
                @include respond(mobile) {
                    width: 100%;
                    flex-direction: row;
                }
                div.img-box {
                    @include respond(laptop) {
                        width: vw-clamp(64, 64, 992, 1200, 16);
                    }
                    @include respond(tablet) {
                        width: vw-clamp(64, 64, 768, 992, 16);
                    }
                    @include respond(mobile-plus) {
                        width: vw-clamp(64, 64, 480, 768, 16);
                    }
                    @include respond(mobile) {
                        width: vw-clamp(0, 64, 0, 480, 16);
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                div.badge-area {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: $color-primary-500;
                    border-radius: 50px;
                    @include r(width, 55, 55, 55, 55, 55);
                    @include r(padding-top, 3, 3, 3, 3, 3);
                    @include r(padding-bottom, 3, 3, 3, 3, 3);
                    @include r(margin-top, 0, 0, 0, 0, 20);
                    @include r(margin-bottom, 0, 0, 0, 0, 12);
                    @include r(margin-left, 24, 24, 24, 24, 0);
                    @include r(margin-right, 12, 12, 12, 12, 0);
                    p.step-title {
                        font-weight: $font-weight-bold;
                        color: $color-white;
                        @include r(font-size, 12, 12, 12, 12, 12);
                    }
                }
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 18, 18, 16, 16, 16);
                }
            }

            li.arrow-item {
                display: flex;
                align-items: center;
                justify-content: center;
                @include respond(laptop) {
                    transform: rotate(90deg);
                }
                @include respond(tablet) {
                    transform: rotate(90deg);
                }
                @include respond(mobile-plus) {
                    transform: rotate(90deg);
                }
                @include respond(mobile) {
                    transform: rotate(90deg);
                }
                img {
                    display: block;
                    width: 8px;
                    height: auto;
                }
            }
        }
    }
    section.footer-wrapper {
        display: flex;
        justify-content: end;
        @include r(margin-top, 40, 40, 40, 40, 40);
        div.button-wrapper {
            display: flex;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
        }
    }
}
</style>
