<template>
    <div class="login-section">
        <div class="align-box">
            <h2>업체 로그인</h2>
            <section class="login-form">
                <div class="title-align-box">
                    <div class="img-box">
                        <img src="/images/common/exclamation_blue.png" alt="로그인" />
                    </div>
                    <p>대출업체만 로그인 가능합니다.</p>
                </div>
                <p class="sub-info-title">일반 고객은 회원가입 없이 이용 가능합니다.</p>
                <div class="form-content-wrapper">
                    <NormalInput
                        :size="'NORMAL'"
                        v-model="loginFormState.id"
                        :placeholder="'아이디'"
                    />
                    <NormalInput
                        :size="'NORMAL'"
                        v-model="loginFormState.password"
                        :show-password="true"
                        :placeholder="'비밀번호'"
                    />
                </div>
                <el-checkbox v-model="isSaveId">아이디 저장</el-checkbox>
                <div class="button-wrapper">
                    <button>로그인</button>
                    <NuxtLink :to="'/auth/signup/terms'">회원가입</NuxtLink>
                </div>
                <NuxtLink :to="'/auth/find-account'" class="link-txt"
                    >아이디 / 비밀번호 찾기</NuxtLink
                >
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const loginFormState = ref({
    id: '',
    password: '',
})

const isSaveId = ref(false)
</script>

<style lang="scss">
div.login-section {
    div.align-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            font-weight: $font-weight-bold;
            color: $color-gray-900;
            @include r(font-size, 20, 24, 24, 24, 24);
            @include r(margin-bottom, 30, 40, 40, 40, 40);
        }
        section.login-form {
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
            div.title-align-box {
                display: flex;
                align-items: center;
                @include r(gap, 6, 6, 6, 6, 6);
                div.img-box {
                    flex-shrink: 0;
                    @include r(width, 16, 16, 16, 16, 16);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p {
                    font-weight: $font-weight-medium;
                    color: $color-gray-900;
                    @include r(font-size, 16, 16, 16, 16, 16);
                }
            }
            p.sub-info-title {
                font-weight: $font-weight-medium;
                color: $color-gray-500;
                @include r(margin-top, 7, 7, 7, 7, 7);
                @include r(margin-bottom, 22, 22, 22, 22, 22);
                @include r(font-size, 13, 13, 13, 13, 13);
            }
            div.form-content-wrapper {
                display: flex;
                flex-direction: column;
                @include r(gap, 10, 10, 10, 10, 10);
            }
            label.el-checkbox {
                display: flex;
                height: auto;
                @include r(margin-top, 22, 22, 22, 22, 22);
                span.el-checkbox__label {
                    font-weight: $font-weight-medium;
                    color: $color-gray-900;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
            div.button-wrapper {
                display: flex;
                align-items: center;
                @include r(gap, 10, 10, 10, 10, 10);
                @include r(margin-top, 22, 22, 22, 22, 22);
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1 1 0;
                    color: $color-white;
                    font-weight: $font-weight-bold;
                    background-color: $color-primary-500;
                    border: none;
                    line-height: 1;
                    border-radius: 6px;
                    cursor: pointer;
                    @include r(height, 49, 49, 49, 49, 49);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                a {
                    flex: 1 1 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: $font-weight-bold;
                    color: $color-primary-500;
                    text-decoration: none;
                    border: 1px solid $color-primary-500;
                    border-radius: 6px;
                    text-align: center;
                    cursor: pointer;
                    @include r(height, 49, 49, 49, 49, 49);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
            a.link-txt {
                display: block;
                font-weight: $font-weight-medium;
                color: $color-gray-500;
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
