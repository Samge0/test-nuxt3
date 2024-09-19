<template>
  <div>
    <v-btn color="success" @click="showVuetifyToast">Vuetify 按钮</v-btn>
  </div>
</template>

<script>
    export default {
        methods: {
            showVuetifyToast() {
                console.log("Vuetify 按钮 被点击了！");
            },
        },
    };
</script>
