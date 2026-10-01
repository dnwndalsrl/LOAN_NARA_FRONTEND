<template>
    <div class="support-ad-inquiry-content-type-three">
        <div class="ad-image-wrapper">
            <div class="img-box">
                <picture>
                    <!-- Mobile -->
                    <source
                        media="(max-width: 480px)"
                        srcset="/images/support/ad-inquiry/type-three/ad_mobile.png"
                    />

                    <!-- Mobile Plus -->
                    <source
                        media="(max-width: 768px)"
                        srcset="/images/support/ad-inquiry/type-three/ad_mobile_plus.png"
                    />

                    <!-- Tablet -->
                    <source
                        media="(max-width: 992px)"
                        srcset="/images/support/ad-inquiry/type-three/ad_tablet.png"
                    />

                    <!-- Laptop -->
                    <source
                        media="(max-width: 1200px)"
                        srcset="/images/support/ad-inquiry/type-three/ad_laptop.png"
                    />

                    <!-- PC 기본 이미지 -->
                    <img
                        src="/images/support/ad-inquiry/type-three/ad_pc.png"
                        alt="대출나라 광고 안내"
                    />
                </picture>
            </div>
        </div>
        <div class="laptop-image-wrapper">
            <h3>최고의 광고 효율을 자랑하는 대출나라</h3>
            <p>
                같은 광고비를 내더라도 대출나라에서는 엄청난 광고효과를 기대할 수 있습니다.<br />
                대출나라는 대출이 필요한 고객들을 목표로 한 사이트로서 확실한 타깃 마케팅이
                가능하며,<br />
                불필요한 CPC 비용을 줄일 수 있어 저렴한 비용으로 효율적인 광고효과를 누릴 수
                있습니다.
            </p>
            <div class="img-box">
                <img src="/images/support/ad-inquiry/type-three/laptop.png" />
            </div>
        </div>
        <div class="company-info-wrapper">
            <ul class="info-list-box">
                <li v-for="(item, index) in companyInfo" :key="index" class="list-item">
                    <p class="count-title">{{ item.count }}</p>
                    <p class="main-title">{{ item.title }}</p>
                    <p class="content-title">{{ item.contents }}</p>
                </li>
            </ul>
            <div class="info-middle-box">
                <p class="main-title">콜 수로 나타나는 즉각적인 반응</p>
                <p class="content-title">
                    대출나라에서는 저렴한 비용으로 엄청난 광고효과를 누릴 수 있습니다.<br />
                    달라지는 콜 수로 광고효과를 직접 체감해보세요!
                </p>
            </div>
            <div class="info-bottom-box">
                <p class="main-title">2014년 대한민국 최초 대출중개플랫폼 시작</p>
                <ul class="info-bottom-list-box">
                    <li v-for="(item, index) in companyBottomInfo" :key="index" class="list-item">
                        <p class="title">{{ item.title }}</p>
                        <p class="contents">{{ item.contents }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// =================================================== State
const companyInfo = [
    {
        id: 1,
        count: '39,372,663',
        title: '사이트 누적 방문자 수',
        contents: '일일중복 ip 제외 / 2025.12 기준',
    },
    {
        id: 2,
        count: '1,118,612',
        title: '실시간 대출 누적 DB 수',
        contents: '2025.12 기준',
    },
    {
        id: 1,
        count: '97%',
        title: '대출나라 광고 연장률',
        contents: '2025.12 기준',
    },
]
const companyBottomInfo = [
    {
        id: 1,
        title: '11년 연속 방문자 수',
        contents: '업계 1위',
    },
    {
        id: 2,
        title: '11년 연속 실시간 대출문의',
        contents: '업계 1위',
    },
    {
        id: 1,
        title: '11년 연속 대출업체 등록 수',
        contents: '업계 1위',
    },
]
// =================================================== Computed
// =================================================== Function
</script>

<style lang="scss">
div.support-ad-inquiry-content-type-three {
    @include r(margin-top, 40, 40, 40, 40, 40);
    div.ad-image-wrapper {
        border: 1px solid $color-gray-200;
        border-radius: 16px;
        @include r(padding-top, 24, 40, 40, 40, 40);
        @include r(padding-bottom, 24, 40, 40, 40, 40);
        @include r(padding-left, 24, 40, 40, 40, 40);
        @include r(padding-right, 24, 40, 40, 40, 40);
        div.img-box {
            picture {
                display: block;
                width: 100%;
                height: auto;
            }
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    div.laptop-image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include r(margin-top, 60, 60, 60, 60, 60);
        h3 {
            font-weight: $font-weight-bold;
            color: $color-gray-900;
            @include r(font-size, 24, 24, 24, 24, 24);
            @include r(margin-bottom, 24, 24, 24, 24, 24);
        }
        p {
            text-align: center;
            font-weight: $font-weight-regular;
            color: $color-gray-900;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(line-height, 20, 20, 20, 20, 20);
            @include r(margin-bottom, 50, 50, 50, 50, 50);
        }
        div.img-box {
            @include respond(pc) {
                width: 34.375rem;
            }
            @include respond(laptop) {
                width: 34.375rem;
            }
            @include respond(tablet) {
                width: 34.375rem;
            }
            @include respond(mobile-plus) {
                width: 90%;
            }
            @include respond(mobile) {
                width: 100%;
            }
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    div.company-info-wrapper {
        display: flex;
        flex-direction: column;
        @include r(margin-top, 60, 60, 60, 60, 60);
        @include r(gap, 20, 20, 20, 20, 20);
        ul.info-list-box {
            display: flex;
            align-items: center;
            @include r(gap, 20, 20, 20, 20, 20);
            @include respond(mobile-plus) {
                flex-direction: column;
            }
            @include respond(mobile) {
                flex-direction: column;
            }
            li.list-item {
                width: 100%;
                border: 1px solid $color-gray-200;
                border-radius: 16px;
                @include r(padding-top, 40, 40, 40, 40, 40);
                @include r(padding-bottom, 40, 40, 40, 40, 40);
                p.count-title {
                    text-align: center;
                    font-weight: $font-weight-bold;
                    color: $color-primary-500;
                    @include r(margin-bottom, 24, 24, 24, 24, 24);
                    @include r(font-size, 32, 32, 32, 32, 32);
                }
                p.main-title {
                    text-align: center;
                    font-weight: $font-weight-medium;
                    color: $color-gray-900;
                    @include r(margin-bottom, 6, 6, 6, 6, 6);
                    @include r(font-size, 16, 16, 16, 16, 16);
                }
                p.content-title {
                    text-align: center;
                    font-weight: $font-weight-medium;
                    color: $color-gray-500;
                    @include r(font-size, 13, 13, 13, 13, 13);
                }
            }
        }
        div.info-middle-box {
            background-color: $color-gray-100;
            border-radius: 16px;
            @include r(padding-top, 40, 40, 40, 40, 40);
            @include r(padding-bottom, 40, 40, 40, 40, 40);
            p.main-title {
                text-align: center;
                font-weight: $font-weight-bold;
                color: $color-gray-900;
                @include r(font-size, 20, 24, 24, 24, 24);
                @include r(margin-bottom, 24, 24, 24, 24, 24);
            }
            p.content-title {
                text-align: center;
                font-weight: $font-weight-regular;
                color: $color-gray-900;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(line-height, 20, 20, 20, 20, 20);
            }
        }
        div.info-bottom-box {
            background-color: $color-white;
            border: 1px solid $color-gray-200;
            border-radius: 16px;
            @include r(padding-top, 40, 40, 40, 40, 40);
            @include r(padding-bottom, 40, 40, 40, 40, 40);
            @include r(padding-left, 40, 40, 40, 40, 40);
            @include r(padding-right, 40, 40, 40, 40, 40);
            p.main-title {
                text-align: center;
                font-weight: $font-weight-bold;
                color: $color-gray-900;
                @include r(font-size, 20, 24, 24, 24, 24);
                @include r(margin-bottom, 32, 32, 32, 32, 32);
            }
            ul.info-bottom-list-box {
                display: flex;
                align-items: center;
                @include r(gap, 20, 20, 20, 20, 20);
                @include respond(tablet) {
                    flex-direction: column;
                }
                @include respond(mobile-plus) {
                    flex-direction: column;
                }
                @include respond(mobile) {
                    flex-direction: column;
                }
                li.list-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    border-radius: 8px;
                    background-color: $color-gray-100;
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 16, 16, 16, 16, 16);
                    p.title {
                        font-weight: $font-weight-medium;
                        color: $color-gray-900;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    p.contents {
                        font-weight: $font-weight-bold;
                        color: $color-primary-500;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
        }
    }
}
</style>
