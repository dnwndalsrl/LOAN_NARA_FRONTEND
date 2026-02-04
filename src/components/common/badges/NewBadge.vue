<template>
    <div class="new-badge">N</div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.new-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-green;
    border-radius: 50%;
    @include r(width, 16, 16, 16, 16, 16);
    @include r(height, 16, 16, 16, 16, 16);
}
</style>
