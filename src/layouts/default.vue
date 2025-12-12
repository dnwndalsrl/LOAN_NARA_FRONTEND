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
            <div class="header-main"></div>
            <nav class="header-nav"></nav>
        </header>

        <main class="loan-nara-main-container">
            <slot></slot>
        </main>

        <footer class="loan-nara-footer-container"></footer>
    </div>
</template>

<script setup lang="ts"></script>

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
}
</style>
