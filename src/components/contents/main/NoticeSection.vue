<template>
    <div class="notice-section">
        <div class="notice-item is-left">
            <div class="content-box">
                <div class="title-box">
                    <h2>금융뉴스</h2>
                    <NuxtLink>
                        더보기
                        <div class="img-box">
                            <img src="/images/common/right_arrow_gray_sharp.png" alt="더보기" />
                        </div>
                    </NuxtLink>
                </div>
                <ul class="notice-list">
                    <NoticeListCard
                        v-for="(item, index) in tempData.slice(0, 10)"
                        :key="item.id"
                        :title="item.title"
                        :date="item.date"
                    />
                </ul>
            </div>
            <div v-show="isPc || isLaptop" class="content-box">
                <div class="title-box">
                    <h2>대부업뉴스</h2>
                    <NuxtLink>
                        더보기
                        <div class="img-box">
                            <img src="/images/common/right_arrow_gray_sharp.png" alt="더보기" />
                        </div>
                    </NuxtLink>
                </div>
                <ul class="notice-list">
                    <NoticeListCard
                        v-for="(item, index) in tempData.slice(0, 10)"
                        :key="item.id"
                        :title="item.title"
                        :date="item.date"
                    />
                </ul>
            </div>
        </div>
        <div v-show="isPc || isLaptop" class="notice-item is-right">
            <div class="content-box">
                <div class="title-box">
                    <h2>공지사항</h2>
                    <NuxtLink>
                        더보기
                        <div class="img-box">
                            <img src="/images/common/right_arrow_gray_sharp.png" alt="더보기" />
                        </div>
                    </NuxtLink>
                </div>
                <ul class="notice-list">
                    <NoticeListCard
                        v-for="(item, index) in tempData.slice(0, 3)"
                        :key="item.id"
                        :title="item.title"
                        :date="item.date"
                    />
                </ul>
            </div>
            <div class="content-box">
                <div class="title-box">
                    <h2>바로가기</h2>
                </div>
                <div class="button-wrapper">
                    <div class="top-area">
                        <NuxtLink>
                            <div class="img-box">
                                <img src="/images/common/main_action1.png" alt="광고문의" />
                            </div>
                            광고문의
                        </NuxtLink>
                        <NuxtLink>
                            <div class="img-box">
                                <img src="/images/common/main_action2.png" alt="1:1 문의" />
                            </div>
                            1:1 문의
                        </NuxtLink>
                    </div>
                    <div class="bottom-area">
                        <NuxtLink>
                            <div class="img-box">
                                <img src="/images/common/main_action3.png" alt="자주묻는질문" />
                            </div>
                            자주묻는질문
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()
const tempData = ref([
    {
        id: uuid(),
        title: '24시 친절상담 당일송금 정식등록',
        date: '2025-11-11',
    },
    {
        id: uuid(),
        title: '24시 친절상담 당일송금 정식등록',
        date: '2025-11-11',
    },
    {
        id: uuid(),
        title: '24시 친절상담 당일송금 정식등록',
        date: '2025-11-11',
    },
    {
        id: uuid(),
        title: '24시 친절상담 당일송금 정식등록',
        date: '2025-11-11',
    },
    {
        id: uuid(),
        title: '24시 친절상담 당일송금 정식등록',
        date: '2025-11-11',
    },
])
</script>

<style lang="scss">
div.notice-section {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-width: 0;
    @include r(gap, 20, 20, 20, 20, 20);
    div.notice-item {
        min-width: 0;
        &.is-left {
            display: flex;
            flex: 2 1 0;
            @include r(gap, 20, 20, 20, 20, 20);
            @include respond(tablet) {
                width: 100%;
            }
            @include respond(mobile-plus) {
                width: 100%;
            }
            @include respond(mobile) {
                width: 100%;
            }
            div.content-box {
                @include respond(tablet) {
                    width: 100%;
                }
                @include respond(mobile-plus) {
                    width: 100%;
                }
                @include respond(mobile) {
                    width: 100%;
                }
            }
        }
        &.is-right {
            display: flex;
            flex-direction: column;
            flex: 1 1 0;
            @include r(gap, 24, 24, 24, 24, 24);
        }
        div.content-box {
            flex: 1 1 0;
            min-width: 0;
            border: 1px solid #dfe3ea;
            border-radius: 16px;
            @include r(padding-top, 32, 32, 32, 32, 32);
            @include r(padding-bottom, 32, 32, 32, 32, 32);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.title-box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                @include r(margin-bottom, 20, 20, 20, 20, 20);
                h2 {
                    font-weight: 700;
                    color: $color-black;
                    @include r(line-height, 24, 24, 24, 24, 24);
                    @include r(font-size, 20, 20, 20, 20, 20);
                }
                a {
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    cursor: pointer;
                    font-weight: 500;
                    color: #868c98;
                    @include r(gap, 8, 10, 10, 10, 10);
                    @include r(line-height, 24, 24, 24, 24, 24);
                    @include r(font-size, 13, 14, 14, 14, 14);
                    div.img-box {
                        @include r(width, 6, 8, 8, 8, 6);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }
            div.button-wrapper {
                display: flex;
                flex-direction: column;
                @include r(gap, 10, 10, 10, 10, 10);
                div.top-area {
                    display: flex;
                    align-items: center;
                    @include r(gap, 10, 10, 10, 10, 10);
                }
                div.bottom-area {
                }
                a {
                    display: flex;
                    justify-content: center;
                    flex: 1 1 0;
                    font-weight: 600;
                    color: $color-black;
                    text-decoration: none;
                    cursor: pointer;
                    background-color: $color-white;
                    border-radius: 8px;
                    border: 1px solid #dfe3ea;
                    @include r(gap, 6, 6, 6, 6, 6);
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(padding-top, 14, 14, 14, 14, 14);
                    @include r(padding-bottom, 14, 14, 14, 14, 14);
                    div.img-box {
                        @include r(width, 16, 16, 16, 16, 16);
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
</style>
