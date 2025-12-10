import type { ValidationError } from 'yup'

export function createErrors<T extends Record<string, any>>(): Partial<Record<keyof T, string>> {
    return {}
}

export function resetErrors<T extends Record<string, any>>(
    errors: Partial<Record<keyof T, string>>,
) {
    Object.keys(errors).forEach((k) => {
        errors[k as keyof T] = undefined
    })
}

export function applyYupErrors<T extends Record<string, any>>(
    e: unknown,
    errors: Partial<Record<keyof T, string>>,
) {
    const ve = e as ValidationError
    if (!ve?.inner?.length) return false
    ve.inner.forEach((err) => {
        const path = err.path as keyof T | undefined
        if (path && !errors[path]) {
            errors[path] = err.message
        }
    })
    return true
}
