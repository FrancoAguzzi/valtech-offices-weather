<template>
  <div class="city">
      <city-dot :cityName="cityName" @shouldToggle="toggleCitySelected"></city-dot>
      <city-window v-if="this.isEnabled" :cityName="cityName" :countryName="countryName"></city-window>
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
    data() {
        return {
            isEnabled: false,
        };
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
    computed: {
        getCitySelected() {
            return this.$store.getters.getCitySelected;
        }
    },
    methods: {
        toggleCitySelected() {
            this.isEnabled = !this.isEnabled
            this.$store.commit('changeCitySelected', this.cityName);
            this.$store.commit('changeCountrySelected', this.countryName);
        },
    },
};
</script>