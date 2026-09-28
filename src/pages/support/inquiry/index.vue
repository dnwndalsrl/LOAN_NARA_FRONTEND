<template>
    <div class="support-inquiry-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="form-wrapper">
                        <!-- 제목 -->
                        <div class="form-item-align-box">
                            <div class="form-item">
                                <p class="form-item-title">제목</p>
                                <div class="input-align-box">
                                    <NormalInput
                                        :size="'SMALL'"
                                        :placeholder="'제목을 입력해 주세요.'"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- 이름 / 문의유형 -->
                        <div class="form-item-align-box">
                            <div class="form-item">
                                <p class="form-item-title">이름</p>
                                <div class="input-align-box">
                                    <NormalInput
                                        :size="'SMALL'"
                                        :placeholder="'이름을 입력해 주세요.'"
                                    />
                                </div>
                            </div>
                            <div class="form-item">
                                <p class="form-item-title">문의유형</p>
                                <div class="input-align-box">
                                    <NormalSelectBox
                                        :options="[]"
                                        :size="'SMALL'"
                                        :placeholder="'문의유형을 선택해 주세요.'"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- 휴대폰번호 / 인증번호 입력 -->
                        <div class="form-item-align-box">
                            <div class="form-item">
                                <p class="form-item-title">휴대폰번호</p>
                                <div class="input-align-box">
                                    <NormalInput
                                        :size="'SMALL'"
                                        :placeholder="'휴대폰 번호를 입력해 주세요.'"
                                    />
                                    <NormalButton
                                        :type="'NORMAL'"
                                        :size="'LARGE'"
                                        :title="'인증번호 받기'"
                                        :bgColor="'white'"
                                        :borderColor="'primary-500'"
                                        :fontColor="'primary-500'"
                                    />
                                </div>
                            </div>
                            <div class="form-item">
                                <p class="form-item-title">인증번호 입력</p>
                                <div class="input-align-box">
                                    <NormalInput
                                        :size="'SMALL'"
                                        :placeholder="'인증번호를 입력해 주세요.'"
                                    />
                                    <NormalButton
                                        :type="'NORMAL'"
                                        :size="'LARGE'"
                                        :title="'확인'"
                                        :bgColor="'primary-500'"
                                        :borderColor="'primary-500'"
                                        :fontColor="'white'"
                                    />
                                </div>
                                <div class="form-item-sub-title-align-box">
                                    <div class="img-box">
                                        <img
                                            src="/images/common/warning_circle.png"
                                            alt="인증번호 입력"
                                        />
                                    </div>
                                    <p>휴대폰번호는 공개되지 않습니다.</p>
                                </div>
                            </div>
                        </div>
                        <!-- 문의내용 -->
                        <div class="form-item-align-box">
                            <div class="form-item">
                                <p class="form-item-title">문의내용</p>
                                <div class="input-align-box">
                                    <el-input
                                        type="textarea"
                                        :rows="5"
                                        placeholder="처리 (답변) 소요시간 10~20분 정도 소요되며, 처리 후 별도 안내드립니다.
운영시간 이후 접수건은 정상 영업일 기준 익일 순차대로 답변드립니다.
운영시간 (평일 10:00~17:00 / 점심시간 12:30~13:30) 주말&공휴일 휴무"
                                    >
                                    </el-input>
                                </div>
                            </div>
                        </div>
                        <!-- 스팸방지 -->
                        <div class="form-item-align-box">
                            <div class="form-item type-spam">
                                <p class="form-item-title">스팸방지</p>
                                <div class="input-align-box type-spam">
                                    <div class="spam-number">
                                        <p>7925</p>
                                    </div>
                                    <NormalInput
                                        :size="'SMALL'"
                                        :placeholder="'스팸방지 코드를 입력해 주세요.'"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="checkbox-wrapper">
                        <el-checkbox>개인정보 수집 및 이용에 동의합니다.</el-checkbox>
                        <NormalButton
                            :size="'LARGE'"
                            :isIcon="true"
                            :icon-direction="'RIGHT'"
                            :icon-url="'/images/common/small_right_arrow_dark_gray.png'"
                            :title="'전문보기'"
                            :bg-color="'gray-300'"
                            :border-color="'gray-300'"
                            :font-color="'gray-500'"
                            @click="personalCheckModalVisible = true"
                        />
                    </div>
                </div>
            </section>
        </div>
        <!-- 개인정보 수집 및 이용 Modal -->
        <NormalModal
            v-model="personalCheckModalVisible"
            :title="'개인정보 수집 및 이용'"
            class="personal-check-modal"
            @close="personalCheckModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div
                        v-for="(item, index) in personalCheckModalValue"
                        :key="index"
                        class="content-item"
                    >
                        <div class="title-box">
                            <h3 class="index-title">{{ index + 1 }}</h3>
                            <h3 class="title">{{ item.title }}</h3>
                        </div>
                        <p class="contents-title">{{ item.contents }}</p>
                        <div v-if="item.type === 'TABLE'" class="table-contents">
                            <div class="table-item">
                                <h3 class="top-title">위탁받는 자(수탁자)</h3>
                                <p class="bottom-title">나이스평가정보㈜</p>
                            </div>
                            <div class="table-item">
                                <h3 class="top-title">위탁하는 업무 내용</h3>
                                <p class="bottom-title">실소유확인</p>
                            </div>
                        </div>
                    </div>
                    <p class="warning-title">
                        ※귀하는 위 개인정보의 수집·이용에 대한 동의를 거부할 수 있으며, 동의 후에도
                        언제든지 철회가능합니다.
                    </p>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="personalCheckModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
const personalCheckModalValue = [
    {
        title: '수집하는 개인정보의 필수항목',
        type: 'NORMAL',
        contents:
            '문의유형(제휴,신고,광고,공지사항,기타,건의,오류) 이름,연락처,문의내용,쿠키,접속IP 정보',
    },
    {
        title: '개인정보의 수집 및 이용목적',
        type: 'NORMAL',
        contents: '이용자 요청 자료에 대한 서비스에 응대',
    },
    {
        title: '책임사항 및 면책사항',
        type: 'NORMAL',
        contents:
            '작성이후 진행과정에서 정보제공자(고객)와 정보이용자(대출업체)간의 발생되는 문제는 고객의 정 동의에 의해 진행된 것으로 모든 민형사상의 분쟁에서 주식회사 대출나라대부중개(대출나라)는 어떠한 일체의 책임이 없습니다. 자세한 사항은 이용약관을 의거 처리됩니다.',
    },
    {
        title: '개인정보의 처리위탁',
        type: 'TABLE',
        contents:
            '"회사"는 원활한 서비스 제공을 위해 개인정보를 위탁할 수 있고, 이 경우 위탁 받는 자와 위탁업무 내용에 대해 알리고 있습니다.',
    },
    {
        title: '개인정보의 보유 및 이용기간',
        type: 'NORMAL',
        contents: '원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.',
    },
]
// =================================================== State
// 개인정보 수집 및 이용 Modal 관련 Value
const personalCheckModalVisible = ref(false)
// =================================================== Computed

// =================================================== Function
</script>

<style lang="scss">
div.support-inquiry-section {
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
                div.form-wrapper {
                    border-radius: 16px;
                    border: 1px solid $color-gray-200;
                    @include r(padding-top, 24, 32, 40, 40, 40);
                    @include r(padding-bottom, 24, 32, 40, 40, 40);
                    @include r(padding-left, 24, 32, 40, 40, 40);
                    @include r(padding-right, 24, 32, 40, 40, 40);
                    div.form-item-align-box {
                        display: flex;
                        &:first-child {
                            margin-top: 0;
                        }
                        gap: var(--form-gap);
                        @include r(margin-top, 30, 30, 30, 30, 30);
                        @include r(--form-gap, 30, 30, 40, 40, 40);
                        @include respond(mobile-plus) {
                            flex-direction: column;
                        }
                        @include respond(mobile) {
                            flex-direction: column;
                        }
                        div.form-item {
                            flex: 1 1 0;
                            &.type-spam {
                                flex: 0 0 calc((100% - var(--form-gap)) / 2);
                            }
                            p.form-item-title {
                                font-weight: $font-weight-bold;
                                color: $color-gray-900;
                                &.large-gap {
                                    @include r(margin-bottom, 20, 20, 20, 20, 20);
                                }
                                @include r(font-size, 16, 16, 16, 16, 16);
                                @include r(margin-bottom, 14, 14, 14, 14, 14);
                            }
                            div.input-align-box {
                                display: flex;
                                align-items: center;
                                &.type-spam {
                                    @include r(gap, 14, 14, 14, 14, 14);
                                }
                                @include r(gap, 10, 10, 10, 10, 10);
                                button {
                                    flex-shrink: 0;
                                }
                                div.spam-number {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background-color: $color-gray-500;
                                    @include r(width, 64, 64, 64, 64, 64);
                                    @include r(height, 32, 32, 32, 32, 32);
                                    p {
                                        font-weight: $font-weight-bold;
                                        color: $color-white;
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                    }
                                }
                                div.el-textarea {
                                    textarea {
                                        border-radius: 8px !important;
                                        border: 1px solid #dcdfe6 !important;
                                        box-shadow: none !important;
                                        padding: 0.5rem 0.625rem !important;
                                        font-weight: $font-weight-regular;
                                        color: #292e41;
                                        @include r(font-size, 14, 14, 14, 14, 14);
                                    }
                                }
                            }
                            p.form-item-sub-title {
                                font-weight: $font-weight-medium;
                                color: $color-gray-500;
                                @include r(font-size, 12, 12, 13, 13, 13);
                                @include r(margin-top, 10, 10, 10, 10, 10);
                            }
                            div.form-item-sub-title-align-box {
                                display: flex;
                                align-items: center;
                                @include r(gap, 6, 6, 6, 6, 6);
                                @include r(margin-top, 10, 10, 10, 10, 10);
                                div.img-box {
                                    @include r(width, 14, 14, 14, 14, 14);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                                p {
                                    font-weight: $font-weight-medium;
                                    color: $color-gray-500;
                                    @include r(font-size, 12, 12, 13, 13, 13);
                                }
                            }
                        }
                    }
                }
                div.checkbox-wrapper {
                    display: flex;
                    align-items: center;
                    border-radius: 16px;
                    background-color: $color-gray-100;
                    @include r(gap, 16, 16, 16, 16, 16);
                    @include r(margin-top, 20, 20, 20, 20, 20);
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(padding-left, 24, 24, 24, 24, 24);
                    @include r(padding-right, 24, 24, 24, 24, 24);
                    label.el-checkbox {
                        display: flex;
                        height: auto;
                        span.el-checkbox__label {
                            font-weight: $font-weight-medium;
                            color: $color-gray-900;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                    button {
                        div.img-box {
                            margin-top: 1px;
                            height: auto;
                            @include r(width, 5, 5, 5, 5, 5);
                        }
                    }
                }
            }
        }
    }
}

div.personal-check-modal {
    width: 58.125rem !important;
    div.contents-wrapper {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        background-color: $color-gray-100;
        @include r(gap, 24, 24, 24, 24, 24);
        @include r(padding-top, 32, 32, 32, 32, 32);
        @include r(padding-bottom, 32, 32, 32, 32, 32);
        @include r(padding-left, 24, 24, 24, 24, 24);
        @include r(padding-right, 24, 24, 24, 24, 24);
        div.content-item {
            div.title-box {
                display: flex;
                align-items: center;
                @include r(gap, 8, 8, 8, 8, 8);
                @include r(margin-bottom, 10, 10, 10, 10, 10);
                h3.index-title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-400;
                    @include r(width, 20, 20, 20, 20, 20);
                    @include r(font-size, 16, 16, 16, 16, 16);
                }
                h3.title {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 16, 16, 16, 16, 16);
                }
            }
            p.contents-title {
                font-weight: $font-weight-regular;
                line-height: 1.3;
                color: $color-gray-900;
                @include r(font-size, 14, 14, 14, 14, 14);
            }
            div.table-contents {
                display: flex;
                align-items: center;
                @include r(margin-top, 16, 16, 16, 16, 16);
                div.table-item {
                    flex: 1 1 0;
                    border-top: 1px solid $color-gray-200;
                    border-bottom: 1px solid $color-gray-200;
                    &:first-child {
                        border-left: 1px solid $color-gray-200;
                        border-right: 1px solid $color-gray-200;
                    }
                    &:last-child {
                        border-right: 1px solid $color-gray-200;
                    }
                    h3 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: $font-weight-bold;
                        color: $color-white;
                        background-color: $color-gray-500;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include r(height, 36, 36, 36, 36, 36);
                    }
                    p {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: $font-weight-medium;
                        background-color: $color-white;
                        color: $color-gray-900;
                        @include r(font-size, 13, 13, 13, 13, 13);
                        @include r(height, 36, 36, 36, 36, 36);
                    }
                }
            }
        }
        p.warning-title {
            font-weight: $font-weight-medium;
            line-height: 1.3;
            color: $color-gray-500;
            @include r(font-size, 13, 13, 13, 13, 13);
        }
    }
    div.button-wrapper {
        display: flex;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
