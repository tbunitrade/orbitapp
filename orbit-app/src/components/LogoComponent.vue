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

<style scoped>
.logo {
  width: 200px;
  height: 200px;
  background: url('@/assets/img/logo-black-nobg.png') no-repeat center;
  background-color: black;
  cursor: pointer;
}
</style>
