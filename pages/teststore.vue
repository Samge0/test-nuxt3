<template>
  <div class="p-4 bg-blue-200">

    <p class="text-2xl mb-4">pinia测试：</p>
    
    <div class="flex items-center space-x-0">
      <el-button @click="changeName" type="primary" class="mr-2" style="width: 100%; max-width: 100px;">刷新名称</el-button>
      <span class="text-red-500">{{ store.name }}</span>
    </div>

    <div class="flex items-center space-x-0 mt-4">
      <el-button @click="setToken" type="primary" class="mr-2" style="width: 100%; max-width: 100px;">刷新token</el-button>
      <span class="text-red-500">{{ store.token }}</span>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useStore } from '../store/user'
const store = useStore()

function changeName(): void {
  let name = `New Name ${Math.random().toString(36).slice(2, 9)}`
  store.setName(name)
}

function setToken(): void {
  let token = `token-${Math.random().toString(36).slice(2, 9)}`
  store.setToken(token)
}

</script>


<style scoped>
</style>