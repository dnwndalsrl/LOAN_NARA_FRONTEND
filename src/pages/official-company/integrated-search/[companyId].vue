<template>
    <div class="official-company-integrated-search-detail-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content"></div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common'

const commonStore = useCommonStore()
const router = useRouter()
// =================================================== State

// ========================================= Function
</script>

<style lang="scss">
div.official-company-integrated-search-detail-section {
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
