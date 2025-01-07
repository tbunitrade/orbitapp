<template>
  <div class="planet-container">
    <div class="planet" :style="planet.getPlanetStyle()" @click="$emit('click')"></div>
  </div>
</template>

<script>
export default {
  name: 'PlanetComponent',  // Добавляем имя компонента
  props: {
    planet: Object,
  },
};
</script>

<style scoped>
/*
.planet {
  transition: box-shadow 0.3s ease;
}

.planet:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}*/

.planet-container  {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.planet {
  width: 400%;
  height: 100%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg');
  background-repeat:repeat-x;
  background-size: contain;
  animation: moveBackground 30s linear infinite;
}
@keyframes moveBackground {
  from { transform: translateX(0); }
  to { transform: translateX(-75%); }
}
</style>
