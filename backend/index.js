import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import router from './routes/weather.routes.js'

dotenv.config()

const app = express()
const port = process.env.BACK_PORT || 4444

const corsOriginPorts = process.env.NGINX_PORT ?
  [
    `http://frontend:${process.env.FRONT_PORT}`,
    // `http://localhost:${port}`,
    `http://nginx:${process.env.NGINX_PORT}`,
    // 'https://api.openweathermap.org'
  ] : 
  [
    `http://frontend:${process.env.FRONT_PORT}`,
    `http://localhost:5000`,
    // `http://localhost:${port}`,
    // 'https://api.openweathermap.org'
  ]

console.log(corsOriginPorts)

const corsOptions = {
  origin: corsOriginPorts,
  exposedHeaders: ['Content-Type', 'API-Key', 'Authentication', 'Host', 'User-Agent', 'Accept', 'Accept-Language'],
  // exposedHeaders: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  // optionSuccessStatus: 200,
  // maxAge: 86400,
  // preflightContinue: true,
  credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/', router)

const startServer = () => {
    try {
        app.listen(port, () => {
            console.log(`server in running on port: ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()