<template>
  <div 
    class="planet" 
    :style="planetStyle"
    @mouseover="handleMouseOver" 
    @mouseleave="handleMouseLeave"
    :title="name"
  ></div>
</template>

<script>
export default {
  props: {
    background: String,
    speed: Number,
    name: String,
    description: String,
    style: Object
  },
  data() {
    return {
      rotation: 0,
      interval: null
    };
  },
  computed: {
    planetStyle() {
      return {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: `url(${this.background}) no-repeat center center`,
        backgroundSize: 'cover',
        position: 'absolute',
        ...this.style
      };
    }
  },
  methods: {
    handleMouseOver() {
      if (this.interval) clearInterval(this.interval);
      this.rotation = 0;
      this.interval = setInterval(() => {
        this.rotation += 3;
        this.$el.style.transform = `rotate(${this.rotation}deg)`;
      }, 1000 / this.speed);
    },
    handleMouseLeave() {
      if (this.interval) clearInterval(this.interval);
      this.$el.style.transform = `rotate(0deg)`;
    }
  },
  beforeUnmount() {
    if (this.interval) clearInterval(this.interval);
  }
}
</script>

<style scoped>
.planet {
  transition: box-shadow 0.3s ease;
}

.planet:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}
</style>
