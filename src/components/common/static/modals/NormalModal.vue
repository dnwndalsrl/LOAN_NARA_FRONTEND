<template>
    <el-dialog
        v-model="model"
        append-to="#teleports"
        :close-on-click-modal="false"
        :show-close="false"
        :width="props.width"
        align-center
        class="normal-modal"
    >
        <!-- Header -->
        <template #header>
            <div class="header-wrapper">
                <p class="title">{{ props.title }}</p>
                <div v-if="showClose" class="close-img-box" @click="emit('close')">
                    <img src="/images/admin/close.png" alt="닫기" />
                </div>
            </div>
        </template>

        <!-- Body -->
        <slot name="body" />

        <!-- Footer -->
        <template #footer>
            <slot name="footer" />
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
const props = withDefaults(
    defineProps<{
        width?: string | number
        title: string
        showClose?: boolean
    }>(),
    {
        width: 'auto',
        showClose: true,
    },
)
const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<style lang="scss">
div.normal-modal {
    padding: 25px !important;
    header.el-dialog__header {
        padding-bottom: 30px !important;
        div.header-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p.title {
                font-size: 18px;
                color: #222222;
                font-weight: 700;
            }
            div.close-img-box {
                width: 13px;
                cursor: pointer;
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
        padding-top: 30px !important;
        text-align: start !important;
    }
}
</style>
