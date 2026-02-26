const REM = 16

export const useBreakpoints = () => {
    const mounted = ref(false)

    // ✅ SSR에서는 useWindowSize() 호출 금지
    const width = ref(0)

    if (import.meta.client) {
        const { width: w } = useWindowSize()
        watch(w, (v) => (width.value = v), { immediate: true })
    }

    onMounted(() => {
        mounted.value = true
    })

    // ✅ SSR(마운트 전)에는 전부 false
    const isMobile = computed(() => mounted.value && width.value <= 30 * REM)
    const isMobilePlus = computed(
        () => mounted.value && width.value > 30 * REM && width.value <= 48 * REM,
    )
    const isTablet = computed(
        () => mounted.value && width.value > 48 * REM && width.value <= 62 * REM,
    )
    const isLaptop = computed(
        () => mounted.value && width.value > 62 * REM && width.value <= 75 * REM,
    )
    const isPc = computed(() => mounted.value && width.value > 75 * REM)

    return {
        mounted, // ✅ SSR 분기할 때 유용 (SSR에서는 false)
        isMobile,
        isMobilePlus,
        isTablet,
        isLaptop,
        isPc,
    }
}
