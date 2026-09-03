<template>
    <aside v-if="currentMenu" class="side-navigation">
        <!-- 사이드 메뉴 -->
        <nav class="side-menu-wrapper" :aria-label="`${currentMenu.label} 메뉴`">
            <!-- 상위 메뉴 타이틀 -->
            <div class="side-menu-title">
                <h2>{{ currentMenu.label }}</h2>
            </div>

            <!-- 하위 메뉴 -->
            <div class="side-menu-content">
                <ul class="sub-menu-list">
                    <li
                        v-for="subMenu in currentMenu.subMenus"
                        :key="subMenu.key"
                        class="sub-menu-item"
                    >
                        <!-- 2Depth -->
                        <NuxtLink
                            :to="subMenu.subPath"
                            class="sub-menu-link"
                            :class="{
                                'is-active': isActiveMenu(subMenu.subPath),
                            }"
                        >
                            <span>{{ subMenu.label }}</span>

                            <!-- 하위 메뉴가 없는 경우에만 화살표 -->
                            <div v-if="!subMenu.childMenus?.length" class="img-box">
                                <img src="/images/common/right_arrow_black.png" alt="" />
                            </div>
                        </NuxtLink>

                        <!-- 3Depth -->
                        <ul v-if="subMenu.childMenus?.length" class="child-menu-list">
                            <li
                                v-for="childMenu in subMenu.childMenus"
                                :key="childMenu.key"
                                class="child-menu-item"
                                :class="{
                                    'is-active': isActiveMenu(childMenu.subPath),
                                }"
                            >
                                <NuxtLink :to="childMenu.subPath">
                                    <span class="bullet"></span>
                                    <span class="label">{{ childMenu.label }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- 업체찾기 바로가기 -->
        <!-- <div class="quick-menu-wrapper">
            <h3>나에게 딱 맞는 업체찾기!</h3>

            <ul class="quick-menu-list">
                <li>
                    <NuxtLink to="/browse/region/all">
                        <div class="menu-info">
                            <div class="img-box">
                                <img src="/images/common/map_ico.png" alt="" />
                            </div>

                            <span>지역별 업체찾기</span>
                        </div>

                        <div class="arrow-box">
                            <img src="/images/common/right_arrow.png" alt="" />
                        </div>
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/browse/loan-type/all">
                        <div class="menu-info">
                            <div class="img-box">
                                <img src="/images/common/product_ico.png" alt="" />
                            </div>

                            <span>상품별 업체찾기</span>
                        </div>

                        <div class="arrow-box">
                            <img src="/images/common/right_arrow.png" alt="" />
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div> -->
    </aside>
</template>

<script setup lang="ts">
const route = useRoute()

// =================================================== Computed
// 현재 URL을 기준으로 해당 페이지의 상위 메뉴를 찾습니다.
const currentMenu = computed(() => {
    return ALL_PAGE.find((menu) => {
        // 상위 메뉴 URL 확인
        if (route.path === menu.path) {
            return true
        }

        // 하위 메뉴 URL 확인
        return menu.subMenus?.some((subMenu) => {
            if (route.path === subMenu.subPath) {
                return true
            }

            // 하위 메뉴의 자식 메뉴 URL 확인
            return subMenu.childMenus?.some((childMenu) => {
                return route.path === childMenu.subPath
            })
        })
    })
})

// =================================================== Function
// 현재 페이지와 메뉴 URL이 동일한지 확인합니다.
const isActiveMenu = (path: string) => {
    return route.path === path
}
</script>

<style lang="scss">
aside.side-navigation {
    width: 15.313rem;
    display: none;
    @include respond(pc) {
        display: block;
    }
    nav.side-menu-wrapper {
        div.side-menu-title {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            background-color: $color-secondary-400;
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            h2 {
                color: $color-white;
                font-weight: $font-weight-bold;
                @include r(font-size, 24, 24, 24, 24, 24);
            }
        }
        div.side-menu-content {
            border-left: 1px solid $color-gray-200;
            border-right: 1px solid $color-gray-200;
            border-bottom: 1px solid $color-gray-200;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            @include r(padding-top, 16, 16, 16, 16, 16);
            @include r(padding-bottom, 16, 16, 16, 16, 16);
            @include r(padding-left, 16, 16, 16, 16, 16);
            @include r(padding-right, 16, 16, 16, 16, 16);
            ul.sub-menu-list {
                li.sub-menu-item {
                    a.sub-menu-link {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        justify-content: space-between;
                        @include r(padding-top, 16, 16, 16, 16, 16);
                        @include r(padding-bottom, 16, 16, 16, 16, 16);
                        @include r(padding-left, 16, 16, 16, 16, 16);
                        @include r(padding-right, 16, 16, 16, 16, 16);
                        &.is-active {
                            span {
                                color: $color-gray-900;
                                font-weight: $font-weight-bold;
                            }
                        }
                        span {
                            display: block;
                            color: $color-gray-500;
                            font-weight: $font-weight-medium;
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                        div.img-box {
                            width: 0.4rem;
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                    ul.child-menu-list {
                        display: flex;
                        flex-direction: column;
                        border-radius: 8px;
                        background-color: $color-gray-100;
                        @include r(padding-top, 16, 16, 16, 16, 16);
                        @include r(padding-bottom, 16, 16, 16, 16, 16);
                        @include r(padding-left, 20, 20, 20, 20, 20);
                        @include r(padding-right, 20, 20, 20, 20, 20);
                        @include r(gap, 10, 10, 10, 10, 10);
                        li.child-menu-item {
                            &.is-active {
                                a {
                                    span.bullet {
                                        background-color: $color-gray-900;
                                    }
                                    span.label {
                                        color: $color-gray-900;
                                        font-weight: $font-weight-bold;
                                    }
                                }
                            }
                            a {
                                display: flex;
                                align-items: center;
                                text-decoration: none;
                                span.bullet {
                                    display: block;
                                    width: 0.25rem;
                                    height: 0.25rem;
                                    border-radius: 50%;
                                    background-color: $color-gray-500;
                                    @include r(margin-right, 8, 8, 8, 8, 8);
                                }
                                span.label {
                                    color: $color-gray-500;
                                    font-weight: $font-weight-medium;
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
