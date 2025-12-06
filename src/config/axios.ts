import axios from 'axios'

export const searchApi = axios.create({
    baseURL: 'https://geocoding-api.open-meteo.com/v1/'
})

export const forecastApi = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/',
})