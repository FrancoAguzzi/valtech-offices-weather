import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: 'e592aa1d3e3740179f844e0e4d045519',
    apiData: '',
    citySelected: '',
    countrySelected: '',
    showSlider: false,
    openedCityWindow: { city: '', opened: false },
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
    getWeather(state) {
      const { weather = '' } = state.apiData;
      return weather;
    },
    getMainWeather(state) {
      const { main = '' } = state.apiData;
      return main;
    },
    getWind(state) {
      const { wind = '' } = state.apiData;
      return wind;
    },
    getOpenedCityWindow(state)  {
      return state.openedCityWindow;
    },
  },
  mutations: {
    changeCitySelected: (state, payload) => {
      state.citySelected = payload.city;
      state.countrySelected = payload.country;
    },
    changeApiData: (state, payload) => {
      state.apiData = payload;
      state.apiData.weather = payload.weather[0];
    },
    changeShowSlider: (state, payload) => {
      state.showSlider = payload;
    },
    changeOpenedCityWindow: (state, payload) => {
      state.openedCityWindow.city = payload.city;
      state.openedCityWindow.opened = payload.opened;
    },
  },
  actions: {
    requestApiData({ state, commit }, payload) {
      commit('changeCitySelected', payload);
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&appid=${state.apiKey}`)
           .then(response => {
             commit('changeApiData', response.data.list[0]);
           })
           .catch(error => {
             alert(`Error: ${error}`);
           })
    }
  },
  modules: {
  }
})
