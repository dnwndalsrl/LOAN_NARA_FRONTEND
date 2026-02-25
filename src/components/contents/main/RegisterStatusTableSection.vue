<template>
    <div class="register-status-table-section">
        <div class="table-item">
            <div class="title-box">
                <h2>전국 대출업체 등록 현황</h2>
                <NuxtLink>
                    더보기
                    <div class="img-box">
                        <img src="/images/common/right_arrow_gray_sharp.png" alt="더보기" />
                    </div>
                </NuxtLink>
            </div>
            <NormalTable
                :data="currentSituationTable"
                :page-sizes="10"
                :total="currentSituationTable.length"
                :show-pagination="false"
            >
                <el-table-column label="지역" width="60">
                    <template #default="{ row }">
                        <div class="contents-center-box">
                            <NormalBadge :title="row.badgeTitle" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="제목">
                    <template #default="{ row }">
                        <div class="badge-align-box">
                            <NuxtLink to="/">{{ row.title }}</NuxtLink>
                            <NewBadge />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="업체명" width="160">
                    <template #default="{ row }">
                        <p class="align-center color-gray normal-size">
                            {{ row.subInfo[0].value }}
                        </p>
                    </template>
                </el-table-column>
                <template #mobile="{ items }">
                    <ul class="mobile-table-list-wrapper">
                        <MobileTableCard
                            v-for="(item, index) in items"
                            :key="item.id"
                            :item="item"
                        />
                    </ul>
                </template>
            </NormalTable>
        </div>
        <div v-if="isPc || isLaptop" class="table-item">
            <div class="title-box">
                <h2>오늘의 추천업체</h2>
                <NuxtLink>
                    더보기
                    <div class="img-box">
                        <img src="/images/common/right_arrow_gray_sharp.png" alt="더보기" />
                    </div>
                </NuxtLink>
            </div>
            <NormalTable
                :data="currentSituationTable"
                :page-sizes="10"
                :total="currentSituationTable.length"
                :show-pagination="false"
            >
                <el-table-column label="지역" width="60">
                    <template #default="{ row }">
                        <div class="contents-center-box">
                            <NormalBadge :title="row.badgeTitle" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="제목">
                    <template #default="{ row }">
                        <div class="badge-align-box">
                            <NuxtLink to="/">{{ row.title }}</NuxtLink>
                            <NewBadge />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="업체명" width="160">
                    <template #default="{ row }">
                        <p class="align-center color-gray normal-size">
                            {{ row.subInfo[0].value }}
                        </p>
                    </template>
                </el-table-column>
                <template #mobile="{ items }">
                    <ul class="mobile-table-list-wrapper">
                        <MobileTableCard
                            v-for="(item, index) in items"
                            :key="item.id"
                            :item="item"
                        />
                    </ul>
                </template>
            </NormalTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'

const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()
const currentSituationTable = ref([
    {
        id: uuid(),
        badgeTitle: '전국',
        title: '24시 친절상담 당일송금 정식등록 당일송금 24시 친절상담',
        subInfo: [{ label: '업체명', value: '24시 따뜻친절대부중개' }],
    },
    {
        id: uuid(),
        badgeTitle: '전국',
        title: '24시 친절상담 당일송금 정식등록 당일송금 24시 친절상담',
        subInfo: [{ label: '업체명', value: '24시 따뜻친절대부중개' }],
    },
    {
        id: uuid(),
        badgeTitle: '전국',
        title: '24시 친절상담 당일송금 정식등록 당일송금',
        subInfo: [{ label: '업체명', value: '24시 따뜻친절대부중개' }],
    },
    {
        id: uuid(),
        badgeTitle: '전국',
        title: '24시 친절상담 당일송금 정식등록 당일송금',
        subInfo: [{ label: '업체명', value: '24시 따뜻친절대부중개' }],
    },
    {
        id: uuid(),
        badgeTitle: '전국',
        title: '24시 친절상담 당일송금 정식등록 당일송금',
        subInfo: [{ label: '업체명', value: '24시 따뜻친절대부중개' }],
    },
    {
        id: uuid(),
        badgeTitle: '전국',
        title: '24시 친절상담 당일송금 정식등록 당일송금',
        subInfo: [{ label: '업체명', value: '24시 따뜻친절대부중개' }],
    },
])
</script>

<style lang="scss">
div.register-status-table-section {
    display: flex;
    align-items: center;
    @include r(margin-top, 30, 30, 30, 30, 0);
    @include r(gap, 20, 20, 20, 20, 20);
    div.table-item {
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
    }
}
</style>
