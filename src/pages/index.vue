<template>
    <div class="main-section">
        <div class="align-box">
            <h1 style="display: none">대출나라대부중개</h1>
            <!-- 메인배너 -->
            <section class="main-banner-wrapper">
                <div class="title-area">
                    <p class="sub-title">전국 700개 이상 대출업체 등록</p>
                    <p class="main-title">나에게 맞는 대출업체 찾기!</p>
                </div>
                <div class="statistics-area">
                    <div class="title-align-box">
                        <div class="img-box">
                            <img src="/images/common/down_arrow_white.png" alt="현재 기준 통계" />
                        </div>
                        <p>현재 기준 통계</p>
                    </div>
                    <ul>
                        <li
                            v-for="(statisticItem, statisticIndex) in mainBannerStatusInfo"
                            :key="statisticItem.title"
                        >
                            <p class="title">{{ statisticItem.title }}</p>
                            <p class="contents">{{ statisticItem.contents }}</p>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- 프리미엄 배너 -->
            <section class="premium-banner-wrapper">
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
                                <img src="/images/common/slide_left_arrow.png" alt="이전으로" />
                            </div>
                            <div class="img-box is-pause" @click="toggleAutoplay()">
                                <img src="/images/common/slide_pause.png" alt="정지" />
                            </div>
                            <div class="img-box is-next swiper-btn-next">
                                <img src="/images/common/slide_right_arrow.png" alt="다음으로" />
                            </div>
                        </div>
                    </div>
                </Swiper>
            </section>
            <!-- 카테고리 별 업체찾기 (지역별, 상품별) -->
            <section class="category-list-wrapper">
                <div
                    v-for="(categoryItem, categoryIndex) in categoryInfo"
                    :key="categoryItem.id"
                    class="category-box"
                >
                    <div class="title-box">
                        <div class="category-title-box">
                            <div class="img-box">
                                <img
                                    :src="
                                        categoryItem.type === 'AREA'
                                            ? '/images/common/map_ico.png'
                                            : '/images/common/giftcard_icon.png'
                                    "
                                    :alt="
                                        categoryItem.type === 'AREA'
                                            ? '지역으로 업체찾기'
                                            : '상품으로 업체찾기'
                                    "
                                />
                            </div>
                            <h2>
                                <strong
                                    >{{ categoryItem.type === 'AREA' ? '지역' : '상품' }} </strong
                                >으로 업체찾기
                            </h2>
                        </div>
                        <div class="direct-title-box">
                            <NuxtLink :to="'/'">바로가기</NuxtLink>
                            <div class="img-box">
                                <img
                                    src="/images/common/right_arrow_gray_sharp.png"
                                    alt="바로가기"
                                />
                            </div>
                        </div>
                    </div>
                    <ul class="category-list">
                        <li
                            v-for="(listItem, listIndex) in categoryItem.items"
                            :key="listItem.id"
                            :class="
                                listItem.title === '더보기'
                                    ? 'category-item is-no-bg'
                                    : 'category-item'
                            "
                        >
                            <NuxtLink :to="listItem.linkUrl">{{ listItem.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- 목록 리스트 -->
            <section class="company-list-wrapper">목록 섹션</section>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { v4 as uuid } from 'uuid'
import { createMeta } from '~/utils/seo/createMeta'
import { pageMeta } from '~/utils/seo/pageMeta'

useHead(createMeta(pageMeta.main))

// ======================================== state
// 메인배너 통계 state value
const mainBannerStatusInfo = ref([
    {
        id: uuid(),
        title: '대출상담 총액',
        contents: '15,662 억원',
    },
    {
        id: uuid(),
        title: '누적방문자',
        contents: '39,176,883',
    },
    {
        id: uuid(),
        title: '총 실시간 대출문의',
        contents: '1,118,612',
    },
])

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

// 카테고리 섹션 관련 state value
const categoryInfo = ref([
    {
        id: uuid(),
        type: 'AREA',
        linkUrl: '/',
        items: [
            {
                id: uuid(),
                title: '전체',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '서울',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '경기',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '인천',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '대전',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '대구',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '부산',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '광주',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '울산',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '세종',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '강원',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '충북',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '충남',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '전북',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '전남',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '경북',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '경남',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '제주',
                linkUrl: '/',
            },
        ],
    },
    {
        id: uuid(),
        type: 'PRODUCT',
        linkUrl: '/',
        items: [
            {
                id: uuid(),
                title: '전체',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '직장인',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '무직자',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '여성',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '비상금',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '모바일',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '소액',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '무방문',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '자영업',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '당일',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '사업자',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '전문직',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '저신용',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '신용',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '추가',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '자동차',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '부동산',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '더보기',
                linkUrl: '/',
            },
        ],
    },
])

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
div.main-section {
    div.align-box {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: nowrap;
        @include respond(pc) {
            flex-direction: row;
            flex-wrap: wrap;
        }
        section.main-banner-wrapper {
            flex: 1 1 0;
            background-image: url('/images/common/main_banner.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 16px;
            order: 1;
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            @include respond(pc) {
                margin-right: 1.25rem;
            }
            div.title-area {
                p.sub-title {
                    font-weight: 700;
                    color: #d9e5f1;
                    @include r(margin-bottom, 8, 8, 8, 10, 4);
                    @include r(font-size, 16, 16, 16, 16, 16);
                }
                p.main-title {
                    font-weight: 800;
                    color: $color-white;
                    @include r(font-size, 24, 28, 28, 28, 28);
                }
            }
            div.statistics-area {
                @include r(margin-top, 22, 22, 22, 20, 26);
                div.title-align-box {
                    display: flex;
                    align-items: center;
                    @include r(margin-bottom, 12, 12, 12, 12, 12);
                    div.img-box {
                        @include r(width, 7, 7, 7, 7, 7);
                        @include r(margin-right, 8, 8, 8, 8, 8);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    p {
                        font-weight: 700;
                        color: $color-white;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    @include r(gap, 10, 10, 10, 10, 10);
                    li {
                        flex: 1 1 0;
                        border: 1px solid #415270;
                        border-radius: 8px;
                        background-color: #040e2599;
                        @include r(padding-top, 14, 14, 14, 14, 14);
                        @include r(padding-bottom, 14, 14, 14, 14, 14);
                        @include r(padding-left, 16, 16, 16, 16, 16);
                        @include r(padding-right, 16, 16, 16, 16, 16);
                        p.title {
                            font-weight: 600;
                            color: $color-white;
                            @include r(margin-bottom, 8, 8, 8, 8, 8);
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        p.contents {
                            font-weight: 700;
                            color: #bdd6ff;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        @include respond(mobile-plus) {
                            &:nth-child(1) {
                                display: none;
                            }
                        }
                        @include respond(mobile) {
                            &:nth-child(1) {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        section.premium-banner-wrapper {
            width: 100%;
            order: 3;
            @include respond(pc) {
                width: 28.438rem;
                order: 2;
            }
            div.swiper {
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
        }
        section.category-list-wrapper {
            width: 100%;
            order: 4;
            display: flex;
            align-items: center;
            flex-direction: column;
            @include r(gap, 15, 20, 20, 20, 20);
            @include r(margin-top, 30, 30, 30, 30, 24);
            @include respond(pc) {
                order: 3;
                flex-direction: row;
            }
            div.category-box {
                width: 100%;
                border: 2px solid $color-primary;
                border-radius: 16px;
                @include r(padding-top, 24, 24, 24, 24, 24);
                @include r(padding-bottom, 24, 24, 24, 24, 24);
                @include r(padding-left, 24, 24, 24, 24, 24);
                @include r(padding-right, 24, 24, 24, 24, 24);
                div.title-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    div.category-title-box {
                        display: flex;
                        align-items: center;
                        div.img-box {
                            @include r(width, 20, 24, 24, 24, 24);
                            @include r(margin-right, 8, 8, 8, 8, 8);
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                        h2 {
                            font-weight: 700;
                            color: $color-black;
                            @include r(font-size, 16, 18, 18, 18, 18);
                            strong {
                                color: $color-primary;
                            }
                        }
                    }
                    div.direct-title-box {
                        display: flex;
                        align-items: center;
                        a {
                            font-weight: 500;
                            color: #868c98;
                            text-decoration: none;
                            @include r(font-size, 13, 14, 14, 14, 14);
                        }
                        div.img-box {
                            @include r(width, 4, 4, 4, 4, 4);
                            @include r(margin-left, 8, 10, 10, 10, 10);
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                }
                ul.category-list {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    @include r(margin-top, 20, 20, 20, 20, 20);
                    @include r(gap, 4, 8, 8, 8, 8);
                    li.category-item {
                        flex: 0 0 calc((100% - 8px * 8) / 9);
                        border-radius: 8px;
                        background-color: $color-light-gray;
                        @include respond(mobile) {
                            flex: 0 0 calc((100% - 4px * 5) / 6);
                        }
                        &.is-no-bg {
                            background-color: $color-white !important;
                            border: 1px solid #d7dce5 !important;
                            a {
                                font-weight: 600 !important;
                                color: #6a6a6a !important;
                            }
                        }
                        &:hover {
                            background-color: #dbe9ff;
                            a {
                                font-weight: 700;
                                color: $color-primary;
                            }
                        }
                        a {
                            display: block;
                            width: 100%;
                            height: 100%;
                            font-weight: 600;
                            color: $color-black;
                            text-decoration: none;
                            text-align: center;
                            @include r(font-size, 13, 14, 14, 14, 14);
                            @include r(padding-top, 8, 8, 8, 8, 8);
                            @include r(padding-bottom, 8, 8, 8, 8, 8);
                        }
                    }
                }
            }
        }
        section.company-list-wrapper {
            width: 100%;
            order: 2;
            @include respond(pc) {
                order: 4;
            }
        }
    }
}
</style>
