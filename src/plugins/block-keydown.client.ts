export default defineNuxtPlugin(() => {
    window.addEventListener('keydown', (e) => {
        const active = document.activeElement

        if (
            active &&
            active.tagName === 'INPUT' &&
            (active as HTMLInputElement).type &&
            ['checkbox', 'radio'].includes((active as HTMLInputElement).type)
        ) {
            e.preventDefault()
            e.stopPropagation()
        }
    })
})
