<template>
    <div class="mypage-ads-transfer-section">
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
                    <div class="border-form-box">
                        <p class="main-title">신청인</p>
                        <div class="form-wrapper">
                            <div class="form-item align-row">
                                <p class="title">상호명</p>
                                <p class="content">대출나라대부중개</p>
                            </div>
                            <div class="form-item align-row">
                                <p class="title">대표자 이름</p>
                                <p class="content">김대출</p>
                            </div>
                        </div>
                    </div>
                    <div class="border-form-box">
                        <p class="main-title">받는이</p>
                        <div class="form-wrapper">
                            <div class="form-item align-col">
                                <p class="title">상호명</p>
                                <NormalSelectBox
                                    :options="[]"
                                    :size="'SMALL'"
                                    :placeholder="'상호명을 선택해 주세요.'"
                                />
                            </div>
                            <div class="form-item align-col">
                                <p class="title">대표자 이름</p>
                                <NormalInput
                                    :size="'SMALL'"
                                    :placeholder="'대표자 이름을 입력해 주세요.'"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="border-form-box">
                        <div class="form-wrapper">
                            <div class="form-item align-col">
                                <p class="title">배너 분류</p>
                                <div class="checkbox-wrapper">
                                    <el-checkbox>메인배너</el-checkbox>
                                    <el-checkbox>프리미엄배너</el-checkbox>
                                </div>
                            </div>
                            <div class="form-item align-col">
                                <p class="title">신청인 소유자(대표자) 본인인증</p>
                                <NormalButton
                                    :title="'인증번호 받기'"
                                    :bg-color="'white'"
                                    :border-color="'primary-500'"
                                    :font-color="'primary-500'"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="color-checkbox-wrapper">
                        <el-checkbox
                            >이용 중인 메인 및 프리미엄 배너 광고를 다른 상호명으로 이전하는 것에
                            동의합니다.</el-checkbox
                        >
                    </div>
                    <div class="button-wrapper">
                        <NormalButton
                            :title="'이전 신청'"
                            :bg-color="'primary-500'"
                            :border-color="'primary-500'"
                            :font-color="'white'"
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
// =================================================== State

// ========================================= Function
</script>

<style lang="scss">
div.mypage-ads-transfer-section {
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
                @include r(gap, 20, 20, 20, 20, 20);
                div.border-form-box {
                    border-radius: 16px;
                    border: 1px solid $color-gray-200;
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);
                    @include r(padding-left, 40, 40, 40, 40, 40);
                    @include r(padding-right, 40, 40, 40, 40, 40);
                    p.main-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 22, 22, 22, 22, 22);
                        @include r(margin-bottom, 30, 30, 30, 30, 30);
                    }
                    div.form-wrapper {
                        display: flex;
                        @include r(gap, 30, 30, 40, 40, 40);
                        @include respond(mobile-plus) {
                            flex-direction: column;
                        }
                        @include respond(mobile) {
                            flex-direction: column;
                        }
                        div.form-item {
                            flex: 1 1 0;
                            display: flex;
                            &.align-row {
                                align-items: center;
                                @include r(gap, 24, 24, 24, 24, 24);
                            }
                            &.align-col {
                                flex-direction: column;
                                @include r(gap, 14, 14, 14, 14, 14);
                            }
                            p.title {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                @include r(font-size, 16, 16, 16, 16, 16);
                                @include r(line-height, 20, 20, 20, 20, 20);
                            }
                            p.content {
                                font-weight: $font-weight-regular;
                                color: $color-gray-900;
                                @include r(font-size, 16, 16, 16, 16, 16);
                                @include r(line-height, 20, 20, 20, 20, 20);
                            }
                            div.checkbox-wrapper {
                                display: flex;
                                align-items: center;
                                @include r(gap, 30, 30, 30, 30, 30);
                                @include r(padding-top, 8, 8, 8, 8, 8);
                                @include r(padding-bottom, 8, 8, 8, 8, 8);
                                label.el-checkbox {
                                    display: flex;
                                    height: auto;
                                    span.el-checkbox__label {
                                        font-weight: $font-weight-medium;
                                        color: $color-gray-900;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                            }
                        }
                    }
                }
                div.color-checkbox-wrapper {
                    border-radius: 16px;
                    background-color: $color-gray-100;
                    @include r(padding-top, 15, 24, 24, 24, 24);
                    @include r(padding-bottom, 15, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    label.el-checkbox {
                        display: flex;
                        height: auto;
                        white-space: normal;
                        span.el-checkbox__label {
                            font-weight: $font-weight-medium;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                }
                div.button-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: end;
                }
            }
        }
    }
}
</style>
