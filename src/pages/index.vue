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
        <div class="fixed-contents-box">
            <!-- 프로그레스바 (PC 노출) -->
            <section class="progress-list-wrapper">
                <ProgressSection />
            </section>
            <!-- 등록 현황 테이블 -->
            <section class="current-situation-wrapper">
                <RegisterStatusTableSection />
            </section>
            <!-- 금융뉴스/대부업뉴스/공지사항/바로가기 -->
            <section class="notice-wrapper">
                <NoticeSection />
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
            margin-top: 1.875rem;
            @include respond(pc) {
                width: 28.438rem;
                order: 2;
                margin-top: 0;
            }
            @include respond(laptop) {
                margin-top: 3.75rem;
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
            position: relative;
            order: 2;
            @include r(margin-top, 16, 24, 24, 40, 60);
            @include respond(pc) {
                order: 4;
            }
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 50%;
                right: 50%;
                margin-left: -50vw;
                margin-right: -50vw;
                background-color: #f8fafc;
                z-index: -1;
            }
        }
    }
    div.fixed-contents-box {
        section.progress-list-wrapper {
            display: none;
            @include r(margin-top, 60, 60, 60, 60, 60);
            @include r(margin-bottom, 60, 60, 60, 60, 60);
            @include respond(pc) {
                display: block;
            }
        }
        section.current-situation-wrapper {
            padding-bottom: 50px;
        }
    }
}
</style>
