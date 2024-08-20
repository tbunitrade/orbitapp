<template>
  <div class="info" v-show="visible">
    <button @click="close">Close</button>
    <div class="info-content">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    visible: Boolean,
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.info {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.info-content {
  text-align: center;
}
</style>
