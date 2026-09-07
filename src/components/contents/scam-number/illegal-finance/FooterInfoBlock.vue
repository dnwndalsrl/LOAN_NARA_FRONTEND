<template>
    <section class="footer-info-block-section">
        <ul class="info-block-wrapper">
            <li class="info-block-item">
                <div class="img-box">
                    <img src="/images/scam-number/illegal-finance/footer_img1.png" alt="담당부서" />
                </div>
                <p class="title">담당부서</p>
                <p class="contents">불법금융대응단 불법사금융대응팀</p>
            </li>
            <li class="info-block-item">
                <div class="img-box">
                    <img src="/images/scam-number/illegal-finance/footer_img2.png" alt="전화번호" />
                </div>
                <p class="title">전화번호</p>
                <p class="contents">02-3145-8526</p>
            </li>
        </ul>
        <p class="info-title">자료출처 - 금융감독원 서민금융 1332 (www.fss.or.kr/s1332)</p>
    </section>
</template>

<style lang="scss">
section.footer-info-block-section {
    width: 100%;
    @include r(margin-top, 40, 40, 40, 40, 40);
    ul.info-block-wrapper {
        display: flex;
        align-items: center;
        @include r(gap, 10, 10, 20, 20, 20);
        @include respond(mobile-plus) {
            flex-direction: column;
        }
        @include respond(mobile) {
            flex-direction: column;
        }
        li.info-block-item {
            width: 100%;
            display: flex;
            align-items: center;
            background-color: $color-gray-100;
            border-radius: 16px;
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.img-box {
                @include r(width, 16, 16, 16, 16, 16);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            p.title {
                font-weight: $font-weight-bold;
                color: $color-gray-900;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(line-height, 20, 20, 20, 20, 20);
                @include r(margin-left, 8, 8, 8, 8, 8);
                @include r(margin-right, 16, 16, 16, 16, 16);
            }
            p.contents {
                font-weight: $font-weight-regular;
                color: $color-gray-900;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(line-height, 20, 20, 20, 20, 20);
            }
        }
    }
    p.info-title {
    }
}
</style>
