<template>
    <div class="mypage-ads-apply-section">
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
                    <div class="contents-wrapper-box is-flex">
                        <div class="flex-align-box">
                            <div class="form-wrapper-box">
                                <p class="main-title">배너광고 등록 신청</p>
                                <!-- 큰 문구 -->
                                <div class="form-item-align-box">
                                    <div class="form-item">
                                        <p class="form-item-title">큰 문구</p>
                                        <div class="form-item-contents">
                                            <NormalInput
                                                :size="'SMALL'"
                                                :placeholder="'큰 문구를 입력해 주세요.'"
                                            />
                                            <p class="validation-title">
                                                최대 10자 이내의 한글, 숫자, 영문, 한문만 입력
                                                가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- 작은 문구 -->
                                <div class="form-item-align-box">
                                    <div class="form-item">
                                        <p class="form-item-title">작은 문구</p>
                                        <div class="form-item-contents">
                                            <NormalInput
                                                :size="'SMALL'"
                                                :placeholder="'작은 문구를 입력해 주세요.'"
                                            />
                                            <NormalInput
                                                :size="'SMALL'"
                                                :placeholder="'작은 문구를 입력해 주세요.'"
                                            />
                                            <p class="validation-title">
                                                최대 13자 이내의 한글, 숫자, 영문, 한문만 입력
                                                가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- 지역 선택 -->
                                <div class="form-item-align-box">
                                    <div class="form-item">
                                        <p class="form-item-title">지역 선택</p>
                                        <div class="form-item-contents">
                                            <NormalSelectBox
                                                :options="[]"
                                                :size="'SMALL'"
                                                :placeholder="'지역을 선택해 주세요.'"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- 업체명 -->
                                <div class="form-item-align-box">
                                    <div class="form-item">
                                        <p class="form-item-title">업체명</p>
                                        <div class="form-item-contents">
                                            <p class="form-item-content-title">대출나라대부중개</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="example-img-box">
                                <p class="main-title">배너 문구 예시</p>
                                <div class="img-box">
                                    <img
                                        src="/images/mypage/ads/apply/apply_temp_img.png"
                                        alt="배너 문구 예시"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="warning-box">
                            <div class="img-box">
                                <img src="/images/common/warning_circle_blue.png" alt="주의사항" />
                            </div>
                            <p>배너문구는 각각 다르게 등록 가능합니다.</p>
                        </div>
                    </div>
                    <div class="contents-wrapper-box">
                        <div class="form-wrapper-box">
                            <p class="main-title">줄광고 등록 신청</p>
                            <!-- 제목 -->
                            <div class="form-item-align-box">
                                <div class="form-item">
                                    <p class="form-item-title">제목</p>
                                    <div class="form-item-contents">
                                        <NormalInput
                                            :size="'SMALL'"
                                            :placeholder="'제목을 입력해 주세요.'"
                                        />
                                        <p class="validation-title fix-height">
                                            글자 수는 최대 30자 이내로 제한되며 한글, 숫자, 영문,
                                            한문 외 특수문자는 입력하실 수 없습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 업체명/월 금리 -->
                            <div class="form-item-align-box is-flex">
                                <div class="form-item">
                                    <p class="form-item-title">업체명</p>
                                    <div class="form-item-contents">
                                        <p class="form-item-content-title fix-height">
                                            대출나라대부중개
                                        </p>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <p class="form-item-title">월 금리</p>
                                    <div class="form-item-contents">
                                        <p class="form-item-content-title fix-height">
                                            월 1% ~ 1.6%
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 등록번호/연 금리 -->
                            <div class="form-item-align-box is-flex">
                                <div class="form-item">
                                    <p class="form-item-title">등록번호</p>
                                    <div class="form-item-contents">
                                        <p class="form-item-content-title fix-height">
                                            2025-서울강남-0000
                                        </p>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <p class="form-item-title">연 금리</p>
                                    <div class="form-item-contents is-flex">
                                        <p class="form-item-content-title fix-height">연 10% ~</p>
                                        <NormalSelectBox
                                            :options="[]"
                                            :size="'SMALL'"
                                            :placeholder="'-연 금리 선택-'"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- 대출한도/연체금리 -->
                            <div class="form-item-align-box is-flex">
                                <div class="form-item">
                                    <p class="form-item-title">대출한도</p>
                                    <div class="form-item-contents">
                                        <NormalSelectBox
                                            :options="[]"
                                            :size="'SMALL'"
                                            :placeholder="'-대출한도 선택-'"
                                        />
                                    </div>
                                </div>
                                <div class="form-item">
                                    <p class="form-item-title">연체금리</p>
                                    <div class="form-item-contents">
                                        <NormalSelectBox
                                            :options="[]"
                                            :size="'SMALL'"
                                            :placeholder="'-연체금리 선택-'"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- 대출기간/상환방식 -->
                            <div class="form-item-align-box is-flex">
                                <div class="form-item">
                                    <p class="form-item-title">대출기간</p>
                                    <div class="form-item-contents">
                                        <NormalSelectBox
                                            :options="[]"
                                            :size="'SMALL'"
                                            :placeholder="'-대출기간 선택-'"
                                        />
                                    </div>
                                </div>
                                <div class="form-item">
                                    <p class="form-item-title">상환방식</p>
                                    <div class="form-item-contents">
                                        <NormalSelectBox
                                            :options="[]"
                                            :size="'SMALL'"
                                            :placeholder="'-상환방식 선택-'"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- 대표지역 -->
                            <div class="form-item-align-box">
                                <div class="form-item">
                                    <p class="form-item-title">대표지역</p>
                                    <div class="form-item-contents">
                                        <NormalSelectBox
                                            :options="[]"
                                            :size="'SMALL'"
                                            :placeholder="'-대표지역 선택-'"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- 추가비용/조기상환 수수료 -->
                            <div class="form-item-align-box is-flex">
                                <div class="form-item">
                                    <p class="form-item-title">추가비용</p>
                                    <div class="form-item-contents">
                                        <el-radio-group v-model="radio1Value">
                                            <el-radio :label="1">무</el-radio>
                                            <el-radio :label="2">우</el-radio>
                                        </el-radio-group>
                                        <div class="description-title-box">
                                            <div class="img-box">
                                                <img
                                                    src="/images/common/warning_circle.png"
                                                    alt="주의사항"
                                                />
                                            </div>
                                            <p>
                                                추가비용이 있는 경우 그 내용을 부가설명란에 입력해
                                                주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <p class="form-item-title">조기상환 수수료</p>
                                    <div class="form-item-contents">
                                        <el-radio-group v-model="radio2Value">
                                            <el-radio :label="1">무</el-radio>
                                        </el-radio-group>
                                        <div class="description-title-box">
                                            <div class="img-box">
                                                <img
                                                    src="/images/common/warning_circle.png"
                                                    alt="주의사항"
                                                />
                                            </div>
                                            <p>
                                                조기상환수수료가 있는 경우 대출나라 고객센터로
                                                연락해 주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 연락처 -->
                            <div class="form-item-align-box">
                                <div class="form-item">
                                    <p class="form-item-title">연락처</p>
                                    <div class="form-item-contents">
                                        <p class="form-item-content-title fix-height color-blue">
                                            010-0000-0000
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 부가설명 -->
                            <div class="form-item-align-box">
                                <div class="form-item">
                                    <p class="form-item-title">부가설명</p>
                                    <div class="form-item-contents">
                                        <el-input
                                            type="textarea"
                                            :rows="5"
                                            placeholder="카톡아이디, 홈페이지 주소, 연락처 등 기재기 삭제됩니다.
자세히 작성하시면 많은 홍보효과를 보실 수 있습니다.
"
                                        >
                                        </el-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="warning-wrapper-box">
                            <div class="warning-box">
                                <div class="img-box">
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="주의사항"
                                    />
                                </div>
                                <p>줄광고 수정 시 모든 배너광고 부가설명도 자동 변경됩니다.</p>
                            </div>
                            <div class="warning-box">
                                <div class="img-box">
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="주의사항"
                                    />
                                </div>
                                <p>
                                    줄광고 위치는 해당 지역, 상품배너 광고 영역 하단에 자동
                                    노출됩니다.
                                </p>
                            </div>
                        </div>
                        <div class="button-wrapper">
                            <NormalButton
                                :title="'등록신청'"
                                :bg-color="'secondary-500'"
                                :border-color="'secondary-500'"
                                :font-color="'white'"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- 대출광고 심의규정 필독 Modal -->
        <NormalModal
            v-model="pageStartModalVisible"
            :title="'대출광고 심의규정 필독'"
            class="ads-transfer-page-start-modal"
            @close="pageStartModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <p class="content">
                        최근 대출 광고 심의 규정 강화 되었으며 대부업 종사자의 경우 법적 의무에 대해
                        이를 준수해야 할 의무가 있습니다.<br />광고 문구 작성은 회원 직접 작성을
                        원칙으로 하며, 광고 심의 규정에 위반되지 않도록 신중히 작성하시기
                        바랍니다.<br /><br />
                        (근거없는)허위·과장 표현이나 지나친 강조 자극적인 표현 경쟁을 유발하는 표시
                        모두 광고 심의 규정에 위반될 수 있으며
                        <strong>이는 과태료 [최대 5천만원] 부가대상이 될 수 있습니다.</strong>
                    </p>
                    <NuxtLink>
                        <span>더 자세한 공지 내용 확인하기</span>
                        <div class="img-box">
                            <img
                                src="/images/common/right_arrow_blue.png"
                                alt="더 자세한 공지 내용 확인하기"
                            />
                        </div>
                    </NuxtLink>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="pageStartModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
// =================================================== State
const pageStartModalVisible = ref(false)
const radio1Value = ref(1)
const radio2Value = ref(1)

// ========================================= Function
</script>

<style lang="scss">
div.mypage-ads-apply-section {
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
                @include r(gap, 60, 60, 60, 60, 60);
                div.contents-wrapper-box {
                    div.flex-align-box {
                        display: flex;
                        @include r(gap, 24, 24, 24, 24, 24);
                        @include respond(tablet) {
                            flex-direction: column;
                            div.form-wrapper-box {
                                order: 2;
                            }
                        }
                        @include respond(mobile-plus) {
                            flex-direction: column;
                            div.form-wrapper-box {
                                order: 2;
                            }
                        }
                        @include respond(mobile) {
                            flex-direction: column;
                            div.form-wrapper-box {
                                order: 2;
                            }
                        }
                    }
                    div.form-wrapper-box {
                        flex: 1 1 0;
                        display: flex;
                        flex-direction: column;
                        border-radius: 16px;
                        border: 1px solid $color-gray-200;
                        @include r(gap, 30, 30, 30, 30, 30);
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 40, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        p.main-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 20, 20, 20, 20, 20);
                        }
                        div.form-item-align-box {
                            &.is-flex {
                                display: flex;
                                @include r(gap, 30, 30, 30, 40, 40);
                                @include respond(tablet) {
                                    flex-direction: column;
                                }
                                @include respond(mobile-plus) {
                                    flex-direction: column;
                                }
                                @include respond(mobile) {
                                    flex-direction: column;
                                }
                            }
                            div.form-item {
                                flex: 1 1 0;
                                display: flex;
                                flex-direction: column;
                                @include r(gap, 14, 14, 14, 14, 14);
                                p.form-item-title {
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                    @include r(font-size, 16, 16, 16, 16, 16);
                                }
                                div.form-item-contents {
                                    display: flex;
                                    flex-direction: column;
                                    @include r(gap, 10, 10, 10, 10, 10);
                                    &.is-flex {
                                        flex-direction: row;
                                        @include r(gap, 4, 4, 4, 4, 4);
                                    }
                                    p.validation-title {
                                        font-weight: $font-weight-medium;
                                        color: $color-gray-500;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                    }
                                    p.form-item-content-title {
                                        display: flex;
                                        align-items: center;
                                        flex-shrink: 0;
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-900;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                        &.fix-height {
                                            @include r(height, 32, 32, 32, 32, 32);
                                        }
                                        &.color-blue {
                                            font-weight: $font-weight-medium;
                                            color: $color-primary-500;
                                        }
                                    }
                                    div.el-radio-group {
                                        @include r(gap, 30, 30, 30, 30, 30);
                                        label.el-radio {
                                            display: flex;
                                            align-items: center;
                                            font-weight: $font-weight-medium !important;
                                            margin-right: 0 !important;
                                            color: $color-gray-900 !important;
                                            @include r(font-size, 14, 14, 14, 14, 14);
                                            @include r(gap, 8, 8, 8, 8, 8);
                                            &.is-checked {
                                                span.el-radio__label {
                                                    color: $color-gray-900 !important;
                                                }
                                            }
                                            span.el-radio__input {
                                                &.is-checked {
                                                    span.el-radio__inner {
                                                        background-color: $color-white !important;
                                                        border-color: $color-primary-500 !important;
                                                        &::after {
                                                            background-color: $color-primary-500 !important;
                                                            width: 7px;
                                                            height: 7px;
                                                        }
                                                    }
                                                }
                                            }
                                            span.el-radio__label {
                                                padding-left: 0 !important;
                                            }
                                        }
                                    }
                                    div.el-textarea {
                                        textarea {
                                            border-radius: 8px !important;
                                            border: 1px solid #dcdfe6 !important;
                                            box-shadow: none !important;
                                            padding: 0.5rem 0.625rem !important;
                                            font-weight: $font-weight-regular;
                                            color: $color-gray-900;
                                            @include r(font-size, 13, 13, 13, 13, 13);
                                        }
                                    }
                                }
                                div.description-title-box {
                                    display: flex;
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
                                        color: $color-gray-500;
                                        font-weight: $font-weight-medium;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                        @include r(margin-top, 1, 1, 1, 1, 1);
                                    }
                                }
                            }
                        }
                    }
                    div.example-img-box {
                        flex: 1 1 0;
                        display: flex;
                        flex-direction: column;
                        border-radius: 16px;
                        background-color: $color-gray-100;
                        @include r(gap, 30, 30, 30, 30, 30);
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 40, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        p.main-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 20, 20, 20, 20, 20);
                        }
                        div.img-box {
                            display: flex;
                            align-items: center;
                            flex: 1 1 0;
                            @include respond(pc) {
                                width: 20.281rem;
                            }
                            @include respond(laptop) {
                                width: 28.719rem;
                            }
                            @include respond(tablet) {
                                width: 27.375rem;
                                flex: auto;
                            }
                            @include respond(mobile-plus) {
                                width: 70%;
                                flex: auto;
                            }
                            @include respond(mobile) {
                                width: 100%;
                                flex: auto;
                            }
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                    div.warning-wrapper-box {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 10, 10, 10, 10, 10);
                        @include r(margin-top, 20, 20, 20, 20, 20);
                        div.warning-box {
                            margin-top: 0 !important;
                        }
                    }
                    div.warning-box {
                        display: flex;
                        @include r(gap, 6, 6, 6, 6, 6);
                        @include r(margin-top, 20, 20, 20, 20, 20);
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
                    div.button-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: end;
                        @include r(margin-top, 20, 20, 20, 20, 20);
                    }
                }
            }
        }
    }
}

div.ads-transfer-page-start-modal {
    div.contents-wrapper {
        border-radius: 16px;
        background-color: $color-gray-100;
        @include r(padding-top, 24, 24, 24, 24, 24);
        @include r(padding-bottom, 24, 24, 24, 24, 24);
        @include r(padding-left, 24, 24, 24, 24, 24);
        @include r(padding-right, 24, 24, 24, 24, 24);
        p.content {
            font-weight: $font-weight-medium;
            color: $color-gray-900;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(line-height, 20, 20, 20, 20, 20);
            strong {
                color: $color-error-500;
            }
        }
        a {
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            cursor: pointer;
            @include r(margin-top, 24, 24, 24, 24, 24);
            @include r(gap, 8, 8, 8, 8, 8);
            span {
                font-weight: $font-weight-bold;
                color: $color-primary-500;
                @include r(font-size, 14, 14, 14, 14, 14);
            }
            div.img-box {
                margin-top: 2px;
                @include r(width, 5, 5, 5, 5, 5);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
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
