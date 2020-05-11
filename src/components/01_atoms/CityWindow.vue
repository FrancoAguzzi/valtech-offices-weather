<template>
  <div class="city__window">
      <div class="city__window-name">
          {{this.cityName}}, {{this.countryName}}
      </div>
      <button class="city__window-cta" @click="openCardSlider">
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
        openCardSlider() {
            this.$store.commit('changeShowSlider', true)
        }
    }
};
</script>