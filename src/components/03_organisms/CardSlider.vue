<template>
  <div class="card-slider" id="slider" :class="{ opened: this.$store.getters.getShowSlider }">
        <button class="card-slider__closer" @click="closeCardSlider">
            <svg viewBox="0 0 100 100" class="close-svg">
                <line x1="0" y1="0" x2="100" y2="100"></line>
                <line x1="0" y1="100" x2="100" y2="0"></line>
            </svg>
        </button>
      <div class="card-slider__forecast">
        <div class="card-slider__forecast-city">{{ this.getCitySelected }}, {{ this.getCountrySelected }}</div>
        <div class="card-slider__forecast-items">
            <div class="card-slider__forecast-icon">
                <img :src="this.sanitizeWeatherIcon" alt="Weather Icon">
            </div>
            <div class="card-slider__forecast-temperature">{{ this.getTemperature.temp }}K</div>
            <div class="card-slider__forecast-feelslike"><span>feels</span> like {{ this.getFeelsLike }}K</div>
        </div>
        <div class="card-slider__forecast-temps">
            <div class="card-slider__forecast-tempsmin">{{ this.getMinTemp }}K</div>
            <span>-</span>
            <div class="card-slider__forecast-tempsmax">{{ this.getMaxTemp }}K</div>
        </div>
        <div class="card-slider__forecast-info">
            <div class="card-slider__forecast-humidity">
                {{ this.getHumidity }}%
                <span>humidity</span>
            </div>
            <div class="card-slider__forecast-windspeed">
                <div>{{ this.sanitizeWindSpeed }} <span>km/h</span></div>
                <span>wind speed</span>
            </div>
            <div class="card-slider__forecast-weather">
                {{ this.sanitizeWeatherDescFirst }}
                <div>{{ this.sanitizeWeatherDescSecond }}</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CardSlider',
    computed: {
        ...mapGetters([
            'getCitySelected',
            'getCountrySelected',
            'getTemperature',
            'getFeelsLike',
            'getMinTemp',
            'getMaxTemp',
            'getHumidity',
            'getWindSpeed',
            'getWeatherDescription',
            'getWeatherIcon'
        ]),
        sanitizeWeatherIcon() {
            return `/src/assets/images/${this.getWeatherIcon}.png`
        },
        sanitizeWindSpeed() {
            return Math.round((this.getWindSpeed * 3.6) * 100) / 100
        },
        sanitizeWeatherDescFirst() {
            return this.getWeatherDescription.split(' ')[0]
        },
        sanitizeWeatherDescSecond() {
          return this.getWeatherDescription.split(' ')[1]
        }
    },
    methods: {
        closeCardSlider() {
            this.$store.commit('changeShowSlider', false)
        }
    }
}
</script>