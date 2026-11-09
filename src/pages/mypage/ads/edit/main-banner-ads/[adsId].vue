<template>
    <div class="mypage-ads-edit-main-banner-ads-detail-section">
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
                                        src="/images/mypage/ads/edit/apply_temp_img.png"
                                        alt="배너 문구 예시"
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
                            />
                            <NormalButton
                                :title="'수정신청'"
                                :bg-color="'secondary-500'"
                                :border-color="'secondary-500'"
                                :font-color="'white'"
                            />
                        </div>
                        <div class="statistics-wrapper">
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
                                        <strong>지역별 업체검색</strong>에서
                                        <strong>경기</strong>지역이 가장 조회수가 많았어요!
                                    </p>
                                </div>
                                <div class="chart-wrapper-box">
                                    <p class="warning-title is-bottom">
                                        * 최근 7일 기준 데이터입니다.
                                    </p>
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
                                    <p class="warning-title is-bottom">
                                        * 최근 7일 기준 데이터입니다.
                                    </p>
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
                                    <img
                                        src="/images/common/warning_circle_blue.png"
                                        alt="주의사항"
                                    />
                                </div>
                                <p>
                                    데이터는 실시간으로 업데이트 되며, 해당 항목은 당일 기준으로
                                    최근 7일간의 통계만 제공합니다.<br />통계 리포트를 참고하여 광고
                                    효과를 높여보세요!
                                </p>
                            </div>
                        </div>
                    </div>
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
// ========================================= Function
</script>

<style lang="scss">
div.mypage-ads-edit-main-banner-ads-detail-section {
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
                    div.button-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: end;
                        @include r(margin-top, 20, 20, 20, 20, 20);
                        @include r(gap, 10, 10, 10, 10, 10);
                    }
                    div.statistics-wrapper {
                        @include r(margin-top, 60, 60, 60, 60, 60);
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
}
</style>
