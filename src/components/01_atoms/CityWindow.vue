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
        openCityForecast() {
            this.$store.commit('changeCitySelected', this.cityName);
            this.$store.commit('changeCountrySelected', this.countryName);
            this.$store.dispatch('requestApiData');
            this.$store.commit('changeShowSlider', true);
        }
    }
};
</script>