<template>
    <div class="mypage-ads-extend-section">
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
                    <div class="img-box">
                        <img src="/images/common/calendar.png" alt="캘린더" />
                    </div>
                    <p class="main-title">
                        광고일 <strong class="blue-title">30</strong>일 연장 신청하시겠습니까?
                    </p>
                    <div class="expect-price-box">
                        <p class="left-title">광고 예상 비용 - 30일 기준</p>
                        <p class="right-title"><strong class="blue-title">0</strong>원</p>
                    </div>
                    <div class="warning-title-box">
                        <p class="bold-title">
                            광고 상품 변경은 관리자 1:1 채팅문의를 통해 신청 가능합니다.
                        </p>
                        <p class="warning-title">
                            신청일 기준 당일
                            <strong class="blue-title">광고비 완납을 원칙</strong>으로 하며,
                            <strong class="blue-title">미입금시 기간연장 이뤄지지 않습니다.</strong>
                        </p>
                    </div>
                    <div class="account-info-box">
                        <div class="info-item">
                            <p class="title">계좌정보</p>
                            <p class="content"><strong>KB국민은행</strong> 92470-2470-61</p>
                        </div>
                        <div class="divider"></div>
                        <div class="info-item">
                            <p class="title">예금주</p>
                            <p class="content">주식회사 대출나라대부중개</p>
                        </div>
                    </div>
                    <button @click="adsProlongCheckModalVisible = true">광고 연장 신청하기</button>
                </div>
            </section>
        </div>

        <!-- 광고연장신청 확인 Modal -->
        <NormalModal
            v-model="adsProlongCheckModalVisible"
            :title="'광고연장신청 확인'"
            class="ads-prolong-check-modal"
            @close="adsProlongCheckModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <p>광고 연장을 신청 하시겠습니까?</p>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'취소'"
                        :bg-color="'gray-400'"
                        :border-color="'gray-400'"
                        :font-color="'white'"
                        @click="adsProlongCheckModalVisible = false"
                    />
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="
                            () => {
                                adsProlongCheckModalVisible = false
                                adsProlongCompleteModalVisible = true
                            }
                        "
                    />
                </div>
            </template>
        </NormalModal>

        <!-- 광고연장신청 완료 Modal -->
        <NormalModal
            v-model="adsProlongCompleteModalVisible"
            :title="'광고연장신청 완료'"
            class="ads-prolong-check-modal"
            @close="adsProlongCompleteModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <p>광고 연장 신청이 접수되었습니다.</p>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="adsProlongCompleteModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
// 광고연장신청 확인 Modal Value
const adsProlongCheckModalVisible = ref(false)

// 광고연장신청 완료 Modal Value
const adsProlongCompleteModalVisible = ref(false)
</script>

<style lang="scss">
div.mypage-ads-extend-section {
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
                align-items: center;
                @include r(gap, 32, 32, 32, 32, 32);
                div.img-box {
                    @include r(width, 57, 57, 57, 57, 57);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p.main-title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 24, 28, 28, 28, 28);
                    strong.blue-title {
                        color: $color-primary-500;
                    }
                }
                div.expect-price-box {
                    display: flex;
                    align-items: center;
                    border: 1px solid $color-gray-200;
                    border-radius: 16px;
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    @include r(gap, 24, 24, 24, 24, 24);
                    p.left-title {
                        font-weight: $font-weight-medium;
                        color: $color-gray-900;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    p.right-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 20, 20, 20, 20, 20);
                        @include r(line-height, 20, 20, 20, 20, 20);
                        strong.blue-title {
                            color: $color-primary-500;
                        }
                    }
                }
                div.warning-title-box {
                    text-align: center;
                    p.bold-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 16, 16, 16, 16, 16);
                        @include r(margin-bottom, 10, 10, 10, 10, 10);
                    }
                    p.warning-title {
                        font-weight: $font-weight-regular;
                        color: $color-gray-900;
                        line-height: 1.3;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        strong {
                            &.blue-title {
                                color: $color-primary-500;
                            }
                        }
                    }
                }
                div.account-info-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 10, 20, 20, 20, 20);
                    @include respond(mobile-plus) {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    @include respond(mobile) {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    div.info-item {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 10, 10, 10);
                        p.title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                        }
                        p.content {
                            font-weight: $font-weight-regular;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                            strong {
                                font-weight: $font-weight-bold;
                                color: $color-gray-500;
                            }
                        }
                    }
                    div.divider {
                        border-bottom: 1px solid $color-gray-300;
                        transform: rotate(90deg);
                        @include r(width, 14, 14, 14, 14, 14);
                        @include respond(mobile-plus) {
                            display: none;
                        }
                        @include respond(mobile) {
                            display: none;
                        }
                    }
                }
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    background-color: $color-primary-500;
                    color: $color-white;
                    font-weight: $font-weight-bold;
                    border-radius: 8px;
                    cursor: pointer;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(width, 152, 152, 152, 152, 152);
                    @include r(height, 49, 49, 49, 49, 49);
                }
            }
        }
    }
}

div.ads-prolong-check-modal {
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
        align-items: center;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
        @include r(gap, 10, 10, 10, 10, 10);
    }
}
</style>
