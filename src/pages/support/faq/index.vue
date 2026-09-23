<template>
    <div class="support-fap-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <!-- 탭 -->
                    <ul class="tab-wrapper">
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
                    <!-- FAQ -->
                    <el-collapse v-model="activeName" accordion class="faq-collapse">
                        <el-collapse-item
                            v-for="faqItem in currentFaqList"
                            :key="faqItem.id"
                            :name="String(faqItem.id)"
                            class="faq-item"
                        >
                            <template #title>
                                <div class="question-box">
                                    <span class="question-prefix">Q.</span>

                                    <p class="question-title">
                                        {{ faqItem.question }}
                                    </p>
                                </div>
                            </template>

                            <!-- 우측 아이콘 -->
                            <template #icon="{ isActive }">
                                <div class="collapse-arrow" :class="{ 'is-active': isActive }">
                                    <img src="/images/common/collapse.png" alt="fap" />
                                </div>
                            </template>

                            <div class="answer-box">
                                <span class="answer-prefix">A.</span>

                                <p class="answer-content" v-html="faqItem.answer"></p>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                    <!-- Footer -->
                    <div class="footer-wrapper">
                        <h3>원하는 답변을 찾지 못하셨나요?</h3>
                        <div class="footer-item-box">
                            <div class="footer-item">
                                <div class="title-box">
                                    <div class="img-box">
                                        <img src="/images/common/message_gray.png" alt="1:1 문의" />
                                    </div>
                                    <p>1:1 문의</p>
                                </div>
                                <div class="right-box">
                                    <NuxtLink to="/support/inquiry" class="link-title">
                                        <span>바로가기</span>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/right_arrow_gray_sharp.png"
                                                alt="바로가기"
                                            />
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="footer-item">
                                <div class="title-box">
                                    <div class="img-box">
                                        <img
                                            src="/images/common/tell_phone_gray.png"
                                            alt="대출나라 고객센터"
                                        />
                                    </div>
                                    <p>대출나라 고객센터</p>
                                </div>
                                <div class="right-box">
                                    <p class="only-title">1599-9687</p>
                                    <a href="tel:1599-9687" class="tell-title">
                                        <span>통화하기</span>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/right_arrow_blue.png"
                                                alt="통화하기"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const tabInfo = [
    {
        value: 1,
        title: '일반고객',
        faqList: [
            {
                id: 1,
                question: '대출 시 주의할 점이 있나요?',
                answer: `
                    대출자와 대출 업체 간 직거래로 거래가 진행되기 때문에<br/>
                    대출 사고 위험이 있으므로 거래 전 각별히 주의를 기울이셔야 합니다.<br/>
                    <br /><br />
                    당사이트 고객센터> 공지사항 내용 참고하시어<br/>
                    안전한 거래 진행하시기 바랍니다.
                `,
            },
            {
                id: 2,
                question: '이자율이 어떻게 되나요?',
                answer: `
                    업체마다 이율이  다르며 신용 소득에 따라 상이합니다.<br/>
                    참고로 법정 최고 금리 한도 연20% 를 넘을수 없습니다.
                `,
            },
            {
                id: 3,
                question: '대출업체 상호명, 연락처 검색방법',
                answer: `
                    PC 버전<br/>
                    홈페이지 상단 검색창에서 상호, 전화번호 입력 후 검색<br/>
                    모바일 버전<br/>
                    홈페이지 상단 우측 전체메뉴 클릭>(상호, 연락처) 검색
                `,
            },
            {
                id: 4,
                question: '대출나라 이용방법',
                answer: `
                    1. 홈페이지 상단메뉴 지역별검색, 상품별검색 클릭<br/>
                    <br/>
                    2. 여러 업체 비교후 직접 업체 선정 후 다이렉트 상담<br/>
                    <br/>
                    3. 고객센터 공지사항 > 주의사항 확인 후 거래<br/>
                    <br/>
                    여러 대출업체의 광고 상품을 비교하여<br/>
                    나에게 맞는 업체  선택후 다이렉트로<br/>
                    대출상담을 받아 보실 수 있습니다.
                `,
            },
            {
                id: 5,
                question: '대출나라 이용 시 회원가입을 해야하나요?',
                answer: `
                    일반 고객의 경우 회원가입 없이 무료로 이용 가능<br/>
                    <br/>
                    대부업체의 경우 필수적으로 회원가입이 필요합니다.
                `,
            },
            {
                id: 6,
                question: '대출나라에 등록된 대출업체는 정식허가 업체인가요?',
                answer: `
                    대출나라에 등록 업체는 대부금융협회 정식 등록된<br/>
                    <br/>
                    허가 업체이며 미등록 업체는 광고 등록 불가합니다.
                `,
            },
        ],
    },
    {
        value: 2,
        title: '대출업체',
        faqList: [
            {
                id: 1,
                question: '광고 일시중단 어떻게 하나요?',
                answer: `
                    광고 일시중단은 고객센터 1599-9687 를 통해 사유 및 중지기간 회신 주셔야만 가능합니다.<br/>
                    <br/>
                    부득이한 사정으로 인해 광고 진행이 어려운 경우 월-1회 / 최대-7일 까지 해당 서비스를 일시적으로 중단할 수 있습니다.<br/>
                    <br/>
                    단, 영업 휴무(주말 off) 사유로 대출광고 일시 중단할 수 없습니다. (이용약관 제16조 참고)
                `,
            },
            {
                id: 2,
                question: '환불 수수료가 어떻게 되나요?',
                answer: `
                    광고비 환불은 남은 이용 기간 (광고 기간)에 대한 일할 계산 수수료 30% 공제 후 환불됩니다.
                `,
            },
            {
                id: 3,
                question: '세금계산서/현금영수증 발행 어떻게 하나요?',
                answer: `
                    세금계산서/현금영수증 발행 원하시는 경우 입금 전 고객센터로 1599-9687 발급 요청 부탁드립니다.<br/>
                    (단, 부가세 10% 별도 부가, *신고 기한이 지난 경우 발급 불가합니다.)<br/>
                    <br/>
                    *현금영수증_입금일 기준 당일 이후 발급 불가<br/>
                    *세금계산서_입금일 기준 당월 이후 다음달 10일 경과 발급 불가
                `,
            },
            {
                id: 4,
                question: '광고비가 어떻게 되나요?',
                answer: `
                    광고비용은 최소 50만원 이상 등록 가능합니다.
                `,
            },
            {
                id: 5,
                question: '광고 등록은 어떻게 하나요?',
                answer: `
                    회원가입>대부등록증전송>검수>광고선택>광고비입금>광고노출<br/>
                    <br/>
                    자세한 사항은 광고문의 클릭후 참고 바랍니다.<br/>
                    <br/>
                    전화 상담을 원하실 경우 고객센터 1599-9687 연락 바랍니다.
                `,
            },
            {
                id: 6,
                question: '대부(중개)업 등록증이 없으면 광고를 못하나요?',
                answer: `
                    네 불가합니다.<br/>
                    <br/>
                    대부금융협회 정식 등록 업체만 광고가 가능합니다.
                `,
            },
            {
                id: 7,
                question: '광고용 전화번호를 다른번호로 변경 가능한가요?',
                answer: `
                    대부등록증에 기재된 광고용 번호 이외에 변경불가<br/>
                    <br/>
                    광고용 번호 추가, 변경 원하시는 경우<br/>
                    관할 등록기간 변경 신청 후 가능합니다.
                `,
            },
        ],
    },
]

// =================================================== State
// 현재 활성화된 탭
const activeTab = ref(1)
const activeName = ref('')

// =================================================== Computed
// 현재 선택된 탭의 FAQ 목록을 반환합니다.
const currentFaqList = computed(() => {
    return (
        tabInfo.find((tabItem) => {
            return tabItem.value === activeTab.value
        })?.faqList ?? []
    )
})
// =================================================== Function

// 탭을 변경하고 첫 번째 FAQ를 활성화합니다.
const onClickTab = (tabValue: number) => {
    activeTab.value = tabValue
    activeName.value = ''

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<style lang="scss">
div.support-fap-section {
    div.align-box {
        display: flex;
        align-items: flex-start;
        width: 100%;
        min-width: 0;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            flex: 1 1 0;
            min-width: 0;
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
                    @include r(height, 63, 65, 65, 65, 65);
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
                div.faq-collapse {
                    div.faq-item {
                        div.el-collapse-item__header {
                            padding-right: 0;
                            border-bottom: 1px solid $color-gray-200 !important;
                            line-height: 1;
                            min-height: 0;
                            @include r(padding-top, 16, 16, 16, 16, 16);
                            @include r(padding-bottom, 16, 16, 16, 16, 16);
                            @include r(padding-left, 24, 24, 24, 24, 24);
                            @include r(padding-right, 24, 24, 24, 24, 24);
                            span.el-collapse-item__title {
                                div.question-box {
                                    display: flex;
                                    align-items: center;
                                    @include r(gap, 10, 10, 10, 10, 10);
                                    span.question-prefix {
                                        color: $color-primary-500;
                                        font-weight: $font-weight-bold;
                                        @include r(font-size, 16, 16, 16, 16, 16);
                                    }
                                    p.question-title {
                                        color: $color-gray-900;
                                        font-weight: $font-weight-semi-bold;
                                        @include r(font-size, 16, 16, 16, 16, 16);
                                    }
                                }
                            }
                            div.collapse-arrow {
                                flex-shrink: 0;
                                transition: transform 0.2s ease;
                                @include r(width, 8, 8, 8, 8, 8);
                                @include r(height, 4, 4, 4, 4, 4);
                                &.is-active {
                                    transform: rotate(180deg);
                                }
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                        div.el-collapse-item__wrap {
                            background-color: $color-gray-100 !important;
                            border-bottom: 1px solid $color-gray-200 !important;
                            div.el-collapse-item__content {
                                line-height: 1;
                                @include r(padding-top, 16, 16, 16, 16, 16);
                                @include r(padding-bottom, 16, 16, 16, 16, 16);
                                @include r(padding-left, 24, 24, 24, 24, 24);
                                @include r(padding-right, 24, 24, 24, 24, 24);
                                div.answer-box {
                                    display: flex;
                                    @include r(gap, 10, 10, 10, 10, 10);
                                    span {
                                        color: $color-gray-400;
                                        font-weight: $font-weight-bold;
                                        @include r(font-size, 16, 16, 16, 16, 16);
                                    }
                                    p {
                                        color: $color-gray-900;
                                        line-height: 1.2;
                                        font-weight: $font-weight-regular;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                            }
                        }
                    }
                }
                div.footer-wrapper {
                    background-color: $color-gray-100;
                    border-radius: 16px;
                    @include r(margin-top, 30, 40, 40, 40, 40);
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    h3 {
                        color: $color-gray-900;
                        font-weight: $font-weight-bold;
                        @include r(font-size, 18, 18, 18, 18, 18);
                        @include r(margin-bottom, 20, 20, 20, 20, 20);
                    }
                    div.footer-item-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 20, 20, 20);
                        @include respond(mobile-plus) {
                            flex-direction: column;
                            align-items: stretch;
                        }
                        @include respond(mobile) {
                            flex-direction: column;
                            align-items: stretch;
                        }
                        div.footer-item {
                            flex: 1 1 0;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background-color: $color-white;
                            border: 1px solid $color-gray-200;
                            border-radius: 8px;
                            @include r(padding-top, 24, 24, 24, 24, 24);
                            @include r(padding-bottom, 24, 24, 24, 24, 24);
                            @include r(padding-left, 24, 24, 24, 24, 24);
                            @include r(padding-right, 24, 24, 24, 24, 24);
                            div.title-box {
                                display: flex;
                                align-items: center;
                                @include r(gap, 8, 8, 8, 8, 8);
                                div.img-box {
                                    @include r(width, 16, 16, 16, 16, 16);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                                p {
                                    color: $color-gray-900;
                                    font-weight: $font-weight-bold;
                                    @include r(font-size, 16, 16, 16, 16, 16);
                                }
                            }
                            div.right-box {
                                a.link-title {
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    text-decoration: none;
                                    @include r(gap, 10, 10, 10, 10, 10);
                                    span {
                                        color: $color-gray-500;
                                        font-weight: $font-weight-medium;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                    div.img-box {
                                        @include r(width, 6, 6, 6, 6, 6);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                }
                                p.only-title {
                                    color: $color-primary-500;
                                    font-weight: $font-weight-bold;
                                    @include r(font-size, 16, 16, 16, 16, 16);
                                    @include respond(tablet) {
                                        display: none;
                                    }
                                    @include respond(mobile-plus) {
                                        display: none;
                                    }
                                    @include respond(mobile) {
                                        display: none;
                                    }
                                }
                                a.tell-title {
                                    display: none;
                                    text-decoration: none;
                                    cursor: pointer;
                                    @include respond(tablet) {
                                        display: flex;
                                        align-items: center;
                                        @include r(gap, 8, 8, 8, 8, 8);
                                    }
                                    @include respond(mobile-plus) {
                                        display: flex;
                                        align-items: center;
                                        @include r(gap, 8, 8, 8, 8, 8);
                                    }
                                    @include respond(mobile) {
                                        display: flex;
                                        align-items: center;
                                        @include r(gap, 8, 8, 8, 8, 8);
                                    }
                                    span {
                                        color: $color-primary-500;
                                        font-weight: $font-weight-bold;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                    div.img-box {
                                        @include r(width, 6, 6, 6, 6, 6);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
