<template>
    <footer class="loan-nara-footer-container">
        <div class="partner-wrapper">
            <div class="align-box">
                <!-- PC/LABTOP -->
                <div class="partner-pc-list">
                    <ul class="partner-list">
                        <li
                            v-for="(partnerItem, partnerIndex) in partnerInfo"
                            :key="partnerItem.id"
                            class="partner-item"
                        >
                            <a :href="partnerItem.link" target="_blank">
                                <div class="img-box">
                                    <img
                                        :src="partnerItem.image"
                                        :alt="partnerItem.id"
                                        :class="`${partnerItem.size}`"
                                    />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- TABLET/MOBILE -->
                <div class="partner-mobile-list">
                    <Vue3Marquee :duration="20">
                        <ul class="partner-list is-marquee">
                            <li
                                v-for="(partnerItem, partnerIndex) in partnerInfo"
                                :key="partnerItem.id"
                                class="partner-item"
                                :class="`${partnerItem.size}`"
                            >
                                <a
                                    :href="partnerItem.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div class="img-box">
                                        <img
                                            :src="partnerItem.image"
                                            :alt="partnerItem.id"
                                            :class="`${partnerItem.size}`"
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </Vue3Marquee>
                </div>
            </div>
        </div>
        <div class="terms-wrapper">
            <div class="align-box">
                <!-- PC/LABTOP -->
                <div class="terms-pc-nav">
                    <ul class="left-area">
                        <li
                            v-for="(termItem, termIndex) in termsInfo"
                            :key="termItem.id"
                            class="term-item"
                        >
                            <NuxtLink
                                :to="termItem.link"
                                :class="termItem.id === '개인정보처리방침' ? 'is-black' : ''"
                                >{{ termItem.id }}</NuxtLink
                            >
                        </li>
                    </ul>
                    <div class="right-area">
                        <a href="/">채무자대리인 신청</a>
                    </div>
                </div>
                <!-- TABLET/MOBILE -->
                <div class="terms-mobile-nav">
                    <Swiper
                        :slides-per-view="'auto'"
                        :space-between="48"
                        :free-mode="true"
                        :modules="[FreeMode]"
                        class="terms-nav-swiper"
                    >
                        <SwiperSlide
                            v-for="(termItem, termIndex) in termsInfo"
                            :key="termItem.id"
                            class="terms-nav-slide"
                        >
                            <NuxtLink :to="termItem.link" class="terms-item">
                                {{ termItem.id }}
                            </NuxtLink>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/" class="type-btn">채무자대리인 신청</a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        <div class="company-info-wrapper">
            <div class="align-box">
                <div class="company-info-align-box">
                    <div class="company-info-box">
                        <address class="contact-info">
                            <p class="phone-title">1599-9687</p>
                            <p class="business-hours-title">
                                평일 <time>10:00</time> - <time>17:00</time> (점심시간 12:30 -
                                13:30)
                            </p>
                            <p class="holiday-info">주말 및 공휴일 휴무</p>
                        </address>
                        <div class="account-info">
                            <div class="account-item">
                                <p class="title">계좌정보</p>
                                <p class="contents"><strong>KB국민은행 </strong>92470-2470-61</p>
                            </div>
                            <div class="account-item">
                                <p class="title">예금주</p>
                                <p class="contents">주식회사 대출나라대부중개</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-guide-box is-padding">
                        <div class="title-box">
                            <h2>대출 중개 플랫폼, 대출나라</h2>
                            <div class="modal-btn">
                                <div class="img-box">
                                    <img src="/images/common/warning.png" alt="주의사항" />
                                </div>
                                <p>주의사항</p>
                            </div>
                        </div>
                        <div class="contents-box">
                            <p>
                                대출나라는 광고 플랫폼만 제공할 뿐 직접적인 대출 및 중개를 하지
                                않으며 금융위원회, 지자체 정식 대부업(중개업 포함) 등록 업체만 광고
                                등록 합니다. 대출나라에 기재된 광고 내용은 대부(중개업) 업체가
                                제공하는 정보로서 이를 신뢰하여 취한 조치에 대하여 어떠한 책임을
                                지지 않습니다.<br />
                                <span
                                    >중개수수료를 요구하거나 받는 것은 불법입니다. 과도한 빛은
                                    당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 신용등급 또는
                                    개인신용평점 하락으로 다른 금융거래가 제약받을 수
                                    있습니다.</span
                                >
                            </p>
                        </div>
                    </div>
                    <div class="service-guide-box">
                        <div class="title-box">
                            <h2>금리 및 상환안내</h2>
                            <a href="/" class="link-btn">
                                <div class="img-box">
                                    <img src="/images/footer/calculator.png" alt="이자계산기" />
                                </div>
                                <p>이자계산기</p>
                            </a>
                        </div>
                        <div class="contents-box">
                            <p>
                                금리 연20% 이내 (연체이자율 포함 20% 이내)(단, 2021. 7. 7부터 체결,
                                갱신, 연장되는 계약에 한함), 취급수수료 없음, 중도상환 수수료 없음,
                                중개수수료 없음,추가비용 없음.<br />
                                상환기간 : 12개월 ~ 60개월 / 총 대출 비용 예시 : 100만원을 12개월
                                기간 동안 최대 금리 연20% 적용하여 원리금균등상환방법으로 이용하는
                                경우 총 상환금액 1,111,614원 (단, 대출상품 및 상환방법 등 대출계약
                                내용에 따라 달라질 수 있습니다.) 채무의 조기상환수수료율 등
                                조기상환조건 없음.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="legal-info-wrapper">
            <div class="align-box">
                <address class="legal-info-box">
                    <p>사이트명 : 대출나라대부중개 l 대표자 : 신준식 l 팩스번호: 02-543-4569</p>
                    <p>
                        대부중개업 상호명 : 주식회사 대출나라대부중개 l 등록번호 :
                        2025-서울강남-0111(대부중개업)
                    </p>
                    <p>
                        주소 : 서울특별시 강남구 선릉로 655, 16층 (논현동, 디에이원타워) l 등록기관
                        : 서울 강남구 지역경제과 02-3423-5522
                    </p>
                    <p>
                        사업자정보 : 주식회사 대출나라대부중개 439-81-03602 l 통신판매업신고번호 :
                        제2025-서울강남-03876호 l 개인정보책임자 : 신준식
                    </p>
                    <p>ⓒ 2014. 주식회사 대출나라대부중개Inc. All rights reserved.</p>
                </address>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Vue3Marquee } from 'vue3-marquee'
// ======================================== state
// 파트너 정보 State Value
const partnerInfo = ref([
    {
        id: '금융위원회',
        image: '/images/footer/footer_img1.png',
        link: '/',
        size: 'lg',
    },
    {
        id: '금융감독원',
        image: '/images/footer/footer_img2.png',
        link: '/',
        size: 'lg',
    },
    {
        id: '신용회복위원회',
        image: '/images/footer/footer_img3.png',
        link: '/',
        size: 'md',
    },
    {
        id: '한국대부금융협회',
        image: '/images/footer/footer_img4.png',
        link: '/',
        size: 'md',
    },
    {
        id: 'NICE지키미',
        image: '/images/footer/footer_img5.png',
        link: '/',
        size: 'sm',
    },
])

// 약관 정보 State Value
const termsInfo = ref([
    {
        id: '회사소개',
        link: '/',
    },
    {
        id: '이용안내',
        link: '/',
    },
    {
        id: '이용약관',
        link: '/',
    },
    {
        id: '개인정보처리방침',
        link: '/',
    },
    {
        id: '책임의한계와법적고지',
        link: '/',
    },
    {
        id: '이메일무단수집거부',
        link: '/',
    },
    {
        id: '오류신고',
        link: '/',
    },
])
</script>
<style lang="scss">
footer.loan-nara-footer-container {
    div.partner-wrapper {
        background-color: $color-white;
        border-top: 1px solid #dfe3ea;
        border-bottom: 1px solid #dfe3ea;
        @include r(padding-top, 10, 10, 10, 24, 24);
        @include r(padding-bottom, 10, 10, 10, 24, 24);
        div.align-box {
            @include r(padding-left, 0, 0, 0, 40, 40);
            @include r(padding-right, 0, 0, 0, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.partner-pc-list {
                display: block;
                @include respond(tablet) {
                    display: none;
                }
                @include respond(mobile-plus) {
                    display: none;
                }
                @include respond(mobile) {
                    display: none;
                }
            }
            div.partner-mobile-list {
                display: block;
                @include respond(pc) {
                    display: none;
                }
                @include respond(laptop) {
                    display: none;
                }
                div.vue3-marquee {
                    @include r(gap, 40, 40, 87, 79, 79);
                    div.marquee {
                    }
                }
            }
            ul.partner-list {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                @include r(gap, 40, 40, 87, 79, 79);
                li.partner-item {
                    a {
                        display: block;
                        div.img-box {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            @include r(height, 36, 36, 40, 40, 40);
                            img {
                                display: block;
                                width: 100%;
                                object-fit: contain;
                                &.lg {
                                    @include r(height, 30, 30, 30, 40, 40);
                                }
                                &.md {
                                    @include r(height, 24, 24, 24, 32, 32);
                                }
                                &.sm {
                                    @include r(height, 18, 18, 18, 26, 26);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    div.terms-wrapper {
        width: 100%;
        background-color: #f8fafc;
        border-bottom: 1px solid #dfe3ea;
        @include r(padding-top, 24.5, 24.5, 24.5, 28, 28);
        @include r(padding-bottom, 24.5, 24.5, 24.5, 28, 28);
        div.align-box {
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.terms-pc-nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                @include r(gap, 48, 48, 48, 32, 32);
                @include respond(tablet) {
                    display: none;
                }
                @include respond(mobile-plus) {
                    display: none;
                }
                @include respond(mobile) {
                    display: none;
                }
                ul.left-area {
                    display: flex;
                    align-items: center;
                    @include r(gap, 48, 48, 48, 32, 32);
                    li.term-item {
                        a {
                            font-weight: 700;
                            color: $color-dark-gray;
                            text-decoration: none;
                            @include r(font-size, 13, 13, 13, 14, 14);
                            &.is-black {
                                color: $color-black;
                            }
                        }
                    }
                }
                div.right-area {
                    a {
                        width: fit-content;
                        display: block;
                        font-weight: 700;
                        color: #5b6c8b;
                        text-decoration: none;
                        border-radius: 8px;
                        background-color: #dfe3ea;
                        @include r(padding-top, 8, 8, 8, 8, 8);
                        @include r(padding-bottom, 8, 8, 8, 8, 8);
                        @include r(padding-left, 12, 12, 12, 12, 12);
                        @include r(padding-right, 12, 12, 12, 12, 12);
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
            div.terms-mobile-nav {
                display: block;
                @include respond(pc) {
                    display: none;
                }
                @include respond(laptop) {
                    display: none;
                }
                div.terms-nav-swiper {
                    overflow: visible !important;
                    div.swiper-wrapper {
                        align-items: center;
                        div.swiper-slide {
                            width: auto !important;
                            &.terms-nav-slide {
                                a {
                                    font-weight: 700;
                                    color: $color-dark-gray;
                                    text-decoration: none;
                                    @include r(font-size, 13, 13, 13, 13, 13);
                                }
                            }
                            a.type-btn {
                                width: fit-content;
                                display: block;
                                font-weight: 700;
                                color: #5b6c8b;
                                text-decoration: none;
                                border-radius: 8px;
                                background-color: #dfe3ea;
                                @include r(padding-top, 8, 8, 8, 8, 8);
                                @include r(padding-bottom, 8, 8, 8, 8, 8);
                                @include r(padding-left, 12, 12, 12, 12, 12);
                                @include r(padding-right, 12, 12, 12, 12, 12);
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                    }
                }
            }
        }
    }
    div.company-info-wrapper {
        background-color: #f8fafc;
        border-bottom: 1px solid #dfe3ea;
        @include r(padding-top, 20, 20, 20, 40, 40);
        @include r(padding-bottom, 30, 30, 30, 40, 40);
        div.align-box {
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.company-info-align-box {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                @include respond(pc) {
                    flex-wrap: nowrap;
                }
                div.company-info-box {
                    background-color: #edf0f5;
                    border-radius: 16px;
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 29, 29, 29, 29, 29);
                    @include respond(laptop) {
                        width: 100%;
                        margin-bottom: 1.75rem;
                    }
                    @include respond(tablet) {
                        width: 100%;
                        margin-bottom: 1.75rem;
                    }
                    @include respond(mobile-plus) {
                        width: 100%;
                        margin-bottom: 1.75rem;
                    }
                    @include respond(mobile) {
                        width: 100%;
                        margin-bottom: 1.75rem;
                    }
                    address.contact-info {
                        p.phone-title {
                            font-weight: 700;
                            color: $color-primary;
                            @include r(font-size, 24, 24, 24, 24, 32);
                            @include r(margin-bottom, 17, 17, 17, 17, 17);
                        }
                        p.business-hours-title {
                            font-weight: 500;
                            color: $color-black;
                            @include r(font-size, 13, 13, 13, 13, 14);
                            @include r(margin-bottom, 4, 4, 4, 4, 4);
                        }
                        p.holiday-info {
                            font-weight: 500;
                            color: $color-dark-gray;
                            @include r(font-size, 13, 13, 13, 13, 14);
                            @include r(margin-bottom, 17, 17, 17, 17, 17);
                        }
                    }
                    div.account-info {
                        div.account-item {
                            display: flex;
                            align-items: center;
                            @include r(margin-bottom, 10, 10, 10, 10, 10);
                            &:last-child {
                                margin-bottom: 0;
                            }
                            p {
                                @include r(font-size, 13, 13, 13, 13, 14);
                                &.title {
                                    font-weight: 700;
                                    color: $color-black;
                                    @include r(width, 56, 56, 56, 56, 56);
                                    @include r(margin-right, 10, 10, 10, 10, 10);
                                }
                                &.contents {
                                    font-weight: 400;
                                    color: $color-black;
                                    strong {
                                        font-weight: 700;
                                        color: $color-dark-gray;
                                    }
                                }
                            }
                        }
                    }
                }
                div.service-guide-box {
                    @include r(width, 24, 24, 24, 24, 360);
                    @include respond(pc) {
                        width: 22.5rem;
                    }
                    @include respond(laptop) {
                        width: 48.7%;
                    }
                    @include respond(tablet) {
                        width: 48.7%;
                    }
                    @include respond(mobile-plus) {
                        width: 100%;
                        margin-bottom: 1.75rem;
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                    @include respond(mobile) {
                        width: 100%;
                        margin-bottom: 1.75rem;
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                    div.title-box {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        @include r(margin-bottom, 10, 10, 10, 10, 30);
                        h2 {
                            font-weight: 700;
                            color: $color-black;
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                        div.modal-btn {
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            div.img-box {
                                @include r(width, 16, 16, 16, 16, 16);
                                @include r(margin-right, 4, 4, 4, 4, 4);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                            p {
                                color: #5b6c8b;
                                font-weight: 700;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                        a.link-btn {
                            display: flex;
                            align-items: center;
                            text-decoration: none;
                            div.img-box {
                                @include r(width, 14, 14, 14, 14, 14);
                                @include r(margin-right, 4, 4, 4, 4, 4);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                            p {
                                color: #5b6c8b;
                                font-weight: 700;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                    }
                    div.contents-box {
                        p {
                            font-weight: 400;
                            color: $color-dark-gray;
                            line-height: 1.3;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            span {
                                font-weight: 500;
                                color: $color-red;
                            }
                        }
                    }
                }
            }
        }
    }
    div.legal-info-wrapper {
        background-color: #f8fafc;
        @include r(padding-top, 30, 30, 30, 40, 40);
        @include r(padding-bottom, 30, 30, 30, 40, 40);
        div.align-box {
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            address.legal-info-box {
                p {
                    font-weight: 400;
                    color: $color-dark-gray;
                    line-height: 1.4;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    &:last-child {
                        @include r(margin-top, 20, 20, 20, 24, 24);
                    }
                }
            }
        }
    }
}
</style>
