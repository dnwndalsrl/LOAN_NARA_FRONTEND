<template>
    <div class="mypage-profile-withdraw-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <div class="header-top-box">
                        <MypageMenuNavigation />
                    </div>
                    <PageHeaderBox :is-small="true" />
                </div>
                <div class="page-content">
                    <div class="info-wrapper">
                        <div class="img-box">
                            <img src="/images/common/check_gray.png" alt="대출나라 회원탈퇴" />
                        </div>
                        <h3>그동안 대출나라를 이용해주셔서 감사합니다.</h3>
                        <p>
                            탈퇴 신청일로부터 계정정보가 모두 삭제됩니다.<br />
                            회원탈퇴를 원하시면 아래의 정보를 입력 후 탈퇴하기 버튼을 눌러주세요.
                        </p>
                    </div>
                    <div class="withdraw-form-wrapper">
                        <div class="form-item-box">
                            <div class="form-item">
                                <NormalInput :size="'NORMAL'" :placeholder="'아이디'" />
                            </div>
                            <div class="form-item">
                                <NormalInput :size="'NORMAL'" :placeholder="'비밀번호'" />
                            </div>
                        </div>
                        <button>탈퇴하기</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.mypage-profile-withdraw-section {
    div.align-box {
        display: flex;
        align-items: flex-start;
        width: 100%;
        min-width: 0;
        @include r(gap, 40, 40, 40, 40, 40);
        section.page-contents-wrapper {
            flex: 1 1 0;
            min-width: 0;
            div.page-header {
                @include r(margin-bottom, 30, 40, 40, 40, 40);
                div.header-top-box {
                    display: block;
                    @include respond(pc) {
                        display: none;
                    }
                    @include r(margin-bottom, 31, 31, 31, 31, 31);
                }
            }
            div.page-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                @include r(gap, 40, 40, 40, 40, 40);
                div.info-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    div.img-box {
                        @include r(width, 56, 64, 64, 64, 64);
                        @include r(margin-bottom, 24, 32, 32, 32, 32);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    h3 {
                        text-align: center;
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 24, 28, 28, 28, 28);
                        @include r(margin-bottom, 24, 24, 24, 24, 24);
                    }
                    p {
                        text-align: center;
                        font-weight: $font-weight-regular;
                        color: $color-gray-900;
                        line-height: 1.2;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                div.withdraw-form-wrapper {
                    @include r(width, 390, 390, 390, 390, 390);
                    div.form-item-box {
                        display: flex;
                        flex-direction: column;
                        @include r(gap, 10, 10, 10, 10, 10);
                        @include r(margin-bottom, 22, 22, 22, 22, 22);
                    }
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        padding: 0;
                        border-radius: 6px;
                        background-color: $color-error-500;
                        color: $color-white;
                        border: none;
                        font-weight: $font-weight-bold;
                        cursor: pointer;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include r(height, 49, 49, 49, 49, 49);
                    }
                }
            }
        }
    }
}
</style>
