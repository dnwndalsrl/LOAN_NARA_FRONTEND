import { readFileSync } from 'fs'

const isDev = process.env.NODE_ENV === 'development'
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
        '@nuxtjs/seo',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@vueuse/nuxt',
        ['@element-plus/nuxt', { importStyle: false }],
    ],
    image: {},
    imports: {
        dirs: ['utils'],
    },
    devtools: { enabled: true },
    ssr: true,
    routeRules: {},
    nitro: {
        devProxy: isDev
            ? {
                  '/api/': {
                      target: process.env.NUXT_API_PROXY_TARGET,
                      changeOrigin: true,
                      prependPath: true,
                      secure: false,
                  },
              }
            : undefined,
    },
    app: {
        head: {
            title: '대출나라',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'author', content: '대출나라' },
                { name: 'description', content: '대출나라 웹 애플리케이션' },
            ],
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico',
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
            niceReturnUrl: process.env.NUXT_PUBLIC_NICE_RETURN_URL,
            appVersion,
        },
    },
    components: [{ path: '~/components', pathPrefix: false }],
    css: ['@/assets/styles/css/reset.css', 'element-plus/dist/index.css'],
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

    // =======================
    // Robots.txt 설정
    // =======================
    robots: {
        allow: ['/'],
        disallow: ['/admin', '/error', '/api', '/test'],
        sitemap: ['/sitemap.xml'],
    },

    // =======================
    // Sitemap 설정
    // =======================
    site: {
        url: 'https://대출나라.com',
        name: '대출나라 웹사이트',
    },
})
