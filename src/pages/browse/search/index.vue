<template>
    <div class="browse-search-section">
        <div class="page-header-wrapper">
            <PageHeaderBox />
        </div>
        <div class="align-box">
            <section class="category-filter-wrapper">
                <div class="filter-section">
                    <p class="filter-title">지역</p>
                    <ul class="filter-list type-region">
                        <li v-for="(item, index) in regionList" :key="index" class="filter-item">
                            <button
                                type="button"
                                :class="{
                                    'is-active':
                                        item.value === 'all'
                                            ? isAllRegion
                                            : selectedRegionList.includes(item.value),
                                }"
                                @click="onClickRegion(item.value)"
                            >
                                {{ item.title }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="filter-section">
                    <p class="filter-title">상품</p>
                    <ul class="filter-list type-product">
                        <li v-for="(item, index) in productList" :key="index" class="filter-item">
                            <button
                                type="button"
                                :class="{
                                    'is-active':
                                        item.value === 'all'
                                            ? isAllProduct
                                            : selectedProductList.includes(item.value),
                                }"
                                @click="onClickProduct(item.value)"
                            >
                                {{ item.title }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="selected-filter-box">
                    <div class="left-box">
                        <p v-if="selectedFilters.length === 0" class="placeholder-title">
                            필터를 선택해 주세요.
                        </p>
                        <ul v-else class="selected-filter-list">
                            <li
                                v-for="filterItem in selectedFilters"
                                :key="`${filterItem.type}-${filterItem.value}`"
                                class="selected-filter-item"
                            >
                                <span>{{ filterItem.title }}</span>

                                <button
                                    type="button"
                                    class="remove-button"
                                    aria-label="선택한 필터 삭제"
                                    @click="onRemoveSelectedFilter(filterItem)"
                                >
                                    <img src="/images/common/close_sharp.png" alt="삭제" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="right-box">
                        <NormalButton
                            :isIcon="true"
                            :icon-direction="'LEFT'"
                            :icon-url="'/images/common/reset.png'"
                            :title="'초기화'"
                            :bg-color="'gray-300'"
                            :border-color="'gray-300'"
                            :font-color="'gray-500'"
                        />
                        <NormalButton
                            :title="'선택 조건 검색'"
                            :bg-color="'secondary-500'"
                            :border-color="'secondary-500'"
                            :font-color="'white'"
                        />
                    </div>
                </div>
            </section>
            <!-- 줄광고 테이블 리스트 -->
            <section class="line-advertising-table-list-wrapper">
                <ActionTableListBox
                    title="전체"
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
                                :bg-color="'secondary-500'"
                                :border-color="'secondary-500'"
                                :font-color="'white'"
                            />
                        </div>
                    </template>

                    <!-- PC 테이블 컬럼 -->
                    <el-table-column label="지역" width="100">
                        <template #default="{ row }">
                            {{ row.region }}
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

        <NormalModal
            v-model="filterLimitModalVisible"
            :title="'필터 선택 확인'"
            class="filter-limit-modal"
            @close="filterLimitModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <p>지역, 상품 필터는 각 최대 3개까지 선택 가능합니다.</p>
                </div>

                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="filterLimitModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
// 지역 필터
const regionList = [
    { value: 'all', title: '전체' },
    { value: 'seoul', title: '서울' },
    { value: 'gyeonggi', title: '경기' },
    { value: 'incheon', title: '인천' },
    { value: 'daejeon', title: '대전' },
    { value: 'daegu', title: '대구' },
    { value: 'busan', title: '부산' },
    { value: 'gwangju', title: '광주' },
    { value: 'ulsan', title: '울산' },
    { value: 'sejong', title: '세종' },
    { value: 'gangwon', title: '강원' },
    { value: 'chungbuk', title: '충북' },
    { value: 'chungnam', title: '충남' },
    { value: 'jeonbuk', title: '전북' },
    { value: 'jeonnam', title: '전남' },
    { value: 'gyeongbuk', title: '경북' },
    { value: 'gyeongnam', title: '경남' },
    { value: 'jeju', title: '제주' },
]

// 상품 필터
const productList = [
    { value: 'all', title: '전체' },
    { value: 'office-worker', title: '직장인' },
    { value: 'unemployed', title: '무직자' },
    { value: 'woman', title: '여성' },
    { value: 'emergency', title: '비상금' },
    { value: 'mobile', title: '모바일' },
    { value: 'small-amount', title: '소액' },
    { value: 'visitor', title: '무방문' },
    { value: 'low-credit', title: '저영업' },
    { value: 'same-day', title: '당일' },
    { value: 'business', title: '사업자' },
    { value: 'professional', title: '전문직' },
    { value: 'low-credit-score', title: '저신용' },
    { value: 'credit', title: '신용' },
    { value: 'housewife', title: '주부' },
    { value: 'car', title: '자동차' },
    { value: 'real-estate', title: '부동산' },
    { value: 'living-expense', title: '생활비' },
    { value: 'online', title: '온라인' },
    { value: 'daily-worker', title: '일용직' },
    { value: 'freelancer', title: '프리랜서' },
    { value: 'jeonse', title: '전당포' },
    { value: 'face-to-face', title: '비대면' },
    { value: 'house', title: '주부' },
    { value: 'rehabilitation', title: '회생파산' },
    { value: 'refinance', title: '대환' },
    { value: 'etc', title: '기타' },
]

// =================================================== State

// 선택된 지역
const selectedRegionList = ref<string[]>([])

// 선택된 상품
const selectedProductList = ref<string[]>([])

// 최대 선택 개수 초과 Modal
const filterLimitModalVisible = ref(false)

// 줄광고 테이블 리스트 더미데이터
const lineAdvertisingTableValue = reactive({
    total: 100,
    currentPage: 1,
    pageSize: 10,
    list: [
        {
            seq: 1,
            region: '전국',
            title: '사업자대출 보증금담보대출 자영업자대출 월변가능',
            loanLimit: '5,000만원',
            companyName: 'R&R파이낸셜대부중개',
        },
        {
            seq: 2,
            region: '전국',
            title: '전국무방문 비대면 24시간상담',
            loanLimit: '200만원',
            companyName: '더원머니대부',
        },
        {
            seq: 3,
            region: '전국',
            title: '무소득 비대면 당일입금',
            loanLimit: '1,000만원',
            companyName: '유원상사대부중개',
        },
    ],
})
// =================================================== Computed
// 지역 전체 선택 여부
const isAllRegion = computed(() => {
    return selectedRegionList.value.length === 0
})

// 상품 전체 선택 여부
const isAllProduct = computed(() => {
    return selectedProductList.value.length === 0
})

// 현재 선택된 필터명을 반환합니다.
const selectedFilterTitles = computed(() => {
    const regionTitles = regionList
        .filter((item) => item.value !== 'all' && selectedRegionList.value.includes(item.value))
        .map((item) => item.title)

    const productTitles = productList
        .filter((item) => item.value !== 'all' && selectedProductList.value.includes(item.value))
        .map((item) => item.title)

    return [...regionTitles, ...productTitles]
})

// 필터가 하나라도 선택되었는지 확인합니다.
const hasSelectedFilter = computed(() => {
    return selectedFilterTitles.value.length > 0
})

// 선택된 필터 목록을 chip 형태로 반환합니다.
const selectedFilters = computed(() => {
    const regionFilters = regionList
        .filter((item) => {
            return selectedRegionList.value.includes(item.value)
        })
        .map((item) => {
            return {
                type: 'region',
                value: item.value,
                title: item.title,
            }
        })

    const productFilters = productList
        .filter((item) => {
            return selectedProductList.value.includes(item.value)
        })
        .map((item) => {
            return {
                type: 'product',
                value: item.value,
                title: item.title,
            }
        })

    return [...regionFilters, ...productFilters]
})

// =================================================== Function
// 지역 필터를 선택하거나 해제합니다.
const onClickRegion = (value: string) => {
    if (value === 'all') {
        selectedRegionList.value = []
        return
    }

    const selectedIndex = selectedRegionList.value.indexOf(value)

    // 이미 선택된 항목이면 해제
    if (selectedIndex !== -1) {
        selectedRegionList.value.splice(selectedIndex, 1)
        return
    }

    // 최대 3개 선택 제한
    if (selectedRegionList.value.length >= 3) {
        filterLimitModalVisible.value = true
        return
    }

    selectedRegionList.value.push(value)
}

// 상품 필터를 선택하거나 해제합니다.
const onClickProduct = (value: string) => {
    if (value === 'all') {
        selectedProductList.value = []
        return
    }

    const selectedIndex = selectedProductList.value.indexOf(value)

    // 이미 선택된 항목이면 해제
    if (selectedIndex !== -1) {
        selectedProductList.value.splice(selectedIndex, 1)
        return
    }

    // 최대 3개 선택 제한
    if (selectedProductList.value.length >= 3) {
        filterLimitModalVisible.value = true
        return
    }

    selectedProductList.value.push(value)
}

// 선택된 필터 하나를 삭제합니다.
const onRemoveSelectedFilter = (filterItem: { type: string; value: string; title: string }) => {
    if (filterItem.type === 'region') {
        selectedRegionList.value = selectedRegionList.value.filter((value) => {
            return value !== filterItem.value
        })
    }

    if (filterItem.type === 'product') {
        selectedProductList.value = selectedProductList.value.filter((value) => {
            return value !== filterItem.value
        })
    }
}

// 필터를 전체 초기화합니다.
const onResetFilter = () => {
    selectedRegionList.value = []
    selectedProductList.value = []
}

// 선택 조건 검색
const onSearchFilter = () => {
    console.log({
        regions: selectedRegionList.value,
        products: selectedProductList.value,
    })
}

// 변경된 페이지를 반영하고 목록을 다시 조회합니다.
const onChangePage = ({ page, size }: { page: number; size: number }) => {
    lineAdvertisingTableValue.currentPage = page
    lineAdvertisingTableValue.pageSize = size
}
</script>

<style lang="scss">
div.browse-search-section {
    div.page-header-wrapper {
        @include r(margin-bottom, 20, 30, 30, 30, 30);
    }
    div.align-box {
        section.category-filter-wrapper {
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            border: 1px solid $color-gray-200;
            @include r(gap, 24, 24, 24, 24, 24);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.filter-section {
                p.filter-title {
                    color: $color-gray-900;
                    font-weight: $font-weight-bold;
                    @include r(font-size, 18, 18, 18, 18, 18);
                    @include r(margin-bottom, 20, 20, 20, 20, 20);
                }
                ul.filter-list {
                    display: grid;
                    @include r(gap, 8, 8, 8, 8, 8);
                    &.type-region {
                        grid-template-columns: repeat(18, minmax(0, 1fr));

                        @include respond(tablet) {
                            grid-template-columns: repeat(9, minmax(0, 1fr));
                        }

                        @include respond(mobile-plus) {
                            grid-template-columns: repeat(6, minmax(0, 1fr));
                        }

                        @include respond(mobile) {
                            grid-template-columns: repeat(6, minmax(0, 1fr));
                        }
                    }
                    &.type-product {
                        grid-template-columns: repeat(14, minmax(0, 1fr));

                        @include respond(tablet) {
                            grid-template-columns: repeat(9, minmax(0, 1fr));
                        }

                        @include respond(mobile-plus) {
                            grid-template-columns: repeat(6, minmax(0, 1fr));
                        }

                        @include respond(mobile) {
                            grid-template-columns: repeat(6, minmax(0, 1fr));
                        }
                    }
                    li.filter-item {
                        min-width: 0;
                        button {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            white-space: nowrap;
                            background-color: $color-gray-100;
                            border: none;
                            border-radius: 8px;
                            padding: 0;
                            cursor: pointer;
                            color: $color-gray-900;
                            font-weight: $font-weight-semi-bold;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(height, 33, 33, 33, 33, 33);
                            &.is-active {
                                background-color: $color-gray-200;
                                color: $color-primary-500;
                                font-weight: $font-weight-bold;
                            }
                        }
                    }
                }
            }
            div.selected-filter-box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: $color-gray-100;
                @include r(gap, 16, 16, 16, 16, 16);
                @include r(padding-top, 16, 16, 16, 16, 16);
                @include r(padding-bottom, 16, 16, 16, 16, 16);
                @include r(padding-left, 16, 16, 16, 16, 16);
                @include r(padding-right, 16, 16, 16, 16, 16);
                @include respond(mobile) {
                    flex-direction: column;
                    align-items: flex-start;
                }
                div.left-box {
                    p.placeholder-title {
                        color: $color-gray-500;
                        font-weight: $font-weight-medium;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    ul.selected-filter-list {
                        display: flex;
                        flex-wrap: wrap;
                        @include r(column-gap, 24, 24, 24, 24, 24);
                        @include r(row-gap, 16, 16, 16, 16, 16);
                        li.selected-filter-item {
                            display: flex;
                            align-items: center;
                            @include r(gap, 4, 4, 4, 4, 4);
                            span {
                                color: $color-primary-500;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                            button {
                                background-color: none;
                                border: none;
                                padding: 0;
                                cursor: pointer;
                                @include r(width, 7, 7, 7, 7, 7);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
                div.right-box {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    @include r(gap, 10, 10, 10, 10, 10);
                    @include respond(mobile) {
                        width: 100%;
                    }
                    button {
                        @include respond(mobile) {
                            width: 100%;
                        }
                    }
                }
            }
        }
        section.line-advertising-table-list-wrapper {
            width: 100%;
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
                        }
                    }
                }
            }
        }
    }
}
div.filter-limit-modal {
    div.contents-wrapper {
        p {
            color: $color-gray-900;
            font-weight: $font-weight-regular;
            @include r(font-size, 14, 14, 14, 14, 14);
        }
    }
    div.button-wrapper {
        display: flex;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
