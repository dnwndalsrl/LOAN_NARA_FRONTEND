<template>
    <div class="company-list-section">
        <div class="title-box">
            <h2>메인 등록업체</h2>
            <div class="sub-info-box">
                <p>배너 위치는 실시간으로 랜덤 배치됩니다.</p>
            </div>
        </div>
        <ul class="list-box">
            <li
                v-for="(listItem, listIndex) in companyListInfo"
                :key="listItem.id"
                class="list-item"
            >
                <NuxtLink :to="'/'">
                    <div class="badge-box">
                        <NormalBadge :title="listItem.area" />
                        <NewBadge />
                    </div>
                    <p class="main-title">{{ listItem.title }}</p>
                    <div class="content-title-box">
                        <p v-if="listItem.contents1">{{ listItem.contents1 }}</p>
                        <p v-if="listItem.contents2">{{ listItem.contents2 }}</p>
                    </div>
                    <div class="phone-num-box">
                        <div class="img-box">
                            <img src="/images/common/tell_phone.png" alt="전화번호" />
                        </div>
                        <p>{{ listItem.phone }}</p>
                    </div>
                    <p class="company-name-title">{{ listItem.companyName }}</p>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
// ======================================== state
const companyListInfo = ref([
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
    {
        id: uuid(),
        area: '전국',
        isNew: true,
        title: '당일지급 무방문 월변',
        contents1: '소액에서 1000까지',
        contents2: '당일송금 당일승인 원칙',
        phone: '010-1234-1234',
        companyName: '대출나라',
    },
])
</script>

<style lang="scss">
div.company-list-section {
    div.title-box {
    }
    ul.list-box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        @include respond(pc) {
            gap: 1.25rem;
        }
        @include respond(laptop) {
            gap: 1.25rem;
        }
        @include respond(tablet) {
            gap: 1.25rem;
        }
        @include respond(mobile-plus) {
            gap: 1.5rem;
        }
        @include respond(mobile) {
            gap: 1.5rem;
        }
        li.list-item {
            border: 1px solid #dfe3ea;
            border-radius: 16px;
            transition: border-color 0.2s ease;
            &:hover {
                border: 1px solid $color-primary;
            }
            @include respond(pc) {
                flex: 0 0 calc((100% - 1.25rem * 4) / 5);
            }
            @include respond(laptop) {
                flex: 0 0 calc((100% - 1.25rem * 3) / 4);
            }
            @include respond(tablet) {
                flex: 0 0 calc((100% - 1.25rem * 2) / 3);
            }
            @include respond(mobile-plus) {
                flex: 0 0 calc((100% - 1.5rem * 1) / 2);
            }
            @include respond(mobile) {
                flex: 0 0 calc((100% - 1.5rem * 1) / 2);
            }
            a {
                display: block;
                text-decoration: none;
                @include r(padding-top, 24, 24, 24, 24, 24);
                @include r(padding-bottom, 24, 24, 24, 24, 24);
                @include r(padding-left, 24, 24, 24, 24, 24);
                @include r(padding-right, 24, 24, 24, 24, 24);
                div.badge-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 6, 6, 6, 6, 6);
                    @include r(margin-bottom, 10, 10, 10, 10, 10);
                }
                p.main-title {
                    font-weight: 700;
                    color: $color-black;
                    @include r(font-size, 18, 18, 18, 18, 18);
                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                }
                div.content-title-box {
                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                    p {
                        line-height: 1.3;
                        font-weight: 400;
                        color: $color-dark-gray;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                div.phone-num-box {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #dfe3ea;
                    @include r(padding-bottom, 10, 10, 10, 10, 10);
                    div.img-box {
                        @include r(margin-right, 8, 8, 8, 8, 8);
                        @include r(width, 14, 14, 14, 14, 14);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    p {
                        font-weight: 500;
                        color: $color-black;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
                p.company-name-title {
                    font-weight: 400;
                    color: $color-black;
                    @include r(margin-top, 10, 10, 10, 10, 10);
                    @include r(font-size, 13, 13, 13, 13, 13);
                }
            }
        }
    }
}
</style>
