<template>
    <section class="section-four section-wrapper">
        <div class="align-box">
            <el-row class="list-wrapper">
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="12"
                    :xl="12"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    class="list-item left-area"
                >
                    <div class="content-item">
                        <span class="index-title">01</span>
                        <h1>클릭 수만 많아도 돈은 안 됩니다</h1>
                        <p>
                            광고 클릭은 많지만 실제 대출 신청·상담은 극히 드문 상황.<br />
                            대출 고객은 조건·승인 가능성·이자율까지 오래 비교하기 때문에,<br />
                            <span class="highlight-txt"
                                >CPC(클릭당 과금) 방식은 전환 없는 지출이 반복됩니다.</span
                            >
                        </p>
                    </div>
                    <div class="content-item">
                        <span class="index-title">02</span>
                        <h1>상담·신청이 발생할 때만 비용 지출</h1>
                        <p>
                            CPA 광고는 단순 유입이 아니라,<br />
                            실제 상담 신청·대출 예약 확정 시에만 광고비 지출!<br />
                            같은 예산으로 CPC 대비 20~30% 이상 더 많은 상담 확보가 가능합니다.<br />
                            <span class="highlight-txt"
                                >“돈이 움직일 때만 돈을 쓰는 광고”가 바로 CPA입니다.</span
                            >
                        </p>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="12"
                    :xl="12"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    class="list-item right-area"
                >
                    <el-row class="content-wrapper">
                        <el-col :xs="24" :sm="17" :md="24" :lg="24" :xl="24" class="content-item">
                            <h1>CPC보다 효율적인 CPA 광고</h1>
                            <p class="type-mb">
                                PC 광고의 현실은, 1,000 클릭 중 1~3%만 상담 전환.<br />
                                100만 원을 집행해도 상담 20건 정도에 그치는 경우가 많습니다.<br />
                                반면, CPA 광고는 ‘상담 신청·예약’이 확정될 때만 과금.
                            </p>
                            <p class="type-mb">
                                같은 100만 원으로 상담 25건 확보,<br />
                                상담당 단가를 5만 원 → 4만 원 수준까지 낮출 수 있습니다.
                            </p>
                            <p class="highlight-txt">
                                불필요한 광고비 낭비 없이 실제 전환 확보 가능!
                            </p>
                        </el-col>
                        <el-col :xs="0" :sm="7" :md="24" :lg="24" :xl="24" class="content-item">
                            <div class="img-box">
                                <img src="/images/main/sec04.png" alt="CPC보다 효율적인 CPA 광고" />
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
<style lang="scss">
section.section-four {
    background-color: #101010;
    @include respond(laptop) {
        @include r(padding-top, 50, 60, 0, 0);
        @include r(padding-bottom, 50, 60, 0, 0);
    }
    div.align-box {
        div.list-wrapper {
            justify-content: space-between;
            div.list-item {
                max-width: 48.8%;
                @include respond(laptop) {
                    max-width: 100%;
                }
                @include respond(tablet) {
                    max-width: 100%;
                }
                @include respond(mobile) {
                    max-width: 100%;
                }
                &.left-area {
                    display: flex;
                    flex-direction: column;
                    @include r(gap, 9, 19, 19, 29);
                    div.content-item {
                        width: 100%;
                        background-color: #1d1d1d;
                        border-radius: 32px;
                        @include r(padding-top, 23, 41, 44, 60);
                        @include r(padding-bottom, 23, 41, 44, 60);
                        @include r(padding-left, 24, 40, 40, 59);
                        @include r(padding-right, 24, 40, 40, 59);
                        span.index-title {
                            display: block;
                            font-family: 'Pretendard';
                            font-weight: bold;
                            color: #4378ff;
                            @include r(margin-bottom, 19, 19, 16, 19);
                            @include r(font-size, 13, 18, 16, 18);
                        }
                        h1 {
                            font-family: 'Pretendard';
                            font-weight: 800;
                            color: #ffffff;
                            @include r(margin-bottom, 19, 29, 29, 39);
                            @include r(font-size, 16, 24, 20, 24);
                        }
                        p {
                            font-family: 'Pretendard';
                            font-weight: 500;
                            color: #ffffff;
                            line-height: 1.3;
                            @include r(font-size, 12, 16, 14, 16);
                            span.highlight-txt {
                                color: #a0bbff;
                            }
                        }
                    }
                }
                &.right-area {
                    @include r(margin-top, 9, 19, 0, 0);
                    div.content-wrapper {
                        height: 100%;
                        background-color: #101010;
                        border: 2px solid #4378ff;
                        border-radius: 32px;
                        @include r(padding-top, 23, 41, 44, 60);
                        @include r(padding-bottom, 23, 41, 44, 60);
                        @include r(padding-left, 24, 40, 40, 59);
                        @include r(padding-right, 24, 40, 40, 59);
                        div.content-item {
                            h1 {
                                font-family: 'Pretendard';
                                font-weight: 800;
                                color: #4378ff;
                                @include r(margin-bottom, 19, 29, 29, 39);
                                @include r(font-size, 16, 24, 20, 24);
                            }
                            p {
                                font-family: 'Pretendard';
                                font-weight: 500;
                                color: #ffffff;
                                line-height: 1.3;
                                @include r(font-size, 12, 16, 14, 16);
                                &.type-mb {
                                    @include r(margin-bottom, 18, 24, 14, 22);
                                }
                                &.highlight-txt {
                                    color: #a0bbff;
                                }
                            }
                            div.img-box {
                                @include r(width, 0, 160, 151, 184);
                                @include r(margin-top, 0, 0, 41, 58);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                            &:last-child {
                                display: flex;
                                justify-content: end;
                                @include respond(laptop) {
                                    align-items: end;
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
