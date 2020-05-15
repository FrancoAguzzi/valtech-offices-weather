<template>
  <div class="world-map" style="--aspect-ratio: 16/9">
      <city cityName="Florianópolis" countryName="BR" style="--spot-y: 68%; --spot-x: 30%;"></city>
      <city cityName="São Paulo" countryName="BR" style="--spot-y: 65.5%; --spot-x: 31%;"></city>
      <city cityName="Buenos Aires" countryName="AR" style="--spot-y: 70%; --spot-x: 28.5%;"></city>
      <city cityName="Montreal" countryName="CA" style="--spot-y: 33.5%; --spot-x: 27.5%;"></city>
      <city cityName="Toronto" countryName="CA" style="--spot-y: 34.5%; --spot-x: 26.5%;"></city>
      <city cityName="Shangai" countryName="CN" style="--spot-y: 41.5%; --spot-x: 77%;"></city>
      <city cityName="Beijing" countryName="CN" style="--spot-y: 38.5%; --spot-x: 76.75%;"></city>
      <city cityName="Aarhus" countryName="DK" style="--spot-y: 28.5%; --spot-x: 51%;"></city>
      <city cityName="Copenhagen" countryName="DK" style="--spot-y: 29%; --spot-x: 52%;"></city>
      <city cityName="Paris" countryName="FR" style="--spot-y: 33.5%; --spot-x: 48%;"></city>
      <city cityName="Köln" countryName="DE" style="--spot-y: 31.55%; --spot-x: 49.80%;"></city>
      <city cityName="Düsseldorf" countryName="DE" style="--spot-y: 30.5%; --spot-x: 49.5%;"></city>
      <city cityName="München" countryName="DE" style="--spot-y: 34.5%; --spot-x: 51.5%;"></city>
      <city cityName="Neu-Isenburg" countryName="DE" style="--spot-y: 32.75%; --spot-x: 50.5%;"></city>
      <city cityName="Braunschweig" countryName="DE" style="--spot-y: 30.5%; --spot-x: 51%;"></city>
      <city cityName="Dresden" countryName="DE" style="--spot-y: 31.5%; --spot-x: 52%;"></city>
      <city cityName="Ingolstadt" countryName="DE" style="--spot-y: 33%; --spot-x: 51.5%;"></city>
      <city cityName="Bengaluru" countryName="IN" style="--spot-y: 49%; --spot-x: 66.5%;"></city>
      <city cityName="Gurugram" countryName="IN" style="--spot-y: 44%; --spot-x: 66%;"></city>
      <city cityName="Amsterdam" countryName="NL" style="--spot-y: 28.75%; --spot-x: 48%;"></city>
      <city cityName="Eindhoven" countryName="NL" style="--spot-y: 30.25%; --spot-x: 48.75%;"></city>
      <city cityName="Utrecht" countryName="NL" style="--spot-y: 30%; --spot-x: 48%;"></city>
      <city cityName="Singapore" countryName="SG" style="--spot-y: 54%; --spot-x: 72.25%;"></city>
      <city cityName="Stockholm" countryName="SE" style="--spot-y: 28%; --spot-x: 53%;"></city>
      <city cityName="Gothenburg" countryName="SE" style="--spot-y: 27%; --spot-x: 52%;"></city>
      <city cityName="Geneva" countryName="CH" style="--spot-y: 35%; --spot-x: 49.5%;"></city>
      <city cityName="Baden" countryName="CH" style="--spot-y: 34%; --spot-x: 50%;"></city>
      <city cityName="Chernihiv" countryName="UA" style="--spot-y: 32%; --spot-x: 55.75%;"></city>
      <city cityName="Chernivtsi" countryName="UA" style="--spot-y: 35%; --spot-x: 54.5%;"></city>
      <city cityName="Dnipro" countryName="UA" style="--spot-y: 36%; --spot-x: 56.5%;"></city>
      <city cityName="Kharkiv" countryName="UA" style="--spot-y: 35%; --spot-x: 57.5%;"></city>
      <city cityName="Kyiv" countryName="UA" style="--spot-y: 33.5%; --spot-x: 55%;"></city>
      <city cityName="Lviv" countryName="UA" style="--spot-y: 34%; --spot-x: 54%;"></city>
      <city cityName="Bristol" countryName="GB" style="--spot-y: 32.5%; --spot-x: 45.75%;"></city>
      <city cityName="London" countryName="GB" style="--spot-y: 32.5%; --spot-x: 46.5%;"></city>
      <city cityName="Manchester" countryName="GB" style="--spot-y: 31%; --spot-x: 46%;"></city>
      <city cityName="New York" countryName="US" style="--spot-y: 38.75%; --spot-x: 28%;"></city>
      <city cityName="Dallas" countryName="US" style="--spot-y: 41.5%; --spot-x: 20%;"></city>
      <city cityName="Chicago" countryName="US" style="--spot-y: 35.5%; --spot-x: 23.5%;"></city>
      <city cityName="San Diego" countryName="US" style="--spot-y: 42.5%; --spot-x: 13.5%;"></city>
      <city cityName="Boston" countryName="US" style="--spot-y: 36.5%; --spot-x: 29%;"></city>
  </div>
</template>

<script>
import City from "../02_molecules/CityItem";

export default {
    name: 'WorldMap',
    components: {
        City
    },
};
</script>
