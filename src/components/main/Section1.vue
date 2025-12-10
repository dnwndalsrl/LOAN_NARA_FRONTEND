<template>
    <section class="section-one section-wrapper">
        <div class="align-box">
            <h1 class="main-title">
                나는기획은<span class="hide-br"><br /></span><span class="blue-b">[ </span>
                <span ref="typingTarget"></span>
                <span class="blue-b"> ]</span>만 다루는 전문 업체입니다.<br />
                대부업·대부중개<span class="gray-b">에 특화된 맞춤 마케팅,</span><br />
                법규 준수와 ROI 극대화<span class="gray-b">를 동시에 실현합니다.</span>
            </h1>
            <h1 id="loanText" class="slide-txt">LOAN ADVERTISING</h1>
        </div>
    </section>
</template>

<script setup lang="ts">
import Typed from 'typed.js'

// Section one - 타이핑 텍스트 관련
const typingTarget = ref<HTMLElement | null>(null)
let typed: Typed | null = null

// Section one - 스크롤 텍스트 관련 (동적 import로 SSR 충돌 방지)
let lax: any
const section = ref<HTMLElement | null>(null)

onNuxtReady(() => {
    if (!typingTarget.value) return
    typed = new Typed(typingTarget.value, {
        strings: ['대출 광고'],
        typeSpeed: 110,
        backSpeed: 40,
        loop: false,
        showCursor: true,
        cursorChar: '|',
    })
})

onMounted(async () => {
    const mod = await import('lax.js')
    lax = mod.default || mod
    lax.init()
    lax.addDriver('scrollY', () => window.scrollY)
    lax.addElements('#loanText', {
        scrollY: {
            translateX: [
                ['elInY', 'elCenterY', 'elOutY'],
                [200, 0, -200],
            ],
        },
    })
})

onBeforeUnmount(() => {
    if (!lax) return
    lax.removeElements('#loanText')
    lax.removeDriver('scrollY')
})
</script>
<style lang="scss">
section.section-one {
    background-color: #101010;
    h1.main-title {
        font-family: 'Pretendard';
        font-weight: 800;
        color: #ffffff;
        text-align: center;
        line-height: 1.3;
        @include r(font-size, 18, 40, 40, 56);
        span {
            font-family: 'Pretendard';
            &.hide-br {
                display: none;
                @include respond(laptop) {
                    display: inline;
                }
                @include respond(tablet) {
                    display: inline;
                }
                @include respond(mobile) {
                    display: inline;
                }
            }
            &.blue-b {
                color: #4378ff;
            }
            &.gray-b {
                color: #777777;
            }
        }
    }
    h1.slide-txt {
        position: absolute;
        font-family: 'Pretendard';
        font-weight: 800;
        color: #1b1b1b;
        display: inline-block;
        width: max-content;
        white-space: nowrap;
        overflow-wrap: normal;
        word-break: normal;
        @include r(font-size, 80, 160, 160, 290);
        @include r(margin-top, 30, 0, 50, 0);
    }
}
</style>
