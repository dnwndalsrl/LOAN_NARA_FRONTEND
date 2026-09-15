<template>
    <div class="official-company-integrated-search-section">
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
                        <ActionTableListBox
                            title="대부업체"
                            :data="listData.list"
                            :total="listData.total"
                            :page-size="listData.pageSize"
                            :show-total="true"
                            v-model:current-page="listData.currentPage"
                            @change="onChangePage"
                        >
                            <!-- PC 테이블 컬럼 -->
                            <el-table-column label="업체명">
                                <template #default="{ row }">
                                    <p class="align-center">대출나라대부</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="등록증번호">
                                <template #default="{ row }">
                                    <p class="align-center no-overflow">
                                        2026-금감원-0000(대부중개업)
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column label="대표자" width="80">
                                <template #default="{ row }">
                                    <p class="align-center">김대출</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="소재지">
                                <template #default="{ row }">
                                    <p class="align-center no-overflow">
                                        서울특별시 강남구 선릉로 655, 16층 (논현동, 디에이원타워)
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column label="유효기간" width="100">
                                <template #default="{ row }">
                                    <p class="align-center">2026.01.08<br />~<br />2029.01.07</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="상태" width="60">
                                <template #default="{ row }">
                                    <p class="align-center">정상</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="전화번호" width="120">
                                <template #default="{ row }">
                                    <p class="align-center no-overflow">
                                        010-0000-0000<br />010-0000-0000
                                    </p></template
                                >
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
// 줄광고 테이블 리스트 더미데이터
const listData = reactive({
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

// ========================================= Function
// 변경된 페이지를 반영하고 목록을 다시 조회합니다.
const onChangePage = ({ page, size }: { page: number; size: number }) => {
    listData.currentPage = page
    listData.pageSize = size
}
</script>

<style lang="scss">
div.official-company-integrated-search-section {
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
                }
            }
        }
    }
}
</style>
