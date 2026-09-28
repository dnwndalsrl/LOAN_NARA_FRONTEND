<template>
    <div class="support-ad-inquiry-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <!-- 탭 -->
                    <ul class="tab-wrapper">
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
                    <div class="contents-wrapper">
                        <div class="img-box">
                            <img src="/images/common/test_image.png" />
                        </div>
                        <ContentTypeOne v-if="activeTab === 1" />
                        <ContentTypeTwo v-else-if="activeTab === 2" />
                        <ContentTypeThree v-else-if="activeTab === 3" />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const tabInfo = [
    {
        value: 1,
        title: '광고등록절차',
    },
    {
        value: 2,
        title: '광고위치 및 비용안내',
    },
    {
        value: 3,
        title: '대출나라가 정답인 이유',
    },
]

// =================================================== State
// 현재 활성화된 탭
const activeTab = ref(1)

// =================================================== Computed
// =================================================== Function

// 탭을 변경하고 첫 번째 FAQ를 활성화합니다.
const onClickTab = (tabValue: number) => {
    activeTab.value = tabValue

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<style lang="scss">
div.support-ad-inquiry-section {
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
                div.contents-wrapper {
                    div.img-box {
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
}
</style>
