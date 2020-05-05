<template>
  <div class="world-map" style="--aspect-ratio: 16/9">
      <city cityName="Florianópolis" style="--spot-y: 67%; --spot-x: 30%;"></city>
      <city cityName="São Paulo" style="--spot-y: 64.5%; --spot-x: 31%;"></city>
      <city cityName="Buenos Aires" style="--spot-y: 68.5%; --spot-x: 28%;"></city>
      <city cityName="Buenos Aires" style="--spot-y: 69%; --spot-x: 28.5%;"></city>
      <city cityName="Montreal" style="--spot-y: 34.5%; --spot-x: 27.5%;"></city>
      <city cityName="Toronto" style="--spot-y: 35.5%; --spot-x: 26.5%;"></city>
      <city cityName="Shangai" style="--spot-y: 42.5%; --spot-x: 77%;"></city>
      <city cityName="Beijing" style="--spot-y: 39.5%; --spot-x: 76.75%;"></city>
      <city cityName="Aarhus" style="--spot-y: 31.5%; --spot-x: 50%;"></city>
      <city cityName="Copenhagen" style="--spot-y: 32%; --spot-x: 51%;"></city>
      <city cityName="Paris" style="--spot-y: 34.5%; --spot-x: 48%;"></city>
  </div>
</template>

<script>
import City from "../02_molecules/CityItem";

export default {
    name: 'WorldMap',
    components: {
        City
    },
};
</script>
