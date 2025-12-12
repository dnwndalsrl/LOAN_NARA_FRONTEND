// 대출나라 메뉴 (Nav)
export const NAV_MENUS = [
    // 지역별 업체 찾기
    {
        key: 'regionSearch',
        label: '지역별 업체 찾기',
        path: 'region-search',
        subMenus: [],
    },
    // 상품별 업체 찾기
    {
        key: 'productSearch',
        label: '상품별 업체 찾기',
        path: 'product-search',
        subMenus: [],
    },
    // 오늘의 추천 업체
    {
        key: 'todayRecommend',
        label: '오늘의 추천 업체',
        path: 'today-recommend',
        subMenus: [],
    },
    // 맞춤검색
    {
        key: 'customSearch',
        label: '맞춤검색',
        path: 'custom-search',
        subMenus: [],
    },
    // 사기번호 검색
    {
        key: 'fraudSearch',
        label: '사기번호 검색',
        path: 'fraud-search',
        subMenus: [
            {
                key: 'fraudNumberSearch',
                label: '사기번호 검색',
                subPath: 'fraud-number-search',
            },
            {
                key: 'illegalFinanceResponse',
                label: '불법 금융 대응',
                subPath: 'illegal-finance-response',
                childMenus: [
                    { key: 'highInterest', label: '고금리', subPath: 'high-interest' },
                    {
                        key: 'illegalLoansReport',
                        label: '불법대부업신고',
                        subPath: 'illegal-loans-report',
                    },
                    {
                        key: 'illegalCollectionFee',
                        label: '불법채권추심수수료',
                        subPath: 'illegal-collection-fee',
                    },
                    { key: 'loanFraud', label: '대출사기', subPath: 'loan-fraud' },
                    { key: 'panelFraud', label: '판넬사기', subPath: 'panel-fraud' },
                ],
            },
        ],
    },
    // 정식업체 조회
    {
        key: 'officialCompany',
        label: '정식업체 조회',
        path: 'official-company',
        subMenus: [
            {
                key: 'officialCompanyInquiry',
                label: '정식업체조회',
                subPath: 'official-company-inquiry',
            },
            {
                key: 'companyVerification',
                label: '업체확인방법',
                subPath: 'company-verification',
            },
        ],
    },
    // 커뮤니티
    {
        key: 'community',
        label: '커뮤니티',
        path: 'community',
        subMenus: [
            { key: 'financeNews', label: '금융뉴스', subPath: 'finance-news' },
            { key: 'loanNews', label: '대부업 뉴스', subPath: 'loan-news' },
        ],
    },
    // 이용안내
    {
        key: 'guide',
        label: '이용안내',
        path: 'guide',
        subMenus: [
            { key: 'customerGuide', label: '고객 이용안내', subPath: 'customer-guide' },
            { key: 'companyGuide', label: '업체 이용안내', subPath: 'company-guide' },
        ],
    },
    // 고객센터
    {
        key: 'customerCenter',
        label: '고객센터',
        path: 'customer-center',
        subMenus: [
            { key: 'notice', label: '공지사항', subPath: 'notice' },
            { key: 'faq', label: '자주 묻는 질문', subPath: 'faq' },
            { key: 'adInquiry', label: '광고문의', subPath: 'ad-inquiry' },
        ],
    },
    // 대출위키
    {
        key: 'loanWiki',
        label: '대출위키',
        path: 'loan-wiki',
        subMenus: [],
    },
]
// 대출나라 메뉴 (MyPage)
export const MYPAGE_MENUS = [
    {
        key: 'mypage',
        label: '마이페이지',
        path: 'mypage',
        subMenus: [
            { key: 'myInfo', label: '내정보', subPath: 'my-info' },
            { key: 'managerChat', label: '관리자 1:1 채팅문의', subPath: 'manager-chat' },
            { key: 'editProfile', label: '회원정보 수정', subPath: 'edit-profile' },
            { key: 'companyNotice', label: '업체 전용 공지사항', subPath: 'company-notice' },
            { key: 'companyGuide', label: '업체 이용안내', subPath: 'company-guide' },
            { key: 'adTip', label: '광고 TIP', subPath: 'ad-tip' },
            { key: 'siteStats', label: '대출나라 통계', subPath: 'site-stats' },
            { key: 'resources', label: '자료실', subPath: 'resources' },
            { key: 'adRegistration', label: '광고추가신청', subPath: 'ad-registration' },
            {
                key: 'adRegistrationLimit',
                label: '광고 등록 신청',
                subPath: 'ad-registration-limit',
            },
            { key: 'adScore', label: '광고수정 및 점프', subPath: 'ad-score' },
            { key: 'adScoreStatus', label: '줄광고 점프 사용 현황', subPath: 'score-status' },
            { key: 'adInquiry', label: '광고문의', subPath: 'ad-inquiry' },
            { key: 'memberBenefits', label: '회원혜택', subPath: 'member-benefits' },
        ],
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
