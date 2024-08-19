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
}
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
  background: url('@/assets/img/logo-black-nobg.png') no-repeat center center;
  background-size: contain;
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
