<template>
  <div class="city">
      <city-dot :cityName="cityName" @shouldToggle="toggleCityWindow"></city-dot>
      <city-window v-if="isEnabled" :cityName="cityName" :countryName="countryName"></city-window>
  </div>
</template>

<script>
import CityDot from '../01_atoms/CityDot';
import CityWindow from '../01_atoms/CityWindow';
import { mapGetters, mapMutations } from 'vuex';

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
        },
        countryName: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters([
            'getOpenedCityWindow',
        ]),
        isEnabled() {
            // If this component is the city selected, it shows the city window
            const { city } = this.getOpenedCityWindow;
            return city === this.cityName;
        }
    },
    methods: {
        ...mapMutations([
            'changeOpenedCityWindow',
        ]),
        toggleCityWindow() {
            if (this.isEnabled) {
                // If city window is opened, on click it should close
                this.changeOpenedCityWindow({ city: '', opened: false })
            } else {
                // If city window is closed, on click it should open
                this.changeOpenedCityWindow({ city: this.cityName, opened: true });
            }
        },
    },
};
</script>