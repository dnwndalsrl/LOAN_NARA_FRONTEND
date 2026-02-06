<template>
    <div class="company-list-section">
        <div class="title-box">
            <h2>메인 등록업체</h2>
            <div class="sub-info-box">
                <p class="sub-title">배너 위치는 실시간으로 랜덤 배치됩니다.</p>
                <NormalLink
                    :title="'광고문의'"
                    :bgColor="'#DFE3EA'"
                    :borderColor="'#DFE3EA'"
                    :fontColor="'#5B6C8B'"
                />
            </div>
        </div>
        <ul class="list-box">
            <template v-for="(listItem, listIndex) in visibleCompanyList" :key="listItem.id">
                <!-- 일반 리스트 -->
                <li class="list-item">
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
                <!-- 중간배너 -->
                <ClientOnly>
                    <li v-if="listIndex === bannerIndex" class="banner-list-item">
                        <MiddleBannerSection />
                    </li>
                </ClientOnly>
            </template>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()
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

// ======================================== Computed
// 업체 리스트 가공 (기본은 60개, 모바일부터는 30개)
const visibleCount = computed(() => {
    if (isTablet.value) return 30
    if (isMobilePlus.value) return 30
    if (isMobile.value) return 30
    return 60
})

const visibleCompanyList = computed(() => {
    return companyListInfo.value.slice(0, visibleCount.value)
})

const bannerIndex = computed(() => {
    if (isPc.value) return 29
    if (isLaptop.value) return 31
    if (isTablet.value) return 14
    if (isMobilePlus.value) return 15
    if (isMobile.value) return 15
})
</script>

<style lang="scss">
div.company-list-section {
    @include r(padding-top, 30, 30, 30, 40, 60);
    @include r(padding-bottom, 30, 30, 30, 40, 60);
    div.title-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include r(margin-bottom, 20, 30, 30, 30, 30);
        h2 {
            font-weight: 700;
            color: $color-black;
            @include r(font-size, 20, 20, 20, 24, 24);
        }
        div.sub-info-box {
            display: flex;
            align-items: center;
            @include r(gap, 16, 16, 16, 16, 16);
            p.sub-title {
                font-weight: 400;
                color: #545976;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include respond(mobile-plus) {
                    display: none;
                }
                @include respond(mobile) {
                    display: none;
                }
            }
        }
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
            gap: 1rem;
        }
        li.list-item {
            border: 1px solid #dfe3ea;
            border-radius: 16px;
            background-color: $color-white;
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
        li.banner-list-item {
            flex: 0 0 100%;
            max-width: 100%;
            border: none;
            background: transparent;
            padding: 0;
        }
    }
}
</style>
