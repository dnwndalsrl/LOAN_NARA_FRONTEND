const REM = 16

export const useBreakpoints = () => {
    // SSR 안전 처리
    const width = process.client ? useWindowSize().width : computed(() => 0)

    const isMobile = computed(() => width.value <= 30 * REM)

    const isMobilePlus = computed(() => width.value > 30 * REM && width.value <= 48 * REM)

    const isTablet = computed(() => width.value > 48 * REM && width.value <= 62 * REM)

    const isLaptop = computed(() => width.value > 62 * REM && width.value <= 75 * REM)

    const isPc = computed(() => width.value > 75 * REM)

    return {
        isMobile,
        isMobilePlus,
        isTablet,
        isLaptop,
        isPc,
    }
}
