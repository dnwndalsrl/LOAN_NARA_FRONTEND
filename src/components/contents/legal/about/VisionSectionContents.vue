<template>
    <div class="vision-section-contents">
        <div class="left-box">
            <h3>
                주식회사 대출나라대부중개<br />
                비전을 말하다
            </h3>
            <p>
                주요 서비스 대출나라는 검색 서비스 플랫폼으로<br />대출이 필요한 고객들에게 무료로
                서비스를 제공함으로써<br />서비스를 이용하는 모든 고객들에게 전국 모든 대부업체를
                직접 비교하고 찾아 볼 수 있도록 돕고자 합니다.<br /><br />
                기존과 차별화된 대출나라만의 로그 데이터 분석을 기반으로 하여<br />저비용 고효율적인
                마케팅 운영으로 대출나라를 통해 수많은 브랜드를 성장시켜 함께 발전을 거듭하고자
                합니다.
            </p>
        </div>
        <ul class="right-box">
            <li v-for="(item, index) in visionCompanyInfo" :key="index" class="list-item">
                <div class="title-box">
                    <div class="img-box">
                        <img :src="item.imageUrl" :alt="item.title" />
                    </div>

                    <p class="title">{{ item.title }}</p>
                </div>
                <p class="contents-title">{{ item.contents }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// 회사 비전 Value
const visionCompanyInfo = [
    {
        imageUrl: '/images/legal/about/success_image.png',
        title: 'SUCCESS',
        contents: '우리의 전문성을 통해 고객의 성공을 돕는 일이 대출나라의 목표입니다.',
    },
    {
        imageUrl: '/images/legal/about/value_image.png',
        title: 'VALUE',
        contents: '디지털 시대에 맞춰 최고의 서비스를 만들어가고 가치 증대에 기여합니다.',
    },
    {
        imageUrl: '/images/legal/about/expertise_image.png',
        title: 'EXPERTISE',
        contents: '기업의 풍부한 경험과 인재의 열정을 통한 실질적인 전문성을 보여드립니다.',
    },
]

// =================================================== State

// =================================================== Computed

// =================================================== Function
</script>

<style lang="scss">
div.vision-section-contents {
    display: flex;
    @include r(gap, 32, 54, 54, 54, 54);
    @include respond(tablet) {
        flex-direction: column;
    }
    @include respond(mobile-plus) {
        flex-direction: column;
    }
    @include respond(mobile) {
        flex-direction: column;
    }
    div.left-box {
        flex: 1 1 0;
        h3 {
            font-weight: $font-weight-bold;
            color: $color-gray-900;
            line-height: 1.2;
            @include r(font-size, 20, 32, 32, 32, 32);
            @include r(margin-bottom, 20, 32, 32, 32, 32);
        }
        p {
            font-weight: $font-weight-medium;
            color: $color-gray-500;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(line-height, 20, 20, 20, 20, 20);
        }
    }
    ul.right-box {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        @include r(gap, 20, 20, 20, 20, 20);
        li.list-item {
            border: 1px solid $color-gray-200;
            border-radius: 16px;
            @include r(padding-top, 32, 32, 32, 32, 32);
            @include r(padding-bottom, 32, 32, 32, 32, 32);
            @include r(padding-left, 32, 32, 32, 32, 32);
            @include r(padding-right, 32, 32, 32, 32, 32);
            div.title-box {
                display: flex;
                align-items: center;
                @include r(gap, 10, 10, 10, 10, 10);
                @include r(margin-bottom, 20, 20, 20, 20, 20);
                div.img-box {
                    @include r(width, 20, 20, 20, 20, 20);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 20, 20, 20, 20, 20);
                    @include r(margin-bottom, 8, 12, 12, 12, 12);
                }
            }
            p.contents-title {
                font-weight: $font-weight-regular;
                color: $color-gray-900;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(line-height, 20, 20, 20, 20, 20);
            }
        }
    }
}
</style>
