const express = require('express')
const { createServer } = require('http')
const PORT = process.env.PORT || 3000

const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)

const ORIGIN_URL = 'http://localhost:8080'

app.get('/dbBeacon/getAllBeacons', (req, res) => {
  console.log(' I am beacons')
})

const io = new Server(httpServer, { cors: { origin: ORIGIN_URL } })

io.on('connection', (socket) => {
  console.log('I am on connection')
})

httpServer.listen(PORT)
