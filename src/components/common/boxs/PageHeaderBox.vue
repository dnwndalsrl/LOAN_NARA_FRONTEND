<template>
    <section class="page-header-box">
        <div class="align-box">
            <h1 class="page-title">{{ title }}</h1>
            <nav v-show="isPc || isLaptop" class="breadcrumb-area">
                <p class="crumb">홈</p>
                <template v-for="(label, idx) in labels" :key="idx">
                    <div class="img-box">
                        <img src="/images/common/right_arrow_dark_gray.png" alt="메뉴" />
                    </div>
                    <p class="crumb" :class="{ 'is-current': idx === labels.length - 1 }">
                        {{ label }}
                    </p>
                </template>
            </nav>
        </div>
    </section>
</template>

<script setup lang="ts">
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()

const route = useRoute()
// =============================================== Computed
// 현재 URL을 기준으로 페이지 네비게이션 정보를 가져옵니다.
const navigationInfo = computed(() => {
    return resolveNavigationInfo(ALL_PAGE, route.path)
})

// breadcrumb에 표시할 메뉴명을 반환합니다.
const labels = computed(() => {
    return navigationInfo.value.labels
})

// 현재 페이지의 제목을 반환합니다.
const title = computed(() => {
    return navigationInfo.value.pageTitle
})
// =============================================== Function
const normalizePath = (path: string) => {
    if (!path) return ''
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
    return path
}

// 현재 URL을 기준으로 페이지 제목과 breadcrumb 정보를 반환합니다.
const resolveNavigationInfo = (nav: any, routePath: string) => {
    const current = normalizePath(routePath)

    // 전체 메뉴를 URL 기준으로 평탄화합니다.
    const candidates = nav.flatMap((menu: any) => {
        const parent = {
            path: normalizePath(menu.path),
            labels: [menu.label],
            pageTitle: menu.pageTitle ?? menu.label,
        }

        const subs = (menu.subMenus ?? []).flatMap((sub: any) => {
            const subItem = {
                path: normalizePath(sub.subPath),
                labels: [menu.label, sub.label],
                pageTitle: sub.pageTitle ?? sub.label,
            }

            const children = (sub.childMenus ?? []).map((child: any) => {
                return {
                    path: normalizePath(child.subPath),
                    labels: [menu.label, sub.label, child.label],
                    pageTitle: child.pageTitle ?? child.label,
                }
            })

            return [subItem, ...children]
        })

        return [parent, ...subs]
    })

    // 현재 URL과 일치하는 메뉴를 찾습니다.
    const matched = candidates.filter((item: any) => {
        return current === item.path || current.startsWith(`${item.path}/`)
    })

    if (!matched.length) {
        return {
            labels: [],
            pageTitle: '',
        }
    }

    // 가장 구체적인 메뉴를 선택합니다.
    // URL 길이가 같으면 depth가 더 깊은 메뉴를 우선합니다.
    const best = matched.reduce((prev: any, curr: any) => {
        if (curr.path.length > prev.path.length) {
            return curr
        }

        if (curr.path.length === prev.path.length && curr.labels.length > prev.labels.length) {
            return curr
        }

        return prev
    })

    // 동일한 메뉴명이 연속해서 들어가는 경우 중복을 제거합니다.
    const uniqueLabels = best.labels.filter((label: string, index: number, array: string[]) => {
        return index === 0 || label !== array[index - 1]
    })

    return {
        labels: uniqueLabels,
        pageTitle: best.pageTitle,
    }
}
</script>

<style lang="scss">
section.page-header-box {
    div.align-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1.page-title {
            color: $color-gray-900;
            font-weight: $font-weight-bold;
            @include r(font-size, 20, 24, 24, 24, 24);
        }
        nav.breadcrumb-area {
            display: flex;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
            p.crumb {
                color: $color-gray-500;
                font-weight: $font-weight-regular;
                @include r(font-size, 13, 13, 13, 13, 13);
            }
            div.img-box {
                @include r(width, 4, 4, 4, 4, 4);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>
