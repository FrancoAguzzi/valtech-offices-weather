<template>
  <div class="world-map">
      <city cityName="London"></city>
  </div>
</template>

<script>
import City from "../02_molecules/CityItem";

export default {
    name: 'WorldMap',
    components: {
        City
    }
};
</script>
