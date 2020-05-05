<template>
  <div class="city__window">
      <div class="city__window-name">
          {{this.cityName}}
      </div>
      <button class="city__window-cta" @click="openSlider">
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
        }
    },
    methods: {
        openSlider() {
            document.getElementsByClassName('card-slider')[0].classList.add('opened');
        }
    }
};
</script>