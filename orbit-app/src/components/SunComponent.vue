<template>
  <div class="sun" @click="handleClick"></div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.sun {
  width: 200px;
  height: 200px;
  background: url('@/assets/img/planets/sun.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-45%) translateY(30%);
}
</style>
