<template>
    <div class="normal-table">
        <template v-if="!isMobile">
            <el-table :data="props.data" :style="{ width: '100%' }" v-bind="$attrs">
                <slot />
                <template #empty>
                    <slot name="empty">
                        <el-empty description="조회된 결과가 없습니다." />
                    </slot>
                </template>
            </el-table>
        </template>
        <template v-else>
            <slot name="mobile" :items="props.data" />
        </template>

        <!-- 페이지네이션 -->
        <div v-if="props.showPagination" class="pagination-box">
            <el-pagination
                layout="prev, pager, next"
                :total="props.total"
                :page-size="pageSize"
                v-model:current-page="currentPage"
                @current-change="onCurrentChange"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const { isPc, isLaptop, isTablet, isMobilePlus, isMobile } = useBreakpoints()
import { ref, watch } from 'vue'
const props = withDefaults(
    defineProps<{
        data: any[]
        total?: number
        showPagination?: boolean
        currentPage?: number
        pageSizes?: number
    }>(),
    {
        data: () => [],
        total: 0,
        showPagination: true,
        currentPage: 1,
        pageSizes: 10,
    },
)

const emit = defineEmits<{
    (e: 'update:currentPage', value: number): void
    (e: 'change', payload: { page: number; size: number }): void
}>()

const currentPage = ref(props.currentPage)
const pageSize = ref(props.pageSizes)

watch(
    () => props.currentPage,
    (v) => (currentPage.value = v ?? 1),
)

// ========================================= Function
const onCurrentChange = (page: number) => {
    currentPage.value = page
    emit('update:currentPage', page)
    emit('change', { page: page, size: pageSize.value })
}
</script>

<style lang="scss">
div.normal-table {
    width: 100%;
    div.el-table {
        border-top: 1px solid #dfe3ea;
        div.el-table__inner-wrapper {
            div.el-table__header-wrapper {
                border-bottom: 1px solid #dfe3ea;
                @include r(height, 37, 37, 37, 37, 37);
                table.el-table__header {
                    height: 100%;
                    thead {
                        height: 100%;
                        tr {
                            height: 100%;
                            background-color: $color-light-gray !important;
                            th {
                                height: 100%;
                                background-color: $color-light-gray !important;
                                border-bottom: none !important;
                                text-align: center !important;
                                padding: 0 !important;
                                div.cell {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    line-height: 1 !important;
                                    height: 100%;
                                    font-weight: 700 !important;
                                    color: $color-black !important;
                                    padding: 0 !important;
                                    @include r(font-size, 14, 14, 14, 14, 14);
                                }
                            }
                        }
                    }
                }
            }
            div.el-table__body-wrapper {
                div.el-scrollbar {
                    div.el-scrollbar__wrap {
                        div.el-scrollbar__view {
                            table.el-table__body {
                                tbody {
                                    tr.el-table__row {
                                        background-color: #ffffff !important;
                                        td.el-table__cell {
                                            div.cell {
                                                color: $color-black;
                                                line-height: normal !important;
                                                .align-center {
                                                    text-align: center !important;
                                                }
                                                .align-left {
                                                    text-align: left !important;
                                                }
                                                .align-right {
                                                    text-align: right !important;
                                                }
                                                .color-black {
                                                    color: $color-black !important;
                                                }
                                                .color-gray {
                                                    color: $color-dark-gray !important;
                                                }
                                                .normal-size {
                                                    @include r(font-size, 14, 14, 14, 14, 14);
                                                }
                                                div.img-box {
                                                    img {
                                                        display: block;
                                                        width: 100%;
                                                        height: auto;
                                                    }
                                                }
                                                div.contents-center-box {
                                                    display: flex;
                                                    justify-content: center;
                                                }
                                                div.badge-align-box {
                                                    display: flex;
                                                    align-items: center;
                                                    @include r(gap, 4, 4, 4, 4, 4);
                                                    a {
                                                        display: block;
                                                        font-weight: 400;
                                                        color: $color-black;
                                                        text-decoration: none;
                                                        cursor: pointer;
                                                        min-width: 0;
                                                        white-space: nowrap;
                                                        overflow: hidden;
                                                        text-overflow: ellipsis;
                                                        @include r(font-size, 14, 14, 14, 14, 14);
                                                    }
                                                    div.new-badge {
                                                        flex-shrink: 0;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ul.mobile-table-list-wrapper {
        border-top: 1px solid #dfe3ea;
    }
    div.table-button-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 9px;
    }
    div.pagination-box {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        text-align: center;
    }
}
</style>
