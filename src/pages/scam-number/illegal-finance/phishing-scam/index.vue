<template>
    <div class="illegal-finance-phishing-scam-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <!-- 탭 -->
                    <ul ref="tabWrapperRef" class="tab-wrapper">
                        <li
                            v-for="tabItem in tabInfo"
                            :key="tabItem.value"
                            class="tab-item"
                            :class="{
                                'is-active': activeTab === tabItem.value,
                            }"
                        >
                            <button type="button" @click="onClickTab(tabItem.value)">
                                <span class="pc-title">
                                    {{ tabItem.title }}
                                </span>
                            </button>
                        </li>
                    </ul>

                    <!-- 피해사례 -->
                    <section
                        ref="damageCaseSectionRef"
                        class="content-section content-section-1"
                        data-tab-value="1"
                    >
                        <div class="content-body-wrapper">
                            <ContentBlock
                                v-for="(parentItem, parentIndex) in damageCaseList"
                                :key="parentItem.id"
                                :title="parentItem.title"
                                :badge="parentItem.badge"
                            >
                                <template #content>
                                    <div class="item-wrapper">
                                        <template
                                            v-for="(childItem, childIndex) in parentItem.contents"
                                            :key="childIndex"
                                        >
                                            <template v-if="childItem.type === 'normal'">
                                                <div
                                                    v-for="(
                                                        microItem, microIndex
                                                    ) in childItem.contents"
                                                    :key="microIndex"
                                                    class="right-arrow-box"
                                                >
                                                    <div class="img-box">
                                                        <img
                                                            src="/images/scam-number/illegal-finance/right_round_arrow_blue.png"
                                                            alt="오른쪽 화살표"
                                                        />
                                                    </div>
                                                    <p v-html="microItem.contents" />
                                                </div>
                                            </template>
                                            <template v-if="childItem.type === 'imageTwinCard'">
                                                <div class="img-twin-card-box">
                                                    <div class="contents-wrapper">
                                                        <div
                                                            v-for="(
                                                                microItem, microIndex
                                                            ) in childItem.contents"
                                                            class="box-item"
                                                        >
                                                            <div class="box-title">
                                                                <div class="circle"></div>
                                                                <p class="title">
                                                                    {{ microItem.imageTitle }}
                                                                </p>
                                                            </div>
                                                            <div class="img-box">
                                                                <img
                                                                    :src="microItem.imageUrl"
                                                                    :alt="microItem.imageTitle"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                </template>
                            </ContentBlock>
                        </div>
                    </section>

                    <!-- 대응요령 -->
                    <section
                        ref="responseGuideSectionRef"
                        class="content-section content-section-2"
                        data-tab-value="2"
                    >
                        <div class="content-body-wrapper">
                            <ContentBlock
                                v-for="(parentItem, parentIndex) in responseGuideList"
                                :key="parentItem.id"
                                :title="parentItem.title"
                                :is-icon="true"
                            >
                                <template #content> </template>
                            </ContentBlock>
                        </div>
                    </section>

                    <FooterInfoBlock />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
let sectionObserver: IntersectionObserver | null = null

// 피해사례
const damageCaseList = [
    {
        id: 1,
        title: '“개인정보유출로 보안승급필요”라는 문자메시지 발송에 의한 피싱사기 시도',
        badge: '피해사례 1',
        contents: [
            {
                type: 'normal',
                contents: [
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `12.5.25일 사기범은 경기 거주 기모씨(50대)에게 “개인정보유출로 보안승급필요”라는 문자메시지를 발송, 피싱사이트로 유도하여 인터넷 뱅킹과 공인인증서 재발급에 필요한 정보를 입력토록 한 후, 피해자명의의 공인인증서를 재발급 받아 인터넷뱅킹을 통해 피해자 계좌에서 1천2백만원을 사기범 계좌로 이체하여 편취`,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: '가족 모두의 개인정보를 알고 자녀납치 빙자 피싱사기 시도',
        badge: '피해사례 2',
        contents: [
            {
                type: 'normal',
                contents: [
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `12.6.5일 사기범은 경기 거주 이모씨(여, 40대)에게 자녀의 휴대전화번호(발신번호 변작)로 전화를 걸어 자녀의 이름과 학교 등의 정보를 말하면서 납치극 상황을 연출하여 피해자로부터 3백만원을 편취`,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        badge: '피해사례 3',
        title: '피싱사이트로 유도하기 위해 금융감독원과 금융회사를 사칭하여 휴대전화 소지인의 이름과 거래은행 계좌번호가 기재된 문자 메시지를 발송',
        contents: [
            {
                type: 'imageTwinCard',
                contents: [
                    {
                        imageTitle: `금융감독원 사칭사례`,
                        imageUrl: `/images/scam-number/illegal-finance/image_card2.png`,
                        contents: ``,
                    },
                    {
                        imageTitle: `농협은행 사칭사례`,
                        imageUrl: `/images/scam-number/illegal-finance/image_card3.png`,
                        contents: ``,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: '텔레뱅킹에 의한 피해 사례',
        badge: '피해사례 4',
        contents: [
            {
                type: 'normal',
                contents: [
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `경기도 수원거주 박모씨(남, 50대초반, 설비업 종사)는 12.8.28일 오전 10시경 금융감독원 직원을 사칭하는 사기범으로부터 “피해자의 계좌에서 180만원이 무단 인출되어, 경찰청과 금융감독원을 통해 조사가 필요하니 주민등록번호와 텔레뱅킹에 필요한 정보(계좌번호, 계좌비밀번호, 보안카드번호 등)를 알려달라”는 전화를 받고, 텔레뱅킹에 필요한 정보를 사기범에게 알려주었는데, 사기범은 동 정보를 이용하여 피해자 명의의 텔레뱅킹을 통해 피해자의 W은행 계좌에서 총 11회에 걸쳐 2,765만원을 사기범계좌로 이체하여 편취`,
                    },
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `전남 목포거주 이모씨(여, 40대중반, 보험설계사)는 12.9.3일 오후 6시경 B은행 직원을 사칭하는 사기범으로부터 전화가 와서 “자동이체일을 변경하려면 어떻게 하느냐”라고 묻자, 사기범이 “자동이체일자를 21일에서 25일로 변경하려면 관련법이 바뀌어 주민등록번호와 텔레뱅킹에 필요한 정보(계좌번호, 계좌비밀번호, 보안카드번호 등)를 알려주어야 한다” 라고 해서, 텔레뱅킹에 필요한 정보를 사기범에게 알려 주었는데, 사기범은 동 정보를 이용하여 피해자 명의의 텔레뱅킹을 통해 피해자의 N은행계좌에서 총 4회에 걸쳐 715만원을 사기범계좌로 이체하여 편취`,
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        title: '피싱사이트에 의한 피해사례',
        badge: '피해사례 5',
        contents: [
            {
                type: 'normal',
                contents: [
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `경기 거주 김모씨(여, 40대, 회사원)는 12.9.6(목) 오전 09시경 k은행 대표번호로 온 문자메시지 “OO은행입니다. 고객님 개인정보가 유출되었으니 보안승급 바랍니다. http://www.kbmtcard.com”를 수신하고, 해당사이트에 접속하여 계좌번호, 이체비밀번호, 보안카드 35개 일체 등 인터넷 뱅킹과 공인인증서 재발급에 필요한 정보를 입력하였는데, 사기범이 동 정보를 이용하여 12.9.9(일) 03시 30분경 공인인증서를 재발급 받아, 인터넷 뱅킹으로 인출 가능한 한도 전액인 2천7백만원을 8회에 걸쳐 사기범 계좌로 이체하여 편취하였고, 김모씨는 당일 06시경 핸드폰을 확인하면서 공인인증서 재발급 및 출금내역 문자가 수신되어 있어 피싱사기를 인지하고 해당은행 콜센터에 신고하였으나 이미 전액 출금되었음`,
                    },
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `부산 거주 이모씨(여, 30대, 회사원)는 12.9.7(금)08시경 K은행 대표번호로 온 문자메시지 “ 개인정보유출로 보안승급필요 http://www.kbvtbank.com”를 수신하고, 해당 사이트에 접속하여 계좌번호, 이체비밀번호, 보안카드 번호 35개 일체 등 인터넷뱅킹과 공인인증서 재발급에 필요한 정보를 입력하였는데, 사기범이 12.9.8(토) 04시 30분경 피해자명의의 공인인증서를 재발급 받아 인터넷뱅킹으로 인출가능한도 전액인 8백만원을 2회에 걸쳐 사기범 계좌로 이체하였음. 이모씨는 04시 30분경 공인인증서가 재발급되었다는 SMS문자와 출금 내역 SMS문자가 수신되는 소리에 잠이 깨어 문자내용을 확인, 피싱사기를 인지하고 경찰청 112센터를 통해 지급정지 조치하였음`,
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        title: '파밍(Pharming)에 의한 피싱사이트 피해사례',
        badge: '피해사례 6',
        contents: [
            {
                type: 'normal',
                contents: [
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `경기도 성남거주 김모씨(여, 40대후반)는 12.11.12일 본인이 사용하는 컴퓨터의 인터넷 즐겨찾기에 등록되어 있는 N은행의 사이트에 접속하였으나 동 은행을 가장한 피싱사이트로 접속이 되었고, 인터넷뱅킹에 필요한 정보를 입력하는 팝업창이 나타나 해당 정보(계좌번호, 계좌비밀번호, 보안카드번호 등)를 입력하였는데, 사기범은 12.11.12일부터 16일까지 5일간 동 정보를 이용하여 피해자 명의의 인터넷뱅킹을 통해 피해자의 N은행 계좌에서 총 5회에 걸쳐 1,039만원을 사기범계좌로 이체하여 편취`,
                    },
                    {
                        imageTitle: '',
                        imageUrl: '',
                        contents: `인천시 거주 유모씨(여, 30대후반)는 12.11.1일 자녀학원비 이체를 위해 본인이 사용하는 컴퓨터의 인터넷 검색포털사이트에서 “Kx”라는 단어로 검색 후 K은행의 사이트에 접속하였으나 동 은행을 가장한 피싱사이트로 접속이 되었고, 인터넷뱅킹에 필요한 정보를 입력하는 팝업창이 나타나 해당 정보(계좌번호, 계좌비밀번호, 보안카드번호 등)를 입력하였는데, 사기범은 12.11.5일 동 정보를 이용하여 피해자 명의의 인터넷뱅킹을 통해 피해자의 K은행 계좌에서 총 5회에 걸쳐 1,763만원을 사기범 계좌로 이체하여 편취`,
                    },
                ],
            },
        ],
    },
]

// 대응요령
const responseGuideList = [
    {
        id: 1,
        title: '금융거래정보 유출 주의',
        contents: [
            {
                type: 'normal',
                contents: `금융감독원ㆍ검찰ㆍ경찰 등의 공공기관과 금융회사는 어떠한 경우에도 전화나 문자메시지를 통해 개인정보(이름, 주민등록번호 등)와 금융거래정보(계좌번호, 비밀번호, 보안카드번호 등)를 알려달라거나, 특정 인터넷 사이트에 개인정보 및 금융거래정보 등의 입력을 요구하지 않음`,
            },
        ],
    },
    {
        id: 2,
        title: '보안카드 관리 철저',
        contents: [
            {
                type: 'normal',
                contents: `보안카드 일련번호와 보안카드 코드번호 전체를 알려달라고 하거나 인터넷 사이트에 입력하도록 요구하면 피싱사기이므로 절대로 응하여서는 아니되며, 또한, 타인이 전화나 문자메시지 등으로 보안카드 코드번호 일부를 요구하는 경우도 일절 응대하지 말아야 함`,
            },
        ],
    },
    {
        id: 3,
        title: '금융회사의 보안서비스 적극 활용',
        contents: [
            {
                type: 'card',
                title: '<strong>전자금융사기 예방서비스</strong>에 가입하여 타인에 의한 공인인증서 무단 재발급을 예방하고, <strong>나만의 은행주소, 개인화 이미지(국민), 그래픽인증(우리)</strong> 등 금융회사별로 제공하는 보안서비스를 적극 활용',
                contents: [
                    `전자금융사기 예방서비스 : 각 은행 인터넷 뱅킹 홈페이지에서 가입절차 등을 구체적으로 안내(농협은행의 경우 : 개인 인터넷뱅킹 > MY뱅크 > 전자금융사기 예방서비스 > 각 서비스 신청)`,
                    `나만의 은행주소 : 이용자가 인터넷뱅킹 주소를 직접 만들고 자신만의 은행주소로 인터넷 뱅킹에 접속`,
                    `개인화이미지 : 이용자가 직접 이미지, 문자, 색상 등을 지정하고 금융회사 사이트 접속시 지성한 이미지 등을 확인`,
                    `그래픽인증 : 이용자가 사전에 4개의 숫자 및 영문자 이미지를 암호로 설정하고 인터넷뱅킹 로그인 단계에서 설정한 이미지 암호키를 입력`,
                ],
            },
        ],
    },
    {
        id: 4,
        title: '출처가 불분명한 파일, 이메일의 다운로드 등 자제',
        contents: [
            {
                type: 'normal',
                contents: `출처가 불분명한 동영상 파일과 이메일 등은 악성코드가 포함되어 파밍 등에 노출될 가능성이 높으므로 다운로드 자제등 이용에 각별한 주의가 필요`,
            },
        ],
    },
    {
        id: 5,
        title: '금융회사는 보안승급 등을 요구하지 않음',
        contents: [
            {
                type: 'normal',
                contents: `금융회사는 문자메시지나 이메일 등으로 보안승급이나 보안강화 조치를 요구하지 않으므로, 이러한 문자메시지나 이메일 등을 받은 경우 일절 응대하지 말고 금융회사 등에 확인`,
            },
            {
                type: 'normal',
                contents: `또한, 인터넷 즐겨찾기나 포털사이트 검색 등을 통하여 금융회사 홈페이지에 접속하였더라도 보안승급 등을 이유로 금융거래정보 입력을 요구하는 경우는 피싱사기(파밍)이므로 각별한 주의 요망`,
            },
        ],
    },
    {
        id: 6,
        title: '피해발생시 112로 즉시 지급정지 요청',
        contents: [
            {
                type: 'normal',
                contents: `만약 피해를 당한 경우 즉시 경찰청 112센터나 금융회사 콜센터에 사기범 계좌의 지급정지를 요청하고, 지급정지된 피해금액에 대해서는 해당은행 등을 방문하여 피싱사기 피해금 환급을 신청`,
            },
        ],
    },
]

// =================================================== State
// 탭 및 콘텐츠 섹션 정보
const tabInfo = [
    {
        value: 1,
        title: '피해사례',
    },
    {
        value: 2,
        title: '피해예방 요령',
    },
]

// 현재 활성화된 탭
const activeTab = ref(1)

const tabWrapperRef = ref<HTMLElement | null>(null)

// 각 콘텐츠 영역 Ref
const damageCaseSectionRef = ref<HTMLElement | null>(null)
const responseGuideSectionRef = ref<HTMLElement | null>(null)

let scrollRafId: number | null = null

// =================================================== Function
// Sticky 탭의 실제 활성화 기준 위치를 반환합니다.
const getTabActiveLine = () => {
    if (!tabWrapperRef.value) {
        return 0
    }

    const rootStyle = getComputedStyle(document.documentElement)
    const tabStyle = getComputedStyle(tabWrapperRef.value)

    const headerNavHeight =
        Number.parseFloat(rootStyle.getPropertyValue('--header-nav-height')) || 57

    const tabStickyOffset = Number.parseFloat(tabStyle.getPropertyValue('--tab-sticky-offset')) || 0

    const tabHeight = tabWrapperRef.value.getBoundingClientRect().height

    return headerNavHeight + tabStickyOffset + tabHeight
}

// 현재 스크롤 위치에 맞는 탭을 활성화합니다.
const updateActiveTab = () => {
    const sectionList = [
        {
            value: 1,
            element: damageCaseSectionRef.value,
        },
        {
            value: 2,
            element: responseGuideSectionRef.value,
        },
    ]

    const activeLine = getTabActiveLine()

    let currentTab = 1

    sectionList.forEach((sectionItem) => {
        if (!sectionItem.element) {
            return
        }

        const sectionTop = sectionItem.element.getBoundingClientRect().top

        if (sectionTop <= activeLine + 1) {
            currentTab = sectionItem.value
        }
    })

    activeTab.value = currentTab
}

// 선택한 탭에 해당하는 콘텐츠 영역으로 이동합니다.
const onClickTab = (tabValue: number) => {
    const sectionMap = {
        1: damageCaseSectionRef.value,
        2: responseGuideSectionRef.value,
    }

    const targetSection = sectionMap[tabValue as keyof typeof sectionMap]

    if (!targetSection) {
        return
    }

    const activeLine = getTabActiveLine()

    const targetTop = window.scrollY + targetSection.getBoundingClientRect().top

    activeTab.value = tabValue

    window.scrollTo({
        top: targetTop - activeLine,
        behavior: 'smooth',
    })
}

// 스크롤 이벤트
const onScroll = () => {
    if (scrollRafId !== null) {
        return
    }

    scrollRafId = requestAnimationFrame(() => {
        updateActiveTab()
        scrollRafId = null
    })
}

onMounted(() => {
    updateActiveTab()

    window.addEventListener('scroll', onScroll, {
        passive: true,
    })

    window.addEventListener('resize', updateActiveTab)
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', updateActiveTab)

    if (scrollRafId !== null) {
        cancelAnimationFrame(scrollRafId)
    }
})
</script>

<style lang="scss">
div.illegal-finance-phishing-scam-section {
    div.align-box {
        display: flex;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            flex: 1 1 0;
            min-width: 0;
            width: 100%;
            align-self: stretch;
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                position: relative;
                ul.tab-wrapper {
                    position: sticky;
                    z-index: 900;
                    width: 100%;
                    display: flex;
                    align-items: stretch;
                    background-color: $color-gray-100;
                    border-radius: 16px;
                    top: calc(var(--header-nav-height, 57px) + var(--tab-sticky-offset));
                    @include r(--tab-sticky-offset, 20, 20, 20, 20, 20);
                    @include r(height, 78, 82, 65, 65, 65);
                    @include r(padding-top, 8, 8, 8, 8, 8);
                    @include r(padding-bottom, 8, 8, 8, 8, 8);
                    @include r(padding-left, 8, 8, 8, 8, 8);
                    @include r(padding-right, 8, 8, 8, 8, 8);
                    li.tab-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: 1 1 0;
                        cursor: pointer;
                        &.is-active {
                            button {
                                background-color: $color-gray-200;
                                border-radius: 8px;
                                span {
                                    color: $color-primary-500;
                                }
                            }
                        }
                        button {
                            display: block;
                            width: 100%;
                            height: 100%;
                            cursor: pointer;
                            border-radius: 6px;
                            font-weight: $font-weight-bold;
                            line-height: 1;
                            padding: 0;
                            border: none;
                            background-color: inherit;
                            span {
                                display: block;
                                line-height: 1.2;
                                color: $color-gray-400;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 14, 16, 18, 18, 18);
                            }
                        }
                    }
                }
                section.content-section {
                    display: flex;
                    flex-direction: column;
                    border-bottom: 1px solid $color-gray-200;
                    @include r(gap, 40, 40, 40, 40, 40);
                    @include r(padding-top, 40, 40, 40, 40, 40);
                    @include r(padding-bottom, 40, 40, 40, 40, 40);

                    div.content-body-wrapper {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 40, 40, 40, 40, 40);
                    }
                }
            }
        }
    }
}
</style>
