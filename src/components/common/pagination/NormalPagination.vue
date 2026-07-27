<template>
    <nav v-if="totalPages > 1" class="normal-pagination" aria-label="페이지 이동">
        <div class="pagination-action-wrapper">
            <!-- 10페이지 이전 -->
            <button
                type="button"
                class="pagination-button pagination-button--arrow"
                :disabled="currentPage <= 1"
                aria-label="10페이지 이전"
                @click="onMovePage(currentPage - 10)"
            >
                <div class="img-box">
                    <img
                        src="/images/common/pagination_double_prev.png"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
            </button>

            <!-- 1페이지 이전 -->
            <button
                type="button"
                class="pagination-button pagination-button--arrow"
                :disabled="currentPage <= 1"
                aria-label="이전 페이지"
                @click="onMovePage(currentPage - 1)"
            >
                <div class="img-box">
                    <img src="/images/common/pagination_prev.png" alt="" aria-hidden="true" />
                </div>
            </button>
        </div>

        <!-- 페이지 번호 -->
        <ul class="pagination-number-wrapper">
            <li v-for="page in visiblePages" :key="page">
                <button
                    type="button"
                    class="pagination-button-number"
                    :class="{
                        'is-active': currentPage === page,
                    }"
                    :aria-label="`${page}페이지`"
                    :aria-current="currentPage === page ? 'page' : undefined"
                    @click="onMovePage(page)"
                >
                    {{ page }}
                </button>
            </li>
        </ul>

        <div class="pagination-action-wrapper">
            <!-- 1페이지 다음 -->
            <button
                type="button"
                class="pagination-button pagination-button--arrow"
                :disabled="currentPage >= totalPages"
                aria-label="다음 페이지"
                @click="onMovePage(currentPage + 1)"
            >
                <div class="img-box">
                    <img src="/images/common/pagination_next.png" alt="" aria-hidden="true" />
                </div>
            </button>

            <!-- 10페이지 다음 -->
            <button
                type="button"
                class="pagination-button pagination-button--arrow"
                :disabled="currentPage >= totalPages"
                aria-label="10페이지 다음"
                @click="onMovePage(currentPage + 10)"
            >
                <div class="img-box">
                    <img
                        src="/images/common/pagination_double_next.png"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        total: number
        currentPage?: number
        pageSize?: number
        visiblePageCount?: number
    }>(),
    {
        currentPage: 1,
        pageSize: 10,
        visiblePageCount: 5,
    },
)

const emit = defineEmits<{
    (e: 'update:currentPage', value: number): void
    (e: 'change', page: number): void
}>()

// 전체 데이터 개수와 페이지당 노출 개수를 기준으로 전체 페이지 수를 계산합니다.
const totalPages = computed(() => {
    return Math.max(1, Math.ceil(props.total / props.pageSize))
})

// 현재 페이지가 포함된 페이지 그룹의 번호를 반환합니다.
// 같은 그룹 안에서 페이지를 이동할 때는 노출되는 번호가 변경되지 않습니다.
const visiblePages = computed(() => {
    const pageCount = props.visiblePageCount

    const startPage = Math.floor((props.currentPage - 1) / pageCount) * pageCount + 1

    const endPage = Math.min(startPage + pageCount - 1, totalPages.value)

    return Array.from(
        {
            length: endPage - startPage + 1,
        },
        (_, index) => startPage + index,
    )
})

// 선택한 페이지가 유효한 범위에 있도록 보정한 뒤 변경 이벤트를 전달합니다.
const onMovePage = (page: number) => {
    const targetPage = Math.min(Math.max(page, 1), totalPages.value)

    if (targetPage === props.currentPage) {
        return
    }

    emit('update:currentPage', targetPage)
    emit('change', targetPage)
}
</script>

<style lang="scss">
nav.normal-pagination {
    display: flex;
    justify-content: center;
    div.pagination-action-wrapper {
        display: flex;
        align-items: center;
        @include r(gap, 8, 8, 8, 8, 8);
        button.pagination-button--arrow {
            display: block;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            div.img-box {
                @include r(width, 32, 32, 32, 32, 32);
                @include r(height, 32, 32, 32, 32, 32);
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    ul.pagination-number-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        @include r(margin-left, 12, 12, 12, 12, 12);
        @include r(margin-right, 12, 12, 12, 12, 12);
        @include r(gap, 8, 8, 8, 8, 8);
        li {
            display: flex;
            align-items: center;
            cursor: pointer;
            @include r(width, 32, 32, 32, 32, 32);
            @include r(height, 32, 32, 32, 32, 32);
            button.pagination-button-number {
                width: 100%;
                height: 100%;
                display: block;
                background-color: transparent;
                border: none;
                color: $color-gray-400;
                font-weight: $font-weight-medium;
                cursor: pointer;
                @include r(font-size, 13, 13, 13, 13, 13);
                &.is-active {
                    color: $color-primary-500;
                    font-weight: $font-weight-bold;
                }
            }
        }
    }
}
</style>
