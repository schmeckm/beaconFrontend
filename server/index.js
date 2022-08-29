const express = require('express')
const { createServer } = require('http')
const PORT = 3001

const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)

const PRODUCTION_URL = 'https://indoor-localization.net/api/'
const ORIGIN_URL = 'http://localhost:3000/'

const io = new Server(httpServer, { cors: { origin: ORIGIN_URL } })

io.on('connection', (socket) => {
  io.emit('connection', 'Hey, I am connected')
})

app.post('/startFingerPrinting', async (req, res) => {
  try {
    res.send({ hello: 'hello', response: 'data' })
  } catch (error) {
    console.log(error)
  }
})

httpServer.listen(PORT)
