<template>
  <div id="app" class="app">
    <div class="app__title">Should I work from home today?</div>
    <div class="app__content">
      <world-map></world-map>
      <card-slider></card-slider>
    </div>
  </div>
</template>

<script>
import WorldMap from '../src/components/03_organisms/WorldMap';
import CardSlider from '../src/components/03_organisms/CardSlider';

export default {
  name: 'App',
  components: {
    WorldMap,
    CardSlider
  },
}
</script>

<style src="./assets/stylus/main.styl" lang="stylus">
@media (max-width: 1000px) {
  fontSize = 10px
}
</style>
