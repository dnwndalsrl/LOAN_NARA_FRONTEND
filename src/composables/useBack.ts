export const useBack = (fallback = '/') => {
    const router = useRouter()
    const goBack = () => {
        if (process.client && window.history.length > 1) {
            router.back()
        } else {
            navigateTo(fallback, { replace: true })
        }
    }
    return { goBack }
}
