<template>
  <div class="city">
      <city-dot :cityName="cityName" @shouldToggle="toggleCityWindow"></city-dot>
      <city-window v-if="this.isEnabled" :cityName="cityName" :countryName="countryName"></city-window>
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
        ...mapGetters([
            'getOpenedCityWindow',
        ]),
    },
    watch: {
        getOpenedCityWindow(newValue, oldValue) {
            alert(`${oldValue} to ${newValue}`)
            alert('inside watcher')
            if (this.isEnabled && this.getOpenedCityWindow.city !== this.cityName) {
                this.isEnabled = false;
                alert('should close ' + this.cityName)
            }
        }
    },
    methods: {
        ...mapMutations([
            'changeOpenedCityWindow',
        ]),
        toggleCityWindow() {
            if (!this.getOpenedCityWindow.opened) {
                this.isEnabled = true;
                this.changeOpenedCityWindow({ city: this.cityName, opened: true })
            } else if (this.getOpenedCityWindow.city === this.cityName) {
                this.isEnabled = false;
                this.changeOpenedCityWindow({ city: '', opened: false });
            } else {
                this.isEnabled = true;
                this.changeOpenedCityWindow({ city: this.cityName, opened: true });
            }
        },
    },
};
</script>