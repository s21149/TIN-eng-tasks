
const { Celsius, Kelvin, Fahrenheit } = require("./modules/tempConv");
const { Kilometers, Miles } = require("./modules/distConv");

const celsiusValue = document.getElementById("celsius");
const fahrenheitValue = document.getElementById("fahrenheit");
const kelvinValue = document.getElementById("kelvin");

const mileValue = document.getElementById("miles");
const kilometerValue = document.getElementById("kilometers");

const tempForm = document.getElementById("tempForm");
const distForm = document.getElementById("distForm");

tempForm.addEventListener("submit", (event) => {
  if (celsiusValue.value !== 0) {
    fahrenheitValue.value = Celsius.convertToFahrenheit(celsiusValue.value);
    Kelvin.value = Celsius.convertToKelvin(celsiusValue.value);
  } else if (fahrenheitValue.value !== 0) {
    celsiusValue.value = Fahrenheit.convertToCelsius(fahrenheitValue.value);
    kelvinValue.value = Fahrenheit.convertToKelvin(fahrenheitValue.value);
  } else if (kelvinValue.value !== 0) {
    celsiusValue.value = Kelvin.convertToCelsius(kelvinValue.value);
    fahrenheitValue.value = Kelvin.convertToFahrenheit(kelvinValue.value);
  }
  event.preventDefault();
})

distForm.addEventListener("submit", (event) => {
  if (kilometerValue.value !== 0) {
    mileValue.value = Kilometers.convertToMiles(kilometerValue.value);
  } else if (mileValue.value !== 0) {
    kilometerValue.value = Miles.convertToKilometers(mileValue.value);
  }
  event.preventDefault();
})
