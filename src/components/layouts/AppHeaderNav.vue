<template>
    <nav
        class="loan-nara-header-nav-container"
        @mouseenter="onNavEnter()"
        @mouseleave="onNavLeave()"
        aria-label="주요 메뉴"
    >
        <!-- 부모 메뉴 -->
        <div class="parent-menu-swiper-wrapper">
            <div class="align-box">
                <Swiper
                    :slides-per-view="'auto'"
                    :space-between="39"
                    :free-mode="true"
                    :modules="[FreeMode]"
                    class="parent-menu-swiper"
                >
                    <SwiperSlide
                        v-for="menu in NAV_MENUS"
                        :key="menu.key"
                        class="parent-menu-slide"
                    >
                        <NuxtLink :to="menu.path" class="parent-menu-link">
                            {{ menu.label }}
                        </NuxtLink>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <!-- 자식 메뉴 (PC 노출) -->
        <div v-show="commonStore.isMegaMenuOpen" class="mega-menu-wrapper">
            <div class="mega-menu-inner">
                <div
                    v-for="(parentMenuItem, parentMenuIndex) in NAV_MENUS"
                    :key="parentMenuItem.key"
                    class="menu-align-box"
                >
                    <p class="parent-title">{{ parentMenuItem.label }}</p>
                    <ul class="child-menu-wrapper">
                        <li
                            v-for="(childMenuItem, childMenuIndex) in parentMenuItem.subMenus"
                            :key="childMenuItem.key"
                            class="child-menu-item"
                        >
                            <NuxtLink :to="childMenuItem.subPath">
                                {{ childMenuItem.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 자식 메뉴 (LABTOP, TABLET, MOBILE 노출) -->
        <el-drawer
            v-model="commonStore.isDrawerMenuOpen"
            direction="rtl"
            :with-header="false"
            append-to-body
            :size="drawerSize"
            @close="commonStore.closeDrawerMenu()"
            class="menu-drawer-wrapper"
        >
            <div class="drawer-body">
                <div class="drawer-header">
                    <div class="close-nav">
                        <div class="img-box" @click="commonStore.closeDrawerMenu()">
                            <img src="/images/common/left_arrow_white.png" alt="메뉴닫기" />
                        </div>
                        <p>전체메뉴</p>
                    </div>
                    <div class="utility-nav">
                        <NuxtLink to="/">업체로그인</NuxtLink>
                        <NuxtLink to="/">업체회원가입</NuxtLink>
                    </div>
                </div>
                <nav class="drawer-menu">
                    <ul class="drawer-parent-menu-wrapper">
                        <li v-for="menu in NAV_MENUS" :key="menu.key" class="parent-menu-item">
                            <NuxtLink
                                :to="menu.path"
                                @click="commonStore.closeDrawerMenu"
                                class="parent-title"
                            >
                                {{ menu.label }}
                            </NuxtLink>

                            <ul v-if="menu.subMenus?.length" class="drawer-child-menu-wrapper">
                                <li
                                    v-for="sub in menu.subMenus"
                                    :key="sub.key"
                                    class="child-menu-item"
                                >
                                    <NuxtLink
                                        :to="sub.subPath"
                                        @click="commonStore.closeDrawerMenu"
                                        class="child-title"
                                    >
                                        {{ sub.label }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </el-drawer>
    </nav>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useCommonStore } from '~/store/common'

const commonStore = useCommonStore()
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()

// ======================================== Computed
// 우측 Drawer Menu Size
const drawerSize = computed(() => {
    if (isPc.value) return '0'
    if (isLaptop.value) return '483px'
    if (isTablet.value) return '483px'
    if (isMobilePlus.value) return '372px'
    if (isMobile.value) return '348px'
})

// ======================================== Watch
// PC 진입시 drawer close
watch(isPc, (next) => {
    if (next) {
        commonStore.closeDrawerMenu()
    }
})

// ======================================== Function
// Menu Hover
const onNavEnter = () => {
    if (!isPc.value) return
    commonStore.openMegaMenu()
}

// Menu Leave
const onNavLeave = () => {
    if (!isPc.value) return
    commonStore.closeMegaMenu()
}
</script>

<style lang="scss">
nav.loan-nara-header-nav-container {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: $color-white;
    div.parent-menu-swiper-wrapper {
        position: relative;
        z-index: 2;
        box-shadow: 0px 2px 8px 0px #e0e0e066;
        div.align-box {
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.parent-menu-swiper {
                overflow: visible !important;
                div.swiper-wrapper {
                    div.parent-menu-slide {
                        width: auto !important;
                        @include r(padding-top, 16, 16, 16, 16, 16);
                        @include r(padding-bottom, 16, 16, 16, 16, 16);
                        a {
                            font-weight: 700;
                            color: $color-black;
                            text-decoration: none;
                            &:hover {
                                color: $color-primary;
                            }
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                    }
                }
            }
        }
    }
    div.mega-menu-wrapper {
        position: absolute;
        z-index: 1;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #eaedf4;
        display: none;
        @include respond(pc) {
            display: block;
        }
        div.mega-menu-inner {
            display: flex;
            justify-content: space-between;
            @include r(gap, 36, 36, 36, 36, 36);
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.menu-align-box {
                flex-shrink: 0;
                @include r(padding-top, 30, 30, 30, 30, 30);
                @include r(padding-bottom, 30, 30, 30, 30, 30);
                &:nth-child(4) {
                    border-right: 1px solid #eaedf4;
                    @include r(padding-right, 30, 30, 30, 30, 30);
                }
                p.parent-title {
                    font-weight: 600;
                    color: $color-dark-gray;
                    cursor: pointer;
                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                    @include r(font-size, 13, 13, 13, 13, 13);
                }
                ul.child-menu-wrapper {
                    li.child-menu-item {
                        @include r(margin-bottom, 14, 14, 14, 14, 14);
                        &:last-child {
                            margin-bottom: 0;
                        }
                        a {
                            font-weight: 500;
                            color: $color-black;
                            text-decoration: none;
                            &:hover {
                                color: $color-primary;
                            }
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                }
            }
        }
    }
}

div.menu-drawer-wrapper {
    div.el-drawer__body {
        padding: 0 !important;
        div.drawer-body {
            div.drawer-header {
                display: flex;
                justify-content: space-between;
                background-color: #3e5986;
                @include r(padding-top, 16, 16, 16, 16, 16);
                @include r(padding-bottom, 16, 16, 16, 16, 16);
                @include r(padding-left, 16, 24, 24, 24, 24);
                @include r(padding-right, 16, 24, 24, 24, 24);
                div.close-nav {
                    display: flex;
                    align-items: center;
                    @include r(gap, 16, 16, 16, 16, 16);
                    div.img-box {
                        cursor: pointer;
                        @include r(width, 10, 10, 10, 10, 10);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    p {
                        font-weight: 700;
                        color: $color-white;
                        @include r(font-size, 16, 16, 16, 16, 16);
                    }
                }
                div.utility-nav {
                    display: flex;
                    align-items: center;
                    @include r(gap, 20, 20, 20, 20, 20);
                    a {
                        font-weight: 700;
                        color: #b9c9e5;
                        text-decoration: none;
                        @include r(font-size, 13, 13, 13, 13, 13);
                    }
                }
            }
            nav.drawer-menu {
                ul.drawer-parent-menu-wrapper {
                    li.parent-menu-item {
                        a.parent-title {
                            display: block;
                            width: 100%;
                            font-weight: 700;
                            color: $color-black;
                            text-decoration: none;
                            background-color: $color-white;
                            border-bottom: 1px solid #dfe3ea;
                            @include r(padding-top, 18, 18, 18, 18, 18);
                            @include r(padding-bottom, 18, 18, 18, 18, 18);
                            @include r(padding-left, 16, 24, 24, 24, 24);
                            @include r(padding-right, 16, 24, 24, 24, 24);
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                        ul.drawer-child-menu-wrapper {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            background-color: $color-light-gray;
                            border-bottom: 1px solid #dfe3ea;
                            gap: 0.875rem 0;
                            @include r(padding-top, 18, 18, 18, 18, 18);
                            @include r(padding-bottom, 18, 18, 18, 18, 18);
                            @include r(padding-left, 24, 32, 32, 32, 32);
                            @include r(padding-right, 24, 32, 32, 32, 32);
                            li.child-menu-item {
                                width: 50%;
                                flex: 0 0 50%;
                                a.child-title {
                                    font-weight: 600;
                                    color: #6a6a6a;
                                    text-decoration: none;
                                    @include r(font-size, 14, 14, 14, 14, 14);
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
