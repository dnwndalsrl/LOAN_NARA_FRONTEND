<template>
    <div class="signup-form-section">
        <PageHeaderBox />
        <section class="step-status-wrapper">
            <StepStatus :level="'2'" />
        </section>
        <section class="form-wrapper">
            <div class="form-section">
                <div class="form-item-align-box">
                    <!-- 아이디 -->
                    <div class="form-item">
                        <p class="form-item-title">아이디</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :placeholder="'아이디를 입력해 주세요.'" />
                            <NormalButton
                                :type="'NORMAL'"
                                :size="'LARGE'"
                                :title="'중복확인'"
                                :bgColor="'#FFFFFF'"
                                :borderColor="'#366ECC'"
                                :fontColor="'#366ECC'"
                            />
                        </div>
                        <p class="form-item-sub-title">
                            4~12자까지 사용 가능합니다.(영문은 대소문자 구분해 주세요.)
                        </p>
                    </div>
                    <!-- 비상연락처 -->
                    <div class="form-item">
                        <p class="form-item-title">비상연락처</p>
                        <NormalInput
                            :size="'SMALL'"
                            :placeholder="'휴대폰 번호를 입력해 주세요.'"
                        />
                        <div class="form-item-sub-title-align-box">
                            <div class="img-box">
                                <img
                                    src="/images/common/warning_circle.png"
                                    alt="비상연락처 주의사항"
                                />
                            </div>
                            <p>
                                광고종료알림 등 중요한 공지사항 알림서비스를 받아보실 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="form-item-align-box">
                    <!-- 비밀번호 -->
                    <div class="form-item">
                        <p class="form-item-title">비밀번호</p>
                        <NormalInput :size="'SMALL'" :placeholder="'비밀번호를 입력해 주세요.'" />
                        <p class="form-item-sub-title">4~20자까지 사용 가능합니다.</p>
                    </div>
                    <!-- 비밀번호 확인 -->
                    <div class="form-item">
                        <p class="form-item-title">비밀번호 확인</p>
                        <NormalInput :size="'SMALL'" :placeholder="'비밀번호를 입력해 주세요.'" />
                    </div>
                </div>
            </div>
            <div class="form-title-align-box">
                <div class="img-box">
                    <img src="/images/common/recepit_gray.png" alt="대부업 등록증" />
                </div>
                <p>대부업 등록증을 보시고 기입해 주시기 바랍니다.</p>
            </div>
            <div class="form-section">
                <div class="form-item-align-box">
                    <!-- 상호명 -->
                    <div class="form-item">
                        <p class="form-item-title">상호명</p>
                        <div class="input-align-box">
                            <NormalSelectBox
                                :options="[]"
                                :size="'SMALL'"
                                :placeholder="'상호명을 선택해 주세요.'"
                            />
                        </div>
                    </div>
                    <!-- 등록유효기간 -->
                    <div class="form-item">
                        <p class="form-item-title">등록유효기간</p>
                        <NormalDatePicker
                            :type="'daterange'"
                            :startPlaceholder="'시작일'"
                            :endPlaceholder="'종료일'"
                            :rangeSeparator="'-'"
                            :disabled="true"
                        />
                    </div>
                </div>
                <div class="form-item-align-box">
                    <!-- 대부(중개)등록번호 -->
                    <div class="form-item">
                        <p class="form-item-title">대부(중개)등록번호</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :disabled="true" />
                        </div>
                    </div>
                    <!-- 사업장 소재지 -->
                    <div class="form-item">
                        <p class="form-item-title">사업장 소재지</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :disabled="true" />
                        </div>
                    </div>
                </div>
                <div class="form-item-align-box">
                    <!-- 광고용 전화번호 -->
                    <div class="form-item">
                        <p class="form-item-title">광고용 전화번호</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :disabled="true" />
                        </div>
                    </div>
                    <!-- 대표자 -->
                    <div class="form-item">
                        <p class="form-item-title">대표자</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :disabled="true" />
                        </div>
                    </div>
                </div>
                <div class="form-item-align-box">
                    <!-- 대부업 등록기관 -->
                    <div class="form-item">
                        <p class="form-item-title">대부업 등록기관</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :disabled="true" />
                        </div>
                    </div>
                    <!-- 대부업 등록기관 전화번호 -->
                    <div class="form-item">
                        <p class="form-item-title">대부업 등록기관 전화번호</p>
                        <div class="input-align-box">
                            <NormalInput :size="'SMALL'" :disabled="true" />
                        </div>
                    </div>
                </div>
                <div class="form-item-align-box">
                    <!-- 대부업등록증 파일첨부 -->
                    <div class="form-item">
                        <p class="form-item-title">대부업등록증 파일첨부</p>
                        <NormalButton
                            :type="'FILE'"
                            :size="'LARGE'"
                            :title="'파일첨부'"
                            :bgColor="'#DFE3EA'"
                            :borderColor="'#DFE3EA'"
                            :fontColor="'#5B6C8B'"
                        />
                    </div>
                </div>
                <div class="form-item-align-box">
                    <div class="form-item">
                        <p class="form-item-title large-gap">희망광고 선택</p>
                        <div class="sub-title-box">
                            <div class="img-box">
                                <img
                                    src="/images/common/warning_circle_blue.png"
                                    alt="희망광고 선택"
                                />
                            </div>
                            <p>
                                신규 가입 시 최소 광고비-50만원 이상부터 등록 가능하며, 원하시는
                                (광고)상품 클릭 후 광고는 승인 절차 걸친 후 최종 확정됩니다.
                            </p>
                        </div>
                        <div class="checkbox-wrapper">
                            <div class="checkbox-item is-area">
                                <p>지역</p>
                                <el-checkbox-group v-model="areaCheckBoxGroupInfo.selectGroup">
                                    <el-checkbox-button
                                        v-for="(item, index) in areaCheckBoxGroupInfo.info"
                                        :key="item"
                                        :value="item"
                                    >
                                        {{ item }}
                                    </el-checkbox-button>
                                </el-checkbox-group>
                            </div>
                            <div class="checkbox-item is-product">
                                <p>상품</p>
                                <el-checkbox-group v-model="productCheckBoxGroupInfo.selectGroup">
                                    <el-checkbox-button
                                        v-for="(item, index) in productCheckBoxGroupInfo.info"
                                        :key="item"
                                        :value="item"
                                    >
                                        {{ item }}
                                    </el-checkbox-button>
                                </el-checkbox-group>
                            </div>
                            <p class="last-price-title">
                                광고 예상 비용 - 30일 기준<strong><b>0</b>원</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer-wrapper">
            <div class="button-wrapper">
                <NormalLink
                    :type="'NORMAL'"
                    :size="'LARGE'"
                    :title="'이전으로'"
                    :bgColor="'#DFDFDF'"
                    :borderColor="'#DFDFDF'"
                    :fontColor="'#6B707E'"
                />
                <NormalButton
                    :type="'NORMAL'"
                    :size="'LARGE'"
                    :title="'확인'"
                    :bgColor="'#366ECC'"
                    :borderColor="'#366ECC'"
                    :fontColor="'#ffffff'"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// 지역 CheckBox Group Info
const areaCheckBoxGroupInfo = ref({
    selectGroup: [],
    info: [
        '서울',
        '경기',
        '인천',
        '대전',
        '대구',
        '부산',
        '광주',
        '울산',
        '세종',
        '강원',
        '충북',
        '충남',
        '전북',
        '전남',
        '경북',
        '경남',
        '제주',
    ],
})
// 상픔 CheckBox Group Info
const productCheckBoxGroupInfo = ref({
    selectGroup: [],
    info: [
        '직장인',
        '무직자',
        '여성',
        '비상금',
        '모바일',
        '소액',
        '무방문',
        '자영업',
        '당일',
        '사업자',
        '전문직',
        '저신용',
        '신용',
        '추가',
        '자동차',
        '부동산',
        '생활비',
        '온라인',
        '일용직',
        '프리랜서',
        '전당포',
        '비대면',
        '주부',
        '회생파산',
        '대환',
        '기타',
    ],
})
</script>

<style lang="scss">
div.signup-form-section {
    section.step-status-wrapper {
        @include r(margin-top, 20, 30, 30, 30, 30);
    }
    section.form-wrapper {
        div.form-section {
            border-radius: 16px;
            border: 1px solid #dfe3ea;
            @include r(padding-top, 24, 40, 40, 40, 40);
            @include r(padding-bottom, 24, 40, 40, 40, 40);
            @include r(padding-left, 24, 40, 40, 40, 40);
            @include r(padding-right, 24, 40, 40, 40, 40);
            @include r(margin-top, 20, 20, 20, 20, 20);
            div.form-item-align-box {
                display: flex;
                &:first-child {
                    margin-top: 0;
                }
                @include r(margin-top, 30, 30, 30, 30, 30);
                @include r(gap, 30, 30, 40, 40, 40);
                @include respond(mobile-plus) {
                    flex-direction: column;
                }
                @include respond(mobile) {
                    flex-direction: column;
                }
                div.form-item {
                    flex: 1 1 0;
                    p.form-item-title {
                        font-weight: 700;
                        color: $color-black;
                        &.large-gap {
                            @include r(margin-bottom, 20, 20, 20, 20, 20);
                        }
                        @include r(font-size, 16, 16, 16, 16, 16);
                        @include r(margin-bottom, 14, 14, 14, 14, 14);
                    }
                    div.input-align-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 10, 10, 10);
                        button {
                            flex-shrink: 0;
                        }
                    }
                    p.form-item-sub-title {
                        font-weight: 500;
                        color: $color-dark-gray;
                        @include r(font-size, 12, 12, 13, 13, 13);
                        @include r(margin-top, 10, 10, 10, 10, 10);
                    }
                    div.form-item-sub-title-align-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 6, 6, 6, 6, 6);
                        @include r(margin-top, 10, 10, 10, 10, 10);
                        div.img-box {
                            @include r(width, 14, 14, 14, 14, 14);
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                        p {
                            font-weight: 500;
                            color: $color-dark-gray;
                            @include r(font-size, 12, 12, 13, 13, 13);
                        }
                    }
                    div.sub-title-box {
                        display: flex;
                        align-items: flex-start;
                        @include r(margin-bottom, 20, 20, 20, 20, 20);
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
                            font-weight: 500;
                            color: $color-black;
                            line-height: 1.2;
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                    }
                    div.checkbox-wrapper {
                        border-radius: 16px;
                        background-color: $color-light-gray;
                        @include r(padding-top, 20, 24, 24, 24, 24);
                        @include r(padding-bottom, 20, 24, 24, 24, 24);
                        @include r(padding-left, 20, 24, 24, 24, 24);
                        @include r(padding-right, 20, 24, 24, 24, 24);
                        div.checkbox-item {
                            &.is-area {
                                @include r(margin-bottom, 24, 24, 24, 24, 24);
                                label.el-checkbox-button {
                                    @include respond(pc) {
                                        flex: 0 0 calc((100% - (0.5rem * 16)) / 17);
                                    }
                                    @include respond(laptop) {
                                        flex: 0 0 calc((100% - (0.5rem * 16)) / 17);
                                    }
                                    @include respond(tablet) {
                                        flex: 0 0 calc((100% - (0.5rem * 8)) / 9);
                                    }
                                    @include respond(mobile-plus) {
                                        flex: 0 0 calc((100% - (0.5rem * 5)) / 6);
                                    }
                                    @include respond(mobile) {
                                        flex: 0 0 calc((100% - (0.5rem * 5)) / 6);
                                    }
                                }
                            }
                            &.is-product {
                                label.el-checkbox-button {
                                    @include respond(pc) {
                                        flex: 0 0 calc((100% - (0.5rem * 12)) / 13);
                                    }
                                    @include respond(laptop) {
                                        flex: 0 0 calc((100% - (0.5rem * 12)) / 13);
                                    }
                                    @include respond(tablet) {
                                        flex: 0 0 calc((100% - (0.5rem * 8)) / 9);
                                    }
                                    @include respond(mobile-plus) {
                                        flex: 0 0 calc((100% - (0.5rem * 5)) / 6);
                                    }
                                    @include respond(mobile) {
                                        flex: 0 0 calc((100% - (0.5rem * 5)) / 6);
                                    }
                                }
                            }
                            p {
                                font-weight: 700;
                                color: $color-black;
                                @include r(font-size, 16, 16, 16, 16, 16);
                                @include r(margin-bottom, 20, 20, 20, 20, 20);
                            }
                            div.el-checkbox-group {
                                display: flex;
                                flex-wrap: wrap;
                                @include r(gap, 8, 8, 8, 8, 8);
                                label.el-checkbox-button {
                                    &.is-checked {
                                        span.el-checkbox-button__inner {
                                            border: 1px solid $color-primary;
                                            color: $color-primary;
                                        }
                                    }
                                    span.el-checkbox-button__inner {
                                        width: 100%;
                                        border: 1px solid #ffffff;
                                        background-color: #ffffff;
                                        border-radius: 8px !important;
                                        color: #727585;
                                        font-weight: 600 !important;
                                        @include r(font-size, 13, 14, 14, 14, 14);
                                        @include r(padding-top, 8, 8, 8, 8, 8);
                                        @include r(padding-bottom, 8, 8, 8, 8, 8);
                                        @include r(padding-left, 0, 0, 0, 0, 0);
                                        @include r(padding-right, 0, 0, 0, 0, 0);
                                    }
                                }
                            }
                        }
                    }
                    p.last-price-title {
                        display: flex;
                        justify-content: end;
                        font-weight: 500;
                        color: $color-black;
                        @include r(padding-top, 17, 17, 17, 17, 9);
                        @include r(padding-bottom, 17, 17, 17, 17, 9);
                        @include r(margin-top, 24, 24, 24, 24, 24);
                        @include r(font-size, 14, 14, 14, 14, 14);
                        strong {
                            font-weight: 700;
                            color: $color-black;
                            @include r(margin-left, 10, 10, 10, 10, 10);
                            @include r(font-size, 16, 16, 16, 16, 16);
                            b {
                                color: $color-primary;
                            }
                        }
                    }
                }
            }
        }
        div.form-title-align-box {
            display: flex;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
            @include r(margin-top, 40, 40, 40, 40, 40);
            div.img-box {
                @include r(width, 17, 17, 17, 17, 17);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            p {
                font-weight: 700;
                color: $color-black;
                @include r(font-size, 16, 16, 16, 16, 16);
            }
        }
    }
    section.footer-wrapper {
        display: flex;
        justify-content: flex-end;
        @include r(margin-top, 20, 20, 20, 20, 20);
        div.button-wrapper {
            display: flex;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
        }
    }
}
</style>
