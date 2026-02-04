<template>
    <div class="main-section">
        <div class="align-box">
            <h1 style="display: none">대출나라대부중개</h1>
            <!-- 메인배너 -->
            <section class="main-banner-wrapper">
                <MainBannerSection />
            </section>
            <!-- 프리미엄 배너 -->
            <section class="premium-banner-wrapper">
                <PremiumBannerSection />
            </section>
            <!-- 카테고리 별 업체찾기 (지역별, 상품별) -->
            <section class="category-list-wrapper">
                <CategorySection />
            </section>
            <!-- 목록 리스트 -->
            <section class="company-list-wrapper">
                <CompanyListSection />
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import { createMeta } from '~/utils/seo/createMeta'
import { pageMeta } from '~/utils/seo/pageMeta'

useHead(createMeta(pageMeta.main))
</script>

<style lang="scss">
div.main-section {
    div.align-box {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: nowrap;
        @include respond(pc) {
            flex-direction: row;
            flex-wrap: wrap;
        }
        section.main-banner-wrapper {
            order: 1;
            flex: 1 1 0;
            background-image: url('/images/common/main_banner.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 16px;
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            @include respond(pc) {
                margin-right: 1.25rem;
            }
        }
        section.premium-banner-wrapper {
            width: 100%;
            order: 3;
            @include respond(pc) {
                width: 28.438rem;
                order: 2;
            }
        }
        section.category-list-wrapper {
            width: 100%;
            order: 4;
            display: flex;
            align-items: center;
            flex-direction: column;
            @include r(gap, 15, 20, 20, 20, 20);
            @include r(margin-top, 30, 30, 30, 30, 24);
            @include respond(pc) {
                order: 3;
                flex-direction: row;
            }
        }
        section.company-list-wrapper {
            width: 100%;
            order: 2;
            @include respond(pc) {
                order: 4;
            }
        }
    }
}
</style>
