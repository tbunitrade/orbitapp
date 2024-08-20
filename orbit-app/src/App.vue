<template>
  <div class="universe">
    <LogoComponent @click="reloadPage"/>
    <SunComponent 
      @click="showInfo('Солнце', 'Дает тепло нам всем')"
      :style="sunStyle"
    />
    <div class="planet-container">
      <PlanetComponent 
        v-for="planet in planets" 
        :key="planet.id" 
        :background="planet.image" 
        :speed="planet.speed" 
        :name="planet.name" 
        :description="planet.description"
        @click="showInfo(planet.name, planet.description)"
        :style="planet.style"
      />
    </div>
    <InfoComponent 
      v-if="infoVisible" 
      :name="infoName" 
      :description="infoDescription"
      @close="infoVisible = false"
    />
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
      infoVisible: false,
      infoName: '',
      infoDescription: '',
      planets: [
        { id: 1, name: 'Планета_1', image: require('@/assets/img/planets/mercury.jpg'), speed: 2, style: { top: '20%', left: '20%' }, description: 'Рандомный текст 1' },
        { id: 2, name: 'Планета_2', image: require('@/assets/img/planets/venus2.jpg'), speed: 3, style: { top: '40%', left: '40%' }, description: 'Рандомный текст 2' },
        { id: 3, name: 'Планета_3', image: require('@/assets/img/planets/earth.jpg'), speed: 4, style: { top: '60%', left: '60%' }, description: 'Рандомный текст 3' },
        { id: 4, name: 'Планета_4', image: require('@/assets/img/planets/venus2.jpg'), speed: 5, style: { top: '80%', left: '80%' }, description: 'Рандомный текст 4' },
        { id: 5, name: 'Планета_5', image: require('@/assets/img/planets/pluto.jpg'), speed: 6, style: { top: '100%', left: '100%' }, description: 'Рандомный текст 5' },
      ],
      sunStyle: {
        width: '200px',
        height: '200px',
        position: 'absolute',
        bottom: '0',
        left: '0',
        transform: 'translateY(30%)',
        background: `url(${require('@/assets/img/planets/sun.jpg')}) no-repeat center center`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        clipPath: 'inset(0 0 0 45%)' // Отображаем только часть солнца
      }
    };
  },
  methods: {
    showInfo(name, description) {
      this.infoName = name;
      this.infoDescription = description;
      this.infoVisible = true;
    },
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>

<style scoped>
.universe {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('@/assets/img/stars.jpg') no-repeat center center fixed;
  background-size: cover;
}

.planet-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure no interference with planet clicks */
}
</style>
