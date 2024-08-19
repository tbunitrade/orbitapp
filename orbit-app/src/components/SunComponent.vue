<template>
  <div class="sun" @click="showInfo"></div>
</template>

<script>
export default {
  methods: {
    showInfo() {
      this.$emit('click');
    }
  }
};
</script>

<style>
.sun {
  width: 200px;
  height: 200px;
  background-image: url('@/assets/img/planets/sun.jpg');
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: -45px;
  /* Adjust styles to show 30% of the sun */
}
</style>
