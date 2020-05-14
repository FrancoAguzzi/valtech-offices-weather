<template>
  <div class="card-slider" id="slider" :class="{ opened: this.getShowSlider }">
      <div class="card-slider__header">
        <button class="card-slider__header-close" @click="closeCardSlider">
            <svg viewBox="0 0 100 100" class="close-svg">
                <line x1="0" y1="0" x2="100" y2="100"></line>
                <line x1="0" y1="100" x2="100" y2="0"></line>
            </svg>
        </button>
        <div class="card-slider__header-checkbox">
            <input type="checkbox" id="changeMetric" class="card-slider__header-checkbox-input">
            <label for="changeMetric" class="card-slider__header-checkbox-label" @click="changeTemperatureMetric">
                <span class="card-slider__header-checkbox-label-option">K</span>
                <span class="card-slider__header-checkbox-label-option">°C</span>
            </label>
        </div>
      </div>
      <div class="card-slider__forecast">
        <div class="card-slider__forecast-city">{{ this.getCitySelected }}, {{ this.getCountrySelected }}</div>
        <div class="card-slider__forecast-items">
            <div class="card-slider__forecast-icon">
                <img :src="'/' + this.getWeatherIcon" alt="Weather Icon">
            </div>
            <div class="card-slider__forecast-temperature">{{ this.getTemperatureCalculation(this.getTemperature) }}{{ this.temperatureMetric }}</div>
            <div class="card-slider__forecast-feelslike"><span>feels</span> like {{ this.getTemperatureCalculation(this.getFeelsLike) }}{{ this.temperatureMetric }}</div>
        </div>
        <div class="card-slider__forecast-temps">
            <div class="card-slider__forecast-tempsmin">{{ this.getTemperatureCalculation(this.getMinTemp) }}{{ this.temperatureMetric }}</div>
            <span>-</span>
            <div class="card-slider__forecast-tempsmax">{{ this.getTemperatureCalculation(this.getMaxTemp) }}{{ this.temperatureMetric }}</div>
        </div>
        <div class="card-slider__forecast-info">
            <div class="card-slider__forecast-humidity">
                {{ this.getHumidity }}%
                <span>humidity</span>
            </div>
            <div class="card-slider__forecast-windspeed">
                <div>{{ this.getWindSpeed }} <span>km/h</span></div>
                <span>wind speed</span>
            </div>
            <div class="card-slider__forecast-weather">
                {{ this.getWeatherDescFirst }}
                <div>{{ this.getWeatherDescSecond }}</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'CardSlider',
    data() {
        return {
            temperatureMetric: 'K'
        }
    },
    computed: {
        ...mapGetters([
            'getCitySelected',
            'getCountrySelected',
            'getTemperature',
            'getMinTemp',
            'getMaxTemp',
            'getFeelsLike',
            'getShowSlider',
            'getWindSpeed',
            'getHumidity',
            'getWeatherDescFirst',
            'getWeatherDescSecond',
            'getWeather',
            'getWeatherIcon',
        ]),
    },
    methods: {
        ...mapMutations([
            'changeShowSlider',
        ]),
        closeCardSlider() {
            this.changeShowSlider(false);
        },
        changeTemperatureMetric() {
            this.temperatureMetric === 'K' ? this.temperatureMetric = '°C' : this.temperatureMetric = 'K';
        },
        getTemperatureCalculation(number) {
            if (this.temperatureMetric !== 'K') {
                return Math.round((number - 273.15) * 10) / 10;
            }
            return number
        }
    }
}
</script>