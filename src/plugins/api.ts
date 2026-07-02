import axios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const baseURL = config.public.apiBase.endsWith('/')
        ? config.public.apiBase
        : `${config.public.apiBase}/`

    const api = axios.create({
        baseURL,
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
