import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import type { ShallowRef } from 'vue'

type MaybeElement = HTMLElement | string | undefined

export interface UseLoadingOptions {
    lock?: boolean
    target?: MaybeElement
    body?: boolean
}

interface UseLoading {
    isActive: Ref<boolean>
    start: (opts?: UseLoadingOptions) => void
    stop: () => void
    run: <T>(work: () => Promise<T> | T, opts?: UseLoadingOptions) => Promise<T>
}

export function useLoading(): UseLoading {
    const instance: ShallowRef<LoadingInstance | null> = shallowRef(null)
    const counter = ref(0)
    const isActive = ref(false)

    const start = (opts: UseLoadingOptions = {}) => {
        if (!import.meta.client) return
        counter.value += 1

        if (instance.value) return
        const { lock = true, target, body } = opts

        isActive.value = true
        instance.value = ElLoading.service({
            lock,
            target,
            body,
        })
    }

    const stop = () => {
        if (!import.meta.client) return
        if (counter.value === 0) return

        counter.value -= 1
        if (counter.value > 0) return

        instance.value?.close()
        instance.value = null
        isActive.value = false
    }

    const run = async <T>(work: () => Promise<T> | T, opts?: UseLoadingOptions): Promise<T> => {
        start(opts)
        try {
            return await work()
        } finally {
            stop()
        }
    }

    return { isActive, start, stop, run }
}
