<template>
  <div class="main">
    <h1>Hello World</h1>
    <div class="bg-blue-400 text-white pt-4 pr-4 pb-4 pl-0">测试tailwindcss样式</div>
    <nuxt-link to="/test" class="main">test page</nuxt-link> | 
    <nuxt-link to="/teststore" class="main">teststore page</nuxt-link> | 
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
    @import '../assets/css/common.scss';
</style>
