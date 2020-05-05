<template>
  <div class="card-slider" id="slider">
      <button class="card-slider__closer" @click="closeSlider">
            <svg viewBox="0 0 100 100" class="close-svg">
                <line x1="0" y1="0" x2="100" y2="100"></line>
                <line x1="0" y1="100" x2="100" y2="0"></line>
            </svg>
      </button>
      <div class="card-slider__forecast">
          {{ this.getTemperature }}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CardSlider',
    methods: {
        closeSlider() {
            document.getElementsByClassName('card-slider')[0].classList.remove('opened')
        }
    },
    computed: {
        ...mapGetters([
            'getTemperature',
            'getFeelsLike',
            'getMinTemp',
            'getMaxTemp',
            'getHumidity',
            'getWindSpeed',
            'getWeather',
            'getWeatherIcon'
        ])
    }
}
</script>