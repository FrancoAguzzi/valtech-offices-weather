<template>
  <div class="city">
      <city-dot></city-dot>
      <city-window :cityName="cityName"></city-window>
  </div>
</template>

<script>
import CityDot from '../01_atoms/CityDot';
import CityWindow from '../01_atoms/CityWindow';

export default {
    name: 'City',
    components: {
        CityDot,
        CityWindow,
    },
    props: {
        cityName: {
            type: String,
            required: true,
        }
    },
};
</script>