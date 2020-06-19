<template>
  <div class="city__window">
      <close-window class="city__window-closer" @click.native="closeCityWindow"></close-window>
      <div class="city__window-name">
          {{this.cityName}}, {{this.countryName}}
      </div>
      <button class="city__window-cta" @click="openCityForecast">
          See Forecast
      </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import CloseWindow from './CloseWindow';

export default {
    name: 'CityWindow',
    components: {
        CloseWindow,
    },
    props: {
        cityName: {
            type: String,
            required: true,
        },
        countryName: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapActions([
            'requestApiData',
        ]),
        ...mapMutations([
            'changeCitySelected',
            'changeCountrySelected',
            'changeShowSlider',
        ]),
        closeCityWindow() {
            this.$emit('shouldClose');
        },
        openCityForecast() {
            // Requests new api data based on the city selected
            this.requestApiData({ city: this.cityName, country: this.countryName });

            // Open forecast slider
            setTimeout(() => this.changeShowSlider(true), 700);
        }
    }
};
</script>