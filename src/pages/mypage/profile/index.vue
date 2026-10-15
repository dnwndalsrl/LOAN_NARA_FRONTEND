<template>
    <div class="mypage-profile-section">
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
                    <div class="user-name-box">
                        <div class="img-box">
                            <img src="/images/common/user_login.png" alt="로그인" />
                        </div>
                        <p><strong>대출나라대부중개</strong> 님</p>
                    </div>
                    <div class="user-info-wrapper-box">
                        <div class="user-info-item">
                            <p class="info-item-title">무료 이용현황</p>
                            <div class="info-item">
                                <div class="title-box">
                                    <p class="title">광고종료일</p>
                                </div>
                                <p class="content">02월 10일 (D-90)</p>
                            </div>
                            <div class="info-item">
                                <div class="title-box">
                                    <p class="title">이용금액</p>
                                </div>
                                <p class="content">0만원</p>
                            </div>
                            <div class="info-item">
                                <div class="title-box">
                                    <p class="title">금일 줄광고 점프 남은 횟수</p>
                                    <div
                                        class="more-btn"
                                        @click="lineAdsJumpFreeInfoModalVisible = true"
                                    >
                                        <p class="btn-title">내용보기</p>
                                        <div class="img-box">
                                            <img src="/images/common/right_arrow_gray.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p class="content">99회</p>
                            </div>
                        </div>
                        <div class="user-info-item">
                            <p class="info-item-title">유료 이용현황</p>
                            <div class="info-item">
                                <div class="title-box">
                                    <p class="title">점프 충전 횟수</p>
                                    <div
                                        class="more-btn"
                                        @click="lineAdsJumpChargedInfoModalVisible = true"
                                    >
                                        <p class="btn-title">내용보기</p>
                                        <div class="img-box">
                                            <img src="/images/common/right_arrow_gray.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p class="content">0회</p>
                            </div>
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <NormalButton
                            :title="'회원정보 수정'"
                            :bg-color="'secondary-500'"
                            :border-color="'secondary-500'"
                            :font-color="'white'"
                        />
                        <NormalButton
                            :title="'회원 탈퇴'"
                            :bg-color="'error-500'"
                            :border-color="'error-500'"
                            :font-color="'white'"
                        />
                    </div>
                </div>
            </section>
        </div>
        <!-- 줄광고 점프(무료) Modal -->
        <NormalModal
            v-model="lineAdsJumpFreeInfoModalVisible"
            :title="'줄광고 점프(무료)'"
            class="line-ads-jump-free-info-modal"
            @close="lineAdsJumpFreeInfoModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="info-wrapper-box">
                        <div class="info-item">
                            <p class="title">50만원 이상 무료 점프</p>
                            <p class="content">5회</p>
                        </div>
                        <div class="info-item">
                            <p class="title">60만원~100만원 무료 점프</p>
                            <p class="content">10회</p>
                        </div>
                        <div class="info-item">
                            <p class="title">110만원 이상 무료 점프</p>
                            <p class="content">15회</p>
                        </div>
                    </div>
                    <p class="warning-title">
                        줄광고 등록 후 광고글이 뒤로 밀려있을 때 점프기능을 이용하시면 첫페이지
                        최상단에 등록됩니다.
                    </p>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="lineAdsJumpFreeInfoModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>

        <!-- 줄광고 점프(유료) Modal -->
        <NormalModal
            v-model="lineAdsJumpChargedInfoModalVisible"
            :title="'줄광고 점프(유료)'"
            class="line-ads-jump-charged-info-modal"
            @close="lineAdsJumpChargedInfoModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="info-wrapper-box">
                        <div class="info-item">
                            <p class="title">500회</p>
                            <p class="content">300,000원</p>
                        </div>
                    </div>
                    <p class="warning-title">
                        일일 사용 횟수 제한 없음.<br /><strong
                            >무료 점프 횟수 소진 시 추가로 사용</strong
                        >할 수 있는 상품입니다.<br />광고 연장 시 남은 개수는 이월되며, 광고 미연장
                        시 소멸됩니다.
                    </p>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="lineAdsJumpChargedInfoModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
const lineAdsJumpFreeInfoModalVisible = ref(false)
const lineAdsJumpChargedInfoModalVisible = ref(false)
</script>

<style lang="scss">
div.mypage-profile-section {
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
                div.user-name-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 8, 8, 8, 8, 8);
                    div.img-box {
                        @include r(width, 20, 20, 20, 20, 20);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    p {
                        font-weight: $font-weight-medium;
                        color: $color-gray-900;
                        @include r(font-size, 16, 16, 16, 16, 16);
                        strong {
                            font-weight: $font-weight-bold;
                        }
                    }
                }
                div.user-info-wrapper-box {
                    display: flex;
                    flex-direction: column;
                    border-radius: 8px;
                    background-color: $color-white;
                    border: 1px solid $color-gray-200;
                    @include r(gap, 20, 20, 20, 20, 20);
                    @include r(margin-top, 20, 20, 20, 20, 20);
                    @include r(padding-top, 20, 20, 20, 20, 20);
                    @include r(padding-bottom, 20, 20, 20, 20, 20);
                    @include r(padding-left, 20, 20, 20, 20, 20);
                    @include r(padding-right, 20, 20, 20, 20, 20);
                    div.user-info-item {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 10, 10, 10, 10, 10);
                        p.info-item-title {
                            font-weight: $font-weight-bold;
                            color: $color-primary-500;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        div.info-item {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            div.title-box {
                                display: flex;
                                align-items: center;
                                @include r(gap, 10, 10, 10, 10, 10);
                                p.title {
                                    font-weight: $font-weight-regular;
                                    color: $color-gray-900;
                                    @include r(font-size, 13, 13, 13, 13, 13);
                                }
                                div.more-btn {
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    @include r(gap, 8, 8, 8, 8, 8);
                                    p.btn-title {
                                        font-weight: $font-weight-bold;
                                        color: $color-gray-500;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                    }
                                    div.img-box {
                                        @include r(width, 5, 5, 5, 5, 5);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                }
                            }
                            p.content {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                @include r(font-size, 13, 13, 13, 13, 13);
                            }
                        }
                    }
                }
                div.button-wrapper {
                    display: flex;
                    justify-content: end;
                    align-items: center;
                    @include r(margin-top, 20, 20, 20, 20, 20);
                    @include r(gap, 16, 16, 16, 16, 16);
                }
            }
        }
    }
}

div.line-ads-jump-free-info-modal {
    div.contents-wrapper {
        div.info-wrapper-box {
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            background-color: $color-gray-100;
            @include r(gap, 16, 16, 16, 16, 16);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.info-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(line-height, 20, 20, 20, 20, 20);
                }
                p.content {
                    font-weight: $font-weight-semi-bold;
                    color: $color-primary-500;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(line-height, 20, 20, 20, 20, 20);
                }
            }
        }
        p.warning-title {
            font-weight: $font-weight-regular;
            color: $color-gray-500;
            @include r(margin-top, 24, 24, 24, 24, 24);
            @include r(font-size, 13, 13, 13, 13, 13);
            @include r(line-height, 20, 20, 20, 20, 20);
        }
    }
    div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}

div.line-ads-jump-charged-info-modal {
    div.contents-wrapper {
        div.info-wrapper-box {
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            background-color: $color-gray-100;
            @include r(gap, 16, 16, 16, 16, 16);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.info-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(line-height, 20, 20, 20, 20, 20);
                }
                p.content {
                    font-weight: $font-weight-semi-bold;
                    color: $color-primary-500;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(line-height, 20, 20, 20, 20, 20);
                }
            }
        }
        p.warning-title {
            font-weight: $font-weight-regular;
            color: $color-gray-500;
            @include r(margin-top, 24, 24, 24, 24, 24);
            @include r(font-size, 13, 13, 13, 13, 13);
            @include r(line-height, 20, 20, 20, 20, 20);
            strong {
                color: $color-gray-900;
                font-weight: $font-weight-semi-bold;
            }
        }
    }
    div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
