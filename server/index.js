const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { createServer } = require('http')
const PORT = 3001

const { Server } = require('socket.io')

const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: true }))

const httpServer = createServer(app)

const PRODUCTION_URL = 'https://indoor-localization.net/api/'
const ORIGIN_URL = 'http://localhost:3000/'

const io = new Server(httpServer, { cors: { origin: ORIGIN_URL } })

io.on('connection', (socket) => {
  socket.emit('connection', 'Hey, I am connected')
})

app.post('/startFingerPrinting', async (req, res) => {
  const { environment, beaconId, zoneId } = req.body
  console.log(environment, beaconId, zoneId)

  // const response = await fetch({
  //   url: `${PRODUCTION_URL}fingerprint/startFingerPrinting`,
  //   method: 'POST',
  //   body: JSON.stringify({
  //     environment,
  //     beaconId,
  //     zoneId
  //   })
  // })
  // if (response) {
  //   console.log(response)
  // }
  try {
    res.send({ success: true })
  } catch (error) {
    console.log(error)
  }
})

httpServer.listen(PORT)
