import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        nuxtApp.hook('app:suspense:resolve', async () => {
            const AOS = (await import('aos')).default
            AOS.init({
                once: true,
                duration: 600,
                easing: 'ease-out',
            })
            nuxtApp.hook('page:finish', () => {
                AOS.refreshHard()
            })
        })
    }
})
