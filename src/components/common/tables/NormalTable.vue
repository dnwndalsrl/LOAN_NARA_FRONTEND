<template>
    <div class="normal-table">
        <template v-if="!isMobileView || props.mobileTableMode">
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
            <NormalPagination
                :total="props.total"
                :page-size="pageSize"
                :current-page="currentPage"
                @update:current-page="onUpdateCurrentPage"
                @change="onCurrentChange"
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
        mobileTableMode?: boolean
    }>(),
    {
        data: () => [],
        total: 0,
        showPagination: true,
        currentPage: 1,
        pageSizes: 10,
        mobileTableMode: false,
    },
)

const emit = defineEmits<{
    (e: 'update:currentPage', value: number): void
    (e: 'change', payload: { page: number; size: number }): void
}>()

const currentPage = ref(props.currentPage)
const pageSize = ref(props.pageSizes)

// ========================================= Computed
// 모바일 화면 여부를 반환합니다.
const isMobileView = computed(() => {
    return isMobile.value || isMobilePlus.value
})

// ========================================= Watch
// 부모 컴포넌트에서 현재 페이지가 변경되면 내부 페이지값에 반영합니다.
watch(
    () => props.currentPage,
    (value) => {
        currentPage.value = value ?? 1
    },
)

// ========================================= Function
// 페이지네이션에서 전달받은 현재 페이지를 내부 상태와 부모에 반영합니다.
const onUpdateCurrentPage = (page: number) => {
    currentPage.value = page
    emit('update:currentPage', page)
}

// 변경된 페이지와 페이지당 노출 개수를 부모 컴포넌트에 전달합니다.
const onCurrentChange = (page: number) => {
    emit('change', {
        page,
        size: pageSize.value,
    })
}
</script>

<style lang="scss">
div.normal-table {
    width: 100%;
    div.el-table {
        border-top: 1px solid #dfe3ea;
        div.el-table__inner-wrapper {
            div.el-table__header-wrapper {
                border-bottom: 1px solid $color-gray-100;
                @include r(height, 37, 37, 37, 37, 37);
                table.el-table__header {
                    height: 100%;
                    thead {
                        height: 100%;
                        tr {
                            height: 100%;
                            background-color: $color-gray-100 !important;
                            th {
                                height: 100%;
                                background-color: $color-gray-100 !important;
                                border-bottom: none !important;
                                text-align: center !important;
                                padding: 0 !important;
                                div.cell {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    line-height: 1 !important;
                                    height: 100%;
                                    font-weight: $font-weight-bold !important;
                                    color: $color-gray-900 !important;
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
                                            padding: 0 !important;
                                            height: 37px !important;
                                            div.cell {
                                                color: $color-gray-900;
                                                line-height: normal !important;
                                                p {
                                                    display: block;
                                                    width: 100%;
                                                    min-width: 0;
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                    text-overflow: ellipsis;
                                                }
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
                                                    color: $color-gray-900 !important;
                                                }
                                                .color-gray {
                                                    color: $color-gray-500 !important;
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
                                                        font-weight: $font-weight-regular;
                                                        color: $color-gray-900;
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
    div.pagination-box {
        @include r(margin-top, 40, 40, 40, 40, 40);
    }
}
</style>
