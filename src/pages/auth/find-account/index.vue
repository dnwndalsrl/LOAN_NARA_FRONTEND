<template>
    <div class="find-account-section">
        <div class="align-box">
            <h2>아이디/비밀번호 찾기</h2>
            <section class="find-account-form">
                <div class="form-item">
                    <p>아이디 찾기</p>
                    <div class="input-align-box">
                        <NormalInput
                            v-model="findIdState.phoneNumber"
                            :placeholder="'휴대폰 번호'"
                        />
                        <button>확인</button>
                    </div>
                </div>
                <div class="form-item">
                    <p>비밀번호 찾기</p>
                    <NormalInput v-model="finePasswordState.id" :placeholder="'아이디'" />
                    <div class="input-align-box">
                        <NormalInput
                            v-model="finePasswordState.phoneNumber"
                            :placeholder="'휴대폰 번호'"
                        />
                        <button class="no-background">인증번호 받기</button>
                    </div>
                    <div class="input-align-box">
                        <NormalInput
                            v-model="finePasswordState.authenticationNumber"
                            :placeholder="'인증번호'"
                        />
                        <button>확인</button>
                    </div>
                </div>
                <NuxtLink :to="'/auth/login'" class="link-txt">로그인 화면으로 돌아가기</NuxtLink>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const findIdState = ref({
    phoneNumber: '',
})

const finePasswordState = ref({
    id: '',
    phoneNumber: '',
    authenticationNumber: '',
})
</script>

<style lang="scss">
div.find-account-section {
    @include r(padding-top, 20, 20, 20, 20, 20);
    @include r(padding-bottom, 60, 100, 100, 100, 100);
    div.align-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            font-weight: 700;
            color: $color-black;
            @include r(font-size, 20, 24, 24, 24, 24);
            @include r(margin-bottom, 30, 40, 40, 40, 40);
        }
        section.find-account-form {
            width: 28.438rem;
            border-radius: 16px;
            background-color: $color-white;
            border: 1px solid #dfe3ea;
            @include r(padding-top, 32, 32, 32, 32, 32);
            @include r(padding-bottom, 32, 32, 32, 32, 32);
            @include r(padding-left, 32, 32, 32, 32, 32);
            @include r(padding-right, 32, 32, 32, 32, 32);
            @include respond(mobile) {
                width: 100%;
            }
            div.form-item {
                @include r(margin-bottom, 32, 32, 32, 32, 32);
                p {
                    font-weight: 700;
                    color: $color-black;
                    @include r(font-size, 18, 18, 18, 18, 18);
                    @include r(margin-bottom, 22, 22, 22, 22, 22);
                }
                div.input-align-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 10, 10, 10, 10, 10);
                    @include r(margin-top, 10, 10, 10, 10, 10);
                    div.normal-input {
                        flex: 1 1 0;
                    }
                    button {
                        display: block;
                        color: $color-white;
                        font-weight: 700;
                        background-color: $color-primary;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        &.no-background {
                            background-color: $color-white !important;
                            border: 1px solid $color-primary !important;
                            color: $color-primary !important;
                        }
                        @include r(width, 100, 100, 100, 100, 100);
                        @include r(padding-top, 16, 16, 16, 16, 16);
                        @include r(padding-bottom, 16, 16, 16, 16, 16);
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
            a.link-txt {
                display: block;
                font-weight: 500;
                color: $color-dark-gray;
                text-decoration: none;
                text-align: center;
                cursor: pointer;
                @include r(margin-top, 32, 32, 32, 32, 32);
                @include r(font-size, 14, 14, 14, 14, 14);
            }
        }
    }
}
</style>
