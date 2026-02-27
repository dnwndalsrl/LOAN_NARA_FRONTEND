<template>
    <header class="loan-nara-header-container">
        <!-- Header 상단 -->
        <div class="header-top">
            <div class="align-box">
                <div class="company-info">
                    <p>주식회사대출나라대부중개<span>2025-서울강남-0111(대부중개업)</span></p>
                </div>
                <div class="utility-nav">
                    <div class="nav-align-box">
                        <NuxtLink>즐겨찾기</NuxtLink>
                        <NuxtLink>회원가입</NuxtLink>
                        <NuxtLink>회사소개</NuxtLink>
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
                        <NuxtLink :to="'/auth/login'">업체로그인</NuxtLink>
                        <NuxtLink>광고문의</NuxtLink>
                        <p class="modal-action-title">주의사항</p>
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
    </header>
</template>
<script setup lang="ts">
import { useCommonStore } from '~/store/common'

const commonStore = useCommonStore()
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
                    font-weight: 400;
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
                @include respond(laptop) {
                    display: block;
                }
                div.nav-align-box {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    a {
                        display: block;
                        text-decoration: none;
                        font-weight: 600;
                        color: #6a6a6a;
                        cursor: pointer;
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
                            color: $color-black;
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
                                        color: $color-black;
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
                        font-weight: 600;
                        color: #373f57;
                        cursor: pointer;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    p {
                        font-weight: 600;
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
                                font-weight: 600;
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
                            font-weight: 400 !important;
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
                                font-weight: 700;
                                color: $color-primary;
                                @include r(width, 20, 20, 20, 20, 20);
                            }
                            p {
                                flex: 1;
                                min-width: 0;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                font-weight: 400;
                                color: $color-black;
                            }
                        }
                    }
                    p.empty-title {
                        font-weight: 600;
                        color: $color-dark-gray;
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
</style>
