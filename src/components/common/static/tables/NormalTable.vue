<template>
    <div class="normal-table">
        <el-table
            :data="props.data"
            style="width: 100%"
            v-bind="$attrs"
            :class="props.isModal ? 'is-small' : ''"
        >
            <slot />
            <template #empty>
                <slot name="empty">
                    <el-empty description="조회된 결과가 없습니다." />
                </slot>
            </template>
        </el-table>

        <div v-if="slots.actions" class="table-button-wrapper">
            <slot name="actions" />
        </div>

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
import { defineEmits, defineProps, ref, useSlots, watch } from 'vue'
const slots = useSlots()

const props = withDefaults(
    defineProps<{
        data: any[]
        total?: number
        showPagination?: boolean
        currentPage?: number
        pageSizes?: number
        isModal?: boolean
    }>(),
    {
        data: () => [],
        total: 0,
        showPagination: true,
        currentPage: 1,
        pageSizes: 10,
        isModal: false,
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
        font-size: 14px;
        &.is-small {
            font-size: 12px !important;
        }
        div.el-table__inner-wrapper {
            div.el-table__header-wrapper {
                table.el-table__header {
                    thead {
                        font-weight: 700 !important;
                        color: #222222 !important;
                        tr {
                            background-color: #f6f7f9 !important;
                            th {
                                background-color: #f6f7f9 !important;
                                border-bottom: none !important;
                                text-align: center !important;
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
                                                .font-middle {
                                                    font-weight: 500 !important;
                                                }
                                                .font-bold {
                                                    font-weight: 700 !important;
                                                }
                                                .color-gray {
                                                    color: #6f6f6f;
                                                }
                                                .color-green {
                                                    color: #069255;
                                                }
                                                .color-blue {
                                                    color: #4378ff;
                                                }
                                                .cu-point {
                                                    cursor: pointer;
                                                }
                                                div.img-box {
                                                    img {
                                                        display: block;
                                                        width: 100%;
                                                        height: auto;
                                                    }
                                                }
                                                div.time-align-box {
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    p {
                                                        font-size: 12px;
                                                        font-weight: 500;
                                                        color: #666666;
                                                    }
                                                    div.img-box {
                                                        width: 11px;
                                                        margin-left: 8px;
                                                        margin-right: 4px;
                                                        margin-top: 1px;
                                                    }
                                                }
                                                div.preview-btn {
                                                    display: flex;
                                                    align-items: center;
                                                    background-color: #254793;
                                                    padding: 4px 6px;
                                                    border-radius: 6px;
                                                    width: fit-content;
                                                    cursor: pointer;
                                                    div.img-box {
                                                        width: 10px;
                                                        img {
                                                            display: block;
                                                            width: 100%;
                                                            height: auto;
                                                        }
                                                    }
                                                    p {
                                                        font-weight: 700;
                                                        font-size: 11px;
                                                        color: #ffffff;
                                                        margin-left: 4px;
                                                    }
                                                }
                                                div.download-btn {
                                                    display: flex;
                                                    align-items: center;
                                                    background-color: #dae0ee;
                                                    padding: 4px 6px;
                                                    border-radius: 6px;
                                                    width: fit-content;
                                                    cursor: pointer;
                                                    div.img-box {
                                                        width: 10px;
                                                        img {
                                                            display: block;
                                                            width: 100%;
                                                            height: auto;
                                                        }
                                                    }
                                                    p {
                                                        font-weight: 700;
                                                        font-size: 11px;
                                                        color: #707d9c;
                                                        margin-left: 4px;
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
