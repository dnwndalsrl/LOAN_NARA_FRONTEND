<template>
    <div :class="`middle-banner-box type-${viewIndex}`">
        <template v-if="viewIndex === 1">
            <div class="banner-title-box">
                <p class="strong-title">대출나라는 11년차!</p>
                <div class="light-title-box">
                    <p class="light-title">대출나라는 대한민국 최초&nbsp;</p>
                    <p class="light-title">대출중개플랫폼입니다.</p>
                </div>
            </div>
            <div class="img-box">
                <img src="/images/common/middle_banner1.png" alt="대출나라" />
            </div>
        </template>
        <template v-if="viewIndex === 2">
            <div class="banner-title-box">
                <p class="strong-title">이제 대출도 간편하게 받으세요!</p>
                <div class="light-title-box">
                    <p class="light-title">대출상품을 검색, 비교하여&nbsp;</p>
                    <p class="light-title">내게 맞는 상품 추천!</p>
                </div>
            </div>
            <div class="img-box">
                <img src="/images/common/middle_banner2.png" alt="대출나라" />
            </div>
        </template>
        <template v-if="viewIndex === 3">
            <div class="banner-title-box">
                <p class="strong-title">대출 희망고객을 위한 대출중개플랫폼</p>
                <div class="light-title-box">
                    <p class="light-title">내 조건에 맞는 업체&nbsp;</p>
                    <p class="light-title">직접 선택!</p>
                </div>
            </div>
            <div class="img-box">
                <img src="/images/common/middle_banner3.png" alt="대출나라" />
            </div>
        </template>
        <template v-if="viewIndex === 4">
            <div class="banner-title-box">
                <p class="strong-title">복잡한 절차 없이 빠르고 쉽게!</p>
                <div class="light-title-box">
                    <p class="light-title">회원가입 없이 이용 가능!&nbsp;</p>
                    <p class="light-title">대출 중개수수료 없음!</p>
                </div>
            </div>
            <div class="img-box">
                <img src="/images/common/middle_banner4.png" alt="대출나라" />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
// ======================================== state
const viewIndex = ref(4)
</script>

<style lang="scss">
div.middle-banner-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    @include r(padding-left, 20, 40, 40, 40, 40);
    @include r(padding-right, 20, 60, 60, 60, 60);
    @include r(height, 129, 129, 129, 129, 129);
    &.type-1 {
        background-color: #cdeadb;
    }
    &.type-2 {
        background-color: #cfe1ef;
    }
    &.type-3 {
        background-color: #f6ded6;
    }
    &.type-4 {
        background-color: #fbeed2;
    }
    div.banner-title-box {
        display: flex;
        @include respond(pc) {
            flex-direction: row;
        }
        @include respond(laptop) {
            flex-direction: column;
        }
        @include respond(tablet) {
            flex-direction: column;
        }
        @include respond(mobile-plus) {
            flex-direction: column;
        }
        @include respond(mobile) {
            flex-direction: column;
        }
        p.strong-title {
            font-weight: 700;
            color: $color-black;
            @include r(font-size, 18, 18, 22, 22, 22);
            @include respond(pc) {
                margin-right: 0.625rem;
            }
            @include respond(laptop) {
                margin-bottom: 0.625rem;
            }
            @include respond(tablet) {
                margin-bottom: 0.625rem;
            }
            @include respond(mobile-plus) {
                margin-bottom: 0.625rem;
            }
            @include respond(mobile) {
                margin-bottom: 0.625rem;
            }
        }
        div.light-title-box {
            display: flex;
            @include respond(pc) {
                flex-direction: row;
            }
            @include respond(laptop) {
                flex-direction: row;
            }
            @include respond(tablet) {
                flex-direction: row;
            }
            @include respond(mobile-plus) {
                flex-direction: column;
            }
            @include respond(mobile) {
                flex-direction: column;
            }
            p.light-title {
                font-weight: 400;
                color: $color-black;

                @include r(font-size, 18, 18, 22, 22, 22);
                @include respond(mobile-plus) {
                    line-height: 1.3;
                }
                @include respond(mobile) {
                    line-height: 1.3;
                }
            }
        }
    }
    div.img-box {
        height: 100%;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
