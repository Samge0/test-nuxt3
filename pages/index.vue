<template>
  <div class="main">
    <h1>Hello World</h1>
    <div class="bg-blue-400 text-white pt-4 pr-4 pb-4 pl-0">测试tailwindcss样式</div>
    <nuxt-link to="/test" class="main">test page</nuxt-link> | 
    <nuxt-link to="/teststore" class="main">teststore page</nuxt-link> | 
    <nuxt-link to="/testlang" class="main">testlang page</nuxt-link>

    <div class="mt-4">
      <p>需要在 svg中使用<span class="text-red-400">fill="currentColor"</span> + nuxt-icon中配置<span class="text-red-400">filled</span> 才能使用svg原始颜色，否则svg的颜色值会被父级的颜色配置覆盖</p>
      <nuxt-icon name="test" class="text-[100px]" filled/>
    </div>
    
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
    @import '../assets/css/common.scss';
</style>
