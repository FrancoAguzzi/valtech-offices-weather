import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citySelected: 'London',
    countrySelected: 'UK',
    showSlider: false,
    openedCityWindow: { city: 'London', opened: false },
    apiKey: 'e592aa1d3e3740179f844e0e4d045519',
    apiData: '',
  },
  getters: {
    getCitySelected: (state) => {
      return state.citySelected;
    },
    getCountrySelected: (state) => {
      return state.countrySelected;
    },
    getShowSlider(state) {
      return state.showSlider;
    },
    getTemperature(state) {
      return state.apiData[0].main.temp;
    },
    getFeelsLike(state) {
        return state.apiData[0].main.feels_like;
    },
    getMinTemp(state) {
        return state.apiData[0].main.temp_min;
    },
    getMaxTemp(state) {
        return state.apiData[0].main.temp_max;
    },
    getHumidity(state) {
        return state.apiData[0].main.humidity;
    },
    getWindSpeed(state) {
        return Math.round((state.apiData[0].wind.speed * 3.6) * 100) / 100;
    },
    getWeather(state) {
        return state.apiData[0].weather[0].main;
    },
    getWeatherIcon(state) {
        return state.apiData[0].weather[0].icon;
    },
    getWeatherDescFirst(state) {
        return state.apiData[0].weather[0].description.split(' ')[0]
    },
    getWeatherDescSecond(state) {
      return state.apiData[0].weather[0].description.split(' ')[1]
    },
    getOpenedCityWindow: (state) => {
      return state.openedCityWindow;
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
    changeOpenedCityWindow: (state, payload) => {
      state.openedCityWindow['city'] = payload.city;
      state.openedCityWindow['opened'] = payload.opened;
    },
  },
  actions: {
    requestApiData({ state, commit }) {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${state.citySelected}&appid=${state.apiKey}`)
           .then(response => {
             commit('changeApiData', response.data.list);
           })
           .catch(error => {
             alert(`Error: ${error}`)
           })
    }
  },
  modules: {
  }
})
