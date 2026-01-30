<template>
    <div class="loan-nara-layout">
        <!-- 헤더 영역 -->
        <AppHeader />

        <!-- 메뉴 영역 -->
        <AppHeaderNav />

        <!-- 메인 영역 -->
        <div class="main-with-side-container">
            <!-- 왼쪽 플로팅 영역  -->
            <aside ref="leftSideRef" class="side-floating is-left">
                <div class="recent-register-company-wrapper">
                    <div class="box-title">
                        <div class="img-box">
                            <img
                                src="/images/common/recent_create_company.png"
                                alt="최근등록업체"
                            />
                        </div>
                        <h2>최근등록업체</h2>
                    </div>
                    <ul class="recent-company-list">
                        <li
                            v-for="(recentItem, recentIndex) in recentRegisterCompany"
                            :key="recentItem"
                            class="recent-company-item"
                        >
                            <NuxtLink :to="`/`">
                                {{ recentItem }}
                            </NuxtLink>
                            <span class="badge-new">N</span>
                        </li>
                    </ul>
                </div>
            </aside>

            <main class="loan-nara-main-container">
                <slot></slot>
            </main>

            <!-- 오른쪽 플로팅 영역 -->
            <aside ref="rightSideRef" class="side-floating is-right">
                <ul class="promo-loan-wrapper">
                    <li
                        v-for="(promoLoanItem, promoLoanIndex) in promoLoanItems"
                        :key="promoLoanItem.id"
                        class="promo-loan-item"
                    >
                        <div class="title-area">
                            <h2>{{ promoLoanItem.title }}</h2>
                            <p class="sub-title">{{ promoLoanItem.subTitle }}</p>
                            <NuxtLink :to="promoLoanItem.path">
                                <p>바로가기</p>
                                <div class="img-box">
                                    <img src="/images/common/right_arrow_gray.png" alt="바로가기" />
                                </div>
                            </NuxtLink>
                        </div>
                        <div class="img-box">
                            <img :src="promoLoanItem.imageUrl" />
                        </div>
                    </li>
                </ul>
            </aside>
        </div>

        <!-- 푸터 영역 -->
        <AppFooter />

        <!-- 메뉴 Dim 영역 -->
        <ClientOnly>
            <div v-show="commonStore.isMegaMenuOpen" class="menu-dim"></div>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common'

const commonStore = useCommonStore()

const leftSideRef = ref<HTMLElement | null>(null)
const rightSideRef = ref<HTMLElement | null>(null)

let startTop = 0

// ======================================== state
// 최근 등록 업체 state
const recentRegisterCompany = ref([
    '대출나라대부중개',
    '주식회사대출나라',
    '포시즌대부중개',
    '민생대부',
    '대출나라대부중개',
    '대출나라대부중개',
    '대출나라대부중개',
    '대출나라대부중개',
    '대출나라대부중개',
    '대출나라대부중개',
])

const promoLoanItems = ref([
    {
        id: 1,
        title: '전국 부동산 담보대출',
        subTitle: '24시간 상담 가능',
        path: '/',
        imageUrl: '/images/common/right_float1.png',
    },
    {
        id: 2,
        title: '바르고 정확하게',
        subTitle: '전국 부동산 담보대출',
        path: '/',
        imageUrl: '/images/common/right_float2.png',
    },
    {
        id: 3,
        title: '24시간 상담 가능',
        subTitle: '빠른 당일 담보대출',
        path: '/',
        imageUrl: '/images/common/right_float3.png',
    },
])

// ======================================== Function
const onScroll = () => {
    const scrollY = window.scrollY
    const offset = Math.max(0, scrollY - startTop)

    if (leftSideRef.value) {
        leftSideRef.value.style.transform = `translateY(${offset}px)`
    }

    if (rightSideRef.value) {
        rightSideRef.value.style.transform = `translateY(${offset}px)`
    }
}

onMounted(() => {
    if (!leftSideRef.value) return

    startTop = leftSideRef.value.getBoundingClientRect().top + window.scrollY - 40

    window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss">
div.loan-nara-layout {
    width: 100%;
    div.main-with-side-container {
        position: relative;
        @include r(padding-top, 16, 24, 24, 40, 40);
        @include r(padding-left, 16, 24, 24, 40, 40);
        @include r(padding-right, 16, 24, 24, 40, 40);
        @include respond(pc) {
            max-width: 75rem;
            margin: 0 auto;
        }
        aside.side-floating {
            display: none;
            position: absolute;
            top: 40px;
            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
            &.is-left {
                left: -191px;
            }
            &.is-right {
                right: -240px;
            }
            @include respond(pc) {
                display: block;
            }
            div.recent-register-company-wrapper {
                background-color: $color-white;
                border: 1px solid #dfe3ea;
                border-radius: 16px;
                @include r(width, 151, 151, 151, 151, 151);
                @include r(padding-top, 20, 20, 20, 20, 20);
                @include r(padding-bottom, 20, 20, 20, 20, 20);
                @include r(padding-left, 20, 20, 20, 20, 20);
                @include r(padding-right, 20, 20, 20, 20, 20);
                div.box-title {
                    display: flex;
                    align-items: center;
                    div.img-box {
                        @include r(width, 15, 15, 15, 15, 15);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    h2 {
                        font-weight: 700;
                        color: $color-black;
                        @include r(margin-left, 6, 6, 6, 6, 6);
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                ul.recent-company-list {
                    @include r(margin-top, 16, 16, 16, 16, 16);
                    li.recent-company-item {
                        display: flex;
                        align-items: center;
                        @include r(margin-bottom, 10, 10, 10, 10, 10);
                        &:last-child {
                            margin-bottom: 0;
                        }
                        a {
                            display: block;
                            min-width: 0;
                            font-weight: 400;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: $color-black;
                            text-decoration: none;
                            @include r(margin-right, 4, 4, 4, 4, 4);
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                        span.badge-new {
                            flex-shrink: 0;
                            font-weight: 700;
                            color: $color-green;
                            @include r(font-size, 12, 12, 12, 12, 12);
                        }
                    }
                }
            }
            ul.promo-loan-wrapper {
                li.promo-loan-item {
                    display: flex;
                    align-items: end;
                    background-color: #ecf0f4;
                    border: 1px solid #dfe3ea;
                    border-radius: 16px;
                    @include r(gap, 8, 8, 8, 8, 8);
                    @include r(margin-bottom, 10, 10, 10, 10, 10);
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 16, 16, 16, 16, 16);
                    &:last-child {
                        margin-bottom: 0;
                    }
                    div.title-area {
                        h2 {
                            font-weight: 700;
                            color: $color-black;
                            @include r(margin-bottom, 4, 4, 4, 4, 4);
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                        p.sub-title {
                            font-weight: 400;
                            color: #545976;
                            @include r(margin-bottom, 16, 16, 16, 16, 16);
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                        a {
                            width: fit-content;
                            display: flex;
                            align-items: center;
                            border-radius: 6px;
                            background-color: #d1dae9;
                            text-decoration: none;
                            @include r(gap, 10, 10, 10, 10, 10);
                            @include r(padding-top, 6, 6, 6, 6, 6);
                            @include r(padding-bottom, 6, 6, 6, 6, 6);
                            @include r(padding-left, 10, 10, 10, 10, 10);
                            @include r(padding-right, 10, 10, 10, 10, 10);
                            p {
                                font-weight: 700;
                                color: #5b6c8b;
                                @include r(font-size, 13, 13, 13, 13, 13);
                            }
                            div.img-box {
                                @include r(width, 6, 6, 6, 6, 6);
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                    div.img-box {
                        @include r(width, 52, 52, 52, 52, 52);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }
        }
        main.loan-nara-main-container {
            // height: 200vh;
        }
    }
    div.menu-dim {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        z-index: 900;
    }
}
</style>
