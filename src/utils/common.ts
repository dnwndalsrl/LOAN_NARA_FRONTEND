import type { AxiosError } from 'axios'

const nf = new Intl.NumberFormat('en-US') // 항상 콤마(,) 사용

// 천자리 콤마
export function thousands(value: number | string | null | undefined): string {
    if (value === null || value === undefined) return '0'
    const num =
        typeof value === 'number'
            ? value
            : Number(
                  String(value)
                      .trim()
                      .replace(/[^\d.-]/g, ''),
              ) // 숫자만 추출(소수/부호 유지)
    return Number.isFinite(num) ? nf.format(num) : ''
}

// payload 객체 내부 ''와 같이 빈 값일경우 Empty 처리
export function removeEmpty(obj: Record<string, any>) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== '' && v != null))
}

// SelectBox Option 중 Value가 ALL인 값 초기화
export function normalizeAll(v: string | null | undefined) {
    return v === 'ALL' ? '' : v
}

// 에러 객체를 받아 메시지 반환
export function resolveErrorMessage(err: unknown, fallback?: string): string {
    const e = err as Partial<AxiosError> & { code?: string }

    // 1. 네트워크 끊김
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
        return ERROR_MESSAGE.NETWORK
    }

    // 2. 요청 타임아웃 (axios code)
    if (e?.code === 'ECONNABORTED') {
        return ERROR_MESSAGE.TIMEOUT
    }

    // 3. HTTP 상태 코드 기반 처리
    const status = e?.response?.status
    const serverMessage = (e?.response?.data as any)?.error?.message

    if (status === 500 && serverMessage) {
        return serverMessage
    }

    if (status && (ERROR_MESSAGE as any)[status]) {
        return (ERROR_MESSAGE as any)[status]
    }

    // 4. fallback > 기본 메시지 순서로 반환
    return fallback || ERROR_MESSAGE.DEFAULT
}

// 전화번호 자동 하이픈 함수
export const autoHyphenPhone = (value: string): string => {
    if (!value) return ''
    const onlyNums = value.replace(/[^0-9]/g, '')

    // 최종 형태 강제
    if (onlyNums.length === 11) {
        // 000-0000-0000
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7)}`
    }
    if (onlyNums.length === 10) {
        // 00-0000-0000
        return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 6)}-${onlyNums.slice(6)}`
    }

    // 타이핑 중간 단계
    if (onlyNums.length <= 3) {
        // 1 ~ 3자리: 하이픈 없음
        return onlyNums
    }
    if (onlyNums.length <= 7) {
        // 4 ~ 7자리: 첫 하이픈만 (두 번째 하이픈 금지 → '010-1234-' 방지)
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
    }
    // 8 ~ 9자리: 3-4-나머지 (두 번째 하이픈은 이때부터)
    if (onlyNums.length < 10) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7)}`
    }

    // 12자리 이상 들어오면 그냥 숫자만(보호)
    return onlyNums
}

// 전화번호 자동 하이픈 함수 (010-0000-0000 고정)
export const formatMobile = (value: string) => {
    const n = (value ?? '').replace(/\D/g, '').slice(0, 11)
    if (!n) return ''

    if (n.length <= 3) return n
    if (n.length <= 7) return `${n.slice(0, 3)}-${n.slice(3)}`
    return `${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7)}`
}

// 확장자 → MIME
export const extToMime = (name: string) => {
    const ext = (name.split('.').pop() || '').toLowerCase()
    const map: Record<string, string> = {
        csv: 'text/csv',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        pdf: 'application/pdf',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        bmp: 'image/bmp',
        avif: 'image/avif',
        zip: 'application/zip',
    }
    return map[ext] || ''
}

// filename 파싱 유틸
export const parseFilename = (contentDisposition: string | undefined): string | null => {
    if (!contentDisposition) return null

    // filename*=UTF-8''... 우선
    const star = /filename\*\s*=\s*([^']*)''([^;]+)/i.exec(contentDisposition)
    if (star && star[2]) {
        return decodeURIComponent(star[2])
    }

    // fallback: filename="..."
    const normal = /filename\s*=\s*"([^"]+)"/i.exec(contentDisposition)
    if (normal && normal[1]) return normal[1]

    // fallback: filename=...
    const bare = /filename\s*=\s*([^;]+)/i.exec(contentDisposition)
    if (bare && bare[1]) return bare[1].trim()

    return null
}

// IP 체크
export const isValidIP = (ip: string): boolean => {
    if (!ip) return false

    // IPv4 정규식
    const regex =
        /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/

    return regex.test(ip.trim())
}

// Table 내 공백 처리 함수
export const formatEmpty = (value: any, fallback = '-'): string => {
    if (value === null || value === undefined) return fallback

    if (typeof value === 'string' && value.trim() === '') return fallback

    return String(value)
}

// input type number 정수만 입력
export const blockInvalid = (e: any) => {
    if (e.key === '.' || e.key === 'e' || e.key === 'E' || e.key === '-') {
        e.preventDefault()
    }
}
