<template>
  <div class="logo" @click="reloadPage"></div>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
  background-image: url('@/assets/img/logo-black-nobg.png');
  background-size: cover;
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
