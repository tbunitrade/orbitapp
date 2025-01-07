<template>
  <div class="sun">
    <div class="sunLeft" :style="sunStyle" @click="$emit('click')"></div>
    <div class="sunRight" :style="moonStyle" @click="$emit('click')"></div>
  </div>
</template>

<script>
export default {
  name: 'SunComponent',
  data(){
    return {
      sunImage : require('@/assets/img/uniserve/sun.jpg')// Динамический импорт изображения
    };
  },
  computed: {
    sunStyle() {
      return {
        width: '300px',
        height: '300px',
        borderRadius: '100%',
        background: `url(${this.sunImage}) no-repeat center center`,
        backgroundSize: `cover`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        transform: 'translateY(0%)',
        clipPath: 'inset(0 0 0 45%)',
      };
    },
    moonStyle() {
      return {
        width: '300px',
        height: '300px',
        borderRadius: '100%',
        background: `url(${this.sunImage}) no-repeat center center`,
        backgroundSize: `cover`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        // transform: 'translateY(30%)',
        transform: 'rotate(179deg)',
        clipPath: 'inset(0 0 0 45%)',
      };
    },
  }
};
</script>

<style scoped>
.sun {
  position: relative;

}
</style>
