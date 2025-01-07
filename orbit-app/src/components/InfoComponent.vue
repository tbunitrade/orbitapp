<template>
  <div class="info" :style="infoStyle">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <button @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  name: 'InfoComponent',
  props: {
    name: String,
    description: String,
  },
  computed: {
    infoStyle() {
      return {
        width: '100%',
        height: '30vh',
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      };
    },
  },
};
</script>

<style scoped>
.info button {
  margin-top: 10px;
  padding: 10px 20px;
}
</style>
