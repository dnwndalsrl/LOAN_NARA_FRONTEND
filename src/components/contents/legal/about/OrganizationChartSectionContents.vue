<template>
    <div class="organization-chart-section-contents">
        <div class="left-box">
            <div
                v-for="(parentItem, parentIndex) in organizationChartInfo"
                :key="parentIndex"
                class="parent-list-item"
            >
                <div class="list-item is-parent">
                    <p>{{ parentItem.title }}</p>
                </div>
                <div
                    v-for="(childItem, childIndex) in parentItem.items"
                    :key="childIndex"
                    class="list-item is-child"
                >
                    <p>{{ childItem }}</p>
                </div>
            </div>
        </div>
        <div class="right-box">
            <h3>최상의 광고효과를 위한 파트너</h3>
            <p>
                각 분야별 전문 인력으로 구성되어 업무의 전문성과 축적된 노하우를 기반으로 지금까지
                지속적인 성장을 이루고 있습니다.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
// 회사 개요 > 회사 정보 Value
const organizationChartInfo = [
    {
        title: '기획',
        items: ['R&D팀', '마케팅 기획팀'],
    },
    {
        title: '기술지원',
        items: ['개발팀', '디자인팀'],
    },
    {
        title: '고객운영',
        items: ['고객지원 1팀', '고객지원 2팀'],
    },
]

// =================================================== State

// =================================================== Computed

// =================================================== Function
</script>

<style lang="scss">
div.organization-chart-section-contents {
    display: flex;
    flex-direction: column;
    @include r(gap, 32, 32, 32, 32, 54);
    @include respond(pc) {
        flex-direction: row;
    }
    div.left-box {
        width: 100%;
        display: flex;
        order: 2;
        @include r(gap, 10, 10, 10, 10, 10);
        @include respond(pc) {
            order: 1;
        }
        div.parent-list-item {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            @include r(gap, 10, 10, 10, 10, 10);
            div.list-item {
                width: 100%;
                flex: 1 1 0;
                border-radius: 8px;
                text-align: center;
                @include r(padding-top, 14, 14, 14, 14, 14);
                @include r(padding-bottom, 14, 14, 14, 14, 14);
                &.is-parent {
                    background-color: $color-secondary-400;
                    p {
                        color: $color-white;
                    }
                }
                &.is-child {
                    background-color: $color-gray-200;
                    p {
                        color: $color-gray-500;
                    }
                }
                p {
                    font-weight: $font-weight-bold;
                    @include r(font-size, 14, 18, 18, 18, 18);
                }
            }
        }
    }
    div.right-box {
        width: 100%;
        order: 2;
        @include respond(laptop) {
            order: 1;
        }
        @include respond(tablet) {
            order: 1;
        }
        @include respond(mobile-plus) {
            order: 1;
        }
        @include respond(mobile) {
            order: 1;
        }
        h3 {
            font-weight: $font-weight-bold;
            color: $color-gray-900;
            @include r(font-size, 20, 32, 32, 32, 32);
            @include r(margin-bottom, 16, 16, 16, 32, 32);
        }
        p {
            font-weight: $font-weight-medium;
            color: $color-gray-500;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(line-height, 20, 20, 20, 20, 20);
        }
    }
}
</style>
