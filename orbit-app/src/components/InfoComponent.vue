<template>
    <div class="info">
      <button class="close" @click="$emit('close')">✖</button>
      <h2>{{ planet.name }}</h2>
      <p>{{ planet.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['planet']
  };
  </script>
  
  <style scoped>
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 20px;
    transition: all 0.3s ease-in-out;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  