export default defineNuxtPlugin((nuxtApp) => {
    if (process.env.NODE_ENV === 'development') {
        return
    }

    const config = useRuntimeConfig()
    const currentVersion = config.public.appVersion

    // 1분 주기
    const CHECK_INTERVAL_MS = 10 * 60 * 1000

    const checkVersion = async () => {
        try {
            const res = await fetch('/version.json', {
                cache: 'no-store', // 캐시 사용 금지 (늘 최신 파일 요청)
            })

            const data = await res.json()

            if (data.version !== currentVersion) {
                window.location.reload()
            }
        } catch (e) {
            console.error('버전 체크 실패', e)
        }
    }

    nuxtApp.hook('app:mounted', () => {
        checkVersion()
        setInterval(checkVersion, CHECK_INTERVAL_MS)
    })
})
