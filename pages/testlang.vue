<script setup>
    const { locale, setLocale } = useI18n()
</script>

<template>
    <div class="p-4 bg-blue-300">
        <p class="text-2xl mb-4">语言切换测试：</p>

        <v-btn color="info" @click="setLocale('en')" class="mr-2">English</v-btn> | 
        <v-btn color="success" @click="setLocale('zh')" class="ml-2">中文</v-btn>

        <p class="mt-4">文本结果：<span class="text-red-600">{{ $t('name') }}</span> ({{ locale }})</p>
    </div>
</template>
