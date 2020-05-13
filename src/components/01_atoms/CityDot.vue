<template>
  <div class="city__dot" @click="dotClicked" :title="cityName"></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CityDot',
    props: {
      cityName: {
        type: String,
        required: true,
      }
    },
    computed: {
      ...mapGetters([
        'getShowSlider',
      ])
    },
    methods: {
      dotClicked() {
        // close forecast slider and emit event to open city window
        if (this.getShowSlider) this.$store.commit('changeShowSlider', false);
        this.$emit('shouldToggle');
      },
    },
};
</script>