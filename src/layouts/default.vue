<template>
    <div class="service-layout">
        <header class="service-layout-header">
            <div class="align-box">
                <div class="logo-box">
                    <img src="/images/main/logo_w.png" alt="나는 기획 로고" />
                </div>
            </div>
        </header>
        <main class="service-layout-container">
            <slot></slot>
        </main>
        <footer class="service-layout-footer">
            <div class="align-box">
                <div class="img-box">
                    <img src="/images/main/logo_foot.png" alt="나는 기획 하단 로고" />
                </div>
                <div class="info-box">
                    <div class="top">
                        <p>사업자 등록번호 518-87-04207</p>
                        <div class="line-box">|</div>
                        <p>통신판매신고 602-88-00987</p>
                    </div>
                    <div class="middle">
                        <p>
                            서울특별시 강남구 테헤란로47길 17, 302-비31호(역삼동)<br />
                            대표이사 최환진
                        </p>
                    </div>
                    <div class="footer">
                        <p>© 2025. 나는기획 Co. All rights reserved.</p>
                    </div>
                </div>
                <div class="contact-box">
                    <p class="contact-title">Contact.</p>
                    <h1>010-7433-1021</h1>
                    <p class="date-title">평일 09:00~18:00 (주말 및 공휴일 휴무)</p>
                </div>
            </div>
        </footer>
        <aside class="float-button-container">
            <div class="float-button-box">
                <div class="img-box" @click="onClickTell()">
                    <img src="/images/main/tell.png" alt="전화" />
                </div>
                <div class="img-box" @click="onClickUp()">
                    <img src="/images/main/up.png" alt="위로가기" />
                </div>
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
const onClickTell = () => {
    window.location.href = 'tel:070-5142-0191'
}

const onClickUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss">
div.service-layout {
    width: 100%;
    position: relative;
    overflow: hidden;
    header.service-layout-header {
        position: absolute;
        width: 100%;
        background-color: #101010;
        @include r(padding-top, 24, 29, 30, 32);
        @include r(padding-bottom, 24, 29, 30, 32);
        @include r(padding-left, 15, 20, 40, 0);
        @include r(padding-right, 15, 20, 40, 0);
        div.align-box {
            @include respond(max) {
                max-width: $bp-pc;
                margin: 0 auto;
            }
            @include respond(pc) {
                max-width: 100%;
            }
            @include respond(laptop) {
                max-width: 100%;
            }
            @include respond(tablet) {
                max-width: 100%;
            }
            @include respond(mobile) {
                max-width: 100%;
            }
            div.logo-box {
                @include r(width, 115, 156, 120, 156);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    main.service-layout-container {
        width: 100%;
    }
    footer.service-layout-footer {
        width: 100%;
        background-color: #1d1d1d;
        @include r(padding-top, 40, 80, 60, 100);
        @include r(padding-bottom, 40, 80, 60, 100);
        @include r(padding-left, 15, 20, 40, 0);
        @include r(padding-right, 15, 20, 40, 0);
        div.align-box {
            display: flex;
            align-items: flex-start;
            @include respond(max) {
                max-width: $bp-pc;
                margin: 0 auto;
            }
            @include respond(pc) {
                max-width: 100%;
            }
            @include respond(laptop) {
                max-width: 100%;
                flex-direction: column;
            }
            @include respond(tablet) {
                max-width: 100%;
                flex-direction: column;
            }
            @include respond(mobile) {
                max-width: 100%;
                flex-direction: column;
            }
            div.img-box {
                @include r(margin-bottom, 36, 40, 0, 0);
                @include respond(laptop) {
                    order: 1;
                }
                @include respond(tablet) {
                    order: 1;
                }
                @include respond(mobile) {
                    order: 1;
                }
                @include r(width, 104, 130, 104, 130);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            div.info-box {
                @include respond(laptop) {
                    order: 3;
                }
                @include respond(tablet) {
                    order: 3;
                }
                @include respond(mobile) {
                    order: 3;
                }
                @include r(margin-left, 0, 0, 85, 70);
                @include r(margin-right, 0, 0, 100, 90);
                div.top {
                    display: flex;
                    align-items: center;
                    @include respond(tablet) {
                        display: block;
                    }
                    @include respond(mobile) {
                        display: block;
                    }
                    @include r(margin-bottom, 20, 20, 20, 25);
                    p {
                        font-family: 'Pretendard';
                        font-weight: normal;
                        color: #ffffff;
                        &:first-child {
                            @include r(margin-bottom, 20, 0, 0, 0);
                        }
                        @include r(font-size, 11, 18, 16, 18);
                    }
                    div.line-box {
                        width: 1px;
                        background-color: #4a4a4a;
                        @include respond(tablet) {
                            display: none;
                        }
                        @include respond(mobile) {
                            display: none;
                        }
                        @include r(margin-left, 0, 10, 10, 10);
                        @include r(margin-right, 0, 10, 10, 10);
                        @include r(height, 0, 14, 14, 14);
                    }
                }
                div.middle {
                    @include r(margin-bottom, 20, 20, 20, 20);
                    p {
                        font-family: 'Pretendard';
                        font-weight: normal;
                        color: #ffffff;
                        line-height: 1.3;
                        @include r(font-size, 11, 18, 16, 18);
                    }
                }
                div.footer {
                    p {
                        font-family: 'Pretendard';
                        font-weight: normal;
                        color: #777777;
                        @include r(font-size, 11, 18, 16, 18);
                    }
                }
            }
            div.contact-box {
                @include respond(laptop) {
                    order: 2;
                }
                @include respond(tablet) {
                    order: 2;
                }
                @include respond(mobile) {
                    order: 2;
                }
                @include r(margin-bottom, 38, 59, 0, 0);
                p.contact-title {
                    font-family: 'Pretendard';
                    font-weight: 800;
                    color: #ffffff;
                    @include r(font-size, 18, 24, 22, 24);
                    @include r(margin-bottom, 20, 30, 30, 25);
                }
                h1 {
                    font-family: 'Pretendard';
                    font-weight: 800;
                    color: #ffffff;
                    @include r(font-size, 32, 40, 36, 40);
                    @include r(margin-bottom, 20, 20, 15, 20);
                }
                p.date-title {
                    font-family: 'Pretendard';
                    color: #ffffff;
                    @include r(font-size, 11, 18, 16, 18);
                }
            }
        }
    }
    aside.float-button-container {
        position: fixed;
        @include r(right, 20, 25, 40, 25);
        @include r(bottom, 25, 25, 25, 25);
        div.img-box {
            cursor: pointer;
            &:first-child {
                @include r(margin-bottom, 10, 10, 10, 10);
            }
            @include r(width, 48, 56, 48, 56);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
