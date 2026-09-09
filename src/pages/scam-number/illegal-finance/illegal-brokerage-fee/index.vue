<template>
    <div class="illegal-finance-illegal-brokerage-fee-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="page-top-info-box">
                        <p class="contents">
                            본 피해사례는 금감원의 “불법 대출중개수수료 피해신고” 코너에 신고된
                            건으로 금감원은 이에 대해 신고인이 중개수수료를 반환받도록 조치하는
                            한편, 중개수수료를 편취한 불법 대부중개업자를 경찰에 통보하였음.
                        </p>
                    </div>
                    <section class="content-section content-section-1">
                        <div class="content-body-wrapper">
                            <ContentBlock
                                v-for="(parentItem, parentIndex) in topContentsList"
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
                    <section class="content-section content-section-2">
                        <div class="content-body-wrapper">
                            <ContentBlock
                                v-for="(parentItem, parentIndex) in bottomContentsList"
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
// 상단
const topContentsList = [
    {
        id: 1,
        title: '비대면거래',
        badge: '피해사례 1',
        description:
            '전남에 거주하는 K씨는 긴급자금이 필요해서 고민하던 중 대출광고 전화를 받고 상담 후 1,000만원 대출을 신청',
        contents: [
            `대출을 받기 위해 신용등급을 올리는 작업을 해야 하는데 작업비로 수수료 19.5%(195만원)을 송금하면 중간에서 작업을 해서 은행에서 대출을 받을 수 있도록 해준다고 하면서, 대신 은행에는 이러한 사실을 절대 알리지 말고 본인이 직접 대출신청을 하도록 요구함`,
            `이후 피해자가 은행에 방문하여 직접 대출을 받은 뒤 작업비 195만원을 송금하자 그 뒤 연락이 두절됨`,
        ],
    },
    {
        id: 2,
        title: '예치금 명목으로 편취',
        badge: '피해사례 2',
        description:
            '전북에 거주하는 P모씨는 결혼자금이 필요하여 OO캐피탈 직원을 사칭하는 상담원으로부터 대출문자를 받고 연락하니 1,500만원이 바로 대출 가능하다며 주민등록사본, 통장을 요구',
        contents: [
            `급전이 필요한 p모씨는 요구 서류를 팩스로 보냈는데, 상담원은 신용등급이 낮아 현재로서는 대출이 어렵다고 하며 대신 대부업체 몇 군데에서 대출을 받게 해 줄것이니 예치금으로 대출금의 50%를 요구함`,
            `이후 피해자가 대출을 받은 뒤 750만원을 입금하였으나 그 뒤 연락이 두절됨`,
        ],
    },
]

// 하단
const bottomContentsList = [
    {
        id: 1,
        title: '불법 대출중개수수료 피해예방요령',
        contents: [
            {
                type: 'normal',
                contents: `긴급자금이 필요한 경우에는 <strong class="bold-type">서민금융1332(www.fss.or.kr/s1332)</strong>의 서민대출안내 코너 또는 서민금융진흥원(1397, 1644-1110)을 통해본인의 소득 및 신용수준 등에 맞는 대출상품을 알아보거나, 각 은행 및 서민금융회사 등에 유선 또는 직접 방문을 통해 대출상품을 상담받는 것이 불법 대출중개수수료 피해를 예방할 수 있습니다.`,
            },
            {
                type: 'normal',
                contents: `대출을 대가로 “금융컨설팅 수수료, 보증보험료, 저금리 대출 전환”등 각종 명목으로 수수료 등을 요구하는 것은 불법이므로 이러한 대출중개업자의 부당한 요구에 응하지 말 것과 대출중개수수료 등을 지급한 경우에는 금융감독원의 “불법 대출 중개 수수료 피해 신고코너” 나 각 금융협회로 적극 신고하시기 바랍니다.`,
            },
        ],
    },
]
</script>

<style lang="scss">
div.illegal-finance-illegal-brokerage-fee-section {
    div.align-box {
        display: flex;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            width: 100%;
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                div.page-top-info-box {
                    display: flex;
                    flex-direction: column;
                    border-radius: 16px;
                    background-color: $color-gray-100;
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    p.contents {
                        color: $color-gray-500;
                        font-weight: $font-weight-regular;
                        @include r(font-size, 16, 16, 16, 16, 16);
                        @include r(line-height, 20, 20, 20, 20, 20);
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
