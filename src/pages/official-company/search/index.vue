<template>
    <div class="illegal-finance-illegal-brokerage-fee-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="search-info-box">
                        <h2 class="small-title"><strong>대출나라</strong>에서 정식업체 조회 후</h2>
                        <h2 class="big-title">안전하게 대출 받으세요!</h2>
                        <p class="search-contents-title">
                            본 서비스는 금융위원회와 금융감독원이 제공하는 데이터를 기반으로
                            제작되었습니다. 정식 대부업체는 기준금리를 넘거나 광고용 전화번호를
                            임의로 변경하지 않습니다. 과도한 빚은 고통의 시작이며 신용불량자가 되는
                            지름길입니다.
                        </p>
                        <div class="search-box">
                            <el-input
                                v-model="searchValue"
                                placeholder="대표자명, 광고용 전화번호, 상호명으로 검색"
                                class="search-input-box"
                            >
                                <template #suffix>
                                    <div class="img-box">
                                        <img src="/images/common/search_blue.png" alt="검색" />
                                    </div>
                                </template>
                            </el-input>
                        </div>
                        <div class="info-action-box">
                            <div class="left-box">
                                <div class="info-title-box">
                                    <div class="img-box">
                                        <img
                                            src="/images/common/warning_circle.png"
                                            alt="전국 등록 대부(중개)업체 수"
                                        />
                                    </div>
                                    <p class="info-title">
                                        전국 등록 대부(중개)업체 수(2025년 12월 01일 05:00 기준)
                                    </p>
                                </div>
                                <p class="total-title">총 9,877업체</p>
                            </div>
                            <div class="right-box">
                                <NormalButton
                                    :size="'LARGE'"
                                    :isIcon="true"
                                    :icon-direction="'RIGHT'"
                                    :icon-url="'/images/common/right_arrow_white.png'"
                                    :title="'업체확인방법'"
                                    :bg-color="'secondary-500'"
                                    :border-color="'secondary-500'"
                                    :font-color="'white'"
                                    @click="commonStore.openCompanyCheckModal()"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="list-box">
                        <p class="total-count-title">전체(<strong>270</strong>)</p>
                        <ul class="list-wrapper">
                            <li v-for="(item, index) in listItem" :key="index" class="list-item">
                                <h3 class="list-title">{{ item.title }}</h3>
                                <div class="line"></div>
                                <div class="content-wrapper">
                                    <div class="content-item">
                                        <p class="title">대표자명</p>
                                        <p class="contents">{{ item.person }}</p>
                                    </div>
                                    <div class="content-item">
                                        <p class="title">등록증번호</p>
                                        <p class="contents">{{ item.number }}</p>
                                    </div>
                                    <div class="content-item">
                                        <p class="title">소재지</p>
                                        <p class="contents">{{ item.area }}</p>
                                    </div>
                                </div>
                                <button>자세히 보기</button>
                            </li>
                        </ul>
                        <div class="pagination-box">
                            <NormalPagination
                                :total="pageNationValue.total"
                                :page-size="pageNationValue.pageSize"
                                :current-page="pageNationValue.currentPage"
                                @update:current-page="onUpdateCurrentPage"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common'

const commonStore = useCommonStore()
// =================================================== State
// 검색 Value
const searchValue = ref('')

// List Value
const listItem = ref([
    {
        id: 1,
        title: '(유)길이되는자산관리대부',
        person: '이하늘',
        number: '2025-전북정읍-0002',
        area: '전북특별자치도 정읍전북특별자치도 정읍전북특별자치도 정읍',
    },
    {
        id: 2,
        title: '(유)길이되는자산관리대부',
        person: '이하늘',
        number: '2025-전북정읍-0002',
        area: '전북특별자치도 정읍전북특별자치도 정읍전북특별자치도 정읍',
    },
    {
        id: 3,
        title: '(유)길이되는자산관리대부',
        person: '이하늘',
        number: '2025-전북정읍-0002',
        area: '전북특별자치도 정읍전북특별자치도 정읍전북특별자치도 정읍',
    },
    {
        id: 4,
        title: '(유)길이되는자산관리대부',
        person: '이하늘',
        number: '2025-전북정읍-0002',
        area: '전북특별자치도 정읍전북특별자치도 정읍전북특별자치도 정읍',
    },
    {
        id: 5,
        title: '(유)길이되는자산관리대부',
        person: '이하늘',
        number: '2025-전북정읍-0002',
        area: '전북특별자치도 정읍전북특별자치도 정읍전북특별자치도 정읍',
    },
    {
        id: 6,
        title: '(유)길이되는자산관리대부',
        person: '이하늘',
        number: '2025-전북정읍-0002',
        area: '전북특별자치도 정읍전북특별자치도 정읍전북특별자치도 정읍',
    },
])

// PageNation Value
const pageNationValue = ref({
    total: 100,
    pageSize: 10,
    currentPage: 1,
})

// ========================================= Function
// 페이지네이션에서 전달받은 현재 페이지를 내부 상태와 부모에 반영합니다.
const onUpdateCurrentPage = (page: number) => {
    pageNationValue.value.currentPage = page
}
</script>

<style lang="scss">
div.illegal-finance-illegal-brokerage-fee-section {
    div.align-box {
        display: flex;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            width: 100%;
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                div.search-info-box {
                    background-color: $color-gray-100;
                    border-radius: 16px;
                    @include r(padding-top, 32, 32, 32, 32, 32);
                    @include r(padding-bottom, 32, 32, 32, 32, 32);
                    @include r(padding-left, 32, 32, 32, 32, 32);
                    @include r(padding-right, 32, 32, 32, 32, 32);
                    h2 {
                        &.small-title {
                            font-weight: $font-weight-semi-bold;
                            color: $color-gray-900;
                            @include r(font-size, 16, 16, 16, 16, 16);
                            @include r(margin-bottom, 4, 4, 4, 4, 4);
                            strong {
                                color: $color-primary-500;
                            }
                        }
                        &.big-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 32, 32, 32, 32, 32);
                        }
                    }
                    p.search-contents-title {
                        color: $color-gray-500;
                        font-weight: $font-weight-regular;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include r(line-height, 20, 20, 20, 20, 20);
                        @include r(margin-top, 16, 16, 16, 16, 16);
                        @include r(margin-bottom, 16, 16, 16, 16, 16);
                    }
                    div.search-box {
                        @include r(margin-bottom, 16, 16, 16, 16, 16);
                        div.search-input-box {
                            width: 26.375rem;
                            @include respond(mobile-plus) {
                                width: 100%;
                            }
                            @include respond(mobile) {
                                width: 100%;
                            }
                            @include r(height, 44, 44, 44, 44, 44);
                            div.el-input__wrapper {
                                background-color: $color-white;
                                box-shadow: none !important;
                                border: 2px solid $color-primary-500 !important;
                                border-radius: 50px;
                                @include r(padding-top, 0, 0, 0, 0, 0);
                                @include r(padding-bottom, 0, 0, 0, 0, 0);
                                @include r(padding-left, 16, 16, 16, 16, 16);
                                @include r(padding-right, 20, 20, 20, 20, 20);
                                input.el-input__inner {
                                    color: $color-gray-900;
                                    font-weight: $font-weight-regular;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                                span.el-input__suffix {
                                    span.el-input__suffix-inner {
                                        div.img-box {
                                            @include r(width, 18, 18, 18, 18, 18);
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
                    div.info-action-box {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        @include r(gap, 10, 10, 10, 10, 10);
                        @include respond(mobile-plus) {
                            flex-direction: column;
                            align-items: baseline;
                        }
                        @include respond(mobile) {
                            flex-direction: column;
                            align-items: baseline;
                        }
                        div.left-box {
                            display: flex;
                            align-items: center;
                            @include r(gap, 4, 6, 6, 6, 6);
                            @include respond(mobile-plus) {
                                flex-direction: column;
                                align-items: baseline;
                            }
                            @include respond(mobile) {
                                flex-direction: column;
                                align-items: baseline;
                            }
                            div.info-title-box {
                                display: flex;
                                align-items: center;
                                @include r(gap, 6, 6, 6, 6, 6);
                                div.img-box {
                                    flex-shrink: 0;
                                    margin-bottom: 2px;
                                    @include r(width, 13, 13, 13, 13, 13);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                                p.info-title {
                                    font-weight: $font-weight-regular;
                                    color: $color-gray-500;
                                    @include r(font-size, 13, 13, 13, 13, 13);
                                    @include r(line-height, 20, 20, 20, 20, 20);
                                }
                            }
                            p.total-title {
                                font-weight: $font-weight-semi-bold;
                                color: $color-gray-900;
                                @include r(font-size, 13, 13, 13, 13, 13);
                                @include r(line-height, 20, 20, 20, 20, 20);
                            }
                        }
                        div.right-box {
                            button {
                                div.img-box {
                                    @include r(width, 6, 6, 6, 6, 6);
                                }
                            }
                        }
                    }
                }
                div.list-box {
                    @include r(margin-top, 60, 60, 60, 60, 60);
                    p.total-count-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 20, 20, 20, 20, 20);
                        @include r(margin-bottom, 36, 36, 36, 30, 30);
                        strong {
                            color: $color-primary-500;
                        }
                    }
                    ul.list-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: stretch;
                        gap: var(--list-gap);
                        @include r(--list-gap, 16, 20, 20, 20, 20);
                        li.list-item {
                            min-width: 0;
                            flex: 0 0 calc((100% - (var(--list-gap) * 2)) / 3);
                            border: 1px solid $color-gray-200;
                            background-color: $color-white;
                            border-radius: 16px;
                            @include r(padding-top, 24, 24, 24, 24, 24);
                            @include r(padding-bottom, 24, 24, 24, 24, 24);
                            @include r(padding-left, 24, 24, 24, 24, 24);
                            @include r(padding-right, 24, 24, 24, 24, 24);
                            @include respond(tablet) {
                                flex: 0 0 calc((100% - var(--list-gap)) / 2);
                            }
                            @include respond(mobile-plus) {
                                flex: 0 0 calc((100% - var(--list-gap)) / 2);
                            }
                            @include respond(mobile) {
                                flex: 0 0 calc((100% - var(--list-gap)) / 2);
                            }
                            h3.list-title {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                @include r(font-size, 20, 20, 20, 20, 20);
                            }
                            div.line {
                                width: 100%;
                                height: 1px;
                                border-bottom: 1px solid $color-gray-200;
                                @include r(margin-top, 18, 18, 18, 18, 18);
                                @include r(margin-bottom, 18, 18, 18, 18, 18);
                            }
                            div.content-wrapper {
                                display: flex;
                                flex-direction: column;
                                @include r(gap, 8, 8, 8, 8, 8);
                                div.content-item {
                                    display: flex;
                                    align-items: center;
                                    min-width: 0;
                                    p.title {
                                        flex-shrink: 0;
                                        font-weight: $font-weight-bold;
                                        color: $color-gray-900;
                                        @include r(font-size, 13, 14, 14, 14, 14);
                                        @include r(width, 60, 65, 65, 65, 65);
                                    }
                                    p.contents {
                                        min-width: 0;
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-900;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        @include r(font-size, 13, 14, 14, 14, 14);
                                        @include respond(mobile-plus) {
                                            display: -webkit-box;
                                            -webkit-box-orient: vertical;
                                            -webkit-line-clamp: 2;
                                            white-space: normal;
                                        }
                                        @include respond(mobile) {
                                            display: -webkit-box;
                                            -webkit-box-orient: vertical;
                                            -webkit-line-clamp: 2;
                                            white-space: normal;
                                        }
                                    }
                                }
                            }
                            button {
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 100%;
                                background-color: inherit;
                                border: 1px solid $color-secondary-500;
                                border-radius: 6px;
                                line-height: 1;
                                color: $color-secondary-500;
                                font-weight: $font-weight-bold;
                                padding: 0;
                                @include r(margin-top, 18, 18, 18, 18, 18);
                                @include r(font-size, 13, 14, 14, 14, 14);
                                @include r(height, 37, 37, 37, 37, 37);
                                &:hover {
                                    background-color: $color-secondary-500;
                                    color: $color-white;
                                }
                            }
                        }
                    }
                    div.pagination-box {
                        @include r(margin-top, 40, 40, 40, 40, 40);
                    }
                }
            }
        }
    }
}
</style>
