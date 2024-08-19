<template>
  <div class="planet" @mouseover="startAnimation" @mouseleave="stopAnimation" :style="planetStyle"></div>
</template>

<script>
export default {
  props: {
    name: String,
    background: String
  },
  data() {
    return {
      rotationSpeed: Math.random() * 5 + 1, // Random speed between 1 and 6
    };
  },
  computed: {
    planetStyle() {
      // Random position along the diagonal line
      const randomX = Math.random() * 100; // Random percentage for X
      const randomY = Math.random() * 100; // Random percentage for Y

      return {
        backgroundImage: `url(${this.background})`,
        transform: `translate(${randomX}vw, ${randomY}vh)`,
      };
    }
  },
  methods: {
    startAnimation() {
      this.$el.style.animation = `rotate ${this.rotationSpeed}s linear infinite`;
      this.$el.style.boxShadow = `0 0 10px 5px rgba(255, 255, 255, 0.8)`;
    },
    stopAnimation() {
      this.$el.style.animation = '';
      this.$el.style.boxShadow = '';
    }
  }
};
</script>

<style>
.planet {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  position: absolute;
  /* Other styles */
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
