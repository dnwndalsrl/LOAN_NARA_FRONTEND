export const useBack = (fallback = '/') => {
    const router = useRouter()
    const goBack = () => {
        router.back()
    }
    return { goBack }
}
