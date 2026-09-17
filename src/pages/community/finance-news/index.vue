<template>
    <div class="community-finance-news-section">
        <div class="align-box">
            <SideNavigation />
            <section class="page-contents-wrapper">
                <div class="page-header">
                    <PageHeaderBox />
                </div>
                <div class="page-content">
                    <!-- 줄광고 테이블 리스트 -->
                    <section class="line-advertising-table-list-wrapper">
                        <ActionTableListBox
                            title="전체"
                            :data="lineAdvertisingTableValue.list"
                            :total="lineAdvertisingTableValue.total"
                            :page-size="lineAdvertisingTableValue.pageSize"
                            :show-total="true"
                            v-model:current-page="lineAdvertisingTableValue.currentPage"
                            @change="onChangePage"
                        >
                            <!-- PC 테이블 컬럼 -->
                            <el-table-column label="번호" width="80">
                                <template #default="{ row }">
                                    <p class="align-center color-black">{{ row.seq }}</p>
                                </template>
                            </el-table-column>

                            <el-table-column label="제목">
                                <template #default="{ row }">
                                    <div class="badge-align-box">
                                        <NuxtLink>{{ row.title }}</NuxtLink>
                                        <NewBadge />
                                    </div>
                                </template>
                            </el-table-column>

                            <el-table-column label="작성일" width="120">
                                <template #default="{ row }">
                                    <p class="align-center color-gray">{{ row.date }}</p>
                                </template>
                            </el-table-column>

                            <el-table-column label="조회수" width="80">
                                <template #default="{ row }">
                                    <p class="align-center color-gray">{{ row.showCount }}</p>
                                </template>
                            </el-table-column>

                            <!-- 모바일 목록 -->
                            <template #mobile="{ items }">
                                <ul class="mobile-company-list">
                                    <li
                                        v-for="item in items"
                                        :key="item.seq"
                                        class="mobile-company-item"
                                    >
                                        <NuxtLink :to="`/company/${item.seq}`">
                                            <strong>{{ item.title }}</strong>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </template>
                        </ActionTableListBox>
                    </section>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
// =================================================== State
// 줄광고 테이블 리스트 더미데이터
const lineAdvertisingTableValue = reactive({
    total: 100,
    currentPage: 1,
    pageSize: 10,
    list: [
        {
            seq: 1,
            title: '사업자대출 보증금담보대출 자영업자대출 월변가능',
            date: '2025.11.19',
            showCount: 299,
        },
        {
            seq: 1,
            title: '사업자대출 보증금담보대출 자영업자대출 월변가능',
            date: '2025.11.19',
            showCount: 299,
        },
        {
            seq: 1,
            title: '사업자대출 보증금담보대출 자영업자대출 월변가능',
            date: '2025.11.19',
            showCount: 299,
        },
    ],
})
// ========================================= Function
// 변경된 페이지를 반영하고 목록을 다시 조회합니다.
const onChangePage = ({ page, size }: { page: number; size: number }) => {
    lineAdvertisingTableValue.currentPage = page
    lineAdvertisingTableValue.pageSize = size
}
</script>

<style lang="scss">
div.community-finance-news-section {
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
