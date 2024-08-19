<template>
  <div class="universe">
    <LogoComponent />
    <SunComponent @click="showInfo('Sun', 'дает тепло нам всем')" />
    <PlanetComponent v-for="planet in planets" :key="planet.name" :name="planet.name" :background="planet.background" @click="showInfo(planet.name, planet.description)" />
    <InfoComponent v-if="infoVisible" :name="infoName" :description="infoDescription" @close="infoVisible = false" />
  </div>
</template>

<script>
import LogoComponent from './components/LogoComponent.vue';
import SunComponent from './components/SunComponent.vue';
import PlanetComponent from './components/PlanetComponent.vue';
import InfoComponent from './components/InfoComponent.vue';

export default {
  components: {
    LogoComponent,
    SunComponent,
    PlanetComponent,
    InfoComponent,
  },
  data() {
    return {
      planets: [
        { name: 'Планета_1', background: 'src/assets/img/planets/mercury.jpg', description: 'Описание планеты 1' },
        { name: 'Планета_2', background: 'src/assets/img/planets/venus2.jpg', description: 'Описание планеты 2' },
        { name: 'Планета_3', background: 'src/assets/img/planets/earth.jpg', description: 'Описание планеты 3' },
        { name: 'Планета_4', background: 'src/assets/img/planets/pluto.jpg', description: 'Описание планеты 4' },
      ],
      infoVisible: false,
      infoName: '',
      infoDescription: '',
    };
  },
  methods: {
    showInfo(name, description) {
      this.infoName = name;
      this.infoDescription = description;
      this.infoVisible = true;
    }
  }
};
</script>

<style>
.universe {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: black; /* For starry sky, consider using a background image or CSS animation */
}
</style>
