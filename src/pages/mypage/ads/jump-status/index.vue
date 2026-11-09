<template>
    <div class="mypage-ads-jump-status-section">
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
                    <!-- 줄광고 테이블 목록 -->
                    <section class="line-advertising-table-list-wrapper">
                        <ActionTableListBox
                            :title="'전체'"
                            :data="lineAdvertisingTableValue.list"
                            :total="lineAdvertisingTableValue.total"
                            :page-size="lineAdvertisingTableValue.pageSize"
                            :show-total="true"
                            v-model:current-page="lineAdvertisingTableValue.currentPage"
                            @change="onChangePage"
                        >
                            <!-- 검색 영역 -->
                            <template #search>
                                <div class="warning-title-box">
                                    <p>* 3개월 이후 데이터는 자동 삭제됩니다.</p>
                                </div>
                            </template>

                            <!-- PC 테이블 컬럼 -->
                            <el-table-column label="상품" width="100">
                                <template #default="{ row }">
                                    {{ row.product }}
                                </template>
                            </el-table-column>

                            <el-table-column label="제목">
                                <template #default="{ row }">
                                    <NuxtLink :to="`/company/${row.seq}`">
                                        {{ row.title }}
                                    </NuxtLink>
                                </template>
                            </el-table-column>

                            <el-table-column label="대출한도" width="160">
                                <template #default="{ row }">
                                    {{ row.loanLimit }}
                                </template>
                            </el-table-column>

                            <el-table-column label="업체명" width="180">
                                <template #default="{ row }">
                                    {{ row.companyName }}
                                </template>
                            </el-table-column>

                            <!-- 모바일 목록 -->
                            <template #mobile="{ items }">
                                <ul class="mobile-company-list">
                                    <li
                                        v-for="item in items"
                                        :key="item.seq"
                                        class="mobile-company-item"
                                    >
                                        <NuxtLink :to="`/company/${item.seq}`">
                                            <strong>{{ item.title }}</strong>
                                            <span>{{ item.companyName }}</span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </template>
                        </ActionTableListBox>
                    </section>
                    <section class="statistics-wrapper">
                        <!-- 대출나라 통계 -->
                        <section class="content-section content-section-1">
                            <div class="title-box">
                                <p class="main-title">대출나라의 빅데이터를 기반으로 한</p>
                                <p class="content-title">
                                    <strong>방문자 수 </strong>통계 수치입니다.
                                </p>
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
                                <p class="warning-title is-top">
                                    * 일일 중복 ip 제외한 수치입니다.
                                </p>
                            </div>
                        </section>
                        <!-- 지역 -->
                        <section class="content-section content-section-2">
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
                        <section class="content-section content-section-3">
                            <div class="title-box">
                                <p class="main-title">
                                    대출나라의 빅데이터를 기반으로 한 통계 리포트에 따르면
                                </p>
                                <p class="content-title">
                                    <strong>상품별 업체검색</strong>에서
                                    <strong>무직자</strong>상품이 가장 조회수가 많았어요!
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
                    </section>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
// =================================================== State
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
// 줄광고 테이블 목록입니다.
const lineAdvertisingTableValue = reactive({
    total: 100,
    currentPage: 1,
    pageSize: 10,
    list: [
        {
            seq: 1,
            product: '직장인',
            title: '직장인 신용대출 당일 상담 가능',
            loanLimit: '5,000만원',
            companyName: 'R&R파이낸셜대부중개',
        },
        {
            seq: 2,
            product: '무직자',
            title: '무직자 비대면 대출 상담',
            loanLimit: '200만원',
            companyName: '더원머니대부',
        },
        {
            seq: 3,
            product: '사업자',
            title: '사업자 운영자금 대출',
            loanLimit: '1,000만원',
            companyName: '유원상사대부중개',
        },
    ],
})
// =================================================== Function
// 변경된 페이지를 반영하고 목록을 다시 조회합니다.
const onChangePage = ({ page, size }: { page: number; size: number }) => {
    lineAdvertisingTableValue.currentPage = page
    lineAdvertisingTableValue.pageSize = size

    getLineAdvertisingList()
}

// 현재 상품과 페이지 조건을 기준으로 줄광고 목록을 조회합니다.
const getLineAdvertisingList = async () => {}
</script>

<style lang="scss">
div.mypage-ads-jump-status-section {
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
                // =================================================== 줄광고 테이블
                section.line-advertising-table-list-wrapper {
                    width: 100%;
                    section.action-table-list-box {
                        div.warning-title-box {
                            p {
                                font-weight: $font-weight-medium;
                                color: $color-error-500;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }

                        ul.mobile-company-list {
                            border-top: 1px solid $color-gray-200;

                            li.mobile-company-item {
                                border-bottom: 1px solid $color-gray-200;

                                @include r(padding-top, 10, 10, 10, 10, 10);
                                @include r(padding-bottom, 10, 10, 10, 10, 10);
                                @include r(padding-left, 8, 8, 8, 8, 8);
                                @include r(padding-right, 8, 8, 8, 8, 8);

                                a {
                                    display: block;
                                    color: $color-gray-900;
                                    text-decoration: none;
                                }
                            }
                        }
                    }
                }
                section.statistics-wrapper {
                    @include r(margin-top, 80, 80, 80, 80, 80);
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
                                line-height: 1.2;
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
                    div.warning-box {
                        display: flex;
                        background-color: $color-gray-100;
                        border-radius: 16px;
                        @include r(gap, 6, 6, 6, 6, 6);
                        @include r(padding-top, 24, 24, 24, 24, 24);
                        @include r(padding-bottom, 24, 24, 24, 24, 24);
                        @include r(padding-left, 24, 24, 24, 24, 24);
                        @include r(padding-right, 24, 24, 24, 24, 24);
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
    }
}
</style>
