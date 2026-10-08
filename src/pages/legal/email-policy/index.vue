<template>
    <div class="legal-email-policy-section">
        <div class="align-box">
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="contents-wrapper-box">
                        <div class="img-box">
                            <img src="/images/common/email_check.png" alt="이메일 무단수집 거부" />
                        </div>
                        <p>
                            본 대출나라 홈페이지에 게시된 이메일 주소는 전자우편 또는 수집 프로그램
                            등 그 밖의 기술적인 장치를 이용하여<br /><strong
                                >무단으로 수집되는 것을 거부하며,</strong
                            >
                            이를 위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.legal-email-policy-section {
    div.align-box {
        width: 100%;
        section.page-contents-wrapper {
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                div.contents-wrapper-box {
                    display: flex;
                    align-items: center;
                    background-color: $color-white;
                    border: 1px solid $color-gray-200;
                    border-radius: 16px;
                    @include r(gap, 40, 40, 40, 64, 64);
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);
                    @include r(padding-left, 40, 40, 40, 40, 40);
                    @include r(padding-right, 40, 40, 40, 40, 40);
                    @include respond(tablet) {
                        flex-direction: column;
                    }
                    @include respond(mobile-plus) {
                        flex-direction: column;
                    }
                    @include respond(mobile) {
                        flex-direction: column;
                    }
                    div.img-box {
                        @include r(width, 100, 100, 100, 100, 100);
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
                        @include r(line-height, 20, 20, 20, 20, 20);
                        @include respond(tablet) {
                            text-align: center;
                        }
                        @include respond(mobile-plus) {
                            text-align: center;
                        }
                        @include respond(mobile) {
                            text-align: center;
                        }
                        strong {
                            color: $color-error-500;
                        }
                    }
                }
            }
        }
    }
}
</style>
