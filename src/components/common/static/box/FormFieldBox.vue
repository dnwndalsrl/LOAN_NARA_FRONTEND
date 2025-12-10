<template>
    <div class="form-field-item-box">
        <p
            v-if="props.label"
            class="label"
            :style="labelSize !== undefined ? { fontSize: labelSize + 'px' } : undefined"
        >
            <span v-if="required" class="required-mark" aria-hidden="true">*</span>
            {{ props.label }}
        </p>
        <div class="form-field-content-box">
            <slot name="content" />
        </div>
        <p
            v-if="props.error"
            class="error"
            :style="guideSize !== undefined ? { fontSize: guideSize + 'px' } : undefined"
        >
            {{ props.error }}
        </p>
        <p
            v-if="props.guide"
            class="guide"
            :style="guideSize !== undefined ? { fontSize: guideSize + 'px' } : undefined"
            v-html="props.guide"
        ></p>
    </div>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        label?: string
        error?: string
        labelSize?: number | string
        guideSize?: number | string
        required?: boolean
        guide?: string
    }>(),
    {
        required: false,
    },
)
</script>
<style lang="scss">
div.form-field-item-box {
    p.label {
        color: #222222;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 15px;
        span.required-mark {
            color: #f56c6c;
            vertical-align: middle;

            font-weight: 700;
        }
    }
    div.form-field-content-box {
        margin-bottom: 8px;
    }
    p.error {
        color: #f56c6c;
        font-size: 12px;
        padding: 0 11px;
        margin-bottom: 8px;
    }
    p.guide {
        font-size: 13px;
        color: #747474;
        font-weight: 400;
        padding: 0 11px;
        line-height: 1.3;
    }
}
</style>
