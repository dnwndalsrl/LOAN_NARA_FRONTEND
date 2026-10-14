<template>
    <header class="loan-nara-header-container">
        <!-- Header 상단 -->
        <div class="header-top">
            <div class="align-box">
                <div class="company-info">
                    <p>주식회사대출나라대부중개<span>2025-서울강남-0111(대부중개업)</span></p>
                </div>
                <div class="utility-nav">
                    <div v-if="!authStore.loggedIn" class="nav-align-box">
                        <NuxtLink to="/">즐겨찾기</NuxtLink>
                        <NuxtLink to="/auth/signup/terms">회원가입</NuxtLink>
                        <NuxtLink to="/legal/about">회사소개</NuxtLink>
                    </div>
                    <div v-else class="login-nav-align-box">
                        <p class="nav-title">
                            <strong class="black-bold">대출나라대부중개</strong> 님
                        </p>
                        <div class="divider"></div>
                        <p class="nav-title">
                            광고종료일 : 02월 10일 <strong class="red-bold">(D-97)</strong>
                        </p>
                        <div class="divider"></div>
                        <p class="nav-title">광고비용 : <strong class="red-bold">0만원</strong></p>
                        <div class="divider"></div>
                        <p class="nav-title">로그아웃</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header 검색 영역 -->
        <div class="header-main">
            <div class="align-box">
                <div class="search-container">
                    <el-input
                        v-model="integratedSearchValue"
                        placeholder="통합검색"
                        class="integrated-search"
                    >
                        <template #prefix>
                            <NuxtLink to="/" class="img-box">
                                <img src="/images/common/logo_blue.png" alt="대출나라 로고" />
                            </NuxtLink>
                        </template>
                        <template #suffix>
                            <NuxtLink to="/browse/search" class="img-box">
                                <img src="/images/common/search_gray.png" alt="통합검색" />
                            </NuxtLink>
                        </template>
                    </el-input>
                    <div class="company-search-select-box">
                        <el-select-v2
                            v-model="companyNameSearchValue"
                            :options="companyNameListOptions"
                            placeholder="업체명 검색"
                            class="company-search-select"
                            filterable
                            popper-class="company-search-popper"
                            :popper-options="{
                                modifiers: [{ name: 'offset', options: { offset: [0, 18] } }],
                            }"
                        />
                        <NuxtLink to="/browse/search" class="img-box">
                            <img src="/images/common/search_gray.png" alt="통합검색" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="utility-nav">
                    <!-- PC 노출 -->
                    <div class="nav-align-box">
                        <template v-if="!authStore.loggedIn">
                            <NuxtLink to="/auth/login">업체로그인</NuxtLink>
                            <NuxtLink to="/support/ad-inquiry">광고문의</NuxtLink>
                            <p class="modal-action-title" @click="warningModalVisible = true">
                                주의사항
                            </p>
                            <el-dropdown
                                trigger="click"
                                placement="bottom-end"
                                class="recent-dropdown-list"
                                popper-class="recent-dropdown-list-popper"
                            >
                                <div class="el-dropdown-link">
                                    <p>최근 본 업체</p>
                                    <div class="img-box">
                                        <img
                                            src="/images/common/down_arrow_gray.png"
                                            alt="최근 본 업체"
                                        />
                                    </div>
                                </div>
                                <template #dropdown>
                                    <el-dropdown-menu class="recent-dropdown-menu">
                                        <template v-if="recentViewCompanyValue.length > 0">
                                            <el-dropdown-item
                                                v-for="(item, index) in recentViewCompanyValue"
                                                :key="index"
                                            >
                                                <div class="item-align-box">
                                                    <strong>{{ index + 1 }}</strong>
                                                    <p>{{ item }}</p>
                                                </div>
                                            </el-dropdown-item>
                                        </template>
                                        <template v-else>
                                            <p class="empty-title">최근 본 업체가 없습니다.</p>
                                        </template>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </template>
                        <template v-else>
                            <NuxtLink to="/mypage/notice">마이페이지</NuxtLink>
                            <NuxtLink to="/support/ad-inquiry">광고문의</NuxtLink>
                        </template>
                    </div>
                    <!-- LABTOP, TABLET, MOBILE 노출 -->
                    <div class="menu-icon-box" @click="commonStore.openDrawerMenu()">
                        <div class="img-box">
                            <img src="/images/common/menu_bar.png" alt="대출나라 메뉴" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 대출거래 시 주의사항 Modal -->
        <NormalModal
            v-model="warningModalVisible"
            :title="'대출거래 시 주의사항'"
            class="warning-modal"
            @close="warningModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div
                        v-for="(parentItem, parentIndex) in warningModalValue"
                        :key="'parent' + parentIndex"
                        class="contents-item"
                    >
                        <p class="number-title">{{ parentIndex + 1 }}</p>
                        <div class="title-box">
                            <template
                                v-for="(childItem, childIndex) in parentItem.contents"
                                :key="'child' + childIndex"
                            >
                                <p v-if="childItem.type === 'NORMAL'" class="normal-title">
                                    {{ childItem.content }}
                                </p>
                                <p v-if="childItem.type === 'RED'" class="red-title">
                                    {{ childItem.content }}
                                </p>
                                <p v-if="childItem.type === 'GRAY'" class="gray-title">
                                    {{ childItem.content }}
                                </p>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="button-wrapper">
                    <NormalLink
                        :to="'/scam-number/search'"
                        :title="'사기번호검색'"
                        :bgColor="'secondary-500'"
                        :borderColor="'secondary-500'"
                        :fontColor="'white'"
                        @click="warningModalVisible = false"
                    />
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="warningModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </header>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useCommonStore } from '~/store/common'

// 주의사항 Modal Contents Value
const warningModalValue = [
    {
        contents: [
            {
                type: 'NORMAL',
                content:
                    '대출 상담 시 본인이 대출한 업체를 잊지 않기 위해 정확히 해당 업체 상호명, 연락처 등 꼭 메모 · 저장 하시기 바랍니다.',
            },
            {
                type: 'GRAY',
                content: '(업체상호명, 연락처 등 대출나라 홈페이지에서 검색 가능)',
            },
        ],
    },
    {
        contents: [
            {
                type: 'RED',
                content:
                    '대출을 목적으로 첫거래 고금리 대출(급전)을 강요하고 기타 수수료를 입금 후 월변등으로 한도를 높여주는 조건은 사기행위입니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'NORMAL',
                content:
                    '대출나라 담당자를 사칭하여 대출상담 및 대출을 권유하는 경우 절대 거래에 응하지 마시기 바랍니다.',
            },
            {
                type: 'GRAY',
                content: '(대출나라는 직접적인 대출 및 알선/중개를 하지 않습니다.)',
            },
        ],
    },
    {
        contents: [
            {
                type: 'RED',
                content: '대면 미팅 명목으로 고객에게 출장비(거마비) 요구는 사기행위입니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'RED',
                content:
                    '대출 알선 또는 대출 처리 비용(공증비) 명목으로 고객에게 수수료, 선이자, 선입금 요구는 사기행위입니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'NORMAL',
                content:
                    '법적 최대 연 이자율은 20%입니다. (추가,수수료 비용 포함) 이자율 초과하여 수취 및 요구는 사기행위입니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'NORMAL',
                content:
                    '위임장, 인감증명서, 신분증 등 개인정보가 담긴 중요 서류를 보낼 때는 업체 정보(상호, 연락처)를 다시 한 번 확인하고 신중을 기해야 합니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'NORMAL',
                content: '공인인증서(ID, 비밀번호, OTP) 정보 요구 시 절대 응하지 마시기 바랍니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'RED',
                content:
                    '휴대폰, 통장, 신용카드, 체크카드 매매 혹은 양도 요구 시 절대 응하지 마시기 바랍니다.',
            },
            {
                type: 'GRAY',
                content: '(대포통장, 대포폰 사기 범행에 이용될 수 있습니다.)',
            },
        ],
    },
    {
        contents: [
            {
                type: 'NORMAL',
                content:
                    '대출채권 추심자가 소속과 성명을 밝히지 않거나, 확인되지 않는 채권에 대해 일방적 변제 요구 시 절대 응하지 마시기 바랍니다.',
            },
        ],
    },
    {
        contents: [
            {
                type: 'RED',
                content:
                    '각종 연락처, SNS(텔레그램, 카톡 등)로 접근하여 얼굴 및 신체 사진을 요구하는 경우 절대 응하지 마시길 바랍니다.',
            },
        ],
    },
]

const commonStore = useCommonStore()
const authStore = useAuthStore()
// ======================================== state
// 통합검색 State Value
const integratedSearchValue = ref('')

// 업체명검색 State Value
const companyNameSearchValue = ref('')
const companyNameListOptions = ref([
    {
        label: '24시스페셜무방문월변대부1',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부2',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부3',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부4',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부5',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부6',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부7',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부8',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부9',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부10',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부11',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부12',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부13',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부14',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부15',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부16',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부17',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부18',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부19',
        value: '24시스페셜무방문월변대부',
    },
    {
        label: '24시스페셜무방문월변대부20',
        value: '24시스페셜무방문월변대부',
    },
])

// 최근 본 업체 State Value
const recentViewCompanyValue = ref([])

// 주의사항 Modal
const warningModalVisible = ref(false)
</script>
<style lang="scss">
header.loan-nara-header-container {
    position: relative;
    z-index: 1000;
    div.header-top {
        background-color: #f2f2f2;
        @include r(height, 33, 33, 33, 37, 37);
        @include r(line-height, 33, 33, 33, 37, 37);
        div.align-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.company-info {
                p {
                    font-weight: $font-weight-regular;
                    color: #6a6a6a;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    span {
                        display: inline-block;
                        @include r(margin-left, 16, 16, 16, 16, 16);
                    }
                }
            }
            div.utility-nav {
                display: none;
                @include respond(pc) {
                    display: block;
                }
                div.nav-align-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 24, 24, 24, 24, 24);
                    a {
                        display: block;
                        text-decoration: none;
                        font-weight: $font-weight-semi-bold;
                        color: #6a6a6a;
                        cursor: pointer;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                div.login-nav-align-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 16, 16, 16, 16, 16);
                    p.nav-title {
                        font-weight: $font-weight-semi-bold;
                        color: $color-gray-600;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        strong {
                            &.black-bold {
                                font-weight: $font-weight-semi-bold;
                                color: $color-gray-900;
                            }
                            &.red-bold {
                                font-weight: $font-weight-semi-bold;
                                color: $color-error-500;
                            }
                        }
                    }
                    div.divider {
                        border-bottom: 1px solid $color-gray-300;
                        transform: rotate(90deg);
                        @include r(width, 12, 12, 12, 12, 12);
                    }
                    button {
                        background: none;
                        border: none;
                        padding: 0;
                        font-weight: $font-weight-semi-bold;
                        color: $color-gray-600;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
        }
    }
    div.header-main {
        background: $color-white;
        border-bottom: 1px solid #eaedf4;
        @include r(padding-top, 10, 10, 10, 16, 16);
        @include r(padding-bottom, 10, 10, 10, 16, 16);
        div.align-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @include r(padding-left, 16, 24, 24, 40, 40);
            @include r(padding-right, 16, 24, 24, 40, 40);
            @include respond(pc) {
                max-width: 75rem;
                margin: 0 auto;
            }
            div.search-container {
                display: flex;
                align-items: center;
                @include r(gap, 20, 20, 20, 20, 20);
                div.integrated-search {
                    @include r(width, 332, 534, 460, 274, 274);
                    @include r(height, 50, 50, 50, 50, 50);
                    div.el-input__wrapper {
                        box-shadow: none !important;
                        border: 1px solid #dfe3ea !important;
                        border-radius: 50px;
                        @include r(padding-top, 0, 0, 0, 0, 0);
                        @include r(padding-bottom, 0, 0, 0, 0, 0);
                        @include r(padding-left, 16, 16, 16, 16, 16);
                        @include r(padding-right, 20, 20, 20, 20, 20);
                        span.el-input__prefix {
                            span.el-input__prefix-inner {
                                a.img-box {
                                    cursor: pointer;
                                    @include r(width, 25, 25, 25, 25, 25);
                                    img {
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                    }
                                }
                            }
                        }
                        input.el-input__inner {
                            color: $color-gray-900;
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                        span.el-input__suffix {
                            span.el-input__suffix-inner {
                                a.img-box {
                                    @include r(width, 18, 18, 18, 18, 18);
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
                div.company-search-select-box {
                    display: none;
                    align-items: center;
                    border: 1px solid #dfe3ea !important;
                    border-radius: 50px;
                    @include r(width, 248, 248, 248, 274, 274);
                    @include r(height, 50, 50, 50, 50, 50);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 20, 20, 20, 20, 20);
                    @include respond(pc) {
                        display: flex;
                    }
                    div.el-select {
                        div.el-select__wrapper {
                            box-shadow: none !important;
                            min-height: auto !important;
                            padding: 0 !important;
                            border-radius: 50px;
                            @include r(margin-right, 16, 16, 16, 16, 16);
                            div.el-select__selection {
                                @include r(font-size, 16, 16, 16, 16, 16);
                                div.el-select__selected-item {
                                    input {
                                        color: $color-gray-900;
                                    }
                                }
                            }
                        }
                    }
                    a.img-box {
                        @include r(width, 18, 18, 18, 18, 18);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }
            div.utility-nav {
                div.nav-align-box {
                    display: none;
                    align-items: center;
                    gap: 1.5rem;
                    @include respond(pc) {
                        display: flex;
                    }
                    a {
                        display: block;
                        text-decoration: none;
                        font-weight: $font-weight-semi-bold;
                        color: #373f57;
                        cursor: pointer;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    p {
                        font-weight: $font-weight-semi-bold;
                        color: #373f57;
                        cursor: pointer;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    div.recent-dropdown-list {
                        div.el-dropdown-link {
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            background-color: $color-white;
                            border: 1px solid #d7dce5;
                            border-radius: 50px;
                            @include r(padding-top, 7, 7, 7, 7, 7);
                            @include r(padding-bottom, 7, 7, 7, 7, 7);
                            @include r(padding-left, 14, 14, 14, 14, 14);
                            @include r(padding-right, 14, 14, 14, 14, 14);
                            p {
                                font-weight: $font-weight-semi-bold;
                                color: #373f57;
                                @include r(margin-right, 8, 8, 8, 8, 8);
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                            div.img-box {
                                width: 8px;
                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
                div.menu-icon-box {
                    display: block;
                    @include respond(pc) {
                        display: none;
                    }
                    div.img-box {
                        cursor: pointer;
                        @include r(width, 24, 24, 24, 24, 24);
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

div.company-search-popper {
    border-radius: 16px !important;
    border: 1px solid #d7dce5 !important;
    background-color: #ffffff !important;
    box-shadow: 4px 4px 0 rgba(224, 224, 224, 0.4) !important;
    line-height: 1 !important;
    @include r(font-size, 13, 13, 13, 13, 13);
    div.el-select-dropdown {
        div.el-vl__wrapper {
            div.el-select-dropdown__list {
                margin: 10px 0 !important;
                div {
                    li.el-select-dropdown__item {
                        padding: 0 0 0 16px !important;
                        &.is-hovering {
                            background-color: inherit !important;
                        }
                        span {
                            font-weight: $font-weight-regular !important;
                            color: #292e41 !important;
                        }
                    }
                }
            }
            div.el-virtual-scrollbar {
                right: 5px !important;
            }
        }
    }
    span.el-popper__arrow {
        display: none;
    }
}

div.recent-dropdown-list-popper {
    background-color: $color-white !important;
    border-radius: 16px !important;
    border: 1px solid #d7dce5 !important;
    box-shadow: 4px 4px 0 rgba(224, 224, 224, 0.4) !important;
    display: none;
    @include respond(pc) {
        display: block;
    }
    @include respond(laptop) {
        display: block;
    }
    @include r(width, 177, 177, 177, 177, 177);
    div.el-scrollbar {
        div.el-scrollbar__wrap {
            div.el-scrollbar__view {
                ul.el-dropdown-menu {
                    border-radius: 16px !important;
                    border: none !important;
                    background-color: #ffffff !important;
                    line-height: 1 !important;
                    box-shadow: none !important;
                    @include r(padding-top, 20, 20, 20, 20, 20);
                    @include r(padding-bottom, 20, 20, 20, 20, 20);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 20, 20, 20, 20, 20);
                    li.el-dropdown-menu__item {
                        padding: 0 !important;
                        line-height: 1 !important;
                        background-color: $color-white !important;
                        @include r(margin-bottom, 12, 12, 12, 12, 12);
                        @include r(font-size, 14, 14, 14, 14, 14);
                        &:last-child {
                            margin-bottom: 0;
                        }
                        div.item-align-box {
                            display: flex;
                            align-items: center;
                            min-width: 0;
                            strong {
                                flex-shrink: 0;
                                font-weight: $font-weight-bold;
                                color: $color-primary-500;
                                @include r(width, 20, 20, 20, 20, 20);
                            }
                            p {
                                flex: 1;
                                min-width: 0;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                font-weight: $font-weight-regular;
                                color: $color-gray-900;
                            }
                        }
                    }
                    p.empty-title {
                        font-weight: $font-weight-semi-bold;
                        color: $color-gray-500;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
        }
    }
    span.el-popper__arrow {
        display: none !important;
    }
}

div.warning-modal {
    width: 58.125rem !important;
    div.contents-wrapper {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        background-color: $color-gray-100;
        @include r(padding-top, 24, 24, 24, 24, 24);
        @include r(padding-bottom, 24, 24, 24, 24, 24);
        @include r(padding-left, 24, 24, 24, 24, 24);
        @include r(padding-right, 24, 24, 24, 24, 24);
        @include r(gap, 10, 10, 10, 10, 10);
        div.contents-item {
            display: flex;
            align-items: baseline;
            @include r(gap, 10, 10, 10, 10, 10);
            p.number-title {
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: $font-weight-bold;
                color: $color-gray-400;
                @include r(width, 20, 20, 20, 20, 20);
                @include r(font-size, 13, 13, 13, 13, 13);
            }
            div.title-box {
                p {
                    font-weight: $font-weight-medium;
                    line-height: 1.3;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    &.normal-title {
                        color: $color-gray-900;
                    }
                    &.red-title {
                        color: $color-error-500;
                    }
                    &.gray-title {
                        color: $color-gray-500;
                    }
                }
            }
        }
    }
    div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(gap, 10, 10, 10, 10, 10);
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
