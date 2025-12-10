<template>
    <section class="section-five section-wrapper">
        <div class="align-box">
            <div class="title-wrapper">
                <h1 class="main-title">
                    경쟁사 평균보다 <span class="blue-b">합리적인 CPA</span><br />
                    효율적 광고 운영
                </h1>
                <h2 class="sub-title">동일한 예산으로 더 많은 전환, 불필요한 광고비 부담 최소화</h2>
            </div>
            <el-row class="list-wrapper">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="list-item left-area">
                    <div class="compare-box">
                        <div class="compare-item">
                            <p>
                                A대행사 10건 전환 광고비 소진금액<span class="hide-br"><br /></span>
                                550,000원
                            </p>
                        </div>
                        <div class="compare-item is-blue">
                            <p>
                                <span class="blue-b">나는기획</span> 10건 전환 광고비 소진금액
                                <span class="hide-br"><br /></span>
                                <span class="blue-b">50,000원</span>
                            </p>
                        </div>
                        <div class="arrow-bg-img-box" data-aos="fade-down" data-aos-duration="1500">
                            <p>광고비 <span class="blue-b">95%</span> 절감!!</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="list-item right-area">
                    <div ref="chartRef" class="chart-box" :class="{ 'in-view': inView }">
                        <div v-for="(item, index) in barData" :key="uuid()" class="bar-item">
                            <p class="value">
                                CPA 약<br /><span :class="[{ highlight: item.highlight }]"
                                    >{{ thousands(item.value) }}원</span
                                >
                            </p>
                            <div
                                class="bar-inner"
                                :class="[{ highlight: item.highlight }]"
                                :style="{
                                    '--p': item.value / maxValue,
                                    transitionDelay: index * 200 + 'ms',
                                }"
                            ></div>
                            <p class="label">{{ item.label }}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script setup lang="ts">
import { v4 as uuid } from 'uuid'

const chartRef = ref<HTMLElement | null>(null)
const inView = ref(false)
let io: IntersectionObserver | null = null

type BarItem = { label: string; value: number; highlight: boolean }

const barData: BarItem[] = [
    { label: 'A 대행사', value: 55000, highlight: false },
    { label: 'B 대행사', value: 46000, highlight: false },
    { label: 'C 대행사', value: 38000, highlight: false },
    { label: '나는기획', value: 5000, highlight: true },
]

const maxValue = Math.max(...barData.map((b) => b.value)) || 1

onMounted(() => {
    io = new IntersectionObserver(
        (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                inView.value = true
                io?.disconnect()
            }
        },
        { threshold: 0.35 },
    )
    if (chartRef.value) io.observe(chartRef.value)
})

onBeforeUnmount(() => io?.disconnect())
</script>
<style lang="scss">
section.section-five {
    background-color: #1d1d1d;
    @include respond(laptop) {
        @include r(padding-top, 50, 60, 0, 0);
        @include r(padding-bottom, 50, 60, 0, 0);
    }
    div.align-box {
        div.title-wrapper {
            h1.main-title {
                font-family: 'Pretendard';
                font-weight: 800;
                color: #ffffff;
                line-height: 1.3;
                @include r(margin-bottom, 19, 40, 30, 40);
                @include r(font-size, 18, 40, 32, 48);
                span.blue-b {
                    font-family: 'Pretendard';
                    font-weight: 800;
                    color: #4378ff;
                }
            }
            h2.sub-title {
                font-family: 'Pretendard';
                font-weight: 500;
                color: #ffffff;
                line-height: 1.3;
                @include r(margin-bottom, 29, 60, 39, 76);
                @include r(font-size, 12, 24, 16, 24);
            }
        }
        div.list-wrapper {
            justify-content: space-between;
            align-items: center;
            div.list-item {
                &.left-area {
                    max-width: 44.8%;
                    @include r(margin-bottom, 38, 59, 0, 0);
                    @include respond(laptop) {
                        max-width: 100%;
                    }
                    @include respond(tablet) {
                        max-width: 100%;
                    }
                    @include respond(mobile) {
                        max-width: 100%;
                    }
                    div.compare-box {
                        background-color: #101010;
                        border-radius: 32px;
                        @include r(padding-top, 25, 25, 20, 30);
                        @include r(padding-bottom, 25, 25, 20, 30);
                        @include r(padding-left, 25, 25, 20, 30);
                        @include r(padding-right, 25, 25, 20, 30);
                        div.compare-item {
                            width: 100%;
                            border-radius: 20px;
                            background-color: #1d1d1d;
                            @include r(padding-top, 23, 32, 30, 32);
                            @include r(padding-bottom, 23, 32, 30, 32);
                            @include r(margin-bottom, 19, 20, 19, 30);
                            &.is-blue {
                                background-color: #101010;
                                border: 2px solid #4378ff;
                            }
                            p {
                                font-family: 'Pretendard';
                                font-weight: 800;
                                color: #ffffff;
                                line-height: 1.3;
                                text-align: center;
                                @include r(font-size, 16, 20, 18, 20);
                                span.hide-br {
                                    display: none;
                                    @include respond(tablet) {
                                        display: inline;
                                    }
                                    @include respond(mobile) {
                                        display: inline;
                                    }
                                }
                                span.blue-b {
                                    font-family: 'Pretendard';
                                    font-weight: 800;
                                    color: #4378ff;
                                }
                            }
                        }
                    }
                    div.arrow-bg-img-box {
                        background-image: url('/images/main/sec05_arr.png');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        @include r(padding-top, 23, 32, 30, 32);
                        @include r(padding-bottom, 23, 32, 30, 32);
                        p {
                            font-family: 'Pretendard';
                            font-weight: 800;
                            color: #ffffff;
                            text-align: center;
                            @include r(font-size, 24, 40, 32, 40);
                            span.blue-b {
                                font-family: 'Pretendard';
                                font-weight: 800;
                                color: #4378ff;
                            }
                        }
                    }
                }
                &.right-area {
                    div.chart-box {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        align-items: end;
                        @include r(gap, 15, 40, 29, 40);
                        &.in-view {
                            div.bar-item {
                                div.bar-inner {
                                    transform: scaleY(1);
                                }
                            }
                        }
                        div.bar-item {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: flex-end;
                            &:nth-child(1) {
                                div.bar-inner {
                                    @include r(height, 260, 309, 249, 368);
                                }
                            }
                            &:nth-child(2) {
                                div.bar-inner {
                                    @include r(height, 209, 249, 199, 281);
                                }
                            }
                            &:nth-child(3) {
                                div.bar-inner {
                                    @include r(height, 157, 187, 148, 213);
                                }
                            }
                            &:nth-child(4) {
                                div.bar-inner {
                                    @include r(height, 53, 63, 50, 77);
                                }
                            }
                            div.bar-inner {
                                background: #333333;
                                border-radius: 20px 20px 0 0;
                                transform-origin: bottom; // 아래에서 위로
                                transform: scaleY(0); // 초기 숨김
                                transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
                                will-change: transform; // 성능 힌트
                                @include r(width, 68, 150, 115, 116);
                                &.highlight {
                                    background: #4378ff;
                                }
                            }
                            p.label {
                                font-family: 'Pretendard';
                                font-weight: 800;
                                color: #ffffff;
                                text-align: center;
                                @include r(font-size, 16, 24, 20, 24);
                                @include r(margin-top, 19, 19, 20, 29);
                            }
                            p.value {
                                text-align: center;
                                line-height: 1.2;
                                font-family: 'Pretendard';
                                font-weight: bold;
                                color: #ffffff;
                                @include r(font-size, 13, 20, 16, 20);
                                @include r(margin-bottom, 19, 19, 19, 19);
                                span {
                                    font-family: 'Pretendard';
                                    font-weight: bold;
                                    color: #ffffff;
                                    &.highlight {
                                        color: #4378ff;
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
