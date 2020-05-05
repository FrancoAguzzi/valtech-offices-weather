<template>
  <div class="city__dot" @click="dotClicked" :title="cityName"></div>
</template>

<script>
export default {
    name: 'CityDot',
    props: {
      cityName: {
        type: String,
        required: true,
      }
    },
    methods: {
      dotClicked() {
        this.$emit('shouldToggle');
      },
    },
};
</script>