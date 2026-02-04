<template>
    <div class="main-banner-section">
        <div class="title-area">
            <p class="sub-title">전국 700개 이상 대출업체 등록</p>
            <p class="main-title">나에게 맞는 대출업체 찾기!</p>
        </div>
        <div class="statistics-area">
            <div class="title-align-box">
                <div class="img-box">
                    <img src="/images/common/down_arrow_white.png" alt="현재 기준 통계" />
                </div>
                <p>현재 기준 통계</p>
            </div>
            <ul>
                <li
                    v-for="(statisticItem, statisticIndex) in mainBannerStatusInfo"
                    :key="statisticItem.title"
                >
                    <p class="title">{{ statisticItem.title }}</p>
                    <p class="contents">{{ statisticItem.contents }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
// ======================================== state
// 메인배너 통계 state value
const mainBannerStatusInfo = ref([
    {
        id: uuid(),
        title: '대출상담 총액',
        contents: '15,662 억원',
    },
    {
        id: uuid(),
        title: '누적방문자',
        contents: '39,176,883',
    },
    {
        id: uuid(),
        title: '총 실시간 대출문의',
        contents: '1,118,612',
    },
])
</script>

<style lang="scss">
div.main-banner-section {
    div.title-area {
        p.sub-title {
            font-weight: 700;
            color: #d9e5f1;
            @include r(margin-bottom, 8, 8, 8, 10, 4);
            @include r(font-size, 16, 16, 16, 16, 16);
        }
        p.main-title {
            font-weight: 800;
            color: $color-white;
            @include r(font-size, 24, 28, 28, 28, 28);
        }
    }
    div.statistics-area {
        @include r(margin-top, 22, 22, 22, 20, 26);
        div.title-align-box {
            display: flex;
            align-items: center;
            @include r(margin-bottom, 12, 12, 12, 12, 12);
            div.img-box {
                @include r(width, 7, 7, 7, 7, 7);
                @include r(margin-right, 8, 8, 8, 8, 8);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            p {
                font-weight: 700;
                color: $color-white;
                @include r(font-size, 14, 14, 14, 14, 14);
            }
        }
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
            li {
                flex: 1 1 0;
                border: 1px solid #415270;
                border-radius: 8px;
                background-color: #040e2599;
                @include r(padding-top, 14, 14, 14, 14, 14);
                @include r(padding-bottom, 14, 14, 14, 14, 14);
                @include r(padding-left, 16, 16, 16, 16, 16);
                @include r(padding-right, 16, 16, 16, 16, 16);
                p.title {
                    font-weight: 600;
                    color: $color-white;
                    @include r(margin-bottom, 8, 8, 8, 8, 8);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                p.contents {
                    font-weight: 700;
                    color: #bdd6ff;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                @include respond(mobile-plus) {
                    &:nth-child(1) {
                        display: none;
                    }
                }
                @include respond(mobile) {
                    &:nth-child(1) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
