<template>
  <div class="solar-system">
    <div v-for="planet in planets" :key="planet.name" :class="'card card--' + planet.name">
      <div class="card__planet">
        <div class="planet__atmosphere">
          <div class="planet__surface"></div>
        </div>
      </div>
      <div class="card__info">
        <h2 class="info__title">{{ planet.name }}</h2>
        <div class="info__form">
          <div class="info__item">
            <label class="info__label">Tilt</label>
            <span class="info__line"></span>
            <i class="tilt__icon fas fa-long-arrow-alt-right"></i>
            <span class="info__detail">{{ planet.tilt }}°</span>
          </div>
          <div class="info__item">
            <label class="info__label">Day</label>
            <span class="info__line"></span>
            <span class="info__detail">{{ planet.day }} hours</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      planets: [
        { name: 'mercury', tilt: '0.034', day: 1407.6, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mercury2.jpg', color: '#999999' },
        { name: 'venus', tilt: '177.3', day: 5832.5, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/venus2.jpg', color: '#e8cda2' },
        { name: 'earth', tilt: '23.26', day: 23.9, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg', color: '#b3caff' },
        { name: 'mars', tilt: '25.2', day: 24.6, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mars.jpg', color: '#c07158' },
        { name: 'jupiter', tilt: '3.1', day: 9.9, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/jupiter.jpg', color: '#c9b5a4' },
        { name: 'saturn', tilt: '26.7', day: 10.7, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/saturn.jpg', color: '#f0e2c4' },
        { name: 'uranus', tilt: '97.8', day: 17.2, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/uranus2.jpg', color: '#b8d8e1' },
        { name: 'neptune', tilt: '28.3', day: 16.1, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/neptune.jpg', color: '#5e73bb' },
        { name: 'pluto', tilt: '122.5', day: 153.3, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/pluto.jpg', color: '#c3b6aa' }
      ]
    };
  }
};
</script>

<style scoped>
.solar-system {
  display: grid;
  grid-template-columns: repeat(auto-fill, 190px);
  grid-gap: 40px;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__planet {
  position: relative;
  height: 190px;
  width: 190px;
}

.planet__atmosphere {
  height: 190px;
  width: 190px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 65%);
  box-shadow: inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2), inset -70px 0px 50px 0px black;
  overflow: hidden;
  position: relative;
}

.planet__surface {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
}

.card--mercury .planet__surface {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mercury2.jpg);
  animation: planetRotate 140.76s linear infinite; /* Скорость вращения Меркурия */
}

.card--venus .planet__surface {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/venus2.jpg);
  animation: planetRotate 583.25s linear infinite;
}

.card--earth .planet__surface {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg);
  animation: planetRotate 23.9s linear infinite;
}

.card--mars .planet__surface {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mars.jpg);
  animation: planetRotate 24.6s linear infinite;
}

.card--jupiter .planet__surface {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/jupiter.jpg);
  animation: planetRotate 9.9s linear infinite;
}

/* ... Добавь аналогичные стили для других планет */

/* Анимация вращения */
@keyframes planetRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
