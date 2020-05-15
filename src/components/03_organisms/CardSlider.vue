<template>
  <div class="card-slider" :class="{ opened: this.getShowSlider }">
      <div class="card-slider__header">
        <!-- Close Button -->
        <button class="card-slider__header-close" @click="closeCardSlider">
            <svg viewBox="0 0 100 100" class="close-svg">
                <line x1="0" y1="0" x2="100" y2="100"></line>
                <line x1="0" y1="100" x2="100" y2="0"></line>
            </svg>
        </button>
        <!-- Change Temperature Metric Toggler -->
        <div class="card-slider__header-checkbox">
            <input type="checkbox" id="changeMetric" class="card-slider__header-checkbox-input">
            <label for="changeMetric" class="card-slider__header-checkbox-label" @click="changeTemperatureMetric">
                <span class="card-slider__header-checkbox-label-option">°F</span>
                <span class="card-slider__header-checkbox-label-option">°C</span>
            </label>
        </div>
      </div>
      <!-- City Forecast -->
      <div class="card-slider__forecast">
        <!-- City Name -->
        <div class="card-slider__forecast-city">{{ getCitySelected }}, {{ getCountrySelected }}</div>
        <div class="card-slider__forecast-items">
            <!-- Weather Icon -->
            <div class="card-slider__forecast-icon">
                <img :src="getWeatherIcon" class="card-slider__forecast-icon-img" alt="Weather Icon">
            </div>
            <!-- Forecast Temperature -->
            <div class="card-slider__forecast-temperature">{{ getTemperatureCalculation(getTemperature) }}{{ temperatureMetric }}</div>
            <!-- Forecast Feels Like -->
            <div class="card-slider__forecast-feelslike"><span>feels</span> like {{ getTemperatureCalculation(getFeelsLike) }}{{ temperatureMetric }}</div>
        </div>
        <div class="card-slider__forecast-temps">
            <!-- Forecast Min Temperature -->
            <div class="card-slider__forecast-tempsmin">{{ getTemperatureCalculation(getMinTemp) }}{{ temperatureMetric }}</div>
            <span class="card-slider__forecast-temps-separator">-</span>
            <!-- Forecast Max Temperature -->
            <div class="card-slider__forecast-tempsmax">{{ getTemperatureCalculation(getMaxTemp) }}{{ temperatureMetric }}</div>
        </div>
        <div class="card-slider__forecast-info">
            <!-- Forecast Humidity -->
            <div class="card-slider__forecast-humidity">
                {{ getHumidity }}%
                <span>humidity</span>
            </div>
            <!-- Forecast Wind Speed -->
            <div class="card-slider__forecast-windspeed">
                <div class="card-slider__forecast-windspeed-value">{{ getWindSpeed }} <span>km/h</span></div>
                <span>wind speed</span>
            </div>
            <!-- Forecast Weather Description -->
            <div class="card-slider__forecast-weather">
                <div class="card-slider__forecast-weather-description1">{{ getWeatherDescFirst }}</div>
                <div class="card-slider__forecast-weather-description2">{{ getWeatherDescSecond }}</div>
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
            temperatureMetric: '°F'
        }
    },
    computed: {
        ...mapGetters([
            'getCitySelected',
            'getCountrySelected',
            'getMainWeather',
            'getWeather',
            'getWind',
            'getShowSlider',
        ]),
        getTemperature() {
            const { temp = '' } = this.getMainWeather;
            return temp;
        },
        getFeelsLike() {
            const { feels_like = '' } = this.getMainWeather;
            return feels_like;
        },
        getMinTemp() {
            const { temp_min = '' } = this.getMainWeather;
            return temp_min;
        },
        getMaxTemp() {
            const { temp_max = '' } = this.getMainWeather;
            return temp_max;
        },
        getHumidity() {
            const { humidity = '' } = this.getMainWeather;
            return humidity;
        },
        getWindSpeed() {
            const { speed = '' } = this.getWind;
            return speed;
        },
        getWeatherIcon() {
            const { icon = '' } = this.getWeather;
            return `./images/${icon}.png`;
        },
        getWeatherDescFirst() {
            const { description = '' } = this.getWeather;
            return description.split(' ')[0];
        },
        getWeatherDescSecond() {
            const { description = '' } = this.getWeather;
            return description.split(' ')[1];
        },
    },
    methods: {
        ...mapMutations([
            'changeShowSlider',
        ]),
        closeCardSlider() {
            // Close forecast slider
            this.changeShowSlider(false);
        },
        changeTemperatureMetric() {
            // Toggle temperature metric between Celsius and Kelvin
            this.temperatureMetric === '°F' ? this.temperatureMetric = '°C' : this.temperatureMetric = '°F';
        },
        getTemperatureCalculation(number) {
            // Calculates temperature based on metric
            let celsius = Math.round((number - 273.15) * 10) / 10;
            let fahrenheit = Math.round(((celsius * 1.8) + 32) * 10) / 10;
            
            return this.temperatureMetric === '°F' ? fahrenheit : celsius;
        },
    }
}
</script>