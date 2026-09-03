<template>
    <div class="scam-number-search-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="total-search-section">
                        <div class="search-box">
                            <NormalInput :placeholder="'전화번호를 입력해 주세요'" />
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
                        <ul class="total-result-box">
                            <li class="total-item">
                                <p class="title">총 이력조회</p>
                                <p class="content"><strong>197,120</strong>건</p>
                            </li>
                            <li class="total-item">
                                <p class="title">총 사기번호</p>
                                <p class="content"><strong>4,073</strong>건</p>
                            </li>
                        </ul>
                    </div>
                    <div class="result-table-section">
                        <div class="warning-box">
                            <div class="left-box">
                                <div class="img-box">
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="warning"
                                    />
                                </div>
                                <p>
                                    조회결과, 해당 번호는 <strong>2건</strong>의 피해 신고가
                                    접수되었습니다.
                                </p>
                            </div>
                            <div class="right-box">
                                <NormalButton
                                    :isIcon="true"
                                    :icon-direction="'LEFT'"
                                    :icon-url="'/images/common/warning.png'"
                                    :title="'주의사항'"
                                    :bg-color="'gray-300'"
                                    :border-color="'gray-300'"
                                    :font-color="'gray-500'"
                                />
                            </div>
                        </div>
                        <NormalTable
                            :data="currentSituationTable"
                            :page-sizes="10"
                            :total="currentSituationTable.length"
                            :show-pagination="false"
                            :mobile-table-mode="true"
                        >
                            <el-table-column label="피해내용">
                                <template #default="{ row }">
                                    <p class="color-black">{{ row.title }}</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="제보일" width="160">
                                <template #default="{ row }">
                                    <p class="align-center color-gray">{{ row.date }}</p>
                                </template>
                            </el-table-column>
                        </NormalTable>
                        <div class="info-box">
                            <p>
                                대출나라는 대출 사기 피해 방지 및 대출 이용자 보호를 위해 위
                                서비스를 제공합니다.<br />거래전 사기번호 검색을 통해 사기 피해를
                                예방하고 안전한 거래 하시기 바랍니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- 전화번호 입력 확인 Modal -->
        <NormalModal
            v-model="phoneNumberCheckModalVisible"
            :title="'전화번호 입력 확인'"
            class="phone-number-check-modal"
            @close="phoneNumberCheckModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <p>검색할 연락처를 입력해주세요</p>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="phoneNumberCheckModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
const currentSituationTable = ref([
    {
        id: uuid(),
        title: '피해 내용 표시 영역입니다',
        date: '2025-11-27',
    },
    {
        id: uuid(),
        title: '피해 내용 표시 영역입니다',
        date: '2025-11-27',
    },
])

// 전화번호 입력 확인 Modal 관련 Value
const phoneNumberCheckModalVisible = ref(false)
</script>

<style lang="scss">
div.scam-number-search-section {
    div.align-box {
        display: flex;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            flex: 1 1 0;
            min-width: 0;
            width: 100%;
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                div.total-search-section {
                    display: flex;
                    align-items: stretch;
                    @include r(gap, 0, 0, 0, 27, 20);
                    @include respond(tablet) {
                        display: block;
                    }
                    @include respond(mobile-plus) {
                        display: block;
                    }
                    @include respond(mobile) {
                        display: block;
                    }
                    div.search-box {
                        display: flex;
                        align-items: center;
                        background-color: $color-gray-100;
                        border-radius: 16px;
                        @include r(margin-bottom, 20, 20, 20, 0, 0);
                        @include respond(pc) {
                            width: 22.5rem;
                        }
                        @include respond(laptop) {
                            width: 30.125rem;
                        }
                        @include respond(tablet) {
                            width: 100%;
                        }
                        @include respond(mobile-plus) {
                            width: 100%;
                        }
                        @include respond(mobile) {
                            width: 100%;
                        }
                        @include r(gap, 10, 10, 10, 10, 10);
                        @include r(padding-top, 24, 24, 24, 24, 24);
                        @include r(padding-bottom, 24, 24, 24, 24, 24);
                        @include r(padding-left, 24, 24, 24, 24, 24);
                        @include r(padding-right, 24, 24, 24, 24, 24);
                        button.normal-button {
                            flex-shrink: 0;
                        }
                    }
                    ul.total-result-box {
                        flex: 1 1 0;
                        min-width: 0;
                        display: flex;
                        align-items: center;
                        @include r(gap, 20, 20, 20, 20, 20);

                        @include respond(tablet) {
                            width: 100%;
                        }
                        @include respond(mobile-plus) {
                            width: 100%;
                        }
                        @include respond(mobile) {
                            width: 100%;
                        }
                        li.total-item {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 100%;
                            height: 100%;
                            border: 1px solid $color-gray-200;
                            border-radius: 16px;
                            @include r(padding-left, 24, 24, 24, 24, 24);
                            @include r(padding-right, 24, 24, 24, 24, 24);
                            @include r(padding-top, 31.5, 31.5, 31.5, 0, 0);
                            @include r(padding-bottom, 31.5, 31.5, 31.5, 0, 0);
                            p.title {
                                font-weight: $font-weight-semi-bold;
                                color: $color-gray-900;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                            p.content {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                @include r(font-size, 14, 14, 14, 14, 14);
                                strong {
                                    color: $color-primary-500;
                                    font-weight: $font-weight-bold;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                            }
                        }
                    }
                }
                div.result-table-section {
                    @include r(margin-top, 20, 30, 32, 32, 32);
                    div.warning-box {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        @include r(margin-bottom, 13, 13, 13, 13, 13);
                        div.left-box {
                            display: flex;
                            align-items: center;
                            @include r(gap, 6, 6, 6, 6, 6);
                            div.img-box {
                                @include r(width, 14, 14, 14, 14, 14);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                            p {
                                font-weight: $font-weight-medium;
                                color: $color-gray-900;
                                @include r(font-size, 13, 13, 13, 13, 13);
                            }
                        }
                        div.right-box {
                        }
                    }
                    div.info-box {
                        border-radius: 16px;
                        background-color: $color-gray-100;
                        @include r(margin-top, 30, 30, 30, 30, 30);
                        @include r(padding-top, 24, 24, 24, 24, 24);
                        @include r(padding-bottom, 24, 24, 24, 24, 24);
                        @include r(padding-left, 24, 24, 24, 24, 24);
                        @include r(padding-right, 24, 24, 24, 24, 24);
                        p {
                            font-weight: $font-weight-regular;
                            color: $color-gray-500;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                        }
                    }
                }
            }
        }
    }
}

div.phone-number-check-modal {
    div.contents-wrapper {
        p {
            font-weight: $font-weight-regular;
            color: $color-gray-900;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(line-height, 20, 20, 20, 20, 20);
        }
    }
    div.button-wrapper {
        display: flex;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
