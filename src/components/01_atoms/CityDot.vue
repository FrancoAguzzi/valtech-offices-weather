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
        // Close forecast slider if it's opened
        if (this.getShowSlider) this.$store.commit('changeShowSlider', false);

        // Emit event to open city window
        this.$emit('shouldToggle');
      },
    },
};
</script>