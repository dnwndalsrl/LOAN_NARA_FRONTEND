import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import ko from 'element-plus/es/locale/lang/ko'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus, { locale: ko })

    // 아이콘 전역 등록 (필요한 것만 골라 등록해도 OK)
    Object.entries(Icons).forEach(([name, comp]) => {
        nuxtApp.vueApp.component(name, comp as any)
    })
})
