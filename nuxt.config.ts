// ================================ SEO 관련 라이브러리 세팅
// modules: [
// @nuxtjs/seo
// @nuxtjs/robots
// ]

import { readFileSync } from 'fs'

// site: {
//     url: process.env.NUXT_SITE_URL || 'https://나는기획.com',
//     name: process.env.NUXT_SITE_NAME || '나는기획',
// },
// robots: {
//     disallow: ['/', '/receive', '/admin'],
//     sitemap: [`${process.env.NUXT_SITE_URL}/sitemap.xml`],
// },
// sitemap: {
//     exclude: ['/', '/admin/**', '/receive/**'],
//     defaults: { changefreq: 'weekly', priority: 0.7 },
// },

// ================================ SSR 세팅
// ssr: true
// routeRules: {
//     '/': {
//         ssr: false,
//         prerender: false,
//         headers: { 'x-robots-tag': 'noindex, nofollow' },
//     },
//     '/receive/**': {
//         ssr: false,
//         prerender: false,
//         headers: { 'x-robots-tag': 'noindex, nofollow' },
//     },
//     '/admin/**': {
//         ssr: false,
//         prerender: false,
//         headers: { 'x-robots-tag': 'noindex, nofollow' },
//     },
//     '/api/**': { proxy: 'http://1.234.41.50:2470/api/**' },
// },
// nitro: {
//     prerender: {
//         crawlLinks: true,
//         routes: ['/'],
//     },
// },

let appVersion = 'dev'
try {
    const versionData = JSON.parse(readFileSync('./public/version.json', 'utf-8'))
    appVersion = versionData.version
} catch (e) {
    console.warn('버전 데이터를 가지고 오는 도중 에러 발생', e)
}

export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxt/image',
        ['@element-plus/nuxt', { importStyle: false }],
    ],
    image: {
        quality: 80,
        format: ['avif', 'webp', 'jpeg'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536,
        },
    },
    imports: {
        dirs: ['utils'],
    },
    devtools: { enabled: true },
    ssr: false,
    routeRules: {
        '/**': { headers: { 'x-robots-tag': 'noindex, nofollow' } },
        '/api/**': { proxy: 'http://1.234.41.50:2470/api/**' },
    },
    nitro: {
        // devProxy: {
        //     '/api/': {
        //         target: 'http://1.234.41.50:2470',
        //         changeOrigin: true,
        //     },
        // },
    },
    app: {
        head: {
            title: '나는기획',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'author', content: '나는기획' },
                { name: 'description', content: '나는기획 서비스 웹 애플리케이션' },
            ],
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/fonts-archive/Paperlogy/Paperlogy.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/fonts-archive/JalnanGothic/JalnanGothic.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimAllimjang/HakgyoansimAllimjang.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
                },
            ],
        },
    },
    typescript: {
        typeCheck: false,
        tsConfig: {
            compilerOptions: {
                strict: true,
            },
        },
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
            appVersion,
        },
    },
    css: ['@/assets/styles/css/reset.css', 'element-plus/dist/index.css', 'aos/dist/aos.css'],
    build: { transpile: ['element-plus'] },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use '@/assets/styles/scss/_globals.scss' as *;
                    `,
                },
            },
        },
        esbuild: {
            // 운영 번들에서 console/debugger 제거
            drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
        },
        build: {
            // 페이지별 CSS 분리
            cssCodeSplit: true,
            // 소스 맵 ON/OFF
            sourcemap: false,
        },
    },
})
