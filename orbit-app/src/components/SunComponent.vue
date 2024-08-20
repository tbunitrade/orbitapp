<template>
  <div 
    class="sun" 
    @click="$emit('click')"
  ></div>
</template>

<script>
export default {
  name: 'SunComponent'
}
</script>

<style scoped>
.sun {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url('@/assets/img/planets/sun.jpg') no-repeat center center;
  background-size: cover;
}
</style>
