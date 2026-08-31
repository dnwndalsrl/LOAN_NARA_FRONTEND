<template>
    <el-dialog
        v-model="model"
        append-to="#teleports"
        :close-on-click-modal="false"
        :show-close="false"
        :width="props.width"
        align-center
        :class="props.isHeader ? 'normal-modal' : 'normal-modal no-header'"
    >
        <!-- Header -->
        <template #header>
            <div class="header-wrapper">
                <p class="title">{{ props.title }}</p>
                <div v-if="showClose" class="close-img-box" @click="emit('close')">
                    <img src="/images/common/close.png" alt="닫기" />
                </div>
            </div>
        </template>

        <!-- Body -->
        <slot name="body" />

        <!-- Footer -->
        <!-- <template #footer>
            <slot name="footer" />
        </template> -->
    </el-dialog>
</template>
<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
const props = withDefaults(
    defineProps<{
        isHeader?: boolean
        width?: string | number
        title: string
        showClose?: boolean
    }>(),
    {
        width: 'auto',
        isHeader: true,
        showClose: true,
    },
)
const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<style lang="scss">
div.normal-modal {
    width: 34.375rem;
    border-radius: 16px;
    @include r(padding-top, 30, 30, 30, 30, 30);
    @include r(padding-bottom, 30, 30, 30, 30, 30);
    @include r(padding-left, 30, 30, 30, 30, 30);
    @include r(padding-right, 30, 30, 30, 30, 30);
    @include respond(mobile) {
        width: 100%;
    }
    &.no-header {
        header.el-dialog__header {
            display: none;
        }
    }
    header.el-dialog__header {
        @include r(padding-bottom, 24, 24, 24, 24, 24);
        div.header-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p.title {
                color: $color-gray-900;
                font-weight: $font-weight-bold;
                @include r(font-size, 20, 20, 20, 20, 20);
            }
            div.close-img-box {
                cursor: pointer;
                @include r(width, 13, 13, 13, 13, 13);

                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    div.el-dialog__body {
        color: inherit !important;
        font-size: inherit !important;
    }
    footer.el-dialog__footer {
        display: none;
    }
}
</style>
