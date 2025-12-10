export function useSeo(
    options: {
        title?: string
        description?: string
        image?: string
        noindex?: boolean
    } = {},
) {
    const runtime = useRuntimeConfig()

    const siteName = runtime.public?.siteName || process.env.NUXT_SITE_NAME || 'My Nuxt App'

    const pageTitle = options.title ? `${options.title} - ${siteName}` : siteName

    const meta: any[] = [
        { name: 'description', content: options.description || '' },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: options.description || '' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ]

    if (options.image) {
        meta.push({ property: 'og:image', content: options.image })
    }

    if (options.noindex) {
        meta.push({ name: 'robots', content: 'noindex, nofollow' })
    }

    useHead({
        title: pageTitle,
        meta,
    })
}
