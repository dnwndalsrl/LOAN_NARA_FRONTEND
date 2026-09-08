<template>
    <div class="illegal-finance-high-interest-section">
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

                                <span
                                    class="mobile-title"
                                    v-html="tabItem.mobileTitle || tabItem.title"
                                ></span>
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
                                    <div v-if="parentItem.description" class="full-size-gray-box">
                                        <p>
                                            {{ parentItem.description }}
                                        </p>
                                    </div>
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

                    <!-- 불법고금리 피해예방 10계명 -->
                    <section
                        ref="preventionSectionRef"
                        class="content-section content-section-3"
                        data-tab-value="3"
                    >
                        <div class="content-body-wrapper">
                            <div class="content-body-wrapper">
                                <ContentBlock
                                    v-for="(parentItem, parentIndex) in preventionList"
                                    :key="parentItem.id"
                                    :title="parentItem.title"
                                    :number="parentItem.number"
                                >
                                    <template #content>
                                        <div class="item-wrapper">
                                            <div
                                                v-for="(
                                                    childItem, childIndex
                                                ) in parentItem.contents"
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
        title: '불법 고금리 수취',
        badge: '피해사례 1',
        description:
            '전남 OO시에 거주하는 S씨는 시장에서 반찬가게를 운영중에 운영자금이 부족하여 전단지를 보고 고금리 일수를 이용하게 되었음',
        contents: [
            `
                일수업자 송모씨로부터 500만원을 빌렸는데 수수료 30만원을 공제하고 65일간 10만원을 상환하는 조건이었는데, 서씨는 일수금 상환 부담을 견디지 못하고 현재는 가게를 넘기고 식당일 하고 있음.
            `,
            `
                일수업자는 이후에도 계속 채권추심을 하면서, 경찰에서 혹시 조사요청이 오더라도 응하지 말고 거짓말을 하라고 회유하고 있다며 피해구제 신고
            `,
        ],
    },
    {
        id: 2,
        title: '불법 고금리 사채',
        badge: '피해사례 2',
        description: '',
        contents: [
            `
                전북OO시에 거주하는 유모씨는 미용실을 운영하던 중 사업 운영자금이 부족하여 일수전단지를 보고 사채업자 조씨로부터 500만원을 매일 6만원씩 100일간 상환하는 조건으로 2012.09월 대출받음.
            `,
            `
                2013.01월에 추가로 1,000만원을 매일 12만원씩 100일간 상환하는 조건으로 대출받았는데, 사채업자 조씨는 이때 미용실 매매계약서를 강제로 작성하게 하고 미용실 열쇠를 강탈해 갔으며, 그 후 수시로 찾아와서 대출상환을 요구함
            `,
        ],
    },
]

// 대응요령
const responseGuideList = [
    {
        id: 1,
        title: '대출시 대출업체가 등록대부업체인지 여부를 확인(금융감독원(1332) 및 지자체 대부업담당자에 문의)',
        contents: [
            `
                등록대부업체의 경우 이자율 위반의 대부계약을 체결할 확률이 낮은 편이므로 대부업체를 이용할 때도 등록된 대부업체인지 반드시 확인하고 거래하십시오. 또한 휴대전화 문자메시지, 일수전단지, 명함 등을 통한 대출광고는 불법사금융 업체이므로 절대 이용하지 마십시오.
            `,
        ],
    },
    {
        id: 2,
        title: '고금리 입증을 위한 계약서, 변제 내역을 보관',
        contents: [
            `
                법정 최고 이자율 위반으로 경찰에 신고하거나 채무변제를 완료하였음에도 사채업자가 고금리 이자의 변제를 요구하여 법원에 채무부존재 확인소송을 낼때 피해자들은 증거부족으로 이자율 위반사실을 입증하기 어려운 경우가 많습니다. 대부계약시에 반드시 서면으로 작성한 계약서를 받아 보관하시고 변제사실을 증명하는 영수증이나 계좌이체내역을 보관하는것이 좋습니다.
            `,
        ],
    },
]

// 불법고금리 피해예방 10계명
const preventionList = [
    {
        id: 1,
        number: '01',
        title: '법정 최고이자율을 초과하는 부분에 대한 이자계약은 무효',
        contents: [
            `
                대출계약시 연이자율의 경우, '21.7.7. 이후 신규체결 및 갱신, 연장 계약에 대해서는 20% ('21.7.6. 이전 계약건에 대해서는 연 이자율은 24%)를 초과할 수 없습니다. 이러한 법정 최고이자율을 초과하는 부분에 대한 이자계약은 무효임을 주장하세요.<br/>
                <strong>* 초과 지급된 이자는 원금충당 또는 반환요구 가능</strong>
            `,
        ],
    },
    {
        id: 2,
        number: '02',
        title: '대출은 제도권 금융회사를 이용',
        contents: [
            `
                긴급한 자금이 필요한 경우에도 무등록 대부업체가 아닌 등록 대부업체나 제도권 금융회사를 이용하여 대출을 받으세요.<br/>
                <strong>① 등록된 대출중개업체 및 대부업체는 등록 대부업체 통합조회서비스(한국대부금융협회, http://www.clfa.or.kr ⇒ 등록업체조회)에서 확인 가능하며, ② 등록 대출모집인은 대출모집인 통합조회시스템(은행연합회, http://www.kfb.or.kr ⇒ 대출모집인)에서 조회 가능, ③ 제도권 금융회사는 금융소비자정보포털 파인(http://fine.fss.or.kr ⇒ 제도권금융회사 조회)에서 확인 가능</strong>
            `,
        ],
    },
    {
        id: 3,
        number: '03',
        title: '대출 시 선이자는 대출원금에서 제외',
        contents: [
            `
                대출시 수수료 등의 명목으로 대부업자가 받는 것은 모두 이자로 간주되며, 선이자를 사전에 공제하는 경우에는 대출원금에서 제외됩니다.
            `,
        ],
    },
    {
        id: 4,
        number: '04',
        title: '문자, 인터넷 등을 통한 대출광고에 유의',
        contents: [
            `
                “누구나 대출”, “신용불량자 가능” 등 상식 수준을 벗어난 광고에 유의하세요.
            `,
        ],
    },
    {
        id: 5,
        number: '05',
        title: '대출상담시 신용등급조정료, 수수료 등 금전 요구는 거부',
        contents: [
            `
                어떠한 명목으로든 금전을 요구하는 것은 대출이 이루어지지 않는 금전을 편취하는 사기일 가능성이 높으므로 절대 응하지 마세요.<br/>
                <strong>* 대출이 이루어지는 경우에도 수수료 등은 이자에 해당되므로 불법적 고금리에 해당될 가능성이 높음</strong>
            `,
        ],
    },
    {
        id: 6,
        number: '06',
        title: '대출계약서, 원리금 상환내역을 철저하게 관리',
        contents: [
            `
                대출시 작성된 계약서 및 원리금 상환내역서 등 본인의 대출내역을 철저하게 관리하세요.<br/>
                <strong>* 특히 원리금 상환내역을 입금증 등과 함께 철저히 관리함으로써 향후 고금리 분쟁에도  대비 가능</strong>
            `,
        ],
    },
    {
        id: 7,
        number: '07',
        title: '자신의 소득수준에 맞는 대출 관리',
        contents: [
            `
                본인의 신용도 및 소득수준에 맞는 대출관련 사항을 우선 확인해 보세요.<br/>
                <strong>* 금감원의 「금융상품 통합 비교공시」홈페이지(http://finlife.fss.or.kr) 나 서민금융진흥원(구 한국이지론)(☏1644-1110, www.koreaeasyloan.com)을 통해 자신에게 맞는 대출상품 확인</strong>
            `,
        ],
    },
    {
        id: 8,
        number: '08',
        title: '햇살론 등 저금리대출로 전환해 준다고 하는 대출 권유에 주의',
        contents: [
            `
                햇살론, 새희망홀씨 등 저리의 서민금융상품을 알선해 준다는 미끼로 대출을 권유하는 수법에 주의하세요.<br/>
                <strong>* 실제로는 고금리 대출을 받게 한 후, 향후 연락이 되지 않거나 여러 가지 사유를 들어 저금리대출 전환이 어려운 경우가 대부분</strong>
            `,
        ],
    },
    {
        id: 9,
        number: '09',
        title: '공신력 있는 제도권 금융회사 사칭에 유의',
        contents: [
            `
                은행 등 공신력 있는 제도권 금융회사임을 사칭하면서 신분증 등을 요구할 경우 이에 응하지 마세요.<br/>
                <strong>* 대출에 필요하다며 주민등록증 또는 사업자등록증 사본, 체크카드, 통장 등 관련 서류를 송부할 경우 고금리대출 또는 개인정보유출 등 피해 우려</strong>
            `,
        ],
    },
    {
        id: 10,
        number: '10',
        title: '고금리피해 및 불법채권추심에 적극적으로 대응',
        contents: [
            `
                대출계약서, 원리금 입금증, 녹취록 등 관련 증거를 확보하여 금감원(1332), 경찰서(112)에 적극적으로 신고
            `,
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
        title: '대응요령',
    },
    {
        value: 3,
        title: '불법고금리 피해예방 10계명',
        mobileTitle: '불법고금리<br />피해예방 10계명',
    },
]

// 현재 활성화된 탭
const activeTab = ref(1)

const tabWrapperRef = ref<HTMLElement | null>(null)

// 각 콘텐츠 영역 Ref
const damageCaseSectionRef = ref<HTMLElement | null>(null)
const responseGuideSectionRef = ref<HTMLElement | null>(null)
const preventionSectionRef = ref<HTMLElement | null>(null)

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
        {
            value: 3,
            element: preventionSectionRef.value,
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
        3: preventionSectionRef.value,
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
div.illegal-finance-high-interest-section {
    div.align-box {
        display: flex;
        align-items: flex-start;
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
