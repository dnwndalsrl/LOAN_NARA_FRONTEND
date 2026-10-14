<template>
    <div class="mypage-ads-extend-section">
        <div class="align-box">
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
        width: 100%;
        section.page-contents-wrapper {
            div.page-header {
                @include r(margin-bottom, 20, 30, 30, 30, 30);
            }
            div.page-content {
            }
        }
    }
}
</style>
