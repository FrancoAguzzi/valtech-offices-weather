<template>
  <div class="city__window">
      {{ this.cityName }}
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