<template>
  <div class="container">
    <div class="container__title">Should I work from home today?</div>
    <div class="container__content">
      <world-map></world-map>
      <card-slider></card-slider>
    </div>
  </div>
</template>

<script>
import WorldMap from '../03_organisms/WorldMap';
import CardSlider from '../03_organisms/CardSlider';

export default {
  name: 'HomePage',
  components: {
    WorldMap,
    CardSlider
  },
}
</script>

<style src="../../assets/stylus/main.styl" lang="stylus">
@media (max-width: 1000px) {
  var(--fontSize) = 10px
}
</style>
