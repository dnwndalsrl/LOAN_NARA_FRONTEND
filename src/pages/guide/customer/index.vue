<template>
    <div class="community-finance-news-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="guide-info-box">
                        <div class="img-box">
                            <img
                                src="/images/guide/customer/guide_customer_image.png"
                                alt="고객 이용안내"
                            />
                        </div>
                        <h2>전국 대출업체 찾아주는 검색 플랫폼</h2>
                        <p>
                            고객이 직접 대출업체를 비교하고, 검색하고, 선택할 수 있도록 서비스를
                            제공하며<br />대출상담부터 거래까지 한 번에 쉽고 빠르게 진행할 수
                            있습니다.
                        </p>
                    </div>
                    <div class="tip-box">
                        <div class="tip-badge">
                            <div class="img-box">
                                <img src="/images/guide/customer/tip.png" alt="팁" />
                            </div>
                            <p>TIP</p>
                        </div>
                        <p>
                            대출나라에 광고 중인 등록업체는 700개 이상이며 등록업체마다 기준과 상품,
                            금리, 상환기간이 모두 다르기 때문에 여러 업체와 상담해보시는게
                            유리합니다.
                        </p>
                    </div>
                    <div class="category-box">
                        <div
                            v-for="(categoryItem, categoryIndex) in categoryInfo"
                            :key="categoryItem.id"
                            class="category-item"
                        >
                            <div class="title-box">
                                <div class="category-title-box">
                                    <div class="img-box">
                                        <img
                                            :src="
                                                categoryItem.type === 'AREA'
                                                    ? '/images/common/map_ico.png'
                                                    : '/images/common/giftcard_icon.png'
                                            "
                                            :alt="
                                                categoryItem.type === 'AREA'
                                                    ? '지역으로 업체찾기'
                                                    : '상품으로 업체찾기'
                                            "
                                        />
                                    </div>
                                    <h2>
                                        <strong
                                            >{{
                                                categoryItem.type === 'AREA' ? '지역' : '상품'
                                            }} </strong
                                        >으로 업체찾기
                                    </h2>
                                </div>
                                <div class="direct-title-box">
                                    <NuxtLink :to="categoryItem.linkUrl">바로가기</NuxtLink>
                                    <div class="img-box">
                                        <img
                                            src="/images/common/right_arrow_gray_sharp.png"
                                            alt="바로가기"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul class="category-list">
                                <li
                                    v-for="(listItem, listIndex) in categoryItem.items"
                                    :key="listItem.id"
                                    class="category-item"
                                >
                                    <NuxtLink :to="listItem.linkUrl">{{ listItem.title }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <p class="info-title">
                            * 지역별, 상품별 메뉴 검색을 통해 여러 대출업체를 비교/선택하여
                            업체정보에 나와있는 연락처로 다이렉트로 전화상담 받아보실 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
// =================================================== State
// 카테고리 섹션 관련 state value
const categoryInfo = ref([
    {
        id: uuid(),
        type: 'AREA',
        linkUrl: '/browse/region/all',
        items: [
            {
                id: uuid(),
                title: '전체',
                linkUrl: '/browse/region/all',
            },
            {
                id: uuid(),
                title: '서울',
                linkUrl: '/browse/region/1',
            },
            {
                id: uuid(),
                title: '경기',
                linkUrl: '/browse/region/2',
            },
            {
                id: uuid(),
                title: '인천',
                linkUrl: '/browse/region/3',
            },
            {
                id: uuid(),
                title: '대전',
                linkUrl: '/browse/region/4',
            },
            {
                id: uuid(),
                title: '대구',
                linkUrl: '/browse/region/5',
            },
            {
                id: uuid(),
                title: '부산',
                linkUrl: '/browse/region/6',
            },
            {
                id: uuid(),
                title: '광주',
                linkUrl: '/browse/region/7',
            },
            {
                id: uuid(),
                title: '울산',
                linkUrl: '/browse/region/8',
            },
            {
                id: uuid(),
                title: '세종',
                linkUrl: '/browse/region/9',
            },
            {
                id: uuid(),
                title: '강원',
                linkUrl: '/browse/region/10',
            },
            {
                id: uuid(),
                title: '충북',
                linkUrl: '/browse/region/11',
            },
            {
                id: uuid(),
                title: '충남',
                linkUrl: '/browse/region/12',
            },
            {
                id: uuid(),
                title: '전북',
                linkUrl: '/browse/region/13',
            },
            {
                id: uuid(),
                title: '전남',
                linkUrl: '/browse/region/14',
            },
            {
                id: uuid(),
                title: '경북',
                linkUrl: '/browse/region/15',
            },
            {
                id: uuid(),
                title: '경남',
                linkUrl: '/browse/region/16',
            },
            {
                id: uuid(),
                title: '제주',
                linkUrl: '/browse/region/17',
            },
        ],
    },
    {
        id: uuid(),
        type: 'PRODUCT',
        linkUrl: '/browse/loan-type/all',
        items: [
            {
                id: uuid(),
                title: '전체',
                linkUrl: '/browse/loan-type/all',
            },
            {
                id: uuid(),
                title: '직장인',
                linkUrl: '/browse/loan-type/1',
            },
            {
                id: uuid(),
                title: '무직자',
                linkUrl: '/browse/loan-type/2',
            },
            {
                id: uuid(),
                title: '여성',
                linkUrl: '/browse/loan-type/3',
            },
            {
                id: uuid(),
                title: '비상금',
                linkUrl: '/browse/loan-type/4',
            },
            {
                id: uuid(),
                title: '모바일',
                linkUrl: '/browse/loan-type/5',
            },
            {
                id: uuid(),
                title: '소액',
                linkUrl: '/browse/loan-type/6',
            },
            {
                id: uuid(),
                title: '무방문',
                linkUrl: '/browse/loan-type/7',
            },
            {
                id: uuid(),
                title: '자영업',
                linkUrl: '/browse/loan-type/8',
            },
            {
                id: uuid(),
                title: '당일',
                linkUrl: '/browse/loan-type/9',
            },
            {
                id: uuid(),
                title: '사업자',
                linkUrl: '/browse/loan-type/10',
            },
            {
                id: uuid(),
                title: '전문직',
                linkUrl: '/browse/loan-type/11',
            },
            {
                id: uuid(),
                title: '저신용',
                linkUrl: '/browse/loan-type/12',
            },
            {
                id: uuid(),
                title: '신용',
                linkUrl: '/browse/loan-type/13',
            },
            {
                id: uuid(),
                title: '추가',
                linkUrl: '/browse/loan-type/14',
            },
            {
                id: uuid(),
                title: '자동차',
                linkUrl: '/browse/loan-type/15',
            },
            {
                id: uuid(),
                title: '부동산',
                linkUrl: '/browse/loan-type/16',
            },
            {
                id: uuid(),
                title: '생활비',
                linkUrl: '/browse/loan-type/17',
            },
            {
                id: uuid(),
                title: '온라인',
                linkUrl: '/browse/loan-type/18',
            },
            {
                id: uuid(),
                title: '일용직',
                linkUrl: '/browse/loan-type/19',
            },
            {
                id: uuid(),
                title: '프리랜서',
                linkUrl: '/browse/loan-type/20',
            },
            {
                id: uuid(),
                title: '전당포',
                linkUrl: '/browse/loan-type/21',
            },
            {
                id: uuid(),
                title: '비대면',
                linkUrl: '/browse/loan-type/22',
            },
            {
                id: uuid(),
                title: '주부',
                linkUrl: '/browse/loan-type/23',
            },
            {
                id: uuid(),
                title: '회생파산',
                linkUrl: '/browse/loan-type/24',
            },
            {
                id: uuid(),
                title: '대환',
                linkUrl: '/browse/loan-type/25',
            },
            {
                id: uuid(),
                title: '기타',
                linkUrl: '/browse/loan-type/26',
            },
        ],
    },
])
// ========================================= Function
</script>

<style lang="scss">
div.community-finance-news-section {
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
                @include r(padding-top, 40, 40, 40, 40, 40);
                div.guide-info-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    div.img-box {
                        @include r(width, 360, 360, 360, 360, 360);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    h2 {
                        text-align: center;
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 28, 28, 28, 28, 28);
                        @include r(margin-top, 40, 40, 40, 40, 40);
                        @include r(margin-bottom, 24, 24, 24, 24, 24);
                    }
                    p {
                        text-align: center;
                        font-weight: $font-weight-regular;
                        color: $color-gray-900;
                        line-height: 1.2;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                div.tip-box {
                    display: flex;
                    align-items: center;
                    background-color: $color-white;
                    border: 1px solid $color-gray-200;
                    border-radius: 16px;
                    @include r(gap, 10, 10, 10, 10, 10);
                    @include r(margin-top, 60, 60, 60, 60, 60);
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    div.tip-badge {
                        display: flex;
                        align-items: center;
                        border-radius: 50px;
                        background-color: $color-primary-500;
                        @include r(gap, 4, 4, 4, 4, 4);
                        @include r(height, 28, 28, 28, 28, 28);
                        @include r(padding-left, 12, 12, 12, 12, 12);
                        @include r(padding-right, 12, 12, 12, 12, 12);
                        div.img-box {
                            margin-bottom: 2px;
                            @include r(width, 10, 10, 10, 10, 10);
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                        p {
                            font-weight: $font-weight-bold;
                            color: $color-white;
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                    }
                    p {
                        font-weight: $font-weight-semi-bold;
                        color: $color-gray-900;
                        line-height: 1.2;
                        @include r(font-size, 13, 13, 13, 13, 13);
                    }
                }
                div.category-box {
                    display: flex;
                    flex-direction: column;
                    background-color: $color-gray-100;
                    border-radius: 16px;
                    @include r(gap, 20, 20, 20, 20, 20);
                    @include r(margin-top, 24, 40, 44, 64, 60);
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    div.category-item {
                        width: 100%;
                        border: 2px solid $color-primary-500;
                        border-radius: 16px;
                        background-color: $color-white;
                        @include r(padding-top, 24, 24, 24, 24, 24);
                        @include r(padding-bottom, 24, 24, 24, 24, 24);
                        @include r(padding-left, 24, 24, 24, 24, 24);
                        @include r(padding-right, 24, 24, 24, 24, 24);
                        div.title-box {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            div.category-title-box {
                                display: flex;
                                align-items: center;
                                div.img-box {
                                    @include r(width, 24, 24, 24, 24, 24);
                                    @include r(margin-right, 8, 8, 8, 8, 8);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                                h2 {
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                    @include r(font-size, 18, 18, 18, 18, 18);
                                    strong {
                                        color: $color-primary-500;
                                    }
                                }
                            }
                            div.direct-title-box {
                                display: flex;
                                align-items: center;
                                a {
                                    font-weight: $font-weight-medium;
                                    color: #868c98;
                                    text-decoration: none;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                                div.img-box {
                                    @include r(width, 4, 4, 4, 4, 4);
                                    @include r(margin-left, 10, 10, 10, 10, 10);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                            }
                        }
                        ul.category-list {
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            @include r(margin-top, 20, 20, 20, 20, 20);
                            @include r(gap, 8, 8, 8, 8, 8);
                            li.category-item {
                                flex: 0 0 calc((100% - (0.5rem * 8)) / 9);
                                border-radius: 8px;
                                background-color: $color-gray-100;
                                transition: background-color 0.2s ease;
                                @include r(height, 33, 33, 33, 33, 33);
                                @include respond(mobile-plus) {
                                    flex: 0 0 calc((100% - (0.5rem * 5)) / 6);
                                }
                                @include respond(mobile) {
                                    flex: 0 0 calc((100% - (0.5rem * 5)) / 6);
                                }
                                &:hover {
                                    background-color: #dbe9ff;
                                    a {
                                        font-weight: $font-weight-bold;
                                        color: $color-primary-500;
                                    }
                                }
                                a {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    width: 100%;
                                    height: 100%;
                                    font-weight: $font-weight-semi-bold;
                                    color: $color-gray-900;
                                    text-decoration: none;
                                    text-align: center;
                                    @include r(font-size, 13, 14, 14, 14, 14);
                                }
                            }
                        }
                    }
                    p.info-title {
                        font-weight: $font-weight-medium;
                        color: $color-gray-500;
                        @include r(font-size, 13, 13, 13, 13, 13);
                    }
                }
            }
        }
    }
}
</style>
