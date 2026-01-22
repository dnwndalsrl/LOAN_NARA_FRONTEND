<template>
    <section class="main-section"></section>
</template>

<script setup lang="ts">
import { createMeta } from '~/utils/seo/createMeta'
import { pageMeta } from '~/utils/seo/pageMeta'

useHead(createMeta(pageMeta.main))
</script>

<style lang="scss">
section.main-section {
}
</style>
