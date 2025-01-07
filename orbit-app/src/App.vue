<template>
  <div id="app" class="app">
    <div class="universe" :style="universeStyle">
      <LogoComponent />
      <div class="sun-container">
        <SunComponent @click="showInfo('Солнце', 'Дает тепло нам всем')" />
      </div>
      <div class="planet-container">
        <PlanetComponent
            v-for="planet in planets"
            :key="planet.id"
            :planet="planet"
            @click="showInfo(planet.name, planet.description)"
        />
      </div>
    </div>
    <div class="interface-user" :style="interfaceUserStyle">
      <InfoComponent
          v-if="infoVisible"
          :name="infoName"
          :description="infoDescription"
          @close="infoVisible = false"
      />
    </div>
  </div>
</template>

<script>
import LogoComponent from './components/LogoComponent.vue';
import PlanetComponent from './components/PlanetComponent.vue';
import InfoComponent from './components/InfoComponent.vue';
import SunComponent from './components/SunComponent.vue';
import { planets } from './data/planets';

export default {
  components: {
    LogoComponent,
    PlanetComponent,
    InfoComponent,
    SunComponent,
  },
  data() {
    return {
      infoVisible: false,
      infoName: '',
      infoDescription: '',
      planets, // Загружаем планеты из модуля
    };
  },
  computed: {
    universeStyle() {
      return {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: `url(${require('@/assets/img/uniserve/stars.jpg')}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      };
    },
    interfaceUserStyle(){
      return {
        width:'100vw',
        height:'34vh',
        position:'fixed',
        bottom:'0',
        //zIndex:'999'
      }
    }
  },
  methods: {
    showInfo(name, description) {
      this.infoName = name;
      this.infoDescription = description;
      this.infoVisible = true;
    },
  },
};
</script>

<style scoped>
.universe,
.app{
  position: relative;
}

.planet-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.interface-user {
  position: absolute!important;
  z-index: -1;
}

.sun-container {
  position: absolute;
  bottom:25vh;
  left: 30vw;
}
</style>
