type NavMenuType = 'link' | 'modal'

interface NavChildMenu {
    key: string
    label: string
    type: NavMenuType
    subPath: string
}

interface NavSubMenu {
    key: string
    label: string
    type: NavMenuType
    subPath?: string
    action?: string
    childMenus?: NavChildMenu[]
}

interface MegaMenuItem {
    key: string
    label: string
    path: string
}

interface NavMenu {
    key: string
    label: string
    type: NavMenuType
    path: string
    subMenus: NavSubMenu[]

    megaMenuItems?: MegaMenuItem[]
    megaMenuMorePath?: string
}

// 대출나라 전 Page Menu
export const ALL_PAGE = [
    {
        key: 'home',
        label: '홈',
        path: '/',
        subMenus: [],
    },
    {
        key: 'login',
        label: '로그인',
        path: '/auth/login',
        subMenus: [],
    },
    {
        key: 'findAccount',
        label: '아이디/비밀번호 찾기',
        path: '/auth/find-account',
        subMenus: [],
    },
    {
        key: 'resetPassword',
        label: '비밀번호 재설정',
        path: '/auth/find-account/reset-password',
        subMenus: [],
    },
    {
        key: 'resetPassword',
        label: '비밀번호 재설정',
        path: '/auth/find-account/reset-password',
        subMenus: [],
    },
    {
        key: 'signupTerms',
        label: '업체 회원가입',
        path: '/auth/signup/terms',
        subMenus: [],
    },
    {
        key: 'signupForm',
        label: '업체 회원가입',
        path: '/auth/signup/form',
        subMenus: [],
    },
    {
        key: 'signupComplete',
        label: '업체 회원가입',
        path: '/auth/signup/complete',
        subMenus: [],
    },
    {
        key: 'regionSearch',
        label: '지역별 업체 찾기',
        path: '/browse/region',
        subMenus: [],
    },
    {
        key: 'loanTypeSearch',
        label: '상품별 업체 찾기',
        path: '/browse/loan-type',
        subMenus: [],
    },
    {
        key: 'recommended',
        label: '오늘의 추천 업체',
        path: '/browse/recommended',
        subMenus: [],
    },
    {
        key: 'customSearch',
        label: '맞춤검색',
        path: '/browse/search',
        subMenus: [],
    },
    {
        key: 'scamNumber',
        label: '사기번호 검색',
        path: '/scam-number/search',
        subMenus: [
            {
                key: 'scamNumberSearch',
                label: '사기번호 검색',
                subPath: '/scam-number/search',
            },
            {
                key: 'illegalFinance',
                label: '불법 금융 대응',
                subPath: '/scam-number/illegal-finance/high-interest',
                childMenus: [
                    {
                        key: 'highInterest',
                        label: '고금리',
                        pageTitle: '고금리',
                        subPath: '/scam-number/illegal-finance/high-interest',
                    },
                    {
                        key: 'illegalCollection',
                        label: '불법채권추심',
                        pageTitle: '불법채권추심',
                        subPath: '/scam-number/illegal-finance/illegal-collection',
                    },
                    {
                        key: 'illegalBrokerageFee',
                        label: '불법대출중개수수료',
                        pageTitle: '불법대출중개수수료',
                        subPath: '/scam-number/illegal-finance/illegal-brokerage-fee',
                    },
                    {
                        key: 'loanScam',
                        label: '대출사기',
                        pageTitle: '대출사기',
                        subPath: '/scam-number/illegal-finance/loan-scam',
                    },
                    {
                        key: 'phishingScam',
                        label: '피싱사기',
                        pageTitle: '피싱사기',
                        subPath: '/scam-number/illegal-finance/phishing-scam',
                    },
                ],
            },
        ],
    },
    {
        key: 'officialCompany',
        label: '정식업체 조회',
        path: '/official-company/search',
        subMenus: [
            {
                key: 'officialCompanySearch',
                label: '정식업체 조회',
                subPath: '/official-company/search',
            },
            {
                key: 'integratedSearch',
                label: '대부업체 통합조회',
                subPath: '/official-company/integrated-search',
            },
        ],
    },
    {
        key: 'community',
        label: '커뮤니티',
        path: '/community/finance-news',
        subMenus: [
            {
                key: 'financeNews',
                label: '금융뉴스',
                subPath: '/community/finance-news',
            },
            {
                key: 'loanNews',
                label: '대부업 뉴스',
                subPath: '/community/loan-news',
            },
        ],
    },
    {
        key: 'guide',
        label: '이용안내',
        path: '/guide/customer',
        subMenus: [
            {
                key: 'customerGuide',
                label: '고객 이용안내',
                subPath: '/guide/customer',
            },
            {
                key: 'companyGuide',
                label: '업체 이용안내',
                subPath: '/guide/company',
            },
        ],
    },
    {
        key: 'support',
        label: '고객센터',
        path: '/support/notice',
        subMenus: [
            {
                key: 'notice',
                label: '공지사항',
                subPath: '/support/notice',
            },
            {
                key: 'faq',
                label: '자주 묻는 질문',
                subPath: '/support/faq',
            },
            {
                key: 'inquiry',
                label: '1:1 문의',
                subPath: '/support/inquiry',
            },
            {
                key: 'adInquiry',
                label: '광고문의',
                subPath: '/support/ad-inquiry',
            },
        ],
    },
    {
        key: 'loanWiki',
        label: '대출위키',
        path: '/loan-wiki',
        subMenus: [],
    },
]

// 대출나라 네비게이션 메뉴
export const NAV_MENUS: NavMenu[] = [
    {
        key: 'regionSearch',
        label: '지역별 업체 찾기',
        path: '/browse/region/all',
        type: 'link',
        subMenus: [],
        megaMenuItems: [
            {
                key: 'seoul',
                label: '서울',
                path: '/browse/region/1/all',
            },
            {
                key: 'gyeonggi',
                label: '경기',
                path: '/browse/region/2/all',
            },
            {
                key: 'incheon',
                label: '인천',
                path: '/browse/region/3/all',
            },
            {
                key: 'daejeon',
                label: '대전',
                path: '/browse/region/4/all',
            },
            {
                key: 'daegu',
                label: '대구',
                path: '/browse/region/5/all',
            },
        ],
        megaMenuMorePath: '/browse/region/all',
    },
    {
        key: 'loanTypeSearch',
        label: '상품별 업체 찾기',
        path: '/browse/loan-type/all',
        type: 'link',
        subMenus: [],
        megaMenuItems: [
            {
                key: 'worker',
                label: '직장인',
                path: '/browse/loan-type/worker',
            },
            {
                key: 'unemployed',
                label: '무직자',
                path: '/browse/loan-type/unemployed',
            },
            {
                key: 'business',
                label: '사업자',
                path: '/browse/loan-type/business',
            },
            {
                key: 'overdue',
                label: '연체자',
                path: '/browse/loan-type/overdue',
            },
            {
                key: 'badCredit',
                label: '신불자',
                path: '/browse/loan-type/bad-credit',
            },
        ],
        megaMenuMorePath: '/browse/loan-type/all',
    },
    {
        key: 'recommended',
        label: '오늘의 추천 업체',
        path: '/browse/recommended',
        type: 'link',
        subMenus: [],
    },
    {
        key: 'customSearch',
        label: '맞춤검색',
        path: '/browse/search',
        type: 'link',
        subMenus: [],
    },
    {
        key: 'scamNumber',
        label: '사기번호 검색',
        path: '/scam-number/search',
        type: 'link',
        subMenus: [
            {
                key: 'scamNumberSearch',
                label: '사기번호 검색',
                type: 'link',
                subPath: '/scam-number/search',
            },
            {
                key: 'illegalFinance',
                label: '불법 금융 대응',
                type: 'link',
                subPath: '/scam-number/illegal-finance/high-interest',
                childMenus: [
                    {
                        key: 'highInterest',
                        label: '고금리',
                        type: 'link',
                        subPath: '/scam-number/illegal-finance/high-interest',
                    },
                    {
                        key: 'illegalCollection',
                        label: '불법채권추심',
                        type: 'link',
                        subPath: '/scam-number/illegal-finance/illegal-collection',
                    },
                    {
                        key: 'illegalBrokerageFee',
                        label: '불법대출중개수수료',
                        type: 'link',
                        subPath: '/scam-number/illegal-finance/illegal-brokerage-fee',
                    },
                    {
                        key: 'loanScam',
                        label: '대출사기',
                        type: 'link',
                        subPath: '/scam-number/illegal-finance/loan-scam',
                    },
                    {
                        key: 'phishingScam',
                        label: '피싱사기',
                        type: 'link',
                        subPath: '/scam-number/illegal-finance/phishing-scam',
                    },
                ],
            },
        ],
    },
    {
        key: 'officialCompany',
        label: '정식업체 조회',
        path: '/official-company/search',
        type: 'link',
        subMenus: [
            {
                key: 'officialCompanySearch',
                label: '정식업체 조회',
                type: 'link',
                subPath: '/official-company/search',
            },
            {
                key: 'companyCheckGuide',
                label: '업체 확인 방법',
                type: 'modal',
                action: 'companyCheckGuide',
            },
            {
                key: 'integratedSearch',
                label: '대부업체 통합조회',
                type: 'link',
                subPath: '/official-company/integrated-search',
            },
        ],
    },
    {
        key: 'community',
        label: '커뮤니티',
        path: '/community/finance-news',
        type: 'link',
        subMenus: [
            {
                key: 'financeNews',
                label: '금융뉴스',
                type: 'link',
                subPath: '/community/finance-news',
            },
            {
                key: 'loanNews',
                label: '대부업 뉴스',
                type: 'link',
                subPath: '/community/loan-news',
            },
        ],
    },
    {
        key: 'guide',
        label: '이용안내',
        path: '/guide/customer',
        type: 'link',
        subMenus: [
            {
                key: 'customerGuide',
                label: '고객 이용안내',
                type: 'link',
                subPath: '/guide/customer',
            },
            {
                key: 'companyGuide',
                label: '업체 이용안내',
                type: 'link',
                subPath: '/guide/company',
            },
        ],
    },
    {
        key: 'support',
        label: '고객센터',
        path: '/support/notice',
        type: 'link',
        subMenus: [
            {
                key: 'notice',
                label: '공지사항',
                type: 'link',
                subPath: '/support/notice',
            },
            {
                key: 'faq',
                label: '자주 묻는 질문',
                type: 'link',
                subPath: '/support/faq',
            },
            {
                key: 'inquiry',
                label: '1:1 문의',
                type: 'link',
                subPath: '/support/inquiry',
            },
            {
                key: 'adInquiry',
                label: '광고문의',
                type: 'link',
                subPath: '/support/ad-inquiry',
            },
        ],
    },
    {
        key: 'loanWiki',
        label: '대출위키',
        path: '/loan-wiki',
        type: 'link',
        subMenus: [],
    },
]

// Error Message
export const ERROR_MESSAGE = {
    // 공통
    DEFAULT: '문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
    NETWORK: '네트워크 연결을 확인해주세요.',
    TIMEOUT: '요청 시간이 초과되었습니다. 잠시 후 다시 시도해주세요.',

    // HTTP 상태 기반
    400: '잘못된 요청입니다',
    401: '인증에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.',
    403: '접근 권한이 없습니다',
    404: '요청한 리소스를 찾을 수 없습니다.',
    409: '이미 처리된 요청입니다.',
    429: '요청이 많습니다. 잠시 후 다시 시도해주세요.',
    500: '일시적인 서버 오류입니다. 잠시 후 다시 시도해주세요.',
}
