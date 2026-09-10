<template>
    <div class="illegal-finance-loan-scam-section">
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
                                        <div
                                            v-for="(childItem, childIndex) in parentItem.contents"
                                            :key="childIndex"
                                            class="right-arrow-box"
                                        >
                                            <div class="img-box">
                                                <img
                                                    src="/images/scam-number/illegal-finance/right_round_arrow_blue.png"
                                                    alt="오른쪽 화살표"
                                                />
                                            </div>
                                            <p v-html="childItem" />
                                        </div>
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
                                <template #content>
                                    <div class="item-wrapper">
                                        <template
                                            v-for="(childItem, childIndex) in parentItem.contents"
                                            :key="childIndex"
                                        >
                                            <div
                                                v-if="childItem.type === 'normal'"
                                                class="right-arrow-box"
                                            >
                                                <div class="img-box">
                                                    <img
                                                        src="/images/scam-number/illegal-finance/right_round_arrow_blue.png"
                                                        alt="오른쪽 화살표"
                                                    />
                                                </div>
                                                <p v-html="childItem.contents" />
                                            </div>
                                            <div
                                                v-if="childItem.type === 'imageCard'"
                                                class="img-card-box"
                                            >
                                                <div class="title-wrapper">
                                                    <div class="img-box">
                                                        <img
                                                            src="/images/scam-number/illegal-finance/right_round_arrow_blue.png"
                                                            alt="오른쪽 화살표"
                                                        />
                                                    </div>
                                                    <p>{{ childItem.title }}</p>
                                                </div>
                                                <div class="contents-wrapper">
                                                    <div class="box-title">
                                                        <div class="circle"></div>
                                                        <p class="title">
                                                            {{ childItem.imageTitle }}
                                                        </p>
                                                    </div>
                                                    <div class="box-contents">
                                                        <div class="img-box">
                                                            <img
                                                                :src="childItem.imageUrl"
                                                                :alt="childItem.imageTitle"
                                                            />
                                                        </div>
                                                        <p v-html="childItem.imageStepContents" />
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </template>
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
        title: '저금리대출 알선 미끼',
        badge: '피해사례 1',
        contents: [
            `피해자는 ㅇㅇ은행을 사칭하여 고금리의 대출을 일정기간 사용하면 저금리의 대출로 전환 가능하다는 전화를 받음`,
            `사기범은 피해자에게 ㅇㅇ대부 및 ㅇㅇ저축은행에 대출을 신청하여 총 1,350만원의 대출을 받게 하고 대환대출을 위해 필요하니 지정하는 계좌로 동 금액을 입금하도록 안내하여 피해자는 동 금액을 송금하였으나 대출이 이루어지지 않고 연락도 두절됨`,
        ],
    },
    {
        id: 2,
        title: '신용등급 상향 미끼로 보증료 등 요구',
        badge: '피해사례 2',
        contents: [
            `피해자는 ㅇㅇ저축은행을 사칭하여 저금리 대출이 가능하다는 전화를 받음`,
            `사기범은 대출금 천만원 승인은 났으나 신용등급이 낮다며 피해자에게 통장 잔액이 300만원인 것을 증명해야 한다고 함`,
            `피해자는 본인 통장에 300만원을 입금하였고 사기범은 피해자와 통화하면서 텔레뱅킹 이체 수단으로 동 금액을 인출함`,
        ],
    },
    {
        id: 3,
        title: '공증료 등 법률비용 납부 요구',
        badge: '피해사례 3',
        contents: [
            `피해자는 ㅇㅇ캐피탈을 사칭하여 저금리로 1,500만원 대출이 가능하다는 전화를 받음`,
            `사기범은 채무 불이행시에 대비해 공증료 등 법률비용을 납부해야 한다며 공증료 등의 명목으로 금전을 요구하여 피해자는 농협·새마을금고·우체국으로 380만원을 송금하였으나 이후 연락이 두절됨`,
        ],
    },
    {
        id: 4,
        title: '통장사본·휴대폰 등 실물 요구',
        badge: '피해사례 4',
        contents: [
            `피해자는 ㅇㅇ캐피탈 직원을 사칭한 사기범에게 휴대폰으로 전화를 받음`,
            `사기범은 피해자에게 얼마나 대출이 가능한지 알려주겠다며 주민등록번호를 요구하였고 피해자는 주민등록번호를 불러줌`,
            `사기범은 피해자가 통장거래내역이 부족해서 대출이 안되니 자기들에게 통장과 현금카드를 주면 통장거래내역을 높여서 400만원까지 대출이 가능하다고 함`,
            `피해자는 통장과 현금카드를 개설하고 택배기사를 통해 사기범에게 넘겨줌`,
            `사기범은 피해자에게 통장을 받았다고 전화하고 곧 대출이 실행될 것이라고 하였으나 이후 연락이 두절됨`,
        ],
    },
    {
        id: 5,
        title: '스마트폰 악성앱 이용',
        badge: '피해사례 5',
        contents: [
            `피해자는 ㅇㅇ캐피탈을 사칭한 사기범으로부터 저금리 대출이 가능하다는 전화를 받음`,
            `사기범은 본인 인증이 필요하다며 문자로 인터넷 주소를 보냈고 피해자는 해당 주소를 통해 앱을 다운받아 설치한 후 이름과 주민등록번호를 입력함`,
            `사기범은 피해자에게 대부업체의 기존 대출금을 상환해야 저금리 대출이 가능하다고 하였고, 피해자는 대출금 상환을 위해 S대부의 실제 전화번호로 전화하였으나 해당 전화는 S대부가 아니라 사기범의 사무실로 연결됨`,
            `사기범은 S대부 대출심사팀으로 가장하고 피해자에게 계좌번호를 알려주며 대출금을 상환할 것을 안내하였고 피해자는 동 계좌로 총 1,000만원을 송금함`,
        ],
    },
]

// 대응요령
const responseGuideList = [
    {
        id: 1,
        title: '전화 또는 문자메시지를 통한 대출광고에 유의',
        contents: [
            {
                type: 'normal',
                title: '',
                contents: `전화나 문자메시지를 통한 대출광고는 사기업체의 대출광고일 확률이 높으므로 동 광고에 속지 않도록 유의
                <strong>※ 특히, 대출여부는 대출당시 고객의 신용등급·채무내역·연체이력 등을 고려하여 금융회사가 결정하는 것이므로 저금리 대환대출을 약속하는 행위는 대출사기일 가능성이 높음</strong>`,
                imageTitle: ``,
                imageUrl: ``,
                imageStepContents: ``,
            },
        ],
    },
    {
        id: 2,
        title: '대출실행과 관련한 금전적 요구시 대출사기로 의심',
        contents: [
            {
                type: 'normal',
                title: '',
                contents: `정상적인 대출업체는 수수료 등 어떠한 명목으로도 대출과 관련해 금전을 요구하지 않으므로 금전 요구시 절대 응하지 말 것`,
                imageTitle: ``,
                imageUrl: ``,
                imageStepContents: ``,
            },
        ],
    },
    {
        id: 3,
        title: '문자메시지에 포함된 출처가 불분명한 인터넷주소 클릭 주의',
        contents: [
            {
                type: 'imageCard',
                title: `스마트폰 보안설정 항목에서 "출처를 알 수 없는 앱" 항목을 비활성 모드로 유지하는 등 보안에 유의`,
                contents: ``,
                imageTitle: `안드로이드 운영체제 보안설정 예시`,
                imageUrl: `/images/scam-number/illegal-finance/image_card1.png`,
                imageStepContents: `
                    ① <strong>스마트폰에서 설정 아이콘</strong> 클릭<br/>
                    ② <strong>잠금화면 및 보안 메뉴</strong>로 들어온 후<br/>
                    ③ <strong>“출처를 알 수 없는 앱” 항목을 비활성 모드</strong>로 유지한다
                    `,
            },
        ],
    },
    {
        id: 4,
        title: '타인에게 개인 신용정보 등을 알려 주지 말 것',
        contents: [
            {
                type: 'normal',
                title: '',
                contents: `신분증, 보안카드 번호, 문자메시지 인증번호, 통장사본 등 개인 신용정보를 본인외 제3자에게 알려 주는 경우 대출거래 또는 자금이체 승인 등에 악용될 소지가 많음에 주의<br/>
                <strong>* 통장 사본, 휴대폰 등을 대출권유업체에 주는 경우 대포통장이나 대포폰으로 악용될 우려</strong>`,
                imageTitle: ``,
                imageUrl: ``,
                imageStepContents: ``,
            },
        ],
    },
    {
        id: 5,
        title: '대출관련 수수료 등을 송금한 경우 지급정지 요청',
        contents: [
            {
                type: 'normal',
                title: '',
                contents: `즉시 경찰청(112) 또는 은행 영업점이나 콜센터에 송금계좌에 대한 지급정지를 요청하고 3일 이내에 경찰서가 발급한 사건사고사실확인원을 첨부하여 신고한 은행 영업점에 제출`,
                imageTitle: ``,
                imageUrl: ``,
                imageStepContents: ``,
            },
        ],
    },
    {
        id: 6,
        title: '대출관련 서류를 보낸 경우 개인정보노출자 사고예방시스템에 등록',
        contents: [
            {
                type: 'normal',
                title: '',
                contents: `금융감독원 민원센터(1332) 또는 금융회사 영업점을 방문하여 '개인정보 노출자 사고예방 시스템*'에 등록<br/>
                <strong>* 본인명의로 신규 금융거래시(통장개설, 대출신청, 인터넷뱅킹 신청, 신용카드 발급 등) 본인확인을 더욱 엄격히 하여 명의도용을 사전 차단</strong>`,
                imageTitle: ``,
                imageUrl: ``,
                imageStepContents: ``,
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
div.illegal-finance-loan-scam-section {
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
                                &.pc-title {
                                    display: block;
                                }
                                &.mobile-title {
                                    display: none;
                                }
                                @include r(font-size, 14, 16, 18, 18, 18);
                                @include respond(mobile-plus) {
                                    &.pc-title {
                                        display: none;
                                    }
                                    &.mobile-title {
                                        display: block;
                                    }
                                }
                                @include respond(mobile) {
                                    &.pc-title {
                                        display: none;
                                    }
                                    &.mobile-title {
                                        display: block;
                                    }
                                }
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
