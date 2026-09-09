<template>
    <div class="illegal-finance-illegal-collection-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="page-top-info-box">
                        <p class="title">
                            불법채권추심에 대응하기 위해서는 무엇보다도 증거자료 확보가 중요
                        </p>
                        <p class="contents">
                            평소 휴대폰 등의 녹취 및 촬영 기능을 잘 익혀두었다가 불법채권추심을 당할
                            경우에는 당황하지 말고 휴대폰을 이용해 통화내용 녹취, 사진, 동영상
                            촬영을 통한 증거자료를 꼭 확보하여 신고ㆍ상담
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
                                                v-if="childItem.type === 'card'"
                                                class="right-arrow-card-box"
                                            >
                                                <div class="title-wrapper">
                                                    <div class="img-box">
                                                        <img
                                                            src="/images/scam-number/illegal-finance/right_round_arrow_blue.png"
                                                            alt="오른쪽 화살표"
                                                        />
                                                    </div>
                                                    <p class="title">{{ childItem.title }}</p>
                                                </div>
                                                <div class="contents-wrapper">
                                                    <div
                                                        v-for="(
                                                            microItem, microIndex
                                                        ) in childItem.contents"
                                                        :key="microIndex"
                                                        class="content-item"
                                                    >
                                                        <div class="circle"></div>
                                                        <p v-html="microItem" />
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
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
                                            <div
                                                v-if="childItem.type === 'card'"
                                                class="right-arrow-card-box"
                                            >
                                                <div class="title-wrapper">
                                                    <div class="img-box">
                                                        <img
                                                            src="/images/scam-number/illegal-finance/right_round_arrow_blue.png"
                                                            alt="오른쪽 화살표"
                                                        />
                                                    </div>
                                                    <p class="title">{{ childItem.title }}</p>
                                                </div>
                                                <div class="contents-wrapper">
                                                    <div
                                                        v-for="(
                                                            microItem, microIndex
                                                        ) in childItem.contents"
                                                        :key="microIndex"
                                                        class="content-item"
                                                    >
                                                        <div class="circle"></div>
                                                        <p v-html="microItem" />
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
// 상단
const topContentsList = [
    {
        id: 1,
        title: '채권추심자가 소속을 밝히지 않는다면?',
        badge: '피해사례 1',
        contents: [
            {
                type: 'normal',
                contents: `<strong class="black-bold">대출채권 추심자가 채무자 또는 그의 관계인에게 소속과 성명을 밝히지 않는 것은 불법채권추심에 해당</strong>`,
            },
            {
                type: 'normal',
                contents: `채권추심자가 검찰ㆍ법원 등 사법당국을 사칭하거나 법무사, 법무팀장 등 사실과 다른 직함을 사용하는 것도 불법`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `"대부업법" 제10조의2 대부계약에 따른 채권의 추심을 하는 자는 채무자 또는 그의 관계인에게 그 소속과 성명을 밝혀야 한다. (위반시 5백만원 이하의 과태료)`,
                    `"채권의 공정한 추심에 관한 법률(이하 채권추심법)" 제6조 제1항 채권추심자가 채권자로부터 채권추심을 위임받은 경우에는 채권추심에 착수하기 전까지 다음 각호에 해당하는 사항을 채무자에게 서면으로 통지하여야 한다.(위반시 1천만원 이하의 과태료)`,
                    `1. 채권추심자의 성명ㆍ명칭 또는 연락처(채권추심자가 법인인 경우에는 채권추심담당자의 성명, 연락처를 포함한다.<br/>
                     2. 채권자의 성명ㆍ명칭, 채무금액, 채무불이행 기간 등 채무에 관한 사항<br/>
                     3. 입금계좌번호, 계좌명 등 입금계좌 관련 사항
                    `,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `채권추심자에게 소속과 성명을 밝히도록 요구하고 이에 응하지 않을 경우 채권추심에 응할 필요가 없다.`,
                    `채권추심자가 소속과 성명을 밝히지 않고 채권추심을 계속할 경우 관할 지자체에 신고하고, 미 등록 사채업자가 추심을 하는 경우에는 경찰서에 신고한다.`,
                ],
            },
        ],
    },
    {
        id: 2,
        title: '채권추심자가 협박 또는 폭언을 한다면?',
        badge: '피해사례 2',
        contents: [
            {
                type: 'normal',
                contents: `<strong class="black-bold">채권추심자가 협박조의 내용으로 언성을 높이거나, 욕설 등 폭언을 하였다면 이는 불법채권추심에 해당될 수 있음</strong>`,
            },
            {
                type: 'normal',
                contents: `또한, 언어 이외의 폭행ㆍ체포ㆍ감금, 기타 위계ㆍ위력을 사용한 행위도 모두 불법채권추심에 해당된다.`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제9조 제1호 채무자 또는 관계인을 폭행ㆍ협박ㆍ체포 또는 감금 하거나 그에게 위계나 위력을 사용하는 행위 금지(위반시 5년 이하의 징역 또는 5천만원 이하의 벌금)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `전화 협박 등의 불법채권추심은 증빙이 어려워 처벌이 곤란한 경우가 많으므로 반드시 증거자료를 확보ㆍ전화로 채권추심자가 협박을 하는 경우에는 당황하지 말고 통화내용을 녹취하고, 자택방문의 경우에는 핸드폰 등을 이용한 녹화ㆍ사진촬영, 이웃증언 등을 확보한다. 이후 확보한 증거자료를 가지고 관할 지자체 또는 경찰서에 적극 신고한다.`,
                ],
            },
        ],
    },
    {
        id: 3,
        title: '반복적으로 또는 야간에 채권추심 전화가 온다면?',
        badge: '피해사례 3',
        contents: [
            {
                type: 'normal',
                contents: `<strong class="black-bold">정당한 사유 없이 반복적으로 전화ㆍ문자메시지 등을 이용하여 추심하거나 저녁 9시 이후 아침 8시 이전에 전화ㆍ문자메시지, 자택방문등의 채권추심을 하여 공포심이나 불안감을 유발, 정상적인 업무나 사생활을 해친다면 불법채권추심에 해당된다.</strong>`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제9조제3호 정당한 사유없이 반복적으로 또는 야간에 전화하는 등 말ㆍ글ㆍ음향ㆍ영상 또는 물건을 채무자나 관계인에게 도달하게 함으로써 공포심이나 불안감을 유발하여 사생활 또는 업무의 평온을 심하게 해치는 행위 금지(위반시 3년 이하의 징역 또는 3천만원 이하의 벌금)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `전화ㆍ문자메시지 발송, 자택방문 등이 반복적으로 또는 야간에 발생하였음을 입증해야 하므로 전화 기록 등을 필히 보관   (채무자가 휴대전화 전원을 꺼놓거나, 통화불능 지역에 있어 채권추심업체가 정상시간대 발송한 것이 심야시간에 도달한 경우 등은 제외)`,

                    `채권추심업체에 공식적으로 반복적 또는 야간 추심행위중단을 요청하고 관할 경찰서에 신고(전화기록 등 입증이 불가능한 경우에는 추심 시간대ㆍ횟수 등을 기록한 일지를 경찰수사에 제공하면 조치 가능성이 높음)`,
                ],
            },
        ],
    },
    {
        id: 4,
        title: '채권추심자가 집 또는 회사로 찾아온다면?',
        badge: '피해사례 4',
        contents: [
            {
                type: 'normal',
                contents: `채권추심자의 자택ㆍ회사 방문 자체를 불법채권추심으로 간주할 수는 없으나 혼인ㆍ장례등 채무자가 곤란한 사정을 이용하여 방문 등을 통해 채권추심의사를 공개적으로 표시하는 경우는 불법이다.<br/>
                            <strong>예)<br/>
                            1. 혼인ㆍ장례식장에 찾아오겠다고 협박하는 사례<br/>
                            2. 딸 결혼식날 예식장에 실제로 찾아와 하객들이 보는 앞에서 채무상환을 요구하며 계란을 투척하고 이후 “둘째, 셋째 때도 보자” 라고 협박한 사례</strong>`,
            },
            {
                type: 'normal',
                contents: `방문시 채무사실을 가족ㆍ회사동료 등 제3자에게 직ㆍ간접적으로 알리는 것 또한 불법이다.`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제12조제1호 혼인,장례 등 채무자가 채권추심에 응하기 곤란한 사정을 이용하여 채무자 또는 관계인에게 채권 추심의 의사를 공개적으로 표시하는 행위(위반시 2천만원 이하의 과태료)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `혼인ㆍ장례식 등에 찾아오겠다고 협박하는 경우 당황하지 말고 협박 내용을 녹취하고 채권추심자에게 이는 불법이므로 지자체ㆍ경찰서에 신고하겠다며 즉시 중단 요청`,

                    `협박이 지속되거나 불안한 경우 관할 지자체 및 경찰서에 신고<br/>*증빙자료를 확보하지 못한 경우도 지자체에 즉시 민원제기 등을 통해 조치`,
                    `혼인ㆍ장례식 등에 직접 찾아오는 경우에는 마찬가지로 증거자료 확보 후 지자체에 신고`,
                ],
            },
        ],
    },
    {
        id: 5,
        title: '채무사실을 제3자에게 고지하거나 이를 협박하면?',
        badge: '피해사례 5',
        contents: [
            {
                type: 'normal',
                contents: `채권추심자가 채무사실을 가족이나 회사동료 등 제3자에게 직ㆍ간접적으로 알리는 것은 불법이다.`,
            },
            {
                type: 'normal',
                contents: `채무자의 소재파악이 곤란한 경우가 아님에도 관계인에게 채무자의 소재, 연락처 등을 문의하는 행위도 금지되어 있다.`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제12조제2호 채무자의 소재파악이 곤란한 경우가 아님에도 채무자의 관계인에게 채무자의 소재, 연락처 또는 소재를 알 수 있는 방법등을 문의하는 행위를 금지(위반시 2천만원 이하의 과태료)`,
                    `“채권추심법” 제12조 제5호 엽서에 의한 채무변제 요구 등 채무자 외의자가 채무사실을 알 수 있게 하는 행위를 금지 (위반시 5백만원 이하의 과태료)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `채권추심자가 가족 등에게 채무사실을 알리겠다고 협박하는 경우에는 “불법이므로 신고하겠다”며 즉시 중단 요청 협박이 지속되는 경우에는 녹취기록 등을 확보하여 지자체에 즉시 신고`,

                    `가족 등 제3자에게 채무사실을 알린 경우에는 가족 등의 도움을 받아 채권추심자의 제3자 고지 행위 일자ㆍ내용 등을 상세히 기록하고 진술자료 등도 확보하여 지자체에 신고`,
                ],
            },
        ],
    },
    {
        id: 6,
        title: '채무자 또는 채무자의 가족에게 대위변제를 요구한다면?',
        badge: '피해사례 6',
        contents: [
            {
                type: 'normal',
                contents: `채무자 또는 채무자의 가족ㆍ친지 등에게 연락하여 대위변제를 강요하거나 유도하는 행위도 금지되어 있음<br/>
                <strong>예) 최근 채무자 또는 채무자의 친ㆍ인척 등에게 “햇살론” 등 서민전용 대출 등을 활용하여 채무를 변제토록 강요하거나 대위변제를 유도</strong>`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제9조제5호 채무자 또는 관계인에게 금전의 차용이나 그 밖의 이와 유사한 방법으로 채무의 변제자금을 마련할 것을 강요함으로써 공포심이나 불안감을 유발하여 사생활 또는 업무의 평온을 심하게 해치는 행위를 금지 (위반시 3년 이하의 징역 또는 3천만원 이하의 벌금)`,
                    `“채권추심법” 제9조제6호 채무자 외의 사람에게 채무자 대신 변제할 것을 반복적으로 요구함으로써 공포심ㆍ불안감을 유발하여 사생활 또는 업무의 평온을 심하게 해치는 행위를 금지(위반시 3년 이하의 징역 또는 3천만원 이하의 벌금)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `채권추심자가 채무미납에 따른 불이익, 도의적 책임 등을 암시하는 방법으로 대위변제를 유도하더라도 절대 응할 필요가 없음.<br/>
                    예)”따님이 평생 취직도 안되고 빚쟁이로 살도록 내버려두실 겁니까” 등으로 부모의 대위변제를 유도`,

                    `지속적으로 대위변제 요구시 녹취 등 증거자료를 확보하여 관할 경찰서에 신고`,
                ],
            },
        ],
    },
    {
        id: 7,
        title: '채권추심자가 압류, 자택실사, 경매 등을 한다고 협박하면?',
        badge: '피해사례 7',
        contents: [
            {
                type: 'normal',
                contents: `채권추심자가 압류ㆍ경매, 채무불이행정보 등록 등의 조치를 직접 취할 수 없으며, 이러한 조치로 위협하는 것은 불법이다. 또한, 채권추심에 관한 민ㆍ형사상 법적인 절차가 진행되고 있지 아니함에도 그러한 절차가 진행되고 있다고 거짓으로 표시하는 행위도 불법이다.`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제11조제3호 채권추심에 관한 법률적 권한이나 지위를 거짓으로 표시하는 행위를 금지(위반시 1천만원 이하의 과태료)`,
                    `“채권추심법” 제11조제4호 채권추심에 관한 민사상 또는 형사상 법적인 절차가 진행되고 있지 아니함에도 그러한 절차가 진행되고 있다고 거짓으로 표시하는 행위를 금지(위반시 1천만원 이하의 과태료)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `채권의 압류ㆍ경매, 채무불이행정보의 등록행위는 법원의 결정사안이므로 이에 동요할 필요는 없음<br/>
                    <strong>* 며칠 연체되었다고 압류가 가능한 것이 아니라 대부계약서상에 명시된 기한의 이익이 상실된 경우에 한하여 압류가 가능하므로 이 외의 경우에는 이의를 제기할 수 있음</strong>`,
                    `지속적으로 압류 등 의사표시를 포함한 독촉장ㆍ문자메시지 등으로 괴롭히면 이러한 증거자료를 확보하여 관할 지자체에 신고한다.`,
                ],
            },
        ],
    },
    {
        id: 8,
        title: '오래된 채무에 대해 갑자기 변제를 요구한다면?',
        badge: '피해사례 8',
        contents: [
            {
                type: 'normal',
                contents: `채권추심자가 압류ㆍ경매, 채무불이행정보 등록 등의 조치를 직접 취할 수 없으며, 이러한 조치로 위협하는 것은 불법이다. 또한, 채권추심에 관한 민ㆍ형사상 법적인 절차가 진행되고 있지 아니함에도 그러한 절차가 진행되고 있다고 거짓으로 표시하는 행위도 불법이다.`,
            },
            {
                type: 'card',
                title: '관련법규',
                contents: [
                    `“채권추심법” 제11조제3호 채권추심에 관한 법률적 권한이나 지위를 거짓으로 표시하는 행위를 금지(위반시 1천만원 이하의 과태료)`,
                    `“채권추심법” 제11조제4호 채권추심에 관한 민사상 또는 형사상 법적인 절차가 진행되고 있지 아니함에도 그러한 절차가 진행되고 있다고 거짓으로 표시하는 행위를 금지(위반시 1천만원 이하의 과태료)`,
                ],
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `만기가 5년 이상 경과한 채무의 경우 소멸시효 완성 여부, 개인회생 개시결정 여부 등 본인 채무가 추심대상인지를 1차적으로 확인`,
                    `소멸시효 완성 등으로 추심대상이 아닌 것으로 확인되면, 추심업체에 추심 중단을 요청하고, 추심이 지속될 경우 관할 지자체ㆍ경찰서에 신고`,
                ],
            },
        ],
    },
    {
        id: 9,
        title: '변제 완료한 채무에 대해 채권추심을 한다면?',
        badge: '피해사례 9',
        contents: [
            {
                type: 'normal',
                contents: `채무 변제를 완료하였음에도 장기간 경과 후에 동일한 채무에 대해 추심을 하는 경우에는 다음과 같이 대응`,
            },
            {
                type: 'card',
                title: '대응방법',
                contents: [
                    `채무변제확인서가 있는 경우 채무변제확인서를 제시하거나, 통장 거래내역 증빙 등을 통해 채무변제 완료를 입증<br/>
                    <strong>* 채무상환은 채권자 명의계좌에 입금함으로써 객관적인 증빙을 확보하고, 채무변제를 완료한 경우 반드시 채권추심자로부터 채무변제확인서를 교부받아 최소 소멸시효 완성기간인 5년 이상 보관하는 것이 바람직</strong>`,
                    `입증 서류가 없는 경우 경찰서 수사의뢰 등을 통해 조치`,
                ],
            },
        ],
    },
]

// 하단
const bottomContentsList = [
    {
        id: 1,
        title: '불법채권추심 관련 상담 및 신고 방법은?',
        contents: [
            {
                type: 'normal',
                contents: `불법채권추심으로 피해를 당했거나 채권추심행위의 적정성 여부 등의 상담을 원할 경우에는 혼자 고민하지 말고, 금융감독원(불법사금융 피해신고센터)과 상담하고, <strong>각 지자체 소관부서 또는 지역 경찰서(지능범죄수사팀)</strong>에 적극 신고`,
            },
        ],
    },
    {
        id: 2,
        title: '사금융피해 관련 상담ㆍ제보 방법',
        contents: [
            {
                type: 'card',
                title: '사금융피해 관련 상담ㆍ제보',
                contents: [
                    `사금융 피해 관련 상담 : 금융감독원 불법사금융 피해신고센터(1332)`,
                    `인터넷을 통한 상담ㆍ제보 : 인터넷 포털에서 “서민금융1332”검색 > 불법사금융 > 불법사금융 피해신고<br/>
                    <strong>* 은행ㆍ저축은행ㆍ여전사ㆍ신용정보회사 등의 불법채권추심 행위는 금융감독원 금융민원센터(1332, www.fcsc.kr)또는 해당 부서에서 처리</strong>`,
                ],
            },
            {
                type: 'normal',
                contents: `관할 지자체 신고 : 대부업체 주소지 관할지자체(시청 또는 구청)`,
            },
            {
                type: 'normal',
                contents: `경찰청 상담ㆍ신고처 : 업체 주소지 관할 경찰서 수사과 지능범죄수사팀`,
            },
        ],
    },
]
// =================================================== State
// =================================================== Function
</script>

<style lang="scss">
div.illegal-finance-illegal-collection-section {
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
                    @include r(gap, 10, 10, 10, 10, 10);
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    p.title {
                        color: $color-gray-900;
                        font-weight: $font-weight-bold;
                        @include r(font-size, 16, 16, 16, 16, 16);
                    }
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
