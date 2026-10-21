<template>
    <div class="mypage-profile-edit-section">
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
                    <!-- 회원정보 -->
                    <div class="user-info-wrapper">
                        <div class="user-info-box">
                            <div class="user-info-item">
                                <p class="title">아이디</p>
                                <p class="content">테스트1</p>
                            </div>
                            <div class="user-info-item">
                                <p class="title">비밀번호</p>
                                <button
                                    type="button"
                                    class="button-box"
                                    @click="passwordChangeModalVisible = true"
                                >
                                    비밀번호 변경
                                    <div class="img-box">
                                        <img
                                            src="/images/common/right_arrow_blue.png"
                                            alt="비밀번호변경"
                                        />
                                    </div>
                                </button>
                            </div>
                            <div class="user-info-item">
                                <p class="title">비상연락처</p>
                                <div class="info-align-box">
                                    <div class="top">
                                        <p class="content">010-0000-0000</p>
                                        <button
                                            type="button"
                                            class="button-box"
                                            @click="emergencyPhoneChangeModalVisible = true"
                                        >
                                            비상연락처 변경
                                            <div class="img-box">
                                                <img
                                                    src="/images/common/right_arrow_blue.png"
                                                    alt="비상연락처변경"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                    <div class="gray-warning-title-box">
                                        <div class="img-box">
                                            <img
                                                src="/images/common/warning_circle.png"
                                                alt="주의사항"
                                            />
                                        </div>
                                        <p>
                                            광고종료알림 등 중요한 공지사항 알림서비스를 받아보실 수
                                            있습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="warning-title-box">
                            <div class="warning-title-item">
                                <div class="img-box">
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="주의사항"
                                    />
                                </div>
                                <p>광고용 번호는 고객센터 통해서만 변경 신청 가능합니다.</p>
                            </div>
                            <div class="warning-title-item">
                                <div class="img-box">
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="주의사항"
                                    />
                                </div>
                                <p>
                                    비상연락처는 대표자 또는 직원 외에 업무상 관계 없는 제3자 연락처
                                    입력을 절대 금합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 대부업정보 -->
                    <div class="user-info-wrapper">
                        <div class="user-info-box">
                            <div class="user-info-item">
                                <p class="title is-large">대부(중개)등록번호</p>
                                <p class="content">2025-서울강남-0111</p>
                            </div>
                            <div class="user-info-item">
                                <p class="title is-large">등록유효기간</p>
                                <p class="content">2023.12.18 ~ 2026.12.18</p>
                            </div>
                            <div class="user-info-item">
                                <p class="title is-large">상호명</p>
                                <p class="content">테스트테스트테스트</p>
                            </div>
                            <div class="user-info-item">
                                <p class="title is-large">사업장소재지</p>
                                <p class="content">
                                    서울특별시 강남구 선릉로 655, 16층 (논현동, 디에이원타워)
                                </p>
                            </div>
                            <div class="user-info-item">
                                <p class="title is-large">광고용 전화번호</p>
                                <p class="content">010-0000-0000</p>
                            </div>
                            <div class="user-info-item">
                                <p class="title is-large">대표자</p>
                                <div class="info-align-box">
                                    <div class="top">
                                        <p class="content">010-0000-0000</p>
                                        <button type="button" class="button-box">
                                            재인증 요청
                                            <div class="img-box">
                                                <img
                                                    src="/images/common/right_arrow_blue.png"
                                                    alt="재인증 요청"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="user-info-item">
                                <p class="title is-large">대부업등록기관</p>
                                <p class="content">테스트테스트</p>
                            </div>
                        </div>
                        <div class="warning-title-box">
                            <div class="warning-title-item">
                                <div class="img-box">
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="주의사항"
                                    />
                                </div>
                                <p>대부업 정보 변경 시 대출나라 고객센터로 연락주시기 바랍니다.</p>
                            </div>
                        </div>
                    </div>
                    <!-- 하단 Footer 정보 -->
                    <div class="footer-info-wrapper">
                        <p class="title">
                            대출나라에서는 모니터링을 통해 변경된 사항을 체크하고 있습니다.
                        </p>
                        <p class="content">
                            변경사항이 있을 시 미리 대출나라에 통보해 주시고
                            <strong>미통보시 광고가 중지</strong>되오니 꼭 고객센터로 알려주시기
                            바랍니다.<br />광고 변경은 등록된 <strong>광고용 번호</strong> 또는
                            <strong>비상용 번호</strong>로 연락주시는 경우에만 가능합니다.
                        </p>
                        <div class="phone-wrapper-box">
                            <div class="phone-img-box">
                                <div class="img-box">
                                    <img src="/images/common/tell_phone_gray.png" alt="대표번호" />
                                </div>
                                <p>대표번호</p>
                            </div>
                            <p class="phone-title">010-2190-4569</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- 비밀번호 변경 Modal -->
        <NormalModal
            v-model="passwordChangeModalVisible"
            :title="'비밀번호 변경'"
            class="password-change-modal"
            @close="passwordChangeModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="form-wrapper">
                        <div class="form-item">
                            <p class="title">기존 비밀번호 입력</p>
                            <NormalInput
                                :size="'SMALL'"
                                :placeholder="'기존 비밀번호를 입력해주세요.'"
                            />
                        </div>
                        <div class="form-item">
                            <p class="title">새 비밀번호 입력</p>
                            <NormalInput
                                :size="'SMALL'"
                                :placeholder="'새 비밀번호를 입력해주세요.'"
                            />
                        </div>
                        <div class="form-item">
                            <p class="title">새 비밀번호 확인</p>
                            <NormalInput
                                :size="'SMALL'"
                                :placeholder="'새 비밀번호를 다시 입력해주세요.'"
                            />
                        </div>
                    </div>
                </div>

                <div class="button-wrapper">
                    <NormalButton
                        :title="'취소'"
                        :bg-color="'gray-400'"
                        :border-color="'gray-400'"
                        :font-color="'white'"
                        @click="passwordChangeModalVisible = false"
                    />
                    <NormalButton
                        :title="'비밀번호 변경'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="passwordChangeModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>

        <!-- 비상연락처 변경 Modal -->
        <NormalModal
            v-model="emergencyPhoneChangeModalVisible"
            :title="'비상연락처 변경'"
            class="emergency-phone-change-modal"
            @close="emergencyPhoneChangeModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="form-wrapper">
                        <div class="form-item">
                            <p class="title">비밀번호 입력</p>
                            <NormalInput
                                :size="'SMALL'"
                                :placeholder="'비밀번호를 입력해주세요.'"
                            />
                        </div>
                        <div class="form-item">
                            <p class="title">새 비상연락처 입력</p>
                            <div class="form-align-box">
                                <NormalInput
                                    :size="'SMALL'"
                                    :placeholder="'새 비밀번호를 입력해주세요.'"
                                />
                                <NormalButton
                                    :title="'인증번호 받기'"
                                    :bg-color="'white'"
                                    :border-color="'primary-500'"
                                    :font-color="'primary-500'"
                                />
                            </div>
                        </div>
                        <div class="form-item">
                            <p class="title">인증번호 입력</p>
                            <div class="form-align-box">
                                <NormalInput
                                    :size="'SMALL'"
                                    :placeholder="'인증번호를 입력해 주세요.'"
                                />
                                <NormalButton
                                    :title="'확인'"
                                    :bg-color="'primary-500'"
                                    :border-color="'primary-500'"
                                    :font-color="'white'"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="button-wrapper">
                    <NormalButton
                        :title="'취소'"
                        :bg-color="'gray-400'"
                        :border-color="'gray-400'"
                        :font-color="'white'"
                        @click="emergencyPhoneChangeModalVisible = false"
                    />
                    <NormalButton
                        :title="'비상연락처 변경'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="emergencyPhoneChangeModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>

        <!-- 변경 Modal 상태값이 노출되는 Modal -->
        <NormalModal
            v-model="resultModalVisible"
            :title="'비상연락처 변경'"
            class="result-modal"
            @close="resultModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper"></div>

                <div class="button-wrapper">
                    <NormalButton
                        :title="'취소'"
                        :bg-color="'gray-400'"
                        :border-color="'gray-400'"
                        :font-color="'white'"
                        @click="resultModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
// 비밀번호 변경 Modal State
const passwordChangeModalVisible = ref(false)

// 비상연락처 변경 Modal State
const emergencyPhoneChangeModalVisible = ref(false)

// 변경 Modal 상태값이 노출되는 Modal State
const resultModalVisible = ref(false)
</script>

<style lang="scss">
div.mypage-profile-edit-section {
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
                @include r(gap, 40, 40, 40, 40, 40);
                div.user-info-wrapper {
                    div.user-info-box {
                        display: flex;
                        flex-direction: column;
                        border-radius: 16px;
                        border: 1px solid $color-gray-200;
                        @include r(gap, 16, 16, 16, 16, 16);
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 40, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        div.user-info-item {
                            display: flex;
                            @include r(gap, 10, 10, 10, 10, 10);
                            p.title {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                @include r(font-size, 14, 14, 14, 14, 14);
                                @include r(line-height, 20, 20, 20, 20, 20);
                                @include r(width, 100, 100, 100, 100, 100);
                                &.is-large {
                                    @include r(width, 120, 120, 120, 120, 120);
                                }
                            }
                            p.content {
                                font-weight: $font-weight-regular;
                                color: $color-gray-900;
                                @include r(line-height, 20, 20, 20, 20, 20);
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                            button.button-box {
                                display: flex;
                                align-items: center;
                                padding: 0;
                                border: none;
                                background: none;
                                font: inherit;
                                color: $color-primary-500;
                                cursor: pointer;
                                font-weight: $font-weight-bold;
                                @include r(gap, 8, 8, 8, 8, 8);
                                @include r(font-size, 13, 13, 13, 13, 13);
                                div.img-box {
                                    flex-shrink: 0;
                                    @include r(width, 5, 5, 5, 5, 5);
                                    @include r(margin-bottom, 1, 1, 1, 1, 1);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                            }
                            div.info-align-box {
                                div.top {
                                    display: flex;
                                    align-items: center;

                                    @include r(gap, 16, 16, 16, 16, 16);
                                }
                                div.gray-warning-title-box {
                                    display: flex;
                                    @include r(gap, 6, 6, 6, 6, 6);
                                    @include r(margin-top, 6, 6, 6, 6, 6);
                                    div.img-box {
                                        flex-shrink: 0;
                                        @include r(width, 14, 14, 14, 14, 14);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                    p {
                                        font-weight: $font-weight-medium;
                                        color: $color-gray-500;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                    }
                                }
                            }
                        }
                    }
                    div.warning-title-box {
                        display: flex;
                        flex-direction: column;
                        @include r(margin-top, 20, 20, 20, 20, 20);
                        @include r(gap, 10, 10, 10, 10, 10);
                        div.warning-title-item {
                            display: flex;
                            @include r(gap, 6, 6, 6, 6, 6);
                            div.img-box {
                                flex-shrink: 0;
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
                    }
                }
                div.footer-info-wrapper {
                    display: flex;
                    flex-direction: column;
                    border-radius: 16px;
                    background-color: $color-gray-100;
                    @include r(gap, 24, 24, 24, 24, 24);
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);
                    @include r(padding-left, 40, 40, 40, 40, 40);
                    @include r(padding-right, 40, 40, 40, 40, 40);
                    p.title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 24, 24, 24, 24, 24);
                    }
                    p.content {
                        font-weight: $font-weight-regular;
                        color: $color-gray-900;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include r(line-height, 20, 20, 20, 20, 20);
                        strong {
                            font-weight: $font-weight-semi-bold;
                            color: $color-error-500;
                        }
                    }
                    div.phone-wrapper-box {
                        display: flex;
                        align-items: center;
                        border: 1px solid $color-gray-200;
                        border-radius: 8px;
                        background-color: $color-white;
                        @include r(gap, 24, 24, 24, 24, 24);
                        @include r(padding-top, 24, 24, 24, 24, 24);
                        @include r(padding-bottom, 24, 24, 24, 24, 24);
                        @include r(padding-left, 24, 24, 24, 24, 24);
                        @include r(padding-right, 24, 24, 24, 24, 24);
                        div.phone-img-box {
                            display: flex;
                            align-items: center;
                            @include r(gap, 8, 8, 8, 8, 8);
                            div.img-box {
                                @include r(width, 16, 16, 16, 16, 16);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                            p {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                @include r(font-size, 16, 16, 16, 16, 16);
                            }
                        }
                        p.phone-title {
                            font-weight: $font-weight-bold;
                            color: $color-primary-500;
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                    }
                }
            }
        }
    }
}

div.password-change-modal {
    div.contents-wrapper {
        div.form-wrapper {
            display: flex;
            flex-direction: column;
            background-color: $color-gray-100;
            border-radius: 16px;
            @include r(gap, 24, 24, 24, 24, 24);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.form-item {
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(margin-bottom, 8, 8, 8, 8, 8);
                }
            }
        }
    }
    div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(gap, 10, 10, 10, 10, 10);
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}

div.emergency-phone-change-modal {
    div.contents-wrapper {
        div.form-wrapper {
            display: flex;
            flex-direction: column;
            background-color: $color-gray-100;
            border-radius: 16px;
            @include r(gap, 24, 24, 24, 24, 24);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.form-item {
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(margin-bottom, 8, 8, 8, 8, 8);
                }
                div.form-align-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 8, 8, 8, 8, 8);
                    button {
                        flex-shrink: 0;
                    }
                }
            }
        }
    }
    div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(gap, 10, 10, 10, 10, 10);
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
