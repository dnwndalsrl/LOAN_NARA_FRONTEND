<template>
    <div class="signup-terms-section">
        <PageHeaderBox />
        <section class="step-status-wrapper">
            <StepStatus :level="'1'" />
        </section>
        <section class="terms-wrapper">
            <div class="all-check-box">
                <el-checkbox v-model="allTermsCheck">전체 동의하기</el-checkbox>
                <p class="sub-info-title">
                    회원이용약관, 개인정보처리방침, 책임의 한계와 법적고지에 모두 동의합니다. 
                </p>
            </div>
            <ul class="terms-list-wrapper">
                <li v-for="(item, index) in termsInfo" :key="item.id" class="terms-list-item">
                    <el-checkbox v-model="item.isCheck">{{ item.label }}</el-checkbox>
                    <div class="content-box">
                        <p v-html="item.contents" />
                    </div>
                </li>
            </ul>
        </section>
        <section class="footer-wrapper">
            <p>* 대부(중개)업 등록증 상 대표자 휴대폰으로 인증바랍니다.</p>
            <div class="button-wrapper">
                <NormalLink
                    :type="'NORMAL'"
                    :size="'LARGE'"
                    :title="'취소'"
                    :bgColor="'#DFDFDF'"
                    :borderColor="'#DFDFDF'"
                    :fontColor="'#6B707E'"
                />
                <NormalButton
                    :type="'NORMAL'"
                    :size="'LARGE'"
                    :title="'인증번호받기'"
                    :bgColor="'#366ECC'"
                    :borderColor="'#366ECC'"
                    :fontColor="'#ffffff'"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'

// 전체 동의하기 여부
const allTermsCheck = ref(false)

// terms info
const termsInfo = ref([
    {
        id: uuid(),
        label: '이용약관',
        isCheck: false,
        contents:
            '이 약관은 주식회사 대출나라대부중개(대출나라)(이하 “회사”라고 합니다)가 운영하는 대출직거래 사이',
    },

    {
        id: uuid(),
        label: '개인정보처리방침',
        isCheck: false,
        contents:
            '이 약관은 주식회사 대출나라대부중개(대출나라)(이하 “회사”라고 합니다)가 운영하는 대출직거래 사이',
    },
    {
        id: uuid(),
        label: '책임의 한계와 법적고지',
        isCheck: false,
        contents:
            '이 약관은 주식회사 대출나라대부중개(대출나라)(이하 “회사”라고 합니다)가 운영하는 대출직거래 사이',
    },
])
</script>

<style lang="scss">
div.signup-terms-section {
    section.step-status-wrapper {
        @include r(margin-top, 20, 30, 30, 30, 30);
    }
    section.terms-wrapper {
        border-radius: 16px;
        border: 1px solid #dfe3ea;
        @include r(margin-top, 20, 20, 20, 20, 20);
        @include r(padding-top, 32, 40, 40, 40, 40);
        @include r(padding-bottom, 32, 40, 40, 40, 40);
        @include r(padding-left, 32, 40, 40, 40, 40);
        @include r(padding-right, 32, 40, 40, 40, 40);
        div.all-check-box {
            border-bottom: 1px solid #dfe3ea;
            @include r(margin-bottom, 32, 32, 32, 32, 32);
            @include r(padding-bottom, 32, 32, 32, 32, 32);
            label.el-checkbox {
                display: flex;
                height: auto;
                span.el-checkbox__label {
                    font-weight: 700;
                    color: $color-black;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
            p.sub-info-title {
                font-weight: 400;
                color: $color-dark-gray;
                @include r(margin-top, 10, 10, 10, 10, 10);
                @include r(font-size, 14, 14, 14, 14, 14);
            }
        }
        ul.terms-list-wrapper {
            display: flex;
            align-items: center;
            @include r(gap, 30, 30, 40, 40, 40);
            @include respond(mobile-plus) {
                flex-direction: column;
            }
            @include respond(mobile) {
                flex-direction: column;
            }
            li.terms-list-item {
                label.el-checkbox {
                    display: flex;
                    height: auto;
                    span.el-checkbox__label {
                        font-weight: 700;
                        color: $color-black;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                div.content-box {
                    border-radius: 8px;
                    border: 1px solid #dfe3ea;
                    @include r(height, 208, 208, 208, 208, 208);
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 16, 16, 16, 16, 16);
                    @include r(margin-top, 18, 18, 18, 18, 18);
                }
            }
        }
    }
    section.footer-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(margin-top, 20, 20, 20, 20, 20);
        @include r(gap, 20, 20, 20, 20, 20);
        @include respond(mobile-plus) {
            flex-direction: column;
            align-items: end;
        }
        @include respond(mobile) {
            flex-direction: column;
            align-items: end;
        }
        p {
            font-weight: 500;
            color: $color-red;
            @include r(font-size, 13, 13, 13, 13, 13);
        }
        div.button-wrapper {
            display: flex;
            align-items: center;
            @include r(gap, 10, 10, 10, 10, 10);
        }
    }
}
</style>
