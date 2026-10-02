<template>
    <div class="history-section-contents">
        <div class="parent-swiper-wrapper">
            <div class="align-box">
                <Swiper
                    :slides-per-view="'auto'"
                    :space-between="10"
                    :free-mode="true"
                    :modules="[FreeMode]"
                    class="parent-swiper"
                    @swiper="onInitHistoryParentSwiper"
                >
                    <SwiperSlide
                        v-for="(item, index) in reversedHistoryItems"
                        :key="item.title"
                        class="parent-slide"
                    >
                        <button
                            type="button"
                            :class="{
                                'is-active': activeHistoryIndex === index,
                            }"
                            @click="onClickHistoryYear(index)"
                        >
                            {{ item.title }}
                        </button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="child-swiper-wrapper">
            <div class="align-box">
                <Swiper
                    :modules="[Navigation]"
                    :slides-per-view="1"
                    :space-between="20"
                    :breakpoints="{
                        993: {
                            slidesPerView: 2,
                        },
                    }"
                    class="child-swiper"
                    @swiper="onInitHistorySwiper"
                    @slider-first-move="onHistorySliderFirstMove"
                    @slide-change="onChangeHistorySlide"
                    @transition-end="onHistoryTransitionEnd"
                    @breakpoint="onChangeHistoryBreakpoint"
                >
                    <SwiperSlide
                        v-for="(item, index) in reversedHistoryItems"
                        :key="item.title"
                        class="child-slide"
                    >
                        <div
                            class="child-slide-item"
                            :class="{
                                'is-active': activeHistoryIndex === index,
                            }"
                        >
                            <p class="year-title">
                                {{ item.title }}
                            </p>

                            <ul class="content-list-box">
                                <li
                                    v-for="(listItem, listIndex) in item.items"
                                    :key="listIndex"
                                    class="content-list-item"
                                >
                                    <div class="circle"></div>

                                    <p class="contents-title">
                                        {{ listItem }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// 회사 연혁 SlideItem
const historyCompanyItems = [
    {
        title: '2014',
        items: [
            '정크레비즈 회사 창립',
            '온라인상 홍보활동 시작',
            '프로그램개발 사업부 신설',
            '홈페이지 웹디자인 개발',
            '대한민국 최초 대출중개플랫폼 시작',
            '대출나라 공식 오픈',
        ],
    },
    {
        title: '2015',
        items: [
            '부천시 중동 회사 이전',
            '자사 상표권 출원 (특허청)',
            '자사 상표권 등록 (특허청)',
            '모바일 전용 사이트 오픈',
            '웹디자인 사업부 신설',
            '온라인 홍보 사업부 신설',
            '2년 연속 대출중개플랫폼 분야 1위',
        ],
    },
    {
        title: '2016',
        items: [
            '자사 홈페이지 디자인 출원 (특허청)',
            '유료 광고주 100 돌파',
            '대출나라 가입 업체 수 400 돌파',
            '마케팅 관리 사업부 신설',
            '3년 연속 대출중개플랫폼 분야 1위',
        ],
    },
    {
        title: '2017',
        items: [
            '자사 홈페이지 디자인 등록 (특허청)',
            '유료 광고주 200 돌파',
            '실시간 대출문의 등록 글 50,000건 돌파',
            '대출나라 홈페이지 pc,모바일 리뉴얼',
            '4년 연속 대출중개플랫폼 분야 1위',
        ],
    },
    {
        title: '2018',
        items: [
            '(주)정크레비즈 법인회사 전환',
            '유료 광고주 300 돌파',
            '방문자수 3,000,000 돌파 (일일 중복아이피ip 제외)',
            '대출나라 홈페이지 pc,모바일 리뉴얼',
            '실시간 대출문의 등록 글 100,000건 돌파',
            '5년 연속 대출중개플랫폼 분야 1위',
        ],
    },
    {
        title: '2019',
        items: [
            '유료 광고주 500 돌파',
            '6년 연속 대출중개플랫폼 분야 1위',
            '광고 관리팀 확장',
            '대출나라 저작권 등록',
            '누적 방문자수 5,000,000 돌파 (일일 중복아이피ip 제외)',
            '실시간 대출문의 등록 글 250,000건 돌파',
        ],
    },
    {
        title: '2020',
        items: [
            '유료 광고주 600 돌파',
            '사무실 확장 이전',
            '7년 연속 대출중개플랫폼 분야 1위',
            '대출나라 브랜드 파워 1위',
            'CS관리팀 확장',
            '디자인팀 확장',
        ],
    },
    {
        title: '2021',
        items: [
            '8년 연속 대출중개플랫폼 분야 1위',
            '누적 방문자수 11,000,000 돌파 (일일 중복아이피ip 제외)',
            '실시간 대출문의 등록 글 500,000건 돌파',
            '유료 광고주 650 돌파',
            '마케팅 관리팀 확장',
            '사기번호검색 시스템 구축',
        ],
    },
    {
        title: '2022',
        items: [
            '유료 광고주 700 돌파 (2022.05 기준)',
            '실시간 대출문의 등록 글 580,000건 돌파 (2022.05 기준)',
        ],
    },
    {
        title: '2023',
        items: [
            '대부중개 플랫폼 협의회 신설(2023.02)',
            '사기번호검색 150,000건 돌파',
            '실시간 대출문의 등록 글 750,000건 돌파',
        ],
    },
    {
        title: '2024',
        items: [
            '사기번호검색 250,000건 돌파',
            '실시간 대출문의 등록 글 850,000건 돌파',
            '10년 연속 대출중개플랫폼 분야 1위',
        ],
    },
]

// =================================================== State
// 현재 선택된 연혁 Index
const activeHistoryIndex = ref(0)

// 연도 Navigation Swiper
const historyParentSwiper = ref()

// 연혁 Contents Swiper
const historySwiper = ref()

// 사용자가 직접 연혁 Swiper를 조작 중인지 여부
const isUserSwipingHistory = ref(false)

// =================================================== Computed
// 최신 연도부터 노출하기 위해 연혁 데이터를 역순으로 반환합니다.
const reversedHistoryItems = computed(() => {
    return [...historyCompanyItems].reverse()
})

// =================================================== Function
// 연도 Navigation Swiper 인스턴스를 저장합니다.
const onInitHistoryParentSwiper = (swiper: any) => {
    historyParentSwiper.value = swiper
}

// 연혁 Contents Swiper 인스턴스를 저장합니다.
const onInitHistorySwiper = (swiper: any) => {
    historySwiper.value = swiper
}

// 상단 연도 Navigation을 선택된 연도 위치로 이동합니다.
const moveHistoryParentSwiper = (historyIndex: number) => {
    historyParentSwiper.value?.slideTo(historyIndex, 300, false)
}

// 선택한 연도로 이동합니다.
const onClickHistoryYear = (historyIndex: number) => {
    activeHistoryIndex.value = historyIndex

    historySwiper.value?.slideTo(historyIndex, 300, false)

    moveHistoryParentSwiper(historyIndex)
}

// 사용자가 직접 하단 Swiper를 움직이기 시작했음을 저장합니다.
const onHistorySliderFirstMove = () => {
    isUserSwipingHistory.value = true
}

// 사용자가 직접 슬라이드를 변경한 경우 활성 연도를 변경합니다.
const onChangeHistorySlide = (swiper: any) => {
    if (!isUserSwipingHistory.value) {
        return
    }

    activeHistoryIndex.value = swiper.activeIndex

    moveHistoryParentSwiper(activeHistoryIndex.value)
}

// 사용자 슬라이드 이동이 끝나면 조작 상태를 초기화합니다.
const onHistoryTransitionEnd = () => {
    isUserSwipingHistory.value = false
}

// breakpoint 변경 시 선택한 연도를 유지합니다.
const onChangeHistoryBreakpoint = (swiper: any) => {
    const selectedIndex = activeHistoryIndex.value

    nextTick(() => {
        swiper.update()

        swiper.slideTo(selectedIndex, 0, false)

        moveHistoryParentSwiper(selectedIndex)
    })
}
</script>

<style lang="scss">
div.history-section-contents {
    div.parent-swiper-wrapper {
        @include r(margin-bottom, 20, 32, 32, 32, 32);
        div.align-box {
            div.parent-swiper {
                overflow: hidden;
                div.swiper-wrapper {
                    overflow: visible;
                    div.parent-slide {
                        width: auto !important;
                        button {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            background-color: $color-gray-100;
                            border: none;
                            border-radius: 8px;
                            color: $color-gray-400;
                            font-weight: $font-weight-bold;
                            @include r(width, 68, 95, 95, 85, 85);
                            @include r(height, 41, 49, 49, 49, 49);
                            @include r(font-size, 14, 18, 18, 18, 18);
                            &.is-active {
                                background-color: $color-gray-200;
                                color: $color-primary-500;
                            }
                        }
                    }
                }
            }
        }
    }
    div.child-swiper-wrapper {
        div.align-box {
            div.child-swiper {
                div.swiper-wrapper {
                    div.child-slide {
                        div.child-slide-item {
                            display: flex;
                            border-radius: 16px;
                            border: 1px solid $color-gray-200;
                            @include r(padding-top, 40, 40, 40, 40, 40);
                            @include r(padding-bottom, 40, 40, 40, 40, 40);
                            @include r(padding-left, 40, 40, 40, 40, 40);
                            @include r(padding-right, 40, 40, 40, 40, 40);
                            @include r(gap, 40, 40, 40, 40, 40);
                            @include respond(mobile) {
                                flex-direction: column;
                            }
                            &.is-active {
                                p.year-title {
                                    color: $color-gray-900;
                                }
                                ul.content-list-box {
                                    li.content-list-item {
                                        div.circle {
                                            background-color: $color-gray-900;
                                        }
                                        p.contents-title {
                                            color: $color-gray-900;
                                        }
                                    }
                                }
                            }
                            p.year-title {
                                font-weight: $font-weight-bold;
                                color: $color-gray-400;
                                @include r(font-size, 32, 32, 32, 32, 32);
                            }
                            ul.content-list-box {
                                display: flex;
                                flex-direction: column;
                                @include r(height, 200, 200, 200, 200, 200);
                                @include r(gap, 10, 10, 10, 10, 10);
                                li.content-list-item {
                                    display: flex;
                                    align-items: center;
                                    @include r(gap, 8, 8, 8, 8, 8);
                                    div.circle {
                                        background-color: $color-gray-400;
                                        border-radius: 50%;
                                        @include r(width, 4, 4, 4, 4, 4);
                                        @include r(height, 4, 4, 4, 4, 4);
                                    }
                                    p.contents-title {
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-400;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                        @include r(line-height, 20, 20, 20, 20, 20);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
