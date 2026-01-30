<template>
    <footer class="loan-nara-footer-container">
        <div class="partner-wrapper">
            <div class="align-box">
                <!-- PC/LABTOP -->
                <div class="partner-pc-list">
                    <ul class="partner-list">
                        <li
                            v-for="(partnerItem, partnerIndex) in partnerInfo"
                            :key="partnerItem.id"
                            class="partner-item"
                        >
                            <a :href="partnerItem.link" target="_blank">
                                <div class="img-box">
                                    <img
                                        :src="partnerItem.image"
                                        :alt="partnerItem.id"
                                        :class="`${partnerItem.size}`"
                                    />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- TABLET/MOBILE -->
                <div class="partner-mobile-list">
                    <Vue3Marquee :duration="20">
                        <ul class="partner-list is-marquee">
                            <li
                                v-for="(partnerItem, partnerIndex) in partnerInfo"
                                :key="partnerItem.id"
                                class="partner-item"
                                :class="`${partnerItem.size}`"
                            >
                                <a
                                    :href="partnerItem.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div class="img-box">
                                        <img
                                            :src="partnerItem.image"
                                            :alt="partnerItem.id"
                                            :class="`${partnerItem.size}`"
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </Vue3Marquee>
                </div>
            </div>
        </div>
        <div class="terms-wrapper">
            <div class="align-box">
                <!-- PC/LABTOP -->
                <div class="terms-pc-nav">
                    <ul class="left-area">
                        <li
                            v-for="(termItem, termIndex) in termsInfo"
                            :key="termItem.id"
                            class="term-item"
                        >
                            <NuxtLink :to="termItem.link">{{ termItem.id }}</NuxtLink>
                        </li>
                    </ul>
                    <div class="right-area">
                        <a href="/">채무자대리인 신청</a>
                    </div>
                </div>
                <!-- TABLET/MOBILE -->
                <div class="terms-mobile-nav">
                    <Swiper
                        :slides-per-view="'auto'"
                        :space-between="48"
                        :free-mode="true"
                        :modules="[FreeMode]"
                        class="terms-nav-swiper"
                    >
                        <SwiperSlide
                            v-for="(termItem, termIndex) in termsInfo"
                            :key="termItem.id"
                            class="terms-nav-slide"
                        >
                            <NuxtLink :to="termItem.link" class="terms-item">
                                {{ termItem.id }}
                            </NuxtLink>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/" class="type-btn">채무자대리인 신청</a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        <div class="company-info-wrapper">
            <div class="align-box"></div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Vue3Marquee } from 'vue3-marquee'
// ======================================== state
// 파트너 정보 State Value
const partnerInfo = ref([
    {
        id: '금융위원회',
        image: '/images/common/footer_img1.png',
        link: '/',
        size: 'lg',
    },
    {
        id: '금융감독원',
        image: '/images/common/footer_img2.png',
        link: '/',
        size: 'lg',
    },
    {
        id: '신용회복위원회',
        image: '/images/common/footer_img3.png',
        link: '/',
        size: 'md',
    },
    {
        id: '한국대부금융협회',
        image: '/images/common/footer_img4.png',
        link: '/',
        size: 'md',
    },
    {
        id: 'NICE지키미',
        image: '/images/common/footer_img5.png',
        link: '/',
        size: 'sm',
    },
])

// 약관 정보 State Value
const termsInfo = ref([
    {
        id: '회사소개',
        link: '/',
    },
    {
        id: '이용안내',
        link: '/',
    },
    {
        id: '이용약관',
        link: '/',
    },
    {
        id: '개인정보처리방침',
        link: '/',
    },
    {
        id: '책임의한계와법적고지',
        link: '/',
    },
    {
        id: '이메일무단수집거부',
        link: '/',
    },
    {
        id: '오류신고',
        link: '/',
    },
])
</script>
<style lang="scss">
footer.loan-nara-footer-container {
    div.partner-wrapper {
        background-color: $color-white;
        border-top: 1px solid #dfe3ea;
        border-bottom: 1px solid #dfe3ea;
        @include r(padding-top, 10, 10, 10, 24, 24);
        @include r(padding-bottom, 10, 10, 10, 24, 24);
        div.align-box {
            @include r(padding-left, 0, 0, 0, 40, 40);
            @include r(padding-right, 0, 0, 0, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.partner-pc-list {
                display: block;
                @include respond(tablet) {
                    display: none;
                }
                @include respond(mobile-plus) {
                    display: none;
                }
                @include respond(mobile) {
                    display: none;
                }
            }
            div.partner-mobile-list {
                display: block;
                @include respond(pc) {
                    display: none;
                }
                @include respond(laptop) {
                    display: none;
                }
                div.vue3-marquee {
                    @include r(gap, 40, 40, 87, 79, 79);
                    div.marquee {
                    }
                }
            }
            ul.partner-list {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                @include r(gap, 40, 40, 87, 79, 79);
                li.partner-item {
                    a {
                        display: block;
                        div.img-box {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            @include r(height, 36, 36, 40, 40, 40);
                            img {
                                display: block;
                                width: 100%;
                                object-fit: contain;
                                &.lg {
                                    @include r(height, 30, 30, 30, 40, 40);
                                }
                                &.md {
                                    @include r(height, 24, 24, 24, 32, 32);
                                }
                                &.sm {
                                    @include r(height, 18, 18, 18, 26, 26);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    div.terms-wrapper {
        width: 100%;
        background-color: #f8fafc;
        border-bottom: 1px solid #dfe3ea;
        @include r(padding-top, 24.5, 24.5, 24.5, 28, 28);
        @include r(padding-bottom, 24.5, 24.5, 24.5, 28, 28);
        div.align-box {
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.terms-pc-nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                @include r(gap, 48, 48, 48, 32, 32);
                @include respond(tablet) {
                    display: none;
                }
                @include respond(mobile-plus) {
                    display: none;
                }
                @include respond(mobile) {
                    display: none;
                }
                ul.left-area {
                    display: flex;
                    align-items: center;
                    @include r(gap, 48, 48, 48, 32, 32);
                    li.term-item {
                        a {
                            font-weight: 700;
                            color: $color-dark-gray;
                            text-decoration: none;
                            @include r(font-size, 13, 13, 13, 14, 14);
                        }
                    }
                }
                div.right-area {
                    a {
                        width: fit-content;
                        display: block;
                        font-weight: 700;
                        color: #5b6c8b;
                        text-decoration: none;
                        border-radius: 8px;
                        background-color: #dfe3ea;
                        @include r(padding-top, 8, 8, 8, 8, 8);
                        @include r(padding-bottom, 8, 8, 8, 8, 8);
                        @include r(padding-left, 12, 12, 12, 12, 12);
                        @include r(padding-right, 12, 12, 12, 12, 12);
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
            div.terms-mobile-nav {
                display: block;
                @include respond(pc) {
                    display: none;
                }
                @include respond(laptop) {
                    display: none;
                }
                div.terms-nav-swiper {
                    overflow: visible !important;
                    div.swiper-wrapper {
                        align-items: center;
                        div.swiper-slide {
                            width: auto !important;
                            &.terms-nav-slide {
                                a {
                                    font-weight: 700;
                                    color: $color-dark-gray;
                                    text-decoration: none;
                                    @include r(font-size, 13, 13, 13, 13, 13);
                                }
                            }
                            a.type-btn {
                                width: fit-content;
                                display: block;
                                font-weight: 700;
                                color: #5b6c8b;
                                text-decoration: none;
                                border-radius: 8px;
                                background-color: #dfe3ea;
                                @include r(padding-top, 8, 8, 8, 8, 8);
                                @include r(padding-bottom, 8, 8, 8, 8, 8);
                                @include r(padding-left, 12, 12, 12, 12, 12);
                                @include r(padding-right, 12, 12, 12, 12, 12);
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
