<template>
    <div class="logo" @click="reload">
      <img src="@/assets/img/logo-black-nobg.png" alt="Logo">
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      reload() {
        window.location.reload();
      }
    }
  };
  </script>
  
  <style scoped>
  .logo {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  </style>
  