<template>
  <div class="universe">
    <LogoComponent />
    <SunComponent @click="showInfo('sun')" />
    <PlanetComponent
      v-for="(planet, index) in planets"
      :key="index"
      :name="planet.name"
      :description="planet.description"
      :background="planet.background"
      :style="{ top: planet.top, left: planet.left }"
      @click="showInfo(planet.name)"
    />
    <InfoComponent
      v-if="selectedObject"
      :name="selectedObject.name"
      :description="selectedObject.description"
      @close="selectedObject = null"
    />
  </div>
</template>

<script>
import LogoComponent from './components/LogoComponent.vue'
import SunComponent from './components/SunComponent.vue'
import PlanetComponent from './components/PlanetComponent.vue'
import InfoComponent from './components/InfoComponent.vue'

export default {
  components: {
    LogoComponent,
    SunComponent,
    PlanetComponent,
    InfoComponent,
  },
  data() {
    return {
      planets: this.generatePlanets(),
      selectedObject: null,
    }
  },
  methods: {
    showInfo(name) {
      if (name === 'sun') {
        this.selectedObject = { name: 'солнце', description: 'дает тепло нам всем' }
      } else {
        const planet = this.planets.find(p => p.name === name)
        this.selectedObject = planet ? { ...planet } : null
      }
    },
    generatePlanets() {
      const count = 5
      const planets = []
      for (let i = 0; i < count; i++) {
        planets.push({
          name: `Планета_${i + 1}`,
          description: `Рандомный текст ${i + 1}`,
          background: `src/assets/img/planets/${this.getRandomPlanetImage()}.jpg`,
          top: this.getRandomPosition(),
          left: this.getRandomPosition()
        })
      }
      return planets
    },
    getRandomPlanetImage() {
      const images = ['mercury', 'venus2', 'earth', 'pluto']
      return images[Math.floor(Math.random() * images.length)]
    },
    getRandomPosition() {
      const size = 60 // Size of the planet
      const viewportSize = Math.max(window.innerWidth, window.innerHeight)
      return Math.random() * (viewportSize - size) + 'px'
    }
  }
}
</script>

<style>
.universe {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('./assets/img/stars.jpg') no-repeat center center fixed;
  background-size: cover;
}
</style>
