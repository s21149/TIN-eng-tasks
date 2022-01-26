
const { Celsius, Kelvin, Fahrenheit } = require("./modules/tempConv");
const { Kilometers, Miles } = require("./modules/distConv");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const mile = document.getElementById("miles");
const kilometer = document.getElementById("kilometers");

celsius.addEventListener('change', event => {
  fahrenheit.value = Celsius.convertToFahrenheit(celsius.value);
  kelvin.value = Celsius.convertToKelvin(celsius.value);
  event.preventDefault();
});

fahrenheit.addEventListener('change', event => {
  celsius.value = Fahrenheit.convertToFahrenheit(fahrenheit.value);
  kelvin.value = Fahrenheit.convertToKelvin(fahrenheit.value);
  event.preventDefault();
});

kelvin.addEventListener('change', event => {
  celsius.value = Kelvin.convertToCelsius(kelvin.value);
  fahrenheit.value = Kelvin.convertToFahrenheit(kelvin.value);
  event.preventDefault();
});

mile.addEventListener('change', event => {
  kilometer.value = Miles.convertToKilometers(mile.value);
  event.preventDefault();
});

kilometer.addEventListener('change', event => {
  mile.value = Kilometers.convertToMiles(kilometer.value);
  event.preventDefault();
});

