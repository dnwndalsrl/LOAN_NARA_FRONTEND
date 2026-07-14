<template>
    <div class="browse-region-section">
        <h1>지역별 업체찾기</h1>
        <div class="align-box">
            <!-- 카테고리 -->
            <section class="category-wrapper">
                <div class="title-box">
                    <div class="img-box">
                        <img src="/images/common/map_ico.png" alt="지역으로 업체찾기" />
                    </div>
                    <h2><strong>지역</strong>별로 업체를 선택해 보세요!</h2>
                </div>
                <div class="category-box">
                    <ul class="category-list">
                        <li
                            v-for="(listItem, listIndex) in regionInfo"
                            :key="listItem.value"
                            class="category-item"
                            :class="{
                                'is-active': selectedRegionId === listItem.value,
                            }"
                        >
                            <NuxtLink :to="getRegionLink(listItem.value)">{{
                                listItem.title
                            }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- 프리미엄 배너 -->
            <section class="premium-banner-wrapper">
                <PremiumBannerSection />
            </section>
            <!-- 목록 리스트 -->
            <section class="company-list-wrapper">
                <div class="title-box">
                    <h2 v-if="selectedRegionId === 'all'">지역별 업체 등록 현황</h2>
                    <!-- 특정 지역을 선택했을 때 -->
                    <Swiper
                        :slides-per-view="'auto'"
                        :space-between="28"
                        :free-mode="true"
                        :modules="[FreeMode]"
                        class="district-list-swiper"
                    >
                        <SwiperSlide
                            v-for="districtItem in districtList"
                            :key="districtItem.value"
                            class="district-item"
                        >
                            <NuxtLink :to="getDistrictLink(districtItem.value)">
                                {{ districtItem.title }}
                                (<span>{{ districtItem.count }}</span
                                >)
                            </NuxtLink>
                        </SwiperSlide>
                    </Swiper>
                    <div class="sub-info-box">
                        <p class="sub-title">배너 위치는 실시간으로 랜덤 배치됩니다.</p>
                        <NormalLink
                            :to="'/support/ad-inquiry'"
                            :title="'광고문의'"
                            :bgColor="'#DFE3EA'"
                            :borderColor="'#DFE3EA'"
                            :fontColor="'#5B6C8B'"
                        />
                    </div>
                </div>
                <!-- 선택된 세부 지역에 하위 지역이 있을 때만 표시 -->
                <div v-if="regionDetailInfo" class="region-detail-box">
                    <p class="region-name">
                        {{ regionDetailInfo.regionTitle }}
                    </p>

                    <div class="img-box">
                        <img src="/images/browse/region/districe_right_arrow.png" alt="" />
                    </div>

                    <p class="district-name">
                        {{ regionDetailInfo.districtTitle }}
                    </p>

                    <div class="img-box">
                        <img src="/images/browse/region/districe_right_arrow.png" alt="" />
                    </div>

                    <p class="sub-area-list">
                        {{ regionDetailInfo.subAreaText }}
                    </p>
                </div>
                <RegionCompanyListSection />
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const route = useRoute()

// 카테고리 섹션 관련 state value
const regionInfo = [
    {
        value: 'all',
        title: '전체',
        districts: [],
    },
    {
        value: '1',
        title: '서울',
        districts: [
            {
                value: 'all',
                title: '서울 전체',
                count: 144,
                subAreas: [],
            },
            {
                value: 'gangnam',
                title: '강남',
                count: 8,
                subAreas: [
                    '역삼',
                    '논현',
                    '학동',
                    '대치',
                    '도곡',
                    '양재',
                    '방배',
                    '반포',
                    '삼성',
                    '선릉',
                    '서초',
                    '교대',
                    '압구정',
                    '청담',
                    '신사',
                ],
            },
            {
                value: 'gangdong',
                title: '강동',
                count: 8,
                subAreas: ['천호', '광진', '구의', '건대', '송파', '가락', '방이', '신천', '잠실'],
            },
            {
                value: 'gangbuk',
                title: '강북',
                count: 8,
                subAreas: ['수유', '미아', '노원', '도봉', '대학로', '성북'],
            },
            {
                value: 'gangseo',
                title: '강서',
                count: 8,
                subAreas: ['양천', '여의도'],
            },
        ],
    },
    {
        value: '2',
        title: '경기',
        districts: [
            {
                value: 'all',
                title: '경기 전체',
                count: 120,
                subAreas: [],
            },
            {
                value: 'suwon',
                title: '수원',
                count: 12,
                subAreas: ['장안', '권선', '팔달', '영통'],
            },
            {
                value: 'seongnam',
                title: '성남',
                count: 9,
                subAreas: ['수정', '중원', '분당'],
            },
            {
                value: 'ansan',
                title: '안산',
                count: 7,
                subAreas: ['상록', '단원'],
            },
        ],
    },
    {
        value: '3',
        title: '인천',
        districts: [
            {
                value: 'all',
                title: '인천 전체',
                count: 48,
                subAreas: [],
            },
            {
                value: 'namdong',
                title: '남동구',
                count: 7,
                subAreas: [],
            },
            {
                value: 'bupyeong',
                title: '부평구',
                count: 5,
                subAreas: [],
            },
        ],
    },
    {
        value: '4',
        title: '대전',
        districts: [],
    },
    {
        value: '5',
        title: '대구',
        districts: [],
    },
    {
        value: '6',
        title: '부산',
        districts: [],
    },
    {
        value: '7',
        title: '광주',
        districts: [],
    },
    {
        value: '8',
        title: '울산',
        districts: [],
    },
    {
        value: '9',
        title: '세종',
        districts: [],
    },
    {
        value: '10',
        title: '강원',
        districts: [],
    },
    {
        value: '11',
        title: '충북',
        districts: [],
    },
    {
        value: '12',
        title: '충남',
        districts: [],
    },
    {
        value: '13',
        title: '전북',
        districts: [],
    },
    {
        value: '14',
        title: '전남',
        districts: [],
    },
    {
        value: '15',
        title: '경북',
        districts: [],
    },
    {
        value: '16',
        title: '경남',
        districts: [],
    },
    {
        value: '17',
        title: '제주',
        districts: [],
    },
]

// =================================================== Computed

// URL에서 현재 선택된 대분류 지역값을 가져옵니다.
const selectedRegionId = computed(() => {
    return String(route.params.region ?? 'all')
})

// URL에서 현재 선택된 세부 지역값을 가져옵니다.
// route.params에 값이 없으면 URL 경로에서 직접 가져옵니다.
const selectedDistrictId = computed(() => {
    if (route.params.district) {
        return String(route.params.district)
    }

    const pathList = route.path.split('/').filter(Boolean)
    const districtValue = pathList[3]

    return districtValue ?? 'all'
})

// 현재 선택된 대분류 지역 정보를 찾습니다.
const selectedRegion = computed(() => {
    return regionInfo.find((item) => {
        return String(item.value) === selectedRegionId.value
    })
})

// 현재 선택된 대분류 지역의 세부 지역 목록을 반환합니다.
const districtList = computed(() => {
    return selectedRegion.value?.districts ?? []
})

// 현재 선택된 세부 지역 정보를 찾습니다.
const selectedDistrict = computed(() => {
    return districtList.value.find((item) => {
        return String(item.value) === selectedDistrictId.value
    })
})

// 하위 지역 안내 영역에 표시할 데이터를 반환합니다.
// 선택된 지역이 없거나 하위 지역이 없으면 null을 반환합니다.
const regionDetailInfo = computed(() => {
    const region = selectedRegion.value
    const district = selectedDistrict.value

    if (!region || !district || !district.subAreas?.length) {
        return null
    }

    return {
        regionTitle: region.title,
        districtTitle: district.title,
        subAreaText: district.subAreas.join(', '),
    }
})

// =================================================== Function
// 대분류 지역을 클릭했을 때 이동할 URL을 생성합니다.
const getRegionLink = (regionId: string) => {
    if (regionId === 'all') {
        return '/browse/region/all'
    }

    return `/browse/region/${regionId}/all`
}

// 세부 지역을 클릭했을 때 이동할 URL을 생성합니다.
// 전체 선택 시 대분류 지역 URL을 반환합니다.
const getDistrictLink = (districtId: string) => {
    return `/browse/region/${selectedRegionId.value}/${districtId}`
}
</script>

<style lang="scss">
div.browse-region-section {
    h1 {
        font-weight: $font-weight-bold;
        color: $color-gray-900;
        @include r(font-size, 24, 24, 24, 24, 24);
        @include r(margin-bottom, 20, 30, 30, 30, 30);
    }
    div.align-box {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: nowrap;
        @include respond(pc) {
            flex-direction: row;
            flex-wrap: wrap;
        }
        @include respond(laptop) {
            flex-direction: row;
            flex-wrap: wrap;
        }
        section.category-wrapper {
            order: 1;
            flex: 1 1 0;

            display: flex;
            flex-direction: column;

            border-radius: 16px;
            border: 2px solid $color-primary-500;

            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            @include r(margin-right, 0, 0, 0, 20, 20);

            div.title-box {
                flex: 0 0 auto;

                display: flex;
                align-items: center;

                @include r(gap, 8, 8, 8, 8, 8);
                @include r(margin-bottom, 20, 20, 20, 20, 20);

                div.img-box {
                    flex: 0 0 auto;
                    @include r(width, 24, 24, 24, 24, 24);

                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }

                h2 {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;

                    @include r(font-size, 18, 18, 18, 18, 18);

                    strong {
                        color: $color-primary-500;
                    }
                }
            }

            div.category-box {
                flex: 1 1 auto;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ul.category-list {
                    flex: 1 1 auto;
                    display: grid;
                    grid-template-columns: repeat(6, minmax(0, 1fr));
                    grid-template-rows: repeat(3, minmax(0, 1fr));
                    @include r(gap, 4, 8, 8, 8, 8);
                    @include respond(tablet) {
                        grid-template-columns: repeat(9, minmax(0, 1fr));
                        grid-template-rows: repeat(2, minmax(0, 1fr));
                    }
                    li.category-item {
                        border-radius: 8px;
                        background-color: $color-gray-100;
                        transition: background-color 0.2s ease;
                        overflow: hidden;
                        &.is-active {
                            background-color: $color-primary-200;
                            a {
                                color: $color-primary-500;
                            }
                        }
                        @include r(min-height, 32, 34, 33, 0, 0);
                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                            font-weight: $font-weight-semi-bold;
                            color: $color-gray-900;
                            text-decoration: none;
                            text-align: center;
                            line-height: 1;
                            white-space: nowrap;
                            @include r(font-size, 13, 14, 14, 14, 14);
                        }
                    }
                }
            }
        }
        section.premium-banner-wrapper {
            width: 100%;
            order: 3;
            @include r(margin-top, 30, 30, 60, 0, 0);
            @include respond(pc) {
                width: 28.438rem;
                order: 2;
                margin-top: 0;
            }
            @include respond(laptop) {
                width: 28.438rem;
                order: 2;
                margin-top: 0;
            }
        }
        section.company-list-wrapper {
            position: relative;
            order: 2;
            @include r(margin-top, 30, 44, 44, 64, 64);
            @include respond(pc) {
                order: 4;
            }
            div.title-box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                @include r(margin-bottom, 20, 30, 30, 30, 30);
                h2 {
                    font-weight: $font-weight-bold;
                    color: $color-gray-900;
                    @include r(font-size, 20, 20, 20, 24, 24);
                }
                div.district-list-swiper {
                    overflow: hidden;
                    margin-right: 0;
                    margin-left: 0;
                    div.swiper-wrapper {
                        overflow: visible;
                        div.district-item {
                            width: auto !important;
                            a {
                                font-weight: $font-weight-bold;
                                color: $color-gray-400;
                                text-decoration: none;
                                &.router-link-active {
                                    color: $color-gray-900;
                                    span {
                                        color: $color-primary-500;
                                    }
                                }
                                @include r(font-size, 18, 20, 20, 20, 20);
                            }
                        }
                    }
                }
                div.sub-info-box {
                    display: flex;
                    align-items: center;
                    @include r(gap, 16, 16, 16, 16, 16);
                    @include respond(mobile-plus) {
                        display: none;
                    }
                    @include respond(mobile) {
                        display: none;
                    }
                    p.sub-title {
                        font-weight: $font-weight-regular;
                        color: #545976;
                        @include r(font-size, 14, 14, 14, 14, 14);
                        @include respond(tablet) {
                            display: none;
                        }
                    }
                }
            }
            div.region-detail-box {
                display: flex;
                align-items: center;
                background-color: $color-gray-100;
                @include r(gap, 16, 16, 16, 16, 16);
                @include r(padding-top, 16, 16, 16, 16, 16);
                @include r(padding-bottom, 16, 16, 16, 16, 16);
                @include r(padding-left, 20, 20, 20, 20, 20);
                @include r(padding-right, 20, 20, 20, 20, 20);
                @include r(margin-bottom, 20, 30, 30, 30, 30);
                p.region-name {
                    flex-shrink: 0;
                    font-weight: $font-weight-medium;
                    color: $color-gray-500;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                div.img-box {
                    @include r(width, 4, 4, 4, 4, 4);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p.district-name {
                    flex-shrink: 0;
                    font-weight: $font-weight-medium;
                    color: $color-gray-500;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
                p.sub-area-list {
                    font-weight: $font-weight-regular;
                    color: $color-primary-500;
                    line-height: 1.3;
                    @include r(font-size, 14, 14, 14, 14, 14);
                }
            }
        }
    }
}
</style>
