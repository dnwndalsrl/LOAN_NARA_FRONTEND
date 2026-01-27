<template>
    <div class="loan-nara-layout">
        <header class="loan-nara-header-container">
            <!-- Header 상단 -->
            <div class="header-top">
                <div class="align-box">
                    <div class="company-info">
                        <p>주식회사대출나라대부중개<span>2025-서울강남-0111(대부중개업)</span></p>
                    </div>
                    <nav class="utility-nav">
                        <div class="nav-align-box">
                            <NuxtLink>즐겨찾기</NuxtLink>
                            <NuxtLink>회원가입</NuxtLink>
                            <NuxtLink>회사소개</NuxtLink>
                        </div>
                    </nav>
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
                </div>
            </div>
            <!-- 메뉴 영역 -->
            <nav class="header-nav"></nav>
        </header>

        <main class="loan-nara-main-container">
            <slot></slot>
        </main>

        <footer class="loan-nara-footer-container"></footer>
    </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

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
</script>

<style lang="scss">
div.loan-nara-layout {
    width: 100%;
    header.loan-nara-header-container {
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
                nav.utility-nav {
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
                        display: flex;
                        align-items: center;
                        border: 1px solid #dfe3ea !important;
                        border-radius: 50px;
                        @include r(width, 248, 248, 248, 274, 274);
                        @include r(height, 50, 50, 50, 50, 50);
                        @include r(padding-left, 16, 16, 16, 16, 16);
                        @include r(padding-right, 20, 20, 20, 20, 20);
                        @include respond(tablet) {
                            display: none;
                        }
                        @include respond(mobile-plus) {
                            display: none;
                        }
                        @include respond(mobile) {
                            display: none;
                        }
                        div.el-select {
                            div.el-select__wrapper {
                                box-shadow: none !important;
                                min-height: auto !important;
                                padding: 0 !important;
                                @include r(margin-right, 16, 16, 16, 16, 16);
                                border-radius: 50px;
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
</style>
