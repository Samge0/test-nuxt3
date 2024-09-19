<template>
  <div>
    <el-button type="primary" @click="showElementPlusToast">Element Plus 按钮</el-button><br/><br/>
    <v-btn color="success" @click="showVuetifyToast">Vuetify 按钮</v-btn>
  </div>
</template>

<script>
  export default {
    methods: {
      showElementPlusToast() {
        console.log("Element Plus 按钮 被点击了！");
      },
      showVuetifyToast() {
        console.log("Vuetify 按钮 被点击了！");
      },
    },
  };
</script>
