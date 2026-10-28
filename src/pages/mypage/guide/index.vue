<template>
    <div class="mypage-guide-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="guide-box">
                        <p class="title">대출나라와 제휴하시면</p>
                        <p class="content">
                            PC와 모바일 동시에 광고가 가능하며 지역별, 상품별 업체검색 루트를
                            통해<br />
                            대출업체를 광고할 수 있어 저렴한 비용으로 엄청난 홍보효과를 누리실 수
                            있습니다.
                        </p>
                    </div>
                    <div class="guide-content-wrapper-box">
                        <div
                            v-for="(item, index) in guideType1Info"
                            :key="item.id"
                            class="guide-type-1"
                        >
                            <div class="left-box">
                                <p class="main-title">{{ item.mainTitle }}</p>
                                <div class="step-guide-box">
                                    <ul class="step-list-box">
                                        <li
                                            v-for="(stepItem, stepIndex) in item.step"
                                            :key="stepIndex"
                                            class="step-item"
                                        >
                                            <!-- 일반 Step -->
                                            <p v-if="stepItem.text" class="step-title">
                                                {{ stepItem.text }}
                                            </p>

                                            <!-- 강조 문구가 포함된 Step -->
                                            <div v-else class="type-highlight">
                                                <span v-if="stepItem.prefix">
                                                    {{ stepItem.prefix }}
                                                </span>

                                                <span
                                                    :class="
                                                        stepItem.type === 'gray'
                                                            ? 'highlight-title is-gray'
                                                            : 'highlight-title is-blue'
                                                    "
                                                >
                                                    {{ stepItem.highlightText }}
                                                </span>

                                                <span v-if="stepItem.suffix">
                                                    {{ stepItem.suffix }}
                                                </span>
                                            </div>

                                            <!-- 마지막 Step을 제외하고 화살표 노출 -->
                                            <div
                                                v-if="stepIndex !== item.step.length - 1"
                                                class="img-box"
                                            >
                                                <img
                                                    src="/images/common/right_arrow_gray.png"
                                                    alt="다음"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                    <p v-if="item.descriptionTitle" class="description-title">
                                        {{ item.descriptionTitle }}
                                    </p>
                                </div>
                                <div class="question-box">
                                    <div class="question-top-tox">
                                        <div class="img-box">
                                            <img
                                                src="/images/common/question_circle_blue.png"
                                                :alt="item.questionTitle"
                                            />
                                        </div>
                                        <p class="question-title">{{ item.questionTitle }}</p>
                                    </div>
                                    <p class="question-content">{{ item.questionContent }}</p>
                                </div>
                                <p v-if="item.warningTitle" class="warning-title">
                                    {{ item.warningTitle }}
                                </p>
                            </div>
                            <div class="right-box">
                                <div class="img-box">
                                    <img :src="item.imageUrl" :alt="item.mainTitle" />
                                </div>
                            </div>
                        </div>
                        <div class="guide-type-2">
                            <p class="main-title">업체정보 변경</p>
                            <div class="sub-title-box">
                                <p class="sub-title">
                                    모든 회원정보 수정은
                                    <strong>변경된 대부등록증을 다시 보내주셔야지만</strong> 변경
                                    가능합니다.
                                </p>
                                <p class="sub-content">ex) 주소지, 전화번호, 상호명 등</p>
                            </div>
                            <div class="guide-content-box">
                                <div class="content-item">
                                    <div class="img-box">
                                        <img
                                            src="/images/common/warning_circle_blue.png"
                                            alt="광고 변경은 등록된 광고용 번호 또는 비상용 번호로 연락 주시는 경우에만 가능합니다."
                                        />
                                    </div>
                                    <p>
                                        광고 변경은 등록된 광고용 번호 또는 비상용 번호로 연락
                                        주시는 경우에만 가능합니다.
                                    </p>
                                </div>
                                <div class="content-item">
                                    <div class="img-box">
                                        <img
                                            src="/images/common/warning_circle_blue.png"
                                            alt="비상연락처는 광고종료문자, 공지문자 등을 받아보실 수 있는 번호이며, 대부등록증 없이 변경 가능합니다.
비상연락처 변경 시 꼭 대출나라 고객센터로 연락 바랍니다."
                                        />
                                    </div>
                                    <p>
                                        비상연락처는 광고종료문자, 공지문자 등을 받아보실 수 있는
                                        번호이며, 대부등록증 없이 변경 가능합니다.<br />비상연락처
                                        변경 시 꼭 대출나라 고객센터로 연락 바랍니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="footer-info-wrapper">
                            <p class="title">
                                대출나라에서는 모니터링을 통해 변경된 사항을 체크하고 있습니다.
                            </p>
                            <p class="content">
                                변경사항이 있을 시 미리 대출나라에 통보해 주시고
                                <strong>미통보시 광고가 중지</strong>되오니 꼭 고객센터로 알려주시기
                                바랍니다.
                            </p>
                            <div class="phone-wrapper-box">
                                <div class="phone-img-box">
                                    <div class="img-box">
                                        <img
                                            src="/images/common/tell_phone_gray.png"
                                            alt="대표번호"
                                        />
                                    </div>
                                    <p>대표번호</p>
                                </div>
                                <p class="phone-title">010-2190-4569</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const guideType1Info = [
    {
        id: 1,
        mainTitle: '광고 문구 수정',
        step: [
            {
                text: '로그인',
            },
            {
                text: '마이페이지',
            },
            {
                text: '광고현황',
            },
            {
                type: 'gray',
                prefix: '해당 제목의',
                highlightText: '수정',
                suffix: '버튼 클릭',
            },
        ],
        descriptionTitle:
            '모든 광고를 수정하실 수 있으며, 배너광고 및 상세 내용을 각각 다른 문구로 등록 가능합니다.',
        questionTitle: '배너광고 위치는 어떻게 되나요?',
        questionContent: '모든 배너광고는 실시간 랜덤으로 이동됩니다.',
        warningTitle: '',
        imageUrl: '/images/mypage/guide/mypage_guide1.png',
    },
    {
        id: 2,
        mainTitle: '줄광고 점프 기능',
        step: [
            {
                text: '로그인',
            },
            {
                text: '마이페이지',
            },
            {
                text: '광고현황',
            },
            {
                type: 'blue',
                prefix: '해당 제목의',
                highlightText: '점프',
                suffix: '버튼 클릭',
            },
        ],
        descriptionTitle: '',
        questionTitle: '점프 기능이란?',
        questionContent:
            '줄광고 등록 후 광고글이 뒤로 밀려있을 때 점프 기능을 이용하시면 첫 페이지 최상단에 등록됩니다.',
        warningTitle: '* 모든 배너광고는 실시간 랜덤으로 이동됩니다.',
        imageUrl: '/images/mypage/guide/mypage_guide2.png',
    },
]
</script>

<style lang="scss">
div.mypage-guide-section {
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
                div.guide-box {
                    background-color: $color-gray-100;
                    border-radius: 16px;
                    @include r(margin-bottom, 60, 60, 60, 60, 60);
                    @include r(padding-top, 24, 24, 24, 24, 24);
                    @include r(padding-bottom, 24, 24, 24, 24, 24);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    p.title {
                        color: $color-gray-900;
                        font-weight: $font-weight-bold;
                        @include r(font-size, 18, 18, 18, 18, 18);
                        @include r(margin-bottom, 10, 10, 10, 10, 10);
                    }
                    p.content {
                        color: $color-gray-500;
                        font-weight: $font-weight-regular;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include r(line-height, 20, 20, 20, 20, 20);
                    }
                }
                div.guide-content-wrapper-box {
                    display: flex;
                    flex-direction: column;
                    @include r(gap, 60, 60, 60, 60, 60);
                    div.guide-type-1 {
                        display: flex;
                        border-bottom: 1px solid $color-gray-200;
                        @include r(padding-bottom, 60, 60, 60, 60, 60);
                        @include r(gap, 40, 40, 40, 40, 40);
                        @include respond(tablet) {
                            flex-direction: column;
                            div.left-box {
                                order: 2;
                            }
                            div.right-box {
                                order: 1;
                            }
                        }
                        @include respond(mobile-plus) {
                            flex-direction: column;
                            div.left-box {
                                order: 2;
                            }
                            div.right-box {
                                order: 1;
                            }
                        }
                        @include respond(mobile) {
                            flex-direction: column;
                            div.left-box {
                                order: 2;
                            }
                            div.right-box {
                                order: 1;
                            }
                        }
                        div.left-box {
                            flex: 1 1 0;
                            display: flex;
                            flex-direction: column;
                            @include r(gap, 24, 24, 24, 24, 24);
                            p.main-title {
                                color: $color-gray-900;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 24, 24, 24, 24, 24);
                            }
                            div.step-guide-box {
                                display: flex;
                                flex-direction: column;
                                @include r(gap, 8, 8, 8, 8, 8);
                                ul.step-list-box {
                                    display: flex;
                                    align-items: center;
                                    @include r(gap, 8, 8, 8, 8, 8);
                                    li.step-item {
                                        display: flex;
                                        align-items: center;
                                        @include r(gap, 8, 8, 8, 8, 8);
                                        p.step-title {
                                            color: $color-gray-900;
                                            font-weight: $font-weight-bold;
                                            @include r(font-size, 14, 14, 14, 14, 14);
                                        }
                                        div.type-highlight {
                                            display: flex;
                                            align-items: center;
                                            @include r(gap, 8, 8, 8, 8, 8);
                                            span {
                                                color: $color-gray-900;
                                                font-weight: $font-weight-bold;
                                                @include r(font-size, 14, 14, 14, 14, 14);
                                                &.highlight-title {
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    border-radius: 6px;
                                                    @include r(width, 37, 37, 37, 37, 37);
                                                    @include r(height, 22, 22, 22, 22, 22);
                                                    @include r(font-size, 12, 12, 12, 12, 12);
                                                }
                                                &.is-gray {
                                                    color: $color-secondary-400;
                                                    background-color: $color-secondary-100;
                                                }
                                                &.is-blue {
                                                    color: $color-white;
                                                    background-color: $color-secondary-500;
                                                }
                                            }
                                        }
                                        div.img-box {
                                            @include r(width, 4, 4, 4, 4, 4);
                                            img {
                                                display: block;
                                                width: 100%;
                                                height: auto;
                                            }
                                        }
                                    }
                                }
                                p.description-title {
                                    color: $color-gray-900;
                                    font-weight: $font-weight-regular;
                                    line-height: 1.2;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                            }
                            div.question-box {
                                display: flex;
                                flex-direction: column;
                                border-radius: 16px;
                                background-color: $color-gray-100;
                                @include r(gap, 8, 8, 8, 8, 8);
                                @include r(padding-top, 20, 20, 20, 20, 20);
                                @include r(padding-bottom, 20, 20, 20, 20, 20);
                                @include r(padding-left, 20, 20, 20, 20, 20);
                                @include r(padding-right, 20, 20, 20, 20, 20);
                                div.question-top-tox {
                                    display: flex;
                                    align-items: center;
                                    @include r(gap, 6, 6, 6, 6, 6);
                                    div.img-box {
                                        @include r(width, 14, 14, 14, 14, 14);
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                    p.question-title {
                                        color: $color-gray-900;
                                        font-weight: $font-weight-bold;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                                p.question-content {
                                    color: $color-gray-900;
                                    font-weight: $font-weight-regular;
                                    line-height: 1.2;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                            }
                            p.warning-title {
                                color: $color-error-500;
                                font-weight: $font-weight-medium;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                        div.right-box {
                            flex: 1 1 0;
                            div.img-box {
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                    div.guide-type-2 {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 24, 24, 24, 24, 24);
                        p.main-title {
                            color: $color-gray-900;
                            font-weight: $font-weight-bold;
                            @include r(font-size, 24, 24, 24, 24, 24);
                        }
                        div.sub-title-box {
                            display: flex;
                            flex-direction: column;
                            @include r(gap, 8, 8, 8, 8, 8);
                            p.sub-title {
                                color: $color-gray-900;
                                font-weight: $font-weight-bold;
                                @include r(font-size, 14, 14, 14, 14, 14);
                                strong {
                                    color: $color-primary-500;
                                }
                            }
                            p.sub-content {
                                color: $color-gray-900;
                                font-weight: $font-weight-regular;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                        div.guide-content-box {
                            display: flex;
                            flex-direction: column;
                            border-radius: 16px;
                            background-color: $color-gray-100;
                            @include r(gap, 10, 10, 10, 10, 10);
                            @include r(padding-top, 20, 20, 20, 20, 20);
                            @include r(padding-bottom, 20, 20, 20, 20, 20);
                            @include r(padding-left, 20, 20, 20, 20, 20);
                            @include r(padding-right, 20, 20, 20, 20, 20);
                            div.content-item {
                                display: flex;
                                @include r(gap, 6, 6, 6, 6, 6);
                                div.img-box {
                                    @include r(width, 14, 14, 14, 14, 14);
                                    @include r(margin-top, 2, 2, 2, 2, 2);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                                p {
                                    color: $color-gray-900;
                                    font-weight: $font-weight-medium;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                    @include r(line-height, 20, 20, 20, 20, 20);
                                }
                            }
                        }
                    }
                    div.footer-info-wrapper {
                        display: flex;
                        flex-direction: column;
                        border-radius: 16px;
                        background-color: $color-gray-100;
                        @include r(gap, 24, 24, 24, 24, 24);
                        @include r(padding-top, 40, 40, 40, 40, 40);
                        @include r(padding-bottom, 40, 40, 40, 40, 40);
                        @include r(padding-left, 40, 40, 40, 40, 40);
                        @include r(padding-right, 40, 40, 40, 40, 40);
                        p.title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            line-height: 1.2;
                            @include r(font-size, 24, 24, 24, 24, 24);
                        }
                        p.content {
                            font-weight: $font-weight-regular;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                            strong {
                                font-weight: $font-weight-semi-bold;
                                color: $color-error-500;
                            }
                        }
                        div.phone-wrapper-box {
                            width: fit-content;
                            display: flex;
                            align-items: center;
                            border: 1px solid $color-gray-200;
                            border-radius: 8px;
                            background-color: $color-white;
                            @include r(gap, 24, 24, 24, 24, 24);
                            @include r(padding-top, 24, 24, 24, 24, 24);
                            @include r(padding-bottom, 24, 24, 24, 24, 24);
                            @include r(padding-left, 24, 24, 24, 24, 24);
                            @include r(padding-right, 24, 24, 24, 24, 24);
                            div.phone-img-box {
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
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                    @include r(font-size, 16, 16, 16, 16, 16);
                                }
                            }
                            p.phone-title {
                                font-weight: $font-weight-bold;
                                color: $color-primary-500;
                                @include r(font-size, 16, 16, 16, 16, 16);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
