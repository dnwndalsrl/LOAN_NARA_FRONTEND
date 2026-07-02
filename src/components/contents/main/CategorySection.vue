<template>
    <div
        v-for="(categoryItem, categoryIndex) in categoryInfo"
        :key="categoryItem.id"
        class="main-category-box"
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
                            categoryItem.type === 'AREA' ? '지역으로 업체찾기' : '상품으로 업체찾기'
                        "
                    />
                </div>
                <h2>
                    <strong>{{ categoryItem.type === 'AREA' ? '지역' : '상품' }} </strong>으로
                    업체찾기
                </h2>
            </div>
            <div class="direct-title-box">
                <NuxtLink :to="categoryItem.linkUrl">바로가기</NuxtLink>
                <div class="img-box">
                    <img src="/images/common/right_arrow_gray_sharp.png" alt="바로가기" />
                </div>
            </div>
        </div>
        <ul class="category-list">
            <li
                v-for="(listItem, listIndex) in categoryItem.items"
                :key="listItem.id"
                :class="listItem.title === '더보기' ? 'category-item is-no-bg' : 'category-item'"
            >
                <NuxtLink :to="listItem.linkUrl">{{ listItem.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
// ======================================== state
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
                title: '더보기',
                linkUrl: '/browse/loan-type/all',
            },
        ],
    },
])
</script>

<style lang="scss">
div.main-category-box {
    width: 100%;
    border: 2px solid $color-primary-500;
    border-radius: 16px;
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
                @include r(width, 20, 24, 24, 24, 24);
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
                @include r(font-size, 16, 18, 18, 18, 18);
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
                @include r(font-size, 13, 14, 14, 14, 14);
            }
            div.img-box {
                @include r(width, 4, 4, 4, 4, 4);
                @include r(margin-left, 8, 10, 10, 10, 10);
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
        justify-content: space-between;
        flex-wrap: wrap;
        @include r(margin-top, 20, 20, 20, 20, 20);
        @include r(gap, 4, 8, 8, 8, 8);
        li.category-item {
            flex: 0 0 calc((100% - 8px * 8) / 9);
            border-radius: 8px;
            background-color: $color-gray-100;
            transition: background-color 0.2s ease;
            @include respond(mobile) {
                flex: 0 0 calc((100% - 4px * 5) / 6);
            }
            &.is-no-bg {
                background-color: $color-white !important;
                border: 1px solid #d7dce5 !important;
                a {
                    font-weight: $font-weight-semi-bold !important;
                    color: #6a6a6a !important;
                }
            }
            &:hover {
                background-color: #dbe9ff;
                a {
                    font-weight: $font-weight-bold;
                    color: $color-primary-500;
                }
            }
            a {
                display: block;
                width: 100%;
                height: 100%;
                font-weight: $font-weight-semi-bold;
                color: $color-gray-900;
                text-decoration: none;
                text-align: center;
                @include r(font-size, 13, 14, 14, 14, 14);
                @include r(padding-top, 8, 8, 8, 8, 8);
                @include r(padding-bottom, 8, 8, 8, 8, 8);
            }
        }
    }
}
</style>
