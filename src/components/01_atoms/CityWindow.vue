<template>
  <div class="city__window">
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

export default {
    name: 'CityWindow',
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
        openCityForecast() {
            // Requests new api data based on the city selected
            this.requestApiData({ city: this.cityName, country: this.countryName });

            // Open forecast slider
            setTimeout(() => this.changeShowSlider(true), 700);
        }
    }
};
</script>