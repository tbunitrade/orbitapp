<template>
  <transition name="fade">
    <div v-if="visible" class="info">
      <button class="close-btn" @click="close">×</button>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: String,
    description: String
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    close() {
      this.visible = false
      this.$emit('close')
    }
  },
  watch: {
    '$props.name': function() {
      this.visible = true
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
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.close-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
