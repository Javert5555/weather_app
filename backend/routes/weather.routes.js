import { Router } from 'express'
import weatherCtrl from './../controllers/weather.controller.js'

const router = new Router()

router.route('/weather-api/current-weather')
    .get(weatherCtrl.getCurrentWeather)

router.route('/weather-api/forecast')
    .get(weatherCtrl.getForecast)

export default router