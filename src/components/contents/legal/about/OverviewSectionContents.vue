<template>
    <div class="overview-section-contents">
        <div class="left-box">
            <h3 class="main-title">성공하는 비즈니스 파트너</h3>
            <h3 class="main-title is-bold">주식회사 대출나라대부중개</h3>
        </div>
        <div class="right-box">
            <div v-for="(item, index) in overViewCompanyInfo" :key="index" class="info-item">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-contents">{{ item.contents }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 회사 개요 > 회사 정보 Value
const overViewCompanyInfo = [
    {
        title: '회사명',
        contents: '주식회사 대출나라대부중개',
    },
    {
        title: '대표이사',
        contents: '신준식',
    },
    {
        title: '주요 서비스',
        contents: '대출나라',
    },
    {
        title: '주요 사업',
        contents: '검색 서비스 플랫폼 제작',
    },
    {
        title: '설립일자',
        contents: '2014년 8월 10일',
    },
    {
        title: '주소',
        contents: '서울특별시 강남구 선릉로',
    },
    {
        title: '홈페이지',
        contents: 'http://대출나라.com',
    },
]

// =================================================== State

// =================================================== Computed

// =================================================== Function
</script>

<style lang="scss">
div.overview-section-contents {
    display: flex;
    @include r(gap, 40, 40, 20, 20, 20);
    @include respond(mobile-plus) {
        flex-direction: column;
    }
    @include respond(mobile) {
        flex-direction: column;
    }
    div.left-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        @include r(gap, 8, 8, 8, 8, 8);
        h3.main-title {
            font-weight: $font-weight-semi-bold;
            color: $color-white;
            @include r(font-size, 20, 20, 32, 32, 32);
            &.is-bold {
                font-weight: $font-weight-bold;
            }
        }
    }
    div.right-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        @include r(gap, 14, 14, 14, 14, 14);
        div.info-item {
            display: flex;
            align-items: center;
            @include r(gap, 20, 20, 20, 20, 20);
            p.item-title {
                font-weight: $font-weight-bold;
                color: $color-white;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(line-height, 20, 20, 20, 20, 20);
                @include r(width, 65, 65, 65, 65, 65);
            }
            p.item-contents {
                font-weight: $font-weight-medium;
                color: $color-white;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(line-height, 20, 20, 20, 20, 20);
            }
        }
    }
}
</style>
