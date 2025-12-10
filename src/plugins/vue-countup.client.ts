import { defineNuxtPlugin } from '#app'
import { defineAsyncComponent } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
    const CountUp = defineAsyncComponent(async () => {
        const m = await import('vue-countup-v3')
        return (m as any).default || (m as any).VueCountUp || (m as any).CountUp
    })
    nuxtApp.vueApp.component('CountUp', CountUp)
})
