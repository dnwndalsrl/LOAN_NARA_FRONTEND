<template>
    <div class="browse-product-section">
        <PageHeaderBox />

        <div class="align-box">
            <!-- 상품 카테고리 -->
            <section class="category-wrapper">
                <div class="title-box">
                    <div class="img-box">
                        <img src="/images/browse/loan-type/gift_card.png" alt="상품으로 업체찾기" />
                    </div>

                    <h2><strong>상품</strong>별로 업체를 선택해 보세요!</h2>
                </div>

                <div class="category-box">
                    <ul class="category-list">
                        <li
                            v-for="listItem in loanTypeInfo"
                            :key="listItem.value"
                            class="category-item"
                            :class="{
                                'is-active': selectedProductId === listItem.value,
                            }"
                        >
                            <NuxtLink :to="getProductLink(listItem.value)">
                                {{ listItem.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- 프리미엄 배너 -->
            <section class="premium-banner-wrapper">
                <PremiumBannerSection />
            </section>

            <!-- 목록 리스트 -->
            <section class="company-list-wrapper">
                <div class="title-box">
                    <h2 v-if="selectedProduct?.value === 'all'">상품별 업체 등록 현황</h2>
                    <h2 v-else>
                        {{ companyListTitle }}

                        <span v-if="selectedProduct"> ({{ selectedProduct.count }}) </span>
                    </h2>

                    <div class="sub-info-box">
                        <p class="sub-title">배너 위치는 실시간으로 랜덤 배치됩니다.</p>

                        <NormalLink
                            to="/support/ad-inquiry"
                            title="광고문의"
                            bgColor="#DFE3EA"
                            borderColor="#DFE3EA"
                            fontColor="#5B6C8B"
                        />
                    </div>
                </div>
                <LoanTypeCompanyListSection />
            </section>

            <!-- 줄광고 테이블 목록 -->
            <section class="line-advertising-table-list-wrapper">
                <ActionTableListBox
                    :title="tableListTitle"
                    :data="lineAdvertisingTableValue.list"
                    :total="lineAdvertisingTableValue.total"
                    :page-size="lineAdvertisingTableValue.pageSize"
                    :show-total="true"
                    v-model:current-page="lineAdvertisingTableValue.currentPage"
                    @change="onChangePage"
                >
                    <!-- 검색 영역 -->
                    <template #search>
                        <div class="search-box">
                            <NormalSelectBox :options="[]" :size="'SMALL'" :placeholder="'선택'" />
                            <NormalInput :placeholder="'검색어를 입력해 주세요.'" />
                            <NormalButton
                                :isIcon="true"
                                :icon-direction="'LEFT'"
                                :icon-url="'/images/common/search_white.png'"
                                :title="'검색'"
                                :bg-color="'#244C8F'"
                                :border-color="'#244C8F'"
                                :font-color="'#ffffff'"
                            />
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
                            <li v-for="item in items" :key="item.seq" class="mobile-company-item">
                                <NuxtLink :to="`/company/${item.seq}`">
                                    <strong>{{ item.title }}</strong>
                                    <span>{{ item.companyName }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </template>
                </ActionTableListBox>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// =================================================== State

// 상품 카테고리 목록입니다.
// 상품별 업체찾기는 하위 카테고리가 없으므로 평면 배열로 관리합니다.
// 상품 카테고리 관련 state value
const loanTypeInfo = [
    {
        value: 'all',
        title: '전체',
        count: 0,
    },
    {
        value: 'office-worker',
        title: '직장인',
        count: 0,
    },
    {
        value: 'unemployed',
        title: '무직자',
        count: 0,
    },
    {
        value: 'female',
        title: '여성',
        count: 0,
    },
    {
        value: 'non-bank',
        title: '비상금',
        count: 0,
    },
    {
        value: 'mobile',
        title: '모바일',
        count: 0,
    },
    {
        value: 'small-amount',
        title: '소액',
        count: 0,
    },
    {
        value: 'no-visit',
        title: '무방문',
        count: 0,
    },
    {
        value: 'self-employed',
        title: '자영업',
        count: 0,
    },
    {
        value: 'same-day',
        title: '당일',
        count: 0,
    },
    {
        value: 'business',
        title: '사업자',
        count: 0,
    },
    {
        value: 'professional',
        title: '전문직',
        count: 0,
    },
    {
        value: 'low-credit',
        title: '저신용',
        count: 0,
    },
    {
        value: 'credit',
        title: '신용',
        count: 0,
    },
    {
        value: 'additional',
        title: '추가',
        count: 0,
    },
    {
        value: 'car',
        title: '자동차',
        count: 0,
    },
    {
        value: 'real-estate',
        title: '부동산',
        count: 0,
    },
    {
        value: 'living-expense',
        title: '생활비',
        count: 0,
    },
    {
        value: 'online',
        title: '온라인',
        count: 0,
    },
    {
        value: 'daily-worker',
        title: '일용직',
        count: 0,
    },
    {
        value: 'freelancer',
        title: '프리랜서',
        count: 0,
    },
    {
        value: 'full-loan',
        title: '전당포',
        count: 0,
    },
    {
        value: 'non-face-to-face',
        title: '비대면',
        count: 0,
    },
    {
        value: 'housewife',
        title: '주부',
        count: 0,
    },
    {
        value: 'rehabilitation-bankruptcy',
        title: '회생파산',
        count: 0,
    },
    {
        value: 'refinance',
        title: '대환',
        count: 0,
    },
    {
        value: 'etc',
        title: '기타',
        count: 0,
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

// =================================================== Computed

// URL에서 현재 선택된 상품 카테고리값을 가져옵니다.
const selectedProductId = computed(() => {
    return String(route.params.loanType ?? 'all')
})

// 상품 목록에서 현재 선택된 상품 정보를 찾습니다.
const selectedProduct = computed(() => {
    return loanTypeInfo.find((item) => {
        return item.value === selectedProductId.value
    })
})

// 현재 선택된 상품에 맞는 업체 목록 제목을 반환합니다.
const companyListTitle = computed(() => {
    if (selectedProductId.value === 'all') {
        return '상품별 업체 등록 현황'
    }

    return `${selectedProduct.value?.title ?? ''} 대출`
})

// 현재 선택된 상품에 맞는 테이블 제목을 반환합니다.
const tableListTitle = computed(() => {
    if (selectedProductId.value === 'all') {
        return '상품별 업체 등록 현황'
    }

    return `${selectedProduct.value?.title ?? ''}대출 등록 업체`
})

// =================================================== Function

// 상품 카테고리를 클릭했을 때 이동할 URL을 생성합니다.
const getProductLink = (loanTypeId: string) => {
    if (loanTypeId === 'all') {
        return '/browse/loan-type/all'
    }

    return `/browse/loan-type/${loanTypeId}`
}

// 변경된 페이지를 반영하고 목록을 다시 조회합니다.
const onChangePage = ({ page, size }: { page: number; size: number }) => {
    lineAdvertisingTableValue.currentPage = page
    lineAdvertisingTableValue.pageSize = size

    getLineAdvertisingList()
}

// 현재 상품과 페이지 조건을 기준으로 줄광고 목록을 조회합니다.
const getLineAdvertisingList = async () => {
    const payload = {
        product: selectedProductId.value === 'all' ? undefined : selectedProductId.value,
        page: lineAdvertisingTableValue.currentPage,
        per_page: lineAdvertisingTableValue.pageSize,
    }

    console.log(payload)

    // API 연결 후 실제 응답값을 적용합니다.
    // const response = await getProductCompanyListApi(payload)
    // lineAdvertisingTableValue.list = response.data.list
    // lineAdvertisingTableValue.total = response.data.total
}
</script>

<style lang="scss">
div.browse-product-section {
    h1 {
        font-weight: $font-weight-bold;
        color: $color-gray-900;

        @include r(font-size, 24, 24, 24, 24, 24);
        @include r(margin-bottom, 20, 30, 30, 30, 30);
    }

    div.align-box {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: nowrap;
        @include respond(pc) {
            flex-direction: row;
            flex-wrap: wrap;
        }

        @include respond(laptop) {
            flex-direction: row;
            flex-wrap: wrap;
        }
        // =================================================== 상품 카테고리
        section.category-wrapper {
            order: 1;
            flex: 1 1 0;

            display: flex;
            flex-direction: column;

            border-radius: 16px;
            border: 2px solid $color-primary-500;

            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            @include r(margin-right, 0, 0, 0, 0, 20);

            div.title-box {
                flex: 0 0 auto;

                display: flex;
                align-items: center;

                @include r(gap, 8, 8, 8, 8, 8);
                @include r(margin-bottom, 20, 20, 20, 20, 20);

                div.img-box {
                    flex: 0 0 auto;

                    @include r(width, 24, 24, 24, 24, 24);

                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }

                h2 {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;

                    @include r(font-size, 18, 18, 18, 18, 18);

                    strong {
                        color: $color-primary-500;
                    }
                }
            }

            div.category-box {
                flex: 1 1 auto;
                min-height: 0;

                display: flex;
                flex-direction: column;

                ul.category-list {
                    flex: 1 1 auto;

                    display: grid;
                    grid-template-columns: repeat(9, minmax(0, 1fr));
                    grid-auto-rows: minmax(34px, auto);

                    @include r(gap, 8, 8, 8, 8, 8);

                    @include respond(laptop) {
                        grid-template-columns: repeat(9, minmax(0, 1fr));
                    }

                    @include respond(tablet) {
                        grid-template-columns: repeat(9, minmax(0, 1fr));
                    }

                    @include respond(mobile-plus) {
                        grid-template-columns: repeat(6, minmax(0, 1fr));
                    }

                    @include respond(mobile) {
                        grid-template-columns: repeat(6, minmax(0, 1fr));
                    }

                    li.category-item {
                        min-width: 0;
                        overflow: hidden;

                        border-radius: 8px;
                        background-color: $color-gray-100;

                        transition:
                            color 0.2s ease,
                            background-color 0.2s ease;

                        &.is-active {
                            background-color: $color-primary-200;

                            a {
                                color: $color-primary-500;
                            }
                        }

                        @include r(min-height, 34, 34, 34, 40, 40);

                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            width: 100%;
                            height: 100%;

                            font-weight: $font-weight-semi-bold;
                            color: $color-gray-900;
                            text-align: center;
                            text-decoration: none;
                            line-height: 1;
                            white-space: nowrap;

                            @include r(font-size, 13, 14, 14, 14, 14);
                        }
                    }
                }
            }
        }

        // =================================================== 프리미엄 배너
        section.premium-banner-wrapper {
            width: 100%;
            order: 3;

            @include r(margin-top, 30, 30, 60, 0, 0);

            @include respond(pc) {
                width: 28.438rem;
                order: 2;
                margin-top: 0;
            }
        }

        // =================================================== 업체 목록
        section.company-list-wrapper {
            width: 100%;
            position: relative;
            order: 2;

            @include r(margin-top, 30, 44, 44, 44, 64);

            @include respond(pc) {
                order: 4;
            }

            div.title-box {
                display: flex;
                align-items: center;
                justify-content: space-between;

                @include r(margin-bottom, 20, 30, 30, 30, 30);

                h2 {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;

                    @include r(font-size, 20, 20, 20, 24, 24);

                    span {
                        color: $color-primary-500;
                    }
                }

                div.sub-info-box {
                    display: flex;
                    align-items: center;

                    @include r(gap, 16, 16, 16, 16, 16);

                    @include respond(mobile-plus) {
                        display: none;
                    }

                    @include respond(mobile) {
                        display: none;
                    }

                    p.sub-title {
                        font-weight: $font-weight-regular;
                        color: #545976;

                        @include r(font-size, 14, 14, 14, 14, 14);

                        @include respond(tablet) {
                            display: none;
                        }
                    }
                }
            }
        }

        // =================================================== 줄광고 테이블
        section.line-advertising-table-list-wrapper {
            width: 100%;
            order: 4;

            @include r(margin-top, 60, 60, 60, 60, 60);

            section.action-table-list-box {
                div.search-box {
                    display: flex;
                    align-items: center;

                    @include r(gap, 10, 10, 10, 10, 10);

                    div.normal-select-box {
                        flex-shrink: 0;

                        @include r(width, 100, 100, 100, 100, 100);
                    }

                    div.normal-input {
                        @include respond(pc) {
                            width: 15.625rem;
                        }

                        @include respond(laptop) {
                            width: 15.625rem;
                        }

                        @include respond(tablet) {
                            width: 15.625rem;
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
    }
}
</style>
