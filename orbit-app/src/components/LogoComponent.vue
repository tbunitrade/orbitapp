<template>
  <div class="logo" :style="logoStyle" @click="reloadPage"></div>
</template>

<script>
export default {
  name: 'LogoComponent',
  data() {
    return {
      logoImage: require('@/assets/img/uniserve/logo-black-nobg.png'),
    };
  },
  computed: {
    logoStyle() {
      return {
        width: '40px',
        height: '40px',
        background: `url(${this.logoImage}) no-repeat center`,
        cursor: 'pointer',
        backgroundSize: `contain`,
        position: `relative`,
        top: `10vh`,
        left: `8vw`,
      };
    },
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.logo {

}
</style>
