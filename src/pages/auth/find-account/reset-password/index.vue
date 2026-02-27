<template>
    <div class="reset-password-section">
        <div class="align-box">
            <h2>비밀번호 재설정</h2>
            <section class="reset-password-form">
                <div class="form-item">
                    <p>새 비밀번호</p>
                    <NormalInput
                        v-model="resetPasswordState.newPassword"
                        :placeholder="'새 비밀번호를 입력해 주세요.'"
                    />
                    <span class="guide-txt">4~20자까지 사용가능합니다.</span>
                </div>
                <div class="form-item">
                    <p>비밀번호 확인</p>
                    <NormalInput
                        v-model="resetPasswordState.newPassword"
                        :placeholder="'비밀번호를 다시 입력해 주세요.'"
                    />
                </div>
                <div class="button-wrapper">
                    <NuxtLink :to="'/auth/find-account'">취소</NuxtLink>
                    <button>비밀번호 변경</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const resetPasswordState = ref({
    newPassword: '',
    newPasswordCheck: '',
})
</script>

<style lang="scss">
div.reset-password-section {
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
        section.reset-password-form {
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
                span.guide-txt {
                    display: block;
                    font-weight: 400;
                    color: $color-dark-gray;
                    @include r(font-size, 13, 13, 13, 13, 13);
                    @include r(margin-top, 10, 10, 10, 10, 10);
                    @include r(padding-left, 12, 12, 12, 12, 12);
                }
            }
            div.button-wrapper {
                display: flex;
                align-items: center;
                @include r(gap, 10, 10, 10, 10, 10);
                @include r(margin-top, 22, 22, 22, 22, 22);
                a {
                    flex: 1 1 0;
                    display: block;
                    font-weight: 700;
                    color: $color-white;
                    text-decoration: none;
                    border-radius: 6px;
                    text-align: center;
                    background-color: #717786;
                    cursor: pointer;
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                button {
                    display: block;
                    flex: 1 1 0;
                    color: $color-white;
                    font-weight: 700;
                    background-color: $color-primary;
                    border: none;
                    line-height: 1;
                    border-radius: 6px;
                    cursor: pointer;
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
        }
    }
}
</style>
