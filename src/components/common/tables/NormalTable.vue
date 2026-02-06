<template>
    <div class="normal-table">
        <el-table :data="props.data" :style="{ width: '100%' }" v-bind="$attrs">
            <slot />
            <template #empty>
                <slot name="empty">
                    <el-empty description="조회된 결과가 없습니다." />
                </slot>
            </template>
        </el-table>

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
        div.el-table__inner-wrapper {
            div.el-table__header-wrapper {
                height: 30px;
                table.el-table__header {
                    height: 100%;
                    thead {
                        height: 100%;
                        font-weight: 700 !important;
                        color: #222222 !important;
                        tr {
                            height: 100%;
                            background-color: #f6f7f9 !important;
                            th {
                                height: 100%;
                                background-color: #f6f7f9 !important;
                                border-bottom: none !important;
                                text-align: center !important;
                                padding: 0 !important;
                                div.cell {
                                    height: 100%;
                                    line-height: 30px !important;
                                    label.el-checkbox {
                                        height: 30px;
                                    }
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
                                                color: #222222 !important;
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
                                                .font-size-small {
                                                    font-size: 12px !important;
                                                }
                                                .font-middle {
                                                    font-weight: 500 !important;
                                                }
                                                .font-bold {
                                                    font-weight: 700 !important;
                                                }
                                                div.img-box {
                                                    img {
                                                        display: block;
                                                        width: 100%;
                                                        height: auto;
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
