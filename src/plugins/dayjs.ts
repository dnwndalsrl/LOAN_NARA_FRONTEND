import dayjs from 'dayjs'
import 'dayjs/locale/ko'

// 전역 로케일 한국어로 고정
dayjs.locale('ko')

export default defineNuxtPlugin(() => {
    return {
        provide: {
            dayjs,
        },
    }
})
