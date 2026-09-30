<template>
    <div class="support-ad-inquiry-content-type-two">
        <ul class="ad-list-wrapper">
            <li v-for="(listItem, listIndex) in infoValue" :key="listIndex" class="ad-list-item">
                <div class="info-box">
                    <div v-if="listItem.badge.type !== 'NONE'" class="badge-area">
                        <template v-if="listItem.badge.type === 'PREMIUM'">
                            <PremiumBadge />
                        </template>
                        <template v-if="listItem.badge.type === 'BEST'">
                            <GradientBadge :title="'BEST'" />
                        </template>
                        <template v-if="listItem.badge.type === 'TITLE'">
                            <p class="badge-title">유료 배너광고 등록 시 무료!</p>
                        </template>
                    </div>
                    <div class="main-title-area">
                        <h2 class="main-title">{{ listItem.mainTitle }}</h2>
                    </div>
                    <div class="price-item-area">
                        <div
                            v-for="(priceItem, priceIndex) in listItem.priceItems"
                            :key="priceIndex"
                            :class="
                                priceItem.type === 'NORMAL' ? 'price-item' : 'price-item is-small'
                            "
                        >
                            <p class="price-item-title">{{ priceItem.title }}</p>
                            <p class="price-item-contents">{{ priceItem.contents }}</p>
                        </div>
                    </div>
                    <div
                        v-if="listItem.subInfo.title || listItem.subInfo.contents"
                        class="sub-info-area"
                    >
                        <p
                            v-if="listItem.subInfo.title"
                            class="sub-info-title"
                            v-html="listItem.subInfo.title"
                        ></p>
                        <p
                            v-if="listItem.subInfo.contents"
                            class="sub-info-contents"
                            v-html="listItem.subInfo.contents"
                        ></p>
                    </div>
                    <div v-if="listItem.warningTitle" class="warning-title-area">
                        <p
                            :class="
                                listItem.warningTitle.type === 'NORMAL'
                                    ? 'warning-title'
                                    : 'warning-title is-primary'
                            "
                        >
                            {{ listItem.warningTitle.title }}
                        </p>
                    </div>
                    <div class="modal-image-button-area">
                        <NormalButton
                            v-if="listItem.pcModalImages.length > 0"
                            :title="'PC 광고 위치 크게 보기'"
                            :bg-color="'gray-300'"
                            :border-color="'gray-300'"
                            :font-color="'gray-500'"
                            @click="
                                onClickImageModal(
                                    'PC',
                                    listItem.pcModalImages,
                                    listItem.modalTitle,
                                    listItem.modalContents,
                                )
                            "
                        />
                        <NormalButton
                            v-if="listItem.mobileModalImages.length > 0"
                            :title="'모바일 광고 위치 크게 보기'"
                            :bg-color="'gray-300'"
                            :border-color="'gray-300'"
                            :font-color="'gray-500'"
                            @click="
                                onClickImageModal(
                                    'MOBILE',
                                    listItem.mobileModalImages,
                                    listItem.modalTitle,
                                    listItem.modalContents,
                                )
                            "
                        />
                    </div>
                </div>
                <div class="thumbnail-img-box">
                    <img :src="listItem.thumbnailImage" :alt="listItem.mainTitle" />
                </div>
            </li>
        </ul>

        <NormalModal
            v-model="imageModalVisible"
            :title="selectedModalTitle"
            class="ad-image-modal"
            :class="{
                'is-pc': selectedModalType === 'PC',
                'is-mobile': selectedModalType === 'MOBILE',
            }"
            @close="imageModalVisible = false"
        >
            <template #body>
                <div class="contents-wrapper">
                    <div class="info-box">
                        <NormalBadge :title="selectedModalType === 'PC' ? 'PC' : 'mobile'" />

                        <p>{{ selectedModalContents }}</p>
                    </div>

                    <div class="selected-img-box">
                        <!-- 이미지 1개 -->
                        <template v-if="selectedModalImages.length === 1">
                            <div class="img-box">
                                <img :src="selectedModalImages[0].url" :alt="selectedModalTitle" />
                            </div>
                        </template>

                        <!-- 이미지 2개 이상 -->
                        <template v-else-if="selectedModalImages.length > 1">
                            <Swiper
                                :key="swiperKey"
                                :modules="[Navigation]"
                                :slides-per-view="1"
                                :space-between="0"
                                :navigation="{
                                    prevEl: '.modal-swiper-prev',
                                    nextEl: '.modal-swiper-next',
                                }"
                                class="modal-image-swiper"
                                @slide-change="onChangeModalSlide"
                            >
                                <SwiperSlide
                                    v-for="(imageItem, imageIndex) in selectedModalImages"
                                    :key="imageIndex"
                                >
                                    <div class="img-box">
                                        <img :src="imageItem.url" :alt="selectedModalTitle" />
                                    </div>
                                </SwiperSlide>

                                <button type="button" class="modal-swiper-button modal-swiper-prev">
                                    <div class="img-box">
                                        <img src="/images/common/left_arrow_white.png" alt="이전" />
                                    </div>
                                </button>

                                <button type="button" class="modal-swiper-button modal-swiper-next">
                                    <div class="img-box">
                                        <img src="/images/common/left_arrow_white.png" alt="다음" />
                                    </div>
                                </button>

                                <div class="slide-info-box">
                                    <div class="left-box">
                                        <span class="slide-number">
                                            {{ String(currentModalSlide + 1).padStart(2, '0') }}
                                        </span>

                                        <p class="slide-title">
                                            {{ selectedModalImages[currentModalSlide]?.title }}
                                        </p>
                                    </div>

                                    <div class="right-box">
                                        <p class="current-title">
                                            {{ currentModalSlide + 1 }}
                                        </p>

                                        <p class="align-title">/</p>

                                        <p class="total-title">
                                            {{ selectedModalImages.length }}
                                        </p>
                                    </div>
                                </div>
                            </Swiper>
                        </template>
                    </div>
                </div>

                <div class="button-wrapper">
                    <NormalButton
                        :title="'확인'"
                        :bg-color="'primary-500'"
                        :border-color="'primary-500'"
                        :font-color="'white'"
                        @click="imageModalVisible = false"
                    />
                </div>
            </template>
        </NormalModal>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const infoValue = [
    {
        id: 1,
        badge: {
            type: 'PREMIUM',
        },
        mainTitle: '프리미엄 배너광고',
        priceItems: [
            {
                type: 'NORMAL',
                title: '30일 기준',
                contents: '1,500,000원',
            },
        ],
        subInfo: {
            title: '광고노출위치',
            contents: '홈페이지 첫화면, 지역별 업체찾기, 상품별 업체찾기',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '* PC, 모바일 동일하게 보여집니다.',
        },
        modalTitle: '프리미엄 배너광고',
        modalContents: '홈페이지 첫 화면 상단, 지역별 업체찾기 상단, 상품별 업체찾기 상단',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_01_thumbnail.gif',
        pcModalImages: [
            {
                url: '/images/support/ad-inquiry/type-two/type_01_pc_01.png',
                title: '홈페이지 첫 화면 상단',
            },
            {
                url: '/images/support/ad-inquiry/type-two/type_01_pc_02.png',
                title: '지역별 업체찾기 상단',
            },
            {
                url: '/images/support/ad-inquiry/type-two/type_01_pc_03.png',
                title: '상품별 업체찾기 상단',
            },
        ],
        mobileModalImages: [
            {
                url: '/images/support/ad-inquiry/type-two/type_01_mobile_01.png',
                title: '홈페이지 첫 화면 상단',
            },
            {
                url: '/images/support/ad-inquiry/type-two/type_01_mobile_02.png',
                title: '지역별 업체찾기 상단',
            },
            {
                url: '/images/support/ad-inquiry/type-two/type_01_mobile_03.png',
                title: '상품별 업체찾기 상단',
            },
        ],
    },
    {
        id: 2,
        badge: {
            type: 'NONE',
        },
        mainTitle: '메인 배너광고',
        priceItems: [
            {
                type: 'NORMAL',
                title: '30일 기준',
                contents: '2,000,000원',
            },
        ],
        subInfo: {
            title: '광고노출위치',
            contents: '홈페이지 첫화면',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '* PC, 모바일 동일하게 보여집니다.',
        },
        modalTitle: '메인 배너광고',
        modalContents: '홈페이지 첫 화면 배너 영역',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_02_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_02_pc_01.png',
            },
        ],
        mobileModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_02_mobile_01.png',
            },
        ],
    },
    {
        id: 3,
        badge: {
            type: 'NONE',
        },
        mainTitle: '스폰서 링크',
        priceItems: [
            {
                type: 'NORMAL',
                title: '30일 기준',
                contents: '1,000,000원',
            },
        ],
        subInfo: {
            title: '광고노출위치',
            contents: '모든 페이지 내 노출',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '* PC에서만 보여집니다.',
        },
        modalTitle: '스폰서 링크',
        modalContents: '모든 페이지 내 노출',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_03_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_03_pc_01.png',
            },
        ],
        mobileModalImages: [],
    },
    {
        id: 4,
        badge: {
            type: 'NONE',
        },
        mainTitle: '지역 배너광고',
        priceItems: [
            {
                type: 'NORMAL',
                title: '30일 기준 - 지역 1개',
                contents: '200,000원',
            },
            {
                type: 'NORMAL',
                title: '30일 기준 - 지역 2개',
                contents: '400,000원',
            },
            {
                type: 'NORMAL',
                title: '30일 기준 - 지역 3개',
                contents: '500,000원',
            },
            {
                type: 'SMALL',
                title: '지역 3개 이상부터는 추가 시',
                contents: '1,500,000원',
            },
        ],
        subInfo: {
            title: '광고노출위치',
            contents: '지역별 업체찾기 페이지에서 해당 지역 선택 시 보여집니다.',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '* PC, 모바일 동일하게 보여집니다.',
        },
        modalTitle: '지역 배너광고',
        modalContents: '지역별 업체찾기 페이지',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_04_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_04_pc_01.png',
            },
        ],
        mobileModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_04_mobile_01.png',
            },
        ],
    },
    {
        id: 5,
        badge: {
            type: 'NONE',
        },
        mainTitle: '상품 배너광고',
        priceItems: [
            {
                type: 'NORMAL',
                title: '30일 기준 - 상품 3개',
                contents: '300,000원',
            },
            {
                type: 'SMALL',
                title: '상품 1개 추가당',
                contents: '100,000원',
            },
        ],
        subInfo: {
            title: '광고노출위치',
            contents: '상품별 업체찾기 페이지에서 해당 상품 선택 시 보여집니다.',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '* PC, 모바일 동일하게 보여집니다.',
        },
        modalTitle: '상품 배너광고',
        modalContents: '상품별 업체찾기 페이지',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_05_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_05_pc_01.png',
            },
        ],
        mobileModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_05_mobile_01.png',
            },
        ],
    },
    {
        id: 6,
        badge: {
            type: 'BEST',
        },
        mainTitle: '배너 베스트뱃지 효과',
        priceItems: [
            {
                type: 'NORMAL',
                title: '30일 기준 - 배너 1개',
                contents: '100,000원',
            },
        ],
        subInfo: {
            title: '',
            contents: '',
        },
        warningTitle: {
            type: 'PRIMARY',
            title: '* 지역배너, 상품배너만 적용 가능합니다.',
        },
        modalTitle: '배너 베스트뱃지 효과',
        modalContents: '지역 배너, 상품 배너 적용 가능',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_06_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_06_pc_01.png',
            },
        ],
        mobileModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_06_mobile_01.png',
            },
        ],
    },
    {
        id: 7,
        badge: {
            type: 'TITLE',
        },
        mainTitle: '줄광고',
        priceItems: [
            {
                type: 'NORMAL',
                title: '50만원 이상 무료 점프',
                contents: '5회',
            },
            {
                type: 'NORMAL',
                title: '60만원~100만원 무료 점프',
                contents: '10회',
            },
            {
                type: 'NORMAL',
                title: '110만원 이상 무료 점프',
                contents: '15회',
            },
        ],
        subInfo: {
            title: `유료 배너광고 등록 시<br/> 모든 업체 광고비용 상관없이 줄광고 1개 등록 가능하며,<br/>줄광고 점프 사용 횟수는 광고비에 따라 차등 지급됩니다.`,
            contents: '',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '',
        },
        modalTitle: '줄광고',
        modalContents: '유료 배너광고 등록 시 무료로 이용 가능',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_07_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_07_pc_01.png',
            },
        ],
        mobileModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_07_mobile_01.png',
            },
        ],
    },
    {
        id: 8,
        badge: {
            type: 'NONE',
        },
        mainTitle: '줄광고 점프 추가 사용',
        priceItems: [
            {
                type: 'NORMAL',
                title: '500회',
                contents: '300,000원',
            },
        ],
        subInfo: {
            title: `일일 사용 횟수 제한 없음.<br/>무료 점프 횟수 소진 시 추가로 사용할 수 있는 상품입니다.`,
            contents: '',
        },
        warningTitle: {
            type: 'NORMAL',
            title: '* 광고 연장 시 남은 개수는 이월되며, 광고 미연장 시 소멸됩니다.',
        },
        modalTitle: '줄광고 점프 추가 사용',
        modalContents: '무료 점프 횟수 소진 시 추가로 사용할 수 있는 상품입니다',
        thumbnailImage: '/images/support/ad-inquiry/type-two/type_08_thumbnail.png',
        pcModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_08_pc_01.png',
            },
        ],
        mobileModalImages: [
            {
                title: '',
                url: '/images/support/ad-inquiry/type-two/type_08_mobile_01.png',
            },
        ],
    },
]
// =================================================== State
const imageModalVisible = ref(false)
const currentModalSlide = ref(0)
const swiperKey = ref(0)

// 현재 선택된 Modal Value
const selectedModalType = ref('')
const selectedModalImages = ref<any>([])
const selectedModalTitle = ref('')
const selectedModalContents = ref('')

// =================================================== Computed
// =================================================== Function
const onClickImageModal = (type: string, images: any, title: string, contents: string) => {
    selectedModalType.value = type
    selectedModalImages.value = images
    selectedModalTitle.value = title
    selectedModalContents.value = contents

    currentModalSlide.value = 0
    swiperKey.value++

    imageModalVisible.value = true
}

const onChangeModalSlide = (swiper: any) => {
    currentModalSlide.value = swiper.activeIndex
}
</script>

<style lang="scss">
div.support-ad-inquiry-content-type-two {
    @include r(margin-top, 40, 40, 40, 40, 40);
    ul.ad-list-wrapper {
        display: flex;
        flex-direction: column;
        @include r(gap, 40, 40, 40, 40, 40);
        li.ad-list-item {
            display: flex;
            align-items: flex-start;
            border-bottom: 1px solid $color-gray-200;
            &:last-child {
                border-bottom: none;
            }
            @include r(padding-bottom, 40, 40, 40, 40, 40);
            @include r(gap, 40, 40, 40, 120, 40);
            @include respond(tablet) {
                flex-direction: column;
            }
            @include respond(mobile-plus) {
                flex-direction: column;
            }
            @include respond(mobile) {
                flex-direction: column;
            }
            div.info-box {
                @include respond(pc) {
                    flex: 1 1 0;
                }
                @include respond(laptop) {
                    flex: 1 1 0;
                }
                @include respond(tablet) {
                    order: 2;
                    width: 23.625rem;
                }
                @include respond(mobile-plus) {
                    order: 2;
                    width: 23.625rem;
                }
                @include respond(mobile) {
                    order: 2;
                    width: 100%;
                }
                div.badge-area {
                    @include r(margin-bottom, 10, 10, 10, 10, 10);
                    p.badge-title {
                        font-weight: $font-weight-bold;
                        color: $color-primary-500;
                        @include r(font-size, 13, 13, 13, 13, 13);
                    }
                }
                div.main-title-area {
                    @include r(margin-bottom, 24, 24, 24, 24, 24);
                    h2.main-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        @include r(font-size, 24, 24, 24, 24, 24);
                    }
                }
                div.price-item-area {
                    display: flex;
                    flex-direction: column;
                    @include r(gap, 8, 8, 8, 8, 8);
                    @include r(margin-bottom, 24, 24, 24, 24, 24);
                    div.price-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        &.is-small {
                            p.price-item-title {
                                @include r(font-size, 16, 16, 16, 16, 16);
                            }
                            p.price-item-contents {
                                @include r(font-size, 16, 16, 16, 16, 16);
                            }
                        }
                        p.price-item-title {
                            font-weight: $font-weight-bold;
                            color: $color-gray-900;
                            @include r(font-size, 20, 20, 20, 20, 20);
                        }
                        p.price-item-contents {
                            font-weight: $font-weight-bold;
                            color: $color-primary-500;
                            @include r(font-size, 20, 20, 20, 20, 20);
                        }
                    }
                }
                div.sub-info-area {
                    p.sub-info-title {
                        font-weight: $font-weight-bold;
                        color: $color-gray-900;
                        line-height: 1.3;
                        @include r(font-size, 14, 14, 14, 14, 14);
                    }
                    p.sub-info-contents {
                        font-weight: $font-weight-regular;
                        color: $color-gray-900;
                        line-height: 1.3;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include r(margin-top, 8, 8, 8, 8, 8);
                    }
                }
                div.warning-title-area {
                    @include r(margin-top, 16, 16, 16, 16, 16);
                    p.warning-title {
                        font-weight: $font-weight-medium;
                        color: $color-gray-500;
                        @include r(font-size, 13, 13, 13, 13, 13);
                        &.is-primary {
                            color: $color-primary-500;
                        }
                    }
                }
                div.modal-image-button-area {
                    display: flex;
                    align-items: center;
                    @include r(margin-top, 24, 24, 24, 24, 24);
                    @include r(gap, 10, 10, 10, 10, 10);
                }
            }
            div.thumbnail-img-box {
                flex: 1 1 0;
                @include respond(tablet) {
                    order: 1;
                }
                @include respond(mobile-plus) {
                    order: 1;
                }
                @include respond(mobile) {
                    order: 1;
                }
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}

div.ad-image-modal {
    &.is-pc {
        width: 58.125rem;

        @include respond(laptop) {
            width: 46.25rem;
        }

        @include respond(tablet) {
            width: 46.25rem;
        }

        @include respond(mobile-plus) {
            width: 100%;
        }

        @include respond(mobile) {
            width: 100%;
        }
    }

    &.is-mobile {
        width: 34.375rem;

        @include respond(laptop) {
            width: 30.125rem;
        }

        @include respond(tablet) {
            width: 42.625rem;
        }

        @include respond(mobile-plus) {
            width: 90%;
        }

        @include respond(mobile) {
            width: 100%;
        }
    }
    div.contents-wrapper {
        div.info-box {
            p {
                font-weight: $font-weight-regular;
                color: $color-gray-500;
                @include r(font-size, 14, 14, 14, 14, 14);
                @include r(margin-top, 8, 8, 8, 8, 8);
            }
        }
        div.selected-img-box {
            @include r(margin-top, 24, 24, 24, 24, 24);
            div.img-box {
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            div.modal-image-swiper {
                button.modal-swiper-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 9999;
                    border: none;
                    background: var(--dim, #00000099);
                    cursor: pointer;
                    @include r(padding-top, 16, 16, 16, 16, 16);
                    @include r(padding-bottom, 16, 16, 16, 16, 16);
                    @include r(padding-left, 16, 16, 16, 16, 16);
                    @include r(padding-right, 16, 16, 16, 16, 16);
                    &.modal-swiper-prev {
                        left: 0;
                    }
                    &.modal-swiper-next {
                        right: 0;
                        div.img-box {
                            transform: rotate(180deg);
                        }
                    }
                    div.img-box {
                        @include r(width, 10, 16, 16, 16, 16);
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                }
                div.slide-info-box {
                    position: absolute;
                    bottom: 0;
                    z-index: 9999;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: var(--dim, #00000099);
                    @include r(padding-top, 10, 10, 10, 10, 10);
                    @include r(padding-bottom, 10, 10, 10, 10, 10);
                    @include r(padding-left, 14, 14, 14, 14, 14);
                    @include r(padding-right, 14, 14, 14, 14, 14);
                    div.left-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 10, 10, 10, 10, 10);
                        span.slide-number {
                            font-weight: $font-weight-bold;
                            color: $color-white;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                        p.slide-title {
                            font-weight: $font-weight-medium;
                            color: $color-white;
                            @include r(font-size, 14, 14, 14, 14, 14);
                        }
                    }
                    div.right-box {
                        display: flex;
                        align-items: center;
                        @include r(gap, 4, 4, 4, 4, 4);
                        p {
                            font-weight: $font-weight-semi-bold;
                            @include r(font-size, 14, 14, 14, 14, 14);
                            &.current-title {
                                color: $color-white;
                            }
                            &.align-title {
                                color: $color-gray-400;
                            }
                            &.total-title {
                                color: $color-gray-400;
                            }
                        }
                    }
                }
            }
        }
    }
    div.button-wrapper {
        display: flex;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
