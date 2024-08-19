<template>
    <div class="sun" @click="showSunInfo"></div>
  </template>
  
  <script>
  export default {
    methods: {
      showSunInfo() {
        this.$emit('showInfo', { name: 'Солнце', description: 'Дает тепло нам всем.' });
      }
    }
  };
  </script>
  
  <style scoped>
  .sun {
    width: 200px;
    height: 200px;
    position: absolute;
    left: -90px; /* Чтобы было видно только 45% */
    top: 50%;
    transform: translateY(-50%);
    background: url('@/assets/img/planets/sun.jpg') no-repeat center;
    background-size: cover;
    border-radius: 50%;
  }
  </style>
  