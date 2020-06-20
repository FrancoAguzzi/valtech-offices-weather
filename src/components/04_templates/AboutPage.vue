<template>
  <div class="container__about container">
    <div class="container__card card">
      <about-draw></about-draw>
      <div class="card__content">
        <h1 class="card__content-title">
          Valtech Offices Forecast
        </h1>
        <p class="card__content-text">
          Welcome! This website was fully developed with VueJS, using VueRouter and VueX also. The idea came up from an informal conversation with a Valtech colleague and was accomplished using an Open Weather API. Feel free too contribute thriught the 
          <a href="https://github.com/FrancoAguzzi/valtech-offices-weather" target="_blank" class="card__content-link">repo</a>.
        </p>
        <div class="card__content-social">
          <img src="/images/vue.png" alt="Vue Logo" class="social-media">
          <img src="/images/vuex.png" alt="VueX Logo" class="social-media">
          <img src="/images/vuerouter.png" alt="VueRouter Logo" class="social-media">
          <img v-if="darkModeOn" src="/images/stylus-dark.svg" alt="Stylus Logo" class="social-media stylus-logo">
          <img v-else src="/images/stylus.svg" alt="Stylus Logo" class="social-media stylus-logo">
          <img v-if="darkModeOn" src="/images/openweather-dark.png" alt="Open Weather Logo" class="social-media api-logo">
          <img v-else src="/images/openweather.png" alt="Open Weather Logo" class="social-media api-logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutDraw from '../01_atoms/AboutDraw'

export default {
  name: 'AboutPage',
  components: {
    AboutDraw,
  },
  computed: {
    darkModeOn() {
      const checkbox = document.querySelector('.navigation__dark-input');
      return checkbox.checked
    }
  }
}
</script>

<style src="../../assets/stylus/main.styl" lang="stylus">
@media (max-width: 1000px) {
  var(--fontSize) = 10px
}
</style>
