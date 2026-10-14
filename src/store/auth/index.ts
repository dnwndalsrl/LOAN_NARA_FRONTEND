import { defineStore } from 'pinia'

// 중복 API 방지
let inflight: any = null

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        userInfo: undefined as any,
    }),

    actions: {
        // 토큰 검증 API
        async fetchSession() {
            const authorization = useCookie('Authorization')

            if (authorization.value) {
                this.loggedIn = true

                // API 연동 전 임시 사용자 정보
                this.userInfo = {
                    name: '테스트 회원',
                }

                return true
            }

            this.reset()

            return false
        },

        // 임시 로그인 처리를 합니다.
        login() {
            const authorization = useCookie('Authorization', {
                maxAge: 60 * 60 * 24,
                sameSite: 'lax',
            })

            authorization.value = 'temp-access-token'

            this.loggedIn = true

            this.userInfo = {
                name: '테스트 회원',
            }
        },

        // 세션 초기화. 네비게이션 가드/로그아웃/에러 처리 시 공통으로 호출.
        reset() {
            this.loggedIn = false
            this.userInfo = undefined
            inflight = null
        },

        // 로그아웃 API
        async logout() {
            // try {
            //     start()
            //     await postLogout()
            // } catch (e) {
            //     message(resolveErrorMessage(e))
            // } finally {
            //     this.reset()
            //     stop()
            // }
        },
    },
})
