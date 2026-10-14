import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuthStore()

    await auth.fetchSession()

    // 마이페이지 하위 경로는 로그인 사용자만 접근 가능
    if (to.path.startsWith('/mypage') && !auth.loggedIn) {
        return navigateTo('/')
    }
})
