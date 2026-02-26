<template>
    <div class="notice-section">
        <div class="notice-item">
            <div class="content-box">
                <div class="title-box">
                    <h2>전국 대출업체 등록 현황</h2>
                    <NuxtLink>
                        더보기
                        <div class="img-box">
                            <img src="/images/common/right_arrow_gray_sharp.png" alt="더보기" />
                        </div>
                    </NuxtLink>
                </div>
                <ul class="notice-list">
                    <NoticeListCard
                        v-for="(item, index) in tempData"
                        :key="item.id"
                        :title="item.title"
                        :date="item.date"
                    />
                </ul>
            </div>
        </div>
        <div class="notice-item"></div>
        <div class="notice-item"></div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
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
    div.notice-item {
        div.content-box {
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
                @include r(margin-bottom, 24, 24, 24, 24, 24);
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
            ul.notice-list {
            }
        }
    }
}
</style>
