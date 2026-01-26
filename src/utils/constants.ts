// 대출나라 메뉴 (Nav)
export const NAV_MENUS = [
    // 지역별 업체 찾기
    {
        key: 'regionSearch',
        label: '지역별 업체 찾기',
        path: '/browse/region',
        subMenus: [],
    },

    // 상품별 업체 찾기
    {
        key: 'loanTypeSearch',
        label: '상품별 업체 찾기',
        path: '/browse/loan-type',
        subMenus: [],
    },

    // 오늘의 추천 업체
    {
        key: 'recommended',
        label: '오늘의 추천 업체',
        path: '/browse/recommended',
        subMenus: [],
    },

    // 맞춤검색
    {
        key: 'customSearch',
        label: '맞춤검색',
        path: '/browse/search',
        subMenus: [],
    },

    // 사기번호 검색
    {
        key: 'scamNumber',
        label: '사기번호 검색',
        path: '/scam-number',
        subMenus: [
            {
                key: 'scamNumberSearch',
                label: '사기번호 검색',
                subPath: '/scam-number/search',
            },
            {
                key: 'illegalFinance',
                label: '불법 금융 대응',
                subPath: '/scam-number/illegal-finance',
                childMenus: [
                    {
                        key: 'highInterest',
                        label: '고금리',
                        subPath: '/scam-number/illegal-finance/high-interest',
                    },
                    {
                        key: 'illegalCollection',
                        label: '불법채권추심',
                        subPath: '/scam-number/illegal-finance/illegal-collection',
                    },
                    {
                        key: 'illegalBrokerageFee',
                        label: '불법대출중개수수료',
                        subPath: '/scam-number/illegal-finance/illegal-brokerage-fee',
                    },
                    {
                        key: 'loanScam',
                        label: '대출사기',
                        subPath: '/scam-number/illegal-finance/loan-scam',
                    },
                    {
                        key: 'phishingScam',
                        label: '피싱사기',
                        subPath: '/scam-number/illegal-finance/phishing-scam',
                    },
                ],
            },
        ],
    },

    // 정식업체 조회
    {
        key: 'officialCompany',
        label: '정식업체 조회',
        path: '/official-company',
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

    // 커뮤니티
    {
        key: 'community',
        label: '커뮤니티',
        path: '/community',
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

    // 이용안내
    {
        key: 'guide',
        label: '이용안내',
        path: '/guide',
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

    // 고객센터
    {
        key: 'support',
        label: '고객센터',
        path: '/support',
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

    // 대출위키
    {
        key: 'loanWiki',
        label: '대출위키',
        path: '/loan-wiki',
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
