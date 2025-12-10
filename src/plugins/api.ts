import axios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const api = axios.create({
        baseURL: config.public.apiBase,
        withCredentials: true,
        timeout: 10000,
    })

    api.interceptors.request.use((req) => {
        if (req.headers) delete (req.headers as any).Authorization
        return req
    })
    api.interceptors.response.use(
        (res) => res,
        async (error) => {
            return Promise.reject(error)
        },
    )

    return { provide: { api } }
})
