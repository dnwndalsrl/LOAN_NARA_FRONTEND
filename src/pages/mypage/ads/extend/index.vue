<template>
    <div class="mypage-ads-extend-section">
        <div class="align-box">
            <MypageSideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content"></div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.mypage-ads-extend-section {
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
            }
        }
    }
}
</style>
