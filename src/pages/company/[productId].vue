<template>
    <div class="company-detail-section">
        <div class="align-box">
            <section class="description-wrapper">
                <div class="img-box">
                    <img src="/images/company/messaging.png" alt="회사상세" />
                </div>
                <h2>비대면 월변 당일대출 OK 신불자 OK 무직자 OK 전화주세요</h2>
            </section>
            <section class="detail-wrapper">
                <!-- 업체 정보 -->
                <div class="detail-box">
                    <div class="title-box">
                        <h2>업체정보</h2>
                        <div class="button-box">
                            <NormalButton
                                :title="'업체정보'"
                                :bg-color="'secondary-500'"
                                :border-color="'secondary-500'"
                                :font-color="'white'"
                                @click="companyDetailModalVisible = true"
                            />
                            <NormalButton
                                :isIcon="true"
                                :icon-direction="'LEFT'"
                                :icon-url="'/images/common/warning.png'"
                                :title="'주의사항'"
                                :bg-color="'gray-300'"
                                :border-color="'gray-300'"
                                :font-color="'gray-500'"
                            />
                        </div>
                    </div>
                    <div class="contents-box">
                        <div class="content-item">
                            <p class="content-title">등록번호</p>
                            <div class="content-align-box">
                                <p class="normal-content">2024-충남-0012</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">등록기관</p>
                            <div class="content-align-box">
                                <p class="normal-content">충남 경제정책과(044-300-4044)</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">업체명</p>
                            <div class="content-align-box">
                                <p class="normal-content">25시스페셜무방문월변대부</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">영업소</p>
                            <div class="content-align-box">
                                <p class="normal-content">충남 나성로96, 더센트럴 B동 604호</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">연락처</p>
                            <div class="content-align-box">
                                <div class="top-content">
                                    <p class="bold-content">010-2316-2475</p>
                                    <div class="phone-align-box">
                                        <div class="img-box phone">
                                            <img src="/images/common/tell_phone.png" alt="전화" />
                                        </div>
                                        <p class="phone-title">통화하기</p>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/right_arrow_blue.png"
                                                alt="통화하기"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-content">
                                    <p class="gray-content">
                                        대출나라를 보고 연락드렸다고 하시면 보다 상담이 쉬워집니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 상품 정보 -->
                <div class="detail-box">
                    <div class="title-box">
                        <h2>상품정보</h2>
                    </div>
                    <div class="contents-box">
                        <div class="content-item">
                            <p class="content-title">월금리</p>
                            <div class="content-align-box">
                                <p class="normal-content">월 1% ~ 1.6%</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">연금리</p>
                            <div class="content-align-box">
                                <p class="normal-content">연 12% ~ 19.2%</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">대출한도</p>
                            <div class="content-align-box">
                                <p class="normal-content">상담</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">연체금리</p>
                            <div class="content-align-box">
                                <p class="normal-content">연 20% 이내</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">추가비용</p>
                            <div class="content-align-box">
                                <p class="normal-content">무</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">조기상환수수료</p>
                            <div class="content-align-box">
                                <p class="normal-content">무</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">상환방식</p>
                            <div class="content-align-box">
                                <p class="normal-content">상담 후 결정</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">대출기간</p>
                            <div class="content-align-box">
                                <p class="normal-content">상담</p>
                            </div>
                        </div>
                        <div class="content-item">
                            <p class="content-title">지역</p>
                            <div class="content-align-box">
                                <p class="normal-content">전국</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 부가설명 -->
                <div class="detail-box">
                    <div class="title-box">
                        <h2>부가설명</h2>
                    </div>
                    <p class="large-content-text">
                        ★안녕하세요 25시 스페셜 무방문월변대부입니다★ 한국대부협회 등록된<br />
                        공식 업체입니다. 최대 고객 보유이며 전국 우대금리와 맞춤<br />
                        컨설팅입니다. ★안녕하세요 25시 스페셜 무방문월변대부입니다★<br />
                        한국대부협회 등록된 공식 업체입니다. 최대 고객 보유이며 전국<br />
                        우대금리와 맞춤 컨설팅입니다.★안녕하세요 25시 스페셜<br />
                        무방문월변대부입니다★ 한국대부협회 등록된 공식 업체입니다. 최대 고객<br />
                        보유이며 전국 우대금리와 맞춤 컨설팅입니다. 최대 고객 보유이며 전국<br />
                        우대금리와 맞춤 컨설팅입니다.★안녕하세요 25시 스페셜<br />
                        무방문월변대부입니다★ 한국대부협회 등록된 공식 업체입니다. 최대 고객<br />
                        보유이며 전국 우대금리와 맞춤 컨설팅입니다.
                    </p>
                    <div class="middle-line"></div>
                    <div class="contents-box is-full">
                        <div class="content-item">
                            <p class="content-title">연락처</p>
                            <div class="content-align-box">
                                <div class="top-content">
                                    <p class="bold-content">010-2316-2475</p>
                                    <div class="phone-align-box">
                                        <div class="img-box phone">
                                            <img src="/images/common/tell_phone.png" alt="전화" />
                                        </div>
                                        <p class="phone-title">통화하기</p>
                                        <div class="img-box">
                                            <img
                                                src="/images/common/right_arrow_blue.png"
                                                alt="통화하기"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-content">
                                    <p class="gray-content">
                                        대출나라를 보고 연락드렸다고 하시면 보다 상담이 쉬워집니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 유의사항 -->
                <div class="detail-box type-warning">
                    <div class="title-box">
                        <h2>※ 유의사항</h2>
                    </div>
                    <p class="type-mb">
                        계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을 읽어보시기 바랍니다.
                        관계법령에 따라 금융상품에 관한 중요 사항을 설명받을 권리가 있습니다. 대출
                        시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다. 과도한 빚은
                        당신에게 큰 불행을 안겨줄 수 있습니다. 중개수수료를 요구하거나 받는 것은
                        불법입니다. 일정 기간 분할상환금 또는 분할상환원리금이 연체될 경우, 계약만료
                        기한 도래전 모든 원리금을 변제해야할 의무가 발생할 수 있습니다.
                        대부중개업체는 금융회사의 업무위탁을 받아 대출모집 및 소개 등의 섭외 활동을
                        돕습니다. 단, 실제 계약체결의 권한은 없습니다.
                    </p>
                    <p>
                        금리 연20% 이내 (연체이자율 포함 20% 이내) (단, 2021. 7. 7부터 체결, 갱신,
                        연장되는 계약에 한함), 취급수수료 없음, 중도상환 수수료 없음, 중개수수료
                        없음, 추가비용 없음. 상환기간 : 12개월 ~ 60개월 / 총 대출 비용 예시 :
                        100만원을 12개월 기간 동안 최대 금리 연20% 적용하여 원리금균등상환방법으로
                        이용하는 경우 총 상환금액 1,111,614원 (단, 대출상품 및 상환방법 등 대출계약
                        내용에 따라 달라질 수 있습니다.) 채무의 조기상환수수료율 등 조기상환조건
                        없음.
                    </p>
                </div>
                <!-- 유의사항2 -->
                <div class="detail-box type-warning-2">
                    <div class="title-box">
                        <h2>※ 유의사항</h2>
                    </div>
                    <p>
                        본 정보는 <strong>25시스페셜무방문월변대부</strong>에 등록한 자료를 바탕으로
                        대출나라가 편집 및 그 표현방법을 수정하여 완성한 것 입니다. 대출나라
                        동의없이 무단전재 또는 재배포, 재가공 할 수 없으며, 대출나라는
                        <strong>25시스페셜무방문월변대부</strong>에 게재한 자료에 대한 오류와
                        사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지않습니다.
                    </p>
                </div>
                <div class="return-btn-box">
                    <NormalLink
                        :to="'/'"
                        :title="'목록으로'"
                        `
                        :bgColor="'secondary-500'"
                        :borderColor="'secondary-500'"
                        :fontColor="'white'"
                    />
                </div>
            </section>
            <!-- 줄광고 테이블 목록 -->
            <section class="line-advertising-table-list-wrapper">
                <ActionTableListBox
                    :title="'충남지역 등록업체'"
                    :data="lineAdvertisingTableValue.list"
                    :total="lineAdvertisingTableValue.total"
                    :page-size="lineAdvertisingTableValue.pageSize"
                    :show-total="true"
                    v-model:current-page="lineAdvertisingTableValue.currentPage"
                    @change="onChangePage"
                >
                    <!-- 검색 영역 -->
                    <template #search>
                        <div class="search-box">
                            <NormalSelectBox :options="[]" :size="'SMALL'" :placeholder="'선택'" />
                            <NormalInput :placeholder="'검색어를 입력해 주세요.'" />
                            <NormalButton
                                :isIcon="true"
                                :icon-direction="'LEFT'"
                                :icon-url="'/images/common/search_white.png'"
                                :title="'검색'"
                                :bg-color="'secondary-500'"
                                :border-color="'secondary-500'"
                                :font-color="'white'"
                            />
                        </div>
                    </template>

                    <!-- PC 테이블 컬럼 -->
                    <el-table-column label="상품" width="100">
                        <template #default="{ row }">
                            {{ row.product }}
                        </template>
                    </el-table-column>

                    <el-table-column label="제목">
                        <template #default="{ row }">
                            <NuxtLink :to="`/company/${row.seq}`">
                                {{ row.title }}
                            </NuxtLink>
                        </template>
                    </el-table-column>

                    <el-table-column label="대출한도" width="160">
                        <template #default="{ row }">
                            {{ row.loanLimit }}
                        </template>
                    </el-table-column>

                    <el-table-column label="업체명" width="180">
                        <template #default="{ row }">
                            {{ row.companyName }}
                        </template>
                    </el-table-column>

                    <!-- 모바일 목록 -->
                    <template #mobile="{ items }">
                        <ul class="mobile-company-list">
                            <li v-for="item in items" :key="item.seq" class="mobile-company-item">
                                <NuxtLink :to="`/company/${item.seq}`">
                                    <strong>{{ item.title }}</strong>
                                    <span>{{ item.companyName }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </template>
                </ActionTableListBox>
            </section>
        </div>
        <!-- 하단 Fixed Box (Mobile 에서만 노출) -->
        <Teleport to="body">
            <div v-if="isMobile" class="company-detail-footer-fixed-box">
                <div class="button-wrapper">
                    <button type="button">
                        <div class="align-wrapper">
                            <div class="img-box">
                                <NuxtImg src="/images/common/message_blue.png" alt="문자상담" />
                            </div>

                            <p class="link-title">문자상담</p>
                        </div>
                    </button>

                    <button type="button">
                        <div class="align-wrapper">
                            <div class="img-box">
                                <NuxtImg src="/images/common/tell_phone_white.png" alt="전화상담" />
                            </div>

                            <p class="link-title">전화상담</p>
                        </div>
                    </button>
                </div>
            </div>
        </Teleport>
        <!-- 업체정보 상세보기 Modal -->
        <NormalModal
            v-model="companyDetailModalVisible"
            :title="'업체정보 상세보기'"
            class="company-detail-modal"
            @close="companyDetailModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="contents-item">
                        <h2>업체명</h2>
                        <div class="content-align-box">
                            <p class="content-title">카프렌즈대부</p>
                        </div>
                    </div>
                    <div class="contents-item">
                        <h2>업체연락처</h2>
                        <div class="content-align-box">
                            <p class="content-title">1522-0339</p>
                            <div class="phone-align-box">
                                <div class="img-box phone">
                                    <img src="/images/common/tell_phone.png" alt="전화" />
                                </div>
                                <p class="phone-title">통화하기</p>
                                <div class="img-box">
                                    <img src="/images/common/right_arrow_blue.png" alt="통화하기" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contents-item">
                        <h2>대표자</h2>
                        <div class="content-align-box">
                            <p class="content-title">이원녕</p>
                        </div>
                    </div>
                    <div class="contents-item">
                        <h2>등록번호</h2>
                        <div class="content-align-box">
                            <p class="content-title">2023-대구중구-0020</p>
                        </div>
                    </div>
                    <div class="contents-item">
                        <h2>영업소</h2>
                        <div class="content-align-box">
                            <p class="content-title">대구광역시 중구 달구벌대로 1921, 3층</p>
                        </div>
                    </div>
                    <div class="contents-item">
                        <h2>등록기관</h2>
                        <div class="content-align-box">
                            <p class="content-title">대구 중구 결제과 053-661-2656</p>
                        </div>
                    </div>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="companyDetailModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
        <!-- 누적 클릭 수 알림 Modal -->
        <NormalModal
            v-model="companyClickCountModalVisible"
            :title="''"
            :is-header="false"
            :show-close="false"
            class="company-click-count-modal"
            @close="companyClickCountModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="click-count-box">
                        <p class="title">이 업체를 <strong>3</strong>번이나 보셨네요!</p>
                        <p class="content">늦기전에 망설이지 말고 문의해보세요!</p>
                    </div>
                    <div class="list-box">
                        <h2 class="list-title">추천업체 리스트</h2>
                        <ul class="recommend-list">
                            <li class="recommend-list-item">
                                <div class="top-area">
                                    <NormalBadge :title="'전국'" />
                                    <p class="list-title">
                                        사업자대출 보증금담보대출 자영업자대출 월변가능
                                    </p>
                                </div>
                                <div class="bottom-area">
                                    <div class="company-info-item">
                                        <p class="info-title">대출한도</p>
                                        <p class="info-content">5,000만원</p>
                                    </div>
                                    <div class="company-info-item">
                                        <p class="info-title">업체명</p>
                                        <p class="info-content">R&B파이낸셜대부중개</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="button-wrapper">
                    <NormalButton
                        :title="'닫기'"
                        :bg-color="'gray-400'"
                        :border-color="'gray-400'"
                        :font-color="'white'"
                        @click="companyClickCountModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()
// =================================================== State
// 줄광고 테이블 목록입니다.
const lineAdvertisingTableValue = reactive({
    total: 100,
    currentPage: 1,
    pageSize: 10,
    list: [
        {
            seq: 1,
            product: '직장인',
            title: '직장인 신용대출 당일 상담 가능',
            loanLimit: '5,000만원',
            companyName: 'R&R파이낸셜대부중개',
        },
        {
            seq: 2,
            product: '무직자',
            title: '무직자 비대면 대출 상담',
            loanLimit: '200만원',
            companyName: '더원머니대부',
        },
        {
            seq: 3,
            product: '사업자',
            title: '사업자 운영자금 대출',
            loanLimit: '1,000만원',
            companyName: '유원상사대부중개',
        },
    ],
})

// 업체정보 상세보기 Modal 관련 Value
const companyDetailModalVisible = ref(false)

// 누적 클릭 수 알림 Modal 관련 Value
const companyClickCountModalVisible = ref(false)

// =================================================== Function
// 변경된 페이지를 반영하고 목록을 다시 조회합니다.
const onChangePage = ({ page, size }: { page: number; size: number }) => {
    lineAdvertisingTableValue.currentPage = page
    lineAdvertisingTableValue.pageSize = size
}
</script>

<style lang="scss">
div.company-detail-section {
    div.align-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        section.description-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-color: $color-gray-100;
            border-radius: 16px;
            @include r(margin-bottom, 20, 20, 20, 20, 20);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.img-box {
                @include r(margin-right, 16, 16, 16, 16, 16);
                @include r(width, 32, 32, 32, 32, 32);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            h2 {
                font-weight: $font-weight-bold;
                line-height: 1.3;
                color: $color-gray-900;
                @include r(font-size, 18, 18, 18, 18, 18);
            }
        }
        section.detail-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            @include r(gap, 20, 20, 20, 20, 20);
            div.detail-box {
                width: 100%;
                background-color: $color-white;
                border: 1px solid $color-gray-200;
                border-radius: 16px;
                @include r(padding-top, 24, 40, 40, 40, 40);
                @include r(padding-bottom, 24, 40, 40, 40, 40);
                @include r(padding-left, 24, 40, 40, 40, 40);
                @include r(padding-right, 24, 40, 40, 40, 40);
                &.type-warning {
                    background-color: $color-gray-100;
                    border: none;
                    div.title-box {
                        @include r(margin-bottom, 16, 16, 16, 16, 16);
                        h2 {
                            font-weight: $font-weight-bold;
                            color: $color-gray-500;
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                    }
                    p {
                        font-weight: $font-weight-regular;
                        color: $color-gray-500;
                        @include r(line-height, 20, 20, 20, 20, 20);
                        @include r(font-size, 14, 14, 14, 14, 14);
                        &.type-mb {
                            @include r(margin-bottom, 16, 16, 16, 16, 16);
                        }
                    }
                }
                &.type-warning-2 {
                    div.title-box {
                        @include r(margin-bottom, 16, 16, 16, 16, 16);
                        h2 {
                            font-weight: $font-weight-bold;
                            color: $color-gray-500;
                            @include r(font-size, 16, 16, 16, 16, 16);
                        }
                    }
                    p {
                        font-weight: $font-weight-regular;
                        color: $color-gray-500;
                        @include r(line-height, 20, 20, 20, 20, 20);
                        @include r(font-size, 14, 14, 14, 14, 14);
                        strong {
                            font-weight: $font-weight-semi-bold;
                            color: $color-gray-900;
                        }
                    }
                }
                div.title-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    @include r(gap, 8, 8, 8, 8, 8);
                    @include r(margin-bottom, 32, 32, 32, 32, 32);
                    h2 {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 18, 22, 22, 22, 22);
                    }
                    div.button-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 10, 10, 10);
                    }
                }
                div.contents-box {
                    display: flex;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    @include r(row-gap, 16, 16, 16, 16, 16);
                    &.is-full {
                        div.content-item {
                            @include respond(pc) {
                                flex: 0 0 100%;
                            }
                            @include respond(laptop) {
                                flex: 0 0 100%;
                            }
                            @include respond(tablet) {
                                flex: 0 0 100%;
                            }
                        }
                    }
                    div.content-item {
                        flex: 0 0 100%;
                        min-width: 0;
                        display: flex;
                        align-items: flex-start;
                        @include respond(pc) {
                            flex: 0 0 50%;
                        }
                        @include respond(laptop) {
                            flex: 0 0 50%;
                        }
                        @include respond(tablet) {
                            flex: 0 0 50%;
                        }
                        p.content-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            flex-shrink: 0;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            @include r(width, 100, 100, 100, 100, 100);
                        }
                        div.content-align-box {
                            p {
                                @include r(line-height, 20, 20, 20, 20, 20);
                                @include r(font-size, 14, 14, 14, 14, 14);
                                &.normal-content {
                                    font-weight: $font-weight-regular;
                                    color: $color-gray-900;
                                }
                                &.gray-content {
                                    font-weight: $font-weight-medium;
                                    color: $color-gray-500;
                                }
                                &.bold-content {
                                    font-weight: $font-weight-bold;
                                    color: $color-gray-900;
                                }
                            }
                            div.top-content {
                                display: flex;
                                align-items: center;
                                @include r(gap, 10, 10, 10, 10, 10);
                                div.phone-align-box {
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    @include respond(pc) {
                                        display: none;
                                    }
                                    @include respond(laptop) {
                                        display: none;
                                    }
                                    div.img-box {
                                        @include r(width, 6, 6, 6, 6, 6);
                                        &.phone {
                                            @include r(width, 12, 12, 12, 12, 12);
                                        }
                                        img {
                                            display: block;
                                            width: 100%;
                                            height: auto;
                                        }
                                    }
                                    p.phone-title {
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        font-weight: $font-weight-bold;
                                        color: $color-primary-500;
                                        @include r(margin-left, 6, 6, 6, 6, 6);
                                        @include r(margin-right, 8, 8, 8, 8, 8);
                                        @include r(font-size, 13, 13, 13, 13, 13);
                                    }
                                }
                            }
                            div.bottom-content {
                                @include r(margin-top, 4, 4, 4, 4, 4);
                            }
                        }
                    }
                }
                p.large-content-text {
                    font-weight: $font-weight-regular;
                    color: $color-gray-900;
                    @include r(line-height, 28, 28, 28, 28, 28);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                div.middle-line {
                    width: 100%;
                    height: 1px;
                    background-color: $color-gray-200;
                    @include r(margin-top, 32, 32, 32, 32, 32);
                    @include r(margin-bottom, 32, 32, 32, 32, 32);
                }
            }
            div.return-btn-box {
                display: flex;
                align-items: center;
                justify-content: end;
            }
        }
        section.line-advertising-table-list-wrapper {
            width: 100%;

            @include r(margin-top, 60, 60, 60, 60, 60);

            section.action-table-list-box {
                div.search-box {
                    display: flex;
                    align-items: center;

                    @include r(gap, 10, 10, 10, 10, 10);

                    div.normal-select-box {
                        flex-shrink: 0;

                        @include r(width, 100, 100, 100, 100, 100);
                    }

                    div.normal-input {
                        @include respond(pc) {
                            width: 15.625rem;
                        }

                        @include respond(laptop) {
                            width: 15.625rem;
                        }

                        @include respond(tablet) {
                            width: 15.625rem;
                        }

                        @include respond(mobile-plus) {
                            width: 100%;
                        }

                        @include respond(mobile) {
                            width: 100%;
                        }
                    }

                    button.normal-button {
                        flex-shrink: 0;
                    }
                }

                ul.mobile-company-list {
                    border-top: 1px solid $color-gray-200;

                    li.mobile-company-item {
                        border-bottom: 1px solid $color-gray-200;

                        @include r(padding-top, 10, 10, 10, 10, 10);
                        @include r(padding-bottom, 10, 10, 10, 10, 10);
                        @include r(padding-left, 8, 8, 8, 8, 8);
                        @include r(padding-right, 8, 8, 8, 8, 8);

                        a {
                            display: block;
                            color: $color-gray-900;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
}

div.company-detail-modal {
    div.el-dialog__body {
        div.contents-wrapper {
            display: flex;
            flex-direction: column;
            background-color: $color-gray-100;
            border-radius: 16px;
            @include r(gap, 16, 16, 16, 16, 16);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.contents-item {
                display: flex;
                align-items: center;
                h2 {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(width, 100, 100, 100, 100, 100);
                    @include r(line-height, 20, 20, 20, 20, 20);
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                div.content-align-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 10, 10, 10, 10, 10);
                    p.content-title {
                        font-weight: $font-weight-regular;
                        color: $color-gray-900;
                        @include r(line-height, 20, 20, 20, 20, 20);
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    div.phone-align-box {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        @include respond(pc) {
                            display: none;
                        }
                        @include respond(laptop) {
                            display: none;
                        }
                        div.img-box {
                            @include r(width, 6, 6, 6, 6, 6);
                            &.phone {
                                @include r(width, 12, 12, 12, 12, 12);
                            }
                            img {
                                display: block;
                                width: 100%;
                                height: auto;
                            }
                        }
                        p.phone-title {
                            margin-top: 0;
                            margin-bottom: 0;
                            font-weight: $font-weight-bold;
                            color: $color-primary-500;
                            @include r(margin-left, 6, 6, 6, 6, 6);
                            @include r(margin-right, 8, 8, 8, 8, 8);
                            @include r(font-size, 13, 13, 13, 13, 13);
                        }
                    }
                }
            }
        }
        div.button-wrapper {
            display: flex;
            align-items: center;
            justify-content: end;
            @include r(margin-top, 24, 24, 24, 24, 24);
        }
    }
}

div.company-click-count-modal {
    div.el-dialog__body {
        div.contents-wrapper {
            div.click-count-box {
                width: 100%;
                background-color: $color-gray-100;
                @include r(padding-top, 24, 24, 24, 24, 24);
                @include r(padding-bottom, 24, 24, 24, 24, 24);
                p {
                    color: $color-gray-900;
                    text-align: center;
                    @include r(line-height, 20, 20, 20, 20, 20);
                    &.title {
                        font-weight: $font-weight-semi-bold;
                        @include r(margin-bottom, 4, 4, 4, 4, 4);
                        @include r(font-size, 16, 16, 16, 16, 16);
                        strong {
                            color: $color-primary-500;
                        }
                    }
                    &.content {
                        font-weight: $font-weight-regular;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                }
            }
            div.list-box {
                @include r(margin-top, 24, 24, 24, 24, 24);
                h2.list-title {
                    color: $color-gray-900;
                    font-weight: $font-weight-bold;
                    @include r(font-size, 16, 16, 16, 16, 16);
                    @include r(margin-bottom, 16, 16, 16, 16, 16);
                }
                ul.recommend-list {
                    border-top: 1px solid $color-gray-200;
                    li.recommend-list-item {
                        border-bottom: 1px solid $color-gray-200;
                        @include r(padding-top, 10, 10, 10, 10, 10);
                        @include r(padding-bottom, 10, 10, 10, 10, 10);
                        @include r(padding-left, 8, 8, 8, 8, 8);
                        @include r(padding-right, 8, 8, 8, 8, 8);
                        div.top-area {
                            display: flex;
                            align-items: center;
                            @include r(gap, 8, 8, 8, 8, 8);
                            @include r(margin-bottom, 4, 4, 4, 4, 4);
                            p.list-title {
                                color: $color-gray-900;
                                font-weight: $font-weight-regular;
                                @include r(font-size, 14, 14, 14, 14, 14);
                            }
                        }
                        div.bottom-area {
                            display: flex;
                            align-items: center;
                            div.company-info-item {
                                display: flex;
                                align-items: center;
                                @include r(gap, 6, 6, 6, 6, 6);
                                &:first-child {
                                    border-right: 1px solid $color-gray-200;
                                    @include r(padding-right, 10, 10, 10, 10, 10);
                                }
                                &:last-child {
                                    @include r(padding-left, 10, 10, 10, 10, 10);
                                }
                                p {
                                    color: $color-gray-500;
                                    @include r(font-size, 13, 13, 13, 13, 13);
                                    &.info-title {
                                        font-weight: $font-weight-medium;
                                    }
                                    &.info-content {
                                        font-weight: $font-weight-regular;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        div.button-wrapper {
            display: flex;
            align-items: center;
            justify-content: end;
            @include r(margin-top, 24, 24, 24, 24, 24);
        }
    }
}

div.company-detail-footer-fixed-box {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    box-shadow: 4px 0px 20px 0px #00000029;
    background-color: $color-white;
    @include r(padding-top, 10, 10, 10, 10, 10);
    @include r(padding-bottom, 10, 10, 10, 10, 10);
    @include r(padding-left, 10, 10, 10, 10, 10);
    @include r(padding-right, 10, 10, 10, 10, 10);
    div.button-wrapper {
        display: flex;
        align-items: center;
        @include r(gap, 10, 10, 10, 10, 10);
        button {
            display: block;
            width: 100%;
            cursor: pointer;
            border-radius: 6px;
            font-weight: $font-weight-bold;
            line-height: 1;
            padding: 0;
            border: none;
            &:first-child {
                background-color: $color-white;
                border: 1px solid $color-primary-500;
                div.align-wrapper {
                    p.link-title {
                        color: $color-primary-500;
                    }
                }
            }
            &:last-child {
                background-color: $color-primary-500;
                border: 1px solid $color-primary-500;
                div.align-wrapper {
                    p.link-title {
                        color: $color-white;
                    }
                }
            }
            div.align-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                @include r(gap, 8, 8, 8, 8, 8);
                @include r(padding-top, 12, 12, 12, 12, 12);
                @include r(padding-bottom, 12, 12, 12, 12, 12);
                div.img-box {
                    @include r(width, 14, 14, 14, 14, 14);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p.link-title {
                    font-weight: $font-weight-bold;
                }
            }
        }
    }
}
</style>
