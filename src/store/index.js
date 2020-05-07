import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citySelected: 'London',
    apiKey: '586af6ed8ad394dfed8df5586930e7d7',
    apiData: {},
  },
  getters: {
    getCitySelected: (state) => {
      // return state.citySelected;
      return state.citySelected
    },
    getTemperature(state) {
      // return state.apiData.list[0].main.temp;
      return state.apiData.main;
    },
    getFeelsLike(state) {
      // return state.apiData.list[0].main.feels_like;
      return state.apiData.main.feels_like;
    },
    getMinTemp(state) {
      return state.apiData.main.temp_min;
      // return state.apiData.list[0].main.temp_min;
    },
    getMaxTemp(state) {
      return state.apiData.main.temp_max;
      // return state.apiData.list[0].main.temp_max;
    },
    getHumidity(state) {
      return state.apiData.main.humidity;
      // return state.apiData.list[0].main.humidity;
    },
    getWindSpeed(state) {
      return state.apiData.wind.speed;
      // return state.apiData.list[0].wind.speed;
    },
    getWeather(state) {
      return state.apiData.weather[0].main;
      // return state.apiData.list[0].weather[0].main;
    },
    getWeatherDescription(state) {
      return state.apiData.weather[0].description;
      // return state.apiData.list[0].weather[0].main;
    },
    getWeatherIcon(state) {
      return state.apiData.weather[0].icon;
      // return state.apiData.list[0].weather[0].main;
    },
  },
  mutations: {
    changeCitySelected: (state, payload) => {
      state.citySelected = payload;
    },
    changeApiData: (state, payload) => {
      state.apiData = payload;
    },
  },
  actions: {
    requestApiData({ state, commit }) {
      Axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${state.apiKey}`)
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
