<template>
  <div class="universe">
    <LogoComponent />
    <SunComponent />
    <div v-for="planet in planets" :key="planet.name">
      <PlanetComponent :planet="planet" @showInfo="showInfo" />
    </div>
    <InfoComponent v-if="selectedPlanet" :planet="selectedPlanet" @close="selectedPlanet = null" />
  </div>
</template>

<script>
import LogoComponent from './components/LogoComponent.vue';
import SunComponent from './components/SunComponent.vue';
import PlanetComponent from './components/PlanetComponent.vue';
import InfoComponent from './components/InfoComponent.vue';

export default {
  data() {
    return {
      planets: [
        { name: 'Планета_1', image: 'mercury.jpg', description: 'Описание Планеты 1' },
        { name: 'Планета_2', image: 'venus2.jpg', description: 'Описание Планеты 2' },
        { name: 'Планета_3', image: 'earth.jpg', description: 'Описание Планеты 3' },
        { name: 'Планета_4', image: 'pluto.jpg', description: 'Описание Планеты 4' }
      ],
      selectedPlanet: null
    };
  },
  methods: {
    showInfo(planet) {
      this.selectedPlanet = planet;
    }
  },
  components: {
    LogoComponent,
    SunComponent,
    PlanetComponent,
    InfoComponent
  }
};
</script>

<style scoped>
.universe {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: black;
}
</style>
