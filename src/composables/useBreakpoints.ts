export const useBreakpoints = () => {
    const isMobile = useMediaQuery('(max-width: 30rem)')
    const isMobilePlus = useMediaQuery('(min-width: 30.0625rem) and (max-width: 48rem)')
    const isTablet = useMediaQuery('(min-width: 48.0625rem) and (max-width: 62rem)')
    const isLaptop = useMediaQuery('(min-width: 62.0625rem) and (max-width: 75rem)')
    const isPc = useMediaQuery('(min-width: 75.0625rem)')

    return {
        isMobile,
        isMobilePlus,
        isTablet,
        isLaptop,
        isPc,
    }
}
