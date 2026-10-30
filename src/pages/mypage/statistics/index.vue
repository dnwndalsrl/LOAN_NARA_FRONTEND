<template>
    <div class="mypage-statistics-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <!-- 탭 -->
                    <ul ref="tabWrapperRef" class="tab-wrapper">
                        <li
                            v-for="tabItem in tabInfo"
                            :key="tabItem.value"
                            class="tab-item"
                            :class="{
                                'is-active': activeTab === tabItem.value,
                            }"
                        >
                            <button type="button" @click="onClickTab(tabItem.value)">
                                <span class="pc-title">
                                    {{ tabItem.title }}
                                </span>
                            </button>
                        </li>
                    </ul>
                    <!-- 대출나라 통계 -->
                    <section
                        ref="statisticsSectionRef"
                        class="content-section content-section-1"
                        data-tab-value="1"
                    >
                        <div class="title-box">
                            <p class="main-title">대출나라의 빅데이터를 기반으로 한</p>
                            <p class="content-title"><strong>방문자 수 </strong>통계 수치입니다.</p>
                        </div>
                        <div class="chart-wrapper-box">
                            <ul class="card-list-box">
                                <li
                                    v-for="(item, index) in statisticsData"
                                    :key="item.title"
                                    class="list-item"
                                >
                                    <p class="title">{{ item.title }}</p>
                                    <p class="content">
                                        <strong>{{ item.value }}</strong
                                        >명
                                    </p>
                                </li>
                            </ul>
                            <p class="warning-title is-top">* 일일 중복 ip 제외한 수치입니다.</p>
                        </div>
                    </section>
                    <!-- 지역 -->
                    <section
                        ref="areaSectionRef"
                        class="content-section content-section-2"
                        data-tab-value="2"
                    >
                        <div class="title-box">
                            <p class="main-title">
                                대출나라의 빅데이터를 기반으로 한 통계 리포트에 따르면
                            </p>
                            <p class="content-title">
                                <strong>지역별 업체검색</strong>에서 <strong>경기</strong>지역이
                                가장 조회수가 많았어요!
                            </p>
                        </div>
                        <div class="chart-wrapper-box">
                            <p class="warning-title is-bottom">* 최근 7일 기준 데이터입니다.</p>
                            <ul class="bar-list-box">
                                <li
                                    v-for="(item, index) in areaData"
                                    :key="item.title"
                                    class="list-item"
                                >
                                    <div :class="'bar-item ' + `type-${index + 1}`">
                                        <p>{{ item.value }}</p>
                                        <div class="bar"></div>
                                    </div>
                                    <p class="label-title">{{ item.title }}</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <!-- 상품 -->
                    <section
                        ref="productSectionRef"
                        class="content-section content-section-3"
                        data-tab-value="3"
                    >
                        <div class="title-box">
                            <p class="main-title">
                                대출나라의 빅데이터를 기반으로 한 통계 리포트에 따르면
                            </p>
                            <p class="content-title">
                                <strong>상품별 업체검색</strong>에서 <strong>무직자</strong>상품이
                                가장 조회수가 많았어요!
                            </p>
                        </div>
                        <div class="chart-wrapper-box">
                            <p class="warning-title is-bottom">* 최근 7일 기준 데이터입니다.</p>
                            <ul class="bar-list-box">
                                <li
                                    v-for="(item, index) in productData"
                                    :key="item.title"
                                    class="list-item"
                                >
                                    <div :class="'bar-item ' + `type-${index + 1}`">
                                        <p>{{ item.value }}</p>
                                        <div class="bar"></div>
                                    </div>
                                    <p class="label-title">{{ item.title }}</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <div class="warning-box">
                        <div class="img-box">
                            <img src="/images/common/warning_circle_blue.png" alt="주의사항" />
                        </div>
                        <p>
                            데이터는 실시간으로 업데이트 되며, 해당 항목은 당일 기준으로 최근
                            7일간의 통계만 제공합니다.<br />통계 리포트를 참고하여 광고 효과를
                            높여보세요!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
let sectionObserver: IntersectionObserver | null = null

// 대출나라 통계 데이터
const statisticsData = [
    {
        title: '오늘',
        value: '2,708',
    },
    {
        title: '어제',
        value: '11,520',
    },
    {
        title: '누적',
        value: '39,481,802',
    },
]

// 지역 데이터
const areaData = [
    {
        title: '경기',
        value: '7,202',
    },
    {
        title: '서울',
        value: '5,181',
    },
    {
        title: '부산',
        value: '4,022',
    },
    {
        title: '대구',
        value: '3,739',
    },
    {
        title: '인천',
        value: '3,613',
    },
]

const productData = [
    {
        title: '무직자',
        value: '7,202',
    },
    {
        title: '직장인',
        value: '5,181',
    },
    {
        title: '당일',
        value: '4,022',
    },
    {
        title: '소액',
        value: '3,739',
    },
    {
        title: '비상금',
        value: '3,613',
    },
]

// =================================================== State
// 탭 및 콘텐츠 섹션 정보
const tabInfo = [
    {
        value: 1,
        title: '대출나라 통계',
    },
    {
        value: 2,
        title: '지역',
    },
    {
        value: 3,
        title: '상품',
    },
]

// 현재 활성화된 탭
const activeTab = ref(1)

const tabWrapperRef = ref<HTMLElement | null>(null)

// 각 콘텐츠 영역 Ref
const statisticsSectionRef = ref<HTMLElement | null>(null)
const areaSectionRef = ref<HTMLElement | null>(null)
const productSectionRef = ref<HTMLElement | null>(null)

let scrollRafId: number | null = null

// =================================================== Function
// Sticky 탭의 실제 활성화 기준 위치를 반환합니다.
const getTabActiveLine = () => {
    if (!tabWrapperRef.value) {
        return 0
    }

    const rootStyle = getComputedStyle(document.documentElement)
    const tabStyle = getComputedStyle(tabWrapperRef.value)

    const headerNavHeight =
        Number.parseFloat(rootStyle.getPropertyValue('--header-nav-height')) || 57

    const tabStickyOffset = Number.parseFloat(tabStyle.getPropertyValue('--tab-sticky-offset')) || 0

    const tabHeight = tabWrapperRef.value.getBoundingClientRect().height

    return headerNavHeight + tabStickyOffset + tabHeight
}

// 현재 스크롤 위치에 맞는 탭을 활성화합니다.
const updateActiveTab = () => {
    const sectionList = [
        {
            value: 1,
            element: statisticsSectionRef.value,
        },
        {
            value: 2,
            element: areaSectionRef.value,
        },
        {
            value: 3,
            element: productSectionRef.value,
        },
    ]

    const activeLine = getTabActiveLine()

    let currentTab = 1

    sectionList.forEach((sectionItem) => {
        if (!sectionItem.element) {
            return
        }

        const sectionTop = sectionItem.element.getBoundingClientRect().top

        if (sectionTop <= activeLine + 1) {
            currentTab = sectionItem.value
        }
    })

    activeTab.value = currentTab
}

// 선택한 탭에 해당하는 콘텐츠 영역으로 이동합니다.
const onClickTab = (tabValue: number) => {
    const sectionMap = {
        1: statisticsSectionRef.value,
        2: areaSectionRef.value,
        3: productSectionRef.value,
    }

    const targetSection = sectionMap[tabValue as keyof typeof sectionMap]

    if (!targetSection) {
        return
    }

    const activeLine = getTabActiveLine()

    const targetTop = window.scrollY + targetSection.getBoundingClientRect().top

    activeTab.value = tabValue

    window.scrollTo({
        top: targetTop - activeLine,
        behavior: 'smooth',
    })
}

// 스크롤 이벤트
const onScroll = () => {
    if (scrollRafId !== null) {
        return
    }

    scrollRafId = requestAnimationFrame(() => {
        updateActiveTab()
        scrollRafId = null
    })
}

onMounted(() => {
    updateActiveTab()

    window.addEventListener('scroll', onScroll, {
        passive: true,
    })

    window.addEventListener('resize', updateActiveTab)
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', updateActiveTab)

    if (scrollRafId !== null) {
        cancelAnimationFrame(scrollRafId)
    }
})
</script>

<style lang="scss">
div.mypage-statistics-section {
    div.align-box {
        display: flex;
        align-items: flex-start;
        width: 100%;
        min-width: 0;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            flex: 1 1 0;
            min-width: 0;
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                position: relative;
                ul.tab-wrapper {
                    position: sticky;
                    z-index: 900;
                    width: 100%;
                    display: flex;
                    align-items: stretch;
                    background-color: $color-gray-100;
                    border-radius: 16px;
                    top: calc(var(--header-nav-height, 57px) + var(--tab-sticky-offset));
                    @include r(--tab-sticky-offset, 20, 20, 20, 20, 20);
                    @include r(height, 63, 65, 65, 65, 65);
                    @include r(padding-top, 8, 8, 8, 8, 8);
                    @include r(padding-bottom, 8, 8, 8, 8, 8);
                    @include r(padding-left, 8, 8, 8, 8, 8);
                    @include r(padding-right, 8, 8, 8, 8, 8);
                    @include r(margin-bottom, 40, 40, 40, 40, 40);
                    li.tab-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: 1 1 0;
                        cursor: pointer;
                        &.is-active {
                            button {
                                background-color: $color-gray-200;
                                border-radius: 8px;
                                span {
                                    color: $color-primary-500;
                                }
                            }
                        }
                        button {
                            display: block;
                            width: 100%;
                            height: 100%;
                            cursor: pointer;
                            border-radius: 6px;
                            font-weight: $font-weight-bold;
                            line-height: 1;
                            padding: 0;
                            border: none;
                            background-color: inherit;
                            span {
                                display: block;
                                line-height: 1.2;
                                color: $color-gray-400;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 14, 16, 18, 18, 18);
                            }
                        }
                    }
                }
                section.content-section {
                    display: flex;
                    flex-direction: column;
                    border-radius: 16px;
                    border: 1px solid $color-gray-200;
                    @include r(gap, 40, 40, 40, 40, 40);
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);
                    @include r(padding-left, 40, 40, 40, 40, 40);
                    @include r(padding-right, 40, 40, 40, 40, 40);
                    @include r(margin-bottom, 20, 20, 20, 20, 20);
                    div.title-box {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 10, 10, 10, 10, 10);
                        p.main-title {
                            font-weight: $font-weight-regular;
                            color: $color-gray-900;
                            @include r(font-size, 16, 16, 16, 16, 16);
                            @include r(line-height, 20, 20, 20, 20, 20);
                        }
                        p.content-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 24, 24, 24, 24, 24);
                            strong {
                                color: $color-primary-500;
                            }
                        }
                    }
                    div.chart-wrapper-box {
                        ul.card-list-box {
                            display: flex;
                            @include r(gap, 10, 10, 20, 20, 20);
                            @include respond(mobile-plus) {
                                flex-direction: column;
                            }
                            @include respond(mobile) {
                                flex-direction: column;
                            }
                            li.list-item {
                                display: flex;
                                align-items: center;
                                flex: 1 1 0;
                                background-color: $color-gray-100;
                                border-radius: 16px;
                                @include r(padding-top, 20, 32, 32, 32, 32);
                                @include r(padding-bottom, 20, 32, 32, 32, 32);
                                @include r(padding-left, 24, 32, 32, 32, 32);
                                @include r(padding-right, 24, 32, 32, 32, 32);
                                @include respond(pc) {
                                    flex-direction: column;
                                }
                                @include respond(laptop) {
                                    flex-direction: column;
                                }
                                @include respond(tablet) {
                                    flex-direction: column;
                                }
                                p.title {
                                    font-weight: $font-weight-medium;
                                    color: $color-gray-900;
                                    margin-bottom: 0.625rem;
                                    @include r(font-size, 16, 16, 16, 16, 16);
                                    @include respond(mobile-plus) {
                                        margin-bottom: 0;
                                        margin-right: 1.5rem;
                                    }
                                    @include respond(mobile) {
                                        margin-bottom: 0;
                                        margin-right: 1.5rem;
                                    }
                                }
                                p.content {
                                    display: flex;
                                    align-items: center;
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                    @include r(gap, 2, 2, 2, 2, 2);
                                    @include r(font-size, 16, 20, 20, 20, 20);
                                    strong {
                                        color: $color-primary-500;
                                        @include r(font-size, 24, 28, 28, 28, 28);
                                    }
                                }
                            }
                        }
                        ul.bar-list-box {
                            display: flex;
                            li.list-item {
                                flex: 1 1 0;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                @include r(gap, 16, 16, 16, 16, 16);
                                div.bar-item {
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: end;
                                    background-color: $color-gray-100;
                                    border-top: 1px solid $color-gray-200;
                                    border-bottom: 1px solid $color-gray-200;
                                    border-right: 1px solid $color-gray-200;
                                    @include r(padding-top, 40, 40, 40, 40, 40);
                                    @include r(gap, 10, 10, 10, 10, 10);
                                    p {
                                        font-weight: $font-weight-bold;
                                        @include r(font-size, 16, 16, 16, 16, 16);
                                    }
                                    div.bar {
                                        border-top-left-radius: 8px;
                                        border-top-right-radius: 8px;
                                        @include r(width, 41.6, 47.8, 60, 60, 60);
                                    }
                                    &.type-1 {
                                        border-top-left-radius: 16px;
                                        border-bottom-left-radius: 16px;
                                        border-left: 1px solid $color-gray-200;
                                        p {
                                            color: $color-primary-500;
                                        }
                                        div.bar {
                                            background-color: $color-primary-500;
                                            @include r(height, 200, 200, 200, 200, 200);
                                        }
                                    }
                                    &.type-2 {
                                        p {
                                            color: $color-gray-400;
                                        }
                                        div.bar {
                                            background-color: $color-gray-300;
                                            @include r(height, 143, 143, 143, 143, 143);
                                        }
                                    }
                                    &.type-3 {
                                        p {
                                            color: $color-gray-400;
                                        }
                                        div.bar {
                                            background-color: $color-gray-300;
                                            @include r(height, 118, 118, 118, 118, 118);
                                        }
                                    }
                                    &.type-4 {
                                        p {
                                            color: $color-gray-400;
                                        }
                                        div.bar {
                                            background-color: $color-gray-300;
                                            @include r(height, 83, 83, 83, 83, 83);
                                        }
                                    }
                                    &.type-5 {
                                        border-top-right-radius: 16px;
                                        border-bottom-right-radius: 16px;
                                        p {
                                            color: $color-gray-400;
                                        }
                                        div.bar {
                                            background-color: $color-gray-300;
                                            @include r(height, 69, 69, 69, 69, 69);
                                        }
                                    }
                                }
                                p.label-title {
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                    @include r(font-size, 16, 16, 16, 16, 16);
                                }
                            }
                        }
                        p.warning-title {
                            font-weight: $font-weight-medium;
                            color: $color-error-500;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            &.is-top {
                                @include r(margin-top, 20, 20, 20, 20, 20);
                            }
                            &.is-bottom {
                                @include r(margin-bottom, 16, 16, 16, 16, 16);
                            }
                        }
                    }
                }
            }
            div.warning-box {
                display: flex;
                @include r(gap, 6, 6, 6, 6, 6);
                @include r(margin-top, 24, 24, 24, 24, 24);
                div.img-box {
                    @include r(width, 14, 14, 14, 14, 14);
                    @include r(margin-top, 3, 3, 3, 3, 3);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p {
                    color: $color-gray-900;
                    font-weight: $font-weight-medium;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(line-height, 20, 20, 20, 20, 20);
                }
            }
        }
    }
}
</style>
