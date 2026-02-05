<template>
    <div class="progress-section">
        <ul class="progress-card-list">
            <li
                v-for="(cardItem, cardIndex) in progressWithPercent"
                :key="cardItem.id"
                class="progress-card-item"
            >
                <div class="card-header">
                    <div class="img-box">
                        <img
                            :src="
                                cardItem.type === 'AREA'
                                    ? '/images/common/map_ico.png'
                                    : '/images/common/giftcard_icon.png'
                            "
                            :alt="cardItem.type === 'AREA' ? '지역별 업체찾기' : '상품별 업체찾기'"
                        />
                    </div>
                    <h2>
                        {{
                            cardItem.type === 'AREA'
                                ? '지역별 업체찾기에서 '
                                : '상품별 업체찾기에서 '
                        }}<strong>{{ cardItem.type === 'AREA' ? '경기' : '무직자대출' }}</strong>
                        {{
                            cardItem.type === 'AREA'
                                ? '지역이 가장 클릭 수가 많았어요!'
                                : '상품이 가장 클릭 수가 많았어요!'
                        }}
                    </h2>
                </div>
                <div class="card-body">
                    <ul class="progress-list">
                        <li
                            v-for="(progressItem, progressIndex) in cardItem.items"
                            class="progress-item"
                        >
                            <p class="index-title">{{ progressIndex + 1 }}</p>
                            <div class="progress-area">
                                <div
                                    class="progress-bar-wrapper"
                                    :style="{ width: progressItem.percent + '%' }"
                                >
                                    <el-progress
                                        :percentage="100"
                                        :show-text="false"
                                        stroke-linecap="round"
                                        :stroke-width="10"
                                        :color="progressIndex === 0 ? '#366FCC' : '#E6E7EA'"
                                    />
                                    <p
                                        :class="
                                            progressIndex === 0
                                                ? 'main-title is-highlight'
                                                : 'main-title'
                                        "
                                    >
                                        {{ progressItem.label }}
                                        <strong>{{ thousands(progressItem.count) }}</strong>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
// ======================================== state
// 프로그레스 섹션 관련 state value
const progressInfo = ref([
    {
        id: uuid(),
        type: 'AREA',
        items: [
            {
                label: '경기',
                count: 7202,
            },
            {
                label: '서울',
                count: 4697,
            },
            {
                label: '부산',
                count: 3753,
            },
            {
                label: '인천',
                count: 3129,
            },
            {
                label: '강원',
                count: 2798,
            },
        ],
    },
    {
        id: uuid(),
        type: 'PRODUCT',
        items: [
            {
                label: '무직자',
                count: 5818,
            },
            {
                label: '당일',
                count: 4544,
            },
            {
                label: '직장인',
                count: 4458,
            },
            {
                label: '소액',
                count: 3812,
            },
            {
                label: '여성',
                count: 2876,
            },
        ],
    },
])

// ======================================== Computed
const progressWithPercent = computed(() => {
    return progressInfo.value.map((group) => {
        const maxCount = Math.max(...group.items.map((item) => item.count))

        return {
            ...group,
            items: group.items.map((item) => ({
                ...item,
                percent: Math.round((item.count / maxCount) * 100),
            })),
        }
    })
})
</script>

<style lang="scss">
div.progress-section {
    ul.progress-card-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include r(gap, 20, 20, 20, 20, 20);
        li.progress-card-item {
            width: 100%;
            border: 1px solid $color-primary;
            border-radius: 16px;
            div.card-header {
                display: flex;
                align-items: center;
                background-color: #f6f6f6;
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
                @include r(padding-top, 16, 16, 16, 16, 16);
                @include r(padding-bottom, 16, 16, 16, 16, 16);
                @include r(padding-left, 24, 24, 24, 24, 24);
                @include r(padding-right, 24, 24, 24, 24, 24);
                div.img-box {
                    @include r(margin-right, 10, 10, 10, 10, 10);
                    @include r(width, 24, 24, 24, 24, 24);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                h2 {
                    font-weight: 700;
                    color: $color-black;
                    @include r(font-size, 18, 18, 18, 18, 18);
                    strong {
                        color: $color-primary;
                    }
                }
            }
            div.card-body {
                @include r(padding-top, 24, 24, 24, 24, 24);
                @include r(padding-bottom, 24, 24, 24, 24, 24);
                @include r(padding-left, 24, 24, 24, 24, 24);
                @include r(padding-right, 24, 24, 24, 24, 24);
                ul.progress-list {
                    li.progress-item {
                        display: flex;
                        align-items: center;
                        @include r(margin-bottom, 8, 8, 8, 8, 8);
                        @include r(gap, 16, 16, 16, 16, 16);
                        &:last-child {
                            margin-bottom: 0;
                        }
                        p.index-title {
                            font-weight: 700;
                            color: #979dae;
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                        div.progress-area {
                            flex: 1;
                            min-width: 0;
                            div.progress-bar-wrapper {
                                display: flex;
                                align-items: center;
                                width: 0;
                                transition: width 0.4s ease;
                                @include r(gap, 16, 16, 16, 16, 16);
                                div.el-progress {
                                    flex: 1;
                                    min-width: 0;
                                }
                                p.main-title {
                                    font-weight: 700;
                                    color: #979dae;
                                    @include r(font-size, 13, 13, 13, 13, 13);
                                    &.is-highlight {
                                        color: $color-black;
                                        strong {
                                            color: $color-primary;
                                        }
                                    }
                                    strong {
                                        font-weight: 700;
                                        color: #6b7286;
                                    }
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
