<template>
    <div class="service-layout">
        <main class="service-layout-container">
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
div.service-layout {
    width: 100%;
    position: relative;
    overflow: hidden;
    main.service-layout-container {
        width: 100%;
    }
}
</style>
