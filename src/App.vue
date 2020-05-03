<template>
  <div id="app">
    <world-map></world-map>
  </div>
</template>

<script>
import WorldMap from '../src/components/03_organisms/WorldMap';

export default {
  name: 'App',
  components: {
    WorldMap
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/main.styl'
</style>
