<template>
  <div class="city__window">
      <div class="city__window-name">
          {{this.cityName}}
      </div>
      <button class="city__window-cta">
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
};
</script>