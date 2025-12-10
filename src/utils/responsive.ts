const MIN_VW = 22.5 // 360px
const MAX_VW = 75 // 1200px

/**
 * rClamp: rem 단위 전용 반응형 clamp() 생성
 * @param min 최소 rem 값
 * @param max 최대 rem 값
 * @returns clamp() 문자열
 */

export function rClamp(min: number, max: number): string {
    const slope = (max - min) / (MAX_VW - MIN_VW)
    const intercept = min - slope * MIN_VW
    return `clamp(${min}rem, calc(${intercept}rem + ${slope * 100}vw), ${max}rem)`
}

/**
 * responsiveValue: min만 있으면 고정 rem, min/max 둘 다 있으면 rClamp
 * @param min 최소 rem 값
 * @param max 최대 rem 값 (optional)
 */

export function responsiveValue(min?: number, max?: number): string | undefined {
    if (min == null && max == null) return undefined
    if (min != null && max != null) return rClamp(min, max)
    return min != null ? `${min}rem` : undefined
}
