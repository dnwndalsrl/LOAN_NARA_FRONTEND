<template>
    <div v-if="currentMenu" class="mypage-menu-navigation">
        <!-- 하위 메뉴 리스트 -->
        <div class="mypage-menu-swiper-wrapper">
            <p class="menu-main-title">마이페이지</p>
            <div class="align-box">
                <Swiper
                    :slides-per-view="'auto'"
                    :space-between="8"
                    :free-mode="true"
                    :modules="[FreeMode]"
                    class="mypage-menu-swiper"
                >
                    <SwiperSlide
                        v-for="(subMenu, subMenuIndex) in currentMenu.subMenus"
                        :key="subMenu.key"
                        class="mypage-menu-slide"
                    >
                        <NuxtLink :to="subMenu.subPath" class="mypage-menu-link">
                            {{ subMenu.label }}
                        </NuxtLink>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const route = useRoute()
// =================================================== Computed
// 현재 URL을 기준으로 해당 페이지의 상위 메뉴를 찾습니다.
const currentMenu = computed(() => {
    return NAV_MENUS.find((menu) => {
        // 상위 메뉴 URL 확인
        if (route.path === menu.path || route.path.startsWith(`${menu.path}/`)) {
            return true
        }

        // 하위 메뉴 및 3Depth URL 확인
        return menu.subMenus.some((subMenu) => {
            // Modal 메뉴는 URL이 없으므로 제외
            if (
                subMenu.type === 'link' &&
                subMenu.subPath &&
                (route.path === subMenu.subPath || route.path.startsWith(`${subMenu.subPath}/`))
            ) {
                return true
            }

            return Boolean(
                subMenu.childMenus?.some((childMenu) => {
                    return (
                        route.path === childMenu.subPath ||
                        route.path.startsWith(`${childMenu.subPath}/`)
                    )
                }),
            )
        })
    })
})
</script>

<style lang="scss">
div.mypage-menu-navigation {
    display: block;
    @include respond(pc) {
        display: none;
    }
    p.menu-main-title {
        font-weight: $font-weight-bold;
        color: $color-gray-900;
        @include r(font-size, 20, 24, 24, 24, 24);
        @include r(margin-bottom, 16, 16, 16, 16, 16);
    }
    div.mypage-menu-swiper-wrapper {
        div.align-box {
            div.mypage-menu-swiper {
                overflow: hidden;
                div.swiper-wrapper {
                    overflow: visible;
                    div.mypage-menu-slide {
                        width: auto !important;
                        a {
                            display: flex;
                            align-items: center;
                            background-color: $color-gray-100;
                            border-radius: 8px;
                            cursor: pointer;
                            text-decoration: none;
                            font-weight: $font-weight-semi-bold;
                            color: $color-gray-900;
                            @include r(height, 32, 32, 32, 32, 32);
                            @include r(padding-left, 8, 8, 8, 8, 8);
                            @include r(padding-right, 8, 8, 8, 8, 8);
                            @include r(font-size, 13, 13, 13, 13, 13);
                            &.router-link-active {
                                color: $color-primary-500;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
