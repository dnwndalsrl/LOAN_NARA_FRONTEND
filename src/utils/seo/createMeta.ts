export const createMeta = (seo: any) => {
    const { title, description, keywords, image, canonical, noindex } = seo

    return {
        title,
        meta: [
            { name: 'description', content: description },
            keywords && { name: 'keywords', content: keywords },
            noindex && { name: 'robots', content: 'noindex, nofollow' },

            // Open Graph
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            image && { property: 'og:image', content: image },

            // Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            image && { name: 'twitter:image', content: image },
        ].filter(Boolean),

        link: canonical ? [{ rel: 'canonical', href: canonical }] : [],
    }
}
