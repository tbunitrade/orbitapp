<template>
    <div class="planet" @mouseover="rotateFaster" @mouseleave="stopRotation" @click="showPlanetInfo">
      <div class="planet-inner" :style="backgroundImage"></div>
      <div class="planet-text">
        <h3>{{ planet.name }}</h3>
        <p>{{ planet.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['planet'],
    computed: {
      backgroundImage() {
        return {
          background: `url(@/assets/img/planets/${this.planet.image})`,
          backgroundSize: 'cover'
        };
      }
    },
    methods: {
      rotateFaster() {
        this.$el.querySelector('.planet-inner').style.animationDuration = '1s';
      },
      stopRotation() {
        this.$el.querySelector('.planet-inner').style.animationDuration = '4s';
      },
      showPlanetInfo() {
        this.$emit('showInfo', this.planet);
      }
    }
  };
  </script>
  
  <style scoped>
  .planet {
    position: absolute;
    /* Позиционирование будет динамическим */
  }
  .planet-inner {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    animation: rotate 4s linear infinite;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .planet-text {
    display: none;
  }
  .planet:hover .planet-inner {
    box-shadow: 0 0 15px 15px rgba(255, 255, 255, 0.5);
  }
  </style>
  