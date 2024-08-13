import { Router } from 'express'
import weatherCtrl from './../controllers/weather.controller.js'

const router = new Router()

router.route('/weather-api/forecast')
    .get(weatherCtrl.forecast)

export default router