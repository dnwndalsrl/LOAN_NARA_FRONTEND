<template>
    <aside v-if="currentMenu" class="mypage-side-navigation">
        <!-- 사이드 메뉴 -->
        <nav class="side-menu-wrapper" :aria-label="`${currentMenu.label} 메뉴`">
            <!-- 상위 메뉴 타이틀 -->
            <div class="side-menu-title">
                <h2>{{ currentMenu.label }}</h2>
            </div>

            <!-- 하위 메뉴 -->
            <div class="side-menu-content">
                <!-- 로그인 정보 -->
                <div class="user-info-box">
                    <div class="user-info-title-box">
                        <div class="img-box">
                            <img src="/images/common/user_login.png" alt="유저정보" />
                        </div>
                        <p><strong>대출나라대부중개</strong> 님</p>
                    </div>
                    <div class="user-info-content-box">
                        <div class="content-wrapper-box">
                            <p class="main-title">무료 이용현황</p>
                            <div class="content-item">
                                <p class="title">광고종료일</p>
                                <p class="content">02월 10일 (D-90)</p>
                            </div>
                            <div class="content-item">
                                <p class="title">이용금액</p>
                                <p class="content">0만원</p>
                            </div>
                            <div class="content-item">
                                <p class="title">금일 줄광고 점프 남은 횟수</p>
                                <p class="content">99회</p>
                            </div>
                        </div>
                        <div class="content-wrapper-box">
                            <p class="main-title">유료 이용현황</p>
                            <div class="content-item">
                                <p class="title">점프 충전 횟수</p>
                                <p class="content">0회</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 하위 메뉴 리스트 -->
                <ul class="sub-menu-list">
                    <li
                        v-for="(subMenu, subMenuIndex) in currentMenu.subMenus"
                        :key="subMenu.key"
                        class="sub-menu-item"
                    >
                        <template v-if="isSpecialMypageMenu(subMenu.key)">
                            <NuxtLink
                                :to="subMenu.subPath"
                                class="special-sub-menu-link"
                                :class="{
                                    'is-active': isActiveSubMenu(subMenu),
                                    'large-margin-bottom': subMenuIndex === 2,
                                }"
                            >
                                <span>{{ subMenu.label }}</span>

                                <div v-if="isActiveSubMenu(subMenu)" class="img-box">
                                    <img
                                        src="/images/common/right_arrow_gray.png"
                                        alt="현재 활성화 페이지"
                                    />
                                </div>
                            </NuxtLink>
                        </template>
                        <template v-else>
                            <NuxtLink
                                :to="subMenu.subPath"
                                class="sub-menu-link"
                                :class="{
                                    'is-active': isActiveSubMenu(subMenu),
                                }"
                            >
                                <span>{{ subMenu.label }}</span>

                                <div v-if="isActiveSubMenu(subMenu)" class="img-box">
                                    <img
                                        src="/images/common/right_arrow_black.png"
                                        alt="현재 활성화 페이지"
                                    />
                                </div>
                            </NuxtLink>
                        </template>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- 업체찾기 바로가기 -->
        <div class="quick-menu-wrapper">
            <h3>나에게 딱 맞는 업체찾기!</h3>

            <ul class="quick-menu-list">
                <li>
                    <NuxtLink to="/browse/region/all">
                        <div class="menu-info">
                            <div class="img-box">
                                <img src="/images/common/map_ico.png" alt="지역별 업체찾기" />
                            </div>

                            <span>지역별 업체찾기</span>
                        </div>

                        <div class="arrow-box">
                            <img
                                src="/images/common/right_arrow_gray.png"
                                alt="지역별 업체찾기 바로가기"
                            />
                        </div>
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/browse/loan-type/all">
                        <div class="menu-info">
                            <div class="img-box">
                                <img src="/images/common/giftcard_icon.png" alt="상품별 업체찾기" />
                            </div>

                            <span>상품별 업체찾기</span>
                        </div>

                        <div class="arrow-box">
                            <img
                                src="/images/common/right_arrow_gray.png"
                                alt="상품별 업체찾기 바로가기"
                            />
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
const specialMypageMenuKeys = ['mypageProfile', 'mypageAdsExtend', 'mypageAdminInquiry']
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

// =================================================== Function
const isSpecialMypageMenu = (key: string) => {
    return specialMypageMenuKeys.includes(key)
}

// 현재 URL을 기준으로 2Depth 메뉴 활성화 여부를 확인합니다.
const isActiveSubMenu = (subMenu: any) => {
    if (
        subMenu.subPath &&
        (route.path === subMenu.subPath || route.path.startsWith(`${subMenu.subPath}/`))
    ) {
        return true
    }

    return Boolean(
        subMenu.childMenus?.some((childMenu: any) => {
            return (
                route.path === childMenu.subPath || route.path.startsWith(`${childMenu.subPath}/`)
            )
        }),
    )
}
</script>

<style lang="scss">
aside.mypage-side-navigation {
    flex-shrink: 0;
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
            @include r(padding-top, 20, 20, 20, 20, 20);
            @include r(padding-bottom, 16, 16, 16, 16, 16);
            @include r(padding-left, 16, 16, 16, 16, 16);
            @include r(padding-right, 16, 16, 16, 16, 16);
            div.user-info-box {
                display: flex;
                flex-direction: column;
                @include r(gap, 20, 20, 20, 20, 20);
                @include r(margin-bottom, 16, 16, 16, 16, 16);
                div.user-info-title-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 8, 8, 8, 8, 8);
                    div.img-box {
                        @include r(width, 17, 17, 17, 17, 17);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    p {
                        color: $color-gray-900;
                        font-weight: $font-weight-medium;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        strong {
                            font-weight: $font-weight-bold;
                        }
                    }
                }
                div.user-info-content-box {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid $color-gray-200;
                    border-radius: 8px;
                    @include r(gap, 20, 20, 20, 20, 20);
                    @include r(padding-top, 20, 20, 20, 20, 20);
                    @include r(padding-bottom, 20, 20, 20, 20, 20);
                    @include r(padding-left, 20, 20, 20, 20, 20);
                    @include r(padding-right, 20, 20, 20, 20, 20);
                    div.content-wrapper-box {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 10, 10, 10, 10, 10);
                        p.main-title {
                            color: $color-primary-500;
                            font-weight: $font-weight-bold;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        div.content-item {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            p.title {
                                color: $color-gray-900;
                                font-weight: $font-weight-regular;
                                @include r(font-size, 13, 13, 13, 13, 13);
                            }
                            p.content {
                                color: $color-gray-900;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 13, 13, 13, 13, 13);
                            }
                        }
                    }
                }
            }
            ul.sub-menu-list {
                li.sub-menu-item {
                    a.special-sub-menu-link {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        justify-content: space-between;
                        background-color: $color-gray-100;
                        border-radius: 8px;
                        @include r(margin-bottom, 8, 8, 8, 8, 8);
                        @include r(padding-top, 16, 16, 16, 16, 16);
                        @include r(padding-bottom, 16, 16, 16, 16, 16);
                        @include r(padding-left, 16, 16, 16, 16, 16);
                        @include r(padding-right, 16, 16, 16, 16, 16);
                        &.large-margin-bottom {
                            @include r(margin-bottom, 20, 20, 20, 20, 20);
                        }
                        &.is-active {
                            border: 1px solid $color-primary-500;
                            span {
                                color: $color-primary-500;
                                font-weight: $font-weight-bold;
                            }
                        }
                        span {
                            display: block;
                            color: $color-gray-900;
                            font-weight: $font-weight-semi-bold;
                            @include r(font-size, 14, 14, 14, 14, 14);
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
                }
            }
        }
    }
    div.quick-menu-wrapper {
        background-color: $color-gray-100;
        border-radius: 16px;
        @include r(margin-top, 24, 24, 24, 24, 24);
        @include r(padding-top, 16, 16, 16, 16, 16);
        @include r(padding-bottom, 16, 16, 16, 16, 16);
        @include r(padding-left, 16, 16, 16, 16, 16);
        @include r(padding-right, 16, 16, 16, 16, 16);
        h3 {
            color: $color-gray-900;
            font-weight: $font-weight-bold;
            @include r(font-size, 14, 14, 14, 14, 14);
        }
        ul.quick-menu-list {
            display: flex;
            flex-direction: column;
            @include r(gap, 8, 8, 8, 8, 8);
            @include r(margin-top, 12, 12, 12, 12, 12);
            li {
                a {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    background-color: $color-white;
                    border: 1px solid $color-gray-200;
                    border-radius: 8px;
                    text-decoration: none;
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 16, 16, 16, 16, 16);
                    div.menu-info {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 10, 10, 10);
                        div.img-box {
                            @include r(width, 24, 24, 24, 24, 24);
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                        span {
                            color: $color-gray-900;
                            font-weight: $font-weight-semi-bold;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                    div.arrow-box {
                        @include r(width, 6, 6, 6, 6, 6);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }
        }
    }
}
</style>
