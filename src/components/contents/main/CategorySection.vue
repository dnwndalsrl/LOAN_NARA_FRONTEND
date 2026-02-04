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
                <NuxtLink :to="'/'">바로가기</NuxtLink>
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
        linkUrl: '/',
        items: [
            {
                id: uuid(),
                title: '전체',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '서울',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '경기',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '인천',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '대전',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '대구',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '부산',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '광주',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '울산',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '세종',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '강원',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '충북',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '충남',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '전북',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '전남',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '경북',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '경남',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '제주',
                linkUrl: '/',
            },
        ],
    },
    {
        id: uuid(),
        type: 'PRODUCT',
        linkUrl: '/',
        items: [
            {
                id: uuid(),
                title: '전체',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '직장인',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '무직자',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '여성',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '비상금',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '모바일',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '소액',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '무방문',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '자영업',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '당일',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '사업자',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '전문직',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '저신용',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '신용',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '추가',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '자동차',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '부동산',
                linkUrl: '/',
            },
            {
                id: uuid(),
                title: '더보기',
                linkUrl: '/',
            },
        ],
    },
])
</script>

<style lang="scss">
div.main-category-box {
    width: 100%;
    border: 2px solid $color-primary;
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
                font-weight: 700;
                color: $color-black;
                @include r(font-size, 16, 18, 18, 18, 18);
                strong {
                    color: $color-primary;
                }
            }
        }
        div.direct-title-box {
            display: flex;
            align-items: center;
            a {
                font-weight: 500;
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
            background-color: $color-light-gray;
            transition: background-color 0.2s ease;
            @include respond(mobile) {
                flex: 0 0 calc((100% - 4px * 5) / 6);
            }
            &.is-no-bg {
                background-color: $color-white !important;
                border: 1px solid #d7dce5 !important;
                a {
                    font-weight: 600 !important;
                    color: #6a6a6a !important;
                }
            }
            &:hover {
                background-color: #dbe9ff;
                a {
                    font-weight: 700;
                    color: $color-primary;
                }
            }
            a {
                display: block;
                width: 100%;
                height: 100%;
                font-weight: 600;
                color: $color-black;
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
