<template>
    <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="{
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
        }"
        @swiper="onSwiper"
        class="premium-banner-swiper"
    >
        <SwiperSlide
            v-for="(premiumItem, premiumIndex) in premiumBannerStateInfo"
            :key="premiumItem.id"
        >
            <NuxtLink :to="'/'" class="premium-card">
                <div class="premium-badge-box">
                    <PremiumBadge />
                </div>
                <p class="premium-card-title">{{ premiumItem.title }}</p>
                <div class="premium-card-sub-title-box">
                    <p>{{ premiumItem.contents1 }}</p>
                    <p>{{ premiumItem.contents2 }}</p>
                </div>
                <div class="company-info-box">
                    <NormalBadge :title="premiumItem.area" />
                    <p class="company-name-title">{{ premiumItem.companyName }}</p>
                </div>
            </NuxtLink>
        </SwiperSlide>
        <div class="premium-swiper-controller">
            <div class="current-info">
                <p>
                    {{ premiumBannerCurrentIndex }} /
                    {{ premiumBannerStateInfo.length }}
                </p>
            </div>
            <div class="action-button-box">
                <div class="img-box is-prev swiper-btn-prev">
                    <img src="/images/main/slide_left_arrow.png" alt="이전으로" />
                </div>
                <div class="img-box is-pause" @click="toggleAutoplay()">
                    <img src="/images/main/slide_pause.png" alt="정지" />
                </div>
                <div class="img-box is-next swiper-btn-next">
                    <img src="/images/main/slide_right_arrow.png" alt="다음으로" />
                </div>
            </div>
        </div>
    </Swiper>
</template>

<script setup lang="ts">
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { v4 as uuid } from 'uuid'

// ======================================== state
// 프리미엄 배너 관련 state value
const premiumBannerStateInfo = ref([
    {
        id: uuid(),
        title: '당장 급하신분 신용무관 당일대출',
        contents1: '무서류 당일원칙 10개월까지',
        contents2: '업계최고한도 외국인 가능',
        area: '전국',
        companyName: '대출나라대부중개',
    },
    {
        id: uuid(),
        title: '당장 급하신분 신용무관 당일대출',
        contents1: '무서류 당일원칙 20개월까지',
        contents2: '업계최고한도 외국인 가능',
        area: '전국',
        companyName: '대출나라대부중개',
    },
    {
        id: uuid(),
        title: '당장 급하신분 신용무관 당일대출',
        contents1: '무서류 당일원칙 30개월까지',
        contents2: '업계최고한도 외국인 가능',
        area: '전국',
        companyName: '대출나라대부중개',
    },
    {
        id: uuid(),
        title: '당장 급하신분 신용무관 당일대출',
        contents1: '무서류 당일원칙 40개월까지',
        contents2: '업계최고한도 외국인 가능',
        area: '전국',
        companyName: '대출나라대부중개',
    },
    {
        id: uuid(),
        title: '당장 급하신분 신용무관 당일대출',
        contents1: '무서류 당일원칙 50개월까지',
        contents2: '업계최고한도 외국인 가능',
        area: '전국',
        companyName: '대출나라대부중개',
    },
])
const premiumBannerCurrentIndex = ref(1)
const premiumBannerSwiperRef = ref<any>(null)
const isPaused = ref(false)

// ======================================== Function
const onSwiper = (swiper: any) => {
    premiumBannerSwiperRef.value = swiper
    premiumBannerCurrentIndex.value = swiper.realIndex + 1

    swiper.on('slideChange', () => {
        premiumBannerCurrentIndex.value = swiper.realIndex + 1
    })
}

const toggleAutoplay = () => {
    if (!premiumBannerSwiperRef.value?.autoplay) return

    if (isPaused.value) {
        premiumBannerSwiperRef.value.autoplay.start()
    } else {
        premiumBannerSwiperRef.value.autoplay.stop()
    }

    isPaused.value = !isPaused.value
}
</script>

<style lang="scss">
div.premium-banner-swiper {
    position: relative;
    border: 1px solid #dfe3ea;
    border-radius: 16px;
    div.swiper-wrapper {
        z-index: 1;
        div.swiper-slide {
            a.premium-card {
                display: block;
                cursor: pointer;
                text-decoration: none;
                @include r(padding-top, 24, 24, 24, 24, 24);
                @include r(padding-bottom, 24, 24, 24, 24, 24);
                @include r(padding-left, 24, 24, 24, 24, 24);
                @include r(padding-right, 24, 24, 24, 24, 24);
                p.premium-card-title {
                    font-weight: 700;
                    color: $color-black;
                    @include r(margin-top, 16, 16, 16, 16, 16);
                    @include r(margin-bottom, 24, 24, 24, 24, 24);
                    @include r(font-size, 18, 18, 24, 24, 24);
                }
                div.premium-card-sub-title-box {
                    @include r(margin-bottom, 20, 20, 24, 24, 24);
                    p {
                        line-height: 1.3;
                        font-weight: 400;
                        color: $color-black;
                        @include r(font-size, 14, 14, 16, 16, 16);
                    }
                }
                div.company-info-box {
                    display: flex;
                    align-items: center;
                    div.normal-badge {
                        @include r(margin-right, 6, 6, 6, 6, 6);
                    }
                    p.company-name-title {
                        font-weight: 400;
                        color: $color-black;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
        }
    }
    div.premium-swiper-controller {
        z-index: 2;
        position: absolute;
        bottom: vw-clamp(0, 24, 0, 480, 16);
        right: vw-clamp(0, 24, 0, 480, 16);
        display: flex;
        align-items: center;
        background-color: $color-light-gray;
        border-radius: 8px;
        @include r(gap, 16, 16, 16, 16, 16);
        @include r(padding-top, 7, 7, 7, 7, 7);
        @include r(padding-bottom, 7, 7, 7, 7, 7);
        @include r(padding-left, 14, 14, 14, 14, 14);
        @include r(padding-right, 14, 14, 14, 14, 14);
        div.current-info {
            p {
                font-weight: 600;
                color: $color-black;
                @include r(font-size, 14, 14, 14, 14, 14);
            }
        }
        div.action-button-box {
            display: flex;
            align-items: center;
            @include r(gap, 16, 16, 16, 16, 16);
            div.img-box {
                cursor: pointer;
                @include r(width, 8, 8, 8, 8, 8);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>
