<template>
    <div class="mypage-admin-inquiry-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <div class="chat-wrapper-box">
                        <div class="scroll-area">
                            <div
                                v-for="(dateGroupItem, dateGroupIndex) in chatHistory"
                                :key="dateGroupItem.date"
                                class="chat-date-group"
                            >
                                <!-- 날짜 -->
                                <p class="date-title">
                                    {{ dateGroupItem.date }}({{ dateGroupItem.dayLabel }})
                                </p>

                                <!-- 메시지 목록 -->
                                <div class="message-list">
                                    <div
                                        v-for="(
                                            messageItem, messageIndex
                                        ) in dateGroupItem.messages"
                                        :key="messageItem.id"
                                        class="message-item"
                                        :class="{
                                            'is-user': messageItem.senderType === 'USER',
                                            'is-admin': messageItem.senderType === 'ADMIN',
                                        }"
                                    >
                                        <!-- 관리자 정보 -->
                                        <div
                                            v-if="
                                                shouldShowAdminHeader(
                                                    dateGroupItem.messages,
                                                    messageIndex,
                                                )
                                            "
                                            class="sender-box"
                                        >
                                            <div class="profile-img-box">
                                                <img
                                                    src="/images/common/profile_default.png"
                                                    alt=""
                                                />
                                            </div>

                                            <p class="sender-name">대출나라 관리자</p>
                                        </div>

                                        <!-- 메시지 -->
                                        <div class="message-content-box">
                                            <div class="message-bubble">
                                                <p
                                                    v-html="messageItem.message"
                                                    class="message-text"
                                                ></p>
                                            </div>

                                            <p class="time-title">
                                                {{ messageItem.time }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="message-form-wrapper-box">
                            <div class="input-box">
                                <el-input
                                    v-model="testMessage"
                                    type="textarea"
                                    :rows="4"
                                    resize="none"
                                    placeholder="문의하실 내용을 입력해 주세요."
                                />
                            </div>
                            <button type="button" class="send-button">채팅 보내기</button>
                        </div>
                    </div>
                    <div class="warning-title-box">
                        <div class="img-box">
                            <img src="/images/common/warning_circle_blue.png" alt="주의사항" />
                        </div>
                        <p>1:1 채팅 문의 답변은 영업시간 내에만 진행됩니다.(평일 10:00 ~ 17:00)</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const chatHistory = [
    {
        date: '2025.12.17',
        dayLabel: '수',
        messages: [
            {
                id: 1,
                senderType: 'USER',
                time: '09:25',
                message: '안녕하세요. 채팅 예시입니다.',
            },
            {
                id: 2,
                senderType: 'USER',
                time: '11:02',
                message: `여러 줄일 경우 테스트입니다. 여러 줄일 경우 테스트입니다.<br/>
                    여러 줄일 경우 테스트입니다. 여러 줄일 경우 테스트입니다.<br/><br/>
                    이 말풍선은 최대 width값을 가지고 있습니다.`,
            },
            {
                id: 3,
                senderType: 'ADMIN',
                time: '15:15',
                message: '안녕하세요. 채팅 예시입니다.',
            },
            {
                id: 4,
                senderType: 'ADMIN',
                time: '15:17',
                message: '추가 안내드립니다.',
            },
            {
                id: 5,
                senderType: 'ADMIN',
                time: '17:24',
                message: `여러 줄일 경우 테스트입니다. 여러 줄일 경우 테스트입니다.<br/>
                    여러 줄일 경우 테스트입니다. 여러 줄일 경우 테스트입니다.<br/><br/>
                    이 말풍선은 최대 width값을 가지고 있습니다.`,
            },
            {
                id: 6,
                senderType: 'USER',
                time: '17:40',
                message: '확인했습니다. 감사합니다.',
            },
            {
                id: 7,
                senderType: 'ADMIN',
                time: '17:45',
                message: '네, 감사합니다.',
            },
            {
                id: 7,
                senderType: 'ADMIN',
                time: '17:45',
                message: '네, 감사합니다.',
            },
            {
                id: 7,
                senderType: 'ADMIN',
                time: '17:45',
                message: '네, 감사합니다.',
            },
            {
                id: 7,
                senderType: 'ADMIN',
                time: '17:45',
                message: '네, 감사합니다.',
            },
        ],
    },
]

const testMessage = ref('')

// ========================================= Function
const shouldShowAdminHeader = (messages: any, index: any) => {
    const currentMessage = messages[index]

    if (currentMessage.senderType !== 'ADMIN') {
        return false
    }

    if (index === 0) {
        return true
    }

    const previousMessage = messages[index - 1]

    return previousMessage.senderType !== 'ADMIN'
}
</script>

<style lang="scss">
div.mypage-admin-inquiry-section {
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
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
                div.chat-wrapper-box {
                    border-radius: 16px;
                    border: 1px solid $color-gray-200;
                    background-color: $color-white;
                    @include r(padding-top, 20, 32, 32, 32, 32);
                    @include r(padding-bottom, 20, 32, 32, 32, 32);
                    @include r(padding-left, 20, 32, 32, 32, 32);
                    @include r(padding-right, 7, 19, 19, 19, 19);
                    div.scroll-area {
                        overflow-y: auto;
                        @include r(height, 610, 762, 722, 722, 722);
                        @include r(padding-right, 13, 13, 13, 13, 13);
                        @include r(margin-bottom, 42, 42, 42, 42, 42);
                        &::-webkit-scrollbar {
                            width: 6px;
                        }
                        &::-webkit-scrollbar-track {
                            background: transparent; /* 트랙 안 보이게 */
                        }
                        &::-webkit-scrollbar-thumb {
                            background-color: #bdbdbd;
                            border-radius: 999px;
                        }
                        div.chat-date-group {
                            width: 100%;
                            p.date-title {
                                text-align: center;
                                color: $color-gray-500;
                                font-weight: $font-weight-semi-bold;
                                @include r(font-size, 14, 14, 14, 14, 14);
                                @include r(margin-bottom, 40, 40, 40, 40, 40);
                            }
                            div.message-list {
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                @include r(gap, 16, 16, 16, 16, 16);
                                div.message-item {
                                    display: flex;
                                    flex-direction: column;
                                    @include r(gap, 16, 16, 16, 16, 16);
                                    &.is-user {
                                        align-items: flex-end;
                                        div.message-content-box {
                                            div.message-bubble {
                                                border-top-left-radius: 16px;
                                                border-top-right-radius: 16px;
                                                border-bottom-left-radius: 16px;
                                                border-bottom-right-radius: 4px;
                                                order: 2;
                                            }
                                        }
                                    }
                                    &.is-admin {
                                        align-items: flex-start;
                                        div.message-content-box {
                                            div.message-bubble {
                                                border-top-left-radius: 4px;
                                                border-top-right-radius: 16px;
                                                border-bottom-left-radius: 16px;
                                                border-bottom-right-radius: 16px;
                                            }
                                        }
                                    }
                                    div.sender-box {
                                        display: flex;
                                        align-items: center;
                                        @include r(gap, 10, 10, 10, 10, 10);
                                        div.profile-img-box {
                                            @include r(width, 24, 24, 24, 24, 24);
                                            img {
                                                display: block;
                                                width: 100%;
                                                height: auto;
                                            }
                                        }
                                        p.sender-name {
                                            color: $color-gray-900;
                                            font-weight: $font-weight-bold;
                                            @include r(font-size, 16, 16, 16, 16, 16);
                                            @include r(line-height, 20, 20, 20, 20, 20);
                                        }
                                    }
                                    div.message-content-box {
                                        display: flex;
                                        align-items: flex-end;
                                        @include r(gap, 10, 10, 10, 10, 10);
                                        div.message-bubble {
                                            background-color: $color-gray-100;
                                            @include r(padding-top, 16, 16, 16, 16, 16);
                                            @include r(padding-bottom, 16, 16, 16, 16, 16);
                                            @include r(padding-left, 16, 16, 16, 16, 16);
                                            @include r(padding-right, 16, 16, 16, 16, 16);
                                            @include r(max-width, 320, 580, 650, 650, 650);
                                            p {
                                                color: $color-gray-900;
                                                font-weight: $font-weight-medium;
                                                @include r(font-size, 14, 14, 14, 14, 14);
                                                @include r(line-height, 20, 20, 20, 20, 20);
                                            }
                                        }
                                        p.time-title {
                                            color: $color-gray-500;
                                            font-weight: $font-weight-regular;
                                            @include r(font-size, 12, 12, 12, 12, 12);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    div.message-form-wrapper-box {
                        display: flex;
                        align-items: stretch;
                        background-color: $color-gray-100;
                        border-radius: 16px;
                        @include r(gap, 16, 16, 16, 16, 16);
                        @include r(padding-top, 16, 16, 16, 16, 16);
                        @include r(padding-bottom, 16, 16, 16, 16, 16);
                        @include r(padding-left, 16, 16, 16, 16, 16);
                        @include r(padding-right, 16, 16, 16, 16, 16);

                        div.input-box {
                            flex: 1 1 0;
                            min-width: 0;
                            div.el-textarea {
                                height: 100%;
                                textarea.el-textarea__inner {
                                    height: 100% !important;
                                    min-height: 100% !important;
                                    padding: 0 !important;
                                    border: none !important;
                                    box-shadow: none !important;
                                    resize: none;
                                    background-color: transparent;
                                    font-weight: $font-weight-regular;
                                    color: $color-gray-900;
                                    line-height: 1.5;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                    @include r(line-height, 20, 20, 20, 20, 20);
                                    &::placeholder {
                                        color: $color-gray-400;
                                    }

                                    &:focus {
                                        box-shadow: none !important;
                                    }
                                }
                            }
                        }
                        button.send-button {
                            flex-shrink: 0;
                            border: none;
                            border-radius: 8px;
                            background-color: $color-secondary-500;
                            color: $color-white;
                            font-weight: $font-weight-bold;
                            cursor: pointer;
                            @include r(width, 104, 104, 104, 104, 104);
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(line-height, 20, 20, 20, 20, 20);
                        }
                    }
                }
                div.warning-title-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 6, 6, 6, 6, 6);
                    @include r(margin-top, 20, 20, 20, 20, 20);
                    div.img-box {
                        @include r(width, 14, 14, 14, 14, 14);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    p {
                        color: $color-gray-900;
                        font-weight: $font-weight-medium;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
        }
    }
}
</style>
