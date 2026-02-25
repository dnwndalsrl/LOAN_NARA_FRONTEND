<template>
    <li class="mobile-table-card">
        <div class="top-area">
            <div class="badge-box">
                <NormalBadge :title="props.item.badgeTitle" />
            </div>
            <NuxtLink>{{ props.item.title }}</NuxtLink>
            <NewBadge />
        </div>
        <div class="bottom-area">
            <div
                v-for="(item, index) in props.item.subInfo"
                class="sub-info-item"
                :key="item.label"
            >
                <h2>{{ item.label }}</h2>
                <p>{{ item.value }}</p>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        item: any
    }>(),
    {
        item: null,
    },
)

// =============================================== Computed

// =============================================== Custom Function
</script>

<style lang="scss">
li.mobile-table-card {
    border-bottom: 1px solid #dfe3ea;
    @include r(padding-top, 10, 10, 10, 10, 10);
    @include r(padding-bottom, 10, 10, 10, 10, 10);
    @include r(padding-left, 8, 8, 8, 8, 8);
    @include r(padding-right, 8, 8, 8, 8, 8);
    div.top-area {
        display: flex;
        align-items: center;
        @include r(gap, 8, 8, 8, 8, 8);
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
            @include r(font-size, 13, 13, 13, 13, 13);
        }
    }
    div.bottom-area {
        display: flex;
        align-items: center;
        @include r(margin-top, 4, 4, 4, 4, 4);
        div.sub-info-item {
            display: flex;
            align-items: center;
            @include r(gap, 6, 6, 6, 6, 6);
            h2 {
                font-weight: 600;
                color: $color-dark-gray;
                @include r(font-size, 13, 13, 13, 13, 13);
            }
            p {
                font-weight: 400;
                color: $color-dark-gray;
                @include r(font-size, 13, 13, 13, 13, 13);
            }
        }
    }
}
</style>
