<template>
    <div class="mypage-resource-detail-section">
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
                    <div class="detail-box">
                        <div class="detail-header">
                            <h2>11/13(목)요일 서버점검 작업 안내</h2>
                            <div class="detail-item-wrapper">
                                <div class="detail-item">
                                    <div class="item-header">
                                        <p>등록일</p>
                                    </div>
                                    <div class="item-content">
                                        <p>2025.11.19</p>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <div class="item-header">
                                        <p>조회수</p>
                                    </div>
                                    <div class="item-content">
                                        <p>299</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detail-body"></div>
                        <div class="detail-footer">
                            <div class="footer-action-item next-btn">
                                <div class="left-box">
                                    <NuxtLink>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/up_arrow_gray.png"
                                                alt="다음"
                                            />
                                        </div>
                                        <p>다음</p>
                                    </NuxtLink>
                                </div>
                                <div class="right-box">
                                    <NuxtLink>
                                        <p>(필독) 스팸전화 피해 주의 및 대응 안내</p>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="footer-action-item prev-btn">
                                <div class="left-box">
                                    <NuxtLink>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/down_arrow_light_gray.png"
                                                alt="이전"
                                            />
                                        </div>
                                        <p>이전</p>
                                    </NuxtLink>
                                </div>
                                <div class="right-box">
                                    <NuxtLink>
                                        <p>(필독) 스팸전화 피해 주의 및 대응 안내</p>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.mypage-resource-detail-section {
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
                div.detail-box {
                    border-top: 1px solid $color-gray-200;
                    div.detail-header {
                        h2 {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 18, 18, 18, 18, 18);
                            @include r(padding-top, 24, 24, 24, 24, 24);
                            @include r(padding-bottom, 24, 24, 24, 24, 24);
                            @include r(padding-left, 24, 24, 24, 24, 24);
                        }
                        div.detail-item-wrapper {
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            div.detail-item {
                                display: flex;
                                align-items: center;
                                flex: 1 1 0;
                                border-top: 1px solid $color-gray-200;
                                border-bottom: 1px solid $color-gray-200;
                                @include respond(mobile-plus) {
                                    flex: 0 0 50%;
                                    &:first-child {
                                        flex: 0 0 100%;
                                        border-bottom: none;
                                    }
                                }
                                @include respond(mobile) {
                                    flex: 0 0 50%;
                                    &:first-child {
                                        flex: 0 0 100%;
                                        border-bottom: none;
                                    }
                                }
                                div.item-header {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: $color-gray-100;
                                    @include r(padding-top, 16, 16, 16, 16, 16);
                                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                                    @include r(padding-left, 16, 24, 24, 24, 24);
                                    @include r(padding-right, 16, 24, 24, 24, 24);
                                    p {
                                        font-weight: $font-weight-bold;
                                        color: $color-gray-900;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                                div.item-content {
                                    @include r(padding-top, 16, 16, 16, 16, 16);
                                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                                    @include r(padding-left, 16, 24, 24, 24, 24);
                                    @include r(padding-right, 16, 24, 24, 24, 24);
                                    p {
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-900;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                            }
                        }
                    }
                    div.detail-body {
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 40, 40, 40, 40, 40);
                        @include r(padding-left, 16, 24, 24, 24, 24);
                        @include r(padding-right, 16, 24, 24, 24, 24);
                        p {
                            font-weight: $font-weight-regular;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                        }
                    }
                    div.detail-footer {
                        border-top: 1px solid $color-gray-200;
                        div.footer-action-item {
                            display: flex;
                            align-items: center;
                            border-bottom: 1px solid $color-gray-200;
                            div.left-box {
                                background-color: $color-gray-100;
                                @include r(padding-top, 16, 16, 16, 16, 16);
                                @include r(padding-bottom, 16, 16, 16, 16, 16);
                                @include r(padding-left, 16, 24, 24, 24, 24);
                                @include r(padding-right, 16, 24, 24, 24, 24);
                                a {
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    @include r(gap, 10, 10, 10, 10, 10);
                                    div.img-box {
                                        flex-shrink: 0;
                                        @include r(width, 8, 8, 8, 8, 8);
                                        @include r(height, 4, 4, 4, 4, 4);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                    p {
                                        font-weight: $font-weight-bold;
                                        color: $color-gray-900;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                            }
                            div.right-box {
                                @include r(padding-top, 16, 16, 16, 16, 16);
                                @include r(padding-bottom, 16, 16, 16, 16, 16);
                                @include r(padding-left, 16, 24, 24, 24, 24);
                                @include r(padding-right, 16, 24, 24, 24, 24);
                                a {
                                    cursor: pointer;
                                    p {
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-900;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
