<template>
    <!-- 전화번호 입력 확인 Modal -->
    <NormalModal
        v-model="commonStore.isCompanyCheckModalOpen"
        :title="'업체확인방법'"
        class="company-check-modal"
        @close="commonStore.closeCompanyCheckModal()"
    >
        <template #body>
            <div class="contents-wrapper">
                <p>
                    검색 결과는 금융감독원이 제공하는 정보 기반으로 작성되었습니다.<br />
                    <strong>매일 오전 5시 기준</strong>의 정보이며, 자세한 확인은 등록기관으로 문의
                    부탁드립니다.<br />
                    정식업체조회 서비스는 참고용으로 이용 부탁드리며, 대출을 진행할 경우
                    <strong>이용 시 주의사항을 확인 후 이용</strong> 부탁드립니다.
                </p>
            </div>
            <div class="button-wrapper">
                <NormalButton
                    :title="'확인'"
                    :bg-color="'primary-500'"
                    :border-color="'primary-500'"
                    :font-color="'white'"
                    @click="commonStore.closeCompanyCheckModal()"
                />
            </div>
        </template>
    </NormalModal>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common'

const commonStore = useCommonStore()
</script>
<style lang="scss">
div.company-check-modal {
    div.contents-wrapper {
        background-color: $color-gray-100;
        border-radius: 16px;
        @include r(padding-top, 24, 24, 24, 24, 24);
        @include r(padding-bottom, 24, 24, 24, 24, 24);
        @include r(padding-left, 24, 24, 24, 24, 24);
        @include r(padding-right, 24, 24, 24, 24, 24);
        p {
            font-weight: $font-weight-regular;
            color: $color-gray-900;
            @include r(font-size, 14, 14, 14, 14, 14);
            @include r(line-height, 20, 20, 20, 20, 20);
            strong {
                font-weight: $font-weight-medium;
                color: $color-error-500;
            }
        }
    }
    div.button-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        @include r(margin-top, 24, 24, 24, 24, 24);
    }
}
</style>
