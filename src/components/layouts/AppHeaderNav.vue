<template>
    <nav
        ref="headerNavRef"
        class="loan-nara-header-nav-container"
        @mouseenter="onNavEnter()"
        @mouseleave="onNavLeave()"
        aria-label="주요 메뉴"
    >
        <!-- 메뉴 영역 -->
        <div class="navigation-menu-wrapper">
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

            <!-- 2Depth 메뉴 -->
            <div v-if="currentParentMenu?.subMenus?.length" class="sub-menu-bar-wrapper">
                <div class="align-box">
                    <Swiper
                        :slides-per-view="'auto'"
                        :space-between="24"
                        :free-mode="true"
                        :modules="[FreeMode]"
                        class="sub-menu-swiper"
                    >
                        <SwiperSlide
                            v-for="subMenu in currentParentMenu.subMenus"
                            :key="subMenu.key"
                            class="sub-menu-slide"
                        >
                            <!-- 페이지 이동 메뉴 -->
                            <NuxtLink
                                v-if="subMenu.type === 'link'"
                                :to="subMenu.subPath"
                                class="sub-menu-link"
                                :class="{
                                    'is-active': isActiveSubMenu(subMenu),
                                }"
                            >
                                {{ subMenu.label }}
                            </NuxtLink>

                            <!-- Modal 메뉴 -->
                            <span
                                v-else-if="subMenu.type === 'modal'"
                                class="sub-menu-link"
                                @click="commonStore.openCompanyCheckModal()"
                            >
                                {{ subMenu.label }}
                            </span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <!-- 3Depth 메뉴 -->
            <div v-if="currentSubMenu?.childMenus?.length" class="child-menu-bar-wrapper">
                <div class="align-box">
                    <Swiper
                        :slides-per-view="'auto'"
                        :space-between="28"
                        :free-mode="true"
                        :modules="[FreeMode]"
                        class="child-menu-swiper"
                    >
                        <SwiperSlide
                            v-for="childMenu in currentSubMenu.childMenus"
                            :key="childMenu.key"
                            class="child-menu-slide"
                        >
                            <NuxtLink
                                :to="childMenu.subPath"
                                class="child-menu-link"
                                :class="{
                                    'is-active': isActiveChildMenu(childMenu.subPath),
                                }"
                            >
                                {{ childMenu.label }}
                            </NuxtLink>
                        </SwiperSlide>
                    </Swiper>
                </div>
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
                    <!-- 지역별 / 상품별 Header 전용 메뉴 -->
                    <ul v-if="parentMenuItem.megaMenuItems?.length" class="mega-quick-menu-wrapper">
                        <li
                            v-for="megaItem in parentMenuItem.megaMenuItems"
                            :key="megaItem.key"
                            class="mega-quick-menu-item"
                        >
                            <NuxtLink :to="megaItem.path">
                                {{ megaItem.label }}
                            </NuxtLink>
                        </li>

                        <li v-if="parentMenuItem.megaMenuMorePath" class="mega-quick-menu-item">
                            <NuxtLink :to="parentMenuItem.megaMenuMorePath"> +더보기 </NuxtLink>
                        </li>
                    </ul>
                    <!-- 기존 2Depth 메뉴 -->
                    <ul v-else class="child-menu-wrapper">
                        <li
                            v-for="childMenuItem in parentMenuItem.subMenus"
                            :key="childMenuItem.key"
                            class="child-menu-item"
                        >
                            <!-- 페이지 이동 메뉴 -->
                            <NuxtLink
                                v-if="childMenuItem.type === 'link'"
                                :to="childMenuItem.subPath"
                            >
                                {{ childMenuItem.label }}
                            </NuxtLink>

                            <!-- Modal 메뉴 -->
                            <span
                                v-else-if="childMenuItem.type === 'modal'"
                                @click="commonStore.openCompanyCheckModal()"
                            >
                                {{ childMenuItem.label }}
                            </span>
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
                                    <!-- 페이지 이동 메뉴 -->
                                    <NuxtLink
                                        v-if="sub.type === 'link'"
                                        :to="sub.subPath"
                                        class="child-title"
                                        @click="commonStore.closeDrawerMenu"
                                    >
                                        {{ sub.label }}
                                    </NuxtLink>

                                    <!-- Modal 메뉴 -->
                                    <span
                                        v-else-if="sub.type === 'modal'"
                                        class="child-title"
                                        @click="commonStore.openCompanyCheckModal()"
                                    >
                                        {{ sub.label }}
                                    </span>
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
const route = useRoute()
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()

const headerNavRef = ref<HTMLElement | null>(null)
let headerNavResizeObserver: ResizeObserver | null = null

// ======================================== Computed
// 현재 URL을 기준으로 선택된 상위 메뉴를 찾습니다.
const currentParentMenu = computed(() => {
    return NAV_MENUS.find((menu) => {
        if (route.path === menu.path) {
            return true
        }

        return menu.subMenus?.some((subMenu) => {
            // Modal 메뉴는 URL 비교 대상에서 제외
            if (subMenu.type === 'link' && route.path === subMenu.subPath) {
                return true
            }

            return subMenu.childMenus?.some((childMenu) => {
                return route.path === childMenu.subPath
            })
        })
    })
})

// 현재 URL을 기준으로 선택된 2Depth 메뉴를 찾습니다.
const currentSubMenu = computed(() => {
    if (!currentParentMenu.value?.subMenus?.length) {
        return undefined
    }

    return currentParentMenu.value.subMenus.find((subMenu) => {
        // Modal 메뉴는 활성 메뉴 대상에서 제외
        if (subMenu.type === 'modal') {
            return false
        }

        if (route.path === subMenu.subPath) {
            return true
        }

        return subMenu.childMenus?.some((childMenu) => {
            return route.path === childMenu.subPath
        })
    })
})

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

// 현재 URL을 기준으로 하위 메뉴 활성화 여부를 반환합니다.
const isActiveSubMenu = (subMenu: any) => {
    // Modal 메뉴는 활성화 대상이 아닙니다.
    if (subMenu.type === 'modal') {
        return false
    }

    if (route.path === subMenu.subPath) {
        return true
    }

    return Boolean(
        subMenu.childMenus?.some((childMenu: any) => {
            return route.path === childMenu.subPath
        }),
    )
}

// 현재 URL을 기준으로 3Depth 메뉴 활성화 여부를 반환합니다.
const isActiveChildMenu = (path: string) => {
    return route.path === path
}

// 현재 상단 네비게이션의 실제 높이를 CSS 변수에 반영합니다.
const updateHeaderNavHeight = () => {
    if (!headerNavRef.value) {
        return
    }

    document.documentElement.style.setProperty(
        '--header-nav-height',
        `${headerNavRef.value.offsetHeight}px`,
    )
}

onMounted(() => {
    if (!headerNavRef.value) {
        return
    }

    // 최초 네비게이션 높이를 반영합니다.
    updateHeaderNavHeight()

    // 반응형 또는 하위 메뉴 노출로 높이가 변경되면 다시 계산합니다.
    headerNavResizeObserver = new ResizeObserver(() => {
        updateHeaderNavHeight()
    })

    headerNavResizeObserver.observe(headerNavRef.value)
})

onUnmounted(() => {
    headerNavResizeObserver?.disconnect()
    headerNavResizeObserver = null
})
</script>

<style lang="scss">
nav.loan-nara-header-nav-container {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: $color-white;
    div.navigation-menu-wrapper {
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
                    overflow: hidden;
                    div.swiper-wrapper {
                        overflow: visible;
                        div.parent-menu-slide {
                            width: auto !important;
                            @include r(padding-top, 16, 16, 16, 16, 16);
                            @include r(padding-bottom, 16, 16, 16, 16, 16);
                            a {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                text-decoration: none;
                                &:hover {
                                    color: $color-primary-500;
                                }
                                @include r(font-size, 16, 16, 16, 16, 16);
                            }
                        }
                    }
                }
            }
        }
        div.sub-menu-bar-wrapper {
            display: block;
            position: relative;
            z-index: 2;
            background: $color-gray-100;
            // PC에서는 하위 메뉴 숨김
            @include respond(pc) {
                display: none;
            }
            div.align-box {
                @include r(padding-left, 16, 24, 24, 24, 24);
                @include r(padding-right, 16, 24, 24, 24, 24);
                div.sub-menu-swiper {
                    overflow: hidden;
                    div.swiper-wrapper {
                        overflow: visible;
                        div.sub-menu-slide {
                            width: auto !important;
                            @include r(padding-top, 10, 10, 10, 10, 10);
                            @include r(padding-bottom, 10, 10, 10, 10, 10);
                            a {
                                font-weight: $font-weight-medium;
                                color: $color-gray-500;
                                text-decoration: none;
                                &.is-active {
                                    font-weight: $font-weight-semi-bold;
                                    color: $color-gray-900;
                                }
                                @include r(font-size, 15, 15, 15, 15, 15);
                            }
                            span {
                                cursor: pointer;
                                font-weight: $font-weight-medium;
                                color: $color-gray-500;
                                &.is-active {
                                    font-weight: $font-weight-semi-bold;
                                    color: $color-gray-900;
                                }
                                @include r(font-size, 15, 15, 15, 15, 15);
                            }
                        }
                    }
                }
            }
        }
        div.child-menu-bar-wrapper {
            display: block;
            position: relative;
            z-index: 2;
            background: $color-gray-200;
            // PC에서는 하위 메뉴 숨김
            @include respond(pc) {
                display: none;
            }
            div.align-box {
                @include r(padding-left, 16, 24, 24, 24, 24);
                @include r(padding-right, 16, 24, 24, 24, 24);
                div.child-menu-swiper {
                    overflow: hidden;
                    div.swiper-wrapper {
                        overflow: visible;
                        div.child-menu-slide {
                            width: auto !important;
                            @include r(padding-top, 10, 10, 10, 10, 10);
                            @include r(padding-bottom, 10, 10, 10, 10, 10);
                            a {
                                font-weight: $font-weight-medium;
                                color: $color-gray-600;
                                text-decoration: none;
                                &.is-active {
                                    font-weight: $font-weight-semi-bold;
                                    color: $color-gray-900;
                                }
                                @include r(font-size, 15, 15, 15, 15, 15);
                            }
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
                    font-weight: $font-weight-semi-bold;
                    color: $color-gray-500;
                    cursor: pointer;
                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                    @include r(font-size, 13, 13, 13, 13, 13);
                }
                ul.mega-quick-menu-wrapper {
                    display: grid;
                    grid-template-columns: repeat(2, auto);
                    @include r(gap, 14, 14, 14, 14, 14);
                    li.mega-quick-menu-item {
                        a {
                            font-weight: $font-weight-medium;
                            color: $color-gray-900;
                            text-decoration: none;
                            &:hover {
                                color: $color-primary-500;
                            }
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                }
                ul.child-menu-wrapper {
                    li.child-menu-item {
                        @include r(margin-bottom, 14, 14, 14, 14, 14);
                        &:last-child {
                            margin-bottom: 0;
                        }
                        a {
                            font-weight: $font-weight-medium;
                            color: $color-gray-900;
                            text-decoration: none;
                            &:hover {
                                color: $color-primary-500;
                            }
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        span {
                            cursor: pointer;
                            font-weight: $font-weight-medium;
                            color: $color-gray-900;
                            &:hover {
                                color: $color-primary-500;
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
                        font-weight: $font-weight-bold;
                        color: $color-white;
                        @include r(font-size, 16, 16, 16, 16, 16);
                    }
                }
                div.utility-nav {
                    display: flex;
                    align-items: center;
                    @include r(gap, 20, 20, 20, 20, 20);
                    a {
                        font-weight: $font-weight-bold;
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
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
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
                            background-color: $color-gray-100;
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
                                    font-weight: $font-weight-semi-bold;
                                    color: #6a6a6a;
                                    text-decoration: none;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                                span {
                                    cursor: pointer;
                                    font-weight: $font-weight-semi-bold;
                                    color: #6a6a6a;
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
