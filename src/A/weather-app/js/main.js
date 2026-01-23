/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */
// 🚨 This is code running in the browser.
// 🚨 Do not do this in real life.
// 🚨 It will leak your secrets to anyone who views your website! ☠️
// 🚨 Secrets should be used/processed on the SERVER only!!!
const {VITE_DEFAULT_CITY, VITE_OPEN_WEATHER_API } = import.meta.env;

console.log('Default City:', VITE_DEFAULT_CITY);    // ✅ This is ok
console.log('API Key:', VITE_OPEN_WEATHER_API);     // ❌ NOT OK!

// temp testing code....
import { getCurrentWeather } from './api/open-weather';
import { displayWeather } from './dom/weather';

const [ city, country ] = VITE_DEFAULT_CITY.split(','); // ['Edmonton', 'ca']
getCurrentWeather({
    city,
    country,
    callback: function(data) {
        console.log(data);
        const container = document.querySelector('.weather-display');
        displayWeather(data, container);
    }
});
