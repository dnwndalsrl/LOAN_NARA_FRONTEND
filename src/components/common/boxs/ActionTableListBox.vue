<template>
    <section class="action-table-list-box">
        <!-- 목록 상단 -->
        <div class="list-header">
            <h2 class="list-title">
                {{ title }}

                (<span v-if="showTotal">{{ total.toLocaleString() }}</span
                >)
            </h2>

            <!-- 페이지별 검색 영역 -->
            <div v-if="$slots.search" class="search-area">
                <slot name="search" />
            </div>
        </div>

        <!-- 공통 테이블 -->
        <NormalTable
            :data="data"
            :total="total"
            :show-pagination="showPagination"
            :current-page="currentPage"
            :page-sizes="pageSizes"
            @update:current-page="onUpdateCurrentPage"
            @change="onChangePage"
        >
            <!-- Element Plus 테이블 컬럼 -->
            <slot />

            <!-- 모바일 목록 -->
            <template #mobile="{ items }">
                <slot name="mobile" :items="items" />
            </template>

            <!-- 빈 목록 -->
            <template #empty>
                <slot name="empty">
                    <el-empty :description="emptyText" />
                </slot>
            </template>
        </NormalTable>
    </section>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title: string
        data: any[]
        total?: number
        currentPage?: number
        pageSizes?: number
        showTotal?: boolean
        showPagination?: boolean
        emptyText?: string
    }>(),
    {
        data: () => [],
        total: 0,
        currentPage: 1,
        pageSizes: 10,
        showTotal: true,
        showPagination: true,
        emptyText: '조회된 결과가 없습니다.',
    },
)

const emit = defineEmits<{
    (e: 'update:currentPage', value: number): void
    (e: 'change', payload: { page: number; size: number }): void
}>()

// 현재 페이지 변경값을 부모 컴포넌트에 전달합니다.
const onUpdateCurrentPage = (page: number) => {
    emit('update:currentPage', page)
}

// 페이지와 페이지당 노출 개수를 부모 컴포넌트에 전달합니다.
const onChangePage = (payload: { page: number; size: number }) => {
    emit('change', payload)
}
</script>
<style lang="scss">
section.action-table-list-box {
    div.list-header {
        @include r(margin-bottom, 20, 20, 20, 20, 20);
        @include respond(pc) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        @include respond(laptop) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        @include respond(tablet) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        h2.list-title {
            font-weight: $font-weight-bold;
            color: $color-gray-900;
            @include r(font-size, 20, 20, 20, 20, 20);
            @include respond(mobile-plus) {
                @include r(margin-bottom, 20, 20, 20, 20, 20);
            }
            @include respond(mobile) {
                @include r(margin-bottom, 20, 20, 20, 20, 20);
            }
            span {
                font-weight: $font-weight-bold;
                color: $color-primary-500;
            }
        }
    }
}
</style>
