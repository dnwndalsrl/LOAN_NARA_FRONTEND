<template>
    <section class="section-three section-wrapper">
        <div class="align-box">
            <h1 data-aos="fade-up" data-aos-duration="1500" class="main-title">
                우리는 <span class="blue-b">금융·대부업</span> 광고만을 연구하고 실행해온<br />
                업종 특화 전문 업체<span class="gray-b">입니다.</span><br />
                업종 규제와 시장 특성<span class="gray-b">을 누구보다 잘 이해하며,</span><br />
                단순한 광고 대행을 넘어 <span class="blue-b">성과와 신뢰</span>를 제공<span
                    class="gray-b"
                    >합니다.</span
                >
            </h1>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
<style lang="scss">
section.section-three {
    background-image: url('/images/main/sec03_bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h1.main-title {
        font-family: 'Pretendard';
        font-weight: 800;
        color: #ffffff;
        text-align: center;
        line-height: 1.3;
        @include r(font-size, 16, 32, 40, 48);
        span {
            font-family: 'Pretendard';
            &.blue-b {
                color: #4378ff;
            }
            &.gray-b {
                color: #777777;
            }
        }
    }
}
</style>
