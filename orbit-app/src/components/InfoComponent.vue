<template>
  <transition name="fade">
    <div v-if="visible" class="info">
      <button @click="close">Close</button>
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    visible: Boolean
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.info {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: white;
  overflow: auto;
  transition: transform 0.3s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
