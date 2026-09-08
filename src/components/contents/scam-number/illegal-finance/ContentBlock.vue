<template>
    <section class="content-block">
        <div class="content-header">
            <!-- Badge 타입 -->
            <span v-if="badge" class="content-badge">
                {{ badge }}
            </span>

            <!-- Number 타입 -->
            <span v-else-if="number" class="content-number">
                {{ number }}
            </span>

            <!-- Icon 타입 -->
            <div v-else-if="isIcon" class="content-icon">
                <img
                    src="/images/scam-number/illegal-finance/warning.png"
                    alt="주의사항"
                    aria-hidden="true"
                />
            </div>

            <h3 class="content-title">
                {{ title }}
            </h3>
        </div>

        <!-- 본문 영역 -->
        <div class="content-body">
            <slot name="content" />
        </div>
    </section>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title: string
        badge?: string
        number?: string
        isIcon?: boolean
    }>(),
    {
        badge: '',
        number: '',
        isIcon: false,
    },
)
</script>

<style lang="scss">
section.content-block {
    width: 100%;

    div.content-header {
        display: flex;
        align-items: center;
        @include r(margin-bottom, 20, 20, 20, 20, 20);
        span.content-badge {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $color-error-500;
            border-radius: 50px;
            color: $color-error-500;
            background-color: $color-error-100;
            font-weight: $font-weight-bold;
            @include r(margin-right, 14, 14, 14, 14, 14);
            @include r(height, 28, 28, 28, 28, 28);
            @include r(padding-left, 12, 12, 12, 12, 12);
            @include r(padding-right, 12, 12, 12, 12, 12);
            @include r(font-size, 13, 13, 13, 13, 13);
        }

        span.content-number {
            flex-shrink: 0;
            color: $color-gray-400;
            font-weight: $font-weight-bold;
            @include r(margin-right, 11, 11, 11, 11, 11);
            @include r(width, 25, 25, 25, 25, 25);
            @include r(font-size, 16, 16, 16, 16, 16);
        }

        div.content-icon {
            flex-shrink: 0;
            @include r(margin-right, 14, 14, 14, 14, 14);
            @include r(width, 20, 20, 20, 20, 20);
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        h3.content-title {
            min-width: 0;
            color: $color-gray-900;
            font-weight: $font-weight-bold;
            line-height: 1.2;
            @include r(font-size, 16, 16, 16, 16, 16);
        }
    }

    div.content-body {
        width: 100%;
        div.full-size-gray-box {
            width: 100%;
            background-color: $color-white;
            border: 1px solid $color-gray-200;
            border-radius: 16px;
            @include r(margin-bottom, 20, 20, 20, 20, 20);
            @include r(padding-top, 24, 24, 24, 24, 24);
            @include r(padding-bottom, 24, 24, 24, 24, 24);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            p {
                color: $color-gray-900;
                line-height: 1.2;
                font-weight: $font-weight-medium;
                @include r(font-size, 14, 14, 14, 14, 14);
            }
        }
        div.item-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            @include r(gap, 10, 10, 10, 10, 10);
            @include r(padding-left, 24, 24, 24, 24, 24);
            @include r(padding-right, 24, 24, 24, 24, 24);
            div.right-arrow-box {
                display: flex;
                align-items: baseline;
                @include r(gap, 8, 8, 8, 8, 8);
                div.img-box {
                    flex-shrink: 0;
                    @include r(width, 5, 5, 5, 5, 5);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
                p {
                    color: $color-gray-900;
                    font-weight: $font-weight-regular;
                    @include r(font-size, 14, 14, 14, 14, 14);
                    @include r(line-height, 20, 20, 20, 20, 20);
                    strong {
                        color: $color-error-500;
                        font-weight: $font-weight-medium;
                    }
                }
            }
        }
    }
}
</style>
