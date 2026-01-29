export const useBreakpoints = () => {
    const isMobile = useMediaQuery('(max-width: 29.999rem)')
    const isMobilePlus = useMediaQuery('(min-width: 30rem) and (max-width: 47.999rem)')
    const isTablet = useMediaQuery('(min-width: 48rem) and (max-width: 61.999rem)')
    const isLaptop = useMediaQuery('(min-width: 62rem) and (max-width: 74.999rem)')
    const isPc = useMediaQuery('(min-width: 75rem)')

    return {
        isMobile,
        isMobilePlus,
        isTablet,
        isLaptop,
        isPc,
    }
}
