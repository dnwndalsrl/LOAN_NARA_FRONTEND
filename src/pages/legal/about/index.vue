<template>
    <div class="legal-about-section">
        <div class="align-box">
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
                    <div class="contents-section-wrapper">
                        <!-- 회사 개요 -->
                        <section ref="sectionOneRef" class="overview-section" data-tab-value="1">
                            <p class="section-title">회사 개요</p>
                            <OverviewSectionContents />
                        </section>
                        <!-- 회사 연혁 -->
                        <section ref="sectionTwoRef" class="history-section" data-tab-value="2">
                            <p class="section-title">회사 연혁</p>
                            <HistorySectionContents />
                        </section>
                        <!-- 회사 조직도 -->
                        <section
                            ref="sectionThreeRef"
                            class="organization-chart-section"
                            data-tab-value="3"
                        >
                            <p class="section-title">회사 조직도</p>
                            <OrganizationChartSectionContents />
                        </section>
                        <!-- 회사 비전 -->
                        <section ref="sectionFourRef" class="vision-section" data-tab-value="4">
                            <p class="section-title">회사 비전</p>
                            <VisionSectionContents />
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
let sectionObserver: IntersectionObserver | null = null
let scrollRafId: number | null = null

// 탭 및 콘텐츠 섹션 정보
const tabInfo = [
    {
        value: 1,
        title: '개요',
    },
    {
        value: 2,
        title: '연혁',
    },
    {
        value: 3,
        title: '조직도',
    },
    {
        value: 4,
        title: '비전',
    },
]

// =================================================== State
// 현재 활성화된 탭
const activeTab = ref(1)

const tabWrapperRef = ref<HTMLElement | null>(null)

// 각 콘텐츠 영역 Ref
const sectionOneRef = ref<HTMLElement | null>(null)
const sectionTwoRef = ref<HTMLElement | null>(null)
const sectionThreeRef = ref<HTMLElement | null>(null)
const sectionFourRef = ref<HTMLElement | null>(null)

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
            element: sectionOneRef.value,
        },
        {
            value: 2,
            element: sectionTwoRef.value,
        },
        {
            value: 3,
            element: sectionThreeRef.value,
        },
        {
            value: 4,
            element: sectionFourRef.value,
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
        1: sectionOneRef.value,
        2: sectionTwoRef.value,
        3: sectionThreeRef.value,
        4: sectionFourRef.value,
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
div.legal-about-section {
    div.align-box {
        width: 100%;
        section.page-contents-wrapper {
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
                div.contents-section-wrapper {
                    display: flex;
                    flex-direction: column;
                    @include r(gap, 30, 30, 30, 30, 30);
                    section.overview-section {
                        background-image: url('/images/legal/about/overview.png');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        border-radius: 16px;
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 60, 60, 60, 60, 60);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        @include r(margin-top, 40, 40, 40, 40, 40);
                        p.section-title {
                            font-weight: $font-weight-bold;
                            color: $color-white;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                            @include r(margin-bottom, 32, 32, 32, 32, 32);
                        }
                    }
                    section.history-section {
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 50, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        p.section-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                            @include r(margin-bottom, 32, 32, 32, 32, 32);
                        }
                    }
                    section.organization-chart-section {
                        border-radius: 16px;
                        background-color: $color-gray-100;
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 50, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        p.section-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                            @include r(margin-bottom, 32, 32, 32, 32, 32);
                        }
                    }
                    section.vision-section {
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 50, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        p.section-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                            @include r(margin-bottom, 32, 32, 32, 32, 32);
                        }
                    }
                }
            }
        }
    }
}
</style>
