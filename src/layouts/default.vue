<template>
    <div class="loan-nara-layout">
        <header class="loan-nara-header-container">
            <div class="header-top">
                <div class="align-box">
                    <div class="company-info">
                        <p>주식회사대출나라대부중개<span>2025-서울강남-0111(대부중개업)</span></p>
                    </div>
                    <nav class="utility-nav">
                        <ul>
                            <li>즐겨찾기</li>
                            <li>회원가입</li>
                            <li>회사소개</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="header-main">
                <div class="align-box">
                    <div class="search-container">
                        <el-input
                            v-model="searchKeyword"
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
                    </div>
                </div>
            </div>
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

const searchKeyword = ref('')
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
                    ul {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                        li {
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
                    div.integrated-search {
                        @include r(width, 332, 534, 460, 300, 300);
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
                }
            }
        }
    }
}
</style>
