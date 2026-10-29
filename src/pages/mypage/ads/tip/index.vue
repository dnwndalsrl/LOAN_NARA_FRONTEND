<template>
    <div class="mypage-ads-tip-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="guide-wrapper-box">
                        <div v-for="(item, index) in guideInfo" :key="index" class="guide-item">
                            <div class="left-box">
                                <p class="index-title">0{{ item.id }}</p>
                                <p class="main-title">{{ item.title }}</p>
                                <p class="content" v-html="item.content" />
                            </div>
                            <div class="right-box">
                                <div class="img-box">
                                    <img :src="item.imageUrl" :alt="item.title" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="warning-box">
                        <div class="img-box">
                            <img src="/images/common/warning_circle_blue.png" alt="주의사항" />
                        </div>
                        <p>
                            위 서비스는 PC, 모바일 호환되어 로그인 후
                            <strong>마이페이지</strong>에서 적용 가능합니다.<br />줄광고 점프 사용
                            방법은 <strong>로그인 > 마이페이지 > 업체이용안내</strong>
                            페이지를 참고 바랍니다.
                        </p>
                    </div>
                    <div class="footer-info-wrapper">
                        <p class="title">TIP 활용에도 콜량이 적다면?</p>
                        <p class="content">
                            위 콜량 증가 TIP 활용함에도 콜량이 적은 업체는 대출나라 고객센터로 연락
                            주시면 데이터 통계 분석을 통해 원인을 분석하여 자세한 컨설팅
                            도와드리겠습니다.
                        </p>
                        <div class="phone-wrapper-box">
                            <div class="phone-img-box">
                                <div class="img-box">
                                    <img src="/images/common/tell_phone_gray.png" alt="대표번호" />
                                </div>
                                <p>대표번호</p>
                            </div>
                            <p class="phone-title">1599-9687</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const guideInfo = [
    {
        id: 1,
        title: '줄광고 점프',
        content: `일마다 무료로 주어지는 점프 기능을 꾸준히 사용하여 광고 노출을 증가시켜보세요!<br/>점심시간 전후 또는 퇴근시간 전 홈페이지 유입이 활발한 시간대에 최신 글 등록 유지가 중요합니다.`,
        imageUrl: '/images/mypage/ads/tip/mypage_ads_tip1.png',
    },
    {
        id: 2,
        title: '배너광고 등록',
        content: `배너 문구는 차별화된 내용으로 짧고 간결하게 작성하는 것이 주목도가 높으며,<br/>
광고 효과가 다소 미비한 경우 베스트 뱃지(유료 상품)을 추가하여 광고 주목도를 높이는 방법과<br/>
매 주 업데이트 되는 통계 수치를 참고하여 조회수 높은 상품으로(무료) 변경하시면 광고 효과를 더욱 높일 수 있습니다.`,
        imageUrl: '/images/mypage/ads/tip/mypage_ads_tip2.png',
    },
]
</script>

<style lang="scss">
div.mypage-ads-tip-section {
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
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                div.guide-wrapper-box {
                    display: flex;
                    flex-direction: column;
                    @include r(gap, 40, 60, 60, 60, 60);
                    div.guide-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-bottom: 1px solid $color-gray-200;
                        @include r(gap, 60, 60, 60, 60, 60);
                        @include r(padding-bottom, 40, 60, 60, 60, 60);
                        div.left-box {
                            p.index-title {
                                color: $color-primary-500;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 14, 14, 14, 14, 14);
                                @include r(margin-bottom, 6, 6, 6, 6, 6);
                            }
                            p.main-title {
                                color: $color-gray-900;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 24, 24, 24, 24, 24);
                                @include r(margin-bottom, 24, 24, 24, 24, 24);
                            }
                            p.content {
                                color: $color-gray-900;
                                font-weight: $font-weight-regular;
                                line-height: 1.2;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                        div.right-box {
                            @include respond(mobile-plus) {
                                display: none;
                            }
                            @include respond(mobile) {
                                display: none;
                            }
                            div.img-box {
                                @include r(width, 120, 120, 120, 120, 120);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
                div.warning-box {
                    display: flex;
                    @include r(gap, 6, 6, 6, 6, 6);
                    @include r(margin-top, 24, 24, 24, 24, 24);
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
                        strong {
                            font-weight: $font-weight-semi-bold;
                            color: $color-primary-500;
                        }
                    }
                }
                div.footer-info-wrapper {
                    display: flex;
                    flex-direction: column;
                    border-radius: 16px;
                    background-color: $color-gray-100;
                    @include r(margin-top, 40, 60, 60, 60, 60);
                    @include r(gap, 24, 24, 24, 24, 24);
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);
                    @include r(padding-left, 40, 40, 40, 40, 40);
                    @include r(padding-right, 40, 40, 40, 40, 40);
                    p.title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        line-height: 1.2;
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
                        width: fit-content;
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
</style>
