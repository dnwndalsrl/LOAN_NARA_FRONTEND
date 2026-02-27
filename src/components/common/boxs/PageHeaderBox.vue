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
const labels = computed(() => resolveNavLabels(ALL_PAGE, route.path))

const title = computed(() => {
    return labels.value[labels.value.length - 1] ?? ''
})
// =============================================== Function
const normalizePath = (path: string) => {
    if (!path) return ''
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
    return path
}

const resolveNavLabels = (nav: any, routePath: any) => {
    const current = normalizePath(routePath)
    // 모든 가능한 경로를 평탄화
    const candidates = nav.flatMap((menu: any) => {
        const parent = {
            path: normalizePath(menu.path),
            labels: [menu.label],
        }

        const subs = (menu.subMenus ?? []).flatMap((sub: any) => {
            const subItem = {
                path: normalizePath(sub.subPath),
                labels: [menu.label, sub.label],
            }

            const children = (sub.childMenus ?? []).map((child: any) => ({
                path: normalizePath(child.subPath),
                labels: [menu.label, sub.label, child.label],
            }))

            return [subItem, ...children]
        })

        return [parent, ...subs]
    })

    // 현재 경로와 prefix 매칭되는 것만 필터
    const matched = candidates.filter(
        (item: any) => current === item.path || current.startsWith(item.path + '/'),
    )

    if (!matched.length) return []

    // 가장 긴 path(=가장 구체적인 메뉴) 선택
    const best = matched.reduce((prev: any, curr: any) =>
        curr.path.length > prev.path.length ? curr : prev,
    )

    return best.labels
}
</script>

<style lang="scss">
section.page-header-box {
    div.align-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1.page-title {
            color: $color-black;
            font-weight: 700;
            @include r(font-size, 20, 24, 24, 24, 24);
        }
        nav.breadcrumb-area {
            display: flex;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
            p.crumb {
                color: $color-dark-gray;
                font-weight: 400;
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
