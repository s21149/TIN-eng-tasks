(()=>{var e={268:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Kilometers:()=>n,Miles:()=>o});class n{static convertToMiles(e){return.6*e}}class o{static convertToKilometers(e){return 1.6*e}}},164:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Celsius:()=>n,Kelvin:()=>o,Fahrenheit:()=>l});class n{static convertToKelvin(e){return parseFloat(e)+273.15}static convertToFahrenheit(e){return 9*e/5+32}}class o{static convertToFahrenheit(e){return 1.8*(e-273.15)+32}static convertToCelsius(e){return e-273.15}}class l{static convertToCelsius(e){return(e-32)/1.8}static convertToKelvin(e){return 5*(parseFloat(e)-32)/9+273.15}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{Celsius:e,Kelvin:t,Fahrenheit:n}=r(164),{Kilometers:o,Miles:l}=r(268),a=document.getElementById("celsius"),s=document.getElementById("fahrenheit"),u=document.getElementById("kelvin"),i=document.getElementById("miles"),v=document.getElementById("kilometers"),c=document.getElementById("tempForm"),d=document.getElementById("distForm");c.addEventListener("submit",(r=>{0!==a.value?(s.value=e.convertToFahrenheit(a.value),u.value=e.convertToKelvin(a.value)):0!==s.value?(a.value=n.convertToCelsius(s.value),u.value=n.convertToKelvin(s.value)):0!==u.value&&(a.value=t.convertToCelsius(u.value),s.value=t.convertToFahrenheit(u.value)),r.preventDefault()})),d.addEventListener("submit",(e=>{0!==v.value?i.value=o.convertToMiles(v.value):0!==i.value&&(v.value=l.convertToKilometers(i.value)),e.preventDefault()}))})()})();