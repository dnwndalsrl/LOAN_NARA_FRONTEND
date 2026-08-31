<template>
    <div class="browse-recommended-section">
        <div class="page-header-wrapper">
            <PageHeaderBox />
        </div>

        <div class="align-box">
            <section class="company-list-wrapper">
                <RecommendedCompanyListSection />
            </section>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.browse-recommended-section {
    div.page-header-wrapper {
        @include r(margin-bottom, 20, 30, 30, 30, 30);
    }
}
</style>
