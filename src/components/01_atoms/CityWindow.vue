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
            // sends city selected to store state
            this.changeCitySelected(this.cityName);
            this.changeCountrySelected(this.countryName);

            // requests new api data based on new city selected
            this.requestApiData();

            // opens forecast slider
            this.changeShowSlider(true);
        }
    }
};
</script>