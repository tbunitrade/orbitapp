<template>
  <div class="planet" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" @click="handleClick">
    <div class="planet-name">{{ name }}</div>
    <div class="planet-description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Планета'
    },
    description: {
      type: String,
      default: 'Описание планеты'
    }
  },
  data() {
    return {
      backgroundImages: [
        '@/assets/img/planets/mercury.jpg',
        '@/assets/img/planets/venus2.jpg',
        '@/assets/img/planets/earth.jpg',
        '@/assets/img/planets/pluto.jpg'
      ],
      rotationSpeed: Math.random() * (3 - 1) + 1 // Рандомная скорость от 1 до 3 секунд
    }
  },
  computed: {
    planetStyle() {
      return {
        backgroundImage: `url(${this.getRandomPlanetImage()})`,
        animation: `rotate ${this.rotationSpeed}s linear infinite`
      }
    }
  },
  methods: {
    getRandomPlanetImage() {
      const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
      return this.backgroundImages[randomIndex];
    },
    handleMouseOver() {
      this.rotationSpeed /= 3; // Увеличение скорости вращения
    },
    handleMouseLeave() {
      this.rotationSpeed *= 3; // Снижение скорости вращения
    },
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.planet {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.5s ease;
}

.planet:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 1);
}

.planet-name,
.planet-description {
  color: white;
  text-align: center;
}
</style>
