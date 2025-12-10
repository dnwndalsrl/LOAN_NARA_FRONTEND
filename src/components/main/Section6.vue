<template>
    <section class="section-six section-wrapper">
        <div class="align-box">
            <el-row class="list-wrapper">
                <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="list-item left-area">
                    <h2>Advertising Media</h2>
                    <h1>
                        현존하는 모든 광고 지면<br />
                        <span class="white-b">검색 광고, 퍼포먼스 매체</span>에서<br />
                        <span class="white-b">유연하고 놀라운 성과</span>를 만들어갑니다.
                    </h1>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="list-item right-area">
                    <div class="img-box" data-aos="zoom-in" data-aos-duration="800">
                        <img src="/images/main/sec06.png" alt="Advertising Media" />
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
<style lang="scss">
section.section-six {
    background-color: #101010;
    @include respond(laptop) {
        @include r(padding-top, 50, 60, 0, 0);
        @include r(padding-bottom, 50, 60, 0, 0);
    }
    div.align-box {
        div.list-wrapper {
            justify-content: space-between;
            div.list-item {
                &.left-area {
                    @include r(margin-bottom, 60, 100, 0, 0);
                    h2 {
                        font-family: 'Pretendard';
                        font-weight: bold;
                        color: #ffffff;
                        @include r(margin-bottom, 29, 59, 68, 60);
                        @include r(font-size, 18, 40, 40, 48);
                    }
                    h1 {
                        font-family: 'Pretendard';
                        font-weight: bold;
                        color: #777777;
                        line-height: 1.3;
                        @include r(font-size, 18, 40, 40, 48);
                        span.white-b {
                            font-family: 'Pretendard';
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }
                }
                &.right-area {
                    div.img-box {
                        margin: 0 auto;
                        @include r(width, 245, 390, 330, 388);
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
