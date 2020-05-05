<template>
  <div id="app">
    <world-map></world-map>
    <card-slider></card-slider>
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
  mounted() {
    this.$store.dispatch('requestApiData');
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/main.styl'
</style>
