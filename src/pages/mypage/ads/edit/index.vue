<template>
    <div class="mypage-ads-edit-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <div class="header-top-box">
                        <MypageMenuNavigation />
                    </div>
                    <PageHeaderBox :is-small="true" />
                </div>
                <div class="page-content">
                    <div class="search-wrapper-box">
                        <div class="left-box">
                            <p class="title">클릭 수 검색</p>
                            <NormalSelectBox :options="[]" :size="'SMALL'" />
                            <NormalButton
                                :size="'LARGE'"
                                :isIcon="true"
                                :icon-direction="'LEFT'"
                                :icon-url="'/images/common/search_white.png'"
                                :title="'검색'"
                                :bg-color="'secondary-500'"
                                :border-color="'secondary-500'"
                                :font-color="'white'"
                            />
                        </div>
                        <div class="right-box">
                            <p>2025.11.24 ~ 2025.12.24</p>
                        </div>
                    </div>
                    <div v-for="(item, index) in editData" :key="index" class="edit-wrapper-box">
                        <p class="main-title">
                            {{ item.title }}(<strong>{{ item.list.length }}</strong
                            >)
                        </p>
                        <div class="content-wrapper">
                            <div v-if="item.warningTitle.length > 0" class="warning-wrapper-box">
                                <div
                                    v-for="(warningItem, warningIndex) in item.warningTitle"
                                    :key="warningIndex"
                                    class="warning-box"
                                >
                                    <div class="img-box">
                                        <img
                                            src="/images/common/warning_circle_blue.png"
                                            alt="주의사항"
                                        />
                                    </div>
                                    <p>{{ warningItem }}</p>
                                </div>
                            </div>
                            <NormalTable
                                :data="item.list"
                                :page-sizes="10"
                                :total="item.list.length"
                                :show-pagination="false"
                            >
                                <el-table-column label="형태">
                                    <template #default="{ row }">
                                        <p class="color-black align-center">{{ row.type }}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    :label="item.type === 'line-ads' ? '제목' : '배너문구 타이틀'"
                                    width="400"
                                >
                                    <template #default="{ row }">
                                        <NuxtLink
                                            :to="`/mypage/ads/edit/${item.type}/1`"
                                            class="color-black"
                                        >
                                            {{ row.title }}
                                        </NuxtLink>
                                    </template>
                                </el-table-column>
                                <el-table-column label="클릭 수">
                                    <template #default="{ row }">
                                        <p class="color-black align-center">
                                            {{ row.clickCount }}회
                                        </p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="지역">
                                    <template #default="{ row }"> </template>
                                </el-table-column>
                                <el-table-column label="상태">
                                    <template #default="{ row }"> </template>
                                </el-table-column>
                                <template #mobile="{ items }">
                                    <ul class="mobile-table-list-wrapper">
                                        안녕하세요
                                    </ul>
                                </template>
                                <template #empty> 등록된 광고내역이 없습니다. </template>
                            </NormalTable>
                            <div v-if="item.type === 'line-ads'" class="jump-count-wrapper-box">
                                <div class="count-box">
                                    <p class="title">유료 점프 남은 횟수</p>
                                    <p class="content">{{ jumpCountData.paidCount }}회</p>
                                </div>
                                <div class="count-box">
                                    <p class="title">점프 남은 횟수</p>
                                    <p class="content">{{ jumpCountData.freeCount }}회</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
// =================================================== State
const jumpCountData = reactive({
    freeCount: 5,
    paidCount: 0,
})
const editData = reactive([
    {
        id: 1,
        type: 'line-ads',
        title: '줄광고',
        warningTitle: [
            '점프 클릭 시 최신글로 등록됩니다.',
            '줄광고 위치는 해당 지역, 상품배너 광고중인 영역 하단에 노출됩니다.',
        ],
        list: [
            {
                id: 1,
                type: '줄광고',
                title: '(필독) 대부업 이용 시 반드시 기억해야 할 10가지 유의사항을 안내드립니다',
                clickCount: 188,
                area: '서울',
            },
        ],
    },
    {
        id: 2,
        type: 'premium-ads',
        title: '프리미엄광고',
        warningTitle: [],
        list: [
            {
                id: 1,
                type: '줄광고',
                title: '(필독) 대부업 이용 시 반드시 기억해야 할 10가지 유의사항을 안내드립니다',
                clickCount: 188,
                area: '서울',
            },
        ],
    },
    {
        id: 3,
        type: 'main-banner-ads',
        title: '메인배너광고',
        warningTitle: ['배너문구를  각각 다른 문구로 등록 가능합니다.'],
        list: [
            {
                id: 1,
                type: '배너형',
                title: '(필독) 대부업 이용 시 반드시 기억해야 할 10가지 유의사항을 안내드립니다',
                clickCount: 188,
                area: '서울',
            },
        ],
    },
    {
        id: 4,
        type: 'area-banner-ads',
        title: '지역배너광고',
        warningTitle: ['배너문구를  각각 다른 문구로 등록 가능합니다.'],
        list: [
            {
                id: 1,
                type: '배너형',
                title: '(필독) 대부업 이용 시 반드시 기억해야 할 10가지 유의사항을 안내드립니다',
                clickCount: 188,
                area: '서울',
            },
            {
                id: 2,
                type: '배너형',
                title: '(필독) 대부업 이용 시 반드시 기억해야 할 10가지 유의사항을 안내드립니다',
                clickCount: 188,
                area: '서울',
            },
        ],
    },
    {
        id: 5,
        type: 'product-banner-ads',
        title: '상품배너광고',
        warningTitle: ['배너문구를  각각 다른 문구로 등록 가능합니다.'],
        list: [
            {
                id: 1,
                type: '배너형',
                title: '(필독) 대부업 이용 시 반드시 기억해야 할 10가지 유의사항을 안내드립니다',
                clickCount: 188,
                area: '서울',
            },
        ],
    },
])

// ========================================= Function
</script>

<style lang="scss">
div.mypage-ads-edit-section {
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
                @include r(margin-bottom, 30, 40, 40, 40, 40);
                div.header-top-box {
                    display: block;
                    @include respond(pc) {
                        display: none;
                    }
                    @include r(margin-bottom, 31, 31, 31, 31, 31);
                }
            }
            div.page-content {
                display: flex;
                flex-direction: column;
                @include r(gap, 20, 20, 20, 20, 20);
                div.search-wrapper-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 16px;
                    background-color: $color-gray-100;
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    @include respond(mobile-plus) {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.625rem;
                    }
                    @include respond(mobile) {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.875rem;
                    }
                    div.left-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 10, 10, 10);
                        @include respond(mobile-plus) {
                            width: 100%;
                        }
                        @include respond(mobile) {
                            width: 100%;
                        }
                        p.title {
                            flex-shrink: 0;
                            font-weight: $font-weight-medium;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        div.normal-select-box {
                            @include respond(pc) {
                                width: 10rem;
                            }
                            @include respond(laptop) {
                                width: 10rem;
                            }
                            @include respond(tablet) {
                                width: 10rem;
                            }
                            @include respond(mobile-plus) {
                                width: 100%;
                            }
                            @include respond(mobile) {
                                width: 100%;
                            }
                        }
                        button.normal-button {
                            flex-shrink: 0;
                        }
                    }
                    div.right-box {
                        p {
                            font-weight: $font-weight-regular;
                            color: $color-gray-500;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                }
                div.edit-wrapper-box {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid $color-gray-200;
                    border-radius: 16px;
                    @include r(gap, 24, 24, 24, 24, 24);
                    @include r(padding-top, 32, 32, 32, 32, 32);
                    @include r(padding-bottom, 32, 32, 32, 32, 32);
                    @include r(padding-left, 32, 32, 32, 32, 32);
                    @include r(padding-right, 32, 32, 32, 32, 32);
                    p.main-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 22, 22, 22, 22, 22);
                        strong {
                            color: $color-primary-500;
                        }
                    }
                    div.content-wrapper {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 16, 16, 16, 16, 16);
                        div.warning-wrapper-box {
                            display: flex;
                            flex-direction: column;
                            @include r(gap, 4, 4, 4, 4, 4);
                            div.warning-box {
                                display: flex;
                                @include r(gap, 6, 6, 6, 6, 6);
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
                        div.jump-count-wrapper-box {
                            display: flex;
                            justify-content: flex-end;
                            @include r(gap, 10, 10, 10, 10, 10);
                            @include respond(mobile) {
                                flex-direction: column;
                            }
                            div.count-box {
                                width: 11.25rem;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                border-radius: 8px;
                                background-color: $color-gray-100;
                                @include r(padding-top, 16, 16, 16, 16, 16);
                                @include r(padding-bottom, 16, 16, 16, 16, 16);
                                @include r(padding-left, 16, 16, 16, 16, 16);
                                @include r(padding-right, 16, 16, 16, 16, 16);
                                @include respond(mobile) {
                                    width: 100%;
                                }
                                p.title {
                                    font-weight: $font-weight-medium;
                                    color: $color-gray-900;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                    @include r(line-height, 20, 20, 20, 20, 20);
                                }
                                p.content {
                                    font-weight: $font-weight-bold;
                                    color: $color-primary-500;
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
</style>
