<template>
    <section class="section-two section-wrapper">
        <div class="align-box">
            <div class="title-wrapper">
                <h1>CLIENTS</h1>
                <h2>나는 기획은 결과로 증명합니다.</h2>
            </div>
            <el-row data-aos="fade-up" data-aos-duration="1500" class="list-wrapper">
                <el-col
                    v-for="(listItem, listIndex) in listData"
                    :key="listItem.id"
                    :xs="24"
                    :sm="24"
                    :md="8"
                    :lg="8"
                    :xl="8"
                    class="list-item"
                >
                    <el-row class="content-wrapper">
                        <el-col :xs="24" :sm="5" :md="24" :lg="24" :xl="24" class="content-item">
                            <div class="img-box">
                                <img :src="listItem.imageFile" :alt="listItem.title" />
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="6" :md="24" :lg="24" :xl="24" class="content-item">
                            <h1>{{ listItem.title }}</h1>
                            <h2>
                                <ClientOnly>
                                    <CountUp
                                        ref="cuRefs"
                                        :end-val="listItem.countNum"
                                        :duration="1.6"
                                        :options="countOptions"
                                        :delay="1.5"
                                    />
                                </ClientOnly>
                                <span class="blue-b">{{ listItem.countNumUnit }}</span>
                            </h2>
                        </el-col>
                        <el-col :xs="24" :sm="13" :md="24" :lg="24" :xl="24" class="content-item">
                            <p v-html="listItem.content" />
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script setup lang="ts">
import { v4 as uuid } from 'uuid'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const listData = reactive([
    {
        id: uuid(),
        imageFile: '/images/main/sec02_01.png',
        title: '누적 고객사',
        countNum: 245,
        countNumUnit: '+',
        content: `혁신적인 발상과 데이터 기반 전략으로<br/>다양한 고객 성공 사례를 만들어내고 있습니다.`,
    },
    {
        id: uuid(),
        imageFile: '/images/main/sec02_02.png',
        title: '매출 성장률',
        countNum: 160,
        countNumUnit: '%',
        content: `끊임없는 시도와 차별화된 접근 방식을 통해<br/>지속적인 성과와 안정적인 성장을 이어갑니다.`,
    },
    {
        id: uuid(),
        imageFile: '/images/main/sec02_03.png',
        title: '상담 신청 수',
        countNum: 1244,
        countNumUnit: '+',
        content: `고객 가치 실현을 위한 열정과 진정성을 바탕으로<br/>최적의 솔루션과 탁월한 경험을 제공합니다.`,
    },
])

const countOptions = {
    enableScrollSpy: true, // 뷰포트 진입 시 자동 시작
    scrollSpyDelay: 200, // 약간의 지연 (ms)
    scrollSpyOnce: true, // true면 한 번만 실행됨
}
</script>
<style lang="scss">
section.section-two {
    background-color: #101010;
    div.title-wrapper {
        @include r(margin-bottom, 29, 59, 60, 80);
        h1 {
            font-family: 'Pretendard';
            font-weight: 500;
            color: #4378ff;
            text-align: center;
            @include r(font-size, 13, 24, 16, 24);
            @include r(margin-bottom, 19, 29, 18, 39);
        }
        h2 {
            font-family: 'Pretendard';
            font-weight: 800;
            color: #ffffff;
            text-align: center;
            @include r(font-size, 24, 40, 40, 48);
        }
    }
    div.list-wrapper {
        justify-content: space-between;
        @include respond(laptop) {
            padding-bottom: 2rem;
        }
        @include respond(tablet) {
            padding-bottom: 5rem;
        }
        div.list-item {
            max-width: 31.7%;
            background-color: #1d1d1d;
            border-radius: 32px;
            @include respond(laptop) {
                max-width: 100%;
            }
            @include respond(tablet) {
                max-width: 100%;
            }
            @include respond(mobile) {
                max-width: 100%;
            }
            @include r(margin-bottom, 9, 19, 0, 0);
            @include r(padding-top, 41, 45, 50, 61);
            @include r(padding-bottom, 41, 45, 50, 61);
            div.content-wrapper {
                height: 100%;
                align-items: center;
                div.content-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    div.img-box {
                        @include r(width, 62, 83, 70, 83);
                        @include r(margin-bottom, 30, 0, 32, 38);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    h1 {
                        font-family: 'Pretendard';
                        font-weight: 800;
                        color: #ffffff;
                        @include r(font-size, 12, 18, 16, 18);
                        @include r(margin-bottom, 15, 19, 16, 19);
                    }
                    h2 {
                        display: flex;
                        align-items: center;
                        div.countup-wrap {
                            span {
                                font-family: 'Pretendard';
                                font-weight: 800;
                                color: #ffffff;
                                @include r(font-size, 32, 48, 40, 48);
                            }
                        }
                        span.blue-b {
                            font-family: 'Pretendard';
                            font-weight: 800;
                            color: #4378ff;
                            @include r(font-size, 32, 48, 40, 48);
                        }
                    }
                    p {
                        font-family: 'Pretendard';
                        font-weight: 500;
                        color: #ffffff;
                        text-align: center;
                        line-height: 1.3;
                        @include respond(laptop) {
                            text-align: start;
                        }
                        @include respond(tablet) {
                            text-align: center;
                        }
                        @include respond(mobile) {
                            text-align: center;
                        }
                        @include r(font-size, 12, 16, 14, 16);
                        @include r(margin-top, 29, 0, 31, 39);
                    }
                }
            }
        }
    }
}
</style>
