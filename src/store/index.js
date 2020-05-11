import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citySelected: 'London',
    countrySelected: 'UK',
    showSlider: false,
    apiKey: 'e592aa1d3e3740179f844e0e4d045519',
  },
  getters: {
    getCitySelected: (state) => {
      return state.citySelected;
    },
    getCountrySelected: (state) => {
      return state.countrySelected;
    },
    getTemperature(state) {
      return state.apiData.main;
    },
    getFeelsLike(state) {
      return state.apiData.main.feels_like;
    },
    getMinTemp(state) {
      return state.apiData.main.temp_min;
    },
    getMaxTemp(state) {
      return state.apiData.main.temp_max;
    },
    getHumidity(state) {
      return state.apiData.main.humidity;
    },
    getWindSpeed(state) {
      return state.apiData.wind.speed;
    },
    getWeather(state) {
      return state.apiData.weather[0].main;
    },
    getWeatherDescription(state) {
      return state.apiData.weather[0].description;
    },
    getWeatherIcon(state) {
      return state.apiData.weather[0].icon;
    },
    getShowSlider(state) {
      return state.showSlider;
    },
  },
  mutations: {
    changeCitySelected: (state, payload) => {
      state.citySelected = payload;
    },
    changeCountrySelected: (state, payload) => {
      state.countrySelected = payload;
    },
    changeApiData: (state, payload) => {
      state.apiData = payload;
    },
    changeShowSlider: (state, payload) => {
      state.showSlider = payload;
    },
  },
  actions: {
    requestApiData({ state, commit }) {
      Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${state.citySelected}&appid=${state.apiKey}`)
           .then(response => {
             commit('changeApiData', response.data.list[0]);
             console.log(response.data.list[0])
           })
           .catch(error => {
             alert(`Error: ${error}`)
           })
    }
  },
  modules: {
  }
})
