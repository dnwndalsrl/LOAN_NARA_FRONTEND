<template>
    <div class="official-company-integrated-search-detail-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="company-info-box">
                        <h2>업체정보</h2>
                        <div class="contents-box">
                            <div class="content-item">
                                <p class="content-title">업체명</p>
                                <div class="content-align-box">
                                    <p class="normal-content">대출나라대부</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">대표자</p>
                                <div class="content-align-box">
                                    <p class="normal-content">김대출</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">등록증번호</p>
                                <div class="content-align-box">
                                    <p class="normal-content">2026-서울강남-0000(대부중개업)</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">등록증 유효기간</p>
                                <div class="content-align-box">
                                    <p class="normal-content">2026.01.02 ~ 2029.01.02</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">등록기관</p>
                                <div class="content-align-box">
                                    <p class="normal-content">서울 강남 지방자치단체</p>
                                    <p class="bold-content">02-0000-000</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">소재지</p>
                                <div class="content-align-box">
                                    <p class="normal-content">
                                        서울특별시 강남구 72, 지하1층 000호
                                    </p>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">전화번호</p>
                                <div class="content-align-box">
                                    <p class="blue-content">010-0000-0000</p>
                                    <p class="normal-content">
                                        해당 정보는 금융위 등록된 대부업체 통합조회 서비스
                                        공시내용입니다.
                                    </p>
                                    <NuxtLink :to="'/'">
                                        <span>금융위에서 확인하기</span>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/right_arrow_blue.png"
                                                alt="금융위 바로가기"
                                            />
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="content-item">
                                <p class="content-title">광고용 전화번호</p>
                                <div class="content-align-box">
                                    <p class="normal-content">없음</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="another-company-list-box">
                        <h2>다른 고객이 함께 본 업체</h2>
                        <ul class="list-box">
                            <li
                                v-for="(listItem, listIndex) in companyListInfo"
                                :key="listItem.id"
                                class="list-item"
                            >
                                <NuxtLink :to="`/company/${listItem.id}`">
                                    <div class="badge-box">
                                        <NormalBadge :title="listItem.area" />
                                        <NewBadge />
                                    </div>
                                    <p class="main-title">{{ listItem.title }}</p>
                                    <div class="content-title-box">
                                        <p v-if="listItem.contents1">{{ listItem.contents1 }}</p>
                                        <p v-if="listItem.contents2">{{ listItem.contents2 }}</p>
                                    </div>
                                    <div class="phone-num-box">
                                        <div class="img-box">
                                            <img
                                                src="/images/common/tell_phone.png"
                                                alt="전화번호"
                                            />
                                        </div>
                                        <p>{{ listItem.phone }}</p>
                                    </div>
                                    <p class="company-name-title">{{ listItem.companyName }}</p>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'

// =================================================== State
const companyListInfo = ref([
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
])
// ========================================= Function
</script>

<style lang="scss">
div.official-company-integrated-search-detail-section {
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
                div.company-info-box {
                    background-color: $color-white;
                    border-radius: 16px;
                    border: 1px solid $color-gray-200;
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);
                    @include r(padding-left, 40, 40, 40, 40, 40);
                    @include r(padding-right, 40, 40, 40, 40, 40);
                    h2 {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 22, 22, 22, 22, 22);
                        @include r(margin-bottom, 32, 32, 32, 32, 32);
                    }
                    div.contents-box {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        @include r(row-gap, 16, 16, 16, 16, 16);
                        @include r(column-gap, 0, 0, 40, 40, 40);
                        div.content-item {
                            flex: 0 0 100%;
                            min-width: 0;
                            display: flex;
                            align-items: flex-start;
                            @include respond(pc) {
                                flex: 0 0 calc((100% - 2.5rem) / 2);
                            }
                            @include respond(laptop) {
                                flex: 0 0 calc((100% - 2.5rem) / 2);
                            }
                            @include respond(tablet) {
                                flex: 0 0 calc((100% - 2.5rem) / 2);
                            }
                            p.content-title {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                flex-shrink: 0;
                                @include r(font-size, 14, 14, 14, 14, 14);
                                @include r(line-height, 20, 20, 20, 20, 20);
                                @include r(width, 100, 100, 100, 100, 100);
                            }
                            div.content-align-box {
                                display: flex;
                                flex-direction: column;
                                @include r(gap, 4, 4, 4, 4, 4);
                                p {
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                    &.normal-content {
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-900;
                                        @include r(line-height, 20, 20, 20, 20, 20);
                                    }
                                    &.bold-content {
                                        font-weight: $font-weight-bold;
                                        color: $color-gray-900;
                                        @include r(line-height, 20, 20, 20, 20, 20);
                                    }
                                    &.blue-content {
                                        font-weight: $font-weight-bold;
                                        color: $color-primary-500;
                                        @include r(line-height, 20, 20, 20, 20, 20);
                                    }
                                }
                                a {
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    text-decoration: none;
                                    @include r(gap, 8, 8, 8, 8, 8);
                                    span {
                                        font-weight: $font-weight-bold;
                                        color: $color-primary-500;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                    }
                                    div.img-box {
                                        @include r(width, 6, 6, 6, 6, 6);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                div.another-company-list-box {
                    @include r(margin-top, 60, 60, 60, 60, 60);
                    h2 {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 24, 24, 24, 24, 24);
                        @include r(margin-bottom, 29, 29, 29, 29, 29);
                    }
                    ul.list-box {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        column-gap: var(--column-gap);
                        @include r(--column-gap, 24, 24, 20, 20, 20);
                        @include r(row-gap, 20, 20, 20, 20, 20);
                        li.list-item {
                            border: 1px solid #dfe3ea;
                            border-radius: 16px;
                            background-color: $color-white;
                            transition: border-color 0.2s ease;
                            flex: 0 0 calc((100% - (var(--column-gap) * 2)) / 3);
                            &:hover {
                                border: 1px solid $color-primary-500;
                            }
                            @include respond(mobile-plus) {
                                flex: 0 0 calc((100% - var(--column-gap)) / 2);
                            }
                            @include respond(mobile) {
                                flex: 0 0 calc((100% - var(--column-gap)) / 2);
                            }
                            a {
                                display: block;
                                text-decoration: none;
                                @include r(padding-top, 24, 24, 24, 24, 24);
                                @include r(padding-bottom, 24, 24, 24, 24, 24);
                                @include r(padding-left, 24, 24, 24, 24, 24);
                                @include r(padding-right, 24, 24, 24, 24, 24);
                                div.badge-box {
                                    display: flex;
                                    align-items: center;
                                    @include r(gap, 6, 6, 6, 6, 6);
                                    @include r(margin-bottom, 10, 10, 10, 10, 10);
                                }
                                p.main-title {
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                    @include r(font-size, 18, 18, 18, 18, 18);
                                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                                }
                                div.content-title-box {
                                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                                    p {
                                        line-height: 1.3;
                                        font-weight: $font-weight-regular;
                                        color: $color-gray-500;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                                div.phone-num-box {
                                    display: flex;
                                    align-items: center;
                                    border-bottom: 1px solid #dfe3ea;
                                    @include r(padding-bottom, 10, 10, 10, 10, 10);
                                    div.img-box {
                                        @include r(margin-right, 8, 8, 8, 8, 8);
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
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                                p.company-name-title {
                                    font-weight: $font-weight-regular;
                                    color: $color-gray-900;
                                    @include r(margin-top, 10, 10, 10, 10, 10);
                                    @include r(font-size, 13, 13, 13, 13, 13);
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
