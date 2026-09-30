<template>
    <div class="support-ad-inquiry-content-type-one-section">
        <h2>대출나라 광고등록절차</h2>
        <ul class="process-list-wrapper">
            <template v-for="(item, index) in processInfo" :key="`step-${index}`">
                <li class="process-item">
                    <div class="img-box">
                        <img :src="item.image" :alt="item.title" />
                    </div>

                    <div class="badge-area">
                        <p class="process-title">STEP {{ item.step }}</p>
                    </div>

                    <p class="title">{{ item.title }}</p>
                </li>

                <li v-if="index !== processInfo.length - 1" class="arrow-item" aria-hidden="true">
                    <img src="/images/support/ad-inquiry/type-one/process_arrow.png" alt="" />
                </li>
            </template>
        </ul>
        <div class="register-info">
            <div class="top-info">
                <div class="left-box">
                    <h3>대출나라 회원이 아니신가요?</h3>
                    <p>
                        대출나라에서는 저렴한 비용으로 엄청난 광고효과를 누릴 수 있습니다.<br />
                        달라지는 콜 수로 광고효과를 직접 체감해보세요!
                    </p>
                </div>
                <div class="right-box">
                    <NormalButton
                        :size="'LARGE'"
                        :isIcon="true"
                        :icon-direction="'RIGHT'"
                        :icon-url="'/images/common/right_arrow_small_white.png'"
                        :title="'대출나라 회원가입'"
                        :bg-color="'secondary-500'"
                        :border-color="'secondary-500'"
                        :font-color="'white'"
                    />
                </div>
            </div>
            <ul class="ad-list-wrapper">
                <li v-for="(item, index) in registerInfo" :key="index" class="ad-list-item">
                    <div class="img-box">
                        <img :src="item.image" :alt="item.title" />
                    </div>
                    <p class="title">{{ item.title }}</p>
                    <p class="contents" v-html="item.contents" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
// =================================================== State
const processInfo = ref([
    {
        step: 1,
        image: '/images/support/ad-inquiry/type-one/process_1.png',
        title: '회원가입',
    },
    {
        step: 2,
        image: '/images/support/ad-inquiry/type-one/process_2.png',
        title: '대부등록증 전송',
    },
    {
        step: 3,
        image: '/images/support/ad-inquiry/type-one/process_3.png',
        title: '광고선택',
    },
    {
        step: 4,
        image: '/images/support/ad-inquiry/type-one/process_4.png',
        title: '광고비 입금',
    },
    {
        step: 5,
        image: '/images/support/ad-inquiry/type-one/process_5.png',
        title: '광고노출',
    },
])

const registerInfo = ref([
    {
        id: 1,
        image: '/images/support/ad-inquiry/type-one/ad_01.png',
        title: '11년 연속 1위',
        contents: `등록업체수 1위!<br/>대출문의수 1위!<br/>11년 연속 대출중개 분야 1위`,
    },
    {
        id: 2,
        image: '/images/support/ad-inquiry/type-one/ad_02.png',
        title: '맞춤 광고 피드백',
        contents: `데이터 로그 분석을 통한<br/>업체별<br/>맞춤 광고 피드백 전달`,
    },
    {
        id: 3,
        image: '/images/support/ad-inquiry/type-one/ad_03.png',
        title: '타깃 마케팅 가능',
        contents: `대출이 필요한 고객들을<br/>목표로한<br/>타깃 마케팅 가능`,
    },
])
// =================================================== Computed
// =================================================== Function
</script>

<style lang="scss">
div.support-ad-inquiry-content-type-one-section {
    @include r(margin-top, 40, 40, 40, 40, 40);
    h2 {
        font-weight: $font-weight-bold;
        color: $color-gray-900;
        @include r(font-size, 20, 20, 20, 20, 20);
        @include r(margin-bottom, 24, 24, 24, 24, 24);
    }
    ul.process-list-wrapper {
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
        li.process-item {
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
                p.process-title {
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
            flex-shrink: 0;
            @include r(width, 8, 8, 8, 8, 8);
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
                width: 100%;
                height: auto;
            }
        }
    }
    div.register-info {
        border-radius: 16px;
        background-color: $color-gray-100;
        @include r(margin-top, 60, 60, 60, 60, 60);
        @include r(padding-top, 32, 32, 32, 32, 32);
        @include r(padding-bottom, 32, 32, 32, 32, 32);
        @include r(padding-left, 32, 32, 32, 32, 32);
        @include r(padding-right, 32, 32, 32, 32, 32);
        div.top-info {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            @include respond(mobile-plus) {
                flex-direction: column;
                align-items: baseline;
            }
            @include respond(mobile) {
                flex-direction: column;
                align-items: baseline;
            }
            div.left-box {
                h3 {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                    @include r(font-size, 18, 18, 18, 18, 18);
                }
                p {
                    font-weight: $font-weight-regular;
                    color: $color-gray-900;
                    line-height: 1.2;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
            div.right-box {
                @include r(margin-top, 20, 20, 0, 0, 0);
                button {
                    div.img-box {
                        @include r(width, 6, 6, 6, 6, 6);
                    }
                }
            }
        }
        ul.ad-list-wrapper {
            display: flex;
            align-items: center;
            @include r(gap, 16, 16, 16, 16, 16);
            @include r(margin-top, 24, 24, 24, 24, 24);
            @include respond(mobile-plus) {
                flex-direction: column;
            }
            @include respond(mobile) {
                flex-direction: column;
            }
            li.ad-list-item {
                width: 100%;
                flex: 1 1 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: $color-white;
                border: 1px solid $color-gray-200;
                border-radius: 16px;
                @include r(padding-top, 32, 32, 32, 32, 32);
                @include r(padding-bottom, 32, 32, 32, 32, 32);
                div.img-box {
                    @include r(margin-bottom, 20, 20, 20, 20, 20);
                    @include r(width, 80, 80, 80, 80, 80);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 16, 16, 16, 16, 16);
                    @include r(margin-bottom, 14, 14, 14, 14, 14);
                }
                p.contents {
                    text-align: center;
                    font-weight: $font-weight-regular;
                    color: $color-gray-900;
                    line-height: 1.2;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
        }
    }
}
</style>
