const REM = 16
export const useBreakpoints = () => {
    const { width } = useWindowSize()

    const isMobile = computed(() => width.value <= 30 * REM)

    const isMobilePlus = computed(() => width.value > 30.0625 * REM && width.value <= 48 * REM)

    const isTablet = computed(() => width.value > 48.0625 * REM && width.value <= 62 * REM)

    const isLaptop = computed(() => width.value > 62.0625 * REM && width.value <= 75 * REM)

    const isPc = computed(() => width.value > 75.0625 * REM)

    return {
        isMobile,
        isMobilePlus,
        isTablet,
        isLaptop,
        isPc,
    }
}
