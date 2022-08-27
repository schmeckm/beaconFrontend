const express = require('express')
const { createServer } = require('http')
const PORT = 3001

const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)

const PRODUCTION_URL = 'https://indoor-localization.net/api/'
const ORIGIN_URL = 'http://localhost:3000'

app.get('/api/dbBeacon/getAllBeacons', async (req, res) => {
  try {
    const response = await fetch(`${PRODUCTION_URL}dbBeacon/getAllBeacons`, {
      method: 'GET'
    })

    res.send({ hello: 'hello', response: 'data' })
  } catch (error) {
    console.log(error)
  }
})

// const io = new Server(httpServer, { cors: { origin: ORIGIN_URL } })

// io.on('connection', (socket) => {
//   console.log('I am on connection')
// })

httpServer.listen(PORT)
