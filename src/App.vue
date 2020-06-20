<template>
  <div id="app">
    <nav class="navigation">
      <div class="navigation__links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="navigation__dark">
        <input type="checkbox" class="navigation__dark-input" @change="toggleDarkMode($event)" id="dark-mode">
        <label for="dark-mode" class="navigation__dark-label">Dark Mode</label>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleDarkMode(e) {
      const root = document.querySelector(':root');

      if (document.getElementsByClassName('world-map')[0]) {
        // Home Page
        const map = document.getElementsByClassName('world-map')[0];

        if (e.target.checked) {
          map.style.setProperty('background-image', 'url(../images/map-dark.svg)')
        } else {
          map.style.setProperty('background-image', 'url(../images/map.svg)')
        }
      } else {
        // About Page
        const stylusLogo = document.querySelector('.stylus-logo');
        const apiLogo = document.querySelector('.api-logo');
        
        if (e.target.checked) {
          stylusLogo.setAttribute('src', '/images/stylus-dark.svg');
          apiLogo.setAttribute('src', '/images/openweather-dark.png');
        } else {
          stylusLogo.setAttribute('src', '/images/stylus.svg')
          apiLogo.setAttribute('src', '/images/openweather.png');
        }
      }

      if (e.target.checked) {
        root.style.setProperty('--primaryColor', '#222');
        root.style.setProperty('--secondaryColor', '#111');
        root.style.setProperty('--tertiaryColor', '#eee');
        root.style.setProperty('--navColor', '#333');
        root.style.setProperty('--linearGradient1', '#627d98');
        root.style.setProperty('--linearGradient2', '#486581');
        root.style.setProperty('--linearGradient3', '#243b53');
      } else {
        root.style.setProperty('--primaryColor', '#fff');
        root.style.setProperty('--secondaryColor', '#d3d3d3');
        root.style.setProperty('--tertiaryColor', '#000');
        root.style.setProperty('--navColor', '#eee');
        root.style.setProperty('--linearGradient1', '#63C6E3');
        root.style.setProperty('--linearGradient2', '#70CAE4');
        root.style.setProperty('--linearGradient3', '#EBEAEE');
      }
    }
  }
}
</script>

<style src="./assets/stylus/main.styl" lang="stylus">
@media (max-width: 1000px) {
  var(--fontSize) = 10px
}
</style>
